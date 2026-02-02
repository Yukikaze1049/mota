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
	"redGem": {
		"cls": "items",
		"name": "红宝石",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石",
		"text": "，防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石",
		"text": "，护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
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
			"animate": "sword",
			"value": {
				"atk": 0
			}
		},
		"itemEffect": "core.status.hero.atk += 0",
		"itemEffectTip": "，攻击+0"
	},
	"sword1": {
		"cls": "constants",
		"name": "穿透之剑",
		"text": "获得30%的穿透",
		"equip": null,
		"itemEffect": "",
		"itemEffectTip": ""
	},
	"sword2": {
		"cls": "items",
		"name": "银剑",
		"text": "一把很普通的银剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 20
			}
		},
		"itemEffect": "core.status.hero.atk += 20",
		"itemEffectTip": "，攻击+20"
	},
	"sword3": {
		"cls": "items",
		"name": "骑士剑",
		"text": "一把很普通的骑士剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 40
			}
		},
		"itemEffect": "core.status.hero.atk += 40",
		"itemEffectTip": "，攻击+40"
	},
	"sword4": {
		"cls": "items",
		"name": "圣剑",
		"text": "一把很普通的圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 80
			}
		},
		"itemEffect": "core.status.hero.atk += 80",
		"itemEffectTip": "，攻击+80"
	},
	"sword5": {
		"cls": "items",
		"name": "神圣剑",
		"text": "一把很普通的神圣剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 160
			}
		},
		"itemEffect": "core.status.hero.atk += 100",
		"itemEffectTip": "，攻击+100"
	},
	"shield0": {
		"cls": "items",
		"name": "破旧的盾",
		"text": "一个很破旧的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 0
			}
		},
		"itemEffect": "core.status.hero.def += 0",
		"itemEffectTip": "，防御+0"
	},
	"shield1": {
		"cls": "constants",
		"name": "格挡之盾",
		"text": "获得18%的格挡效果",
		"equip": null,
		"itemEffect": "",
		"itemEffectTip": ""
	},
	"shield2": {
		"cls": "items",
		"name": "银盾",
		"text": "一个很普通的银盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 20
			}
		},
		"itemEffect": "core.status.hero.def += 20",
		"itemEffectTip": "，防御+20"
	},
	"shield3": {
		"cls": "items",
		"name": "骑士盾",
		"text": "一个很普通的骑士盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 40
			}
		},
		"itemEffect": "core.status.hero.def += 40",
		"itemEffectTip": "，防御+40"
	},
	"shield4": {
		"cls": "items",
		"name": "圣盾",
		"text": "一个很普通的圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 80
			}
		},
		"itemEffect": "core.status.hero.def += 80",
		"itemEffectTip": "，防御+80"
	},
	"shield5": {
		"cls": "items",
		"name": "神圣盾",
		"text": "一个很普通的神圣盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 100,
				"mdef": 100
			}
		},
		"itemEffect": "core.status.hero.def += 100;core.status.hero.mdef += 100",
		"itemEffectTip": "，防御+100，护盾+100"
	},
	"superPotion": {
		"cls": "constants",
		"name": "圣水",
		"itemEffect": "",
		"itemEffectTip": "，生命值提升50%",
		"useItemEffect": "",
		"canUseItemEffect": "true",
		"text": "勇者使用之后可以获得双倍生命值，但主角作为史莱姆，获得此宝物后，获得30%防御力数值的减伤，可以为负伤"
	},
	"book": {
		"cls": "constants",
		"name": "怪物手册",
		"text": "可以查看当前楼层各怪物属性",
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawBook(0);",
		"canUseItemEffect": "true"
	},
	"fly": {
		"cls": "constants",
		"name": "楼层传送器",
		"text": "可以自由往来去过的楼层",
		"hideInReplay": true,
		"hideInToolbox": true,
		"useItemEffect": "core.ui.drawFly(core.floorIds.indexOf(core.status.floorId));",
		"canUseItemEffect": "(function () {\n\tif (core.flags.flyNearStair && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
	},
	"coin": {
		"cls": "constants",
		"name": "幸运金币",
		"text": "持有时打败怪物可得双倍金币"
	},
	"freezeBadge": {
		"cls": "constants",
		"name": "冰冻徽章",
		"text": "可以将面前的熔岩变成平地",
		"useItemEffect": "(function () {\n\tvar success = false;\n\n\tvar snowFourDirections = false; // 是否多方向雪花；如果是将其改成true\n\tif (snowFourDirections) {\n\t\t// 多方向雪花\n\t\tfor (var direction in core.utils.scan) { // 多方向雪花默认四方向，如需改为八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (core.getBlockId(nx, ny) == 'lava') {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\tif (core.getBlockId(core.nextX(), core.nextY()) == 'lava') {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('打开界面');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"cross": {
		"cls": "constants",
		"name": "十字架",
		"text": "魔王铸造，对付吸血鬼的道具。史莱姆使用可以获得15%增伤"
	},
	"dagger": {
		"cls": "constants",
		"name": "屠龙匕首",
		"text": "该道具尚未被定义"
	},
	"amulet": {
		"cls": "constants",
		"name": "护符",
		"text": "持有时无视负面地形"
	},
	"bigKey": {
		"cls": "items",
		"name": "钥匙盒",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);",
		"itemEffectTip": "，红黄蓝钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"greenKey": {
		"cls": "tools",
		"name": "绿钥匙",
		"text": "可以打开一扇绿门"
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
		"useItemEffect": "(function () {\n\tvar canBreak = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable) return false;\n\t\treturn block.event.canBreak;\n\t};\n\n\tvar success = false;\n\tvar pickaxeFourDirections = false; // 是否多方向破；如果是将其改成true\n\tif (pickaxeFourDirections) {\n\t\t// 多方向破\n\t\tfor (var direction in core.utils.scan) { // 多方向破默认四方向，如需改成八方向请将这两个scan改为scan2\n\t\t\tvar delta = core.utils.scan[direction];\n\t\t\tvar nx = core.getHeroLoc('x') + delta.x,\n\t\t\t\tny = core.getHeroLoc('y') + delta.y;\n\t\t\tif (canBreak(nx, ny)) {\n\t\t\t\tcore.removeBlock(nx, ny);\n\t\t\t\tsuccess = true;\n\t\t\t}\n\t\t}\n\t} else {\n\t\t// 仅破当前\n\t\tif (canBreak(core.nextX(), core.nextY())) {\n\t\t\tcore.removeBlock(core.nextX(), core.nextY());\n\t\t\tsuccess = true;\n\t\t}\n\t}\n\n\tif (success) {\n\t\tcore.playSound('破墙镐');\n\t\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\t} else {\n\t\t// 无法使用\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip(\"当前无法使用\" + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"icePickaxe": {
		"cls": "tools",
		"name": "破冰镐",
		"text": "可以破坏勇士面前的一堵冰墙",
		"useItemEffect": "(function () {\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\tcore.insertAction({ \"type\": \"openDoor\", \"loc\": [\"core.nextX()\", \"core.nextY()\"] });\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.getBlockId(core.nextX(), core.nextY()) == 'ice';\n})();"
	},
	"bomb": {
		"cls": "tools",
		"name": "炸弹",
		"text": "可以炸掉勇士面前的怪物",
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\tcore.status.hero.money += money;\n\tcore.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\tif (todo.length > 0) core.insertAction(todo);\n\n})();",
		"canUseItemEffect": "true"
	},
	"centerFly": {
		"cls": "tools",
		"name": "中心对称飞行器",
		"text": "可以飞向当前楼层中心对称的位置",
		"useItemEffect": "core.playSound('centerFly.mp3');\ncore.clearMap('hero');\ncore.setHeroLoc('x', core.bigmap.width - 1 - core.getHeroLoc('x'));\ncore.setHeroLoc('y', core.bigmap.height - 1 - core.getHeroLoc('y'));\ncore.drawHero();\ncore.drawTip(core.material.items[itemId].name + '使用成功');",
		"canUseItemEffect": "(function () {\n\tvar toX = core.bigmap.width - 1 - core.getHeroLoc('x'),\n\t\ttoY = core.bigmap.height - 1 - core.getHeroLoc('y');\n\tvar id = core.getBlockId(toX, toY);\n\treturn id == null;\n})();"
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
		"useItemEffect": "(function () {\n\tvar indexes = [];\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\tif (!block.disable && block.event.canBreak) {\n\t\t\tindexes.push(index);\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(indexes);\n\tcore.redrawMap();\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.status.thisMap.blocks.filter(function (block) {\n\t\treturn !block.disable && block.event.canBreak;\n\t}).length > 0;\n})();"
	},
	"poisonWine": {
		"cls": "tools",
		"name": "解毒药水",
		"text": "可以解除中毒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'poison');",
		"canUseItemEffect": "core.hasFlag('poison');"
	},
	"weakWine": {
		"cls": "tools",
		"name": "解衰药水",
		"text": "可以解除衰弱状态",
		"useItemEffect": "core.triggerDebuff('remove', 'weak');",
		"canUseItemEffect": "core.hasFlag('weak');"
	},
	"curseWine": {
		"cls": "tools",
		"name": "解咒药水",
		"text": "可以解除诅咒状态",
		"useItemEffect": "core.triggerDebuff('remove', 'curse');",
		"canUseItemEffect": "core.hasFlag('curse');"
	},
	"superWine": {
		"cls": "tools",
		"name": "万能药水",
		"text": "可以解除所有不良状态",
		"useItemEffect": "core.triggerDebuff('remove', ['poison', 'weak', 'curse']);",
		"canUseItemEffect": "(function() {\n\treturn core.hasFlag('poison') || core.hasFlag('weak') || core.hasFlag('curse');\n})();"
	},
	"hammer": {
		"cls": "tools",
		"name": "圣锤",
		"text": "该道具尚未被定义"
	},
	"lifeWand": {
		"cls": "tools",
		"name": "生命魔杖",
		"text": "可以恢复100点生命值",
		"useItemEvent": [
			{
				"type": "comment",
				"text": "先恢复一个魔杖（因为使用道具必须消耗一个）"
			},
			{
				"type": "function",
				"function": "function(){\ncore.addItem('lifeWand', 1);\n}"
			},
			{
				"type": "playSound",
				"name": "打开界面"
			},
			{
				"type": "input",
				"text": "请输入生命魔杖使用次数：(0-${item:lifeWand})"
			},
			{
				"type": "comment",
				"text": "【接受用户输入】弹窗输入的结果将会保存在“flag:input”中\n如果需要更多帮助，请查阅帮助文档"
			},
			{
				"type": "if",
				"condition": "flag:input<=item:lifeWand",
				"true": [
					{
						"type": "setValue",
						"name": "item:lifeWand",
						"operator": "-=",
						"value": "flag:input"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "+=",
						"value": "flag:input*100"
					},
					{
						"type": "playSound",
						"name": "回血"
					},
					"成功使用${flag:input}次生命魔杖，恢复${flag:input*100}点生命。"
				],
				"false": [
					{
						"type": "playSound",
						"name": "操作失败"
					},
					"输入不合法！"
				]
			}
		],
		"canUseItemEffect": "true"
	},
	"jumpShoes": {
		"cls": "tools",
		"name": "跳跃靴",
		"text": "能跳跃到前方两格处",
		"useItemEffect": "core.playSound(\"跳跃\");\ncore.insertAction({ \"type\": \"jumpHero\", \"loc\": [core.nextX(2), core.nextY(2)] });",
		"canUseItemEffect": "(function () {\n\tvar nx = core.nextX(2),\n\t\tny = core.nextY(2);\n\treturn nx >= 0 && nx < core.bigmap.width && ny >= 0 && ny < core.bigmap.height && core.getBlockId(nx, ny) == null;\n})();"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：二倍斩",
		"text": "可以打开或关闭主动技能二倍斩",
		"hideInReplay": true,
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 5; // 技能的需求\n\tvar skillName = '二倍斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t}\n})();",
		"canUseItemEffect": "true"
	},
	"wand": {
		"cls": "items",
		"name": "新物品"
	},
	"pack": {
		"cls": "items",
		"name": "钱袋",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I355": {
		"cls": "items",
		"name": "四色钥匙盒",
		"text": "可以开启当前层所有黄门",
		"itemEffect": "core.addItem('yellowKey', 1);\ncore.addItem('blueKey', 1);\ncore.addItem('redKey', 1);\ncore.addItem('greenKey', 1);",
		"itemEffectTip": "，红黄蓝绿钥匙+1",
		"useItemEffect": "(function () {\n\tvar actions = core.searchBlock(\"yellowDoor\").map(function (block) {\n\t\treturn { \"type\": \"openDoor\", \"loc\": [block.x, block.y], \"async\": true };\n\t});\n\tactions.push({ \"type\": \"waitAsync\" });\n\tactions.push({ \"type\": \"tip\", \"text\": core.material.items[itemId].name + \"使用成功\" });\n\tcore.insertAction(actions);\n})();",
		"canUseItemEffect": "(function () {\n\treturn core.searchBlock('yellowDoor').length > 0;\n})();"
	},
	"I356": {
		"cls": "items",
		"name": "日记",
		"canUseItemEffect": "true"
	},
	"I357": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I358": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I359": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I360": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I361": {
		"cls": "constants",
		"name": "智慧权杖",
		"canUseItemEffect": "true",
		"text": "获得20%*回合数的0.5次方的吸血效果"
	},
	"I362": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I363": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I364": {
		"cls": "constants",
		"name": "魔法杖",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "confirm",
				"text": "确认要恢复生命值吗?",
				"yes": [
					{
						"type": "if",
						"condition": "(status:mana>=10)",
						"true": [
							{
								"type": "setValue",
								"name": "status:mana",
								"operator": "-=",
								"value": "10"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "(status:def)+(status:mdef)+100"
							}
						],
						"false": [
							{
								"type": "playSound",
								"name": "操作失败"
							},
							"你的魔力值不足！"
						]
					}
				],
				"no": []
			}
		],
		"text": "可以消耗10点魔力值，恢复自身防御力+护盾值+100的生命值"
	},
	"I365": {
		"cls": "constants",
		"name": "魔力绽放",
		"canUseItemEffect": "true",
		"text": "每击败一只怪物获得1点魔力值和10点生命值，主动技能：消耗8点魔力值对一排的怪物造成自身两倍攻击力-怪物防御力的伤害",
		"useItemEffect": "\t// 射箭強化\n\tvar skillNeed = 8\n\tif (core.status.hero.mana >= skillNeed) {\n\n\t\tvar canPass = function (x, y) {\n\t\t\tvar block = core.getBlock(x, y);\n\t\t\treturn block == null || !block.event.noPass;\n\t\t};\n\t\tvar i = 0;\n\t\tvar num = 0;\n\t\tvar success = 0;\n\t\tvar monLoc = []\n\n\t\twhile (core.nextX(i) >= 0 && core.nextX(i) <= core.status.thisMap.width && core.nextY(i) >= 0 && core.nextY(i) <= core.status.thisMap.height &&\n\t\t\t(canPass(core.nextX(i), core.nextY(i)) || core.enemyExists(core.nextX(i), core.nextY(i)))) {\n\t\t\ti += 1;\n\t\t\tif (core.enemyExists(core.nextX(i), core.nextY(i))) {\n\t\t\t\tmonLoc.push([core.nextX(i), core.nextY(i)])\n\t\t\t\t//\tcore.setFlag(\"monx\" + num, core.nextX(i));\n\t\t\t\t//\tcore.setFlag(\"mony\" + num, core.nextY(i));\n\t\t\t\tsuccess = 1;\n\t\t\t\tnum += 1;\n\t\t\t\t// console.log(i)\n\t\t\t\t// break;\n\t\t\t}\n\t\t\t// i += 1;\n\n\t\t}\n\t\tif (success == 0) {\n\t\t\tcore.drawTip(\"直線裡沒有敵人或是被障碍物擋了\");\n\t\t} else {\n\n\t\t\tcore.autosave();\n\t\t\tvar route = core.getFlag('tempRoute', \"\");\n\t\t\tcore.status.route.push(route)\n\t\t\tcore.status.hero.mana -= skillNeed\n\t\t\tcore.updateStatusBar()\n\n\n\t\t\tvar floorId = floorId || core.status.floorId;\n\t\t\tvar heroAtk = core.getRealStatusOrDefault(core.status.hero, 'atk');\n\t\t\tvar heroDef = core.getRealStatusOrDefault(core.status.hero, 'def');\n\t\t\tvar heroMdef = core.getRealStatusOrDefault(core.status.hero, 'mdef');\n\n\t\t\tvar herox = core.status.hero.loc.x;\n\t\t\tvar heroy = core.status.hero.loc.y;\n\t\t\tvar width = core.floors[floorId].width,\n\t\t\t\theight = core.floors[floorId].height;\n\t\t\t// var monx = core.getFlag('monx', 0);\n\t\t\t// var mony = core.getFlag('mony', 0);\n\n\t\t\tvar rangeX1 = 0,\n\t\t\t\trangeX2 = 0,\n\t\t\t\trangeY1 = 0,\n\t\t\t\trangeY2 = 0;\n\t\t\t// 動畫時間\n\t\t\tvar animateTime = 0;\n\t\t\tif (core.getFlag('skillAnimate', 0) == 1) animateTime = 100;\n\n\t\t\t// 畫面震動\n\n\n\t\t\tvar process = function () {\n\t\t\t\t//console.log(core.status.lockControl)\n\t\t\t\tfor (var dx = rangeX1; dx <= rangeX2; dx++) {\n\t\t\t\t\tfor (var dy = rangeY1; dy <= rangeY2; dy++) {\n\t\t\t\t\t\tfor (var j = 0; j <= monLoc.length - 1; j++) {\n\n\n\t\t\t\t\t\t\tvar nx = monLoc[j][0] + dx,\n\t\t\t\t\t\t\t\tny = monLoc[j][1] + dy;\n\n\t\t\t\t\t\t\tif (!core.enemyExists(nx, ny)) continue;\n\t\t\t\t\t\t\tif (nx < 0 || nx >= width || ny < 0 || ny >= height) continue;\n\n\t\t\t\t\t\t\tvar enemy = core.getEnemyInfo(core.getBlock(nx, ny, floorId).event.id, null, nx, ny);\n\t\t\t\t\t\t\tvar damage = Math.max((heroAtk * 5) - enemy.def, 0);\n\n\n\t\t\t\t\t\t\tcore.setEnemyOnPoint(nx, ny, null, 'hp', damage, \"-=\")\n\t\t\t\t\t\t\t// console.log(nx, ny)\n\t\t\t\t\t\t\tcore.drawAnimate('blood', nx, ny);\n\t\t\t\t\t\t\tcore.drawAnimate('hand', nx, ny);\n\n\n\t\t\t\t\t\t\t//技能顯傷\n\t\t\t\t\t\t\t//core.plugin.popSkillDamage(damage, nx, ny);\n\t\t\t\t\t\t\t//core.plugin.popSkillDamageSprite(damage, nx, ny);\n\n\t\t\t\t\t\t\t// 畫面震動\n\t\t\t\t\t\t\tvar dir = [\"horizontal\", \"vertical\", \"diagonal1\", \"diagonal2\"]\n\t\t\t\t\t\t\tvar ranDir = dir[Math.floor(Math.random() * 4)]\n\t\t\t\t\t\t\tif (core.getFlag('skillVibrate', 0) == 1 && !core.isReplaying()) core.vibrate(ranDir, 10, 1, 1)\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\n\n\n\t\t\t\tcore.autoGetItem()\n\t\t\t\tcore.autoBattle()\n\t\t\t\tcore.updateStatusBar();\n\n\n\n\t\t\t}\n\t\t\tif (core.isReplaying()) { process() } else { process() }\n\n\n\n\t\t\t//技能動畫\n\t\t\t//var animate = function () {\n\t\t\t//console.log(core.status.lockControl)\n\t\t\tif (core.getFlag('skillAnimate', 0) == 1 && !core.isReplaying()) {\n\t\t\t\tvar images = core.material.images.items;\n\t\t\t\tvar anime = ''\n\t\t\t\tvar sound = 'VXBow1.ogg'\n\t\t\t\tvar ran = Math.round(Math.random() * 100)\n\n\t\t\t\tcore.playSound(sound)\n\n\t\t\t\t//var x = core.getFlag('monx' + num, 0),\n\t\t\t\t//\ty = core.getFlag('mony' + num, 0);\n\t\t\t\tvar finalLoc = monLoc[monLoc.length - 1]\n\t\t\t\tvar finalLocX = finalLoc[0] * 32;\n\t\t\t\tvar finalLocY = finalLoc[1] * 32;\n\t\t\t\t// console.log(finalLoc)\n\n\t\t\t\tif (core.status.hero.loc.direction == \"left\") {\n\n\t\t\t\t\tcore.showImage(ran, images, [0, 32 * 107, 32, 32], [herox * 32, heroy * 32, 32, 32], 1, 0);\n\t\t\t\t\tcore.moveImage(ran, [finalLocX, finalLocY], 1, null, animateTime);\n\n\t\t\t\t}\n\n\t\t\t\tif (core.status.hero.loc.direction == \"right\") {\n\t\t\t\t\tcore.showImage(ran, images, [0, 32 * 108, 32, 32], [herox * 32, heroy * 32, 32, 32], 1, 0);\n\t\t\t\t\tcore.moveImage(ran, [finalLocX, finalLocY], 1, null, animateTime);\n\n\t\t\t\t}\n\t\t\t\tif (core.status.hero.loc.direction == \"up\") {\n\t\t\t\t\tcore.showImage(ran, images, [0, 32 * 105, 32, 32], [herox * 32, heroy * 32, 32, 32], 1, 0);\n\t\t\t\t\tcore.moveImage(ran, [finalLocX, finalLocY], 1, null, animateTime);\n\n\t\t\t\t}\n\t\t\t\tif (core.status.hero.loc.direction == \"down\") {\n\t\t\t\t\tcore.showImage(ran, images, [0, 32 * 106, 32, 32], [herox * 32, heroy * 32, 32, 32], 1, 0);\n\t\t\t\t\tcore.moveImage(ran, [finalLocX, finalLocY], 1, null, animateTime);\n\n\t\t\t\t}\n\t\t\t\tsetTimeout(function () {\n\t\t\t\t\tcore.hideImage(ran, 0);\n\t\t\t\t}, animateTime);\n\n\t\t\t}\n\n\t\t\t/*\n\t\t\tfor (var k = 0; k <= num; k++) {\n\t\t\t\tcore.removeFlag('monx' + k)\n\t\t\t\tcore.removeFlag('mony' + k)\n\t\t\t}\n\t\t\t*/\n\t\t}\n\n\t} else {\n\t\tcore.drawTip('魔力不足');\n\t}"
	},
	"I366": {
		"cls": "equips",
		"name": "绿史莱姆",
		"canUseItemEffect": "true",
		"text": "提升10点护盾值\n与灵兽红史莱姆、黑史莱姆、史莱姆王同时装备获得额外效果：10%吸血",
		"equip": {
			"type": "灵兽",
			"value": {
				"mdef": 10
			},
			"percentage": {}
		}
	},
	"I367": {
		"cls": "items",
		"name": "二阶红宝石",
		"text": "攻击+${core.values.redGem*2}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I368": {
		"cls": "items",
		"name": "二阶蓝宝石",
		"text": "，防御+${core.values.blueGem*2}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I369": {
		"cls": "items",
		"name": "二阶绿宝石",
		"text": "，护盾+${core.values.greenGem*2}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*2}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I370": {
		"cls": "items",
		"name": "二阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 2",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I371": {
		"cls": "items",
		"name": "三阶红宝石",
		"text": "攻击+${core.values.redGem*4}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I372": {
		"cls": "items",
		"name": "三阶蓝宝石",
		"text": "，防御+${core.values.blueGem*4}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I373": {
		"cls": "items",
		"name": "三阶绿宝石",
		"text": "，护盾+${core.values.greenGem*4}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I374": {
		"cls": "items",
		"name": "三阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 4",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I375": {
		"cls": "items",
		"name": "四阶红宝石",
		"text": "攻击+${core.values.redGem*8}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I376": {
		"cls": "items",
		"name": "四阶蓝宝石",
		"text": "，防御+${core.values.blueGem*8}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I377": {
		"cls": "items",
		"name": "四阶绿宝石",
		"text": "，护盾+${core.values.greenGem*8}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem * 8",
		"canUseItemEffect": "true"
	},
	"I378": {
		"cls": "items",
		"name": "四阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 8",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I379": {
		"cls": "items",
		"name": "五阶红宝石",
		"text": "攻击+${core.values.redGem*16}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I380": {
		"cls": "items",
		"name": "五阶蓝宝石",
		"text": "，防御+${core.values.blueGem*16}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I381": {
		"cls": "items",
		"name": "五阶绿宝石",
		"text": "，护盾+${core.values.greenGem*16}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*16}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I382": {
		"cls": "items",
		"name": "五阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 16",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I383": {
		"cls": "items",
		"name": "六阶红宝石",
		"text": "攻击+${core.values.redGem*32}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I384": {
		"cls": "items",
		"name": "六阶蓝宝石",
		"text": "，防御+${core.values.blueGem*32}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I385": {
		"cls": "items",
		"name": "六阶绿宝石",
		"text": "，护盾+${core.values.greenGem*32}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*32}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I386": {
		"cls": "items",
		"name": "六阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 32",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I387": {
		"cls": "items",
		"name": "七阶红宝石",
		"text": "攻击+${core.values.redGem*64}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I388": {
		"cls": "items",
		"name": "七阶蓝宝石",
		"text": "，防御+${core.values.blueGem*64}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I389": {
		"cls": "items",
		"name": "七阶绿宝石",
		"text": "，护盾+${core.values.greenGem*64}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*64}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I390": {
		"cls": "items",
		"name": "七阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 64\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 64\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 64",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I391": {
		"cls": "items",
		"name": "八阶红宝石",
		"text": "攻击+${core.values.redGem*128}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I392": {
		"cls": "items",
		"name": "八阶蓝宝石",
		"text": "，防御+${core.values.blueGem*128}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I393": {
		"cls": "items",
		"name": "八阶绿宝石",
		"text": "，护盾+${core.values.greenGem*128}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*128}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I394": {
		"cls": "items",
		"name": "八阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 128\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 128\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 128",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I395": {
		"cls": "items",
		"name": "九阶红宝石",
		"text": "攻击+${core.values.redGem*256}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I396": {
		"cls": "items",
		"name": "九阶蓝宝石",
		"text": "，防御+${core.values.blueGem*256}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I397": {
		"cls": "items",
		"name": "九阶绿宝石",
		"text": "，护盾+${core.values.greenGem*256}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*256}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I398": {
		"cls": "items",
		"name": "九阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 256\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 256\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 256",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I399": {
		"cls": "items",
		"name": "十阶红宝石",
		"text": "攻击+${core.values.redGem*512}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 512",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*512}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I400": {
		"cls": "items",
		"name": "十阶蓝宝石",
		"text": "，防御+${core.values.blueGem*512}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 512",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*512}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I401": {
		"cls": "items",
		"name": "十阶绿宝石",
		"text": "，护盾+${core.values.greenGem*512}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 512",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*512}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I402": {
		"cls": "items",
		"name": "十阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 512\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 512\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 512",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I403": {
		"cls": "items",
		"name": "十一阶红宝石",
		"text": "攻击+${core.values.redGem*1024}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 1024",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*1024}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I404": {
		"cls": "items",
		"name": "十一阶蓝宝石",
		"text": "，防御+${core.values.blueGem*1024}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 1024",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*1024}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I405": {
		"cls": "items",
		"name": "十一阶绿宝石",
		"text": "，护盾+${core.values.greenGem*1024}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 1024",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*1024}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I406": {
		"cls": "items",
		"name": "十一阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 1024\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 1024\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 1024",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I407": {
		"cls": "items",
		"name": "十二阶红宝石",
		"text": "攻击+${core.values.redGem*2048}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2048",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*2048}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I408": {
		"cls": "items",
		"name": "十二阶蓝宝石",
		"text": "，防御+${core.values.blueGem*2048}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2048",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*2048}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I409": {
		"cls": "items",
		"name": "十二阶绿宝石",
		"text": "，护盾+${core.values.greenGem*2048}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 2048",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*2048}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I410": {
		"cls": "items",
		"name": "十二阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 2048\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 2048\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 2048",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I411": {
		"cls": "items",
		"name": "十三阶红宝石",
		"text": "攻击+${core.values.redGem*4096}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4096",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*4096}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I412": {
		"cls": "items",
		"name": "十三阶蓝宝石",
		"text": "，防御+${core.values.blueGem*4096}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4096",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*4096}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I413": {
		"cls": "items",
		"name": "十三阶绿宝石",
		"text": "，护盾+${core.values.greenGem*4096}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 4096",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*4096}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I414": {
		"cls": "items",
		"name": "十三阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 4096\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 4096\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 4096",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I415": {
		"cls": "items",
		"name": "十四阶红宝石",
		"text": "攻击+${core.values.redGem*8192}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8192",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*8192}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I416": {
		"cls": "items",
		"name": "十四阶蓝宝石",
		"text": "，防御+${core.values.blueGem*8192}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8192",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*8192}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I417": {
		"cls": "items",
		"name": "十四阶绿宝石",
		"text": "，护盾+${core.values.greenGem*8192}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 8192",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*8192}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I418": {
		"cls": "items",
		"name": "十四阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 8192\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 8192\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 8192",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I419": {
		"cls": "items",
		"name": "十五阶红宝石",
		"text": "攻击+${core.values.redGem*16384}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16384",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*16384}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I420": {
		"cls": "items",
		"name": "十五阶蓝宝石",
		"text": "，防御+${core.values.blueGem*16384}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16384",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*16384}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I421": {
		"cls": "items",
		"name": "十五阶绿宝石",
		"text": "，护盾+${core.values.greenGem*16384}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 16384",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*16384}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I422": {
		"cls": "items",
		"name": "十五阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 16384\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 16384\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 16384",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I423": {
		"cls": "items",
		"name": "十六阶红宝石",
		"text": "攻击+${core.values.redGem*32768}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32768",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*32768}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I424": {
		"cls": "items",
		"name": "十六阶蓝宝石",
		"text": "，防御+${core.values.blueGem*32768}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32768",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*32768}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I425": {
		"cls": "items",
		"name": "十六阶绿宝石",
		"text": "，护盾+${core.values.greenGem*32768}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 32768",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*32768}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I426": {
		"cls": "items",
		"name": "十六阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 32768\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 32768\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 32768",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I427": {
		"cls": "items",
		"name": "十七阶红宝石",
		"text": "攻击+${core.values.redGem*65536}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 65536",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*65536}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I428": {
		"cls": "items",
		"name": "十七阶蓝宝石",
		"text": "，防御+${core.values.blueGem*65536}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 65536",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*65536}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I429": {
		"cls": "items",
		"name": "十七阶绿宝石",
		"text": "，护盾+${core.values.greenGem*65536}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 65536",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*65536}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I430": {
		"cls": "items",
		"name": "十七阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 65536\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 65536\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 65536",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I431": {
		"cls": "items",
		"name": "十八阶红宝石",
		"text": "攻击+${core.values.redGem*131072}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 131072",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*131072}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I432": {
		"cls": "items",
		"name": "十八阶蓝宝石",
		"text": "，防御+${core.values.blueGem*131072}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 131072",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*131072}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I433": {
		"cls": "items",
		"name": "十八阶绿宝石",
		"text": "，护盾+${core.values.greenGem*131072}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 131072",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*131072}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I434": {
		"cls": "items",
		"name": "十八阶黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 131072\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 131072\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 131072",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I435": {
		"cls": "items",
		"name": "黄金币",
		"itemEffect": "core.status.hero.money += 2000",
		"itemEffectTip": "，金币+2000"
	},
	"I436": {
		"cls": "items",
		"name": "翡翠币",
		"itemEffect": "core.status.hero.money += 3000",
		"itemEffectTip": "，金币+3000"
	},
	"I437": {
		"cls": "items",
		"name": "碧玉币",
		"itemEffect": "core.status.hero.money += 5000",
		"itemEffectTip": "，金币+5000"
	},
	"I438": {
		"cls": "items",
		"name": "蓝钻币",
		"itemEffect": "core.status.hero.money += 8000",
		"itemEffectTip": "，金币+8000"
	},
	"I439": {
		"cls": "items",
		"name": "紫灵币",
		"itemEffect": "core.status.hero.money += 10000",
		"itemEffectTip": "，金币+10000"
	},
	"I440": {
		"cls": "items",
		"name": "仙蕴币",
		"itemEffect": "core.status.hero.money += 20000",
		"itemEffectTip": "，金币+20000"
	},
	"I441": {
		"cls": "constants",
		"name": "彩色金币",
		"itemEffect": "",
		"itemEffectTip": "",
		"text": "钥匙商店打五折"
	},
	"I454": {
		"cls": "items",
		"name": "紫红血瓶",
		"text": "，生命+${core.values.greenPotion*2000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*2000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I455": {
		"cls": "items",
		"name": "天蓝血瓶",
		"text": "，生命+${core.values.greenPotion*4000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 4000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*4000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I456": {
		"cls": "items",
		"name": "皂红血瓶",
		"text": "，生命+${core.values.greenPotion*8000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 8000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*8000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I457": {
		"cls": "items",
		"name": "湖绿血瓶",
		"text": "，生命+${core.values.greenPotion*10000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*10000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I458": {
		"cls": "items",
		"name": "深紫血瓶",
		"text": "，生命+${core.values.greenPotion*20000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*20000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I459": {
		"cls": "items",
		"name": "幽紫血瓶",
		"text": "，生命+${core.values.greenPotion*40000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 40000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*40000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I460": {
		"cls": "items",
		"name": "青青血瓶",
		"text": "，生命+${core.values.greenPotion*80000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 80000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*80000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I461": {
		"cls": "items",
		"name": "超红血瓶",
		"text": "，生命+${core.values.greenPotion*100000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 100000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*100000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I462": {
		"cls": "items",
		"name": "超蓝血瓶",
		"text": "，生命+${core.values.greenPotion*200000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 200000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*200000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I463": {
		"cls": "items",
		"name": "超黄血瓶",
		"text": "，生命+${core.values.greenPotion*400000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 400000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*400000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I464": {
		"cls": "items",
		"name": "超绿血瓶",
		"text": "，生命+${core.values.greenPotion*800000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 800000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*800000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I465": {
		"cls": "items",
		"name": "超粉血瓶",
		"text": "，生命+${core.values.greenPotion*1000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 1000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*1000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I466": {
		"cls": "items",
		"name": "天青血瓶",
		"text": "，生命+${core.values.greenPotion*2000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*2000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I467": {
		"cls": "items",
		"name": "橘黄血瓶",
		"text": "，生命+${core.values.greenPotion*4000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 4000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*4000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I468": {
		"cls": "items",
		"name": "亮绿血瓶",
		"text": "，生命+${core.values.greenPotion*8000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 8000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*8000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I469": {
		"cls": "items",
		"name": "艳红血瓶",
		"text": "，生命+${core.values.greenPotion*10000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*10000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I470": {
		"cls": "items",
		"name": "靓蓝血瓶",
		"text": "，生命+${core.values.greenPotion*20000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*20000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I471": {
		"cls": "items",
		"name": "鲜红血瓶",
		"text": "，生命+${core.values.greenPotion*40000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 40000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*40000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I472": {
		"cls": "items",
		"name": "灿金血瓶",
		"text": "，生命+${core.values.greenPotion*80000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 80000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*80000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I473": {
		"cls": "items",
		"name": "超紫血瓶",
		"text": "，生命+${core.values.greenPotion*100000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 100000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*100000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I474": {
		"cls": "items",
		"name": "荧绿血瓶",
		"text": "，生命+${core.values.greenPotion*200000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 200000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*200000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I475": {
		"cls": "items",
		"name": "明红血瓶",
		"text": "，生命+${core.values.greenPotion*400000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 400000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*400000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I476": {
		"cls": "items",
		"name": "超橙血瓶",
		"text": "，生命+${core.values.greenPotion*800000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 800000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*800000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I477": {
		"cls": "items",
		"name": "暗蓝血瓶",
		"text": "，生命+${core.values.greenPotion*1000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 1000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*1000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I478": {
		"cls": "items",
		"name": "靓绿血瓶",
		"text": "，生命+${core.values.greenPotion*2000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 2000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*2000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I479": {
		"cls": "items",
		"name": "烛红血瓶",
		"text": "，生命+${core.values.greenPotion*4000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 4000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*4000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I480": {
		"cls": "items",
		"name": "火红血瓶",
		"text": "，生命+${core.values.greenPotion*8000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 8000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*8000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I481": {
		"cls": "items",
		"name": "玄金血瓶",
		"text": "，生命+${core.values.greenPotion*100000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 10000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*10000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I482": {
		"cls": "items",
		"name": "圣紫血瓶",
		"text": "，生命+${core.values.greenPotion*20000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*20000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I483": {
		"cls": "items",
		"name": "若绿血瓶",
		"text": "，生命+${core.values.greenPotion*40000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 40000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*40000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I484": {
		"cls": "items",
		"name": "帝蓝血瓶",
		"text": "，生命+${core.values.greenPotion*80000000000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 80000000000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*80000000000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I485": {
		"cls": "tools",
		"name": "强力炸弹",
		"canUseItemEffect": "true",
		"useItemEvent": null,
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar bombXYList = []; // 炸掉的怪物xy坐标列表\n\tvar expSum = 0;\n\tvar coinSum = 0;\n\tfor (var index in core.status.thisMap.blocks) {\n\t\tvar block = core.status.thisMap.blocks[index];\n\t\t// \t\tvar nx = block.x;\n\t\t// \t\tvar ny = block.y;\n\t\tvar enemyCanBomb = false;\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) {} else {\n\t\t\tvar enemy = core.material.enemys[block.event.id];\n\t\t\tvar enemyCanBomb = enemy && !enemy.notBomb;\n\t\t\tif (enemyCanBomb) {\n\t\t\t\tbombList.push(index);\n\t\t\t\texpSum += enemy.exp;\n\t\t\t\tcoinSum += enemy.money;\n\t\t\t\tbombXYList.push(block)\n\t\t\t}\n\t\t}\n\t}\n\tcore.removeBlockByIndexes(bombList);\n\tcore.status.hero.exp += expSum;\n\tcore.status.hero.money += coinSum;\n\tcore.playSound('bomb.mp3');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功');\n\tcore.drawMap();\n\tfor (var index in bombXYList) {\n\t\tcore.drawAnimate(\"zone\", bombXYList[index].x, bombXYList[index].y, false)\n\t}\n})();",
		"text": "将整层的怪物炸掉"
	},
	"I486": {
		"cls": "constants",
		"name": "金杖",
		"canUseItemEffect": "true",
		"text": "每开启一张红门，获得3把黄钥匙，开启一张蓝门获得1把黄钥匙，开启一张黄门获得500点生命值\n保底100%增伤，并拥有50点格挡，每拥有一把黄钥匙，获得1.5%的增伤，最多达到200%增伤，先攻无效。"
	},
	"I487": {
		"cls": "constants",
		"name": "赤杖",
		"canUseItemEffect": "true",
		"text": "获得魔攻效果"
	},
	"I488": {
		"cls": "constants",
		"name": "寒杖",
		"canUseItemEffect": "true",
		"text": "当勇者伤害对怪物有伤害时，获得30%反弹效果，将怪物30%的伤害反弹回去"
	},
	"I489": {
		"cls": "constants",
		"name": "紫杖",
		"canUseItemEffect": "true",
		"text": "获得攻击力和防御力增加护盾值5%的效果"
	},
	"I490": {
		"cls": "items",
		"name": "黄钥匙*3",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('yellowKey', 3)"
	},
	"I491": {
		"cls": "items",
		"name": "蓝钥匙*3",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('blueKey', 3)"
	},
	"I492": {
		"cls": "items",
		"name": "红钥匙*3",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('redKey', 3)"
	},
	"I493": {
		"cls": "items",
		"name": "绿钥匙*3",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('greenKey', 3)"
	},
	"I494": {
		"cls": "tools",
		"name": "攻击便携药剂",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:atk*50)"
			}
		],
		"text": "获得当前五十倍攻击力的生命值"
	},
	"I495": {
		"cls": "tools",
		"name": "防御便携药剂",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:def*100)"
			}
		],
		"text": "获得当前百倍防御力的生命值"
	},
	"I496": {
		"cls": "tools",
		"name": "便携药剂",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mdef*2)+(status:atk*2)+(status:def*2)+200"
			}
		],
		"text": "获得200+自身2倍攻防护盾值的生命值"
	},
	"I497": {
		"cls": "tools",
		"name": "高阶魔防便携药剂",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "(status:mdef*20)"
			}
		],
		"text": "获得当前二十倍护盾值的生命值"
	},
	"I498": {
		"cls": "constants",
		"name": "荆棘刺甲",
		"canUseItemEffect": "true",
		"text": ""
	},
	"I499": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I500": {
		"cls": "constants",
		"name": "连击神武",
		"canUseItemEffect": "true",
		"text": "获得二连击效果"
	},
	"I501": {
		"cls": "constants",
		"name": "冰封神盾",
		"canUseItemEffect": "true",
		"text": ""
	},
	"I502": {
		"cls": "constants",
		"name": "金章",
		"canUseItemEffect": "true",
		"text": "每开启一张红门，获得3把黄钥匙，开启一张蓝门获得1把黄钥匙，开启一张黄门获得50点生命值\n每拥有一把黄钥匙，获得0.2%的增伤，最多达到40%增伤。"
	},
	"I503": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I504": {
		"cls": "constants",
		"name": "骑士队长的本心",
		"canUseItemEffect": "true",
		"text": "被剥离的骑士队长的本心，曾经英勇正义的骑士，可以使骑士队长恢复本心。"
	},
	"I505": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I506": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I507": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I508": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I509": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I510": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I511": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I512": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I513": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I514": {
		"cls": "constants",
		"name": "铭血戒指",
		"canUseItemEffect": "true",
		"text": "获得200%的吸血，且无视吸血效果"
	},
	"I515": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I516": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I517": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I518": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I519": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I520": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I521": {
		"cls": "items",
		"name": "红圣石",
		"text": "攻击+${core.values.redGem*262144}",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 262144",
		"itemEffectTip": "，攻击+${core.values.redGem * core.status.thisMap.ratio*262144}",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"I522": {
		"cls": "items",
		"name": "蓝圣石",
		"text": "，防御+${core.values.blueGem*262144}",
		"itemEffect": "core.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 262144",
		"itemEffectTip": "，防御+${core.values.blueGem * core.status.thisMap.ratio*262144}",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"I523": {
		"cls": "items",
		"name": "绿圣石",
		"text": "，护盾+${core.values.greenGem*262144}",
		"itemEffect": "core.status.hero.mdef += core.values.greenGem * core.status.thisMap.ratio * 262144",
		"itemEffectTip": "，护盾+${core.values.greenGem * core.status.thisMap.ratio*262144}",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"I524": {
		"cls": "items",
		"name": "黄圣石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += core.values.redGem * core.status.thisMap.ratio * 262144\ncore.status.hero.def += core.values.blueGem * core.status.thisMap.ratio * 262144\ncore.status.hero.mdef += core.values.redGem * core.status.thisMap.ratio * 262144",
		"itemEffectTip": "，全属性提升",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"I525": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I526": {
		"cls": "constants",
		"name": "紫电石",
		"canUseItemEffect": "true"
	},
	"I527": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I528": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I529": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I530": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I531": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I532": {
		"cls": "constants",
		"name": "回血宝石",
		"canUseItemEffect": "true",
		"text": "击败怪物后，获得自身0.4倍攻击力和防御力之和的生命值，无视反击和破甲"
	},
	"I533": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I534": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I535": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I536": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I537": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I538": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I539": {
		"cls": "constants",
		"name": "盗贼手套",
		"canUseItemEffect": "true",
		"text": "与怪物战斗时，可以额外盗取一些物资"
	},
	"I540": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I541": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I542": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I543": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I544": {
		"cls": "items",
		"name": "铂币",
		"itemEffect": "core.status.hero.money += 50",
		"itemEffectTip": "，金币+50"
	},
	"I545": {
		"cls": "items",
		"name": "金币",
		"itemEffect": "core.status.hero.money += 30",
		"itemEffectTip": "，金币+50"
	},
	"I546": {
		"cls": "items",
		"name": "银币",
		"itemEffect": "core.status.hero.money += 20",
		"itemEffectTip": "，金币+20"
	},
	"I547": {
		"cls": "items",
		"name": "铜币",
		"itemEffect": "core.status.hero.money += 10",
		"itemEffectTip": "，金币+10"
	},
	"I548": {
		"cls": "items",
		"name": "黄铜币",
		"itemEffect": "core.status.hero.money += 5",
		"itemEffectTip": "，金币+5"
	},
	"I549": {
		"cls": "items",
		"name": "大铂币",
		"itemEffect": "core.status.hero.money += 1000",
		"itemEffectTip": "，金币+1000"
	},
	"I550": {
		"cls": "items",
		"name": "大金币",
		"itemEffect": "core.status.hero.money += 500",
		"itemEffectTip": "，金币+500"
	},
	"I551": {
		"cls": "items",
		"name": "大银币",
		"itemEffect": "core.status.hero.money += 300",
		"itemEffectTip": "，金币+300"
	},
	"I552": {
		"cls": "items",
		"name": "大铜币",
		"itemEffect": "core.status.hero.money += 200",
		"itemEffectTip": "，金币+200"
	},
	"I553": {
		"cls": "items",
		"name": "大黄铜币",
		"itemEffect": "core.status.hero.money += 100",
		"itemEffectTip": "，金币+100"
	},
	"I554": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I559": {
		"cls": "constants",
		"name": "系统设置ex",
		"canUseItemEffect": "true",
		"useItemEvent": [
			{
				"type": "choices",
				"text": "\t[选择打开自动拾取或者宝石血瓶详细信息]",
				"choices": [
					{
						"text": "宝石血瓶详细信息",
						"color": [
							254,
							17,
							54,
							1
						],
						"action": [
							{
								"type": "choices",
								"text": "开启宝石血瓶详细信息",
								"choices": [
									{
										"text": "打开",
										"color": [
											0,
											61,
											255,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "flag:itemDetail",
												"value": "true"
											}
										]
									},
									{
										"text": "关闭",
										"color": [
											13,
											248,
											17,
											1
										],
										"action": [
											{
												"type": "setValue",
												"name": "flag:itemDetail",
												"value": "false"
											}
										]
									}
								]
							}
						]
					},
					{
						"text": "自动拾取",
						"color": [
							7,
							245,
							131,
							1
						],
						"action": [
							{
								"type": "choices",
								"text": "自动拾取",
								"choices": [
									{
										"text": "打开自动拾取",
										"color": [
											237,
											3,
											120,
											1
										],
										"action": [
											"自动拾取已打开!",
											{
												"type": "setValue",
												"name": "flag:shiqu",
												"value": "true"
											}
										]
									},
									{
										"text": "关闭自动拾取",
										"color": [
											233,
											233,
											23,
											1
										],
										"action": [
											"自动拾取已关闭!",
											{
												"type": "setValue",
												"name": "flag:shiqu",
												"value": "false"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		],
		"text": "进行系统设置"
	},
	"I1027": {
		"cls": "equips",
		"name": "红史莱姆",
		"canUseItemEffect": "true",
		"text": "提升2点攻击\n绿史莱姆、红史莱姆、黑史莱姆、史莱姆王同时装备获得额外效果：10%吸血",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 2
			},
			"percentage": {}
		}
	},
	"I1028": {
		"cls": "equips",
		"name": "黑史莱姆",
		"canUseItemEffect": "true",
		"text": "提升5点防御\n与灵兽红史莱姆、绿史莱姆、史莱姆王同时装备获得额外效果：10%吸血",
		"equip": {
			"type": "灵兽",
			"value": {
				"def": 5
			},
			"percentage": {}
		}
	},
	"I1029": {
		"cls": "equips",
		"name": "史莱姆王",
		"canUseItemEffect": "true",
		"text": "自爆：与怪物战斗时炸掉怪物3%的生命值\n与灵兽红史莱姆、黑史莱姆、绿史莱姆同时装备获得额外效果：10%吸血",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1030": {
		"cls": "equips",
		"name": "骷髅人",
		"canUseItemEffect": "true",
		"text": "利刃，提升勇者5点攻击力\n与骷髅士兵、黄骷髅、紫骷髅套装效果，获得10%的穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 5
			},
			"percentage": {}
		}
	},
	"I1031": {
		"cls": "equips",
		"name": "骷髅士兵",
		"canUseItemEffect": "true",
		"text": "汲取，战斗后获得10点额外生命值\n与骷髅人、黄骷髅、紫骷髅套装效果，获得10%的穿透",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1032": {
		"cls": "equips",
		"name": "黄骷髅",
		"canUseItemEffect": "true",
		"text": "利刃，提升勇者8点防御力\n与骷髅士兵、骷髅人、紫骷髅套装效果，获得10%的穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"def": 8
			},
			"percentage": {}
		}
	},
	"I694": {
		"cls": "equips",
		"name": "火焰史莱姆.",
		"canUseItemEffect": "true",
		"text": "获得灼烧效果：每回合怪物额外受到勇者3%的伤害，且开启负伤\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {},
			"equipEvent": [
				{
					"type": "setGlobalFlag",
					"name": "enableNegativeDamage",
					"value": true
				}
			],
			"unequipEvent": [
				{
					"type": "setGlobalFlag",
					"name": "enableNegativeDamage",
					"value": false
				}
			]
		}
	},
	"I827": {
		"cls": "equips",
		"name": "火焰大蝙蝠",
		"canUseItemEffect": "true",
		"text": "获得灼烧效果：每回合怪物额外受到勇者5%的伤害\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1033": {
		"cls": "equips",
		"name": "火焰法师",
		"canUseItemEffect": "true",
		"text": "攻击力提升4%，护盾提升4%。\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": 4,
				"atk": 4
			}
		}
	},
	"I1034": {
		"cls": "equips",
		"name": "火焰幽灵",
		"canUseItemEffect": "true",
		"text": "获得20%的护盾\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": 20
			}
		}
	},
	"I1035": {
		"cls": "equips",
		"name": "火焰骷髅.",
		"canUseItemEffect": "true",
		"text": "获得灼烧效果：穿透提升6%，格挡减少2%\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1037": {
		"cls": "equips",
		"name": "火焰兽人",
		"canUseItemEffect": "true",
		"text": "获得10%的减伤\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1038": {
		"cls": "equips",
		"name": "火焰兽人武士",
		"canUseItemEffect": "true",
		"text": "获得5%的吸血效果\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1039": {
		"cls": "equips",
		"name": "火焰骑士",
		"canUseItemEffect": "true",
		"text": "获得10%的攻击力，但减少3%的防御力和2%的护盾\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": -2,
				"def": -3,
				"atk": 10
			}
		}
	},
	"I1040": {
		"cls": "equips",
		"name": "火焰黑骑士",
		"canUseItemEffect": "true",
		"text": "获得5%的格挡\n火焰史莱姆、火焰大蝙蝠、火焰法师、火焰骷髅、火焰幽灵、火焰兽人、火焰兽人武士、火焰骑士、火焰黑骑士任意六个可获得套装效果烈火焚天，勇者战斗时攻击力提升40%。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1047": {
		"cls": "equips",
		"name": "蓝蝶",
		"canUseItemEffect": "true",
		"text": "获得100点攻击力\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶内有火蝶，则获得效果花聚花散，比魂息魂灭额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 100
			},
			"percentage": {}
		}
	},
	"I1048": {
		"cls": "equips",
		"name": "紫蝶",
		"canUseItemEffect": "true",
		"text": "获得100点防御力\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶中有火蝶，则额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"def": 100
			},
			"percentage": {}
		}
	},
	"I1049": {
		"cls": "equips",
		"name": "粉蝶",
		"canUseItemEffect": "true",
		"text": "获得50点攻击力和50点防御力\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶中有火蝶，则额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"def": 50,
				"atk": 50
			},
			"percentage": {}
		}
	},
	"I1050": {
		"cls": "equips",
		"name": "橙蝶",
		"canUseItemEffect": "true",
		"text": "获得100点攻击力\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶中有火蝶，则额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"mdef": 1000
			},
			"percentage": {}
		}
	},
	"I1052": {
		"cls": "equips",
		"name": "金蝶",
		"canUseItemEffect": "true",
		"text": "获得30点攻击力和700点护盾\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶中有火蝶，则额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 30,
				"mdef": 700
			},
			"percentage": {}
		}
	},
	"I1053": {
		"cls": "equips",
		"name": "碧蝶",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有20%穿透和5%的格挡\n如果六种蝴蝶中有火蝶，则额外获得20%穿透",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1054": {
		"cls": "equips",
		"name": "紫骷髅",
		"canUseItemEffect": "true",
		"text": "提升勇者2%的攻击力\n与骷髅士兵、黄骷髅、骷髅人套装效果，获得10%的穿透\n与紫蝙蝠套装效果，双紫幻灭，获得8%格挡\n(两种套装效果不能同时获得，同时装备默认为双紫幻灭)",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 2
			}
		}
	},
	"I1051": {
		"cls": "equips",
		"name": "火蝶",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n凑齐六种颜色的蝴蝶可获得效果，魂息魂灭，拥有40%穿透和5%的格挡",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1056": {
		"cls": "tools",
		"name": "黑钥匙",
		"canUseItemEffect": "true",
		"text": "打开一扇黑门"
	},
	"I1064": {
		"cls": "tools",
		"name": "紫钥匙",
		"canUseItemEffect": "true",
		"text": "打开一扇紫门"
	},
	"I1065": {
		"cls": "equips",
		"name": "冰史莱姆",
		"canUseItemEffect": "true",
		"text": "可以冰冻敌人一回合\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1066": {
		"cls": "equips",
		"name": "冰石人",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1067": {
		"cls": "equips",
		"name": "冰灵",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1068": {
		"cls": "equips",
		"name": "冰法师",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1069": {
		"cls": "equips",
		"name": "冰剑士",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1070": {
		"cls": "equips",
		"name": "冰蝙蝠",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1071": {
		"cls": "equips",
		"name": "冰骷髅",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n冰史莱姆、冰石人、冰灵、冰法师、冰蝙蝠、冰骷髅、冰剑士任意六个拥有套装效果寒冰永固:战斗时获得40%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1072": {
		"cls": "equips",
		"name": "星焰",
		"canUseItemEffect": "true",
		"text": "暂未定\n凑齐四团火焰可以获得效果:吟火之诵，将20%的防御力转换为可以抵挡魔攻的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1073": {
		"cls": "equips",
		"name": "灵焰",
		"canUseItemEffect": "true",
		"text": "暂未定\n凑齐四团火焰可以获得效果:吟火之诵，将20%的防御力转换为可以抵挡魔攻的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1074": {
		"cls": "equips",
		"name": "圣焰",
		"canUseItemEffect": "true",
		"text": "暂未定\n凑齐四团火焰可以获得效果:吟火之诵，将20%的防御力转换为可以抵挡魔攻的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1075": {
		"cls": "equips",
		"name": "冥焰",
		"canUseItemEffect": "true",
		"text": "暂未定\n凑齐四团火焰可以获得效果:吟火之诵，将20%的防御力转换为可以抵挡魔攻的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1076": {
		"cls": "equips",
		"name": "阴史莱姆",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "单只无效果\n与阳史莱姆获得阴阳交互，反弹30%的伤害"
	},
	"I1077": {
		"cls": "equips",
		"name": "阳史莱姆",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "单只无效果\n与阴史莱姆获得阴阳交互，反弹30%的伤害"
	},
	"I1078": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1079": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1080": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1081": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1082": {
		"cls": "equips",
		"name": "三彩史莱姆",
		"canUseItemEffect": "true",
		"text": "获得2%的攻击力和3%的防御力\n三彩史莱姆、三彩中史莱姆、三彩大史莱姆、三彩史莱姆王一起装备可获得效果，三色变，全属性提升10%",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 3,
				"atk": 2
			}
		}
	},
	"I1083": {
		"cls": "equips",
		"name": "三色中史莱姆",
		"canUseItemEffect": "true",
		"text": "获得3%的攻击力和5%的防御力\n三彩史莱姆、三彩中史莱姆、三彩大史莱姆、三彩史莱姆王一起装备可获得效果，三色变，全属性提升10%",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 5,
				"atk": 3
			}
		}
	},
	"I1084": {
		"cls": "equips",
		"name": "三彩大史莱姆",
		"canUseItemEffect": "true",
		"text": "获得5%的攻击力和14%的护盾\n三彩史莱姆、三彩中史莱姆、三彩大史莱姆、三彩史莱姆王一起装备可获得效果，三色变，全属性提升10%",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": 14,
				"atk": 5
			}
		}
	},
	"I1085": {
		"cls": "equips",
		"name": "史莱姆王",
		"canUseItemEffect": "true",
		"text": "暂未定\n三彩史莱姆、三彩中史莱姆、三彩大史莱姆、三彩史莱姆王一起装备可获得效果，三色变，全属性提升10%",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 0,
				"atk": 0
			}
		}
	},
	"I1086": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1087": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1088": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1089": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1090": {
		"cls": "equips",
		"name": "星史莱姆",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n日月星史莱姆套装效果:战后回复1%的生命值。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1091": {
		"cls": "equips",
		"name": "月史莱姆",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n日月星史莱姆套装效果:战后回复1%的生命值。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1092": {
		"cls": "equips",
		"name": "日史莱姆",
		"canUseItemEffect": "true",
		"text": "效果暂未定\n日月星史莱姆套装效果:战后回复1%的生命值。",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1093": {
		"cls": "equips",
		"name": "墨眼",
		"canUseItemEffect": "true",
		"text": "获得4%的穿透\n与明眼一起获得效果凝视，击败怪物额外获得12%护盾值的生命值",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1094": {
		"cls": "equips",
		"name": "明眼",
		"canUseItemEffect": "true",
		"text": "获得4%的格挡\n与墨眼一起获得效果凝视，击败怪物额外获得12%护盾值的生命值",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1095": {
		"cls": "equips",
		"name": "白蝙蝠",
		"canUseItemEffect": "true",
		"text": "提升勇者5%的防御力\n与黑蝙蝠一起获得黑白之力，每回合进行一次50%伤害的连击",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 5
			}
		}
	},
	"I1096": {
		"cls": "equips",
		"name": "大白蝙蝠",
		"canUseItemEffect": "true",
		"text": "将勇者25%防御转换为攻击",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1097": {
		"cls": "equips",
		"name": "白色吸血蝙蝠",
		"canUseItemEffect": "true",
		"text": "暂未定",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 5
			}
		}
	},
	"I1098": {
		"cls": "equips",
		"name": "墨蝙蝠",
		"canUseItemEffect": "true",
		"text": "提升勇者5%的攻击力\n与白蝙蝠一起获得黑白之力，每回合进行一次50%伤害的连击",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 5
			}
		}
	},
	"I1099": {
		"cls": "equips",
		"name": "橙红仙子",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 8
			}
		},
		"text": "获得8%的攻击力\n橙红仙子、湛蓝仙子、赤金仙子、翡翠仙子一同装备获得套装效果，极速连斩，拥有二连击"
	},
	"I1100": {
		"cls": "equips",
		"name": "湛蓝仙子",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "暂未定\n橙红仙子、湛蓝仙子、赤金仙子、翡翠仙子一同装备获得套装效果，极速连斩，拥有二连击"
	},
	"I1101": {
		"cls": "equips",
		"name": "赤金仙子",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "暂未定\n橙红仙子、湛蓝仙子、赤金仙子、翡翠仙子一同装备获得套装效果，极速连斩，拥有二连击"
	},
	"I1102": {
		"cls": "equips",
		"name": "翡翠仙子",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "暂未定\n橙红仙子、湛蓝仙子、赤金仙子、翡翠仙子一同装备获得套装效果，极速连斩，拥有二连击"
	},
	"I1103": {
		"cls": "equips",
		"name": "紫蝙蝠",
		"canUseItemEffect": "true",
		"text": "提升勇者3%的防御力\n与紫骷髅套装效果，双紫幻灭，获得8%格挡",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 3
			}
		}
	},
	"I1105": {
		"cls": "equips",
		"name": "黑暗大法师",
		"canUseItemEffect": "true",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		},
		"text": "颠倒乾坤，使敌人攻防互换"
	},
	"I1106": {
		"cls": "equips",
		"name": "金骑士",
		"canUseItemEffect": "true",
		"text": "获得1%的攻击力2%的防御力和10%的护盾\n蓝骑士、金骑士、红骑士、黑骑士任意三个组成套装效果，骑士之魂，战斗时获得15%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 1,
				"def": 1,
				"mdef": 10
			}
		}
	},
	"I1107": {
		"cls": "equips",
		"name": "红骑士",
		"canUseItemEffect": "true",
		"text": "获得8%的攻击力和4%的防御力\n蓝骑士、金骑士、红骑士、黑骑士任意三个组成套装效果，骑士之魂，战斗时获得15%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 8,
				"def": 4
			}
		}
	},
	"I1108": {
		"cls": "equips",
		"name": "蓝骑士",
		"canUseItemEffect": "true",
		"text": "获得3%的攻击力和3%的防御力\n蓝骑士、金骑士、红骑士、黑骑士任意三个组成套装效果，骑士之魂，战斗时获得15%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 3,
				"def": 3
			}
		}
	},
	"I1109": {
		"cls": "equips",
		"name": "黑暗骑士",
		"canUseItemEffect": "true",
		"text": "获得2%的攻击力和4%的防御力，5%的护盾\n蓝骑士、金骑士、红骑士、黑骑士任意三个组成套装效果，骑士之魂，战斗时获得15%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"atk": 2,
				"def": 4,
				"mdef": 5
			}
		}
	},
	"I1110": {
		"cls": "equips",
		"name": "冥战士",
		"canUseItemEffect": "true",
		"text": "提升6%的防御力",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"def": 6
			}
		}
	},
	"I1111": {
		"cls": "equips",
		"name": "双手剑士",
		"canUseItemEffect": "true",
		"text": "提升8%的护盾",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": 8
			}
		}
	},
	"I1112": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1113": {
		"cls": "equips",
		"name": "小蝙蝠",
		"canUseItemEffect": "true",
		"text": "获得100点生命值",
		"equip": {
			"type": "灵兽",
			"value": {
				"hp": 100
			},
			"percentage": {}
		}
	},
	"I1114": {
		"cls": "equips",
		"name": "大蝙蝠",
		"canUseItemEffect": "true",
		"text": "获得10点防御力",
		"equip": {
			"type": "灵兽",
			"value": {
				"def": 10
			},
			"percentage": {}
		}
	},
	"I1115": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1117": {
		"cls": "equips",
		"name": "兽人",
		"canUseItemEffect": "true",
		"text": "获得2点攻击力和8点护盾",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 2,
				"mdef": 8
			},
			"percentage": {}
		}
	},
	"I1118": {
		"cls": "equips",
		"name": "兽人武士",
		"canUseItemEffect": "true",
		"text": "获得3点攻击力和4点防御力",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": 3,
				"def": 4
			},
			"percentage": {}
		}
	},
	"I1119": {
		"cls": "equips",
		"name": "石头人",
		"canUseItemEffect": "true",
		"text": "坚固，获得18点防御力和800点生命值，但攻击力减少5点",
		"equip": {
			"type": "灵兽",
			"value": {
				"atk": -5,
				"def": 18,
				"hp": 800
			},
			"percentage": {}
		}
	},
	"I1120": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1121": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1124": {
		"cls": "equips",
		"name": "幽灵",
		"canUseItemEffect": "true",
		"text": "获得1%的全属性",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {
				"mdef": 1,
				"def": 1,
				"atk": 1
			}
		}
	},
	"I1152": {
		"cls": "equips",
		"name": "魔焰星君",
		"canUseItemEffect": "true",
		"text": "灵兽榜上排名第三的火系君主。\n全属性翻倍，获得连击效果和每回合20%攻击力的灼烧效果",
		"equip": {
			"type": "圣兽",
			"value": {},
			"percentage": {
				"mdef": 100,
				"def": 100,
				"atk": 100
			}
		}
	},
	"I1153": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true",
		"itemEffect": "core.addItem('I1064', 3)"
	},
	"I1158": {
		"cls": "equips",
		"name": "独天神兽",
		"canUseItemEffect": "true",
		"equip": {
			"type": "圣兽",
			"value": {},
			"percentage": {}
		},
		"text": "灵兽榜上第一，远古四大圣兽之一。\n霸道:不能与其他灵兽相容\n麒麟踏瑞:暂未定\n半神:暂未定"
	},
	"I1159": {
		"cls": "equips",
		"name": "独天精灵",
		"canUseItemEffect": "true",
		"text": "独天神兽专属最强单体辅助\n效果暂未定",
		"equip": {
			"type": "灵兽",
			"value": {},
			"percentage": {}
		}
	},
	"I1175": {
		"cls": "constants",
		"name": "绿杖",
		"canUseItemEffect": "true",
		"text": "获得50%护盾效果的减伤，该减伤可以为负伤"
	},
	"I1176": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1177": {
		"cls": "tools",
		"name": "瞬移",
		"canUseItemEffect": "true",
		"useItemEvent": null,
		"useItemEffect": "core.insertAction([\n\t{ \"type\": \"comment\", \"text\": \"全地图选择某一个点\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:x1\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:y1\", \"value\": \"0\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"0\" },\n\t{ \"type\": \"comment\", \"text\": \"flag:1,flag:2为选中的地图xy坐标\" },\n\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\",0)*32,core.getFlag(\\\"y\\\",0)*32,32,32,fillstyle);\\n}\" },\n\t{ \"type\": \"comment\", \"text\": \"显示一个32*32的红色块,这里是画在色调层上，可以自行换画布\" },\n\t{ \"type\": \"comment\", \"text\": \"这里也可以用图标类图片\" },\n\t{\n\t\t\"type\": \"while\",\n\t\t\"condition\": \"1\",\n\t\t\"data\": [\n\t\t\t{ \"type\": \"wait\" },\n\t\t\t{\n\t\t\t\t\"type\": \"if\",\n\t\t\t\t\"condition\": \"flag:type==0\",\n\t\t\t\t\"true\": [{\n\t\t\t\t\t\"type\": \"switch\",\n\t\t\t\t\t\"condition\": \"flag:keycode\",\n\t\t\t\t\t\"caseList\": [{\n\t\t\t\t\t\t\t\"case\": \"27\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下esc时，取消选择\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"exit\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"13\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下enter键时，结束选择，选中坐标代入flag:x与flag:y进入下一步\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"32\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下空格时，结束选择，选中坐标代入flag:x与flag:y进入下一步\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"38\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按上时，移动颜色块，flag:y-1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y-1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:y<0\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y+1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"40\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按下时，移动颜色块，flag:y+1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y+1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:y>12\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y\", \"value\": \"flag:y-1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"37\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按左时，移动颜色块，flag:x-1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x-1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:x<0\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x+1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\"case\": \"39\",\n\t\t\t\t\t\t\t\"action\": [\n\t\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"当按右时，移动颜色块，flag:x+1\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x+1\" },\n\t\t\t\t\t\t\t\t{\n\t\t\t\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\t\t\t\"condition\": \"flag:x>12\",\n\t\t\t\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x\", \"value\": \"flag:x-1\" },\n\t\t\t\t\t\t\t\t\t],\n\t\t\t\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t\t\t\t]\n\t\t\t\t\t\t\t\t},\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t\t\t]\n\t\t\t\t\t\t},\n\t\t\t\t\t],\n\t\t\t\t}, ],\n\t\t\t\t\"false\": [\n\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"如果是鼠标操作，坐标直接代入flag:x,flag:y\" },\n\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\nvar fillstyle = 'rgba(255,0,0,0.5)';\\ncore.fillRect('curtain',core.getFlag(\\\"x\\\")*32,core.getFlag(\\\"y\\\")*32,32,32,fillstyle);\\n}\" },\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": \"flag:x==flag:x1&&flag:y==flag:y1\",\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"如果点中的点与之前选中的点一样，结束选择,结果为flag:x,flag:y\" },\n\t\t\t\t\t\t\t{ \"type\": \"function\", \"function\": \"function(){\\ncore.clearMap(\\\"curtain\\\")\\n}\" },\n\t\t\t\t\t\t\t{ \"type\": \"break\" },\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t\t{\n\t\t\t\t\t\t\"type\": \"if\",\n\t\t\t\t\t\t\"condition\": \"flag:x==3&&flag:y==4\",\n\t\t\t\t\t\t\"true\": [\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"这里也可以设定，当你点中地图上的某点时执行什么事件\" },\n\t\t\t\t\t\t\t{ \"type\": \"comment\", \"text\": \"比如点中3,4时执行什么，放这下边\" },\n\t\t\t\t\t\t],\n\t\t\t\t\t\t\"false\": [\n\n\t\t\t\t\t\t]\n\t\t\t\t\t},\n\t\t\t\t]\n\t\t\t},\n\t\t\t{ \"type\": \"comment\", \"text\": \"只要选择没有结束，记录上一次选中的位置以给鼠标使用\" },\n\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:x1\", \"value\": \"flag:x\" },\n\t\t\t{ \"type\": \"setValue\", \"name\": \"flag:y1\", \"value\": \"flag:y\" },\n\t\t],\n\t},\n\t{ \"type\": \"comment\", \"text\": \"选择结束后，选中的点的坐标已代入flag：x与flag：y\" },\n\t{ \"type\": \"comment\", \"text\": \"例如要使主角移动到选中的点时，可以执行下面事件\" },\n\t{ \"type\": \"playSound\", \"name\": \"sanashunjianyidong.mp3\" },\n\t{ \"type\": \"setValue\", \"name\": \"flag:6\", \"value\": \"flag:6+1\" },\n\t{ \"type\": \"changePos\", \"loc\": [\"flag:x\", \"flag:y\"] },\n\t{ \"type\": \"exit\" },\n])",
		"text": "可以飞到当前楼层任意位置"
	},
	"I1303": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I1122": {
		"cls": "constants",
		"name": "史莱姆天赋：缓冲",
		"canUseItemEffect": "true",
		"text": "将自身1%的生命值加到护盾值上，最大不超过自身攻防和"
	},
	"I442A": {
		"cls": "items",
		"name": "大红血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio\n//if (core.getFlag(\"__statistics__\", 0) != true) core.playSound('heal.mp3');",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I443A": {
		"cls": "items",
		"name": "大蓝血瓶",
		"text": "，生命+${core.values.greenPotion*4}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 4\n//if (core.getFlag(\"__statistics__\", 0) != true) core.playSound('heal.mp3');",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*4}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I444A": {
		"cls": "items",
		"name": "大绿血瓶",
		"text": "，生命+${core.values.greenPotion*10}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 15\n//if (core.getFlag(\"__statistics__\", 0) != true) core.playSound('heal.mp3');",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*15}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion * 10",
		"canUseItemEffect": "true"
	},
	"I445A": {
		"cls": "items",
		"name": "大黄血瓶",
		"text": "，生命+${core.values.greenPotion*8}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 8\n//if (core.getFlag(\"__statistics__\", 0) != true) core.playSound('heal.mp3');",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*8}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I446A": {
		"cls": "items",
		"name": "深蓝血瓶",
		"text": "，生命+${core.values.greenPotion*20}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 20\nif (core.getFlag(\"__statistics__\", 0) != true) core.playSound('heal.mp3');",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*20}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I447A": {
		"cls": "items",
		"name": "粉红血瓶",
		"text": "，生命+${core.values.greenPotion*40}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 40",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*40}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I448A": {
		"cls": "items",
		"name": "血红血瓶",
		"text": "，生命+${core.values.greenPotion*80}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 80",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*80}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I449A": {
		"cls": "items",
		"name": "黄金血瓶",
		"text": "，生命+${core.values.greenPotion*100}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 100",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*100}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I450A": {
		"cls": "items",
		"name": "青绿血瓶",
		"text": "，生命+${core.values.greenPotion*200}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 200",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*200}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I451A": {
		"cls": "items",
		"name": "海蓝血瓶",
		"text": "，生命+${core.values.greenPotion*400}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 400",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*400}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I452A": {
		"cls": "items",
		"name": "草绿血瓶",
		"text": "，生命+${core.values.greenPotion*800}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 800",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*800}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I453A": {
		"cls": "items",
		"name": "橙红血瓶",
		"text": "，生命+${core.values.greenPotion*1000}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion * core.status.thisMap.ratio * 1000",
		"itemEffectTip": "，生命+${core.values.greenPotion * core.status.thisMap.ratio*1000}",
		"useItemEffect": "core.status.hero.hp += core.values.greenPotion",
		"canUseItemEffect": "true"
	},
	"I1311": {
		"cls": "constants",
		"name": "史莱姆天赋：缓冲（+1）",
		"canUseItemEffect": "true",
		"text": "将自身2%的生命值加到护盾值上，最大不超过自身攻防和"
	}
}