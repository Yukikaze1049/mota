main.floors.MT166=
{
    "floorId": "MT166",
    "title": "最终之塔B4层",
    "name": "最终之塔B4层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 20,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[hero]\b[hero]这些尸体……",
            "\t[hero]\b[hero]从服装来看是过去来讨伐魔塔的勇者吧。",
            "\t[hero]\b[hero]尸体没有腐烂……",
            {
                "type": "moveHero",
                "steps": [
                    "left:1"
                ]
            },
            "\t[hero]\b[hero]……",
            "\t[hero]\b[hero]尸体上到处都是术式残留的痕迹。",
            "\t[hero]\b[hero]约瑟之前说过的那三座塔……也是用了过去的勇者制成傀儡。",
            "\t[hero]\b[hero]那么这些恐怕就是失败品吧。",
            "\t[hero]\b[hero]侮辱勇者的尸体……真是绝对没法原谅的存在。",
            "\t[hero]\b[hero]我得尽快赶回去支援约瑟才行。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "remove": true
            }
        ],
        "6,8": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    9
                ]
            },
            "\t[hero]\b[hero]有机关？",
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "setBlock",
                "number": "E688",
                "loc": [
                    [
                        4,
                        8
                    ]
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "E689",
                "loc": [
                    [
                        8,
                        4
                    ]
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "E690",
                "loc": [
                    [
                        4,
                        4
                    ]
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "E691",
                "loc": [
                    [
                        8,
                        8
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[hero]\b[hero]看来……并不是失败品啊。",
            "\t[hero]\b[hero]而是专程布置的陷阱。",
            "\t[hero]\b[hero]抱歉了……过去的前辈们。",
            "\t[hero]\b[hero]接下来……我会帮你们从这塔主的诅咒中解脱的。",
            "\t[hero]\b[hero]你们就安心长眠吧。",
            {
                "type": "setValue",
                "name": "flag:ltf",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:jqjs",
                "value": "0"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:mf5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.mf5==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:ltf",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:jqjs",
                        "value": "1"
                    }
                ]
            }
        ],
        "4,8": [
            {
                "type": "setValue",
                "name": "flag:mf5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.mf5==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:ltf",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:jqjs",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:mf5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.mf5==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:ltf",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:jqjs",
                        "value": "1"
                    }
                ]
            }
        ],
        "8,8": [
            {
                "type": "setValue",
                "name": "flag:mf5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.mf5==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            3
                        ]
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    },
                    {
                        "type": "setValue",
                        "name": "flag:ltf",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:jqjs",
                        "value": "1"
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
    [10026, 88,  0,  0,679,  0,  0,  0,679,  0,  0,501,10024],
    [10026,  0,  0, 32,  3, 30,  0, 30,  3, 32,  0,  0,10024],
    [10026, 81,  3,  3,  3,  3, 86,  3,  3,  3,  3, 81,10024],
    [10026,  0,676,  3,686,  0,  0,  0,685,  3,676,  0,10024],
    [10026,676,  0,  3,  0,  0,  0,  0,  0,  3,  0,676,10024],
    [10026,  3, 81,  3,  0,  0,  0,  0,  0,  3, 81,  3,10024],
    [10026, 21,  0,  3,  0,  0,  0,  0,  0,  3,  0, 21,10024],
    [10026, 34, 21,  3,684,  0,  0,  0,687,  3, 21, 34,10024],
    [10026,  3,  3,  3,  3,  3,  0,  3,  3,  3,  3,  3,10024],
    [10026, 33,499,  0,  3, 30,  0, 30,  3,  0,500, 33,10024],
    [10026, 21,  0,677, 81,  0, 87,  0, 81,677,  0, 21,10024],
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