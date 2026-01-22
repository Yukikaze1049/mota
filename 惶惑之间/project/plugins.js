var plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1 = 
{
    "init": function () {
		this._afterLoadResources = function () {
			// 本函数将在所有资源加载完毕后，游戏开启前被执行
		}
	},
    "drawLight": function () {

		// 绘制灯光/漆黑层效果。调用方式 core.plugin.drawLight(...)
		// 【参数说明】
		// name：必填，要绘制到的画布名；可以是一个系统画布，或者是个自定义画布；如果不存在则创建
		// color：可选，只能是一个0~1之间的数，为不透明度的值。不填则默认为0.9。
		// lights：可选，一个数组，定义了每个独立的灯光。
		//        其中每一项是三元组 [x,y,r] x和y分别为该灯光的横纵坐标，r为该灯光的半径。
		// lightDec：可选，0到1之间，光从多少百分比才开始衰减（在此范围内保持全亮），不设置默认为0。
		//        比如lightDec为0.5代表，每个灯光部分内圈50%的范围全亮，50%以后才开始快速衰减。
		// 【调用样例】
		// core.plugin.drawLight('curtain'); // 在curtain层绘制全图不透明度0.9，等价于更改画面色调为[0,0,0,0.9]。
		// core.plugin.drawLight('ui', 0.95, [[25,11,46]]); // 在ui层绘制全图不透明度0.95，其中在(25,11)点存在一个半径为46的灯光效果。
		// core.plugin.drawLight('test', 0.2, [[25,11,46,0.1]]); // 创建一个test图层，不透明度0.2，其中在(25,11)点存在一个半径为46的灯光效果，灯光中心不透明度0.1。
		// core.plugin.drawLight('test2', 0.9, [[25,11,46],[105,121,88],[301,221,106]]); // 创建test2图层，且存在三个灯光效果，分别是中心(25,11)半径46，中心(105,121)半径88，中心(301,221)半径106。
		// core.plugin.drawLight('xxx', 0.3, [[25,11,46],[105,121,88,0.2]], 0.4); // 存在两个灯光效果，它们在内圈40%范围内保持全亮，40%后才开始衰减。
		this.drawLight = function (name, color, lights, lightDec) {

			// 清空色调层；也可以修改成其它层比如animate/weather层，或者用自己创建的canvas
			var ctx = core.getContextByName(name);
			if (ctx == null) {
				if (typeof name == 'string')
					ctx = core.createCanvas(name, 0, 0, core._PX_ || core.__PIXELS__, core._PY_ || core.__PIXELS__, 98);
				else return;
			}

			ctx.mozImageSmoothingEnabled = false;
			ctx.webkitImageSmoothingEnabled = false;
			ctx.msImageSmoothingEnabled = false;
			ctx.imageSmoothingEnabled = false;

			core.clearMap(name);
			// 绘制色调层，默认不透明度
			if (color == null) color = 0.9;
			ctx.fillStyle = "rgba(0,0,0," + color + ")";
			ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

			lightDec = core.clamp(lightDec, 0, 1);

			// 绘制每个灯光效果
			ctx.globalCompositeOperation = 'destination-out';
			lights.forEach(function (light) {
				// 坐标，半径，中心不透明度
				var x = light[0],
					y = light[1],
					r = light[2];
				// 计算衰减距离
				var decDistance = parseInt(r * lightDec);
				// 正方形区域的直径和左上角坐标
				var grd = ctx.createRadialGradient(x, y, decDistance, x, y, r);
				grd.addColorStop(0, "rgba(0,0,0,1)");
				grd.addColorStop(1, "rgba(0,0,0,0)");
				ctx.beginPath();
				ctx.fillStyle = grd;
				ctx.arc(x, y, r, 0, 2 * Math.PI);
				ctx.fill();
			});
			ctx.globalCompositeOperation = 'source-over';
			// 可以在任何地方（如afterXXX或自定义脚本事件）调用函数，方法为  core.plugin.xxx();
		}
	},
    "shop": function () {
		// 【全局商店】相关的功能
		// 
		// 打开一个全局商店
		// shopId：要打开的商店id；noRoute：是否不计入录像
		this.openShop = function (shopId, noRoute) {
			var shop = core.status.shops[shopId];
			// Step 1: 检查能否打开此商店
			if (!this.canOpenShop(shopId)) {
				core.drawTip("该商店尚未开启");
				return false;
			}

			// Step 2: （如有必要）记录打开商店的脚本事件
			if (!noRoute) {
				core.status.route.push("shop:" + shopId);
			}

			// Step 3: 检查道具商店 or 公共事件
			if (shop.item) {
				if (core.openItemShop) {
					core.openItemShop(shopId);
				} else {
					core.playSound('操作失败');
					core.insertAction("道具商店插件不存在！请检查是否存在该插件！");
				}
				return;
			}
			if (shop.commonEvent) {
				core.insertCommonEvent(shop.commonEvent, shop.args);
				return;
			}

			_shouldProcessKeyUp = true;

			// Step 4: 执行标准公共商店    
			core.insertAction(this._convertShop(shop));
			return true;
		}

		////// 将一个全局商店转变成可预览的公共事件 //////
		this._convertShop = function (shop) {
			return [
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', 1);}" },
				{
					"type": "while",
					"condition": "true",
					"data": [
						// 检测能否访问该商店
						{
							"type": "if",
							"condition": "core.isShopVisited('" + shop.id + "')",
							"true": [
								// 可以访问，直接插入执行效果
								{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', false) }" },
							],
							"false": [
								// 不能访问的情况下：检测能否预览
								{
									"type": "if",
									"condition": shop.disablePreview,
									"true": [
										// 不可预览，提示并退出
										{ "type": "playSound", "name": "操作失败" },
										"当前无法访问该商店！",
										{ "type": "break" },
									],
									"false": [
										// 可以预览：将商店全部内容进行替换
										{ "type": "tip", "text": "当前处于预览模式，不可购买" },
										{ "type": "function", "function": "function() { core.plugin._convertShop_replaceChoices('" + shop.id + "', true) }" },
									]
								}
							]
						}
					]
				},
				{ "type": "function", "function": "function() {core.addFlag('@temp@shop', -1);}" }
			];
		}

		this._convertShop_replaceChoices = function (shopId, previewMode) {
			var shop = core.status.shops[shopId];
			var choices = (shop.choices || []).filter(function (choice) {
				if (choice.condition == null || choice.condition == '') return true;
				try { return core.calValue(choice.condition); } catch (e) { return true; }
			}).map(function (choice) {
				var ableToBuy = core.calValue(choice.need);
				return {
					"text": choice.text,
					"icon": choice.icon,
					"color": ableToBuy && !previewMode ? choice.color : [153, 153, 153, 1],
					"action": ableToBuy && !previewMode ? [{ "type": "playSound", "name": "商店" }].concat(choice.action) : [
						{ "type": "playSound", "name": "操作失败" },
						{ "type": "tip", "text": previewMode ? "预览模式下不可购买" : "购买条件不足" }
					]
				};
			}).concat({ "text": "离开", "action": [{ "type": "playSound", "name": "取消" }, { "type": "break" }] });
			core.insertAction({ "type": "choices", "text": shop.text, "choices": choices });
		}

		/// 是否访问过某个快捷商店
		this.isShopVisited = function (id) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			return shops[id].visited;
		}

		/// 当前应当显示的快捷商店列表
		this.listShopIds = function () {
			return Object.keys(core.status.shops).filter(function (id) {
				return core.isShopVisited(id) || !core.status.shops[id].mustEnable;
			});
		}

		/// 是否能够打开某个商店
		this.canOpenShop = function (id) {
			if (this.isShopVisited(id)) return true;
			var shop = core.status.shops[id];
			if (shop.item || shop.commonEvent || shop.mustEnable) return false;
			return true;
		}

		/// 启用或禁用某个快捷商店
		this.setShopVisited = function (id, visited) {
			if (!core.hasFlag("__shops__")) core.setFlag("__shops__", {});
			var shops = core.getFlag("__shops__");
			if (!shops[id]) shops[id] = {};
			if (visited) shops[id].visited = true;
			else delete shops[id].visited;
		}

		/// 能否使用快捷商店
		this.canUseQuickShop = function (id) {
			// 如果返回一个字符串，表示不能，字符串为不能使用的提示
			// 返回null代表可以使用

			// 检查当前楼层的canUseQuickShop选项是否为false
			if (core.status.thisMap.canUseQuickShop === false)
				return '当前楼层不能使用快捷商店。';
			return null;
		}

		var _shouldProcessKeyUp = true;

		/// 允许商店X键退出
		core.registerAction('keyUp', 'shops', function (keycode) {
			if (!core.status.lockControl || core.status.event.id != 'action') return false;
			if ((keycode == 13 || keycode == 32) && !_shouldProcessKeyUp) {
				_shouldProcessKeyUp = true;
				return true;
			}

			if (!core.hasFlag("@temp@shop") || core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 88 || keycode == 27) { // X, ESC
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + choices.length - 1);
				return true;
			}
			return false;
		}, 60);

		/// 允许长按空格或回车连续执行操作
		core.registerAction('keyDown', 'shops', function (keycode) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			core.status.onShopLongDown = true;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (keycode == 13 || keycode == 32) { // Space, Enter
				core.actions._clickAction(core._HALF_WIDTH_ || core.__HALF_SIZE__, topIndex + core.status.event.selection);
				_shouldProcessKeyUp = false;
				return true;
			}
			return false;
		}, 60);

		// 允许长按屏幕连续执行操作
		core.registerAction('longClick', 'shops', function (x, y, px, py) {
			if (!core.status.lockControl || !core.hasFlag("@temp@shop") || core.status.event.id != 'action') return false;
			if (core.status.event.data.type != 'choices') return false;
			var data = core.status.event.data.current;
			var choices = data.choices;
			var topIndex = core.actions._getChoicesTopIndex(choices.length);
			if (Math.abs(x - (core._HALF_WIDTH_ || core.__HALF_SIZE__)) <= 2 && y >= topIndex && y < topIndex + choices.length) {
				core.actions._clickAction(x, y);
				return true;
			}
			return false;
		}, 60);
	},
    "removeMap": function () {
		// 高层塔砍层插件，删除后不会存入存档，不可浏览地图也不可飞到。
		// 推荐用法：
		// 对于超高层或分区域塔，当在1区时将2区以后的地图删除；1区结束时恢复2区，进二区时删除1区地图，以此类推
		// 这样可以大幅减少存档空间，以及加快存读档速度

		// 删除楼层
		// core.removeMaps("MT1", "MT300") 删除MT1~MT300之间的全部层
		// core.removeMaps("MT10") 只删除MT10层
		this.removeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__visited__ = flags.__visited__ || {};
			flags.__removed__ = flags.__removed__ || [];
			flags.__disabled__ = flags.__disabled__ || {};
			flags.__leaveLoc__ = flags.__leaveLoc__ || {};
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (core.status.maps[floorId].deleted) continue;
				delete flags.__visited__[floorId];
				flags.__removed__.push(floorId);
				delete flags.__disabled__[floorId];
				delete flags.__leaveLoc__[floorId];
				(core.status.autoEvents || []).forEach(function (event) {
					if (event.floorId == floorId && event.currentFloor) {
						core.autoEventExecuting(event.symbol, false);
						core.autoEventExecuted(event.symbol, false);
					}
				});
				core.status.maps[floorId].deleted = true;
				core.status.maps[floorId].canFlyTo = false;
				core.status.maps[floorId].canFlyFrom = false;
				core.status.maps[floorId].cannotViewMap = true;
			}
		}

		// 恢复楼层
		// core.resumeMaps("MT1", "MT300") 恢复MT1~MT300之间的全部层
		// core.resumeMaps("MT10") 只恢复MT10层
		this.resumeMaps = function (fromId, toId) {
			toId = toId || fromId;
			var fromIndex = core.floorIds.indexOf(fromId),
				toIndex = core.floorIds.indexOf(toId);
			if (toIndex < 0) toIndex = core.floorIds.length - 1;
			flags.__removed__ = flags.__removed__ || [];
			for (var i = fromIndex; i <= toIndex; ++i) {
				var floorId = core.floorIds[i];
				if (!core.status.maps[floorId].deleted) continue;
				flags.__removed__ = flags.__removed__.filter(function (f) { return f != floorId; });
				core.status.maps[floorId] = core.loadFloor(floorId);
			}
		}

		// 分区砍层相关
		var inAnyPartition = function (floorId) {
			var inPartition = false;
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) inPartition = true;
			});
			return inPartition;
		}

		// 分区砍层
		this.autoRemoveMaps = function (floorId) {
			if (main.mode != 'play' || !inAnyPartition(floorId)) return;
			// 根据分区信息自动砍层与恢复
			(core.floorPartitions || []).forEach(function (floor) {
				var fromIndex = core.floorIds.indexOf(floor[0]);
				var toIndex = core.floorIds.indexOf(floor[1]);
				var index = core.floorIds.indexOf(floorId);
				if (fromIndex < 0 || index < 0) return;
				if (toIndex < 0) toIndex = core.floorIds.length - 1;
				if (index >= fromIndex && index <= toIndex) {
					core.resumeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				} else {
					core.removeMaps(core.floorIds[fromIndex], core.floorIds[toIndex]);
				}
			});
		}
	},
    "fiveLayers": function () {
	// 是否启用五图层（增加背景2层和前景2层） 将__enable置为true即会启用；启用后请保存后刷新编辑器
	// 背景层2将会覆盖背景层 被事件层覆盖 前景层2将会覆盖前景层
	// 另外 请注意加入两个新图层 会让大地图的性能降低一些
	// 插件作者：ad
	var __enable = true;
	if (!__enable) return;

	// 创建新图层
	function createCanvas(name, zIndex) {
		if (!name) return;
		var canvas = document.createElement('canvas');
		canvas.id = name;
		canvas.className = 'gameCanvas anti-aliasing';
		// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
		if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
		// 将图层插入进游戏内容
		document.getElementById('gameDraw').appendChild(canvas);
		var ctx = canvas.getContext('2d');
		core.canvas[name] = ctx;
		canvas.width = core._PX_ || core.__PIXELS__;
		canvas.height = core._PY_ || core.__PIXELS__;
		return canvas;
	}

	var bg2Canvas = createCanvas('bg2', 20);
	var fg2Canvas = createCanvas('fg2', 63);
	// 大地图适配
	core.bigmap.canvas = ["bg2", "fg2", "bg", "event", "event2", "fg", "damage"];
	core.initStatus.bg2maps = {};
	core.initStatus.fg2maps = {};

	if (main.mode == 'editor') {
		/*插入编辑器的图层 不做此步新增图层无法在编辑器显示*/
		// 编辑器图层覆盖优先级 eui > efg > fg(前景层) > event2(48*32图块的事件层) > event(事件层) > bg(背景层)
		// 背景层2(bg2) 插入事件层(event)之前(即bg与event之间)
		document.getElementById('mapEdit').insertBefore(bg2Canvas, document.getElementById('event'));
		// 前景层2(fg2) 插入编辑器前景(efg)之前(即fg之后)
		document.getElementById('mapEdit').insertBefore(fg2Canvas, document.getElementById('ebm'));
		// 原本有三个图层 从4开始添加
		var num = 4;
		// 新增图层存入editor.dom中
		editor.dom.bg2c = core.canvas.bg2.canvas;
		editor.dom.bg2Ctx = core.canvas.bg2;
		editor.dom.fg2c = core.canvas.fg2.canvas;
		editor.dom.fg2Ctx = core.canvas.fg2;
		editor.dom.maps.push('bg2map', 'fg2map');
		editor.dom.canvas.push('bg2', 'fg2');

		// 创建编辑器上的按钮
		var createCanvasBtn = function (name) {
			// 电脑端创建按钮
			var input = document.createElement('input');
			// layerMod4/layerMod5
			var id = 'layerMod' + num++;
			// bg2map/fg2map
			var value = name + 'map';
			input.type = 'radio';
			input.name = 'layerMod';
			input.id = id;
			input.value = value;
			editor.dom[id] = input;
			input.onchange = function () {
				editor.uifunctions.setLayerMod(value);
			}
			return input;
		};

		var createCanvasBtn_mobile = function (name) {
			// 手机端往选择列表中添加子选项
			var input = document.createElement('option');
			var id = 'layerMod' + num++;
			var value = name + 'map';
			input.name = 'layerMod';
			input.value = value;
			editor.dom[id] = input;
			return input;
		};
		if (!editor.isMobile) {
			var input = createCanvasBtn('bg2');
			var input2 = createCanvasBtn('fg2');
			// 获取事件层及其父节点
			var child = document.getElementById('layerMod'),
				parent = child.parentNode;
			// 背景层2插入事件层前
			parent.insertBefore(input, child);
			// 不能直接更改背景层2的innerText 所以创建文本节点
			var txt = document.createTextNode('bg2');
			// 插入事件层前(即新插入的背景层2前)
			parent.insertBefore(txt, child);
			// 向最后插入前景层2(即插入前景层后)
			parent.appendChild(input2);
			var txt2 = document.createTextNode('fg2');
			parent.appendChild(txt2);
			parent.childNodes[2].replaceWith("bg");
			parent.childNodes[6].replaceWith("事件");
			parent.childNodes[8].replaceWith("fg");
		} else {
			var input = createCanvasBtn_mobile('bg2');
			var input2 = createCanvasBtn_mobile('fg2');
			// 手机端因为是选项 所以可以直接改innerText
			input.innerText = '背景层2';
			input2.innerText = '前景层2';
			var parent = document.getElementById('layerMod');
			parent.insertBefore(input, parent.children[1]);
			parent.appendChild(input2);
		}
	}

	var _loadFloor_doNotCopy = core.maps._loadFloor_doNotCopy;
	core.maps._loadFloor_doNotCopy = function () {
		return ["bg2map", "fg2map"].concat(_loadFloor_doNotCopy());
	}
	////// 绘制背景和前景层 //////
	core.maps._drawBg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		core.maps._drawBg_drawBackground(floorId, config);
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制背景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'bg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'bg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('bg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'bg2', config);
		if (config.onMap) core.drawImage('bg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	core.maps._drawFg_draw = function (floorId, toDrawCtx, cacheCtx, config) {
		config.ctx = cacheCtx;
		// ------ 调整这两行的顺序来控制是先绘制贴图还是先绘制前景图块；后绘制的覆盖先绘制的。
		core.maps._drawFloorImages(floorId, config.ctx, 'fg', null, null, config.onMap);
		core.maps._drawBgFgMap(floorId, 'fg', config);
		if (config.onMap) {
			core.drawImage(toDrawCtx, cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
			core.clearMap('fg2');
			core.clearMap(cacheCtx);
		}
		core.maps._drawBgFgMap(floorId, 'fg2', config);
		if (config.onMap) core.drawImage('fg2', cacheCtx.canvas, core.bigmap.v2 ? -32 : 0, core.bigmap.v2 ? -32 : 0);
		config.ctx = toDrawCtx;
	}
	////// 移动判定 //////
	core.maps._generateMovableArray_arrays = function (floorId) {
		return {
			bgArray: this.getBgMapArray(floorId),
			fgArray: this.getFgMapArray(floorId),
			eventArray: this.getMapArray(floorId),
			bg2Array: this._getBgFgMapArray('bg2', floorId),
			fg2Array: this._getBgFgMapArray('fg2', floorId)
		};
	}
},
    "itemShop": function () {
		// 道具商店相关的插件
		// 可在全塔属性-全局商店中使用「道具商店」事件块进行编辑（如果找不到可以在入口方块中找）

		var shopId = null; // 当前商店ID
		var type = 0; // 当前正在选中的类型，0买入1卖出
		var selectItem = 0; // 当前正在选中的道具
		var selectCount = 0; // 当前已经选中的数量
		var page = 0;
		var totalPage = 0;
		var totalMoney = 0;
		var list = [];
		var shopInfo = null; // 商店信息
		var choices = []; // 商店选项
		var use = 'money';
		var useText = '金币';

		var bigFont = core.ui._buildFont(20, false),
			middleFont = core.ui._buildFont(18, false);

		this._drawItemShop = function () {
			// 绘制道具商店

			// Step 1: 背景和固定的几个文字
			core.ui._createUIEvent();
			core.clearMap('uievent');
			core.ui.clearUIEventSelector();
			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'top');
			core.fillRect('uievent', 0, 0, 416, 416, 'black');
			core.drawWindowSkin('winskin.png', 'uievent', 0, 0, 416, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 56, 312, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 0, 112, 312, 304);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 56, 104, 56);
			core.drawWindowSkin('winskin.png', 'uievent', 312, 112, 104, 304);
			core.setFillStyle('uievent', 'white');
			core.setStrokeStyle('uievent', 'white');
			core.fillText("uievent", "购买", 32, 74, 'white', bigFont);
			core.fillText("uievent", "卖出", 132, 74);
			core.fillText("uievent", "离开", 232, 74);
			core.fillText("uievent", "当前" + useText, 324, 66, null, middleFont);
			core.setTextAlign("uievent", "right");
			core.fillText("uievent", core.formatBigNumber(core.status.hero[use]), 405, 89);
			core.setTextAlign("uievent", "left");
			core.ui.drawUIEventSelector(1, "winskin.png", 22 + 100 * type, 66, 60, 33);
			if (selectItem != null) {
				core.setTextAlign('uievent', 'center');
				core.fillText("uievent", type == 0 ? "买入个数" : "卖出个数", 364, 320, null, bigFont);
				core.fillText("uievent", "<   " + selectCount + "   >", 364, 350);
				core.fillText("uievent", "确定", 364, 380);
			}

			// Step 2：获得列表并展示
			list = choices.filter(function (one) {
				if (one.condition != null && one.condition != '') {
					try { if (!core.calValue(one.condition)) return false; } catch (e) { }
				}
				return (type == 0 && one.money != null) || (type == 1 && one.sell != null);
			});
			var per_page = 6;
			totalPage = Math.ceil(list.length / per_page);
			page = Math.floor((selectItem || 0) / per_page) + 1;

			// 绘制分页
			if (totalPage > 1) {
				var half = 156;
				core.setTextAlign('uievent', 'center');
				core.fillText('uievent', page + " / " + totalPage, half, 388, null, middleFont);
				if (page > 1) core.fillText('uievent', '上一页', half - 80, 388);
				if (page < totalPage) core.fillText('uievent', '下一页', half + 80, 388);
			}
			core.setTextAlign('uievent', 'left');

			// 绘制每一项
			var start = (page - 1) * per_page;
			for (var i = 0; i < per_page; ++i) {
				var curr = start + i;
				if (curr >= list.length) break;
				var item = list[curr];
				core.drawIcon('uievent', item.id, 10, 125 + i * 40);
				core.setTextAlign('uievent', 'left');
				core.fillText('uievent', core.material.items[item.id].name, 50, 132 + i * 40, null, bigFont);
				core.setTextAlign('uievent', 'right');
				core.fillText('uievent', (type == 0 ? core.calValue(item.money) : core.calValue(item.sell)) + useText + "/个", 300, 133 + i * 40, null, middleFont);
				core.setTextAlign("uievent", "left");
				if (curr == selectItem) {
					// 绘制描述，文字自动放缩
					var text = core.material.items[item.id].text || "该道具暂无描述";
					try { text = core.replaceText(text); } catch (e) { }
					for (var fontSize = 20; fontSize >= 8; fontSize -= 2) {
						var config = { left: 10, fontSize: fontSize, maxWidth: 403 };
						var height = core.getTextContentHeight(text, config);
						if (height <= 50) {
							config.top = (56 - height) / 2;
							core.drawTextContent("uievent", text, config);
							break;
						}
					}
					core.ui.drawUIEventSelector(2, "winskin.png", 8, 120 + i * 40, 295, 40);
					if (type == 0 && item.number != null) {
						core.fillText("uievent", "存货", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", item.number, 406, 132, null, null, 40);
					} else if (type == 1) {
						core.fillText("uievent", "数量", 324, 132, null, bigFont);
						core.setTextAlign("uievent", "right");
						core.fillText("uievent", core.itemCount(item.id), 406, 132, null, null, 40);
					}
					core.setTextAlign("uievent", "left");
					core.fillText("uievent", "预计" + useText, 324, 250);
					core.setTextAlign("uievent", "right");
					totalMoney = selectCount * (type == 0 ? core.calValue(item.money) : core.calValue(item.sell));
					core.fillText("uievent", core.formatBigNumber(totalMoney), 405, 280);

					core.setTextAlign("uievent", "left");
					core.fillText("uievent", type == 0 ? "已购次数" : "已卖次数", 324, 170);
					core.setTextAlign("uievent", "right");
					core.fillText("uievent", (type == 0 ? item.money_count : item.sell_count) || 0, 405, 200);
				}
			}

			core.setTextAlign('uievent', 'left');
			core.setTextBaseline('uievent', 'alphabetic');
		}

		var _add = function (item, delta) {
			if (item == null) return;
			selectCount = core.clamp(
				selectCount + delta, 0,
				Math.min(type == 0 ? Math.floor(core.status.hero[use] / core.calValue(item.money)) : core.itemCount(item.id),
					type == 0 && item.number != null ? item.number : Number.MAX_SAFE_INTEGER)
			);
		}

		var _confirm = function (item) {
			if (item == null || selectCount == 0) return;
			if (type == 0) {
				core.status.hero[use] -= totalMoney;
				core.getItem(item.id, selectCount);
				core.stopSound();
				core.playSound('确定');
				if (item.number != null) item.number -= selectCount;
				item.money_count = (item.money_count || 0) + selectCount;
			} else {
				core.status.hero[use] += totalMoney;
				core.removeItem(item.id, selectCount);
				core.playSound('确定');
				core.drawTip("成功卖出" + selectCount + "个" + core.material.items[item.id].name, item.id);
				if (item.number != null) item.number += selectCount;
				item.sell_count = (item.sell_count || 0) + selectCount;
			}
			selectCount = 0;
		}

		this._performItemShopKeyBoard = function (keycode) {
			var item = list[selectItem] || null;
			// 键盘操作
			switch (keycode) {
				case 38: // up
					if (selectItem == null) break;
					if (selectItem == 0) selectItem = null;
					else selectItem--;
					selectCount = 0;
					break;
				case 37: // left
					if (selectItem == null) {
						if (type > 0) type--;
						break;
					}
					_add(item, -1);
					break;
				case 39: // right
					if (selectItem == null) {
						if (type < 2) type++;
						break;
					}
					_add(item, 1);
					break;
				case 40: // down
					if (selectItem == null) {
						if (list.length > 0) selectItem = 0;
						break;
					}
					if (list.length == 0) break;
					selectItem = Math.min(selectItem + 1, list.length - 1);
					selectCount = 0;
					break;
				case 13:
				case 32: // Enter/Space
					if (selectItem == null) {
						if (type == 2)
							core.insertAction({ "type": "break" });
						else if (list.length > 0)
							selectItem = 0;
						break;
					}
					_confirm(item);
					break;
				case 27: // ESC
					if (selectItem == null) {
						core.insertAction({ "type": "break" });
						break;
					}
					selectItem = null;
					break;
			}
		}

		this._performItemShopClick = function (px, py) {
			var item = list[selectItem] || null;
			// 鼠标操作
			if (px >= 22 && px <= 82 && py >= 71 && py <= 102) {
				// 买
				if (type != 0) {
					type = 0;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 122 && px <= 182 && py >= 71 && py <= 102) {
				// 卖
				if (type != 1) {
					type = 1;
					selectItem = null;
					selectCount = 0;
				}
				return;
			}
			if (px >= 222 && px <= 282 && py >= 71 && py <= 102) // 离开
				return core.insertAction({ "type": "break" });
			// < >
			if (px >= 318 && px <= 341 && py >= 348 && py <= 376)
				return _add(item, -1);
			if (px >= 388 && px <= 416 && py >= 348 && py <= 376)
				return _add(item, 1);
			// 确定
			if (px >= 341 && px <= 387 && py >= 380 && py <= 407)
				return _confirm(item);

			// 上一页/下一页
			if (px >= 45 && px <= 105 && py >= 388) {
				if (page > 1) {
					selectItem -= 6;
					selectCount = 0;
				}
				return;
			}
			if (px >= 208 && px <= 268 && py >= 388) {
				if (page < totalPage) {
					selectItem = Math.min(selectItem + 6, list.length - 1);
					selectCount = 0;
				}
				return;
			}

			// 实际区域
			if (px >= 9 && px <= 300 && py >= 120 && py < 360) {
				if (list.length == 0) return;
				var index = parseInt((py - 120) / 40);
				var newItem = 6 * (page - 1) + index;
				if (newItem >= list.length) newItem = list.length - 1;
				if (newItem != selectItem) {
					selectItem = newItem;
					selectCount = 0;
				}
				return;
			}
		}

		this._performItemShopAction = function () {
			if (flags.type == 0) return this._performItemShopKeyBoard(flags.keycode);
			else return this._performItemShopClick(flags.px, flags.py);
		}

		this.openItemShop = function (itemShopId) {
			shopId = itemShopId;
			type = 0;
			page = 0;
			selectItem = null;
			selectCount = 0;
			core.isShopVisited(itemShopId);
			shopInfo = flags.__shops__[shopId];
			if (shopInfo.choices == null) shopInfo.choices = core.clone(core.status.shops[shopId].choices);
			choices = shopInfo.choices;
			use = core.status.shops[shopId].use;
			if (use != 'exp') use = 'money';
			useText = use == 'money' ? '金币' : '经验';

			core.insertAction([{
				"type": "while",
				"condition": "true",
				"data": [
					{ "type": "function", "function": "function () { core.plugin._drawItemShop(); }" },
					{ "type": "wait" },
					{ "type": "function", "function": "function() { core.plugin._performItemShopAction(); }" }
				]
			},
			{
				"type": "function",
				"function": "function () { core.deleteCanvas('uievent'); core.ui.clearUIEventSelector(); }"
			}
			]);
		}

	},
    "enemyLevel": function () {
		// 此插件将提供怪物手册中的怪物境界显示
		// 使用此插件需要先给每个怪物定义境界，方法如下：
		// 点击怪物的【配置表格】，找到“【怪物】相关的表格配置”，然后在【名称】仿照增加境界定义：
		/*
		 "level": {
			  "_leaf": true,
			  "_type": "textarea",
			  "_string": true,
			  "_data": "境界"
		 },
		 */
		// 然后保存刷新，可以看到怪物的属性定义中出现了【境界】。再开启本插件即可。

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 这里定义每个境界的显示颜色；可以写'red', '#RRGGBB' 或者[r,g,b,a]四元数组
		var levelToColors = {
			"萌新一阶": "red",
			"萌新二阶": "#FF0000",
			"萌新三阶": [255, 0, 0, 1],
		};

		// 复写 _drawBook_drawName
		var originDrawBook = core.ui._drawBook_drawName;
		core.ui._drawBook_drawName = function (index, enemy, top, left, width) {
			// 如果没有境界，则直接调用原始代码绘制
			if (!enemy.level) return originDrawBook.call(core.ui, index, enemy, top, left, width);
			// 存在境界，则额外进行绘制
			core.setTextAlign('ui', 'center');
			if (enemy.specialText.length == 0) {
				core.fillText('ui', enemy.name, left + width / 2,
					top + 27, '#DDDDDD', this._buildFont(17, true));
				core.fillText('ui', enemy.level, left + width / 2,
					top + 51, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
			} else {
				core.fillText('ui', enemy.name, left + width / 2,
					top + 20, '#DDDDDD', this._buildFont(17, true), width);
				switch (enemy.specialText.length) {
					case 1:
						core.fillText('ui', enemy.specialText[0], left + width / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'),
							this._buildFont(14, true), width);
						break;
					case 2:
						// Step 1: 计算字体
						var text = enemy.specialText[0] + "  " + enemy.specialText[1];
						core.setFontForMaxWidth('ui', text, width, this._buildFont(14, true));
						// Step 2: 计算总宽度
						var totalWidth = core.calWidth('ui', text);
						var leftWidth = core.calWidth('ui', enemy.specialText[0]);
						var rightWidth = core.calWidth('ui', enemy.specialText[1]);
						// Step 3: 绘制
						core.fillText('ui', enemy.specialText[0], left + (width + leftWidth - totalWidth) / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[0] || '#FF6A6A'));
						core.fillText('ui', enemy.specialText[1], left + (width + totalWidth - rightWidth) / 2,
							top + 38, core.arrayToRGBA((enemy.specialColor || [])[1] || '#FF6A6A'));
						break;
					default:
						core.fillText('ui', '多属性...', left + width / 2,
							top + 38, '#FF6A6A', this._buildFont(14, true), width);
				}
				core.fillText('ui', enemy.level, left + width / 2,
					top + 56, core.arrayToRGBA(levelToColors[enemy.level] || '#DDDDDD'), this._buildFont(14, true));
			}
		}

		// 也可以复写其他的属性颜色如怪物攻防等，具体参见下面的例子的注释部分
		core.ui._drawBook_drawRow1 = function (index, enemy, top, left, width, position) {
			// 绘制第一行
			core.setTextAlign('ui', 'left');
			var b13 = this._buildFont(13, true),
				f13 = this._buildFont(13, false);
			var col1 = left,
				col2 = left + width * 9 / 25,
				col3 = left + width * 17 / 25;
			core.fillText('ui', '生命', col1, position, '#DDDDDD', f13);
			core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, /*'red' */ null, b13);
			core.fillText('ui', '攻击', col2, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 30, position, /* '#FF0000' */ null, b13);
			core.fillText('ui', '防御', col3, position, null, f13);
			core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 30, position, /* [255, 0, 0, 1] */ null, b13);
		}
	},
    "multiHeros": function () {
	// 多角色插件
	// Step 1: 启用本插件
	// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
	// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

	// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。

	// 在这里定义全部的新角色属性
	// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
	// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
	// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
	var hero1 = {
		"floorId": "MT72", // 该角色初始楼层ID；如果共用楼层可以注释此项
		"image": "yjm.png", // 角色的行走图名称；此项必填不然会报错
		"name": "伊杰明",
		"hp": 3000, // 如果HP共用可注释此项
		'manamax': 200,
		'mana': 200,
		"atk": 220,
		"def": 220,
		"mdef": 0,
		// "money": 0, // 如果要不共用金币则取消此项注释
		// "exp": 0, // 如果要不共用经验则取消此项注释
		"loc": { "x": 2, "y": 7, "direction": "down" }, // 该角色初始位置；如果共用位置可注释此项
		"items": {
			"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
			"constants": { 'book': 1, 'fly': 1, 'I345': 1, 'I346': 1, 'I517': 1, 'I518': 1 }, // 如果不共用永久道具（如手册）可取消注释此项
			"equips": {}, // 如果共用在背包的装备可注释此项
		},
		"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
	};
	// 也可以类似新增其他角色
	// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
	var hero2 = {
		"floorId": "MT82", // 该角色初始楼层ID；如果共用楼层可以注释此项
		"image": "h.png", // 角色的行走图名称；此项必填不然会报错
		"name": "赫",
		"hp": 3000, // 如果HP共用可注释此项
		'manamax': 3,
		'mana': 3,
		"atk": 250,
		"def": 200,
		"mdef": 200,
		// "money": 0, // 如果要不共用金币则取消此项注释
		// "exp": 0, // 如果要不共用经验则取消此项注释
		"loc": { "x": 10, "y": 7, "direction": "down" }, // 该角色初始位置；如果共用位置可注释此项
		"items": {
			"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
			"constants": { 'book': 1, 'fly': 1, 'I519': 1, 'I520': 1, 'I521': 1, 'I518': 1 }, // 如果不共用永久道具（如手册）可取消注释此项
			"equips": {}, // 如果共用在背包的装备可注释此项
		},
		"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
	};

	var heroCount = 3; // 包含默认角色在内总共多少个角色，该值需手动修改。

	this.initHeros = function () {
		core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
		core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

		// 检测是否存在装备
		if (hero1.equipment) {
			if (!hero1.items || !hero1.items.equips) {
				alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
			}
			// 存99号套装为全空
			var saveEquips = core.getFlag("saveEquips", []);
			saveEquips[99] = [];
			core.setFlag("saveEquips", saveEquips);
		} else {
			if (hero1.items && hero1.items.equips) {
				alert('多角色插件的equipment和道具中的equips必须拥有相同状态！');
			}
		}
	}

	// 在游戏开始注入initHeros
	var _startGame_setHard = core.events._startGame_setHard;
	core.events._startGame_setHard = function () {
		_startGame_setHard.call(core.events);
		core.initHeros();
	}

	// 切换角色
	// 可以使用 core.changeHero() 来切换到下一个角色
	// 也可以 core.changeHero(1) 来切换到某个角色（默认角色为0）
	this.changeHero = function (toHeroId) {
		var currHeroId = core.getFlag("heroId", 0); // 获得当前角色ID
		if (toHeroId == null) {
			toHeroId = (currHeroId + 1) % heroCount;
		}
		if (currHeroId == toHeroId) return;

		var saveList = Object.keys(hero1);

		// 保存当前内容
		var toSave = {};
		// 暂时干掉 drawTip 和 音效，避免切装时的提示
		var _drawTip = core.ui.drawTip;
		core.ui.drawTip = function () {};
		var _playSound = core.control.playSound;
		core.control.playSound = function () {}
		// 记录当前录像，因为可能存在换装问题
		core.clearRouteFolding();
		var routeLength = core.status.route.length;
		// 优先判定装备
		if (hero1.equipment) {
			core.items.quickSaveEquip(100 + currHeroId);
			core.items.quickLoadEquip(99);
		}

		saveList.forEach(function (name) {
			if (name == 'floorId') toSave[name] = core.status.floorId; // 楼层单独设置
			else if (name == 'items') {
				toSave.items = core.clone(core.status.hero.items);
				Object.keys(toSave.items).forEach(function (one) {
					if (!hero1.items[one]) delete toSave.items[one];
				});
			} else toSave[name] = core.clone(core.status.hero[name]); // 使用core.clone()来创建新对象
		});

		core.setFlag("hero" + currHeroId, toSave); // 将当前角色信息进行保存
		var data = core.getFlag("hero" + toHeroId); // 获得要切换的角色保存内容

		// 设置角色的属性值
		saveList.forEach(function (name) {
			if (name == "floorId");
			else if (name == "items") {
				Object.keys(core.status.hero.items).forEach(function (one) {
					if (data.items[one]) core.status.hero.items[one] = core.clone(data.items[one]);
				});
			} else {
				core.status.hero[name] = core.clone(data[name]);
			}
		});
		// 最后装上装备
		if (hero1.equipment) {
			core.items.quickLoadEquip(100 + toHeroId);
		}

		core.ui.drawTip = _drawTip;
		core.control.playSound = _playSound;
		core.status.route = core.status.route.slice(0, routeLength);
		core.control._bindRoutePush();

		// 插入事件：改变角色行走图并进行楼层切换
		var toFloorId = data.floorId || core.status.floorId;
		var toLoc = data.loc || core.status.hero.loc;
		core.insertAction([
			{ "type": "setHeroIcon", "name": data.image || "hero.png" }, // 改变行走图
			// 同层则用changePos，不同层则用changeFloor；这是为了避免共用楼层造成触发eachArrive
			toFloorId != core.status.floorId ? {
				"type": "changeFloor",
				"floorId": toFloorId,
				"loc": [toLoc.x, toLoc.y],
				"direction": toLoc.direction,
				"time": 0 // 可以在这里设置切换时间
			} : { "type": "changePos", "loc": [toLoc.x, toLoc.y], "direction": toLoc.direction }
			// 你还可以在这里执行其他事件，比如增加或取消跟随效果
		]);
		core.setFlag("heroId", toHeroId); // 保存切换到的角色ID
	}
},
    "heroFourFrames": function () {
		// 样板的勇士/跟随者移动时只使用2、4两帧，观感较差。本插件可以将四帧全用上。

		// 是否启用本插件
		var __enable = true;
		if (!__enable) return;

		["up", "down", "left", "right"].forEach(function (one) {
			// 指定中间帧动画
			core.material.icons.hero[one].midFoot = 2;
		});

		var heroMoving = function (timestamp) {
			if (core.status.heroMoving <= 0) return;
			if (timestamp - core.animateFrame.moveTime > core.values.moveSpeed) {
				core.animateFrame.leftLeg++;
				core.animateFrame.moveTime = timestamp;
			}
			core.drawHero(['stop', 'leftFoot', 'midFoot', 'rightFoot'][core.animateFrame.leftLeg % 4], 4 * core.status.heroMoving);
		}
		core.registerAnimationFrame('heroMoving', true, heroMoving);

		core.events._eventMoveHero_moving = function (step, moveSteps) {
			var curr = moveSteps[0];
			var direction = curr[0], x = core.getHeroLoc('x'), y = core.getHeroLoc('y');
			// ------ 前进/后退
			var o = direction == 'backward' ? -1 : 1;
			if (direction == 'forward' || direction == 'backward') direction = core.getHeroLoc('direction');
			var faceDirection = direction;
			if (direction == 'leftup' || direction == 'leftdown') faceDirection = 'left';
			if (direction == 'rightup' || direction == 'rightdown') faceDirection = 'right';
			core.setHeroLoc('direction', direction);
			if (curr[1] <= 0) {
				core.setHeroLoc('direction', faceDirection);
				moveSteps.shift();
				return true;
			}
			if (step <= 4) core.drawHero('stop', 4 * o * step);
			else if (step <= 8) core.drawHero('leftFoot', 4 * o * step);
			else if (step <= 12) core.drawHero('midFoot', 4 * o * (step - 8));
			else if (step <= 16) core.drawHero('rightFoot', 4 * o * (step - 8)); // if (step == 8) {
			if (step == 8 || step == 16) {
				core.setHeroLoc('x', x + o * core.utils.scan2[direction].x, true);
				core.setHeroLoc('y', y + o * core.utils.scan2[direction].y, true);
				core.updateFollowers();
				curr[1]--;
				if (curr[1] <= 0) moveSteps.shift();
				core.setHeroLoc('direction', faceDirection);
				return step == 16;
			}
			return false;
		}
	},
    "routeFixing": function () {
		// 是否开启本插件，true 表示启用，false 表示禁用。
		var __enable = true;
		if (!__enable) return;
		/*
		 使用说明：启用本插件后，录像回放时您可以用数字键1或6分别切换到原速或24倍速，
		 暂停播放时按数字键7（电脑按N）可以单步播放。（手机端可以点击难度单词切换出数字键）
		 数字键2-5可以进行录像自助精修，具体描述见下（实际弹窗请求您输入时不要带有任何空格）：
		 
		 up down left right 勇士向某个方向「行走一步或撞击」
		 item:ID 使用某件道具，如 item:bomb 表示使用炸弹
		 unEquip:n 卸掉身上第(n+1)件装备（n从0开始），如 unEquip:1 默认表示卸掉盾牌
		 equip:ID 穿上某件装备，如 equip:sword1 表示装上铁剑
		 saveEquip:n 将身上的当前套装保存到第n套快捷套装（n从0开始）
		 loadEquip:n 快捷换上之前保存好的第n套套装
		 fly:ID 使用楼传飞到某一层，如 fly:MT10 表示飞到主塔10层
		 choices:none 确认框/选择项「超时」（作者未设置超时时间则此项视为缺失）
		 choices:n 确认框/选择项选择第(n+1)项（选择项n从0开始，确认框n为0表示「确定」，1表示「取消」）
		 选择项n为负数时表示选择倒数第 -n 项，如 -1 表示最后一项（V2.8.2起标准全局商店的「离开」项）
		 此项缺失的话，确认框将选择作者指定的默认项（初始光标位置），选择项将弹窗请求补选（后台录像验证中选最后一项，可以复写函数来修改）
		 shop:ID 打开某个全局商店，如 shop:itemShop 表示打开道具商店。因此连载塔千万不要中途修改商店ID！
		 turn 单击勇士（Z键）转身，core.turnHero() 会产生此项，因此通过事件等方式强制让勇士转向应该用 core.setHeroLoc()
		 turn:dir 勇士转向某个方向，dir 可以为 up down left right（此项一般是读取自动存档产生的，属于样板的不良特性，请勿滥用）
		 getNext 轻按获得身边道具，优先获得面前的（面前没有则按上下左右顺序依次获得），身边如果没有道具则此项会被跳过
		 input:none “等待用户操作事件”中超时（作者未设置超时时间则此项会导致报错）
		 input:xxx 可能表示“等待用户操作事件”的一个操作（如按键操作将直接记录 input:keycode ），
		 也可能表示一个“接受用户输入数字”的输入，后者的情况下 xxx 为输入的整数。此项缺失的话前者将直接报错，后者将用0代替（后者现在支持负数了）
		 input2:xxx 可能表示“读取全局存储（core.getGlobal）”读取到的值，也可能表示一个“接受用户输入文本”的输入，
		 两种情况下 xxx 都为 base64 编码。此项缺失的话前者将重新现场读取，后者将用空字符串代替
		 no 走到可穿透的楼梯上不触发楼层切换事件，通过本插件可以让勇士停在旁边没有障碍物的楼梯上哦～
		 move:x:y 尝试瞬移到 [x,y] 点（不改变朝向），该点甚至可以和勇士相邻或者位于视野外
		 key:n 松开键值为n的键，如 key:49 表示松开大键盘数字键1，默认会触发使用破墙镐
		 click:n:px:py 点击自绘状态栏，n为0表示横屏1表示竖屏，[px,py] 为点击的像素坐标
		 random:n 生成了随机数n，即 core.rand2(num) 的返回结果，n必须在 [0,num-1] 范围，num必须为正整数。此项缺失将导致现场重新随机生成数值，可能导致回放结果不一致！
		 作者自定义的新项（一般为js对象，可以先JSON.stringify()再core.encodeBase64()得到纯英文数字的内容）需要用(半角圆括弧)括起来。
		 
		 当您使用数字键5将一些项追加到即将播放内容的开头时，请注意要逆序逐项追加，或者每追加一项就按下数字键7或字母键N单步播放一步。
		 但是【input input2 random choices】是被动读取的，单步播放如果触发了相应的事件就会连续读取，这时候只能提前逐项追加好。
		 电脑端熟练以后推荐直接在控制台操作 core.status.route 和 core.status.replay.toReplay（后者录像回放时才有），配合 core.push() 和 core.unshift() 更加灵活自由哦！
		 */
		core.actions.registerAction('onkeyUp', '_sys_onkeyUp_replay', function (e) {
			if (this._checkReplaying()) {
				if (e.keyCode == 27) // ESCAPE
					core.stopReplay();
				else if (e.keyCode == 90) // Z
					core.speedDownReplay();
				else if (e.keyCode == 67) // C
					core.speedUpReplay();
				else if (e.keyCode == 32) // SPACE
					core.triggerReplay();
				else if (e.keyCode == 65) // A
					core.rewindReplay();
				else if (e.keyCode == 83) // S
					core.control._replay_SL();
				else if (e.keyCode == 88) // X
					core.control._replay_book();
				else if (e.keyCode == 33 || e.keyCode == 34) // PgUp/PgDn
					core.control._replay_viewMap();
				else if (e.keyCode == 78) // N
					core.stepReplay();
				else if (e.keyCode == 84) // T
					core.control._replay_toolbox();
				else if (e.keyCode == 81) // Q
					core.control._replay_equipbox();
				else if (e.keyCode == 66) // B
					core.ui._drawStatistics();
				else if (e.keyCode == 49 || e.keyCode == 54) // 1/6，原速/24倍速播放
					core.setReplaySpeed(e.keyCode == 49 ? 1 : 24);
				else if (e.keyCode > 49 && e.keyCode < 54) { // 2-5，录像精修
					switch (e.keyCode - 48) {
						case 2: // pop
							alert("您已移除已录制内容的最后一项：" + core.status.route.pop());
							break;
						case 3: // push
							core.utils.myprompt("请输入您要追加到已录制内容末尾的项：", "", function (value) {
								if (value != null) core.status.route.push(value);
							});
							break;
						case 4: // shift
							alert("您已移除即将播放内容的第一项：" + core.status.replay.toReplay.shift());
							break;
						case 5: // unshift
							core.utils.myprompt("请输入您要追加到即将播放内容开头的项：", "", function (value) {
								if (value != null) core.status.replay.toReplay.unshift(value);
							});
					}
				}
				return true;
			}
		}, 100);
	},
    "numpad": function () {
	// 样板自带的整数输入事件为白屏弹窗且可以误输入任意非法内容但不支持负整数，观感较差。本插件可以将其美化成仿RM样式，使其支持负整数同时带有音效
	// 另一方面，4399等第三方平台不允许使用包括 core.myprompt() 和 core.myconfirm() 在内的弹窗，因此也需要此插件来替代，不然类似生命魔杖的道具就不好实现了
	// 关于负整数输入，V2.8.2原生支持其录像的压缩和解压，只是默认的 core.events._action_input() 函数将负数取了绝对值，可以只复写下面的 core.isReplaying() 部分来取消

	// 是否启用本插件，false表示禁用，true表示启用
	var __enable = false;
	if (!__enable) return;

	core.events._action_input = function (data, x, y, prefix) { // 复写整数输入事件
		if (core.isReplaying()) { // 录像回放时，处理方式不变，但增加负整数支持
			core.events.__action_getInput(core.replaceText(data.text, prefix), false, function (value) {
				value = parseInt(value) || 0; // 去掉了取绝对值的步骤
				core.status.route.push("input:" + value);
				core.setFlag("input", value);
				core.doAction();
			});
		} else {
			// 正常游戏中，采用暂停录制的方式然后用事件流循环“绘制-等待-变量操作”三板斧实现（按照13*13适配的）。
			// 您可以自行修改循环内的内容来适配15*15或其他需求，或干脆作为公共事件编辑。
			core.insertAction([
				// 记录当前录像长度，下面的循环结束后裁剪。达到“暂停录制”的效果
				{ "type": "function", "function": "function(){flags['@temp@length']=core.status.route.length}" },
				{ "type": "setValue", "name": "flag:input", "value": "0" },
				{
					"type": "while",
					"condition": "true",
					"data": [
						{ "type": "drawBackground", "background": "winskin.png", "x": 16, "y": 16, "width": 384, "height": 384 },
						{ "type": "drawIcon", "id": "X10181", "x": 32, "y": 288 },
						{ "type": "drawIcon", "id": "X10185", "x": 64, "y": 288 },
						{ "type": "drawIcon", "id": "X10186", "x": 96, "y": 288 },
						{ "type": "drawIcon", "id": "X10187", "x": 128, "y": 288 },
						{ "type": "drawIcon", "id": "X10188", "x": 160, "y": 288 },
						{ "type": "drawIcon", "id": "X10189", "x": 192, "y": 288 },
						{ "type": "drawIcon", "id": "X10193", "x": 224, "y": 288 },
						{ "type": "drawIcon", "id": "X10194", "x": 256, "y": 288 },
						{ "type": "drawIcon", "id": "X10195", "x": 288, "y": 288 },
						{ "type": "drawIcon", "id": "X10196", "x": 320, "y": 288 },
						{ "type": "drawIcon", "id": "X10197", "x": 352, "y": 288 },
						{ "type": "drawIcon", "id": "X10286", "x": 32, "y": 352 },
						{ "type": "drawIcon", "id": "X10169", "x": 96, "y": 352 },
						{ "type": "drawIcon", "id": "X10232", "x": 128, "y": 352 },
						{ "type": "drawIcon", "id": "X10185", "x": 320, "y": 352 },
						{ "type": "drawIcon", "id": "X10242", "x": 352, "y": 352 },
						{ "type": "fillBoldText", "x": 48, "y": 256, "style": [255, 255, 255, 1], "font": "bold 32px Consolas", "text": "${flag:input}" },
						{ "type": "fillBoldText", "x": 32, "y": 48, "style": [255, 255, 255, 1], "font": "16px Consolas", "text": core.replaceText(data.text, prefix) },
						{
							"type": "wait",
							"forceChild": true,
							"data": [{
									"case": "keyboard",
									"keycode": "48,49,50,51,52,53,54,55,56,57",
									"action": [
										// 按下数字键，追加到已输入内容的末尾，但禁止越界。变量：keycode-48就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:keycode-48)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:keycode-48)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "189",
									"action": [
										// 按下减号键，变更已输入内容的符号
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "8",
									"action": [
										// 按下退格键，从已输入内容的末尾删除一位
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "27",
									"action": [
										// 按下ESC键，清空已输入内容
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "keyboard",
									"keycode": "13",
									"action": [
										// 按下回车键，确定
										{ "type": "break", "n": 1 },
									]
								},
								{
									"case": "mouse",
									"px": [32, 63],
									"py": [288, 320],
									"action": [
										// 点击减号，变号。右边界写63防止和下面重叠
										{ "type": "playSound", "name": "跳跃" },
										{ "type": "setValue", "name": "flag:input", "value": "-flag:input" },
									]
								},
								{
									"case": "mouse",
									"px": [64, 384],
									"py": [288, 320],
									"action": [
										// 点击数字，追加到已输入内容的末尾，但禁止越界。变量：x-2就是末位数字
										{ "type": "playSound", "name": "光标移动" },
										{
											"type": "if",
											"condition": "(flag:input<0)",
											"true": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input-(flag:x-2)" },
											],
											"false": [
												{ "type": "setValue", "name": "flag:input", "value": "10*flag:input+(flag:x-2)" },
											]
										},
										{ "type": "setValue", "name": "flag:input", "value": "core.clamp(flag:input,-9e15,9e15)" },
									]
								},
								{
									"case": "mouse",
									"px": [32, 64],
									"py": [352, 384],
									"action": [
										// 点击左箭头，退格
										{ "type": "playSound", "name": "取消" },
										{ "type": "setValue", "name": "flag:input", "operator": "//=", "value": "10" },
									]
								},
								{
									"case": "mouse",
									"px": [96, 160],
									"py": [352, 384],
									"action": [
										// 点击CE，清空
										{ "type": "playSound", "name": "读档" },
										{ "type": "setValue", "name": "flag:input", "value": "0" },
									]
								},
								{
									"case": "mouse",
									"px": [320, 384],
									"py": [352, 384],
									"action": [
										// 点击OK，确定
										{ "type": "break", "n": 1 },
									]
								}
							]
						}
					]
				},
				{ "type": "clearMap" },
				// 裁剪录像，只保留'input:n'，然后继续录制
				{ "type": "function", "function": "function(){core.status.route.splice(flags['@temp@length']);core.status.route.push('input:'+core.getFlag('input',0))}" }
			], x, y);
			core.events.doAction();
		}
	}
},
    "sprites": function () {
		// 基于canvas的sprite化，摘编整理自万宁魔塔
		// 
		// ---------------------------------------- 第一部分 js代码 （必装） --------------------------------------- //

		/* ---------------- 用法说明 ---------------- *
		 * 1. 创建sprite: var sprite = new Sprite(x, y, w, h, z, reference, name);
		 *   其中x y w h为画布的横纵坐标及长宽，reference为参考系，只能填game（相对于游戏画面）和window（相对于窗口）
		 *   且当为相对游戏画面时，长宽与坐标将会乘以放缩比例（相当于用createCanvas创建）
		 *   z为纵深，表示不同元素之间的覆盖关系，大的覆盖小的
		 *   name为自定义名称，可以不填
		 * 2. 删除: sprite.destroy();
		 * 3. 设置css特效: sprite.setCss(css);
		 *   其中css直接填 box-shadow: 0px 0px 10px black;的形式即可，与style标签与css文件内写法相同
		 *   对于已设置的特效，如果之后不需要再次设置，可以不填
		 * 4. 添加事件监听器: sprite.addEventListener(); 用法与html元素的addEventListener完全一致
		 * 5. 移除事件监听器: sprite.removeEventListener(); 用法与html元素的removeEventListener完全一致
		 * 6. 属性列表
		 *   (1) sprite.x | sprite.y | sprite.width | sprite.height | sprite.zIndex | sprite.reference 顾名思义
		 *   (2) sprite.canvas 该sprite的画布
		 *   (3) sprite.context 该画布的CanvasRenderingContext2d对象，即样板中常见的ctx
		 *   (4) sprite.count 不要改这个玩意
		 * 7. 使用样板api进行绘制
		 *   示例：
		 *   var ctx = sprite.context;
		 *   core.fillText(ctx, 'xxx', 100, 100);
		 *   core.fillRect(ctx, 0, 0, 50, 50);
		 *   当然也可以使用原生js
		 *   ctx.moveTo(0, 0);
		 *   ctx.bezierCurveTo(50, 50, 100, 0, 100, 50);
		 *   ctx.stroke();
		 * ---------------- 用法说明 ---------------- */

		var count = 0;

		/** 创建一个sprite画布
		 * @param {number} x
		 * @param {number} y
		 * @param {number} w
		 * @param {number} h
		 * @param {number} z
		 * @param {'game' | 'window'} reference 参考系，游戏画面或者窗口
		 * @param {string} name 可选，sprite的名称，方便通过core.dymCanvas获取
		 */
		function Sprite (x, y, w, h, z, reference, name) {
			this.x = x;
			this.y = y;
			this.width = w;
			this.height = h;
			this.zIndex = z;
			this.reference = reference;
			this.canvas = null;
			this.context = null;
			this.count = 0;
			this.name = name || '_sprite_' + count;
			this.style = null;
			/** 初始化 */
			this.init = function () {
				if (reference === 'window') {
					var canvas = document.createElement('canvas');
					this.canvas = canvas;
					this.context = canvas.getContext('2d');
					canvas.width = w;
					canvas.height = h;
					canvas.style.width = w + 'px';
					canvas.style.height = h + 'px';
					canvas.style.position = 'absolute';
					canvas.style.top = y + 'px';
					canvas.style.left = x + 'px';
					canvas.style.zIndex = z.toString();
					document.body.appendChild(canvas);
					this.style = canvas.style;
				} else {
					this.context = core.createCanvas(this.name || '_sprite_' + count, x, y, w, h, z);
					this.canvas = this.context.canvas;
					this.canvas.style.pointerEvents = 'auto';
					this.style = this.canvas.style;
				}
				this.count = count;
				count++;
			}
			this.init();

			/** 设置css特效
			 * @param {string} css
			 */
			this.setCss = function (css) {
				css = css.replace('\n', ';').replace(';;', ';');
				var effects = css.split(';');
				var self = this;
				effects.forEach(function (v) {
					var content = v.split(':');
					var name = content[0];
					var value = content[1];
					name = name.trim().split('-').reduce(function (pre, curr, i, a) {
						if (i === 0 && curr !== '') return curr;
						if (a[0] === '' && i === 1) return curr;
						return pre + curr.toUpperCase()[0] + curr.slice(1);
					}, '');
					var canvas = self.canvas;
					if (name in canvas.style) canvas.style[name] = value;
				});
				return this;
			}

			/** 
			 * 移动sprite
			 * @param {boolean} isDelta 是否是相对位置，如果是，那么sprite会相对于原先的位置进行移动
			 */
			this.move = function (x, y, isDelta) {
				if (x !== undefined && x !== null) this.x = x;
				if (y !== undefined && y !== null) this.y = y;
				if (this.reference === 'window') {
					var ele = this.canvas;
					ele.style.left = x + (isDelta ? parseFloat(ele.style.left) : 0) + 'px';
					ele.style.top = y + (isDelta ? parseFloat(ele.style.top) : 0) + 'px';
				} else core.relocateCanvas(this.context, x, y, isDelta);
				return this;
			}

			/** 
			 * 重新设置sprite的大小
			 * @param {boolean} styleOnly 是否只修改css效果，如果是，那么将会不高清，如果不是，那么会清空画布
			 */
			this.resize = function (w, h, styleOnly) {
				if (w !== undefined && w !== null) this.w = w;
				if (h !== undefined && h !== null) this.h = h;
				if (reference === 'window') {
					var ele = this.canvas;
					ele.style.width = w + 'px';
					ele.style.height = h + 'px';
					if (!styleOnly) {
						ele.width = w;
						ele.height = h;
					}
				} else core.resizeCanvas(this.context, w, h, styleOnly);
				return this;
			}

			/**
			 * 旋转画布
			 */
			this.rotate = function (angle, cx, cy) {
				if (this.reference === 'window') {
					var left = this.x;
					var top = this.y;
					this.canvas.style.transformOrigin = (cx - left) + 'px ' + (cy - top) + 'px';
					if (angle === 0) {
						canvas.style.transform = '';
					} else {
						canvas.style.transform = 'rotate(' + angle + 'deg)';
					}
				} else {
					core.rotateCanvas(this.context, angle, cx, cy);
				}
				return this;
			}

			/**
			 * 清除sprite
			 */
			this.clear = function (x, y, w, h) {
				if (this.reference === 'window') {
					this.context.clearRect(x, y, w, h);
				} else {
					core.clearMap(this.context, x, y, w, h);
				}
				return this;
			}

			/** 删除 */
			this.destroy = function () {
				if (this.reference === 'window') {
					if (this.canvas) document.body.removeChild(this.canvas);
				} else {
					core.deleteCanvas(this.name || '_sprite_' + this.count);
				}
			}

			/** 添加事件监听器 */
			this.addEventListener = function () {
				this.canvas.addEventListener.apply(this.canvas, arguments);
			}

			/** 移除事件监听器 */
			this.removeEventListener = function () {
				this.canvas.removeEventListener.apply(this.canvas, arguments);
			}
		}

		window.Sprite = Sprite;
	},
    "hotReload": function () {
		/* ---------- 功能说明 ---------- *

		1. 当 libs/ main.js index.html 中的任意一个文件被更改后，会自动刷新塔的页面
		2. 修改楼层文件后自动在塔的页面上显示出来，不需要刷新
		3. 修改脚本编辑或插件编写后也能自动更新更改的插件或脚本，但不保证不会出问题（一般都不会有问题的
		4. 修改图块属性、怪物属性等后会自动更新
		5. 当全塔属性被修改时，会自动刷新塔的页面
		6. 样板的 styles.css 被修改后也可以直接显示，不需要刷新
		7. 其余内容修改后不会自动更新也不会刷新

		/* ---------- 使用方式 ---------- *

		1. 前往 https://nodejs.org/en/ 下载node.js的LTS版本（点左边那个绿色按钮）并安装
		2. 将该插件复制到插件编写中
		3. 在造塔群的群文件-魔塔样板·改中找到server.js，下载并放到塔的根目录（与启动服务同一级）
		4. 在该目录下按下shift+鼠标右键（win11只按右键即可），选择在终端打开或在powershell打开
		5. 运行node server.js即可

		*/

		if (main.mode !== 'play' || main.replayChecking) return;

		/**
		 * 发送请求
		 * @param {string} url
		 * @param {string} type
		 * @param {string} data
		 * @returns {Promise<string>}
		 */
		async function post(url, type, data) {
			const xhr = new XMLHttpRequest();
			xhr.open(type, url);
			xhr.send(data);
			const res = await new Promise(res => {
				xhr.onload = e => {
					if (xhr.status !== 200) {
						console.error(`hot reload: http ${xhr.status}`);
						res('@error');
					} else res('success');
				};
				xhr.onerror = e => {
					res('@error');
					console.error(`hot reload: error on connection`);
				};
			});
			if (res === 'success') return xhr.response;
			else return '@error';
		}

		/**
		 * 热重载css
		 * @param {string} data
		 */
		function reloadCss(data) {
			const all = Array.from(document.getElementsByTagName('link'));
			all.forEach(v => {
				if (v.rel !== 'stylesheet') return;
				if (v.href === `http://127.0.0.1:3000/${data}`) {
					v.remove();
					const link = document.createElement('link');
					link.rel = 'stylesheet';
					link.type = 'text/css';
					link.href = data;
					document.head.appendChild(link);
					console.log(`css hot reload: ${data}`);
				}
			});
		}

		/**
		 * 热重载楼层
		 * @param {string} data
		 */
		async function reloadFloor(data) {
			// 首先重新加载main.floors对应的楼层
			await import(`/project/floors/${data}.js?v=${Date.now()}`);
			// 然后写入core.floors并解析
			core.floors[data] = main.floors[data];
			const floor = core.loadFloor(data);
			if (core.isPlaying()) {
				core.status.maps[data] = floor;
				delete core.status.mapBlockObjs[data];
				core.extractBlocks(data);
				if (data === core.status.floorId) {
					core.drawMap(data);
					core.setWeather(
						core.animateFrame.weather.type,
						core.animateFrame.weather.level
					);
				}
				core.updateStatusBar(true, true);
			}
			console.log(`floor hot reload: ${data}`);
		}

		/**
		 * 热重载脚本编辑及插件编写
		 * @param {string} data
		 */
		async function reloadScript(data) {
			if (data === 'plugins') {
				// 插件编写比较好办
				const before = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
				// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
				const script = document.createElement('script');
				script.src = `/project/plugins.js?v=${Date.now()}`;
				document.body.appendChild(script);
				await new Promise(res => {
					script.onload = () => res('success');
				});
				const after = plugins_bb40132b_638b_4a9f_b028_d3fe47acc8d1;
				// 找到差异的函数
				for (const id in before) {
					const fn = before[id];
					if (typeof fn !== 'function') continue;
					if (fn.toString() !== after[id]?.toString()) {
						try {
							core.plugin[id] = after[id];
							core.plugin[id].call(core.plugin);
							core.updateStatusBar(true, true);
							console.log(`plugin hot reload: ${id}`);
						} catch (e) {
							console.error(e);
						}
					}
				}
			} else if (data === 'functions') {
				// 脚本编辑略微麻烦点
				const before = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
				// 这里不能用动态导入，因为动态导入会变成模块，变量就不是全局的了
				const script = document.createElement('script');
				script.src = `/project/functions.js?v=${Date.now()}`;
				document.body.appendChild(script);
				await new Promise(res => {
					script.onload = () => res('success');
				});
				const after = functions_d6ad677b_427a_4623_b50f_a445a3b0ef8a;
				// 找到差异的函数
				for (const mod in before) {
					const fns = before[mod];
					for (const id in fns) {
						const fn = fns[id];
						if (typeof fn !== 'function' || id === 'hasSpecial')
							continue;
						const now = after[mod][id];
						if (fn.toString() !== now.toString()) {
							try {
								if (mod === 'events') {
									core.events.eventdata[id] = now;
								} else if (mod === 'enemys') {
									core.enemys.enemydata[id] = now;
								} else if (mod === 'actions') {
									core.actions.actionsdata[id] = now;
								} else if (mod === 'control') {
									core.control.controldata[id] = now;
								} else if (mod === 'ui') {
									core.ui.uidata[id] = now;
								}
								core.updateStatusBar(true, true);
								console.log(
									`function hot reload: ${mod}.${id}`
								);
							} catch (e) {
								console.error(e);
							}
						}
					}
				}
			}
		}

		/**
		 * 属性热重载，包括全塔属性等
		 * @param {string} data
		 */
		async function reloadData(data) {
			const script = document.createElement('script');
			script.src = `/project/${data}.js?v=${Date.now()}`;
			document.body.appendChild(script);
			await new Promise(res => {
				script.onload = () => res('success');
			});

			let after;
			if (data === 'data')
				after = data_a1e2fb4a_e986_4524_b0da_9b7ba7c0874d;
			if (data === 'enemys')
				after = enemys_fcae963b_31c9_42b4_b48c_bb48d09f3f80;
			if (data === 'icons')
				after = icons_4665ee12_3a1f_44a4_bea3_0fccba634dc1;
			if (data === 'items')
				after = items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a;
			if (data === 'maps')
				after = maps_90f36752_8815_4be8_b32b_d7fad1d0542e;
			if (data === 'events')
				after = events_c12a15a8_c380_4b28_8144_256cba95f760;

			if (data === 'enemys') {
				core.enemys.enemys = after;
				for (var enemyId in after) {
					core.enemys.enemys[enemyId].id = enemyId;
				}
				core.material.enemys = core.getEnemys();
			} else if (data === 'icons') {
				core.icons.icons = after;
				core.material.icons = core.getIcons();
			} else if (data === 'items') {
				core.items.items = after;
				for (var itemId in after) {
					core.items.items[itemId].id = itemId;
				}
				core.material.items = core.getItems();
			} else if (data === 'maps') {
				core.maps.blocksInfo = after;
				core.status.mapBlockObjs = {};
				core.status.number2block = {};
				Object.values(core.status.maps).forEach(v => delete v.blocks);
				core.extractBlocks();
				core.setWeather(
					core.animateFrame.weather.type,
					core.animateFrame.weather.level
				);
				core.drawMap();
			} else if (data === 'events') {
				core.events.commonEvent = after.commonEvent;
			} else if (data === 'data') {
				location.reload();
			}
			core.updateStatusBar(true, true);
			console.log(`data hot reload: ${data}`);
		}

		// 初始化
		(async function () {
			const data = await post('/reload', 'POST', 'test');
			if (data === '@error') {
				console.log(`未检测到node服务，热重载插件将无法使用`);
			} else {
				console.log(`热重载插件加载成功`);
				// reload
				setInterval(async () => {
					const res = await post('/reload', 'POST');
					if (res === '@error') return;
					if (res === 'true') location.reload();
					else return;
				}, 1000);

				// hot reload
				setInterval(async () => {
					const res = await post('/hotReload', 'POST');
					const data = res.split('@@');
					data.forEach(v => {
						if (v === '') return;
						const [type, file] = v.split(':');
						if (type === 'css') reloadCss(file);
						if (type === 'data') reloadData(file);
						if (type === 'floor') reloadFloor(file);
						if (type === 'script') reloadScript(file);
					});
				}, 1000);
			}
		})();
	},
    "xianshi": function () {
	// 在此增加新插件
	/* 宝石血瓶左下角显示数值
	 * 注意！！！不要在道具属性中直接操作flags，使用core.status.hero.flags或core.setFlag系列函数代替！
	 * 需要将 变量：itemDetail改为true才可正常运行
	 * 请尽量减少勇士的属性数量，否则可能会出现严重卡顿（划掉，现在你放一万个属性也不会卡）
	 * 注意：这里的属性必须是core.status.hero里面的，flag无法显示
	 * 如果不想显示，可以core.setFlag("itemDetail", false);
	 * 然后再core.getItemDetail();
	 * 如有bug在大群或造塔群@古祠
	 */

	// 忽略的道具
	const ignore = ['superPotion'];

	// 取消注释下面这句可以减少超大地图的判定。
	// 如果地图宝石过多，可能会略有卡顿，可以尝试取消注释下面这句话来解决。
	//core.bigmap.threshold = 256;
	const origin = core.control.updateStatusBar;
	core.updateStatusBar = core.control.updateStatusBar = function () {
		if (core.getFlag('__statistics__')) return;
		else return origin.apply(core.control, arguments);
	}

	core.control.updateDamage = function (floorId, ctx) {
		floorId = floorId || core.status.floorId;
		if (!floorId || core.status.gameOver || main.mode != 'play') return;
		const onMap = ctx == null;

		// 没有怪物手册
		if (!core.hasItem('book')) return;
		core.status.damage.posX = core.bigmap.posX;
		core.status.damage.posY = core.bigmap.posY;
		if (!onMap) {
			const width = core.floors[floorId].width,
				height = core.floors[floorId].height;
			// 地图过大的缩略图不绘制显伤
			if (width * height > core.bigmap.threshold) return;
		}
		this._updateDamage_damage(floorId, onMap);
		this._updateDamage_extraDamage(floorId, onMap);
		core.getItemDetail(floorId); // 宝石血瓶详细信息
		this.drawDamage(ctx);
	};
	// 获取宝石信息 并绘制
	this.getItemDetail = function (floorId) {
		if (!core.getFlag('itemDetail')) return;
		floorId = floorId ?? core.status.thisMap.floorId;
		let diff = {};
		const before = core.status.hero;
		const hero = core.clone(core.status.hero);
		const handler = {
			set(target, key, v) {
				diff[key] = v - (target[key] || 0);
				if (!diff[key]) diff[key] = void 0;
				return true;
			}
		};
		core.status.hero = new Proxy(hero, handler);
		core.status.maps[floorId].blocks.forEach(function (block) {
			if (
				block.event.cls !== 'items' ||
				ignore.includes(block.event.id) ||
				block.disable
			)
				return;
			const x = block.x,
				y = block.y;
			// v2优化，只绘制范围内的部分
			if (core.bigmap.v2) {
				if (
					x < core.bigmap.posX - core.bigmap.extend ||
					x > core.bigmap.posX + core._WIDTH_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend ||
					y > core.bigmap.posY + core._HEIGHT_ + core.bigmap.extend
				) {
					return;
				}
			}
			diff = {};
			const id = block.event.id;
			const item = core.material.items[id];
			if (item.cls === 'equips') {
				// 装备也显示
				const diff = item.equip.value ?? {};
				const per = item.equip.percentage ?? {};
				for (const name in per) {
					diff[name + 'per'] = per[name].toString() + '%';
				}
				drawItemDetail(diff, x, y);
				return;
			}
			// 跟数据统计原理一样 执行效果 前后比较
			core.setFlag('__statistics__', true);
			try {
				eval(item.itemEffect);
			} catch (error) {}
			drawItemDetail(diff, x, y);
		});
		core.status.hero = before;
		window.hero = before;
		window.flags = before.flags;
	};

	// 绘制
	function drawItemDetail(diff, x, y) {
		const px = 32 * x + 2,
			py = 32 * y + 30;
		let content = '';
		// 获得数据和颜色
		let i = 0;
		for (const name in diff) {
			if (!diff[name]) continue;
			let color = '#fff';

			if (typeof diff[name] === 'number')
				content = core.formatBigNumber(diff[name], true);
			else content = diff[name];
			switch (name) {
			case 'atk':
			case 'atkper':
				color = '#FF7A7A';
				break;
			case 'def':
			case 'defper':
				color = '#00E6F1';
				break;
			case 'mdef':
			case 'mdefper':
				color = '#6EFF83';
				break;
			case 'hp':
				color = '#A4FF00';
				break;
			case 'hpmax':
			case 'hpmaxper':
				color = '#F9FF00';
				break;
			case 'mana':
				color = '#c66';
				break;
			}
			// 绘制
			core.status.damage.data.push({
				text: content,
				px: px,
				py: py - 10 * i,
				color: color
			});
			i++;
		}
	}
},
    "zdzh": function () {
	// 在此增加新插件

	// 请在此手动输入加攻击、防御、护盾的物品的id和增加值
	// 区别在于，宝石的属性的增加值需要乘以地图倍率ratio，剑盾不用
	// 如果想要自动判断，可以参考血瓶宝石显示数据的写法->eval(item.itemEffect)修改本插件
	var itemList = {},
		equipList = { 'sword1': { 'atk': 10 }, 'sword2': { 'atk': 20 }, 'shield1': { 'def': 10 }, 'shield2': { 'def': 20 } },
		keyList = { 'yellowKey': { 'yellowKey': 1 }, 'blueKey': { 'blueKey': 1 }, 'redKey': { 'redKey': 1 }, 'greenKey': { 'greenKey': 1 } },
		walkList = { 'upPortal': 1, 'downPortal': 1, 'leftPortal': 1, 'rightPortal': 1 },
		pointList = { 'atk': 1, 'def': 2, 'mdef': 16, 'hp': 80 };

	var need = [];
	var lvUp = [];

	const maxNum = 40;
	// 怪物列表的最大值，可修改。

	function dp_init() {
		itemList['redGem'] = { 'atk': core.values.redGem };
		itemList['blueGem'] = { 'def': core.values.blueGem };
		itemList['greenGem'] = { 'mdef': core.values.greenGem };
		itemList['yellowGem'] = { 'atk': core.values.redGem, 'def': core.values.blueGem, 'mdef': core.values.greenGem }
		itemList['redPotion'] = { 'hp': 100 };
		itemList['bluePotion'] = { 'hp': core.values.bluePotion };
		itemList['yellowPotion'] = { 'hp': core.values.yellowPotion };
		itemList['greenPotion'] = { 'hp': core.values.greenPotion };
		itemList['I352'] = { 'atk': 1 };
		itemList['I353'] = { 'def': 1 };
		itemList['I354'] = { 'mdef': 5 };
		// 		itemList['I443'] = { 'atk': 2, 'def': 2, 'mdef': 5 };
		// 		itemList['I444'] = { 'atk': 3 };
		// 		itemList['I445'] = { 'def': 3 };
		// 		itemList['I446'] = { 'mdef': 8 };
		// 		itemList['I447'] = { 'atk': 3, 'def': 3, 'mdef': 8 };
		// 		itemList['I448'] = { 'hp': 800 };
		// 		itemList['I449'] = { 'hp': 1000 };
		// 		itemList['I450'] = { 'hp': 2000 };
		// 		itemList['I451'] = { 'hp': 1500 };

		let lvArray = core.firstData.levelUp;
		let n = core.firstData.levelUp.length - 1;
		for (let i = 1; i <= n; i++) {
			// 			console.log(lvArray[i]);
			need.push(~~lvArray[i].need);
			let act = lvArray[i].action;
			let hp = 0,
				atk = 0,
				def = 0,
				mdef = 0;
			for (let x of act) {
				if (x.name === 'status:hp') hp += ~~x.value;
				else if (x.name === 'status:atk') atk += ~~x.value;
				else if (x.name === 'status:def') def += ~~x.value;
				else if (x.name === 'status:mdef') mdef += ~~x.value;
			}
			lvUp.push({ hp: hp, atk: atk, def: def, mdef: mdef });
		}
	}

	class Node {
		constructor(type = 'item', id = '-1', x = 0, y = 0, floorId = 0, hp = 0, atk = 0, def = 0, mdef = 0, exp = 0, yellowKey = 0, blueKey = 0, redKey = 0, greenKey = 0) {
			this.type = type;
			this.id = id;
			this.x = x;
			this.y = y;
			this.floorId = floorId;
			this.hp = hp;
			this.atk = atk;
			this.def = def;
			this.mdef = mdef;
			this.exp = exp;
			this.yellowKey = yellowKey;
			this.blueKey = blueKey;
			this.redKey = redKey;
			this.greenKey = greenKey;
			this.edge = [];
		}
		addedge(target) {
			if (this.edge.indexOf(target) > -1) return;
			this.edge.push(target);
		}
		print(message) {
			console.log(message);
			console.log("type: " + this.type);
			console.log("x: " + this.x);
			console.log("y: " + this.y);
			console.log("floorId: " + this.floorId);
			console.log("edge: " + this.edge);
			console.log("atk: " + this.atk);
			console.log("def: " + this.def);
			console.log("mdef: " + this.mdef);
			console.log("hp: " + this.hp);
		}
	}

	var node = [];
	var visited = {};
	var visFloor = {};
	var cnt = 0;

	function calcFloor(floorId, currfloor) {
		floorId = floorId || currfloor;
		if (floorId == ':before') {
			var index = core.floorIds.indexOf(currfloor);
			if (index > 0) floorId = core.floorIds[index - 1];
			else floorId = currfloor;
		} else if (floorId == ':next') {
			var index = core.floorIds.indexOf(currfloor);
			if (index < core.floorIds.length - 1) floorId = core.floorIds[index + 1];
			else floorId = currfloor;
		} else if (floorId == ':now') {
			floorId = currfloor;
		}
		if (!core.status.maps[floorId]) {
			console.error("不存在的楼层：" + floorId);
			return null;
		}

		return floorId
	}

	function calcLoc(floorId, stair, heroLoc) {
		if (stair) {
			// --- 对称
			if (stair == ':now');
			else if (stair == ':symmetry') {
				heroLoc.x = core.bigmap.width - 1 - heroLoc.x;
				heroLoc.y = core.bigmap.height - 1 - heroLoc.y;
			} else if (stair == ':symmetry_x')
				heroLoc.x = core.bigmap.width - 1 - heroLoc.x;
			else if (stair == ':symmetry_y')
				heroLoc.y = core.bigmap.height - 1 - heroLoc.y;
			// 检查该层地图的 upFloor & downFloor & flyPoint
			else if (core.status.maps[floorId][stair]) {
				heroLoc.x = core.status.maps[floorId][stair][0];
				heroLoc.y = core.status.maps[floorId][stair][1];
			} else {
				core.extractBlocks(floorId);
				var blocks = core.status.maps[floorId].blocks;
				for (var i in blocks) {
					if (!blocks[i].disable && blocks[i].event.id === stair) {
						heroLoc.x = blocks[i].x;
						heroLoc.y = blocks[i].y;
						break;
					}
				}
			}
		}
		['x', 'y', 'direction'].forEach(function (name) {
			if (heroLoc[name] == null)
				heroLoc[name] = core.getHeroLoc(name);
		});
		return heroLoc;
	}

	function bfsFlood(X) {
		node = [];
		visited = {};
		visFloor = {};
		cnt = 0;

		let canMoveArray = {};
		let blocksObj = {};
		let bgMap = {};
		let eventMap = {};
		let floorMap = {};

		for (let xy of X) {
			const now = xy.split(","),
				x = ~~now[0],
				y = ~~now[1],
				floorId = now[2];
			const id = core.getBlockId(x, y, floorId),
				cls = core.getBlockCls(x, y, floorId);
			if (cls === 'enemys' || cls === 'enemy48') {
				visited[xy] = cnt;
				node[cnt++] = new Node('enemy', id, x, y, floorId, 0, 0, 0, 0, 0, 0, 0, 0);
			} else {
				visited[xy] = cnt;
				node[cnt++] = new Node(id, id, x, y, floorId, 0, 0, 0, 0, 0, 0, 0, 0);
			}
		}

		let atk = 0,
			def = 0,
			mdef = 0,
			hp = 0,
			yellowKey = 0,
			blueKey = 0,
			redKey = 0,
			greenKey = 0;

		let canPick = {};

		const blockfn = function (x, y, floorId) {
			const checkBlockInfo = core.status.checkBlock;
			let idx = x + ',' + y;
			let blk = blocksObj[floorId][idx];

			if (blk && !blk.disable && !core.isMapBlockDisabled(floorId, blk.x, blk.y)) {
				const id = blk.event.id,
					ratio = core.status.maps[floorId].ratio;
				if (itemList.hasOwnProperty(id)) {
					if (!((idx + floorId) in canPick)) {
						atk += itemList[id].hasOwnProperty('atk') ? ratio * itemList[id].atk : 0;
						def += itemList[id].hasOwnProperty('def') ? ratio * itemList[id].def : 0;
						mdef += itemList[id].hasOwnProperty('mdef') ? ratio * itemList[id].mdef : 0;
						hp += itemList[id].hasOwnProperty('hp') ? ratio * itemList[id].hp : 0;
						canPick[idx + floorId] = 1;
					}
					return !checkBlockInfo.damage[idx] && !checkBlockInfo.ambush[idx] && !checkBlockInfo.repulse[idx];
				} else if (equipList.hasOwnProperty(id)) {
					if (!((idx + floorId) in canPick)) {
						atk += equipList[id].hasOwnProperty('atk') ? equipList[id].atk : 0;
						def += equipList[id].hasOwnProperty('def') ? equipList[id].def : 0;
						mdef += equipList[id].hasOwnProperty('mdef') ? equipList[id].mdef : 0;
						canPick[idx + floorId] = 1;
					}
					return !checkBlockInfo.damage[idx] && !checkBlockInfo.ambush[idx] && !checkBlockInfo.repulse[idx];
				} else if (keyList.hasOwnProperty(id)) {
					if (!((idx + floorId) in canPick)) {
						yellowKey += keyList[id].hasOwnProperty('yellowKey') ? keyList[id].yellowKey : 0;
						blueKey += keyList[id].hasOwnProperty('blueKey') ? keyList[id].blueKey : 0;
						redKey += keyList[id].hasOwnProperty('redKey') ? keyList[id].redKey : 0;
						greenKey += keyList[id].hasOwnProperty('greenKey') ? keyList[id].greenKey : 0;
						canPick[idx + floorId] = 1;
					}
					return !checkBlockInfo.damage[idx] && !checkBlockInfo.ambush[idx] && !checkBlockInfo.repulse[idx];
				}
			}
			return core.maps._canMoveDirectly_checkNextPoint(blocksObj[floorId], x, y, floorId) || ((x + "," + y) in floorMap[floorId]) || blk.event.id in walkList;
		}

		for (let xy1 of X) {
			const now1 = xy1.split(","),
				x1 = ~~now1[0],
				y1 = ~~now1[1],
				floorId1 = now1[2];
			if (!(floorId1 in visFloor)) {
				visFloor[floorId1] = 1;
				canMoveArray[floorId1] = core.maps.generateMovableArray(floorId1);
				blocksObj[floorId1] = core.maps.getMapBlocksObj(floorId1);
				bgMap[floorId1] = core.maps.getBgMapArray(floorId1);
				eventMap[floorId1] = core.maps.getMapArray(floorId1);
				floorMap[floorId1] = core.floors[floorId1].changeFloor;
			}
			for (let dir in core.utils.scan) {
				// 				console.log(xy1);
				atk = 0,
					def = 0,
					mdef = 0,
					hp = 0,
					yellowKey = 0,
					blueKey = 0,
					redKey = 0,
					greenKey = 0;

				let queue = [];

				const nx = x1 + core.utils.scan[dir].x,
					ny = y1 + core.utils.scan[dir].y,
					nindex = nx + "," + ny + "," + floorId1;
				if (nindex in visited) {
					let u = visited[xy1],
						v = visited[nindex];
					if (u === v) continue;
					node[u].addedge(v);
					node[v].addedge(u);
					continue;
				}
				if (!core.inArray(canMoveArray[floorId1][x1][y1], dir)) continue;
				if (core.onSki(bgMap[floorId1][ny][nx])) continue;
				if (blockfn && !blockfn(nx, ny, floorId1)) continue;
				visited[nindex] = cnt;
				node[cnt] = new Node();
				queue.push(nindex);

				while (queue.length > 0) {
					const xy = queue.shift();
					const now = xy.split(","),
						x = ~~now[0],
						y = ~~now[1],
						floorId = now[2];
					// 					console.log(xy);
					if (!(floorId in visFloor)) {
						visFloor[floorId] = 1;
						canMoveArray[floorId] = core.maps.generateMovableArray(floorId);
						blocksObj[floorId] = core.maps.getMapBlocksObj(floorId);
						bgMap[floorId] = core.maps.getBgMapArray(floorId);
						eventMap[floorId] = core.maps.getMapArray(floorId);
						floorMap[floorId] = core.floors[floorId].changeFloor;
					}
					if ((x + "," + y) in floorMap[floorId]) {
						let now = floorMap[floorId][x + "," + y];
						// 						console.log(now);
						const tfloorId = calcFloor(now.floorId, floorId)
						let txy = calcLoc(tfloorId, now.stair, { x: x, y: y });
						// 						console.log(txy);
						if (now.floorId != ':next' && now.floorId != ':before' && now.floorId != ':now' && 'loc' in now) txy = { x: now.loc[0], y: now.loc[1] };
						const tx = txy.x,
							ty = txy.y,
							nindex = tx + "," + ty + "," + tfloorId;
						// 						console.log(nindex);
						if (nindex in visited) {
							let u = visited[xy],
								v = visited[nindex];
							if (u !== v) {
								node[u].addedge(v);
								node[v].addedge(u);
							}
						} else {
							// 							console.log(xy + " " + nindex);
							visited[nindex] = visited[xy];
							queue.push(nindex);
						}
					}
					for (let direction in core.utils.scan) {
						const nx = x + core.utils.scan[direction].x,
							ny = y + core.utils.scan[direction].y,
							nindex = nx + "," + ny + "," + floorId;
						if (nindex in visited) {
							let u = visited[xy],
								v = visited[nindex];
							if (u === v) continue;
							node[u].addedge(v);
							node[v].addedge(u);
							continue;
						}
						if (!core.inArray(canMoveArray[floorId][x][y], direction)) continue;
						if (core.onSki(bgMap[floorId][ny][nx])) continue;
						if (blockfn && !blockfn(nx, ny, floorId)) continue;
						visited[nindex] = visited[xy];
						queue.push(nindex);
					}
				}

				node[cnt].hp = hp;
				node[cnt].atk = atk;
				node[cnt].def = def;
				node[cnt].mdef = mdef;
				node[cnt].yellowKey = yellowKey;
				node[cnt].blueKey = blueKey;
				node[cnt].redKey = redKey;
				node[cnt].greenKey = greenKey;
				node[cnt].addedge(visited[xy1]);
				node[visited[xy1]].addedge(cnt);
				cnt++;
			}
		}
		// 		console.log("cnt: " + cnt);
		// 		for (let i = 0; i < cnt; i++) node[i].print(i);
		// 		for (let i in visited) {
		// 			console.log(i + " " + visited[i]);
		// 		}
	}

	function findpos(ele, arr) {
		for (let i = 0, l = arr.length; i < l; i++) {
			if (arr[i].x === ele.x && arr[i].y === ele.y && arr[i].floorId === ele.floorId) return i;
		}
		return -1;
	}

	function drawSetting(floorId, ctx) {
		core.createCanvas(ctx, 0, 0, 416, 416, 100);
		core.clearMap(ctx);
		core.drawThumbnail(floorId, null, { ctx: ctx, damage: true, 'centerX': 0, 'centerY': 0 });
		core.setAlpha(ctx, 0.5);
		core.fillText(ctx, '点击选中敌人，↑↓调整楼层，esc/回车确认', 10, 15, 'red', 'bold 14px Verdana');
		core.setAlpha(ctx, 1);
		let enemyList = core.getFlag('enemyList', []);
		let enemyChooseList = core.getFlag('enemyChooseList', []);
		for (let currEnemy of enemyList) {
			if (currEnemy.floorId === floorId) {
				if (findpos(currEnemy, enemyChooseList) != -1) core.strokeRect(ctx, currEnemy.x * 32, currEnemy.y * 32, 32, 32, "orangered");
				else core.strokeRect(ctx, currEnemy.x * 32, currEnemy.y * 32, 32, 32, "chartreuse");
			}
		}
	}

	function drawChoice() {
		core.setFlag('pick_button', '0');
		core.setFlag('enemyList', []);
		core.setFlag('enemyChooseList', []);
		const ctx = 'choose',
			name = 'chooseEnemy';
		let currFloorId = core.status.floorId,
			index;
		drawSetting(currFloorId, ctx);
		return new Promise(function (res) {

			function keyup(keycode) {
				// 处理按键事件
				switch (keycode) {
				case 13:
				case 32:
				case 67: //回车，空格，C键
				case 27: //Esc
					cancel();
					break;
				case 38: // 上
					index = core.floorIds.indexOf(currFloorId);
					if (index < core.floorIds.length - 1) index++;
					currFloorId = core.floorIds[index];
					drawSetting(currFloorId, ctx);
					break;
				case 40: // 下
					index = core.floorIds.indexOf(currFloorId);
					if (index > 0) index--;
					currFloorId = core.floorIds[index];
					drawSetting(currFloorId, ctx);
					break;
				}
			}

			function click(x, y, px, py) {
				// 处理点击事件
				const id = core.getBlockId(x, y, currFloorId),
					cls = core.getBlockCls(x, y, currFloorId);
				if (cls !== 'enemys' && cls !== 'enemy48' && id !== 'yellowDoor' && id !== 'blueDoor' && id !== 'redDoor' && id !== 'greenDoor') {
					core.playSound('error.mp3');
					core.drawTip('错误：该点不是敌人或门');
				} else {
					let enemyList = core.getFlag('enemyList', []);
					let enemyChooseList = core.getFlag('enemyChooseList', []);
					if (enemyList.length > maxNum) {
						core.playSound('error.mp3');
						core.drawTip('错误：目标数量达到上限');
					}
					let currEnemy = { x: x, y: y, id: id, floorId: currFloorId, type: 'enemy' };
					if (cls !== 'enemys' && cls !== 'enemy48') currEnemy.type = id;
					if (findpos(currEnemy, enemyList) == -1) {
						enemyList.push(currEnemy);
						drawSetting(currFloorId, ctx);
					} else if (findpos(currEnemy, enemyChooseList) == -1) {
						enemyChooseList.push(currEnemy);
						drawSetting(currFloorId, ctx);
					} else {
						enemyList.splice(findpos(currEnemy, enemyList), 1);
						enemyChooseList.splice(findpos(currEnemy, enemyChooseList), 1);
						drawSetting(currFloorId, ctx);
					}
				}
			}

			function finish(confirm) {
				// 清除画面，销毁事件监听器
				core.unregisterAction('onclick', name);
				core.unregisterAction('keyUp', name);
				// 等待本次事件处理完全结束
				res(confirm);
			}

			function cancel() {
				core.clearMap(ctx);
				finish(false);
			}

			core.registerAction('ondown', name, click, 100);
			core.registerAction('keyUp', name, keyup, 100);
		});
	}

	this.openChoiceScreen = function () {
		if (core.isReplaying()) return;
		core.setFlag('noOpenMenu', true);
		//禁止Esc打开菜单栏
		core.lockControl();

		drawChoice().then(() => {
			core.unlockControl();
			core.setFlag('noOpenMenu', false);
		});
	}

	function log2(x) {
		return Math.log(x) / Math.log(2);
	}

	var sx = [];
	var op = [];

	function drawAnswer(floorId) {
		if (core.getFlag('pick_button') === '0') return;
		let enemyList = core.getFlag('enemyList', []);
		for (let i = sx.length - 1; i >= 0; i--)
			if (enemyList[sx[i] - 1].floorId === floorId) {
				let tmp = '';
				if (op.length == 0) tmp = '';
				else if (op[i] == 1) tmp = '攻';
				else if (op[i] == 2) tmp = '防';
				else if (op[i] == 3) tmp = '魔';
				else if (op[i] == 4) tmp = '血';
				else tmp = '';
				core.fillText("fg", (sx.length - i) + tmp, enemyList[sx[i] - 1].x * 32 + 8, enemyList[sx[i] - 1].y * 32 + 8, "lime");
			}
	}

	this.drawAnswer = drawAnswer;

	this.getEnemyList = function () {
		var time1 = new Date().getTime();
		core.clearMap("fg")
		let text = '';
		let enemyList = core.getFlag('enemyList', []);

		if (enemyList.length === 0) text = '未选择敌人';
		let tmp = dp();
		let ans = tmp.ans;
		console.log(ans);
		if (ans <= 0) {
			core.insertAction(text);
			core.insertAction("打不过！");
			return;
		}
		core.insertAction(text);
		core.insertAction("计算结果为：" + ans);
		sx = [];
		op = [];
		let resz = tmp.st;
		let j = 0;
		while (resz) {
			sx[j++] = Math.round(log2(resz - pathh[resz]) + 1);
			resz = pathh[resz];
		}
		core.setFlag('pick_button', '1');
		var time2 = new Date().getTime();
		console.log("耗时：" + (time2 - time1) / 1000);
		console.log(sx);
		console.log(enemyList);
		drawAnswer(core.status.floorId);
		// 		core.insertAction("击打的顺序为" + sx);
	}

	function findSingleOne(num) {
		let binary = num.toString(2);
		let count = 0;
		for (let i = 0; i < binary.length; i++) {
			if (binary[i] === '1') {
				count++;
			}
		}
		if (count == 1) {
			return binary.length;
		} else {
			return -1;
		}
	}


	function deci(deciNum) {
		let enemyList = core.getFlag('enemyList', []);
		let binaryNumber = deciNum.toString(2);
		if (binaryNumber.length < enemyList.length) {
			binaryNumber = '0'.repeat(enemyList.length - binaryNumber.length) + binaryNumber;
		}
		return binaryNumber;
	}

	//自动拾取相关函数

	function bfsFlood1(X, s) {
		let atk = 0,
			def = 0,
			mdef = 0,
			hp = 0,
			yellowKey = 0,
			blueKey = 0,
			redKey = 0,
			greenKey = 0;

		const pick = function (x) {
			if (node[x].type !== 'item') return;
			atk += node[x].atk;
			def += node[x].def;
			mdef += node[x].mdef;
			hp += node[x].hp;
			yellowKey += node[x].yellowKey;
			blueKey += node[x].blueKey;
			redKey += node[x].redKey;
			greenKey += node[x].greenKey;
		}

		let visited = {},
			queue = [];
		visited[s] = 1;
		queue.push(s);
		pick(s);

		while (queue.length > 0) {
			let x = queue.shift();
			for (let u of node[x].edge) {
				if (u in visited) continue;
				if (node[u].type === 'item') {
					pick(u);
					visited[u] = 1;
					queue.push(u);
				} else if (X.has(u)) {
					visited[u] = 1;
					queue.push(u);
				}
			}
		}
		return { atk: atk, def: def, mdef: mdef, hp: hp, yellowKey: yellowKey, blueKey: blueKey, redKey: redKey, greenKey: greenKey, canMove: visited };
	}

	var memo = {};

	var pathh = {};

	const doorToKey = { yellowDoor: 'yellowKey', blueDoor: 'blueKey', redDoor: 'redKey', greenDoor: 'greenKey' };

	function dp() {
		let yellowNeed = 0,
			blueNeed = 0,
			redNeed = 0,
			greenNeed = 0;

		const keyCallBack = function (ans) {
			let tmp = ans.split(",");
			yellowNeed = ~~tmp[0];
			blueNeed = ~~tmp[1];
			redNeed = ~~tmp[2];
			greenNeed = ~~tmp[3];
		}

		// 		core.myprompt("请输入需要留的钥匙数（按照黄蓝红绿的顺序用英文逗号分隔）", "0,0,0,0", keyCallBack);

		dp_init();
		memo = {};
		pathh = {};
		let enemyList = core.getFlag('enemyList', []);
		let enemyChooseList = core.getFlag('enemyChooseList', []);
		var n = enemyList.length;
		let m = 0;
		let id = [];
		let set = new Set();
		for (let i = 0; i < n; i++) {
			if (enemyList[i].type === 'enemy' && findpos(enemyList[i], enemyChooseList) != -1) { m++; }
			set.add(enemyList[i].x + "," + enemyList[i].y + "," + enemyList[i].floorId);
		}
		console.log(set);
		bfsFlood(set);
		for (let i = 0; i < n; i++) {
			id[i] = visited[enemyList[i].x + "," + enemyList[i].y + "," + enemyList[i].floorId];
		}
		var s = visited[core.nextX(0) + "," + core.nextY(0) + "," + core.status.floorId];
		let all = Math.pow(2, n) - 1;
		memo[0] = hero.hp;
		pathh[0] = 0;
		var ans = -1;
		var st = 0;
		var step = 1;
		var full = 100;
		for (let X = 0; X <= all; X++) {
			if (!(X in memo)) continue;
			if (X / all >= step / full) {
				console.log(step);
				step++;
			}
			let cnt = 0;
			let set = new Set();
			let keyNow = { yellowKey: core.itemCount('yellowKey'), blueKey: core.itemCount('blueKey'), redKey: core.itemCount('redKey'), greenKey: core.itemCount('greenKey') };
			// 			console.log(keyNow);
			// 			console.log(yellowNeed);
			// 			console.log(blueNeed);
			// 			console.log(redNeed);
			// 			console.log(greenNeed);
			let exp = core.getNextLvUpNeed();
			// 			console.log(exp);
			for (let i = 0; i < n; i++)
				if ((X >> i) & 1) {
					if (enemyList[i].type === 'enemy') exp -= core.material.enemys[enemyList[i].id].exp;
					set.add(id[i]);
					if (enemyList[i].type !== 'enemy') keyNow[doorToKey[enemyList[i].type]]--;
					else if (findpos(enemyList[i], enemyChooseList) != -1) cnt++;
				}
			// 			console.log(exp);
			let result = bfsFlood1(set, s);
			let lv = hero.lv - 1;
			while (exp <= 0 && lv < need.length) {
				exp += need[lv];
				let tmp = lvUp[lv];
				result.hp += tmp.hp;
				result.atk += tmp.atk;
				result.def += tmp.def;
				result.mdef += tmp.mdef;
				lv++;
			}
			// 			console.log(X);
			// 			console.log(exp);
			if (cnt >= m) {
				if (memo[X] + result.hp > ans) {
					ans = memo[X] + result.hp;
					st = X;
				}
				continue;
			}
			let canMove = result.canMove;
			// 			console.log(X);
			// 			console.log(canMove);
			let atkk = hero.atk + result.atk;
			let deff = hero.def + result.def;
			let mdeff = hero.mdef + result.mdef;
			keyNow.yellowKey += result.yellowKey;
			keyNow.blueKey += result.blueKey;
			keyNow.redKey += result.redKey;
			keyNow.greenKey += result.greenKey;
			// 			console.log(keyNow.yellowKey);
			// 			console.log(keyNow.blueKey);
			// 			console.log(result.yellowKey);
			// 			console.log(result.blueKey);
			for (let i = 0; i < n; i++) {
				if (!((X >> i) & 1)) {
					let num = 0;
					let flag = 1;
					let x = id[i];
					for (let u of node[x].edge) {
						if (u in canMove) {
							flag = 0;
							num++;
						}
					}
					if (flag == 1) continue;
					let Y = X ^ (1 << i);
					if (enemyList[i].type === 'enemy') {
						if (core.getDamageInfo(enemyList[i].id, { hp: memo[X], atk: atkk, def: deff, mdef: mdeff }) === null) continue;
						let hpp = memo[X] - core.getDamageInfo(enemyList[i].id, { hp: memo[X], atk: atkk, def: deff, mdef: mdeff }).damage;
						if (hpp + result.hp <= 0) continue;
						// 						console.log(core.getDamageInfo(enemyList[i].id, { hp: memo[X], atk: atkk, def: deff, mdef: mdeff }).damage);
						if (!(Y in memo)) {
							memo[Y] = hpp;
							pathh[Y] = X;
						} else if (hpp > memo[Y]) {
							memo[Y] = hpp;
							pathh[Y] = X;
						}
					} else {
						let hpp = memo[X];
						if (keyNow[doorToKey[enemyList[i].type]] <= 0 || num == node[x].length) continue;
						if (!(Y in memo)) {
							memo[Y] = hpp;
							pathh[Y] = X;
						} else if (hpp > memo[Y]) {
							memo[Y] = hpp;
							pathh[Y] = X;
						}
					}
				}
			}
		}
		return { ans: ans, st: st };
	}

	//加点

	var option = {};

	this.getEnemyList2 = function () {
		var time1 = new Date().getTime();
		core.clearMap("fg")
		let text = '';
		let enemyList = core.getFlag('enemyList', []);

		if (enemyList.length === 0) text = '未选择敌人';
		let tmp = dp2();
		let ans = tmp.ans;
		console.log(ans);
		if (ans <= 0) {
			core.insertAction(text);
			core.insertAction("打不过！");
			return;
		}
		core.insertAction(text);
		core.insertAction("计算结果为：" + ans);
		sx = [];
		op = [];
		let resz = tmp.st;
		let j = 0;
		while (resz != '0,0,0,0') {
			let ss = ~~resz.split(",")[0],
				tt = ~~pathh[resz].split(",")[0];
			op[j] = option[resz];
			sx[j++] = Math.round(log2(ss - tt) + 1);
			resz = pathh[resz];
		}
		core.setFlag('pick_button', '1');
		var time2 = new Date().getTime();
		console.log("耗时：" + (time2 - time1) / 1000);
		console.log(sx);
		console.log(enemyList);
		drawAnswer(core.status.floorId);
		// 		core.insertAction("击打的顺序为" + sx);
	}

	function __gcd(a, b) {
		if (b == 0) return a;
		else return __gcd(b, a % b);
	}

	function dp2() {
		dp_init();
		memo = {};
		pathh = {};
		option = {};
		let enemyList = core.getFlag('enemyList', []);
		let enemyChooseList = core.getFlag('enemyChooseList', []);
		var n = enemyList.length;
		let m = 0;
		let id = [];
		let set = new Set();
		let gcd = 0;
		for (let i = 0; i < n; i++) {
			if (enemyList[i].type === 'enemy' && findpos(enemyList[i], enemyChooseList) != -1) { m++; }
			set.add(enemyList[i].x + "," + enemyList[i].y + "," + enemyList[i].floorId);
			if (enemyList[i].type !== 'enemy') continue;
			let num = core.material.enemys[enemyList[i].id].point;
			if (num == 0) continue;
			if (gcd == 0) gcd = num;
			else gcd = __gcd(gcd, num);
		}
		console.log(set);
		bfsFlood(set);
		for (let i = 0; i < n; i++) {
			id[i] = visited[enemyList[i].x + "," + enemyList[i].y + "," + enemyList[i].floorId];
		}
		var s = visited[core.nextX(0) + "," + core.nextY(0) + "," + core.status.floorId];
		let all = Math.pow(2, n) - 1;
		memo['0,0,0,0'] = hero.hp;
		pathh['0,0,0,0'] = '0,0,0,0';
		var ans = -1;
		var st = 0;
		var step = 1;
		var full = 100;
		for (let S = 0; S <= all; S++) {
			if (S / all >= step / full) {
				console.log(step);
				step++;
			}
			let cnt = 0;
			let set = new Set();
			let keyNow = { yellowKey: core.itemCount('yellowKey'), blueKey: core.itemCount('blueKey'), redKey: core.itemCount('redKey'), greenKey: core.itemCount('greenKey') };
			let exp = core.getNextLvUpNeed();
			let sum = 0;
			for (let i = 0; i < n; i++)
				if ((S >> i) & 1) {
					if (enemyList[i].type === 'enemy') {
						exp -= core.material.enemys[enemyList[i].id].exp;
						sum += core.material.enemys[enemyList[i].id].point;
					}
					set.add(id[i]);
					if (enemyList[i].type !== 'enemy') keyNow[doorToKey[enemyList[i].type]]--;
					else if (findpos(enemyList[i], enemyChooseList) != -1) cnt++;
				}
			let mxpoint = sum / gcd;
			let result = bfsFlood1(set, s);
			let lv = hero.lv - 1;
			while (exp <= 0 && lv < need.length) {
				exp += need[lv];
				let tmp = lvUp[lv];
				result.hp += tmp.hp;
				result.atk += tmp.atk;
				result.def += tmp.def;
				result.mdef += tmp.mdef;
				lv++;
			}
			let canMove = result.canMove;
			let atkk = hero.atk + result.atk;
			let deff = hero.def + result.def;
			let mdeff = hero.mdef + result.mdef;
			keyNow.yellowKey += result.yellowKey;
			keyNow.blueKey += result.blueKey;
			keyNow.redKey += result.redKey;
			keyNow.greenKey += result.greenKey;
			for (let A = 0; A <= mxpoint; A++) {
				for (let B = 0; A + B <= mxpoint; B++) {
					for (let C = 0; A + B + C <= mxpoint; C++) {
						let X = S + "," + A + "," + B + "," + C;
						if (!(X in memo)) continue;
						if (cnt >= m) {
							if (memo[X] + result.hp > ans) {
								ans = memo[X] + result.hp;
								st = X;
							}
							continue;
						}
						for (let i = 0; i < n; i++) {
							if (!((S >> i) & 1)) {
								let num = 0;
								let flag = 1;
								let x = id[i];
								for (let u of node[x].edge) {
									if (u in canMove) {
										flag = 0;
										num++;
									}
								}
								if (flag == 1) continue;
								let S1 = S ^ (1 << i);
								for (let k = 0; k < 4; k++) {
									let a = A,
										b = B,
										c = C;
									let hpp = memo[X];
									if (enemyList[i].type === 'enemy') {
										let point = core.material.enemys[enemyList[i].id].point / gcd;
										if (core.getDamageInfo(enemyList[i].id, { hp: hpp, atk: atkk + a * gcd * pointList.atk, def: deff + b * gcd * pointList.def, mdef: mdeff + c * gcd * pointList.mdef }) === null) continue;
										hpp -= core.getDamageInfo(enemyList[i].id, { hp: hpp, atk: atkk + a * gcd * pointList.atk, def: deff + b * gcd * pointList.def, mdef: mdeff + c * gcd * pointList.mdef }).damage;
										if (hpp + result.hp <= 0) continue;
										if (k == 0) a += point;
										else if (k == 1) b += point;
										else if (k == 2) c += point;
										else hpp += point * gcd * pointList.hp;
										let Y = S1 + "," + a + "," + b + "," + c;
										if (!(Y in memo)) {
											memo[Y] = hpp;
											pathh[Y] = X;
											option[Y] = k + 1;
										} else if (hpp > memo[Y]) {
											memo[Y] = hpp;
											pathh[Y] = X;
											option[Y] = k + 1;
										}
									} else if (k == 0) {
										if (keyNow[doorToKey[enemyList[i].type]] <= 0 || num == node[x].length) continue;
										let Y = S1 + "," + a + "," + b + "," + c;
										if (!(Y in memo)) {
											memo[Y] = hpp;
											pathh[Y] = X;
											option[Y] = 0;
										} else if (hpp > memo[Y]) {
											memo[Y] = hpp;
											pathh[Y] = X;
											option[Y] = 0;
										}
									}
								}
							}
						}
					}
				}
			}
		}
		return { ans: ans, st: st };
	}
},
    "zdqz": function () {
	// 调用方法：在合适的位置调用函数figureEquip即可，例如在脚本编辑-按键处理加入case 89: core.plugin.figureEquip(); break;
	// 即按Y键进入切装模式

	let compareMode = false;
	let equipStatus = [];
	let equipIncluded;

	////// 请在[]中填好不参与换装的装备孔的序号。
	// 例如，0号，4号装备孔不参与换装，则 ignoreList 应设为[0,4]
	// 所有装备孔都参与换装，则 ignoreList 应设为[]
	let ignoreList = [];

	////// 请在{}中根据装备的穿脱事件手动填写装备穿脱时要执行的函数，没有则不填。只填写有效的数值变化即可。
	// 例如:{'sword3':{'equip':function(){core.setFlag('mms3',1);},'unequip':function(){core.setFlag('mms3',0);}}}
	let equipEvents = {};

	function compareEquip() {

		return new Promise(function (res) {

			const canvas = 'compareEquip',
				width = core._PX_ || core.__PIXELS__,
				height = core._PY_ || core.__PIXELS__;

			core.lockControl();

			function finish() {
				compareMode = false;
				core.unregisterAction('onclick', 'bestEquip');
				core.deleteCanvas(canvas);
				res();
			}

			core.createCanvas(canvas, 0, 0, width, height, 160);
			core.setTextAlign(canvas, 'center');
			core.fillText(canvas, '点击选择一个怪物,点击非怪物图块自动退出', width / 2, 20, 'white', '18px Arial');

			core.registerAction('onclick', 'bestEquip', function (x, y, px, py) {
				const cls = core.getBlockCls(x, y),
					id = core.getBlockId(x, y);
				if (!(cls === 'enemys' || cls === "enemy48")) {
					finish();
					return false;
				}
				figureBestEquip(id, x, y);
				core.updateDamage();
				finish();
			}, 100);
		})
	}

	function figureBestEquip(id, x, y) {
		compareMode = true;
		const equipNum = core.status.globalAttribute.equipName.length; // 装备总数量

		// 角色初始各项数值，用于推算出最优切装后复原初始状态
		const oriEffect = {
			'value': { 'atk': core.status.hero.atk, 'def': core.status.hero.def, 'mdef': core.status.hero.mdef, },
			'percentage': { 'atk': core.getBuff('atk'), 'def': core.getBuff('def'), 'mdef': core.getBuff('mdef'), },
			'equipment': core.clone(core.status.hero.equipment),
		}

		if (!equipIncluded) equipIncluded = getEquipIncluded(equipNum);

		const equipIncludedNum = equipIncluded.length;
		const equipNameList = core.status.globalAttribute.equipName.filter((ele, i) => { return !ignoreList.includes(i); });

		equipStatus = equipIncluded.map((ele) => core.getEquip(ele)); //当前参与计算的各个装备孔的装备
		const equipOwned = getEquipOwned(equipNum);
		let equipList = getEquipList(equipIncludedNum, equipOwned, equipNameList);

		const equipCombination = traverseSetCombinations(equipList);

		const bestCombination = findBestEquipComb(equipCombination, equipOwned, id, x, y);

		['atk', 'def', 'mdef'].forEach((ele) => {
			core.setStatus(ele, oriEffect.value[ele]);
			core.setBuff(ele, oriEffect.percentage[ele]);
		});
		core.status.hero.equipment = core.clone(oriEffect.equipment);

		equipBestComb(bestCombination, equipIncluded, equipNameList);
	}

	// 返回一个包含所有参与切装计算的装备孔的序号的数组。
	// 例如，0，2，4号装备孔参与切装计算，则本函数返回[0,2,4]
	function getEquipIncluded(equipNum) {
		let equipIncluded = [];
		for (let i = 0; i < equipNum; i++) {
			if (!ignoreList.includes(i)) equipIncluded.push(i);
		}
		return equipIncluded;
	}

	function getEquipOwned(equipNum) {
		// equipOwned:当前拥有的所有装备的数量
		// 形如{sword1: 2, sword2: 1}
		let equipOwned = core.clone(core.status.hero.items.equips);
		for (let i = 0; i < equipNum; i++) {
			if (ignoreList.includes(i)) continue;
			const currEquip = core.getEquip(i);
			if (currEquip !== null)
				if (equipOwned.hasOwnProperty(currEquip)) equipOwned[currEquip]++;
				else equipOwned[currEquip] = 1;
		}
		return equipOwned;
	}

	// 生成切装列表，为一个二维数组
	function getEquipList(equipNum, equipOwned, equipNameList) {
		// equipNameList:计入切装计算的装备格子的名称列表，可重复
		// 形如['武器', '武器', '盾牌']
		let equipList = Array(equipNameList.length).fill().map(() => new Set([null]));

		//对每个装备孔展开
		for (let i = 0, l = equipNameList.length; i < l; i++) {
			for (let j in equipOwned) {
				let equipType = core.material.items[j].equip.type;
				switch (typeof equipType) {
				case 'number':
					for (let k = 0, l = equipOwned[j]; k < l; k++) { equipList[equipIncluded.indexOf(equipType)].add(j); }
					break;
				case 'string':
					if (equipType === equipNameList[i])
						for (let k = 0, l = equipOwned[j]; k < l; k++) { equipList[i].add(j); }
					break;
				}
			}
		}
		return equipList;
	}

	function traverseSetCombinations(arr) {
		const result = []; // 用于存储所有组合
		const currentCombination = []; // 当前组合

		function backtrack(index) {
			if (index === arr.length) {
				// 当达到最深层时，将当前组合存储到结果中
				result.push([...currentCombination]);
				return;
			}

			// 动态获取当前 Set 对象的值
			const currentSet = Array.from(arr[index]);

			// 遍历当前 Set 的每个元素
			for (let value of currentSet) {
				currentCombination[index] = value; // 选择当前 Set 的一个元素
				backtrack(index + 1); // 递归调用，继续选择下一个 Set 的元素
			}
		}

		backtrack(0); // 从第一个 Set 开始
		return result; // 返回所有组合
	}

	function getEleCount(ele, arr) {
		let count = 0;
		for (let i = 0, l = arr.length; i < l; i++) {
			if (arr[i] === ele) count++;
		}
		return count;
	}

	function hasEnoughEquip(currComb, equipOwned) {
		for (let i in equipOwned) {
			const equipNeed = getEleCount(i, currComb);
			if (equipOwned[i] < equipNeed) return false;
		}
		return true;
	}

	// 按照给定的列表aimStatus，形如['sword1','sword2',null,'sword1'],修改equipStatus进行模拟切装
	function simulateEquip(equipStatus, aimStatus) {
		equipIncluded.forEach((ele, i) => { core.status.hero.equipment[ele] = aimStatus[i]; })
		for (let i = 0, l = equipStatus.length; i < l; i++) {
			if (equipStatus[i] !== aimStatus[i]) {
				if (aimStatus[i] === null) {
					const unequipId = equipStatus[i];
					if (equipEvents.hasOwnProperty(unequipId) &&
						equipEvents[unequipId].hasOwnProperty('unequip'))
						equipEvents[unequipId].unequip();
					core.items._loadEquipEffect(null, unequipId);
				} else {
					const equipId = aimStatus[i];
					if (equipEvents.hasOwnProperty(equipId) &&
						equipEvents[equipId].hasOwnProperty('equip'))
						equipEvents[equipId].equip();
					core.items._loadEquipEffect(equipId, equipStatus[i]);
				}
				equipStatus[i] = aimStatus[i];
			}
		}
	}

	function findBestEquipComb(equipCombination, equipOwned, id, x, y) {
		let minDamage = core.getDamage(id, x, y),
			bestCombination = core.clone(equipStatus);
		for (let i = 0, l = equipCombination.length; i < l; i++) {
			const currComb = equipCombination[i];
			if (!hasEnoughEquip(currComb, equipOwned)) continue;
			simulateEquip(equipStatus, currComb);
			let damage = core.getDamage(id, x, y);
			if (damage !== null && (minDamage === null || damage < minDamage)) {
				minDamage = damage;
				bestCombination = core.clone(equipStatus);
			}
		}
		return bestCombination;
	}

	function equipBestComb(bestCombination, equipIncluded, equipNameList) {
		const duplicatedName = new Set([]),
			name = core.status.globalAttribute.equipName;

		// 脱下重复装备
		equipNameList.forEach((ele) => {
			if (getEleCount(ele, equipNameList) > 1) duplicatedName.add(ele);
		})
		equipIncluded.forEach((ele) => {
			if (duplicatedName.has(name[ele]) && core.getEquip(ele) !== null) {
				core.unloadEquip(ele);
				core.status.route.push("unEquip:" + ele.toString());
			}
		})

		for (let i = 0, l = bestCombination.length; i < l; i++) {
			const currEquip = bestCombination[i],
				pos = equipIncluded[i];
			if (core.getEquip(pos) === currEquip) continue;
			else if (currEquip === null) {
				core.unloadEquip(pos);
				core.status.route.push("unEquip:" + pos.toString());
			} else {
				core.loadEquip(currEquip);
				core.status.route.push("equip:" + currEquip.toString());
			}
		}
	}

	this.figureEquip = function () {
		compareEquip().then(function (confirm) {
			core.unlockControl();
		})
	}

},
    "biaoti": function () {


	var start = document.getElementById('startPanel');
	var list = [];
	var id = 0;
	/*
		// 标题
		var title = document.getElementById('startTitle');
		core.registerResize('startTitle', function () {
			title.style.width = 300 * core.domStyle.scale + 'px';
			title.style.height = 187 * core.domStyle.scale + 'px';
		});
	*/

	// 星星动画，使用sprite化方法
	function draw() {
		if (start.style.display === 'none') return;
		// 每帧有10%的概率出
		if (Math.random() < 0.2) {
			var config = {
				x: Math.random() * 900 * core.domStyle.scale,
				y: 1 * core.domStyle.scale,
				id: id++
			};
			if (id > 100) id -= 100;
			list.push(config);
			// 追加新的ele
			var img = document.createElement('img');
			img.src = './project/images/Title_starlong.png';
			img.style.position = 'absolute';
			img.style.zIndex = '280';
			img.style.left = config.x + 'px';
			img.style.top = '0px';
			img.style.transform = 'scale(' + core.domStyle.scale * 100 + '%)'
			img.id = id + '_star';
			list[list.length - 1].ele = img;
			start.appendChild(img);
		}
		update();
	}

	// 每帧更新动画
	function update() {
		for (var i = 0; i < list.length; i++) {
			// 一定要匀速运动
			var one = list[i];
			if (one.x < -154 * core.domStyle.scale) {
				list.splice(i, 1);
				i--;
				one.ele.remove();
				continue;
			}
			one.x -= 3 * core.domStyle.scale;
			one.y += 3 * core.domStyle.scale;
			one.ele.style.top = one.y + 'px';
			one.ele.style.left = one.x + 'px';
		}
	}
	core.registerAnimationFrame('startAnimation', false, draw);
}
}