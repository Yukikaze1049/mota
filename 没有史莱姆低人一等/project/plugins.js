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
		canvas.className = 'gameCanvas';
		// 编辑器模式下设置zIndex会导致加入的图层覆盖优先级过高
		if (main.mode != "editor") canvas.style.zIndex = zIndex || 0;
		// 将图层插入进游戏内容
		document.getElementById('gameDraw').appendChild(canvas);
		var ctx = canvas.getContext('2d');
		core.canvas[name] = ctx;
		canvas.width = core.__PIXELS__;
		canvas.height = core.__PIXELS__;
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
	var __enable = true;
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
		core.fillText('ui', '生命', col1, position, '#66ff00', f13);
		core.fillText('ui', core.formatBigNumber(enemy.hp || 0), col1 + 30, position, /*'red'*/ null, b13);
		core.fillText('ui', '攻击', col2, position, '#ff0033', f13);
		core.fillText('ui', core.formatBigNumber(enemy.atk || 0), col2 + 30, position, /* '#FF0000' */ null, b13);
		core.fillText('ui', '防御', col3, position, '#00FFFF', f13);
		core.fillText('ui', core.formatBigNumber(enemy.def || 0), col3 + 30, position, /* [255, 0, 0, 1] */ null, b13);
	}
},
    "multiHeros": function () {
		// 多角色插件
		// Step 1: 启用本插件
		// Step 2: 定义每个新的角色各项初始数据（参见下方注释）
		// Step 3: 在游戏中的任何地方都可以调用 `core.changeHero()` 进行切换；也可以 `core.changeHero(1)` 来切换到某个具体的角色上

		// 是否开启本插件，默认禁用；将此改成 true 将启用本插件。
		var __enable = false;
		if (!__enable) return;

		// 在这里定义全部的新角色属性
		// 请注意，在这里定义的内容不会多角色共用，在切换时会进行恢复。
		// 你也可以自行新增或删除，比如不共用金币则可以加上"money"的初始化，不共用道具则可以加上"items"的初始化，
		// 多角色共用hp的话则删除hp，等等。总之，不共用的属性都在这里进行定义就好。
		var hero1 = {
			"floorId": "MT0", // 该角色初始楼层ID；如果共用楼层可以注释此项
			"image": "brave.png", // 角色的行走图名称；此项必填不然会报错
			"name": "1号角色",
			"lv": 1,
			"hp": 10000, // 如果HP共用可注释此项
			"atk": 1000,
			"def": 1000,
			"mdef": 0,
			// "money": 0, // 如果要不共用金币则取消此项注释
			// "exp": 0, // 如果要不共用经验则取消此项注释
			"loc": { "x": 0, "y": 0, "direction": "up" }, // 该角色初始位置；如果共用位置可注释此项
			"items": {
				"tools": {}, // 如果共用消耗道具（含钥匙）则可注释此项
				// "constants": {}, // 如果不共用永久道具（如手册）可取消注释此项
				"equips": {}, // 如果共用在背包的装备可注释此项
			},
			"equipment": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题
		};
		// 也可以类似新增其他角色
		// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。
		// var hero2 = { ...

		var heroCount = 2; // 包含默认角色在内总共多少个角色，该值需手动修改。

		this.initHeros = function () {
			core.setFlag("hero1", core.clone(hero1)); // 将属性值存到变量中
			// core.setFlag("hero2", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行

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
			core.ui.drawTip = function () { };
			var _playSound = core.control.playSound;
			core.control.playSound = function () { }
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
		var __enable = true;
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
    "自动拾取及清怪": function () {
	var enable = true;
	if (!enable) return;
	// 
	// var noUpdate = false;
	////// 更新状态栏 ////// 不建议状态栏刷新后触发 容易导致录像不一致的问题
	//control.prototype.updateStatusBar = function (doNotCheckAutoEvents) {
	//	if (!core.isPlaying()) return;
	//	if (noUpdate) return;
	//	noUpdate = true;
	//	core.autoGetItem();
	//	noUpdate = false;
	//	this.controldata.updateStatusBar();
	//	if (!doNotCheckAutoEvents) core.checkAutoEvents();
	//	this._updateStatusBar_setToolboxIcon();
	//	core.clearRouteFolding();
	//}

	////// 每移动一格后执行的事件 //////
	control.prototype.moveOneStep = function (callback) {
		core.autoGetItem();
		return this.controldata.moveOneStep(callback);
	}

	function bfsFlood(sx, sy, blockfn) {
		var canMoveArray = core.generateMovableArray();
		var blocksObj = core.getMapBlocksObj();
		var bgMap = core.getBgMapArray();

		var visited = [],
			queue = [];
		visited[sx + "," + sy] = 0;
		queue.push(sx + "," + sy);

		while (queue.length > 0) {
			var now = queue.shift().split(","),
				x = ~~now[0],
				y = ~~now[1];
			for (var direction in core.utils.scan) {
				if (!core.inArray(canMoveArray[x][y], direction)) continue;
				var nx = x + core.utils.scan[direction].x,
					ny = y + core.utils.scan[direction].y,
					nindex = nx + "," + ny;
				if (visited[nindex]) continue;
				if (core.onSki(bgMap[ny][nx])) continue;
				if (blockfn && !blockfn(blocksObj, nx, ny)) continue;
				visited[nindex] = visited[now] + 1;
				queue.push(nindex);
			}
		}
	}

	function attractAnimate() {
		var name = 'attractAnimate';
		var isPlaying = false;
		this.nodes = [];

		this.add = function (id, x, y, callback) {
			this.nodes.push({ id: id, x: x, y: y, callback: callback });
		}
		this.start = function () {
			if (isPlaying) return;
			isPlaying = true;
			core.registerAnimationFrame(name, true, this.update);
			this.ctx = core.createCanvas(name, 0, 0, core.__PIXELS__, core.__PIXELS__, 120);
		}
		this.remove = function () {
			core.unregisterAnimationFrame(name);
			core.deleteCanvas(name);
			isPlaying = false;
		}
		this.clear = function () {
			this.nodes = [];
			this.remove();
		}
		var lastTime = -1;
		var self = this;
		this.update = function (timeStamp) {
			if (lastTime < 0) lastTime = timeStamp;
			if (timeStamp - lastTime < 20) return;
			lastTime = timeStamp;
			core.clearMap(name);
			var cx = core.status.heroCenter.px - 16,
				cy = core.status.heroCenter.py - 16;
			var thr = 5; //缓动比例倒数 越大移动越慢
			self.nodes.forEach(function (n) {
				var dx = cx - n.x,
					dy = cy - n.y;
				if (Math.abs(dx) <= thr && Math.abs(dy) <= thr) {
					n.dead = true;
				} else {
					n.x += ~~(dx / thr);
					n.y += ~~(dy / thr);
				}
				core.drawIcon(name, n.id, n.x, n.y, 32, 32);
			});
			self.nodes = self.nodes.filter(function (n) {
				if (n.dead && n.callback) {
					n.callback();
				}
				return !n.dead;
			});
			if (self.nodes.length == 0)
				self.remove();
		}
	}


	var animateHwnd = new attractAnimate();

	this.stopAttractAnimate = function () {
		animateHwnd.clear();
	}

	this.autoGetItem = function () {
		var canGetItems = {};
		if (!core.status.floorId || !core.status.checkBlock.damage || core.status.event.id == 'action' || core.status.lockControl) return;
		if (core.getFlag("shiqu", 0) == 0) return;
		if (Object.keys(core.status.checkBlock.damage).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1 && core.status.checkBlock.damage[core.status.hero.loc.x + "," + core.status.hero.loc.y] >= 1) return
		if (Object.keys(core.status.checkBlock.ambush).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1) return
		if (Object.keys(core.status.checkBlock.repulse).indexOf(core.status.hero.loc.x + "," + core.status.hero.loc.y) != -1) return

		bfsFlood(core.getHeroLoc('x'), core.getHeroLoc('y'), function (blockMap, x, y) {
			var idx = x + ',' + y;
			if (idx in canGetItems) return false;
			var blk = blockMap[idx];
			if (blk && !blk.disable && blk.event.cls == 'items' && !core.isMapBlockDisabled(core.status.floorId, blk.x, blk.y) && blk.event.trigger == 'getItem') {
				canGetItems[idx] = { x: x, y: y, id: blk.event.id };
				return !core.status.checkBlock.damage[idx] && !core.status.checkBlock.ambush[idx];
			}
			return core.maps._canMoveDirectly_checkNextPoint(blockMap, x, y);
		});
		for (var k in canGetItems) {
			var x = canGetItems[k].x,
				y = canGetItems[k].y,
				id = canGetItems[k].id;
			core.trigger(x, y);
			animateHwnd.add(id, x * 32, y * 32);
		}
		animateHwnd.start();
	}
},
    "宝石血瓶数据": function () {
	/* 宝石血瓶左下角显示数值
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
	// core.bigmap.threshold = 256;
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
					x > core.bigmap.posX + core._SIZE_ + core.bigmap.extend ||
					y < core.bigmap.posY - core.bigmap.extend ||
					y > core.bigmap.posY + core._SIZE_ + core.bigmap.extend
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
	// 在此增加新插件

},
    "高级动画": function () {
	// 在此增加新插件
	// -------------------- 插件说明 -------------------- //

	// github仓库：https://github.com/unanmed/animate
	// npm包名：mutate-animate
	// npm地址：https://www.npmjs.com/package/mutate-animate

	// 不要去尝试读这个插件，这个插件是经过了打包的，不是人类可读的(
	// 想读的话可以去github读

	// 该插件是一个轻量型多功能动画插件，可以允许你使用内置或自定义的速率曲线或轨迹等
	// 除此之外，你还可以自定义绘制函数，来让你的动画可视化

	// -------------------- 安装说明 -------------------- //

	// 直接复制到插件中即可，注意所有插件中不能出现插件名为animate的插件
	// 该插件分为动画和渐变两部分，教程分开，动画在前，渐变在后

	// -------------------- 动画使用教程 -------------------- //

	// 1. 首先创建一个异步函数
	//   async function ani() { }

	// 2. 引入插件中的类和函数，引入内容要看个人需求，所有可用的函数在本插件末尾可以看到
	//   const { Animation, linear, bezier, circle, hyper, trigo, power, inverseTrigo, shake, sleep } = core.plugin.animate

	// 3. 在函数内部创建一个动画
	//   const animate = new Animation();

	// 4. 为动画创建一个绘制函数，这里以绘制一个矩形为例，当然也可以使用core.fillRect替代ctx.fillRect来绘制矩形
	//   const ctx = core.createCanvas('animate', 0, 0, 416, 416, 100);
	//   ctx.save();
	//   const fn = () => {
	//      ctx.restore();
	//      ctx.save();
	//      ctx.clearRect(0, 0, 800, 800);
	//      ctx.translate(animate.x, animate.y);
	//      ctx.rotate(animate.angle * Math.PI / 180);
	//      const size = animate.size;
	//      ctx.fillRect(-30 * size, -30 * size, 60 * size, 60 * size);
	//   }
	//   animate.ticker.add(fn);

	// 5. 执行动画

	//   下面先对一些概念进行解释

	//   动画分为很多种，内置的有move(移动至某一点)  rotate(旋转)  scale(放缩)  moveAs(以指定路径移动)  shake(震动)
	//   对于不同的动画种类，其所对应的属性也不同，move moveAs shake均对应x和y这两个属性
	//   rotate对应angle，scale对应size。你也可以自定义属性，这个之后会提到

	//   除了执行动画之外，这里还提供了三个等待函数，可以等待某个动画执行完毕，以及一个等待指定时长的函数
	//   分别是animate.n(等待指定数量的动画执行完毕)
	//   animate.w(等待指定类型的动画执行完毕，也可以是自定义类型)
	//   animate.all(等待所有动画执行完毕)
	//   sleep(等待指定时长)

	//   执行动画时，要求一个渐变函数，当然这个插件内置了非常丰富的渐变函数，也就是速率曲线。

	//   线性渐变函数  linear()，该函数返回一个线性变化函数

	//   三角渐变函数  trigo('sin' | 'sec', EaseMode)，该函数返回一个指定属性的三角函数变化函数
	//       其中EaseMode可以填'in' 'out' 'in-out' 'center'
	//       分别表示 慢-快  快-慢  慢-快-慢  快-慢-快

	//   幂函数渐变  power(n, EaseMode)，该函数返回一个以x^n变化的函数，n是指数

	//   双曲渐变函数  hyper('sin' | 'tan' | 'sec', EaseMode)，该函数返回一个双曲函数，分别是双曲正弦、双曲正切、双曲正割

	//   反三角渐变函数  inverseTrigo('sin' | 'tan', EaseMode)，该函数返回一个反三角函数

	//   贝塞尔曲线渐变函数  bezier(...cps)，参数为贝塞尔曲线的控制点纵坐标（横坐标不能自定义，毕竟一个时刻不能对应多个速率）
	//       示例：bezier(0.4, 0.2, 0.7); // 三个控制点的四次贝塞尔曲线渐变函数

	//   了解完渐变函数以后，这里还有一个特殊的渐变函数-shake
	//   shake(power, timing)，这个函数是一个震荡函数，会让一个值来回变化，实现震动的效果
	//       其中power是震动的最大值，timing是渐变函数，描述了power在震动时大小的变化

	//   下面，我们就可以进行动画的执行了，我们以 运动 + 旋转 + 放缩为例

	//   animate.mode(hyper('sin', 'out'))  // 设置渐变函数为 双曲正弦 快 -> 慢，注意不能加分号
	//       .time(1000)  // 设置动画的执行时间为1000毫秒
	//       .move(300, 300)  // 移动至[300, 300]的位置
	//       .relative()  // 设置相对模式为相对之前，与之前为相加的关系
	//       .mode(power(3, 'center'))  // 设置为 x^3 快-慢-快 的渐变函数
	//       .time(3000)
	//       .rotate(720)  // 旋转720度
	//       .absolute()  // 设置相对模式为绝对
	//       .mode(trigo('sin', 'in'))  // 设置渐变函数为 正弦 慢 -> 快
	//       .time(1500)
	//       .scale(3);  // 放缩大小至3倍

	//   这样，我们就把三种基础动画都执行了一遍，同时，这种写法非常直观，出现问题时也可以很快地找到问题所在
	//   下面，我们需要等待动画执行完毕，因为同一种动画不可能同时执行两个

	//   await animate.n(1); // 等待任意一个动画执行完毕，别把await忘了
	//   await animate.w('scale'); // 等待放缩动画执行完毕
	//   await animate.all(); // 等待所有动画执行完毕
	//   await sleep(1000); // 等待1000毫秒

	//   下面，还有一个特殊的动画函数-moveAs
	//   这是一个非常强大的函数，它允许你让你的物体按照指定路线运动
	//   说到这，我们需要先了解一下运动函数。
	//   该插件内置了两个运动函数，分别是圆形运动和贝塞尔曲线运动

	//   圆形运动 circle(r, n, timing, inverse)，r是圆的半径，n是圈数，timing描述半径大小的变化，inverse说明了是否翻转timing函数，后面三个可以不填

	//   贝塞尔曲线 bezierPath(start, end, ...cps)
	//       其中start和end是起点和结束点，应当填入[x, y]数组，cps是控制点，也是[x, y]数组
	//       示例：bezierPath([0, 0], [200, 200], [100, 50], [300, 150], [200, 180]);
	//       这是一个起点为 [0, 0]，终点为[200, 200]，有三个控制点的四次贝塞尔曲线

	//   下面，我们就可以使用路径函数了

	//   animate.mode(hyper('sin', 'in-out'))  // 设置渐变曲线
	//       .time(5000)
	//       .relative()  // 设置为相对模式，这个比较必要，不然的话很可能出现瞬移
	//       .moveAs(circle(100, 5, linear()))  // 创建一个5圈的半径从0至100逐渐变大的圆轨迹（是个螺旋线）并让物体沿着它运动
	//       
	//   最后，还有一个震动函数 shake(x, y)，x和y表示了在横向上和纵向上的震动幅度，1表示为震动幅度的100%
	//   示例：
	//   animate.mode(shake(5, hyper('sin', 'in')), true) // 这里第二个参数说明是震动函数
	//       .time(2000)
	//       .shake(1, 0.5)

	//   这样，所有内置动画就已经介绍完毕

	// 6. 自定义动画属性

	//   本插件允许你自定义一个动画属性，但功能可能不会像自带的属性那么强大
	//   你可以在创建动画之后使用animate.register(key, init)来注册一个自定义属性
	//   其中key是自定义属性的名称，init是自定义属性的初始值，这个值应当在0-1之间变化

	//   你可以通过animate.value[key]来获取你注册的自定义属性

	//   对于自定义属性的动画，你应当使用animate.apply(key, n, first)
	//   其中，key是你的自定义属性的名称，n是其目标值，first是一个布尔值，说明了是否将该动画插入到目前所有的动画之前，即每帧会优先执行该动画

	//   下面是一个不透明度的示例

	//   animate.register('opacity', 1); // 这句话应该放到刚创建动画之后

	//   ctx.globalAlpha = animate.value.opacity; // 这句话应当放到每帧绘制的函数里面，放在绘制之前

	//   animate.mode(bezier(0.9, 0.1, 0.05))  // 设置渐变函数
	//       .time(2000)
	//       .absolute()
	//       .apply('opacity', 0.3);  // 将不透明度按照渐变曲线更改为0.3

	// 7. 运行动画

	//   还记得刚开始定义的async function 吗，直接调用它就能执行动画了！
	//   示例：ani(); // 执行刚刚写的所有动画

	// 8. 自定义速率曲线和路径

	//   该插件中，速率曲线和路径均可自定义

	//   对于速率曲线，其类型为  (input: number) => number
	//   它接受一个范围在 0-1 的值，输出一个 0-1 的值，表示了动画的完成度，1表示动画已完成，0表示动画刚开始（当前大于1小于0也不会报错，也会执行相应的动画）

	//   对于路径，其类型为  (input: number) => [number, number]
	//   它与速率曲线类似，接收一个 0-1 的值，输出一个坐标数组

	// 9. 多个属性绑定

	//   该插件中，你可以绑定多个动画属性，你可以使用ani.bind(...attr)来绑定。
	//   绑定之后，这三个动画属性可以被一个返回了长度为3的数组的渐变函数执行。
	//   绑定使用ani.bind，设置渐变函数仍然使用ani.mode，注意它与单个动画属性是分开的，也就是它不会影响正常的渐变函数。
	//   然后使用ani.applyMulti即可执行动画

	//   例如：
	//   // 自定义的一个三属性渐变函数
	//   function b(input) {
	//       return [input * 100, input ** 2 * 100, input ** 3 * 100];
	//   }
	//   ani.bind('a', 'b', 'c') // 这样会绑定abc这三个动画属性
	//       .mode(b) // 自定义的一个返回了长度为3的数组的函数
	//       .time(5000)
	//       .absolute()
	//       .applyMulti(); // 执行这个动画

	// 9. 监听  动画的生命周期钩子

	//   这个插件还允许你去监听动画的状态，可以监听动画的开始、结束、运行
	//   你可以使用 animate.listen(type, fn)来监听，fn的类型是 (a: Animation, type: string) => void
	//   当然，一般情况下你不会用到这个功能，插件中已经帮你包装了三个等待函数，他们就是以这些监听为基础的

	// 10. 自定义时间获取函数

	//   你可以修改ani.getTime来修改动画的时间获取函数，例如想让动画速度变成一半可以写ani.getTime = () => Date.now() / 2
	//   这样可以允许你随意控制动画的运行速度，暂停，甚至是倒退。该值默认为`Date.now`

	// -------------------- 渐变使用教程 -------------------- //

	// 相比于动画，渐变属于一种较为简便的动画，它可以让你在设置一个属性后使属性缓慢变化值目标值而不是突变至目标值
	// 现在假设你已经了解了动画的使用，下面我们来了解渐变。

	// 1. 创建一个渐变实例
	//   与动画类似，你需要使用new来实例化一个渐变，当然别忘了引入
	//   const { Transition } = core.plugin.animate;
	//   const tran = new Transition();

	// 2. 绘制
	//   const ctx = core.createCanvas('transition', 0, 0, 416, 416, 100);
	//   ctx.save();
	//   const fn = () => {
	//      ctx.restore();
	//      ctx.save();
	//      ctx.clearRect(0, 0, 800, 800);
	//      ctx.beginPath();
	//      ctx.arc(tran.value.x, tran.value.y, 50, 0, Math.PI * 2); // 使用tran.value.xxx获取当前的属性
	//      ctx.fill();
	//      // 当然也可以用样板的api，例如core.fillCircle();等
	//   }
	//   animate.ticker.add(fn);

	// 3. 设置渐变
	//   同样，与动画类似，你可以使用tran.time()设置渐变时间，使用tran.mode()设置渐变函数，使用tran.absolute()和tran.relative()设置相对模式
	//   例如：
	//   tran.time(1000)
	//       .mode(hyper('sin', 'out'))
	//       .absolute();

	// 4. 初始化渐变属性
	//   与动画不同的是，动画在执行一个自定义属性前都需要register，而渐变不需要。
	//   你可以通过tran.value.xxx = yyy来设置动画属性或使用tran.transition('xxx', yyy)来设置
	//   你的首次赋值即是初始化了渐变属性，这时是不会执行渐变的，例如：
	//   tran.value.x = 200;
	//   tran.transition('y', 200);
	//   上述例子便是将 x 和 y 初始化成了200

	// 5. 执行渐变
	//   初始化完成后，便可以直接执行渐变了，有两种方法
	//   tran.value.x = 400; // 将 x 缓慢移动至400
	//   tran.transition('y', 400); // 将 y 缓慢移动至400

	// 6. 自定义时间获取函数
	//   与动画类似，你依然可以通过修改tran.getTime来修改时间获取函数

	if (main.replayChecking) return core.plugin.animate = {};

	var M = Object.defineProperty;
	var E = (n, s, t) => s in n ? M(n, s, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[s] = t;
	var o = (n, s, t) => (E(n, typeof s != "symbol" ? s + "" : s, t), t);
	let b = [];
	const k = (n) => {
		for (const s of b)
			if (s.status === "running")
				try {
					for (const t of s.funcs)
						t(n - s.startTime);
				} catch (t) {
					s.destroy(), console.error(t);
				}
		requestAnimationFrame(k);
	};
	requestAnimationFrame(k);
	class I {
		constructor() {
			o(this, "funcs", []);
			o(this, "status", "stop");
			o(this, "startTime", 0);
			this.status = "running", b.push(this), requestAnimationFrame((s) => this.startTime = s);
		}
		add(s, t = !1) {
			return t ? this.funcs.unshift(s) : this.funcs.push(s), this;
		}
		remove(s) {
			const t = this.funcs.findIndex((e) => e === s);
			if (t === -1)
				throw new ReferenceError(
					"You are going to remove nonexistent ticker function."
				);
			return this.funcs.splice(t, 1), this;
		}
		clear() {
			this.funcs = [];
		}
		destroy() {
			this.clear(), this.stop();
		}
		stop() {
			this.status = "stop", b = b.filter((s) => s !== this);
		}
	}
	class F {
		constructor() {
			o(this, "timing");
			o(this, "relation", "absolute");
			o(this, "easeTime", 0);
			o(this, "applying", {});
			o(this, "getTime", Date.now);
			o(this, "ticker", new I());
			o(this, "value", {});
			o(this, "listener", {});
			this.timing = (s) => s;
		}
		async all() {
			if (Object.values(this.applying).every((s) => s === !0))
				throw new ReferenceError("There is no animates to be waited.");
			await new Promise((s) => {
				const t = () => {
					Object.values(this.applying).every((e) => e === !1) && (this.unlisten("end", t), s("all animated."));
				};
				this.listen("end", t);
			});
		}
		async n(s) {
			const t = Object.values(this.applying).filter((i) => i === !0).length;
			if (t < s)
				throw new ReferenceError(
					`You are trying to wait ${s} animate, but there are only ${t} animate animating.`
				);
			let e = 0;
			await new Promise((i) => {
				const r = () => {
					e++, e === s && (this.unlisten("end", r), i(`${s} animated.`));
				};
				this.listen("end", r);
			});
		}
		async w(s) {
			if (this.applying[s] === !1)
				throw new ReferenceError(`The ${s} animate is not animating.`);
			await new Promise((t) => {
				const e = () => {
					this.applying[s] === !1 && (this.unlisten("end", e), t(`${s} animated.`));
				};
				this.listen("end", e);
			});
		}
		listen(s, t) {
			var e, i;
			(i = (e = this.listener)[s]) != null || (e[s] = []), this.listener[s].push(t);
		}
		unlisten(s, t) {
			const e = this.listener[s].findIndex((i) => i === t);
			if (e === -1)
				throw new ReferenceError(
					"You are trying to remove a nonexistent listener."
				);
			this.listener[s].splice(e, 1);
		}
		hook(...s) {
			const t = Object.entries(this.listener).filter(
				(e) => s.includes(e[0])
			);
			for (const [e, i] of t)
				for (const r of i)
					r(this, e);
		}
	}

	function T(n) {
		return n != null;
	}
	async function R(n) {
		return new Promise((s) => setTimeout(s, n));
	}
	class Y extends F {
		constructor() {
			super();
			o(this, "shakeTiming");
			o(this, "path");
			o(this, "multiTiming");
			o(this, "value", {});
			o(this, "size", 1);
			o(this, "angle", 0);
			o(this, "targetValue", {
				system: {
					move: [0, 0],
					moveAs: [0, 0],
					resize: 0,
					rotate: 0,
					shake: 0,
					"@@bind": []
				},
				custom: {}
			});
			o(this, "animateFn", {
				system: {
					move: [() => 0, () => 0],
					moveAs: () => 0,
					resize: () => 0,
					rotate: () => 0,
					shake: () => 0,
					"@@bind": () => 0
				},
				custom: {}
			});
			o(this, "ox", 0);
			o(this, "oy", 0);
			o(this, "sx", 0);
			o(this, "sy", 0);
			o(this, "bindInfo", []);
			this.timing = (t) => t, this.shakeTiming = (t) => t, this.multiTiming = (t) => [t, t], this.path = (t) => [t, t], this.applying = {
				move: !1,
				scale: !1,
				rotate: !1,
				shake: !1
			}, this.ticker.add(() => {
				const { running: t } = this.listener;
				if (T(t))
					for (const e of t)
						e(this, "running");
			});
		}
		get x() {
			return this.ox + this.sx;
		}
		get y() {
			return this.oy + this.sy;
		}
		mode(t, e = !1) {
			return typeof t(0) == "number" ? e ? this.shakeTiming = t : this.timing = t : this.multiTiming = t, this;
		}
		time(t) {
			return this.easeTime = t, this;
		}
		relative() {
			return this.relation = "relative", this;
		}
		absolute() {
			return this.relation = "absolute", this;
		}
		bind(...t) {
			return this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.bindInfo = t, this;
		}
		unbind() {
			return this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.bindInfo = [], this;
		}
		move(t, e) {
			return this.applying.move && this.end(!0, "move"), this.applySys("ox", t, "move"), this.applySys("oy", e, "move"), this;
		}
		rotate(t) {
			return this.applySys("angle", t, "rotate"), this;
		}
		scale(t) {
			return this.applySys("size", t, "resize"), this;
		}
		shake(t, e) {
			this.applying.shake === !0 && this.end(!0, "shake"), this.applying.shake = !0;
			const { easeTime: i, shakeTiming: r } = this, h = this.getTime();
			if (this.hook("start", "shakestart"), i <= 0)
				return this.end(!1, "shake"), this;
			const l = () => {
				const c = this.getTime() - h;
				if (c > i) {
					this.ticker.remove(l), this.applying.shake = !1, this.sx = 0, this.sy = 0, this.hook("end", "shakeend");
					return;
				}
				const a = c / i,
					m = r(a);
				this.sx = m * t, this.sy = m * e;
			};
			return this.ticker.add(l), this.animateFn.system.shake = l, this;
		}
		moveAs(t) {
			this.applying.moveAs && this.end(!0, "moveAs"), this.applying.moveAs = !0, this.path = t;
			const { easeTime: e, relation: i, timing: r } = this, h = this.getTime(), [l, u] = [this.x, this.y], [c, a] = (() => {
				if (i === "absolute")
					return t(1); {
					const [d, f] = t(1);
					return [l + d, u + f];
				}
			})();
			if (this.hook("start", "movestart"), e <= 0)
				return this.end(!1, "moveAs"), this;
			const m = () => {
				const f = this.getTime() - h;
				if (f > e) {
					this.end(!0, "moveAs");
					return;
				}
				const v = f / e,
					[g, w] = t(r(v));
				i === "absolute" ? (this.ox = g, this.oy = w) : (this.ox = l + g, this.oy = u + w);
			};
			return this.ticker.add(m, !0), this.animateFn.system.moveAs = m, this.targetValue.system.moveAs = [c, a], this;
		}
		register(t, e) {
			if (typeof this.value[t] == "number")
				return this.error(
					`Property ${t} has been regietered twice.`,
					"reregister"
				);
			this.value[t] = e, this.applying[t] = !1;
		}
		apply(t, e, i = !1) {
			this.applying[t] === !0 && this.end(!1, t), t in this.value || this.error(
				`You are trying to execute nonexistent property ${t}.`
			), this.applying[t] = !0;
			const r = this.value[t],
				h = this.getTime(),
				{ timing: l, relation: u, easeTime: c } = this,
				a = u === "absolute" ? e - r : e;
			if (this.hook("start"), c <= 0)
				return this.end(!1, t), this;
			const m = () => {
				const f = this.getTime() - h;
				if (f > c) {
					this.end(!1, t);
					return;
				}
				const v = f / c,
					g = l(v);
				this.value[t] = r + g * a;
			};
			return this.ticker.add(m, i), this.animateFn.custom[t] = m, this.targetValue.custom[t] = a + r, this;
		}
		applyMulti(t = !1) {
			this.applying["@@bind"] === !0 && this.end(!1, "@@bind"), this.applying["@@bind"] = !0;
			const e = this.bindInfo,
				i = e.map((m) => this.value[m]),
				r = this.getTime(),
				{ multiTiming: h, relation: l, easeTime: u } = this,
				c = h(1);
			if (c.length !== i.length)
				throw new TypeError(
					`The number of binded animate attributes and timing function returns's length does not match. binded: ${e.length}, timing: ${c.length}`
				);
			if (this.hook("start"), u <= 0)
				return this.end(!1, "@@bind"), this;
			const a = () => {
				const d = this.getTime() - r;
				if (d > u) {
					this.end(!1, "@@bind");
					return;
				}
				const f = d / u,
					v = h(f);
				e.forEach((g, w) => {
					l === "absolute" ? this.value[g] = v[w] : this.value[g] = i[w] + v[w];
				});
			};
			return this.ticker.add(a, t), this.animateFn.custom["@@bind"] = a, this.targetValue.system["@@bind"] = c, this;
		}
		applySys(t, e, i) {
			i !== "move" && this.applying[i] === !0 && this.end(!0, i), this.applying[i] = !0;
			const r = this[t],
				h = this.getTime(),
				l = this.timing,
				u = this.relation,
				c = this.easeTime,
				a = u === "absolute" ? e - r : e;
			if (this.hook("start", `${i}start`), c <= 0)
				return this.end(!1, i);
			const m = () => {
				const f = this.getTime() - h;
				if (f > c) {
					this.end(!0, i);
					return;
				}
				const v = f / c,
					g = l(v);
				this[t] = r + a * g, t !== "oy" && this.hook(i);
			};
			this.ticker.add(m, !0), t === "ox" ? this.animateFn.system.move[0] = m : t === "oy" ? this.animateFn.system.move[1] = m : this.animateFn.system[i] = m, i === "move" ? (t === "ox" && (this.targetValue.system.move[0] = a + r), t === "oy" && (this.targetValue.system.move[1] = a + r)) : i !== "shake" && (this.targetValue.system[i] = a + r);
		}
		error(t, e) {
			throw e === "repeat" ? new Error(
				`Cannot execute the same animation twice. Info: ${t}`
			) : e === "reregister" ? new Error(
				`Cannot register an animated property twice. Info: ${t}`
			) : new Error(t);
		}
		end(t, e) {
			if (t === !0)
				if (this.applying[e] = !1, e === "move" ? (this.ticker.remove(this.animateFn.system.move[0]), this.ticker.remove(this.animateFn.system.move[1])) : e === "moveAs" ? this.ticker.remove(this.animateFn.system.moveAs) : e === "@@bind" ? this.ticker.remove(this.animateFn.system["@@bind"]) : this.ticker.remove(
						this.animateFn.system[e]
					), e === "move") {
					const [i, r] = this.targetValue.system.move;
					this.ox = i, this.oy = r, this.hook("moveend", "end");
				} else if (e === "moveAs") {
				const [i, r] = this.targetValue.system.moveAs;
				this.ox = i, this.oy = r, this.hook("moveend", "end");
			} else
				e === "rotate" ? (this.angle = this.targetValue.system.rotate, this.hook("rotateend", "end")) : e === "resize" ? (this.size = this.targetValue.system.resize, this.hook("resizeend", "end")) : e === "@@bind" ? this.bindInfo.forEach((r, h) => {
					this.value[r] = this.targetValue.system["@@bind"][h];
				}) : (this.sx = 0, this.sy = 0, this.hook("shakeend", "end"));
			else
				this.applying[e] = !1, this.ticker.remove(this.animateFn.custom[e]), this.value[e] = this.targetValue.custom[e], this.hook("end");
		}
	}
	class j extends F {
		constructor() {
			super();
			o(this, "now", {});
			o(this, "target", {});
			o(this, "transitionFn", {});
			o(this, "value");
			o(this, "handleSet", (t, e, i) => (this.transition(e, i), !0));
			o(this, "handleGet", (t, e) => this.now[e]);
			this.timing = (t) => t, this.value = new Proxy(this.target, {
				set: this.handleSet,
				get: this.handleGet
			});
		}
		mode(t) {
			return this.timing = t, this;
		}
		time(t) {
			return this.easeTime = t, this;
		}
		relative() {
			return this.relation = "relative", this;
		}
		absolute() {
			return this.relation = "absolute", this;
		}
		transition(t, e) {
			if (e === this.target[t])
				return this;
			if (!T(this.now[t]))
				return this.now[t] = e, this;
			this.applying[t] && this.end(t, !0), this.applying[t] = !0, this.hook("start");
			const i = this.getTime(),
				r = this.easeTime,
				h = this.timing,
				l = this.now[t],
				u = e + (this.relation === "absolute" ? 0 : l),
				c = u - l;
			this.target[t] = u;
			const a = () => {
				const d = this.getTime() - i;
				if (d >= r) {
					this.end(t);
					return;
				}
				const f = d / r;
				this.now[t] = h(f) * c + l, this.hook("running");
			};
			return this.transitionFn[t] = a, r <= 0 ? (this.end(t), this) : (this.ticker.add(a), this);
		}
		end(t, e = !1) {
			const i = this.transitionFn[t];
			if (!T(i))
				throw new ReferenceError(
					`You are trying to end an ended transition: ${t}`
				);
			this.ticker.remove(this.transitionFn[t]), delete this.transitionFn[t], this.applying[t] = !1, this.hook("end"), e || (this.now[t] = this.target[t]);
		}
	}
	const x = (...n) => n.reduce((s, t) => s + t, 0),
		y = (n) => {
			if (n === 0)
				return 1;
			let s = n;
			for (; n > 1;)
				n--, s *= n;
			return s;
		},
		A = (n, s) => Math.round(y(s) / (y(n) * y(s - n))),
		p = (n, s, t = (e) => 1 - s(1 - e)) => n === "in" ? s : n === "out" ? t : n === "in-out" ? (e) => e < 0.5 ? s(e * 2) / 2 : 0.5 + t((e - 0.5) * 2) / 2 : (e) => e < 0.5 ? t(e * 2) / 2 : 0.5 + s((e - 0.5) * 2) / 2,
		$ = Math.cosh(2),
		z = Math.acosh(2),
		V = Math.tanh(3),
		P = Math.atan(5);

	function O() {
		return (n) => n;
	}

	function q(...n) {
		const s = [0].concat(n);
		s.push(1);
		const t = s.length,
			e = Array(t).fill(0).map((i, r) => A(r, t - 1));
		return (i) => {
			const r = e.map((h, l) => h * s[l] * (1 - i) ** (t - l - 1) * i ** l);
			return x(...r);
		};
	}

	function U(n, s) {
		if (n === "sin") {
			const t = (i) => Math.sin(i * Math.PI / 2);
			return p(s, (i) => 1 - t(1 - i), t);
		}
		if (n === "sec") {
			const t = (i) => 1 / Math.cos(i);
			return p(s, (i) => t(i * Math.PI / 3) - 1);
		}
		throw new TypeError(
			"Unexpected parameters are delivered in trigo timing function."
		);
	}

	function C(n, s) {
		if (!Number.isInteger(n))
			throw new TypeError(
				"The first parameter of power timing function only allow integer."
			);
		return p(s, (e) => e ** n);
	}

	function G(n, s) {
		if (n === "sin")
			return p(s, (e) => (Math.cosh(e * 2) - 1) / ($ - 1));
		if (n === "tan") {
			const t = (i) => Math.tanh(i * 3) * 1 / V;
			return p(s, (i) => 1 - t(1 - i), t);
		}
		if (n === "sec") {
			const t = (i) => 1 / Math.cosh(i);
			return p(s, (i) => 1 - (t(i * z) - 0.5) * 2);
		}
		throw new TypeError(
			"Unexpected parameters are delivered in hyper timing function."
		);
	}

	function N(n, s) {
		if (n === "sin") {
			const t = (i) => Math.asin(i) / Math.PI * 2;
			return p(s, (i) => 1 - t(1 - i), t);
		}
		if (n === "tan") {
			const t = (i) => Math.atan(i * 5) / P;
			return p(s, (i) => 1 - t(1 - i), t);
		}
		throw new TypeError(
			"Unexpected parameters are delivered in inverse trigo timing function."
		);
	}

	function B(n, s = () => 1) {
		let t = -1;
		return (e) => (t *= -1, e < 0.5 ? n * s(e * 2) * t : n * s((1 - e) * 2) * t);
	}

	function D(n, s = 1, t = [0, 0], e = 0, i = (h) => 1, r = !1) {
		return (h) => {
			const l = s * h * Math.PI * 2 + e * Math.PI / 180,
				u = Math.cos(l),
				c = Math.sin(l),
				a = n * i(i(r ? 1 - h : h));
			return [a * u + t[0], a * c + t[1]];
		};
	}

	function H(n, s, ...t) {
		const e = [n].concat(t);
		e.push(s);
		const i = e.length,
			r = Array(i).fill(0).map((h, l) => A(l, i - 1));
		return (h) => {
			const l = r.map((c, a) => c * e[a][0] * (1 - h) ** (i - a - 1) * h ** a),
				u = r.map((c, a) => c * e[a][1] * (1 - h) ** (i - a - 1) * h ** a);
			return [x(...l), x(...u)];
		};
	}

	if ('animate' in core.plugin) throw new ReferenceError(`插件中已存在名为animate的属性！`);

	core.plugin.animate = {
		Animation: Y,
		AnimationBase: F,
		Ticker: I,
		Transition: j,
		sleep: R,
		circle: D,
		bezierPath: H,
		linear: O,
		bezier: q,
		trigo: U,
		power: C,
		hyper: G,
		inverseTrigo: N,
		shake: B
	}

},
    "实用功能函数集": function () {
	// 在此增加新插件
	// 功能函数集，具体有哪些函数看每个函数前的注释即可
	// 安装方式：直接复制到插件里面，注意新建插件自带的 function () { } 不能删
	// 使用方式：可以直接使用对象解构按需引入
	// 例如：const { has, slide } = core.plugin.utils;
	// slide([1, 2, 3], -1); // [2, 3, 1]

	/**
	 * 滑动数组，使数组元素平移若干项
	 * @example slide([1, 2, 3], -1); // [2, 3, 1]
	 * @example slide([1, 3, 5], 10); // [5, 3, 1];
	 * @param {any[]} arr 需要滑动的数组
	 * @param {number} delta 滑动的项数，正负均可
	 */
	function slide(arr, delta) {
		if (delta === 0) return arr;
		delta %= arr.length;
		if (delta > 0) {
			arr.unshift(...arr.splice(arr.length - delta, delta));
			return arr;
		}
		if (delta < 0) {
			arr.push(...arr.splice(0, -delta));
			return arr;
		}
	};

	/**
	 * 获取一个方向的反方向
	 * @example backDir('up'); // 'down'
	 * @example backDir('leftup'); // 'rightdown'
	 * @param {string} dir 方向
	 */
	function backDir(dir) {
		const map = {
			up: 'down',
			down: 'up',
			left: 'right',
			right: 'left',
			leftup: 'rightdown',
			leftdown: 'rightup',
			rightdown: 'leftup',
			rightup: 'leftdown'
		};
		if (!dir in map) {
			throw new TypeError(`Wrong dir is delivered when getting back direction.`);
		}
		return map[dir];
	};

	/**
	 * 判断一个值是否不是undefined和null
	 * @example has(0); // true
	 * @example has(false); // true
	 * @example has(NaN); // true
	 * @example has(null); // false
	 * @param {any} v 要判断的值
	 */
	function has(v) {
		return v !== null && v !== void 0;
	};

	/**
	 * 解析css字符串为CSSStyleDeclaration对象
	 * @example 
	 *     parseCss('background-color: cyan; cursor: pointer; user-select: none'); 
	 *     // 输出 { backgroundColor: 'cyan', cursor: 'pointer', userSelect: 'none' }
	 * @param {string} css 要解析的css字符串
	 */
	function parseCss(css) {
		const str = css.replace(/[\n\s\t]*/g, '').replace(/;*/g, ';');
		const styles = str.split(';');
		const res = {};

		for (const one of styles) {
			const [key, data] = one.split(':');
			const cssKey = key.replace(/\-([a-z])/g, (str, $1) => $1.toUpperCase());
			res[cssKey] = data;
		}
		return res;
	}

	/**
	 * 等待一段时间，需在async function中使用，否则报错
	 * @example await sleep(500); // 等待500毫秒
	 * @param {number} time 等待的毫秒数
	 */
	async function sleep(time) {
		return new Promise(res => setTimeout(res, time));
	}

	/**
	 * 在下一帧的下一帧执行一个函数
	 * @example nextFrame(() => console.log(1)); // 两帧后在控制台输出1
	 * @param cb 执行的函数
	 */
	function nextFrame(cb) {
		requestAnimationFrame(() => {
			requestAnimationFrame(cb);
		});
	}

	/**
	 * 将一个css颜色解析成一个rgba数组
	 * 目前仅支持 #RGB #RGBA #RRGGBB #RRGGBBAA rgb() rgba() hsl() hsla() css自带颜色 这几种的转换
	 * @exmaple parseColor('#fff'); // [255, 255, 255]
	 * @example parseColor('#abcd'); // [170, 187, 204, 0.8666666666666667]
	 * @example parseColor('rgba(170, 230, 13, 0.2)'); // [170, 230, 13, 0.2]
	 * @example parseColor('cyan'); // [0, 255, 255]
	 * @example parseColor('lightcoral'); // [240, 128, 128]
	 * @example parseColor('hsla(0.2, 0.3, 0.4, 0.2)'); // [120, 133, 71, 0.2]
	 * @example parseColor('rgba(20%, 50, 33%, 0.2)'); // [51, 50, 84.15, 0.2]
	 * @param color 要解析的颜色字符串
	 */
	function parseColor(color) {
		if (color.startsWith('rgb')) {
			// rgb
			const match = color.match(/rgba?\([\d\,\s\.%]+\)/);
			if (!has(match)) throw new Error(`Invalid color is delivered!`);
			const l = color.includes('a');
			return match[0]
				.slice(l ? 5 : 4, -1)
				.split(',')
				.map((v, i) => {
					const vv = v.trim();
					if (vv.endsWith('%')) {
						if (i === 3) {
							return parseInt(vv) / 100;
						} else {
							return (parseInt(vv) * 255) / 100;
						}
					} else return parseFloat(vv);
				})
				.slice(0, l ? 4 : 3);
		} else if (color.startsWith('#')) {
			// 十六进制
			const content = color.slice(1);
			if (![3, 4, 6, 8].includes(content.length)) {
				throw new Error(`Invalid color is delivered!`);
			}

			if (content.length <= 4) {
				const res = content
					.split('')
					.map(v => Number(`0x${v}${v}`));
				if (res.length === 4) res[3] /= 255;
				return res;
			} else {
				const res = Array(content.length / 2)
					.fill(1)
					.map((v, i) =>
						Number(`0x${content[i * 2]}${content[i * 2 + 1]}`)
					);
				if (res.length === 4) res[3] /= 255;
				return res;
			}
		} else if (color.startsWith('hsl')) {
			// hsl，转成rgb后输出
			const match = color.match(/hsla?\([\d\,\s\.%]+\)/);
			if (!has(match)) throw new Error(`Invalid color is delivered!`);
			const l = color.includes('a');
			const hsl = match[0]
				.slice(l ? 5 : 4, -1)
				.split(',')
				.map(v => {
					const vv = v.trim();
					if (vv.endsWith('%')) return parseInt(vv) / 100;
					else return parseFloat(vv);
				});
			const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
			return (l ? rgb.concat([hsl[3]]) : rgb);
		} else {
			// 单词
			const rgb = cssColors[color];
			if (!has(rgb)) {
				throw new Error(`Invalid color is delivered!`);
			}
			return parseColor(rgb);
		}
	}

	/**
	 * hsl转rgb
	 * @param h 色相
	 * @param s 饱和度
	 * @param l 亮度
	 */
	function hslToRgb(h, s, l) {
		if (s == 0) {
			return [0, 0, 0];
		} else {
			const hue2rgb = (p, q, t) => {
				if (t < 0) t += 1;
				if (t > 1) t -= 1;
				if (t < 1 / 6) return p + (q - p) * 6 * t;
				if (t < 1 / 2) return q;
				if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
				return p;
			};

			const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
			const p = 2 * l - q;
			const r = hue2rgb(p, q, h + 1 / 3);
			const g = hue2rgb(p, q, h);
			const b = hue2rgb(p, q, h - 1 / 3);
			return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
		}
	}

	/**
	 * 确保一个变量是一个数组，不是的话转为数组并返回，是的话直接返回传入的数组
	 * @param arr 要判断的变量
	 * @example ensureArray(1); // [1]
	 * @example ensureArray([1, 2]); // [1, 2]
	 * @example ensureArray('test'); // ['test']
	 */
	function ensureArray(arr) {
		// @ts-ignore
		return arr instanceof Array ? arr : [arr];
	}

	/**
	 * 返回一个坐标在某个方向上移动 d 格后的坐标
	 * @param d 移动多少格，默认为1
	 * @example ofDir(7, 7, 'left'); // [6, 7]
	 * @example ofDir(10, 8, 'leftup', 5); // [5, 3]
	 */
	function ofDir(x, y, dir, d = 1) {
		const { x: dx, y: dy } = core.utils.scan2[dir];
		return [x + dx * d, y + dy * d];
	}

	const cssColors = {
		black: '#000000',
		silver: '#c0c0c0',
		gray: '#808080',
		white: '#ffffff',
		maroon: '#800000',
		red: '#ff0000',
		purple: '#800080',
		fuchsia: '#ff00ff',
		green: '#008000',
		lime: '#00ff00',
		olive: '#808000',
		yellow: '#ffff00',
		navy: '#000080',
		blue: '#0000ff',
		teal: '#008080',
		aqua: '#00ffff',
		orange: '#ffa500',
		aliceblue: '#f0f8ff',
		antiquewhite: '#faebd7',
		aquamarine: '#7fffd4',
		azure: '#f0ffff',
		beige: '#f5f5dc',
		bisque: '#ffe4c4',
		blanchedalmond: '#ffebcd',
		blueviolet: '#8a2be2',
		brown: '#a52a2a',
		burlywood: '#deb887',
		cadetblue: '#5f9ea0',
		chartreuse: '#7fff00',
		chocolate: '#d2691e',
		coral: '#ff7f50',
		cornflowerblue: '#6495ed',
		cornsilk: '#fff8dc',
		crimson: '#dc143c',
		cyan: '#00ffff',
		darkblue: '#00008b',
		darkcyan: '#008b8b',
		darkgoldenrod: '#b8860b',
		darkgray: '#a9a9a9',
		darkgreen: '#006400',
		darkgrey: '#a9a9a9',
		darkkhaki: '#bdb76b',
		darkmagenta: '#8b008b',
		darkolivegreen: '#556b2f',
		darkorange: '#ff8c00',
		darkorchid: '#9932cc',
		darkred: '#8b0000',
		darksalmon: '#e9967a',
		darkseagreen: '#8fbc8f',
		darkslateblue: '#483d8b',
		darkslategray: '#2f4f4f',
		darkslategrey: '#2f4f4f',
		darkturquoise: '#00ced1',
		darkviolet: '#9400d3',
		deeppink: '#ff1493',
		deepskyblue: '#00bfff',
		dimgray: '#696969',
		dimgrey: '#696969',
		dodgerblue: '#1e90ff',
		firebrick: '#b22222',
		floralwhite: '#fffaf0',
		forestgreen: '#228b22',
		gainsboro: '#dcdcdc',
		ghostwhite: '#f8f8ff',
		gold: '#ffd700',
		goldenrod: '#daa520',
		greenyellow: '#adff2f',
		grey: '#808080',
		honeydew: '#f0fff0',
		hotpink: '#ff69b4',
		indianred: '#cd5c5c',
		indigo: '#4b0082',
		ivory: '#fffff0',
		khaki: '#f0e68c',
		lavender: '#e6e6fa',
		lavenderblush: '#fff0f5',
		lawngreen: '#7cfc00',
		lemonchiffon: '#fffacd',
		lightblue: '#add8e6',
		lightcoral: '#f08080',
		lightcyan: '#e0ffff',
		lightgoldenrodyellow: '#fafad2',
		lightgray: '#d3d3d3',
		lightgreen: '#90ee90',
		lightgrey: '#d3d3d3',
		lightpink: '#ffb6c1',
		lightsalmon: '#ffa07a',
		lightseagreen: '#20b2aa',
		lightskyblue: '#87cefa',
		lightslategray: '#778899',
		lightslategrey: '#778899',
		lightsteelblue: '#b0c4de',
		lightyellow: '#ffffe0',
		limegreen: '#32cd32',
		linen: '#faf0e6',
		magenta: '#ff00ff',
		mediumaquamarine: '#66cdaa',
		mediumblue: '#0000cd',
		mediumorchid: '#ba55d3',
		mediumpurple: '#9370db',
		mediumseagreen: '#3cb371',
		mediumslateblue: '#7b68ee',
		mediumspringgreen: '#00fa9a',
		mediumturquoise: '#48d1cc',
		mediumvioletred: '#c71585',
		midnightblue: '#191970',
		mintcream: '#f5fffa',
		mistyrose: '#ffe4e1',
		moccasin: '#ffe4b5',
		navajowhite: '#ffdead',
		oldlace: '#fdf5e6',
		olivedrab: '#6b8e23',
		orangered: '#ff4500',
		orchid: '#da70d6',
		palegoldenrod: '#eee8aa',
		palegreen: '#98fb98',
		paleturquoise: '#afeeee',
		palevioletred: '#db7093',
		papayawhip: '#ffefd5',
		peachpuff: '#ffdab9',
		peru: '#cd853f',
		pink: '#ffc0cb',
		plum: '#dda0dd',
		powderblue: '#b0e0e6',
		rosybrown: '#bc8f8f',
		royalblue: '#4169e1',
		saddlebrown: '#8b4513',
		salmon: '#fa8072',
		sandybrown: '#f4a460',
		seagreen: '#2e8b57',
		seashell: '#fff5ee',
		sienna: '#a0522d',
		skyblue: '#87ceeb',
		slateblue: '#6a5acd',
		slategray: '#708090',
		slategrey: '#708090',
		snow: '#fffafa',
		springgreen: '#00ff7f',
		steelblue: '#4682b4',
		tan: '#d2b48c',
		thistle: '#d8bfd8',
		tomato: '#ff6347',
		turquoise: '#40e0d0',
		violet: '#ee82ee',
		wheat: '#f5deb3',
		whitesmoke: '#f5f5f5',
		yellowgreen: '#9acd32',
		transparent: '#0000'
	};


	if (has(core.plugin.utils)) {
		throw new ReferenceError(`core.plugin上已经有'utils'属性，因此功能函数插件将无法使用！`);
	}
	core.plugin.utils = {
		has,
		slide,
		backDir,
		parseCss,
		sleep,
		nextFrame,
		parseColor,
		hslToRgb,
		ensureArray,
		ofDir
	};
},
    "怪物碎裂特效": function () {
	// 在此增加新插件
	// -------------------- 安装说明 -------------------- //
	// 先安装两个在插件简介中说明的前置插件
	// 然后再将本插件复制到插件编写中即可
	// 插件自带一个打怪后显示碎裂特效的功能
	// -------------------- 使用说明 -------------------- //
	/*

	本插件的核心是一个名为 applyFragWith 的函数，打怪后的碎裂特效也是由它执行的。
	我们来说明一下这个函数的使用方式。
	1. 引入
	  你可以使用 const { applyFragWith } = core.plugin.frag; 在任何地方来引入这个函数。

	2. 函数的参数
	  该函数有三个参数，分别是canvas, length, time。
	  其中，第一个参数意思是，在执行碎裂时，其内容由该画布决定，这个特效并不会修改传入的画布，因此原画布的内容会依然存在
	  第二个参数指的是每个碎片的边长，虽然原则上每个碎片都是正方形，但边缘一周的碎片可能不是正方形，但中间的碎片一定是
	  第三个参数指的是这个特效要执行多长时间
	  第四个参数是一个对象，包含四种配置量，均为可选，分别是maxMoveLength，moveFlush，maxRotate，fragTiming
	  当这些不存在时会默认取同名的常量作为默认值。这些值有什么用可以看下面的常量注释。

	3. 函数的返回值
	  这个函数会返回一个特效控制器对象，这个控制器共有三个属性。
	  animation: 指的是当前特效的高级动画对象
	  onEnd: 一个Promise，当这个特效执行完毕后会被 fulfilled
	  canvas: 特效所显示的画布。这个画布不会自动部署到样板中，需要你手动使用appendChild来部署，具体可参考打怪后碎裂的样例

	4. 修改一些常量
	  在下面有四个有注释的常量MAX_MOVE_LENGTH ~ FRAG_TIMING，你可以根据你自己的需要来更改。

	*/

	if (main.replayChecking) return core.plugin.frag = {};

	const { Animation, linear, sleep } = core.plugin.animate;
	const { has } = core.plugin.utils;

	/** 最大移动距离，最终位置距离中心的距离变成原来的几倍 */
	const MAX_MOVE_LENGTH = 1.55;
	/** 移动距离波动，在最大移动距离的基础上加上多少倍距离的波动距离 */
	const MOVE_FLUSH = 1.5;
	/** 最大旋转角，单位是弧度，每个碎片都会有自己的旋转程度，是随机的 */
	const MAX_ROTATE = 2;
	/** 碎裂动画的速率曲线函数 */
	const FRAG_TIMING = linear();

	/**
	 * @param {HTMLCanvasElement} canvas 要执行特效的画布
	 * @param {number} length 切分成的碎片的边长，碎片为正方形
	 * @param {number} time 特效持续时长
	 * @returns 返回一个碎裂特效控制器，是一个对象，详见开头的使用注释
	 */
	function applyFragWith(canvas, length = 4, time = 2000, config = {}) {
		// 先切分图片
		const imgs = splitCanvas(canvas, length);
		const cx = canvas.width / 2;
		const cy = canvas.height / 2;

		let maxX = 0;
		let maxY = 0;
		const toMove = imgs.map(v => {
			const centerX = v.x + v.canvas.width / 2;
			const centerY = v.y + v.canvas.height / 2;
			const onX = centerX === cx;
			const onY = centerY === cy;
			const mml = config.maxMoveLength ?? MAX_MOVE_LENGTH;
			const mf = config.moveFlush ?? MOVE_FLUSH;
			const rate = mml - 1 + Math.random() ** 3 * mf;
			let endX = onY ? 0 : (centerX - cx) * rate;
			let endY = onX ? 0 : (centerY - cy) * rate;
			const mx = Math.abs(endX + centerX) + Math.abs(v.canvas.width);
			const my = Math.abs(endY + centerY) + Math.abs(v.canvas.height);
			if (mx > maxX) maxX = mx;
			if (my > maxY) maxY = my;
			const r = config.maxRotate ?? MAX_ROTATE;
			const endRad = Math.random() * r * 2 - r;

			return {
				deltaX: endX,
				deltaY: endY,
				endRad,
				x: centerX,
				y: centerY,
				canvas: v.canvas
			};
		});

		// 再执行动画
		const frag = document.createElement('canvas');
		const ctx = frag.getContext('2d');
		const ani = new Animation();
		ani.register('rate', 0);
		const ft = config.fragTiming ?? FRAG_TIMING;
		ani.absolute().time(time).mode(ft).apply('rate', 1);
		frag.width = maxX * 2;
		frag.height = maxY * 2;
		ctx.save();
		const dw = maxX - canvas.width / 2;
		const dh = maxY - canvas.height / 2;

		const fragFn = () => {
			const rate = ani.value.rate;
			const opacity = 1 - rate;
			ctx.globalAlpha = opacity;
			ctx.clearRect(0, 0, frag.width, frag.height);
			toMove.forEach(v => {
				ctx.save();
				const nx = v.deltaX * rate;
				const ny = v.deltaY * rate;
				const rotate = v.endRad * rate;

				ctx.translate(nx + v.x + dw, ny + v.y + dh);
				ctx.rotate(rotate);
				ctx.drawImage(
					v.canvas,
					nx - v.canvas.width / 2,
					ny - v.canvas.height / 2
				);
				ctx.restore();
			});
		};
		const onEnd = () => {};
		ani.ticker.add(fragFn);

		return makeFragManager(frag, ani, time, onEnd);
	}

	function makeFragManager(canvas, ani, time, onEnd) {
		const promise = sleep(time + 50);

		return {
			animation: ani,
			onEnd: promise.then(() => {
				ani.ticker.destroy();
				onEnd();
			}),
			canvas
		};
	}

	function withImage(image, sx, sy, sw, sh) {
		const canvas = document.createElement('canvas');
		const ctx = canvas.getContext('2d');
		canvas.width = sw;
		canvas.height = sh;
		ctx.drawImage(image, sx, sy, sw, sh, 0, 0, sw, sh);
		return { canvas, x: sx, y: sy };
	}

	/**
	 * 切分画布
	 * @param canvas 要被切分的画布
	 * @param l 切分小块的边长
	 */
	function splitCanvas(canvas, l) {
		if (canvas.width / l < 2 || canvas.height / l < 2) {
			console.warn('切分画布要求切分边长大于等于画布长宽的一半！');
			return [];
		}
		const w = canvas.width;
		const h = canvas.height;
		const numX = Math.floor(w / l);
		const numY = Math.floor(h / l);
		const rw = (w - numX * l) / 2;
		const rh = (h - numY * l) / 2;

		const res = [];

		if (rw > 0) {
			if (rh > 0) {
				res.push(
					withImage(canvas, 0, 0, rw, rh),
					withImage(canvas, 0, canvas.height - rh, rw, rh),
					withImage(canvas, canvas.width - rw, 0, rw, rh),
					withImage(canvas, canvas.width - rw, canvas.height - rh, rw, rh)
				);
			}
			for (const x of [0, canvas.width - rw]) {
				for (let ny = 0; ny < numY; ny++) {
					res.push(withImage(canvas, x, rh + l * ny, rw, l));
				}
			}
		}
		if (rh > 0) {
			for (const y of [0, canvas.height - rh]) {
				for (let nx = 0; nx < numX; nx++) {
					res.push(withImage(canvas, rw + l * nx, y, l, rh));
				}
			}
		}
		for (let nx = 0; nx < numX; nx++) {
			for (let ny = 0; ny < numY; ny++) {
				res.push(withImage(canvas, rw + l * nx, rh + l * ny, l, l));
			}
		}

		return res;
	}

	const origin = core.events.afterBattle;
	core.events.afterBattle = function (enemyId, x, y) {
		// 打怪特效
		if (has(x) && has(y) && core.getFlag("碎裂动画", 0) == 1) { //最后一个并列条件是我手动加的，为了做出限制
			const frame = core.status.globalAnimateStatus % 2;
			// 生成怪物图像
			const canvas = document.createElement('canvas');
			canvas.width = 32;
			canvas.height = 32;
			core.drawIcon(canvas, enemyId, 0, 0, 32, 32, frame);
			// 执行动画
			const manager = applyFragWith(canvas);
			const frag = manager.canvas;
			// 设置特效画布的css属性
			frag.style.imageRendering = 'pixelated';
			frag.style.width = `${frag.width * core.domStyle.scale}px`;
			frag.style.height = `${frag.height * core.domStyle.scale}px`;
			const left = (x * 32 + 16 - frag.width / 2 - core.bigmap.offsetX) * core.domStyle.scale;
			const top = (y * 32 + 16 - frag.height / 2 - core.bigmap.offsetY) * core.domStyle.scale;
			frag.style.left = `${left}px`;
			frag.style.top = `${top}px`;
			frag.style.zIndex = '45';
			frag.style.position = 'absolute';
			// 将特效画布部署到样板上
			core.dom.gameDraw.appendChild(frag);
			// 当特效执行完毕后移除这个特效画布
			manager.onEnd.then(() => {
				frag.remove();
			});
		}
		return origin.apply(this, arguments);
	}

	if ('frag' in core.plugin) {
		throw new ReferenceError(`core.plugin上已存在名为frag的属性！`);
	}
	core.plugin.frag = {
		applyFragWith
	};
}
}