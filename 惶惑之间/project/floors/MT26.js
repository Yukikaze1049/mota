main.floors.MT26=
{
    "floorId": "MT26",
    "title": "魔塔 9 层",
    "name": "魔塔 9 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": null,
    "weather": null,
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.tfjq==1)",
            "true": [
                "\t[hero]\b[hero]……又分开了……",
                "\t[hero]\b[hero]那家伙估计并没有受到多少伤害。",
                "\t[hero]\b[hero]反倒是我差点死在那了。",
                "\t[hero]\b[hero]现在状态太差了……还是先回村子调整调整吧。",
                "\t[hero]\b[hero]正好抑制器也没什么大碍了。",
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            5
                        ]
                    ]
                },
                {
                    "type": "setValue",
                    "name": "status:tfjq",
                    "value": "0"
                }
            ]
        }
    ],
    "parallelDo": null,
    "events": {
        "1,11": [
            {
                "type": "if",
                "condition": "(flags.tfjq==1)",
                "true": [
                    "\t[hero]\b[hero]那家伙还在楼上……还是先避战吧……",
                    {
                        "type": "moveHero",
                        "steps": [
                            "right:1"
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT27",
                        "loc": [
                            1,
                            11
                        ]
                    }
                ]
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
        },
        "6,5": {
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
            "data": [
                {
                    "type": "if",
                    "condition": "(flags.tfjq==1)",
                    "true": [
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    2
                                ]
                            ],
                            "time": 500
                        },
                        "\t[hero]\b[hero]……",
                        "\t[hero]\b[hero]呼……你还真是热情啊。",
                        {
                            "type": "move",
                            "loc": [
                                6,
                                2
                            ],
                            "time": 1,
                            "keep": true,
                            "steps": [
                                "down:2"
                            ]
                        },
                        {
                            "type": "setVolume",
                            "value": 0,
                            "time": 3000,
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "omnislash",
                            "loc": [
                                6,
                                4
                            ],
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
                            "type": "waitAsync",
                            "includeSounds": true
                        },
                        {
                            "type": "hide",
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    3
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT_8",
                            "loc": [
                                2,
                                6
                            ],
                            "direction": "down"
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:d91",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.d91==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:d91",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.d91==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            6
                        ]
                    }
                ]
            }
        ],
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:d92",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.d92==2)",
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
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:d92",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.d92==2)",
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
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:d92",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.d92==4)",
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
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:d92",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.d92==4)",
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,  0,  0,210,  0,  0,  0,217,  0,  0, 88,10024],
    [10026,356,  0,  0,  1,  0,425,  0,  1,  0,  0,  0,10024],
    [10026,  1, 82,  1,  1,  1, 81,  1,  1,  1,  1, 81,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1,  0,206,  0,10024],
    [10026,221,  0,221,  1,210,  0,210,  1,  0,  0,206,10024],
    [10026,  1, 85,  1,  1,  1, 85,  1,  1, 82,  1,  1,10024],
    [10026, 21,  0, 21,  1,  0,  0,  0,  1,  0,353,  0,10024],
    [10026,  0, 23,  0,  1,221,  0,221,  1,352,  0,356,10024],
    [10026, 31,  0, 31,  1,  1, 85,  1,  1,  0,354,  0,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026, 87,  0,  0,210,  0,  0,  0,217,  0, 21, 21,10024],
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