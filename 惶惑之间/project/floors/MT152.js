main.floors.MT152=
{
    "floorId": "MT152",
    "title": "最终之塔17层",
    "name": "最终之塔17层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 6,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "confirm",
                    "text": "要用黑之宝石打开门吗?",
                    "yes": [
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                3
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I541",
                            "operator": "-=",
                            "value": "1"
                        },
                        {
                            "type": "move",
                            "loc": [
                                5,
                                4
                            ],
                            "time": 250,
                            "steps": [
                                "right:1",
                                "up:3"
                            ]
                        }
                    ],
                    "no": []
                }
            ]
        },
        "6,5": [
            "\t[hero]\b[hero]怀特莉丝！你冷静点！",
            "\t[hero]\b[hero]冲动可不一定能战胜现在的闻斯莫提。",
            "\t[怀特莉丝,N430]\b[this,5,4]我现在很冷静。",
            "\t[怀特莉丝,N430]\b[this,5,4]用之前黑骑士掉落的黑之宝石打开这扇门。",
            "\t[怀特莉丝,N430]\b[this,5,4]现在想想……他应该是将我的力量分成了四份才制造出这四个傀儡的。",
            "\t[怀特莉丝,N430]\b[this,5,4]身为惶惑卿的我……能力是将死者做成战斗傀儡，再现他们生前的力量。",
            "\t[怀特莉丝,N430]\b[this,5,4]他应该后悔之前把我的力量一点点的放出来。",
            "\t[怀特莉丝,N430]\b[this,5,4]现在取回了全部力量的我会赐予他最痛苦的死亡。",
            "\t[hero]\b[hero]怀特莉丝……",
            "\t[怀特莉丝,N430]\b[this,5,4]我不再是怀特莉丝……我是惶惑卿。",
            "\t[怀特莉丝,N430]\b[this,5,4]杀死他后，我们的约定就结束了。",
            "\t[hero]\b[hero]……",
            "\t[hero]\b[hero]好吧，有什么事至少在我们解决掉他之后再说。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true
            }
        ],
        "6,2": [
            {
                "type": "autoText",
                "text": "请注意：上楼后将无法返回。（完善到最优地步后就大胆前进吧）",
                "time": 3000
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            }
        ],
        "6,1": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setValue",
                "name": "item:fly",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:jqjs",
                "value": "0"
            },
            {
                "type": "changeFloor",
                "floorId": "MT153",
                "loc": [
                    6,
                    1
                ],
                "direction": "down"
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:zztc",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztc==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    }
                ]
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:zztc",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztc==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:zztc",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztc==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:zztc",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztc==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 31,356, 31, 81,  0, 87,  0, 81, 31,356, 31,10024],
    [10026, 81,  2,  2,  2,  0,  0,  0,  2,  2,  2, 81,10024],
    [10026, 31,356, 31,  2,  2,698,  2,  2, 31,356, 31,10024],
    [10026, 82,  2,  2,  2,430,  0,  0,  2,  2,  2, 82,10024],
    [10026, 32, 34, 32,  2,  0,  0,  0,  2, 32, 34, 32,10024],
    [10026,  2,  2,  2,  2,  2, 85,  2,  2,  2,  2,  2,10024],
    [10026,  0,500,  0,  2,675,  0,675,  2,  0,499,  0,10024],
    [10026, 32,  0, 32,  2,  0,  0,  0,  2, 32,  0, 32,10024],
    [10026,  0,678,  0,  2,  2, 85,  2,  2,  0,678,  0,10024],
    [10026,  2, 81,  2,  2,678,  0,678,  2,  2, 81,  2,10024],
    [10026, 88,  0,677,  0,  0,501,  0,  0,677,  0,356,10024],
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