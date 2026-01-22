main.floors.MT27=
{
    "floorId": "MT27",
    "title": "魔塔 10 层",
    "name": "魔塔 10 层",
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
    "firstArrive": [
        {
            "type": "autoText",
            "text": "该层BOSS需要击败两次，且战后暂时无法回到1-10层，请注意。",
            "time": 3000
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 3000,
                "async": true
            },
            "\t[hero]\b[hero]（合成兽……多种魔物融合在一起的产物）",
            "\t[hero]\b[hero]（基本上是恶趣味的塔主才喜欢搞得实验品）",
            "\t[hero]\b[hero]（其强度极其不稳定，弱的可能是那种连普通骷髅都不如的残次品。）",
            "\t[hero]\b[hero]（但强的也可能是那种能够比肩大恶魔的存在。）",
            "\t[hero]\b[hero]（而眼前这只，明显是给来到这层的人类精心准备的礼物。）",
            "\t[hero]\b[hero]（既然这样……我就好好收下你的这份大礼。）",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "pauseBgm"
            }
        ],
        "6,4": {
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
                    "type": "if",
                    "condition": "switch:A",
                    "true": [
                        {
                            "type": "battle",
                            "id": "E420"
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    4
                                ]
                            ],
                            "remove": true
                        },
                        "\t[hero]\b[hero]……真难对付。",
                        "\t[hero]\b[hero]即使每个形态都存在弱点，这家伙本身的实力也足够可怕了……",
                        "\t[hero]\b[hero]如果这不过是这塔里普通的魔物的话……",
                        "\t[hero]\b[hero]凭我的能力……有可能干掉塔主吗……",
                        {
                            "type": "moveHero",
                            "steps": [
                                "up:1"
                            ]
                        },
                        "\t[hero]\b[hero]！！",
                        {
                            "type": "moveHero",
                            "steps": [
                                "backward:1"
                            ]
                        },
                        "\t[hero]\b[hero]……等等！",
                        "\t[hero]\b[hero]这个杀气……",
                        "\t[hero]\b[hero]还有怪物！？",
                        "\t[hero]\b[hero]比合成兽强大百倍的气息正在逼近……",
                        {
                            "type": "setVolume",
                            "value": 100,
                            "time": 1
                        },
                        {
                            "type": "playBgm",
                            "name": "fightstart.mp3",
                            "keep": true
                        },
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
                        "\t[hero]\b[hero]……人形？",
                        "\t[hero]\b[hero]有点眼熟……这身铠甲……",
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
                            "type": "animate",
                            "name": "omnislash",
                            "loc": [
                                6,
                                5
                            ],
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "time": 1,
                            "steps": [
                                "backward:3"
                            ]
                        },
                        "\t[hero]\b[hero]咳咳咳……",
                        "\t[hero]\b[hero]（强的离谱……我的手在颤抖……）",
                        {
                            "type": "move",
                            "loc": [
                                6,
                                4
                            ],
                            "time": 1,
                            "keep": true,
                            "steps": [
                                "down:2"
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "bing",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    11
                                ]
                            ],
                            "time": 1
                        },
                        "\t[伊杰明,N416]\b[this,6,11]趁现在！",
                        "\t[hero]\b[hero]！！！",
                        {
                            "type": "moveHero",
                            "time": 1,
                            "steps": [
                                "up:1"
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "gz",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        "\t[伊杰明,N416]\b[this,6,11]还不够！",
                        {
                            "type": "animate",
                            "name": "an",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "huo",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "lei",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "omnislash",
                            "loc": [
                                6,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "time": 1,
                            "steps": [
                                "backward:3"
                            ]
                        },
                        {
                            "type": "waitAsync"
                        },
                        "\t[伊杰明,N416]\b[this,6,11]快逃吧！",
                        "\t[伊杰明,N416]\b[this,6,11]这家伙的规格不一般！",
                        {
                            "type": "move",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 100,
                            "async": true,
                            "steps": [
                                "left:3",
                                "up:3",
                                "left:2",
                                "down:3"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "down:1",
                                "left:3",
                                "up:3",
                                "left:2",
                                "down:3"
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:fly",
                            "operator": "-=",
                            "value": "1"
                        },
                        {
                            "type": "setValue",
                            "name": "flag:tfjq",
                            "value": "1"
                        },
                        {
                            "type": "hide",
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    5
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    7,
                                    5
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    6
                                ]
                            ],
                            "remove": true
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT26",
                            "loc": [
                                1,
                                11
                            ]
                        }
                    ],
                    "false": [
                        {
                            "type": "loadBgm",
                            "name": "fightstart.mp3"
                        },
                        {
                            "type": "battle",
                            "id": "E420"
                        },
                        {
                            "type": "animate",
                            "name": "omnislash",
                            "loc": [
                                6,
                                5
                            ],
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "steps": [
                                "backward:1"
                            ]
                        },
                        "\t[hero]\b[hero]咳咳……",
                        "\t[hero]\b[hero]比那只三头犬还要强上很多啊……",
                        "\t[hero]\b[hero]（刚才交战中这家伙的会不断变换形态……）",
                        "\t[hero]\b[hero]（能找到每个形态的要害之处的话……或许……）",
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "setValue",
                            "name": "switch:A",
                            "value": "true"
                        }
                    ]
                }
            ]
        },
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
        "6,11": {
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  1,425,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  0,420,  0,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1, 17,  0, 17,  1,  1,  1,  1,10024],
    [10026,356,353,  0,  1,  1,  0,  1,  1,  0,352,356,10024],
    [10026,  1,  1,210,  1,  1,  0,  1,  1,210,  1,  1,10024],
    [10026,  0,  0,  0,  1,  1,  0,  1,  1,  0,  0,  0,10024],
    [10026, 81,  1, 81,  1,  1, 83,  1,  1, 81,  1, 81,10024],
    [10026,  0,  1,  0,  1,  0,  0,  0,  1,  0,  1,354,10024],
    [10026, 88,  1,  0,221,  0,419,  0,221,  0,  1, 31,10024],
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