main.floors.MT414=
{
    "floorId": "MT414",
    "title": "光明圣堂",
    "name": "光明圣堂",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "defaultGround": "T1272",
    "bgm": null,
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    0
                ]
            ]
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "playBgm",
            "name": "holy6.mp3",
            "keep": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                6
            ]
        },
        "\t[魔王,E1314]\b[this,6,6]终焉之星，如同那昙花一现一般，短暂与神秘。",
        "\t[魔王,E1314]\b[this,6,6]本是不同道路上的人们啊，终究还是来到这真理之地了吗？",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up",
                "up",
                "up",
                "up"
            ]
        },
        "\t[魔王,E1314]\b[this,6,6]终于来到这里了吗？求道者们。",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]返璞归真？也就只有你才能做到这种程度了吧！魔王！！",
        "\t[魔王,E1314]\b[this,6,6]好久不见，名为小粽的勇者。",
        "\t[小粽,hero]\b[hero]你不用跟我套近乎！魔王！！这一切的幕后黑手！！！",
        "\t[魔王,E1314]\b[this,6,6]呵……，何必如此激动呢？",
        "\t[小粽,hero]\b[hero]你自己应该最清楚你的所作所为！",
        "\t[魔王,E1314]\b[this,6,6]……罢了，看来我们现在并没有什么共同语言呢…………",
        "\t[君无天,N1195]\b[hero,2]魔王！你又何必扭捏作态！你那什么所谓的造神计划，让多少人因受到牵连而亡！！",
        "\t[星钰,N1196]\b[hero,1]就是！如果不是因为你的决策，星家又怎么可能会被灭亡呢！！",
        "\t[魔王,E1314]\b[this,6,6]哦？原来是你们呀，君阁主和造物星尊。",
        "\t[魔王,E1314]\b[this,6,6]你们出现在这里其实对于本座来说并不意外。",
        "\t[君无天,N1195]\b[hero,2]你此言何意？！",
        "\t[魔王,E1314]\b[this,6,6]因为……你们的一切行为都在我的预料之中！",
        "\t[小粽,hero]\b[hero]你在开什么玩笑？！",
        "\t[魔王,E1314]\b[this,6,6]你觉得我是在说玩笑话？愚蠢！",
        "\t[魔王,E1314]\b[this,6,6]本座为了完成造神计划用十多年的时间来进行规划，为了就是能够确保成功！",
        "\t[魔王,E1314]\b[this,6,6]并且其中付出的精力岂是你们这些肉眼凡胎的家伙所能领悟的呢！！",
        "\t[魔王,E1314]\b[this,6,6]而现在……就是要完成造神计划的最后一刻了！",
        "\t[魔王,E1314]\b[this,6,6]成为造神计划的祭品吧！小粽！！",
        "【警告】接下来进入特殊boss战模式，魔王必须连续击败九次才能战胜！！！",
        "这是第五章的最后一个boss了，祝你好运！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    1
                ]
            ],
            "floorId": "MT413",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(flag:boss413F===8)",
                    "true": [
                        {
                            "type": "playSound",
                            "name": "049-Explosion02.ogg"
                        },
                        {
                            "type": "vibrate",
                            "time": 500
                        },
                        "\t[星钰,N1196]\b[this,7,11]唔哇！！",
                        {
                            "type": "playSound",
                            "name": "cgefc01.wav"
                        },
                        {
                            "type": "animate",
                            "name": "unexpected1",
                            "loc": [
                                5,
                                11
                            ]
                        },
                        "\t[君无天,N1195]\b[this,5,11]星钰！",
                        "\t[星钰,N1196]\b[this,7,11]好恐怖的力量！这就是魔王真正的力量吗？！小粽……",
                        "\t[君无天,N1195]\b[this,5,11]现在我们只能相信他！相信他可以创造奇迹！！",
                        "\t[星钰,N1196]\b[this,7,11]可是…………",
                        "\t[小粽,hero]\b[hero]呼……不愧是魔王，竟然拥有如此恐怖的力量……",
                        "\t[魔王,E1314]\b[this,6,6]成为造神计划的祭品吧！小粽！！给我……",
                        "\t[魔王,E1314]\b[this,6,6]\r[red]死来！！",
                        "\t[小粽,hero]\b[hero]这一次……将是我最后一次的战斗了！",
                        "\t[小粽,hero]\b[hero]苍穹……",
                        "\t[小粽,hero]\b[hero]\\d守护！",
                        {
                            "type": "setCurtain",
                            "color": [
                                255,
                                255,
                                255,
                                1
                            ],
                            "time": 500,
                            "keep": true
                        },
                        {
                            "type": "playSound",
                            "name": "051-Explosion04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "playSound",
                            "name": "051-Explosion04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "playSound",
                            "name": "051-Explosion04.ogg"
                        },
                        {
                            "type": "battle",
                            "id": "E508"
                        },
                        {
                            "type": "hideStatusBar"
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "playSound",
                            "name": "051-Explosion04.ogg"
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
                            "type": "setVolume",
                            "value": 0,
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 1000
                        },
                        {
                            "type": "pauseBgm"
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0,
                            "async": true
                        },
                        "\t[君无天]结束了吗？",
                        "\t[星钰]前面一片漆黑，根本看不清前面。",
                        "\t[星钰]诶，前面怎么这么亮了。",
                        {
                            "type": "setBgFgBlock",
                            "name": "fg",
                            "number": "X130112",
                            "loc": [
                                [
                                    6,
                                    7
                                ]
                            ]
                        },
                        {
                            "type": "setCurtain",
                            "time": 500
                        },
                        {
                            "type": "playBgm",
                            "name": "holy4.mp3",
                            "keep": true
                        },
                        {
                            "type": "screenFlash",
                            "color": [
                                255,
                                0,
                                0,
                                1
                            ],
                            "time": 500,
                            "times": 1
                        },
                        {
                            "type": "playSound",
                            "name": "cgefc01.wav"
                        },
                        {
                            "type": "animate",
                            "name": "unexpected1",
                            "loc": [
                                5,
                                11
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "unexpected1",
                            "loc": [
                                7,
                                11
                            ]
                        },
                        "星钰与君无天此时却看到小粽被魔王掐住了脖子！！",
                        "\t[星钰,N1196]\b[this,7,11]小…………小粽！！！！",
                        "\t[君无天,N1195]\b[this,5,11]这…………这怎么可能！！",
                        "\t[魔王,E1314]\b[this,6,6]很遗憾，小粽，看来是我赢了！",
                        "\t[小粽,hero]\b[hero]……你……这力量……不可能！为什么你突然会爆发出这么恐怖的力量！",
                        "\t[魔王,E1314]\b[this,6,6]我想……我没有告诉你的必要吧！",
                        "\t[魔王,E1314]\b[this,6,6]\r[red]结束了！",
                        "然而在魔王即将刺穿小粽心脏之前，魔王身体突然一颤。",
                        "\t[魔王,E1314]\b[this,6,6]呃！",
                        "魔王突然放开了小粽。",
                        {
                            "type": "moveHero",
                            "time": 500,
                            "steps": [
                                "backward",
                                "backward"
                            ]
                        },
                        "\t[小粽,hero]\b[hero]怎么…回事？",
                        "\t[魔王,E1314]\b[this,6,6]\r[red]该死！！我的头！！",
                        "\t[星钰,N1196]\b[this,7,11]小粽！！",
                        "\t[君无天,N1195]\b[this,5,11]快回来！龙啸九天决！！",
                        "\t[魔王,E1314]\b[this,6,6]\r[red]啊啊啊啊啊啊！",
                        "\t[魔王,E1314]\b[this,6,6]滚开！！！",
                        {
                            "type": "playSound",
                            "name": "050-Explosion03.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack11",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "jump",
                            "from": [
                                6,
                                6
                            ],
                            "to": [
                                6,
                                0
                            ],
                            "time": 500
                        },
                        "魔王随手抹去了君无天的攻击，并且像发疯一样的逃走了…………",
                        "\t[君无天,N1195]\b[this,5,11]呃！",
                        {
                            "type": "changePos",
                            "loc": [
                                6,
                                8
                            ],
                            "direction": "down"
                        },
                        "\t[小粽,hero]\b[hero]………………究竟……发生了……什么？",
                        "\t[星钰,N1196]\b[this,7,11]小粽，父亲大人 ，你们没事吧！",
                        "\t[小粽,hero]\b[hero]我没事……",
                        "\t[君无天,N1195]\b[this,5,11]不过究竟发生了什么……为什么魔王突然逃走了……",
                        "\t[小粽,hero]\b[hero]他现在好像被什么东西给蚕食着……",
                        "\t[小粽,hero]\b[hero]我隐隐约约的感觉不久之后会发生非常恐怖的事情，我们必须跟踪他！",
                        "\t[星钰,N1196]\b[this,7,11]但是小粽你现在的状态……",
                        "\t[小粽,hero]\b[hero]我还撑着住，我们现在必须跟着他，并且阻止他！",
                        "\t[星钰,N1196]\b[this,7,11]这…………哎。",
                        "\t[君无天,N1195]\b[this,5,11]准备完毕就继续前进吧。",
                        "\t[星钰,N1196]\b[this,7,11]是……父亲大人。",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    7,
                                    11
                                ]
                            ],
                            "remove": true,
                            "time": 0
                        },
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    5,
                                    11
                                ]
                            ],
                            "remove": true,
                            "time": 0
                        },
                        {
                            "type": "follow",
                            "name": "xy.png"
                        },
                        {
                            "type": "follow",
                            "name": "jwt.png"
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    6,
                                    0
                                ]
                            ],
                            "time": 0
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "insert",
                            "loc": [
                                6,
                                4
                            ]
                        },
                        {
                            "type": "waitAsync"
                        }
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:boss413F===7)",
                            "true": [
                                {
                                    "type": "battle",
                                    "id": "E508"
                                },
                                {
                                    "type": "setVolume",
                                    "value": 0,
                                    "time": 500
                                },
                                {
                                    "type": "pauseBgm"
                                },
                                "\t[君无天,N1195]\b[hero,2]噗！！！",
                                "\t[魔王,E1314]\b[this,6,6]你这家伙……居然还能够硬撑下来！",
                                "\t[君无天,N1195]\b[hero,2]咳咳咳！！！好恐怖的气息，没想到你体内蕴含着这么恐怖的力量！",
                                {
                                    "type": "setVolume",
                                    "value": 90,
                                    "time": 0
                                },
                                {
                                    "type": "playBgm",
                                    "name": "disorder6.mp3",
                                    "keep": true
                                },
                                "\t[小粽,hero]\b[hero]星天前辈，星钰，你们暂时先去休息吧，最后就让我来清算这一切了！",
                                "\t[君无天,N1195]\b[hero,2]一切……小心。",
                                "\t[星钰,N1196]\b[hero,1]小粽，你一定....要赢啊！",
                                {
                                    "type": "unfollow",
                                    "name": "xy.png"
                                },
                                {
                                    "type": "unfollow",
                                    "name": "jwt.png"
                                },
                                {
                                    "type": "setBlock",
                                    "number": "N1195",
                                    "loc": [
                                        [
                                            5,
                                            11
                                        ]
                                    ],
                                    "time": 0
                                },
                                {
                                    "type": "setBlock",
                                    "number": "N1196",
                                    "loc": [
                                        [
                                            7,
                                            11
                                        ]
                                    ],
                                    "time": 0
                                },
                                "\t[魔王,E1314]\b[this,6,6]…………你……",
                                "\t[小粽,hero]\b[hero]终于要结束了",
                                "\t[小粽,hero]\b[hero]在这旅途中，我见过无数的悲欢离合，历经了沧海桑田。",
                                "\t[小粽,hero]\b[hero]在这过程中我曾经迷茫过，忐忑过，悲伤过，绝望过。但在那些愿意与我一同前行的人帮助下，我终于走到了这里",
                                "\t[小粽,hero]\b[hero]而现在......只要解决了你，你那所谓的计划就会被彻底粉碎！",
                                "\t[小粽,hero]\b[hero]而我……也能完成当初她所许下的诺言！",
                                "\t[小粽,hero]\b[hero]\\d就让我结束这一切吧！魔王！！",
                                "\t[魔王,E1314]\b[this,6,6]\r[red]不可能的！你们是不可能阻止我！！",
                                "\t[魔王,E1314]\b[this,6,6]\r[red]圣魔决·纪元永世！",
                                "魔王攻击力大幅度提升！！",
                                {
                                    "type": "setValue",
                                    "name": "flag:boss413F",
                                    "value": "8",
                                    "norefresh": true
                                },
                                {
                                    "type": "setEnemy",
                                    "id": "E508",
                                    "name": "atk",
                                    "value": "300000000000000000"
                                }
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:boss413F===6)",
                                    "true": [
                                        "\t[小粽,hero]\b[hero]星天前辈！小心！！",
                                        "\t[君无天,N1195]\b[hero,2]浪血千刃斩！",
                                        {
                                            "type": "battle",
                                            "id": "E508"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:boss413F",
                                            "value": "7",
                                            "norefresh": true
                                        },
                                        "\t[君无天,N1195]\b[hero,2]\r[red]噗！",
                                        "\t[小粽,hero]\b[hero]星天前辈！",
                                        "\t[魔王,E1314]\b[this,6,6]哦？这是什么招数，竟然能够阻挡我这一招！",
                                        "\t[君无天,N1195]\b[hero,2]这一招......是两位已故之人所传递给我的招数。",
                                        "\t[魔王,E1314]\b[this,6,6].....有点意思，不过，也就仅此了！",
                                        "\t[魔王,E1314]\b[this,6,6]圣魔决·终焉梦曲！",
                                        "魔王的生命力大幅度提升！！！但攻击力大幅度下降！！",
                                        {
                                            "type": "setEnemy",
                                            "id": "E508",
                                            "name": "hp",
                                            "value": "15000000000000000000"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E508",
                                            "name": "atk",
                                            "value": "125000000000000000"
                                        },
                                        {
                                            "type": "update"
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:boss413F===5)",
                                            "true": [
                                                {
                                                    "type": "battle",
                                                    "id": "E508"
                                                },
                                                "\t[君无天,N1195]\b[hero,2]呃！你的力量……怎么回事？为什么还在飙升？！",
                                                "\t[魔王,E1314]\b[this,6,6]那是因为我之前一直在压制实力而已！",
                                                "\t[魔王,E1314]\b[this,6,6]本座可是魔塔世界最强的存在！就让你们这些蝼蚁看看什么叫做绝望吧。",
                                                "\t[魔王,E1314]\b[this,6,6]圣魔决·永生死道！",
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:boss413F",
                                                    "value": "6",
                                                    "norefresh": true
                                                },
                                                "魔王的攻击力提升至二十五京！！！",
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E508",
                                                    "name": "atk",
                                                    "value": "250000000000000000"
                                                },
                                                {
                                                    "type": "update"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:boss413F===4)",
                                                    "true": [
                                                        {
                                                            "type": "battle",
                                                            "id": "E508"
                                                        },
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:boss413F",
                                                            "value": "5",
                                                            "norefresh": true
                                                        },
                                                        "\t[魔王,E1314]\b[this,6,6]哈哈哈哈！好！再来！！",
                                                        "\t[魔王,E1314]\b[this,6,6]圣魔决·天魔芸汐！",
                                                        "\t[星钰,N1196]\b[hero,1]星溟·鼎天！",
                                                        "\t[魔王,E1314]\b[this,6,6]给我滚！！蝼蚁！！！",
                                                        {
                                                            "type": "animate",
                                                            "name": "attack9",
                                                            "loc": [
                                                                6,
                                                                8
                                                            ],
                                                            "async": true
                                                        },
                                                        {
                                                            "type": "playSound",
                                                            "name": "Attack09.wav"
                                                        },
                                                        {
                                                            "type": "screenFlash",
                                                            "color": [
                                                                255,
                                                                0,
                                                                0,
                                                                1
                                                            ],
                                                            "time": 500,
                                                            "times": 1
                                                        },
                                                        {
                                                            "type": "sleep",
                                                            "time": 200
                                                        },
                                                        {
                                                            "type": "playSound",
                                                            "name": "Blow4.ogg"
                                                        },
                                                        {
                                                            "type": "sleep",
                                                            "time": 200
                                                        },
                                                        "\t[星钰,N1196]\b[hero,1]\r[red]噗！",
                                                        "\t[小粽,hero]\b[hero]星钰！",
                                                        "\t[君无天,N1195]\b[hero,2]你找死！龙啸九天决！！",
                                                        "\t[魔王,E1314]\b[this,6,6]哈哈哈哈哈哈哈哈！来的好！！",
                                                        "\t[魔王,E1314]\b[this,6,6]圣魔决·生灭殉葬！",
                                                        "魔王获得先攻，净化属性",
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E508",
                                                            "name": "special",
                                                            "value": "[32,7,8,9,1]"
                                                        },
                                                        {
                                                            "type": "update"
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss413F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E508"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss413F",
                                                                    "value": "4",
                                                                    "norefresh": true
                                                                },
                                                                "\t[小粽,hero]\b[hero]天破苍穹！",
                                                                "\t[魔王,E1314]\b[this,6,6]来的好！圣魔决·恩赐解脱！",
                                                                "魔王获得反击，破甲属性",
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E508",
                                                                    "name": "special",
                                                                    "value": "[32,7,8]"
                                                                },
                                                                {
                                                                    "type": "update"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss413F===2)",
                                                                    "true": [
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E508"
                                                                        },
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss413F",
                                                                            "value": "3"
                                                                        },
                                                                        "\t[魔王,E1314]\b[this,6,6]哼！你们几个虫子看来比我想象中还要难以清除！",
                                                                        "\t[星钰,N1196]\b[hero,1]为了彻底阻止你，我们一直都在不断进步，不断成长。",
                                                                        "\t[小粽,hero]\b[hero]虽然你非常强大，但是我们并不只是代表着自己！",
                                                                        "\t[小粽,hero]\b[hero]能支撑我们站在这里的是因为我们携带诸多人的希望！",
                                                                        "\t[小粽,hero]\b[hero]那些人虽然现在不在我们身边，但是其寄托与希望却一直永存于我们心中！",
                                                                        "\t[小粽,hero]\b[hero]所以准备伏诛吧！",
                                                                        "\t[魔王,E1314]\b[this,6,6]开什么玩笑！就凭你们几个也想阻止本座？",
                                                                        "\t[魔王,E1314]\b[this,6,6]没有人能够阻止我完成造神计划，哪怕为此\r[red]——弑神！",
                                                                        "魔王的生命值与防御力分别提升至七百京与六点五京！！！",
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E508",
                                                                            "name": "hp",
                                                                            "value": "7000000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E508",
                                                                            "name": "atk",
                                                                            "value": "200000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E508",
                                                                            "name": "def",
                                                                            "value": "65000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss413F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E508"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss413F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[魔王,E1314]\b[this,6,6]何必继续抵抗呢，你们是不可能击败我的。",
                                                                                "\t[小粽,hero]\b[hero]你真当自己无敌了吗？！",
                                                                                "\t[魔王,E1314]\b[this,6,6]哦？吃我一击居然还能如此自若，的确让本座十分诧异。",
                                                                                "\t[君无天,N1195]\b[hero,2]怎么？这就让你感到吃惊了吗。还会有更让你吃惊的！",
                                                                                "\t[魔王,E1314]\b[this,6,6]哈哈哈哈哈哈！能让本座吃惊的事，目前来说——没有！！",
                                                                                "\t[魔王,E1314]\b[this,6,6]圣魔决·天国恩赐！",
                                                                                "魔王的生命值提升至六百五十京！！但攻击力降低5京！！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "hp",
                                                                                    "value": "6500000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "atk",
                                                                                    "value": "200000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "def",
                                                                                    "value": "60000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                "\t[小粽,hero]\b[hero]为什么你一定要完成造神计划，造神计划真正的目的究竟是什么？",
                                                                                "\t[魔王,E1314]\b[this,6,6]我只能说……无可奉告！",
                                                                                "\t[魔王,E1314]\b[this,6,6]圣魔决·生灵之剑！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "money",
                                                                                    "value": "100000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "hp",
                                                                                    "value": "5000000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "atk",
                                                                                    "value": "250000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "def",
                                                                                    "value": "45000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E508"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss413F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[小粽,hero]\b[hero]无可奉告？这就是你的答案？！",
                                                                                "\t[小粽,hero]\b[hero]牺牲无数人的生命来完成这个造神计划，你现在却说无可奉告？！！",
                                                                                "\t[魔王,E1314]\b[this,6,6]因为这对于我来说非常重要！即使是与整个世界为敌，我也要去完成它！！",
                                                                                "\t[小粽,hero]\b[hero]完成它之后去彻底毁灭这个世界吗？！我绝对不会让你的阴谋得逞！！",
                                                                                "\t[魔王,E1314]\b[this,6,6]是吗？那就让我先把你给击碎吧！",
                                                                                "\t[魔王,E1314]\b[this,6,6]圣魔决·死玄冥海！",
                                                                                "魔王防御力提升至六京！！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "hp",
                                                                                    "value": "5000000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "atk",
                                                                                    "value": "250000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E508",
                                                                                    "name": "def",
                                                                                    "value": "60000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "6,4": [
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
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            "小粽他们不断跟随魔王的步伐来到了一个神秘之地……",
            {
                "type": "changeFloor",
                "floorId": "MT415",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT413",
            "loc": [
                6,
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [80028,80033,80033,80033,80033,80034,  0,80032,80033,80033,80033,80033,80027],
    [80026,80044,80040,80041,80067,80044,  0,80044,80066,80041,80041,80044,80024],
    [80026,80052,80048,80049,80075,80052,  0,80052,80074,80049,80049,80052,80024],
    [80026,80060,80056,80057,80083,80060, 17,80060,80082,80057,80058,80060,80024],
    [80026,80009,80178,80179,  0, 17,  0, 17,  0,80178,80179,80009,80024],
    [80026,80009,80009,  0,  0,90602,  0,90604,  0,  0,80009,80009,80024],
    [80026,70124,80009,  0,  0,90610,508,  0,  0,  0,80009,70124,80024],
    [80026,70124,80009,  0,  0,  0,  0,  0,  0,  0,80009,70124,80024],
    [80026,70124,80009,  0,  0,  0,  0,  0,  0,  0,80009,70124,80024],
    [80026,80009,80009,  0,  0,  0,  0,  0,  0,  0,80009,80009,80024],
    [80026,80151,80135,  0,  0,  0,  0,  0,  0,  0,80135,80151,80024],
    [80026,80159,80143,80009,80009,80009,  0,80009,80009,80009,80143,80159,80024],
    [80020,80017,80017,80017,80018,80201, 93,80201,80016,80017,80017,80017,80019]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,  0],
    [  0,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,  0],
    [  0,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,  0],
    [  0,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,143,143,143,143,143,143,143,80009,80009,  0],
    [  0,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,80009,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,70069,  0,  0,  0,  0,  0,70069,  0,  0,  0],
    [  0,  0,80162,80163,  0,  0,  0,  0,  0,80162,80163,  0,  0],
    [  0,80151,80170,80171,80151,  0,  0,  0,80151,80170,80171,80151,  0],
    [  0,80159,  0,101,80159,  0,  0,  0,80159,101,  0,80159,  0],
    [  0,70116,  0,102,  0,  0,  0,  0,  0,102,  0,70116,  0],
    [  0,70116,  0,  0,  0,90610,  0,90612,  0,  0,  0,70116,  0],
    [  0,70116,  0,  0,  0,  0,  0,  0,  0,  0,  0,70116,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,101,  0,  0,  0,  0,  0,101,  0,  0,  0],
    [  0,  0,  0,102,  0,  0,  0,  0,  0,102,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,90603,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,90611,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,10121,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}