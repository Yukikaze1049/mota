main.floors.MT169=
{
    "floorId": "MT169",
    "title": "最终之塔B7层",
    "name": "最终之塔B7层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 23,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.hqshy==1)",
            "true": [
                {
                    "type": "changePos",
                    "loc": [
                        6,
                        2
                    ],
                    "direction": "up"
                },
                {
                    "type": "loadBgm",
                    "name": "jw.mp3"
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]这就是当初那个无名英雄黑骑士的记忆？",
                "\t[hero]\b[hero]……你确实是位值得尊敬的勇者。",
                "\t[hero]\b[hero]后辈在此对你表示诚挚的敬意。",
                "\t[hero]\b[hero]我们绝对不会辜负你当初的期待。",
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "jw0.mp3",
                    "keep": true
                },
                {
                    "type": "setValue",
                    "name": "flag:hqshy",
                    "value": "0"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            3
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            3
                        ]
                    ],
                    "remove": true
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,3": [
            "\t[hero]\b[hero]前面就是机关了。",
            "\t[hero]\b[hero]居然没有什么特殊的魔物看守？",
            "\t[hero]\b[hero]看来这塔主真的已经没有牌可用了。",
            "\t[hero]\b[hero]等等……",
            "\t[hero]\b[hero]这……这感觉是！？",
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            "\t[hero]\b[hero]残破的黑骑士吗？居然还有行动能力……",
            "\t[hero]\b[hero]不过看样子……修复的不是很顺利……那么我或许一个人有可能打倒他。",
            "\t[hero]\b[hero]要上了！",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            }
        ],
        "6,2": {
            "trigger": null,
            "enable": false,
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
            "data": []
        }
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:zztb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztb==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:zztb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztb==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            7
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:zztb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztb==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ]
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:zztb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.zztb==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            4
                        ]
                    }
                ]
            }
        ],
        "6,2": [
            {
                "type": "setBlock",
                "number": "N693",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            "\t[hero]\b[hero]咳咳！还是太勉强了吗……",
            "\t[残破的黑骑士,E692]\b[this,6,2]漂亮的一击。",
            "\t[hero]\b[hero]你……恢复意识了？",
            "\t[残破的黑骑士,E692]\b[this,6,2]抱歉……我作为勇者却被敌人做成了傀儡……",
            "\t[残破的黑骑士,E692]\b[this,6,2]这座魔塔……就交给你们解决了。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "I656",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            "\t[hero]\b[hero]……肉体消失了？",
            "\t[hero]\b[hero]这把剑……"
        ]
    },
    "afterGetItem": {
        "6,2": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 500,
                "async": true
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setHeroIcon",
                "name": "hqs.png"
            },
            {
                "type": "changeFloor",
                "floorId": "MT170",
                "loc": [
                    6,
                    8
                ],
                "direction": "up"
            }
        ]
    },
    "afterOpenDoor": {
        "6,1": [
            {
                "type": "setBlock",
                "number": "N508",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            },
            {
                "type": "setValue",
                "name": "flag:zzt2",
                "value": "1"
            },
            "\t[hero]\b[hero]约瑟……靠你了。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,499,  0,499,  3,  0,507,  0,  3,500,  0,500,10024],
    [10026,  0, 33,  0,  3,  0,692,  0,  3,  0, 33,  0,10024],
    [10026,678,  3, 82,  3, 17,  0, 17,  3, 82,  3,678,10024],
    [10026,  0,  3, 34,  3,  3, 85,  3,  3, 34,  3,  0,10024],
    [10026,  0,677, 34,  3,675,  0,675,  3, 34,677,  0,10024],
    [10026, 81,  3,  3,  3,  0,  0,  0,  3,  3,  3, 81,10024],
    [10026,674,  0, 32,  3,  3, 85,  3,  3, 32,  0,674,10024],
    [10026,  0,  3,  0,  3,678,  0,678,  3,  0,  3,  0,10024],
    [10026, 32,  0,674,  3,  0,  0,  0,  3,674,  0, 32,10024],
    [10026,  3,  3, 81,  3,  3, 83,  3,  3, 81,  3,  3,10024],
    [10026, 32,  0,  0,677,  0,  0,  0,677,  0,  0, 88,10024],
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