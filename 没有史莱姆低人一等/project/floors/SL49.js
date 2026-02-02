main.floors.SL49=
{
    "floorId": "SL49",
    "title": "魔塔 49 层",
    "name": "魔塔49",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "jindi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": "SL50",
            "loc": [
                6,
                11
            ]
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,6": [
            {
                "type": "if",
                "condition": "(flag:youyi===3)",
                "true": [
                    "因为有三族的气运，勇者全属性下降10%",
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ],
                        "name": "atk",
                        "operator": "*=",
                        "value": "0.9"
                    },
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ],
                        "name": "def",
                        "operator": "*=",
                        "value": "0.9"
                    },
                    {
                        "type": "setEnemyOnPoint",
                        "loc": [
                            [
                                6,
                                10
                            ]
                        ],
                        "name": "hp",
                        "operator": "*=",
                        "value": "0.9"
                    },
                    "\t[阿史,hero]\b[hero]勇者阁下。",
                    "\t[勇者,E1123]\b[this,6,10]哈哈，我等你好久了",
                    "\t[阿史,hero]\b[hero]虽然你有你的理由，不过你毕竟杀害了太多的史莱姆同胞，我不得不为它们报仇。",
                    "\t[勇者,E1123]\b[this,6,10]嗯，你为它们报仇也是应当的，我为了救公主，不得不清理路上的怪物也是应当的，没有什么对与错，来吧！"
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:huimiemota===1)",
                        "true": [
                            "\t[阿史,hero]\b[hero]勇者阁下。",
                            "\t[勇者,E1123]\b[this,6,10]哈哈，我等你好久了",
                            "\t[阿史,hero]\b[hero]多谢勇者阁下相助。",
                            "\t[勇者,E1123]\b[this,6,10]没关系，消灭魔王是你我共同的目标，何乐而不为呢？快去吧，魔王就在里面。",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        6,
                                        10
                                    ]
                                ],
                                "remove": true
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:chuishouchenfu===1)",
                                "true": [
                                    "\t[阿史,hero]\b[hero]勇者阁下。",
                                    "\t[勇者,E1123]\b[this,6,10]哼，魔王的走狗，来吧！",
                                    "\t[阿史,hero]\b[hero]呵呵，你杀了魔塔那么多怪物，我要为它们报仇！",
                                    "\t[勇者,E1123]\b[this,6,10]呵呵，你以为我就这么点实力么？",
                                    {
                                        "type": "animate",
                                        "name": "yongchang",
                                        "loc": [
                                            6,
                                            10
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "E1312",
                                        "loc": [
                                            [
                                                6,
                                                10
                                            ]
                                        ]
                                    },
                                    "\t[勇者,E1312]\b[this,6,10]来吧，接受我的审判吧！"
                                ],
                                "false": [
                                    {
                                        "type": "if",
                                        "condition": "(flag:yongbuchenmode===1)",
                                        "true": [
                                            "\t[阿史,hero]\b[hero]勇者阁下。",
                                            "\t[勇者,E1123]\b[this,6,10]哼，来吧！",
                                            "\t[阿史,hero]\b[hero]你杀了魔塔那么多怪物，我要为它们报仇！",
                                            "\t[勇者,E1123]\b[this,6,10]来吧，尽管来吧！"
                                        ],
                                        "false": []
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,446,446, 81,  0,  1, 88,  1,  0, 82,447,447,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,446,446, 81,  0,  0,  0,  0,  0, 82,447,447,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,446,446, 81,  0,  0,  0,  0,  0, 82,447,447,  1],
    [  1,  1,  1,  1,  1,  1, 83,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,1123,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        1
    ]
}