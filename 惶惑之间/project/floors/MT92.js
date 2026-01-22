main.floors.MT92=
{
    "floorId": "MT92",
    "title": "黑骑士之层",
    "name": "黑骑士之层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "bz.mp3"
        },
        {
            "type": "autoText",
            "text": "前方即将开始战斗，请做好准备（调整技能、道具等）再前进",
            "time": 3000
        },
        {
            "type": "setValue",
            "name": "flag:jqjs",
            "value": "0"
        },
        {
            "type": "playBgm",
            "name": "bz.mp3",
            "keep": true
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "flags.dzw==25",
            "true": [],
            "false": [
                {
                    "type": "if",
                    "condition": "(flags.hqs==1)",
                    "true": [
                        {
                            "type": "moveHero",
                            "time": 500,
                            "steps": [
                                "up:3"
                            ]
                        },
                        "\t[伊杰明,N416]\b[this,9,5]怎么样？",
                        "\t[hero]\b[hero]不行……前进的道路又被门给挡住了。",
                        "\t[hero]\b[hero]而且恐怕需要找到一颗绿色的宝石才能打开。",
                        "\t[伊杰明,N416]\b[this,9,5]……",
                        "\t[伊杰明,N416]\b[this,9,5]看来刚才的震动应该就是塔主又支付代价，立下了一次契约。",
                        "\t[伊杰明,N416]\b[this,9,5]让魔塔的规则又改变了。",
                        "\t[伊杰明,N416]\b[this,9,5]也罢……我想失去了这黑骑士。",
                        "\t[伊杰明,N416]\b[this,9,5]塔主也只能再苟延残喘一些时候了。",
                        "\t[hero]\b[hero]嗯……那么，我们还是尽快回村吧。",
                        "\t[hero]\b[hero]这次也是多亏了赫能够拖住黑骑士一段时间。",
                        "\t[赫,N426]\b[this,9,6]要不是右手当时有伤……",
                        "\t[赫,N426]\b[this,9,6]或许这个任务会交给你哦。",
                        "\t[hero]\b[hero]哈哈……还有力气开玩笑吗？",
                        "\t[伊杰明,N416]\b[this,9,5]那么，就由我们传送回去……",
                        "\t[伊杰明,N416]\b[this,9,5]顺便看看上钩的老鼠吧。",
                        "\t[hero]\b[hero]老鼠？",
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
                            "type": "confirm",
                            "text": "可以现在提交成绩",
                            "yes": [
                                {
                                    "type": "choices",
                                    "text": "选择计分规则",
                                    "choices": [
                                        {
                                            "text": "生命",
                                            "action": [
                                                "分数为生命。",
                                                "额外的，每把绿钥匙增加1000000分。",
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "operator": "+=",
                                                    "value": "core.itemCount('greenKey')*1000000"
                                                },
                                                {
                                                    "type": "win",
                                                    "reason": "击败黑骑士(生命榜)"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "钥匙",
                                            "action": [
                                                "分数为1000+蓝钥匙*1000+黄钥匙*500",
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "value": "1000+core.itemCount('yellowKey')*500+core.itemCount('blueKey')*1000"
                                                },
                                                "额外的，每把绿钥匙增加1000000分。",
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "operator": "+=",
                                                    "value": "core.itemCount('greenKey')*1000000"
                                                },
                                                {
                                                    "type": "win",
                                                    "reason": "击败黑骑士(钥匙榜)"
                                                }
                                            ]
                                        },
                                        {
                                            "text": "综合",
                                            "action": [
                                                "分数为生命+蓝钥匙*1000+黄钥匙*500+魔力*50",
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "operator": "+=",
                                                    "value": "core.itemCount('yellowKey')*500+core.itemCount('blueKey')*1000+hero.mana*50"
                                                },
                                                "额外的，每把绿钥匙增加1000000分。",
                                                {
                                                    "type": "setValue",
                                                    "name": "status:hp",
                                                    "operator": "+=",
                                                    "value": "core.itemCount('greenKey')*1000000"
                                                },
                                                {
                                                    "type": "win",
                                                    "reason": "击败黑骑士(综合榜)"
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ],
                            "no": []
                        },
                        {
                            "type": "function",
                            "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT28: true, MT29: true, MT17: true, MT51: true }\n}"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT17",
                            "loc": [
                                6,
                                5
                            ],
                            "direction": "left"
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "5,3": {
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
        "7,3": {
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
        "6,2": [
            "\t[怀特莉丝,N430]\b[hero]看起来他已经恭候多时了。",
            "\t[hero]\b[hero]以防万一……我事先问一下。",
            "\t[hero]\b[hero]你能感知到他是否是这塔里最强的存在吗？",
            "\t[怀特莉丝,N430]\b[hero]……目前来说是的。",
            "\t[怀特莉丝,N430]\b[hero]至少就现在这一刻来说……他就是这里最强的存在。",
            "\t[怀特莉丝,N430]\b[hero]塔主的气息很微弱……应该是受伤状态……现在还没恢复过来。",
            "\t[怀特莉丝,N430]\b[hero]所以现在就是杀掉塔主最好的机会！",
            "\t[hero]\b[hero]呵……前提是先战胜这家伙啊。",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "setValue",
                "name": "item:I351",
                "value": "0"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        3
                    ]
                ],
                "time": 500
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        3
                    ]
                ],
                "time": 500
            },
            "\t[hero]\b[hero]没想到啊……三人并肩作战。",
            "\t[hero]\b[hero]真是场前所未有的体验……",
            "\t[伊杰明,N416]\b[this,5,3]呵呵……这也是我们人生中探索魔塔的宝贵经历。",
            "\t[伊杰明,N416]\b[this,5,3]就让今天成为我们各自宝贵的回忆吧。",
            "\t[赫,N426]\b[this,7,3]这些话等到解决掉他再说吧……",
            "\t[赫,N426]\b[this,7,3]这家伙看起来……可不是能够让我们分心的存在。",
            "\t[伊杰明,N416]\b[this,5,3]要上了！",
            {
                "type": "move",
                "loc": [
                    5,
                    3
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    4
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
                "type": "move",
                "loc": [
                    7,
                    3
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "down:3"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "skill12",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "omnislash",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    7,
                    6
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "time": 1,
                "steps": [
                    "down:3"
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
                    "backward:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    4
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
                "type": "move",
                "loc": [
                    9,
                    6
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "left:2"
                ]
            },
            {
                "type": "animate",
                "name": "jianji2",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    4
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
                "type": "moveHero",
                "time": 1,
                "steps": [
                    "down:2"
                ]
            },
            {
                "type": "battle",
                "id": "E425"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            "\t[hero]\b[hero]呼……这辈子没打过这么累的战斗……",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    4
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            "\t[伊杰明,N416]\b[this,5,6]咳咳……比想象中的……更艰难啊……",
            "\t[伊杰明,N416]\b[this,5,6]在下的魔力几乎快耗尽了……",
            "\t[赫,N426]\b[this,7,6]可恶……右手几乎使不上力了……",
            "\t[赫,N426]\b[this,7,6]这家伙……到底是多强的存在。",
            "\t[赫,N426]\b[this,7,6]而且他所使用的技艺……",
            "\t[hero]\b[hero]说起来……他刚刚的招式确实和你的有一些相似之处啊……赫。",
            "\t[伊杰明,N416]\b[this,5,6]学习了人类技艺的魔族？",
            "\t[赫,N426]\b[this,7,6]相似……但也有不同……但感觉……",
            {
                "type": "animate",
                "name": "buff",
                "loc": [
                    6,
                    8
                ]
            },
            "\t[hero]\b[hero]小心！这家伙还没被打败！",
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "up:2"
                ]
            },
            {
                "type": "animate",
                "name": "ydld",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    6
                ],
                "time": 1,
                "keep": true,
                "async": true,
                "steps": [
                    "backward:3"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    6
                ],
                "time": 1,
                "keep": true,
                "async": true,
                "steps": [
                    "backward:3"
                ]
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
            "\t[hero]\b[hero]见鬼！伊杰明！有没有什么办法！？",
            "\t[hero]\b[hero]还是现在让我们传送走？",
            "\t[伊杰明,N416]\b[this,5,3]唔……这可真是不好办……",
            "\t[伊杰明,N416]\b[this,5,3]在下还有最后一个手段……可以短暂控制住他！",
            "\t[伊杰明,N416]\b[this,5,3]如果你们其中一人可以暂时拖住他，另一人能爆发出巨大的伤害的话……应该就能赢！",
            "\t[赫,N426]\b[this,7,3]我的右手现在有伤……恐怕是无法打出致命一击了……",
            "\t[赫,N426]\b[this,7,3]我来拖住他！约瑟！你有什么可以结果他的招式吗！",
            "\t[伊杰明,N416]\b[this,5,3]我先开始吟唱了，一定要拖住他！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    3
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    3
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "down:3"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        7,
                        6
                    ]
                ]
            },
            "\t[hero]\b[hero]……唔,结果他的招式吗？",
            "\t[hero]\b[hero]倒还真有……！",
            "\t[hero]\b[hero]靠着怀特莉丝的帮助……现在能够使用更多魔化的力量……",
            "\t[hero]\b[hero]这份诅咒……现在就给我变成力量来偿还一些我过去所承受的痛苦吧！",
            "\t[hero]\b[hero]将魔化的力量注入我所掌握的剑技……",
            {
                "type": "animate",
                "name": "omnislash",
                "loc": [
                    7,
                    6
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    7,
                    6
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[赫,N426]\b[this,9,6]！咳！！",
            {
                "type": "move",
                "loc": [
                    5,
                    3
                ],
                "time": 1,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "bing",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            "\t[伊杰明,N416]\b[this,5,4]约瑟先生！",
            "\t[hero]\b[hero]来啦！",
            {
                "type": "moveHero",
                "time": 1,
                "steps": [
                    "down:3"
                ]
            },
            "里式·光中影",
            {
                "type": "animate",
                "name": "dj",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            "\t[hero]\b[hero]……不会吧……这已经是我的极限了……",
            {
                "type": "setVolume",
                "value": 0,
                "time": 3000,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "I541",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "time": 500
            },
            "\t[hero]\b[hero]这是……",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "setValue",
                "name": "item:I541",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    4
                ],
                "time": 300,
                "keep": true,
                "steps": [
                    "down:1",
                    "right:4"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        9,
                        5
                    ]
                ]
            },
            "\t[伊杰明,N416]\b[this,9,5]赫小姐……还能动吗？",
            "\t[赫,N426]\b[this,9,6]咳咳……只能说勉强捡回一条命……",
            {
                "type": "waitAsync"
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setVolume",
                "value": 100,
                "time": 1
            },
            {
                "type": "vibrate",
                "direction": "horizontal",
                "time": 99999,
                "speed": 10,
                "power": 10,
                "async": true
            },
            "\t[hero]\b[hero]不会还有什么敌人吧！？",
            "\t[伊杰明,N416]\b[this,9,5]……这",
            {
                "type": "stopAsync"
            },
            "\t[hero]\b[hero]好像没事了……",
            "\t[伊杰明,N416]\b[this,9,5]即使解决了黑骑士……我们目前也无法再面对塔主了。",
            "\t[伊杰明,N416]\b[this,9,5]依在下看……还是先回去休整休整吧。",
            "\t[hero]\b[hero]嗯……不过我想先去前面看看。",
            "\t[hero]\b[hero]我因为魔化的诅咒……除开会被侵蚀意识的危险的话……",
            "\t[hero]\b[hero]只要有魔晶，就能让伤口快速恢复。",
            "\t[hero]\b[hero]如果前面还有什么危险，我就马上赶回来。",
            "\t[hero]\b[hero]你看如何？",
            "\t[伊杰明,N416]\b[this,9,5]嗯……也好。",
            "\t[伊杰明,N416]\b[this,9,5]否则我们好不容易击败了黑骑士……都不知道后面是什么，就有些亏了。",
            "\t[伊杰明,N416]\b[this,9,5]那么在下先为赫小姐进行止血处理。",
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "down:5"
                ]
            },
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "changeFloor",
                "floorId": "MT93",
                "loc": [
                    6,
                    11
                ],
                "direction": "up"
            }
        ]
    },
    "changeFloor": {
        "6,11": {
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
    [10026, 33, 33, 33, 33, 84,  0, 84, 33, 33, 33, 33,10024],
    [10026,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,10024],
    [10026,  4,  1,  0,  0,416,  0,426,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,425,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  1,  1,  1,  0,  1,  1,  1,  1,  4,10024],
    [10026,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,10024],
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