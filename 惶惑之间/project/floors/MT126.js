main.floors.MT126=
{
    "floorId": "MT126",
    "title": "冰原之塔10层",
    "name": "冰原之塔10层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 9,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.byjs==1)",
            "true": [
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]看来最后他们还是失败了……",
                "\t[hero]\b[hero]想不到这个闻斯莫提也是魔化症……真是同病相怜啊……",
                "\t[hero]\b[hero]这在当时确实等同于绝症。",
                "\t[hero]\b[hero]如今虽然也没有完美的治疗手段……但靠着魔晶提炼技术……倒也能一直延续生命。",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        1,
                        6
                    ]
                },
                "\t[怀特莉丝,N430]\b[hero]马上就能取回全部的魔力了。",
                "\t[怀特莉丝,N430]\b[hero]若是能够顺利助我复仇。",
                "\t[怀特莉丝,N430]\b[hero]倒也不是不可以今后继续帮你缓解魔化症。",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]当真？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]反正复仇之后我恐怕也没有什么去处了……不如同你一块旅行好了。",
                "\t[怀特莉丝,N430]\b[hero]正好我也想看看外面的世界究竟是什么样的……",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]哈哈……那务必由我做你的专职导游。",
                "\t[hero]\b[hero]等一切结束后，我就带你去看看这个世界！",
                "\t[hero]\b[hero]现在就只剩下与那个惶惑卿的最后决战了。",
                "\t[hero]\b[hero]不过接下来嘛，就先回村子来顿庆功宴。",
                "\t[hero]\b[hero]也算是决战前的准备。",
                {
                    "type": "moveHero",
                    "time": 200,
                    "async": true,
                    "steps": [
                        "right:3"
                    ]
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
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "22"
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
                                            "reason": "决战前夜(生命榜)"
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
                                            "reason": "决战前夜(钥匙榜)"
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
                                            "reason": "决战前夜(综合榜)"
                                        }
                                    ]
                                }
                            ]
                        }
                    ],
                    "no": []
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT6",
                    "loc": [
                        5,
                        13
                    ],
                    "direction": "up"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[佛修斯,N607]\b[this,5,6]……",
            "\t[hero]\b[hero]那么，他的记忆里会有那座塔的更多信息吗？",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "3,6": {
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
                    "condition": "(core.itemCount('I628')==4)",
                    "true": [
                        {
                            "type": "openDoor",
                            "loc": [
                                3,
                                6
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I628",
                            "value": "0"
                        },
                        {
                            "type": "autoText",
                            "text": "拿到左方宝石后将离开冰原之塔且无法返回，请注意。",
                            "time": 3000
                        }
                    ],
                    "false": [
                        {
                            "type": "playSound",
                            "name": "error.mp3"
                        },
                        "此门需要4个蓝宝石碎片才能开启。目前数量：${core.itemCount('I628')}个"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:bs10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bs10==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:bs10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bs10==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            7,
                            6
                        ]
                    }
                ]
            }
        ],
        "5,6": [
            {
                "type": "setBlock",
                "number": "I628"
            },
            "\t[hero]\b[hero]请安息吧。",
            "三色塔结算。",
            "如果生命剩余10000及以上，奖励一把绿钥匙。\n如果魔力剩余80及以上，奖励一把绿钥匙。",
            {
                "type": "if",
                "condition": "hero.hp>=10000",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:greenKey",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "hero.mana>=80",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:greenKey",
                        "operator": "+=",
                        "value": "1"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {
        "5,6": [
            "\t[hero]\b[hero]这下最后的一座也结束了。",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,N430]\b[hero]但是……还是没有魔法师……",
            "\t[怀特莉丝,N430]\b[hero]为什么只有他们三人……",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            "\t[hero]\b[hero]谁知道呢？看看接下来的回忆是否能解答吧。"
        ],
        "1,6": [
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
                "type": "setVolume",
                "value": 100,
                "time": 1
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0,
                "time": 1
            },
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            {
                "type": "changeFloor",
                "floorId": "MT127",
                "loc": [
                    0,
                    12
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,356,120007],
    [120007, 24, 81, 82, 81,621, 81,623, 81,621, 81,  0,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,  0,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,623,120007],
    [120007,  0,  0,120007,  0,  0,  0,120007,621,120007, 21,  0,120007],
    [120007,629,  0, 85,  0,632,  0, 85,  0, 81,  0, 88,120007],
    [120007,  0,  0,120007,  0,  0,  0,120007,621,120007, 21,  0,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,623,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,  0,120007],
    [120007, 24, 81, 82, 81,621, 81,623, 81,621, 81,  0,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,356,120007],
    [120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007,120007]
],
    "bgmap": [
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156],
    [156,156,156,156,156,156,156,156,156,156,156,156,156]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}