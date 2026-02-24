main.floors.MT461=
{
    "floorId": "MT461",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [
        {
            "name": "universe2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 50000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 100000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            {
                "type": "playBgm",
                "name": "slience3.mp3"
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[小粽,hero]\b[hero]你是？！！梦？！！！",
            "\t[小粽,hero]\b[hero]不可能！你怎么可能还活着！而且还出现在这里？！！",
            "\t[梦？,E514]\b[this,6,6].........对不起，少爷。",
            "\t[小粽,hero]\b[hero]少爷？你在说什么鬼话？！",
            "\t[小粽,hero]\b[hero]！！！不好",
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "hp",
                "value": "350000000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "atk",
                "value": "2000000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "def",
                "value": "650000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "money",
                "value": "500"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "special",
                "value": "[2,9]"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "n",
                "value": "5"
            },
            {
                "type": "battle",
                "id": "E514"
            },
            "\t[小粽,hero]\b[hero]呼....好强！梦！你究竟是什么身份！怎么会有如此强大的力量？！！",
            "\t[梦？,E514]\b[this,6,6]...........",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[小粽,hero]\b[hero]突然就消失了，这究竟是怎么一回事？",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    0
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    0
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "8,11": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到275时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times8>=85)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "454Fshop"
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "hide",
                                            "loc": [
                                                [
                                                    3,
                                                    12
                                                ]
                                            ],
                                            "floorId": "MT455",
                                            "remove": true,
                                            "time": 0
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "459Fshop"
                                        }
                                    ],
                                    "false": [
                                        "\t[神秘商人,womanMagician]不够不够。",
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "暂时不用",
                            "action": [
                                "\t[神秘商人,womanMagician]那好吧。"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    5,
                    0
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    7,
                    0
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [90007,90007,396,396,396, 85, 87, 85,399,400,399,90007,90007],
    [ 32, 32,90007,90007,90007,90007, 85,90007,90007,90007,90007,90007,90007],
    [90007, 34,90007,  0,  0,  0,  0,  0,  0,  0,90007, 33,399],
    [ 31, 81,90007,  0,  0,  0,  0,  0,  0,  0,90007,90007, 82],
    [ 32, 34,90007,  0,  0,  0,  0,  0,  0,  0,90007, 34,399],
    [90007, 81,90007,  0,  0,  0,  0,  0,  0,  0,90007,90007, 82],
    [ 32, 34,90007,  0,  0,  0,1445,  0,  0,  0,90007,90007,399],
    [90007, 81,90007,  0,  0,  0,  0,  0,  0,  0,90007,90007, 82],
    [ 31, 34,90007,  0,  0,  0,  0,  0,  0,  0,90007, 33, 33],
    [90007, 81,90007,  0,  0,  0,  0,  0,  0,  0,90007,90007, 82],
    [90007, 34,90007,90007,90007,90007, 83,90007,90007,90007,90007, 33, 34],
    [90007, 81,90007, 22,  0, 33,412, 33,126, 22,90007,90007, 82],
    [ 32, 32, 81,  0,345,  0, 88,  0,361,  0, 82, 33, 32]
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