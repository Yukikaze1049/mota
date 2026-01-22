main.floors.MT72=
{
    "floorId": "MT72",
    "title": "塔B 1 层",
    "name": "塔B 1 层",
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
        "6,8": [
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[hero]这里的按钮是？",
            "\t[hero]\b[hero]目前也没有看到需要用到机关的地方。",
            "\t[hero]\b[hero]但我还真是忍不住想按一按。",
            "\t[hero]\b[hero]不过考虑到目前任务重大。",
            "\t[hero]\b[hero]还是先忍一忍吧。",
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "changePos",
                "direction": "right"
            },
            "\t[hero]\b[hero]哦……",
            "\t[hero]\b[hero]明明是扇蓝门。",
            "\t[hero]\b[hero]却非要给我黄色的按钮吗？",
            "\t[hero]\b[hero]果然没有其他两人的配合，我是无法一个人前进的吗？",
            "\t[hero]\b[hero]不知道另外两位的进度如何了。",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "function",
                "function": "function(){\nif (hero.name == \"赫\") {\n\tflags.sk = core.getFlag('skill', 0)\n\tflags.skn = core.getFlag('skillName', '无')\n}\nif (hero.name == '约瑟' && core.getFlag('skill', 0) == 11) {\n\tflags.sr = 1;\n}\ncore.setFlag('skill', 0); // 关闭技能状态\ncore.setFlag('skillName', '无');\nflags.sc = \"#FFFFFF\";\nif (hero.name == \"伊杰明\") {\n\tcore.setFlag('skill', flags.sk || 0); // 关闭技能状态\n\tcore.setFlag('skillName', flags.skn || '无');\n}\nif (hero.name == \"赫\" && flags.sr == 1) {\n\tcore.setFlag('skill', 11);\n\tcore.setFlag('skillName', '衰弱');\n\tflags.sc = \"#800080\";\n}\nif (hero.name == \"约瑟\") flags.v1 = flags.__visited__\nif (hero.name == \"伊杰明\") flags.v2 = flags.__visited__\nif (hero.name == \"赫\") flags.v3 = flags.__visited__\nif (hero.name == \"赫\") flags.__visited__ = flags.v1\nif (hero.name == \"约瑟\") flags.__visited__ = flags.v2 || { MT72: true }\nif (hero.name == \"伊杰明\") flags.__visited__ = flags.v3 || { MT82: true }\ncore.changeHero();\n}"
            }
        ]
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:huang1",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:hong2",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "9,6": {
            "0": {
                "condition": "flags.lan1",
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
        "7,6": {
            "0": {
                "condition": "flags.lan2",
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
        "1,11": {
            "0": {
                "condition": "flags.lan1==1&&flags.lan2==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": true,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]看来二位推进的都很顺利啊。",
                    "\t[hero]\b[hero]呵呵……有这么可靠的同伴",
                    "\t[hero]\b[hero]和这么有意思的魔塔。",
                    "\t[hero]\b[hero]这趟可真是收获不小。"
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,  1,  1,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  1,507,  1,  1,  1,  1,  4,  4,  4,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  1,  0,512,  0,512,  0, 87,10024],
    [10026,  1,  0,  0,  0,  1,  0,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  0,  0,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  1,  1,  1,510,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  1,  1,  4,  4,  4,  4,10024],
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