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
		"name": "红宝石b",
		"text": "攻击+${core.values.redGem}",
		"itemEffect": "core.status.hero.atk += 2",
		"itemEffectTip": "，攻击+2",
		"useItemEffect": "core.status.hero.atk += core.values.redGem",
		"canUseItemEffect": "true"
	},
	"blueGem": {
		"cls": "items",
		"name": "蓝宝石b",
		"text": "，防御+${core.values.blueGem}",
		"itemEffect": "core.status.hero.def += 2",
		"itemEffectTip": "，防御+2",
		"useItemEffect": "core.status.hero.def += core.values.blueGem",
		"canUseItemEffect": "true"
	},
	"greenGem": {
		"cls": "items",
		"name": "绿宝石b",
		"text": "，护盾+${core.values.greenGem}",
		"itemEffect": "core.status.hero.mdef += 10",
		"itemEffectTip": "，护盾+10",
		"useItemEffect": "core.status.hero.mdef += core.values.greenGem",
		"canUseItemEffect": "true"
	},
	"yellowGem": {
		"cls": "items",
		"name": "黄宝石",
		"text": "可以进行加点",
		"itemEffect": "core.status.hero.atk += 5;\ncore.status.hero.def += 5;\ncore.status.hero.mdef += 10;",
		"itemEffectTip": ",攻击+5，防御+5，护盾+10",
		"useItemEvent": null,
		"canUseItemEffect": "true"
	},
	"redPotion": {
		"cls": "items",
		"name": "红血瓶",
		"text": "，生命+${core.values.redPotion}",
		"itemEffect": "core.status.hero.hp += core.values.redPotion",
		"itemEffectTip": "，生命+${core.values.redPotion }",
		"useItemEffect": "core.status.hero.hp += core.values.redPotion",
		"canUseItemEffect": "true"
	},
	"bluePotion": {
		"cls": "items",
		"name": "蓝血瓶",
		"text": "，生命+${core.values.bluePotion}",
		"itemEffect": "core.status.hero.hp += core.values.bluePotion",
		"itemEffectTip": "，生命+${core.values.bluePotion}",
		"useItemEffect": "core.status.hero.hp += core.values.bluePotion",
		"canUseItemEffect": "true"
	},
	"yellowPotion": {
		"cls": "items",
		"name": "黄血瓶",
		"text": "，生命+${core.values.yellowPotion}",
		"itemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"itemEffectTip": "，生命+${core.values.yellowPotion}",
		"useItemEffect": "core.status.hero.hp += core.values.yellowPotion",
		"canUseItemEffect": "true"
	},
	"greenPotion": {
		"cls": "items",
		"name": "绿血瓶",
		"text": "，生命+${core.values.greenPotion}",
		"itemEffect": "core.status.hero.hp += core.values.greenPotion",
		"itemEffectTip": "，生命+${core.values.greenPotion }",
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
		"cls": "items",
		"name": "铁剑",
		"text": "一把很普通的铁剑",
		"equip": {
			"type": 0,
			"animate": "sword",
			"value": {
				"atk": 10
			}
		},
		"itemEffect": "core.status.hero.atk += 5",
		"itemEffectTip": "，攻击+5"
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
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": "，攻击+10"
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
		"cls": "items",
		"name": "铁盾",
		"text": "一个很普通的铁盾",
		"equip": {
			"type": 1,
			"value": {
				"def": 10
			}
		},
		"itemEffect": "core.status.hero.def += 5",
		"itemEffectTip": "，防御+5"
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
		"itemEffect": "core.status.hero.def += 10",
		"itemEffectTip": "，防御+10"
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
		"cls": "items",
		"name": "圣水",
		"itemEffect": "core.status.hero.hp *= 2",
		"itemEffectTip": "，生命值翻倍",
		"useItemEffect": "core.status.hero.hp *= 2;core.playSound('回血');",
		"canUseItemEffect": "true",
		"text": "生命值翻倍"
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
		"canUseItemEffect": "(function () {\n\tif (flags.ltf == 1 && !core.nearStair()) return false;\n\treturn core.status.maps[core.status.floorId].canFlyFrom;\n})();"
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
		"text": "持有后无视怪物的无敌属性"
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
		"useItemEffect": "(function () {\n\tvar bombList = []; // 炸掉的怪物坐标列表\n\tvar todo = []; // 炸弹后事件\n\tvar money = 0,\n\t\texp = 0; // 炸弹获得的金币和经验\n\n\tvar canBomb = function (x, y) {\n\t\tvar block = core.getBlock(x, y);\n\t\tif (block == null || block.disable || block.event.cls.indexOf('enemy') != 0) return false;\n\t\tvar enemy = core.material.enemys[block.event.id];\n\t\treturn enemy && !enemy.notBomb;\n\t};\n\n\tvar bomb = function (x, y) {\n\t\tif (!canBomb(x, y)) return;\n\t\tbombList.push([x, y]);\n\t\tvar id = core.getBlockId(x, y),\n\t\t\tenemy = core.material.enemys[id];\n\t\tmoney += core.getEnemyValue(enemy, 'money', x, y) || 0;\n\t\texp += core.getEnemyValue(enemy, 'exp', x, y) || 0;\n\t\tcore.push(todo, core.floors[core.status.floorId].afterBattle[x + \",\" + y]);\n\t\tcore.push(todo, enemy.afterBattle);\n\t\tcore.removeBlock(x, y);\n\t}\n\n\t// 如果要多方向可炸，把这里的false改成true\n\tif (false) {\n\t\tvar scan = core.utils.scan; // 多方向炸时默认四方向，如果要改成八方向炸可以改成 core.utils.scan2\n\t\tfor (var direction in scan) {\n\t\t\tvar delta = scan[direction];\n\t\t\tbomb(core.getHeroLoc('x') + delta.x, core.getHeroLoc('y') + delta.y);\n\t\t}\n\t} else {\n\t\t// 仅炸当前\n\t\tbomb(core.nextX(), core.nextY());\n\t}\n\n\tif (bombList.length == 0) {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('当前无法使用' + core.material.items[itemId].name, itemId);\n\t\tcore.addItem(itemId, 1);\n\t\treturn;\n\t}\n\n\tcore.playSound('炸弹');\n\tcore.drawTip(core.material.items[itemId].name + '使用成功', itemId);\n\n\t// 取消这里的注释可以炸弹后获得金币和经验\n\t// core.status.hero.money += money;\n\t// core.status.hero.exp += exp;\n\n\t// 取消这里的注释可以炸弹引发战后事件\n\t// if (todo.length > 0) core.insertAction(todo);\n\n})();",
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
	"I341": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I342": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I343": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I344": {
		"cls": "constants",
		"name": "新物品",
		"canUseItemEffect": "true",
		"useItemEvent": null,
		"useItemEffect": "core.plugin.getEnemyList();"
	},
	"I345": {
		"cls": "constants",
		"name": "技能：降雷术",
		"canUseItemEffect": "true",
		"text": "快捷键3，打开或关闭技能降雷术lv2：降下雷电使敌人麻痹从而5回合不能攻击，并在战后永久提升自己20点护盾。消耗10点魔力。",
		"useItemEffect": "(function () {\n\tvar skillValue = 7; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 10; // 技能的需求\n\tvar skillName = '降雷术'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t\tflags.sc = \"#FFFF00\";\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t\tflags.sc = \"#FFFFFF\";\n\t}\n})();",
		"hideInReplay": true
	},
	"I346": {
		"cls": "constants",
		"name": "技能：冰障术",
		"canUseItemEffect": "true",
		"text": "快捷键2，打开或关闭技能冰障术lv2：该次战斗凝聚冰障使自己的防御暂时提升40点，并在战后永久提升自己2点防御。消耗10点魔力。",
		"useItemEffect": "(function () {\n\tvar skillValue = 6; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 10; // 技能的需求\n\tvar skillName = '冰障术'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t\tflags.sc = \"#00FFFF\";\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t\tflags.sc = \"#FFFFFF\";\n\t}\n})();",
		"hideInReplay": true
	},
	"I347": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I348": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I349": {
		"cls": "constants",
		"name": "魔力水晶",
		"canUseItemEffect": "true",
		"text": "伊杰明制作的，用于提供大量魔力的水晶。"
	},
	"I350": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I351": {
		"cls": "constants",
		"name": "古老的护符",
		"canUseItemEffect": "true",
		"text": "伊杰明制作的，用于在魔塔内呼唤同伴的护符。"
	},
	"I352": {
		"cls": "items",
		"name": "红宝石a",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 1;",
		"itemEffectTip": ",攻击+1"
	},
	"I353": {
		"cls": "items",
		"name": "蓝宝石a",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 1;",
		"itemEffectTip": ",防御+1"
	},
	"I354": {
		"cls": "items",
		"name": "绿宝石a",
		"canUseItemEffect": "true",
		"itemEffectTip": ",护盾+5",
		"itemEffect": "core.status.hero.mdef += 5;"
	},
	"I355": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I356": {
		"cls": "items",
		"name": "魔晶",
		"canUseItemEffect": "true",
		"itemEffectTip": "，魔力+20",
		"itemEffect": "core.status.hero.mana += 20"
	},
	"I361": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
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
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"skill1": {
		"cls": "constants",
		"name": "技能：鬼斩",
		"canUseItemEffect": "true",
		"useItemEffect": "(function () {\n\tvar skillValue = 1; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 10; // 技能的需求\n\tif (core.hasItem('I518')) skillNeed = 5;\n\tvar skillName = '鬼斩'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t\tflags.sc = '#9370D8'\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t\tflags.sc = \"#FFFFFF\";\n\t}\n})();",
		"text": "可以打开或关闭主动技能鬼斩：消耗${if(flags.ts==1){5}else{10}}魔力造成一次${if(flags.gz==1){100}else{200}}%攻击力的绝对伤害，${if(flags.gz==1){''}else{'并降低敌人50%防御，'}}快捷键1。",
		"hideInReplay": true
	},
	"I455": {
		"cls": "equips",
		"name": "赤金长剑",
		"canUseItemEffect": "true",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 15
			},
			"percentage": {
				"atk": 10
			}
		},
		"text": "赤金打造的长剑，战场上最常见的武器。攻击+15并再提升10%。",
		"hideInReplay": false
	},
	"I456": {
		"cls": "equips",
		"name": "墨石短匕",
		"canUseItemEffect": "true",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 13
			},
			"percentage": {}
		},
		"text": "刺杀者们钟爱的武器，带有一定的防御穿透效果。攻击+13，无视敌人20%防御。",
		"hideInReplay": false
	},
	"I457": {
		"cls": "equips",
		"name": "奥托巨剑",
		"canUseItemEffect": "true",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 25
			},
			"percentage": {}
		},
		"text": "巨大的重剑，挥舞它需要不少的力量。攻击提升25点。",
		"hideInReplay": false
	},
	"I458": {
		"cls": "equips",
		"name": "长蛇枪",
		"canUseItemEffect": "true",
		"text": "枪兵的标配武器，较长的攻击范围能稳稳的占据先手。攻击+15，开战前进行一次额外的攻击。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 15
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I459": {
		"cls": "tools",
		"name": "狂热药剂",
		"canUseItemEffect": "flags.kr !== 1",
		"text": "攻击力提升10点，持续一场战斗。不可叠加使用。",
		"useItemEvent": [
			{
				"type": "tip",
				"text": "使用狂热药剂，下场战斗攻击+10",
				"icon": "I460"
			},
			{
				"type": "setValue",
				"name": "status:atk",
				"operator": "+=",
				"value": "10"
			},
			{
				"type": "setValue",
				"name": "flag:kr",
				"value": "1"
			},
			{
				"type": "playSound",
				"name": "recovery.mp3"
			}
		]
	},
	"I460": {
		"cls": "items",
		"name": "新物品",
		"canUseItemEffect": "true"
	},
	"I461": {
		"cls": "tools",
		"name": "魔晶液",
		"canUseItemEffect": "true",
		"text": "魔晶的提取液，使用后为抑制器回复20点魔力。",
		"useItemEvent": [
			{
				"type": "tip",
				"text": "使用魔晶液，魔力+20",
				"icon": "I461"
			},
			{
				"type": "setValue",
				"name": "status:mana",
				"operator": "+=",
				"value": "20"
			},
			{
				"type": "playSound",
				"name": "recovery.mp3"
			}
		]
	},
	"I462": {
		"cls": "tools",
		"name": "治愈药水",
		"canUseItemEffect": "true",
		"text": "使用后恢复500点生命。",
		"useItemEvent": [
			{
				"type": "tip",
				"text": "使用治愈药水，生命+500",
				"icon": "I462"
			},
			{
				"type": "playSound",
				"name": "recovery.mp3"
			},
			{
				"type": "setValue",
				"name": "status:hp",
				"operator": "+=",
				"value": "500"
			}
		]
	},
	"I463": {
		"cls": "equips",
		"name": "红布耳罩",
		"canUseItemEffect": "true",
		"text": "施加过魔力的御寒耳罩。护盾+40。",
		"equip": {
			"type": "饰品",
			"value": {
				"mdef": 40
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I464": {
		"cls": "equips",
		"name": "厚绒手套",
		"canUseItemEffect": "true",
		"text": "很厚实的手套。防御+5。",
		"equip": {
			"type": "饰品",
			"value": {
				"def": 5
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I465": {
		"cls": "equips",
		"name": "洞察之眼",
		"canUseItemEffect": "true",
		"text": "戴上后能清晰看到敌人的弱点。攻击造成1.1倍伤害。",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I466": {
		"cls": "equips",
		"name": "镜像结界",
		"canUseItemEffect": "true",
		"text": "每次战斗开始时创造一个自己生命值3%的镜像代替自己承受伤害，镜像的生命上限为100。",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I467": {
		"cls": "equips",
		"name": "生命之石",
		"canUseItemEffect": "true",
		"text": "每次战斗后，恢复敌人原始生命值10%的生命。",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I473": {
		"cls": "constants",
		"name": "支援：伊杰明",
		"canUseItemEffect": "flags.lh == 0;",
		"text": "开启后下场战斗伊杰明将进行支援。轮换使用三种技能：造成50伤害的火球术，提升15防御的冰障术，麻痹敌人3回合的降雷术。\n本次支援技能为${flags.lhjn}，需要${flags.lh}次战斗后才能开启。快捷键2。",
		"hideInReplay": true,
		"useItemEvent": [],
		"useItemEffect": "if (core.getFlag('skill', 0) == 0) { // 判断当前是否已经开了技能\n\tcore.playSound('打开界面');\n\tswitch (flags.lhjn) {\n\tcase '火球术':\n\t\tvar i = 2;\n\t\tflags.sc = \"#FF0000\";\n\t\tbreak;\n\tcase '冰障术':\n\t\tvar i = 3;\n\t\tflags.sc = \"#00FFFF\";\n\t\tbreak;\n\tcase '降雷术':\n\t\tvar i = 4;\n\t\tflags.sc = \"#FFFF00\";\n\t\tbreak;\n\t}\n\tcore.setFlag('skill', i); // 开技能1\n\tcore.setFlag('skillName', flags.lhjn); // 设置技能名\n} else { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n\tflags.sc = \"#FFFFFF\";\n}"
	},
	"I488": {
		"cls": "equips",
		"name": "泣血巨刃",
		"canUseItemEffect": "true",
		"text": "以鲜血浇灌成的巨刃。攻击+50，每场战斗后回复自己攻击力20%的生命。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 50
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I489": {
		"cls": "equips",
		"name": "精铁双刀",
		"canUseItemEffect": "true",
		"text": "以牺牲防守能力为代价换来的极致双刀流派。战斗时进行二连击，攻击+15，护盾降低50%。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 15
			},
			"percentage": {
				"mdef": -50
			}
		},
		"hideInReplay": false
	},
	"I490": {
		"cls": "equips",
		"name": "雷铸三叉戟",
		"canUseItemEffect": "true",
		"text": "蕴含雷电之意的三叉戟，威力巨大。攻击+30，每第三次攻击附带100点雷电伤害。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 30
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I491": {
		"cls": "equips",
		"name": "小圆盾",
		"canUseItemEffect": "true",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"text": "使用它需要较高的格挡技巧。受到的伤害减伤10%（计算护盾前）。",
		"hideInReplay": false
	},
	"I492": {
		"cls": "equips",
		"name": "邪恶手套",
		"canUseItemEffect": "true",
		"text": "被诅咒的手套。攻击力上升10%，防御力减少10%。",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {
				"def": -10,
				"atk": 10
			}
		},
		"hideInReplay": false
	},
	"I493": {
		"cls": "equips",
		"name": "墨皮靴",
		"canUseItemEffect": "true",
		"text": "十分舒适的靴子，穿上后能健步如飞。每场战斗中的第一回合受到的伤害减少90%。",
		"hideInToolbox": false,
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I494": {
		"cls": "equips",
		"name": "木制胸甲",
		"canUseItemEffect": "true",
		"text": "原木打造的胸甲。防御+10并再提升10%。",
		"equip": {
			"type": "饰品",
			"value": {
				"def": 10
			},
			"percentage": {
				"def": 10
			}
		},
		"hideInReplay": false
	},
	"I499": {
		"cls": "items",
		"name": "红宝石c",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 5",
		"itemEffectTip": ",攻击+5"
	},
	"I500": {
		"cls": "items",
		"name": "蓝宝石c",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 5;",
		"itemEffectTip": ",防御+5"
	},
	"I501": {
		"cls": "items",
		"name": "绿宝石c",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 20;",
		"itemEffectTip": ",护盾+20"
	},
	"I504": {
		"cls": "equips",
		"name": "鲨牙吊坠",
		"canUseItemEffect": "true",
		"text": "潜行者钟爱的带有破甲效果的吊坠。敌人的防御减7%",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I505": {
		"cls": "items",
		"name": "黄宝石c",
		"canUseItemEffect": "true",
		"itemEffectTip": ",攻击+10，防御+10，护盾+20",
		"itemEffect": "core.status.hero.atk += 10;\ncore.status.hero.def += 10;\ncore.status.hero.mdef += 20;"
	},
	"I514": {
		"cls": "items",
		"name": "红宝石d",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.atk += 10",
		"itemEffectTip": ",攻击+10"
	},
	"I515": {
		"cls": "items",
		"name": "蓝宝石d",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.def += 10;",
		"itemEffectTip": ",防御+10"
	},
	"I516": {
		"cls": "items",
		"name": "绿宝石d",
		"canUseItemEffect": "true",
		"itemEffect": "core.status.hero.mdef += 50;",
		"itemEffectTip": ",护盾+50"
	},
	"I517": {
		"cls": "constants",
		"name": "技能：火球术",
		"canUseItemEffect": "true",
		"text": "快捷键1，打开或关闭技能火球术lv2：战斗开始时释放火球对敌人造成${if(flags.qh==1){1000}else{300}}点伤害，并在战后永久提升自己2点攻击。消耗10点魔力。",
		"useItemEffect": "(function () {\n\tvar skillValue = 5; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\n\tvar skillNeed = 10;\n\tvar skillName = '火球术'; // 技能的名称\n\n\tif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\t\tif (core.getStatus('mana') >= skillNeed) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\t\tcore.playSound('打开界面');\n\t\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\t\tflags.sc = \"#FF0000\";\n\t\t} else {\n\t\t\tcore.playSound('操作失败');\n\t\t\tcore.drawTip('魔力不足，无法开启技能');\n\t\t}\n\t} else { // 关闭技能\n\t\tcore.setFlag('skill', 0); // 关闭技能状态\n\t\tcore.setFlag('skillName', '无');\n\t\tflags.sc = \"#FFFFFF\";\n\t}\n})();",
		"hideInReplay": true
	},
	"I518": {
		"cls": "constants",
		"name": "角色轮换",
		"canUseItemEffect": "flags.jqjs == 1",
		"hideInReplay": true,
		"useItemEffect": "if (hero.name == \"赫\") {\n\tflags.sk = core.getFlag('skill', 0)\n\tflags.skn = core.getFlag('skillName', '无')\n}\nif (hero.name == '约瑟' && core.getFlag('skill', 0) == 11) {\n\tflags.sr = 1;\n}\ncore.setFlag('skill', 0); // 关闭技能状态\ncore.setFlag('skillName', '无');\nflags.sc = \"#FFFFFF\";\nif (hero.name == \"伊杰明\") {\n\tcore.setFlag('skill', flags.sk || 0); // 关闭技能状态\n\tcore.setFlag('skillName', flags.skn || '无');\n}\nif (hero.name == \"赫\" && flags.sr == 1) {\n\tcore.setFlag('skill', 11);\n\tcore.setFlag('skillName', '衰弱');\n\tflags.sc = \"#800080\";\n}\nif (hero.name == \"约瑟\") flags.v1 = flags.__visited__\nif (hero.name == \"伊杰明\") flags.v2 = flags.__visited__\nif (hero.name == \"赫\") flags.v3 = flags.__visited__\nif (hero.name == \"赫\") flags.__visited__ = flags.v1\nif (hero.name == \"约瑟\") flags.__visited__ = flags.v2 || { MT72: true }\nif (hero.name == \"伊杰明\") flags.__visited__ = flags.v3 || { MT82: true }\ncore.changeHero();",
		"text": "切换到下一个角色。快捷键4。"
	},
	"I519": {
		"cls": "constants",
		"name": "武器：剑",
		"canUseItemEffect": "true",
		"text": "攻击和防御均提升10%(快捷键1)",
		"useItemEffect": "var skillValue = 8; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\nvar skillName = '武器：剑'; // 技能的名称\n\nif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\tif (core.getStatus('mana') >= 3) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.playSound('打开界面');\n\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\tflags.sd = 1;\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('行动值为3时才能切换武器');\n\t}\n} else { // 关闭技能\n\tcore.drawTip('当前已在使用该武器');\n}",
		"hideInReplay": true
	},
	"I520": {
		"cls": "constants",
		"name": "武器：枪",
		"canUseItemEffect": "true",
		"text": "无视敌人${if(flags.qh==1){50}else{40}}%防御(快捷键2)",
		"useItemEffect": "var skillValue = 9; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\nvar skillName = '武器：枪'; // 技能的名称\n\nif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\tif (core.getStatus('mana') >= 3) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.playSound('打开界面');\n\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\tflags.sd = 1;\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('行动值为3时才能切换武器');\n\t}\n} else { // 关闭技能\n\tcore.drawTip('当前已在使用该武器');\n}",
		"hideInReplay": true
	},
	"I521": {
		"cls": "constants",
		"name": "武器：弓",
		"canUseItemEffect": "true",
		"text": "战斗前先攻${if(flags.qh==1){7}else{2}}次(快捷键3)",
		"useItemEffect": "var skillValue = 10; // 技能的flag:skill值，可用于当前开启技能的判定；对于新技能可以依次改成2，3等等\nvar skillName = '武器：弓'; // 技能的名称\n\nif (core.getFlag('skill', 0) != skillValue) { // 判断当前是否已经开了技能\n\tif (core.getStatus('mana') >= 3) { // 这里要写当前能否开技能的条件判断，比如魔力值至少要多少\n\t\tcore.playSound('打开界面');\n\t\tcore.setFlag('skill', skillValue); // 开技能1\n\t\tcore.setFlag('skillName', skillName); // 设置技能名\n\t\tflags.sd = 1;\n\t} else {\n\t\tcore.playSound('操作失败');\n\t\tcore.drawTip('行动值为3时才能切换武器');\n\t}\n} else { // 关闭技能\n\tcore.drawTip('当前已在使用该武器');\n}",
		"hideInReplay": true
	},
	"I541": {
		"cls": "constants",
		"name": "黑色宝石",
		"canUseItemEffect": "true",
		"text": "黑骑士的掉落物，用处不明。"
	},
	"I554": {
		"cls": "tools",
		"name": "绿宝石碎片",
		"canUseItemEffect": null,
		"text": "四分之一大小的绿宝石碎片"
	},
	"I555": {
		"cls": "equips",
		"name": "森林之心",
		"canUseItemEffect": "true",
		"text": "妖精族花费数十年用森林的灵气打造而成的秘宝。护盾增加100，并且所有护盾转化为生命回复（与残魂战斗时失效）。",
		"equip": {
			"type": "饰品",
			"value": {
				"mdef": 100
			},
			"percentage": {}
		},
		"hideInReplay": false
	},
	"I556": {
		"cls": "constants",
		"name": "绿色宝石",
		"canUseItemEffect": "true",
		"text": "由四个绿宝石碎片合成的整块绿宝石，用处不明。"
	},
	"I603": {
		"cls": "tools",
		"name": "红宝石碎片",
		"canUseItemEffect": null,
		"text": "四分之一大小的红宝石碎片"
	},
	"I604": {
		"cls": "constants",
		"name": "红色宝石",
		"canUseItemEffect": "true",
		"text": "由四个红宝石碎片合成的整块红宝石，用处不明。"
	},
	"I605": {
		"cls": "equips",
		"name": "熔火精盾",
		"canUseItemEffect": "true",
		"equip": {
			"type": "饰品",
			"value": {
				"def": 10
			},
			"percentage": {}
		},
		"text": "熔火铸造而成的盾，拥有极强防御力的同时还能召唤烈火辅助进攻。防御+10，每回合造成一次数额为自身10%防御力的伤害。",
		"hideInReplay": false
	},
	"I628": {
		"cls": "tools",
		"name": "蓝宝石碎片",
		"canUseItemEffect": null,
		"text": "四分之一大小的蓝宝石碎片"
	},
	"I629": {
		"cls": "constants",
		"name": "蓝色宝石",
		"canUseItemEffect": "true",
		"text": "由四个蓝宝石碎片合成的整块蓝宝石，用处不明。"
	},
	"I630": {
		"cls": "equips",
		"name": "万年寒冰",
		"canUseItemEffect": "true",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {}
		},
		"text": "散发着凛冽寒气的冰晶。战斗开始时冻结敌人三回合。",
		"hideInReplay": false
	},
	"I656": {
		"cls": "constants",
		"name": "漆黑之刃",
		"canUseItemEffect": "true"
	},
	"I657": {
		"cls": "constants",
		"name": "未知护符",
		"canUseItemEffect": "true"
	},
	"I658": {
		"cls": "equips",
		"name": "灰烬",
		"canUseItemEffect": "true",
		"text": "拥有焚尽世间万物的火焰的剑。攻击+100再提升3%，战后对该次战斗敌人所在列和行的所有其他敌人造成被打败敌人10%原始生命值的伤害。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 100
			},
			"percentage": {
				"atk": 3
			}
		}
	},
	"I659": {
		"cls": "equips",
		"name": "庇佑",
		"canUseItemEffect": "true",
		"text": "被神所赐福的剑。攻击+75，受到的伤害减少25%。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 75
			},
			"percentage": {}
		}
	},
	"I660": {
		"cls": "equips",
		"name": "自然",
		"canUseItemEffect": "true",
		"text": "妖精族的传承之剑仿制品。攻击+80，护盾+20%，每次战斗后永久增加3点护盾（目前增加了${flags.zr||0}点）。",
		"equip": {
			"type": "武器",
			"value": {
				"atk": 80
			},
			"percentage": {
				"mdef": 20
			}
		},
		"useItemEvent": null
	},
	"I661": {
		"cls": "equips",
		"name": "极致战袍",
		"canUseItemEffect": "true",
		"equip": {
			"type": "饰品",
			"value": {
				"mdef": 50,
				"def": 20
			},
			"percentage": {
				"def": 10
			}
		},
		"text": "集轻薄和防护于一身的战袍。防御+20并再提升10%，护盾+50，受到的伤害减少15%。"
	},
	"I662": {
		"cls": "equips",
		"name": "皇之假面",
		"canUseItemEffect": "true",
		"equip": {
			"type": "饰品",
			"value": {},
			"percentage": {
				"atk": 10
			}
		},
		"text": "轻金材质打造，镶嵌的各种宝石让它具有强大增益。战斗开始时获得3%生命值的护盾（上限200），战斗后回复敌人生命值10%的生命，攻击增加10%，敌人防御减少10%，攻击造成1.1倍伤害。"
	},
	"I663": {
		"cls": "tools",
		"name": "极致战袍合成书",
		"canUseItemEffect": "(function () {\n\tif (core.hasItem('I463') && core.hasItem('I464') && core.hasItem('I491') && core.hasItem('I493') && core.hasItem('I494')) {\n\t\treturn true;\n\t} else {\n\t\treturn false;\n\t}\n})();",
		"text": "合成极致战袍的配方书。厚绒手套+红布耳罩+木制胸甲+小圆盾+墨皮靴，将以上装备卸下后使用该合成书即可合成。",
		"useItemEffect": "core.addItem(\"I463\", -1);\ncore.addItem(\"I464\", -1);\ncore.addItem(\"I491\", -1);\ncore.addItem(\"I493\", -1);\ncore.addItem(\"I494\", -1);\ncore.addItem(\"I661\", 1);"
	},
	"I664": {
		"cls": "tools",
		"name": "皇之假面合成书",
		"canUseItemEffect": "(function () {\n\tif (core.hasItem('I465') && core.hasItem('I466') && core.hasItem('I467') && core.hasItem('I492') && core.hasItem('I504')) {\n\t\treturn true;\n\t} else {\n\t\treturn false;\n\t}\n})();",
		"text": "合成皇之假面的配方书。镜像结界+生命之石+洞察之眼+邪恶手套+鲨牙吊坠，将以上装备卸下后使用该合成书即可合成。",
		"useItemEffect": "core.addItem(\"I465\", -1);\ncore.addItem(\"I466\", -1);\ncore.addItem(\"I467\", -1);\ncore.addItem(\"I492\", -1);\ncore.addItem(\"I504\", -1);\ncore.addItem(\"I662\", 1);"
	},
	"I669": {
		"cls": "constants",
		"name": "支援：伊&赫",
		"canUseItemEffect": "hero.mana !== 0 && flags.lhx == 0;",
		"text": "非衰弱状态下开启后下场战斗伊杰明或者赫将进行支援。轮换进行：伊杰明的冰魔法支援提升约瑟40点防御力并冻结敌人一回合，赫的远程箭支援对敌人造成200伤害并削弱它们10%防御力。\n本次为${flags.lhjnx}，${flags.lhx}次战斗后才能开启。快捷键2。",
		"hideInReplay": true,
		"useItemEvent": [],
		"useItemEffect": "if (core.getFlag('skill', 0) == 0) { // 判断当前是否已经开了技能\n\tcore.playSound('打开界面');\n\tswitch (flags.lhjnx) {\n\tcase '冰魔法支援':\n\t\tvar i = 12;\n\t\tflags.sc = \"#00FFFF\";\n\t\tbreak;\n\tcase '远程箭支援':\n\t\tvar i = 13;\n\t\tflags.sc = \"#FF0000\";\n\t\tbreak;\n\t}\n\tcore.setFlag('skill', i); // 开技能1\n\tcore.setFlag('skillName', flags.lhjnx); // 设置技能名\n} else { // 关闭技能\n\tcore.setFlag('skill', 0); // 关闭技能状态\n\tcore.setFlag('skillName', '无');\n\tflags.sc = \"#FFFFFF\";\n}"
	},
	"I670": {
		"cls": "tools",
		"name": "紫宝石碎片",
		"canUseItemEffect": null,
		"text": "四分之一大小的紫宝石碎片"
	},
	"I671": {
		"cls": "constants",
		"name": "紫色宝石",
		"canUseItemEffect": "true",
		"text": "由四个紫宝石碎片合成的整块紫宝石，用处不明。"
	},
	"I699": {
		"cls": "equips",
		"name": "「漆黑之刃」",
		"canUseItemEffect": "true",
		"text": "上古流传而来的传奇之剑，可斩碎一切。攻击+100%。",
		"equip": {
			"type": "武器",
			"value": {},
			"percentage": {
				"atk": 100
			}
		}
	},
	"I700": {
		"cls": "constants",
		"name": "「天使之泪」",
		"canUseItemEffect": "true",
		"text": "用于抑制漆黑之刃邪性的护符。"
	}
}