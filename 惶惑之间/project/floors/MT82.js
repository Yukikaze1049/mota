main.floors.MT82=
{
    "floorId": "MT82",
    "title": "塔C 1 层",
    "name": "塔C 1 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,7": [
            "\t[hero]\b[hero]两个意义不明的按钮……",
            "\t[hero]\b[hero]先看看后面会有什么用的上这机关的地方吧。",
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "down:2",
                    "left:3",
                    "up:2",
                    "left:1"
                ]
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[hero]\b[hero]红门。",
            "\t[hero]\b[hero]……",
            "\t[hero]\b[hero]果然如他们之前所说。",
            "\t[hero]\b[hero]我们兵分三路为的是互相配合前进。",
            "\t[hero]\b[hero]只要有一人出了意外，其他两人就无法前进。",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "setValue",
                "name": "flag:jqjs",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\nif (hero.name == \"赫\") {\n\tflags.sk = core.getFlag('skill', 0)\n\tflags.skn = core.getFlag('skillName', '无')\n}\nif (hero.name == '约瑟' && core.getFlag('skill', 0) == 11) {\n\tflags.sr = 1;\n}\ncore.setFlag('skill', 0); // 关闭技能状态\ncore.setFlag('skillName', '无');\nflags.sc = \"#FFFFFF\";\nif (hero.name == \"伊杰明\") {\n\tcore.setFlag('skill', flags.sk || 0); // 关闭技能状态\n\tcore.setFlag('skillName', flags.skn || '无');\n}\nif (hero.name == \"赫\" && flags.sr == 1) {\n\tcore.setFlag('skill', 11);\n\tcore.setFlag('skillName', '衰弱');\n\tflags.sc = \"#800080\";\n}\nif (hero.name == \"约瑟\") flags.v1 = flags.__visited__\nif (hero.name == \"伊杰明\") flags.v2 = flags.__visited__\nif (hero.name == \"赫\") flags.v3 = flags.__visited__\nif (hero.name == \"赫\") flags.__visited__ = flags.v1\nif (hero.name == \"约瑟\") flags.__visited__ = flags.v2 || { MT72: true }\nif (hero.name == \"伊杰明\") flags.__visited__ = flags.v3 || { MT82: true }\ncore.changeHero();\n}"
            }
        ]
    },
    "changeFloor": {
        "3,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:huang2",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:lan2",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "3,6": {
            "0": {
                "condition": "flags.hong1",
                "currentFloor": true,
                "priority": 2,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "3,4": {
            "0": {
                "condition": "flags.hong2",
                "currentFloor": true,
                "priority": 1,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "1,11": {
            "0": {
                "condition": "flags.hong1==1&&flags.hong2==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]也就是说目前来看……我们的进度一致了吧。",
                    "\t[hero]\b[hero]不得不说……这座塔让我感觉前所未有的危险……",
                    "\t[hero]\b[hero]必须尽快处理掉……"
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  4,  1, 87,  1,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,  0,  1,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,  0,  1,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,511,  1,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,  0,  1,  4,  1,  1,  1,  4,  4,  4,10024],
    [10026,  4,  1,511,  1,  1,  1,509,  1,  1,  1,  1,10024],
    [10026,  4,  1,  0,  0,  1,510,  0,  0,  0,  0,  1,10024],
    [10026,  4,  1,  1,  0,  1,  1,  0,  1,  1,  1,  1,10024],
    [10026,  4,  4,  1,  0,  0,  0,  0,  1,  4,  4,  4,10024],
    [10026,  4,  4,  1,  1,  1,  1,  1,  1,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}