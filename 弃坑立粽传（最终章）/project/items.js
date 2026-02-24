var items_296f5d02_12fd_4166_a7c1_b5e830c9ee3a = 
{
	"yellowKey": {
		"cls": "tools",
		"name": "黄钥匙",
		"text": "可以打开一扇黄门",
		"hideInToolbox": true
	},
	"blueKey": {
		"cls": "tools",
		"name": "蓝钥匙",
		"text": "可以打开一扇蓝门",
		"hideInToolbox": true
	},
	"redKey": {
		"cls": "tools",
		"name": "红钥匙",
		"text": "可以打开一扇红门",
		"hideInToolbox": true
	},
	"redJewel": {
		"cls": "items",
		"name": "一阶红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueJewel": {
		"cls": "items",
		"name": "一阶蓝宝石",
		"text": "，防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenJewel": {
		"cls": "items",
		"name": "一阶绿宝石",
		"text": "，护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowJewel": {
		"cls": "items",
		"name": "一阶黄宝石",
		"text": null,
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": null,
		"useItemEvent": [],
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.redPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.bluePotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.yellowPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"sword0": {
		"cls": "items",
		"name": "破旧的剑",
		"text": "一把已经生锈的剑",
		"equip": {
			"type": 0,
			"atk": 0,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "'，攻击+0'"
	},
	"sword1": {
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑",
		"equip": {
			"type": 0,
			"atk": 10,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "'，攻击+10'"
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "一把很普通的银剑",
		"equip": {
			"type": 0,
			"atk": 50,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "'，攻击+100'"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"atk": 40,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 250",
		"itemEffectTip": "'，攻击+250'"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"atk": 80,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 2000",
		"itemEffectTip": "'，攻击+2000'"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"atk": 100,
			"animate": "sword"
		},
		"itemEffect": "core.status.hero.atk += 15000",
		"itemEffectTip": "'，攻击+15000'"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"def": 0
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "'，防御+0'"
	},
	"shield1": {
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"def": 10
		},
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "'，防御+10'"
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"def": 20
		},
		"itemEffect": "core.status.hero.def += 100",
		"itemEffectTip": "'，防御+100'"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"def": 40
		},
		"itemEffect": "core.status.hero.def += 250",
		"itemEffectTip": "'，防御+250'"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"def": 80
		},
		"itemEffect": "core.status.hero.def += 2000",
		"itemEffectTip": "'，防御+2000'"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": null,
		"itemEffect": "core.status.hero.def += 15000",
		"itemEffectTip": "'，防御+15000'"
	},
	"superPotion": {
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "'，生命值翻倍'"
	},
	"moneyPocket": {
		"cls": "items",
		"name": "金钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "'，金币+500'"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\treturn core.status.maps[core.status.floorId].canFlyTo;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "幸运金币",
		"text": "持有时打败怪物可得双倍金币"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "持有后无视怪物的无敌属性"
	},
	"knife": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"shoes": {
		"cls": "constants",
		"name": "绿鞋",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "tools",
		"name": "大黄门钥匙",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，全钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "传闻是亘古时期一位无上大能所打造的钥匙,一旦全部取得便可天下无敌！"
	},
	"steelKey": {
		"cls": "tools",
		"name": "铁门钥匙",
		"text": "可以打开一扇铁门"
	},
	"pickaxe": {
		"cls": "tools",
		"name": "破墙镐",
		"text": "可以破坏勇士面前的墙",
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.block.disable) return false;\n\t\treturn block.block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否四方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 四方向破\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('pickaxe.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\t// 无法使用\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.removeBlock(core.nextX(), core.nextY());\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.block.disable || block.block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar bombFourDirections = false; // 是否四方向可炸；如果是将其改成true。\n\tif (bombFourDirections) {\n\t\t// 四方向炸\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBomb(nx, ny)) {\n\t\t\t\tbombList.push([nx, ny]);\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tif (canBomb(core.nextX(), core.nextY())) {\n\t\t\tbombList.push([core.nextX(), core.nextY()]);\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t}\n\t}\n\n\tif (bombList.length > 0) {\n\t\tcore.playSound('bomb.mp3');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\t// 炸弹后事件\n\t// 这是一个使用炸弹也能开门的例子\n\t/*\n\tif (core.status.floorId=='xxx' && core.terrainExists(x0,y0,'specialDoor') // 某个楼层，该机关门存在\n\t\t&& !core.enemyExists(x1,y1) && !core.enemyExists(x2,y2)) // 且守门的怪物都不存在\n\t{\n\t\tcore.insertAction([ // 插入事件\n\t\t\t{\"type\": \"openDoor\", \"loc\": [x0,y0]} // 开门\n\t\t])\n\t}\n\t*/\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width-1-core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height-1-core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width-1-core.getHeroLoc('x'), toY = core.bigmap.height-1-core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
	},
	"upFly": {
		"cls": "tools",
		"name": "上楼器",
		"text": "可以飞往楼上的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) + 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index < core.floorIds.length - 1) {\n\t\tvar toId = core.floorIds[index + 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"downFly": {
		"cls": "tools",
		"name": "下楼器",
		"text": "可以飞往楼下的相同位置",
		"useItemEffect": "(function () {\n\tvar floorId = core.floorIds[core.floorIds.indexOf(core.status.floorId) - 1];\n\tif (core.status.event.id == 'action') {\n\t\tcore.insertAction([\n\t\t\t{ \"type\": \"changeFloor\", \"loc\": [core.getHeroLoc('x'), core.getHeroLoc('y')], \"floorId\": floorId },\n\t\t\t{ \"type\": \"tip\", \"text\": core.material.items[itemId].name + '使用成功' }\n\t\t]);\n\t} else {\n\t\tcore.changeFloor(floorId, null, core.status.hero.loc, null, function () {\n\t\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t\t\tcore.replay();\n\t\t});\n\t}\n})();",
		"canUseItemEffect": "(function () {\n\tvar floorId = core.status.floorId,\n\t\tindex = core.floorIds.indexOf(floorId);\n\tif (index > 0) {\n\t\tvar toId = core.floorIds[index - 1],\n\t\t\ttoX = core.getHeroLoc('x'),\n\t\t\ttoY = core.getHeroLoc('y');\n\t\tvar mw = core.floors[toId].width,\n\t\t\tmh = core.floors[toId].height;\n\t\tif (toX >= 0 && toX < mw && toY >= 0 && toY < mh && core.getBlock(toX, toY, toId) == null) {\n\t\t\treturn true;\n\t\t}\n\t}\n\treturn false;\n})();"
	},
	"earthquake": {
		"cls": "tools",
		"name": "地震卷轴",
		"text": "可以破坏当前层的所有墙",
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.drawMap(core.status.floorId, function () {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t});\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.removeFlag('poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.removeFlag('weak');\nif (core.values.weakValue>=1) { // >=1：直接扣数值\n\tcore.status.hero.atk += core.values.weakValue;\n\tcore.status.hero.def += core.values.weakValue;\n}\nelse { // <1：扣比例\n\tcore.addBuff(\"atk\", core.values.weakValue);\n\tcore.addBuff(\"def\", core.values.weakValue);\n}",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.removeFlag('curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.removeFlag('poison');\nif (core.hasFlag('weak')) {\n\tcore.removeFlag('weak');\n\tif (core.values.weakValue>=1) { // >=1：直接扣数值\n\t\tcore.status.hero.atk += core.values.weakValue;\n\t\tcore.status.hero.def += core.values.weakValue;\n\t}\n\telse { // <1：扣比例\n\t\tcore.addBuff(\"atk\", core.values.weakValue);\n\t\tcore.addBuff(\"def\", core.values.weakValue);\n\t}\n}\ncore.removeFlag('curse');",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "core.playSound('bomb.mp3');\ncore.removeBlockByIds(core.status.floorId, core.status.event.ui);\ncore.drawMap(core.status.floorId, function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\tcore.events.afterUseBomb();\n});",
		"canUseItemEffect": "(function() {\n\tvar ids = [], id2s = [];\n\tfor (var i in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[i];\n\t\tif (!block.disable && block.event.cls.indexOf('enemy')==0 && core.nearHero(block.x, block.y)) {\n\t\t\tvar enemy = core.material.enemys[block.event.id];\n\t\t\tif (core.isset(enemy) && enemy.notBomb) continue;\n\t\t\tif (block.x==core.nextX() && block.y==core.nextY())\n\t\t\t\tids.push(i);\n\t\t\telse\n\t\t\t\tid2s.push(i);\n\t\t}\n\t}\n\tif (ids.length>0) {\n\t\tcore.status.event.ui = ids;\n\t\treturn true;\n\t}\n\telse if (id2s.length==1) {\n\t\tcore.status.event.ui = id2s;\n\t\treturn true;\n\t}\n\treturn false;\n})();"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEffect": "core.insertAction([\n\t{\"type\": \"input\", \"text\": \"请输入生命魔杖使用次数：(0-${item:lifeWand})\"},\n\t{\"type\": \"if\", \"condition\": \"flag:input<=item:lifeWand\",\n\t\t\"true\": [\n\t\t\t{\"type\": \"setValue\", \"name\": \"item:lifeWand\", \"value\": \"item:lifeWand-flag:input\"},\n\t\t\t{\"type\": \"setValue\", \"name\": \"status:hp\", \"value\": \"status:hp+flag:input*100\"},\n\t\t\t\"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。\"\n\t\t],\n\t\t\"false\": [\"输入不合法！\"]\n\t},\n]);\ncore.addItem('lifeWand', 1);",
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.insertAction({\"type\":\"jumpHero\",\"loc\":[core.nextX(2),core.nextY(2)]});",
		"canUseItemEffect": "(function() {\n\tvar nx=core.nextX(2), ny=core.nextY(2);\n\treturn nx>=0 && nx<core.bigmap.width && ny>=0 && ny<core.bigmap.height && core.getBlockId(nx,ny)==null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "// 二倍斩的flag:skill为1\nif (core.getFlag('skill', 0)==0) { // 判断当前是否已经开了技能\n\tif (core.getStatus('mana')>=5) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.setFlag('skill', 1); // 开技能1\n\t\tcore.setFlag('skillName', '二倍斩'); // 设置技能名\n\t}\n\telse {\n\t\tcore.drawTip(\"魔力不足，无法开启技能\");\n\t}\n}\nelse { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n}",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"I323": {
		"cls": "items",
		"name": "新物品"
	},
	"I324": {
		"cls": "items",
		"name": "一丝感悟",
		"text": ""
	},
	"I325": {
		"cls": "items",
		"name": "新物品"
	},
	"I326": {
		"cls": "items",
		"name": "新物品"
	},
	"I327": {
		"cls": "items",
		"name": "新物品"
	},
	"I328": {
		"cls": "items",
		"name": "新物品"
	},
	"I329": {
		"cls": "items",
		"name": "新物品"
	},
	"I330": {
		"cls": "items",
		"name": "新物品"
	},
	"I331": {
		"cls": "items",
		"name": "新物品"
	},
	"I332": {
		"cls": "items",
		"name": "新物品"
	},
	"I333": {
		"cls": "items",
		"name": "新物品"
	},
	"I334": {
		"cls": "items",
		"name": "二阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2"
	},
	"I335": {
		"cls": "items",
		"name": "三阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 3"
	},
	"I336": {
		"cls": "items",
		"name": "四阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4"
	},
	"I337": {
		"cls": "items",
		"name": "五阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 5"
	},
	"I338": {
		"cls": "items",
		"name": "六阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 6"
	},
	"I339": {
		"cls": "items",
		"name": "七阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 7"
	},
	"I340": {
		"cls": "items",
		"name": "八阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8"
	},
	"I341": {
		"cls": "items",
		"name": "新物品"
	},
	"I342": {
		"cls": "items",
		"name": "新物品"
	},
	"I343": {
		"cls": "items",
		"name": "新物品"
	},
	"I344": {
		"cls": "items",
		"name": "二十阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 20"
	},
	"I345": {
		"cls": "items",
		"name": "九阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 9"
	},
	"I346": {
		"cls": "items",
		"name": "十阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 10"
	},
	"I347": {
		"cls": "items",
		"name": "十一阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 11"
	},
	"I348": {
		"cls": "items",
		"name": "十二阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 12"
	},
	"I349": {
		"cls": "items",
		"name": "十三阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 13"
	},
	"I350": {
		"cls": "items",
		"name": "二阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2"
	},
	"I351": {
		"cls": "items",
		"name": "三阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 3"
	},
	"I352": {
		"cls": "items",
		"name": "四阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4"
	},
	"I353": {
		"cls": "items",
		"name": "五阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 5"
	},
	"I354": {
		"cls": "items",
		"name": "六阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 6"
	},
	"I355": {
		"cls": "items",
		"name": "七阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 7"
	},
	"I356": {
		"cls": "items",
		"name": "八阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8"
	},
	"I357": {
		"cls": "items",
		"name": "新物品"
	},
	"I358": {
		"cls": "items",
		"name": "新物品"
	},
	"I359": {
		"cls": "items",
		"name": "新物品"
	},
	"I360": {
		"cls": "items",
		"name": "二十阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 20"
	},
	"I361": {
		"cls": "items",
		"name": "九阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 9"
	},
	"I362": {
		"cls": "items",
		"name": "十阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 10"
	},
	"I363": {
		"cls": "items",
		"name": "十一阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 11"
	},
	"I364": {
		"cls": "items",
		"name": "十二阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 12"
	},
	"I365": {
		"cls": "items",
		"name": "十三阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 13"
	},
	"I366": {
		"cls": "items",
		"name": "二阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2"
	},
	"I367": {
		"cls": "items",
		"name": "三阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 3"
	},
	"I368": {
		"cls": "items",
		"name": "四阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4"
	},
	"I369": {
		"cls": "items",
		"name": "五阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 5"
	},
	"I370": {
		"cls": "items",
		"name": "六阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 6"
	},
	"I371": {
		"cls": "items",
		"name": "七阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 7"
	},
	"I372": {
		"cls": "items",
		"name": "八阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8"
	},
	"I373": {
		"cls": "items",
		"name": "新物品"
	},
	"I374": {
		"cls": "items",
		"name": "新物品"
	},
	"I375": {
		"cls": "items",
		"name": "新物品"
	},
	"I376": {
		"cls": "items",
		"name": "二十阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 20"
	},
	"I377": {
		"cls": "items",
		"name": "九阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 9"
	},
	"I378": {
		"cls": "items",
		"name": "十阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 10"
	},
	"I379": {
		"cls": "items",
		"name": "十一阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 11"
	},
	"I380": {
		"cls": "items",
		"name": "十二阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 12"
	},
	"I381": {
		"cls": "items",
		"name": "十三阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 13"
	},
	"I382": {
		"cls": "items",
		"name": "二阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2"
	},
	"I383": {
		"cls": "items",
		"name": "三阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 3\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 3"
	},
	"I384": {
		"cls": "items",
		"name": "四阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4"
	},
	"I385": {
		"cls": "items",
		"name": "五阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 5\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 5"
	},
	"I386": {
		"cls": "items",
		"name": "六阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 6\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 6"
	},
	"I387": {
		"cls": "items",
		"name": "七阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 7\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 7"
	},
	"I388": {
		"cls": "items",
		"name": "八阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8"
	},
	"I389": {
		"cls": "items",
		"name": "新物品"
	},
	"I390": {
		"cls": "items",
		"name": "新物品"
	},
	"I391": {
		"cls": "items",
		"name": "二十阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 12\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 20"
	},
	"I392": {
		"cls": "items",
		"name": "二十阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 20\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 20"
	},
	"I393": {
		"cls": "items",
		"name": "九阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 9\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 9"
	},
	"I394": {
		"cls": "items",
		"name": "十阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 10\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 10"
	},
	"I395": {
		"cls": "items",
		"name": "十一阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 11\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 11"
	},
	"I396": {
		"cls": "items",
		"name": "十二阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 12\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 12"
	},
	"I397": {
		"cls": "items",
		"name": "十三阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 13\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 13"
	},
	"I398": {
		"cls": "items",
		"name": "新物品"
	},
	"I399": {
		"cls": "items",
		"name": "大红血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2.5"
	},
	"I400": {
		"cls": "items",
		"name": "大蓝血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 5"
	},
	"I401": {
		"cls": "items",
		"name": "大绿血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20"
	},
	"I402": {
		"cls": "items",
		"name": "大黄血瓶",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10"
	},
	"I403": {
		"cls": "items",
		"name": "新物品"
	},
	"I507": {
		"cls": "tools",
		"name": "命道牌",
		"text": "看起来跟普通的卡牌没什么区别",
		"useItemEvent": "看起来跟普通的卡牌没什么区别"
	},
	"I513": {
		"cls": "items",
		"name": "新物品"
	},
	"I666": {
		"cls": "items",
		"name": "桦神红水",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 50"
	},
	"I667": {
		"cls": "items",
		"name": "桦神蓝水",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 100"
	},
	"I668": {
		"cls": "items",
		"name": "桦神金水",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 150"
	},
	"I669": {
		"cls": "items",
		"name": "桦神紫水",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 200"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否四方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 四方向雪花\n\t\tfor (var direction in core.utils.scan) {\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\t} else {\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"I712": {
		"cls": "items",
		"name": "烈火剑",
		"itemEffect": "core.status.hero.atk += 75000",
		"itemEffectTip": "'，攻击+75000"
	},
	"I713": {
		"cls": "items",
		"name": "烈火盾",
		"itemEffect": "core.status.hero.def += 75000",
		"itemEffectTip": "'，防御+75000"
	},
	"I758": {
		"cls": "items",
		"name": "星尘剑",
		"itemEffect": "core.status.hero.atk += 350000",
		"itemEffectTip": "'，攻击+350000"
	},
	"I759": {
		"cls": "items",
		"name": "星尘盾",
		"itemEffect": "core.status.hero.def += 350000",
		"itemEffectTip": "'，防御+350000"
	},
	"I801": {
		"cls": "items",
		"name": "破晓剑",
		"itemEffect": "core.status.hero.atk += 2000000",
		"itemEffectTip": "'，攻击+2000000"
	},
	"I802": {
		"cls": "items",
		"name": "破晓盾",
		"itemEffect": "core.status.hero.def += 2000000",
		"itemEffectTip": "'，防御+2000000"
	},
	"I851": {
		"cls": "items",
		"name": "至阴剑",
		"itemEffect": "core.status.hero.atk += 100000000",
		"itemEffectTip": "，攻击+100000000"
	},
	"I852": {
		"cls": "items",
		"name": "至阴盾",
		"itemEffect": "core.status.hero.def += 100000000",
		"itemEffectTip": "，防御+100000000"
	},
	"I853": {
		"cls": "items",
		"name": "新物品"
	},
	"I854": {
		"cls": "items",
		"name": "新物品"
	},
	"I882": {
		"cls": "items",
		"name": "毁星剑",
		"itemEffect": "core.status.hero.atk += 250000000",
		"itemEffectTip": "，攻击+250000000"
	},
	"I883": {
		"cls": "items",
		"name": "毁星戒",
		"itemEffect": "core.status.hero.def += 250000000",
		"itemEffectTip": "，防御+250000000"
	},
	"I890": {
		"cls": "items",
		"name": "忘心剑",
		"itemEffect": "core.status.hero.atk += 7500000000",
		"itemEffectTip": "，攻击+7500000000"
	},
	"I891": {
		"cls": "items",
		"name": "忘心盾",
		"itemEffect": "core.status.hero.def += 7500000000",
		"itemEffectTip": "，防御+7500000000"
	},
	"I916": {
		"cls": "items",
		"name": "光明剑",
		"itemEffect": "core.status.hero.atk += 1000000000",
		"itemEffectTip": "，攻击+1000000000"
	},
	"I917": {
		"cls": "items",
		"name": "光明盾",
		"itemEffect": "core.status.hero.def += 1000000000",
		"itemEffectTip": "，防御+1000000000"
	},
	"I939": {
		"cls": "items",
		"name": "圣光剑",
		"itemEffect": "core.status.hero.atk += 3000000000",
		"itemEffectTip": "，攻击+3000000000"
	},
	"I940": {
		"cls": "items",
		"name": "圣光盾",
		"itemEffect": "core.status.hero.def += 3000000000",
		"itemEffectTip": "，防御+3000000000"
	},
	"I974": {
		"cls": "items",
		"name": "烈火剑",
		"itemEffect": "core.status.hero.atk += 5000000000",
		"itemEffectTip": "，攻击+5000000000"
	},
	"I975": {
		"cls": "items",
		"name": "烈火戒",
		"itemEffect": "core.status.hero.def += 5000000000",
		"itemEffectTip": "，防御+5000000000"
	},
	"I999": {
		"cls": "items",
		"name": "玄天剑",
		"itemEffect": "core.status.hero.atk += 100000000000",
		"itemEffectTip": "，攻击+一千亿"
	},
	"I1000": {
		"cls": "items",
		"name": "玄天链",
		"itemEffect": "core.status.hero.def += 100000000000",
		"itemEffectTip": "，防御+一千亿"
	},
	"I1018": {
		"cls": "items",
		"name": "黯夜剑",
		"itemEffect": "core.status.hero.atk += 300000000000",
		"itemEffectTip": "，攻击+三千亿"
	},
	"I1019": {
		"cls": "items",
		"name": "黯夜盾",
		"itemEffect": "core.status.hero.def += 300000000000",
		"itemEffectTip": "，防御+三千亿"
	},
	"I1025": {
		"cls": "tools",
		"name": "三把黄钥匙",
		"hideInToolbox": true,
		"text": "可以打开三扇黄门"
	},
	"I1036": {
		"cls": "items",
		"name": "破穹剑",
		"itemEffect": "core.status.hero.atk += 750000000000",
		"itemEffectTip": "，攻击+七千五百亿"
	},
	"I1037": {
		"cls": "items",
		"name": "破穹石",
		"itemEffect": "core.status.hero.def += 750000000000",
		"itemEffectTip": "，防御+七千五百亿"
	},
	"I1038": {
		"cls": "items",
		"name": "永生枪",
		"itemEffect": "core.status.hero.atk += 3000000000000",
		"itemEffectTip": "，攻击+三兆"
	},
	"I1039": {
		"cls": "items",
		"name": "永生盾",
		"itemEffect": "core.status.hero.def += 3000000000000",
		"itemEffectTip": "，防御+三兆"
	},
	"I1054": {
		"cls": "items",
		"name": "永生剑",
		"itemEffect": "core.status.hero.atk += 10000000000000",
		"itemEffectTip": "，攻击+十兆"
	},
	"I1055": {
		"cls": "items",
		"name": "永生盾",
		"itemEffect": "core.status.hero.def += 10000000000000",
		"itemEffectTip": "，防御+十兆"
	},
	"I1273": {
		"cls": "items",
		"name": "桦雪的一缕血气",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 500"
	},
	"I1274": {
		"cls": "items",
		"name": "桦雪的一缕魔力",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 1000",
		"hideInToolbox": false
	},
	"I1275": {
		"cls": "items",
		"name": "桦雪的一缕感悟",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2000"
	},
	"I1276": {
		"cls": "items",
		"name": "桦雪的一缕神威",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 5000"
	},
	"I1395": {
		"cls": "items",
		"name": "桦雪的一缕终梦",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10000"
	},
	"I1453": {
		"cls": "items",
		"name": "斩貂剑",
		"itemEffect": "core.status.hero.atk += 350000",
		"itemEffectTip": "，攻击+三十五万"
	},
	"I1454": {
		"cls": "items",
		"name": "四象盾",
		"itemEffect": "core.status.hero.def += 350000",
		"itemEffectTip": "，防御+三十五万"
	},
	"I1465": {
		"cls": "items",
		"name": "伏天翼",
		"itemEffect": "core.status.hero.def += 1000000",
		"itemEffectTip": "，防御+一百万"
	},
	"I1466": {
		"cls": "items",
		"name": "殒星剑",
		"itemEffect": "core.status.hero.atk += 1000000",
		"itemEffectTip": "，攻击+一百万"
	},
	"I1472": {
		"cls": "items",
		"name": "五十阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 50"
	},
	"I1473": {
		"cls": "items",
		"name": "五十阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 50"
	},
	"I1474": {
		"cls": "items",
		"name": "五十阶绿宝石",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 50"
	},
	"I1475": {
		"cls": "items",
		"name": "五十阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 50\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 50"
	},
	"I1504": {
		"cls": "items",
		"name": "浮生壶",
		"itemEffect": "core.status.hero.mdef += 500000000",
		"itemEffectTip": "，护盾+五亿"
	},
	"I1505": {
		"cls": "items",
		"name": "天虚剑",
		"itemEffect": "core.status.hero.atk += 50000000",
		"itemEffectTip": "，攻击+五千万"
	},
	"I1515": {
		"cls": "items",
		"name": "天虚盾",
		"itemEffect": "core.status.hero.def += 50000000",
		"itemEffectTip": "，防御+五千万"
	},
	"I1543": {
		"cls": "equips",
		"name": "三哼经",
		"equip": {
			"type": 0,
			"value": {},
			"percentage": {
				"mdef": 19810,
				"def": 1419,
				"atk": 1145
			}
		},
		"text": "传闻是一代兽王的独门武学，一旦融会贯通便可俯视寰宇！"
	},
	"I1592": {
		"cls": "equips",
		"name": "混元烤貂法",
		"text": "传闻是一位无上大能为了烤貂所开发的功法，一旦融会贯通便可变成烤貂律者！全属性*1.6。",
		"equip": {
			"type": 0,
			"value": {},
			"percentage": {
				"mdef": 60,
				"def": 60,
				"atk": 60
			}
		}
	},
	"I1614": {
		"cls": "items",
		"name": "二阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2"
	},
	"I1615": {
		"cls": "items",
		"name": "二阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2"
	},
	"I1616": {
		"cls": "items",
		"name": "三阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4"
	},
	"I1617": {
		"cls": "items",
		"name": "三阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4"
	},
	"I1618": {
		"cls": "items",
		"name": "四阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8"
	},
	"I1619": {
		"cls": "items",
		"name": "四阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8"
	},
	"I1620": {
		"cls": "items",
		"name": "五阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16"
	},
	"I1621": {
		"cls": "items",
		"name": "五阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16"
	},
	"I1622": {
		"cls": "items",
		"name": "六阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32"
	},
	"I1623": {
		"cls": "items",
		"name": "六阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32"
	},
	"I1624": {
		"cls": "items",
		"name": "七阶红宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 64"
	},
	"I1625": {
		"cls": "items",
		"name": "七阶蓝宝石",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 64"
	},
	"I1626": {
		"cls": "items",
		"name": "新物品"
	},
	"I1640": {
		"cls": "items",
		"name": "新物品"
	},
	"I1641": {
		"cls": "items",
		"name": "新物品"
	},
	"I1642": {
		"cls": "items",
		"name": "新物品"
	},
	"I1643": {
		"cls": "items",
		"name": "新物品"
	},
	"I1644": {
		"cls": "items",
		"name": "新物品"
	},
	"I1645": {
		"cls": "items",
		"name": "新物品"
	},
	"I1646": {
		"cls": "items",
		"name": "新物品"
	},
	"I1647": {
		"cls": "items",
		"name": "新物品"
	},
	"I1648": {
		"cls": "items",
		"name": "新物品"
	},
	"I1649": {
		"cls": "items",
		"name": "新物品"
	},
	"I1650": {
		"cls": "items",
		"name": "新物品"
	},
	"I1651": {
		"cls": "items",
		"name": "一阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio"
	},
	"I1652": {
		"cls": "items",
		"name": "二阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2"
	},
	"I1653": {
		"cls": "items",
		"name": "三阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4"
	},
	"I1654": {
		"cls": "items",
		"name": "四阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8"
	},
	"I1655": {
		"cls": "items",
		"name": "五阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 16"
	},
	"I1656": {
		"cls": "items",
		"name": "六阶黄宝石",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32\ncore.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 32"
	},
	"I1657": {
		"cls": "items",
		"name": "新物品"
	},
	"I1658": {
		"cls": "items",
		"name": "新物品"
	},
	"I1659": {
		"cls": "items",
		"name": "新物品"
	},
	"I1660": {
		"cls": "items",
		"name": "新物品"
	},
	"I1661": {
		"cls": "items",
		"name": "新物品"
	},
	"I1662": {
		"cls": "items",
		"name": "新物品"
	}
}