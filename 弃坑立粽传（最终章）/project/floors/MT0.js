main.floors.MT0=
{
    "floorId": "MT0",
    "title": "家",
    "name": "家",
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "defaultGround": "ground3",
    "images": [],
    "item_ratio": 1,
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,10016,10017,10018,10016,10017,10018,10016,10017,10018,10016,10018, 20],
    [ 20,10016,10017,10018,10016,10017,10018,10016,10017,10018,10016,10018, 20],
    [ 20,10115,10107,10071,10024,10104,10105,10104,10172,10171,10024,10095, 20],
    [ 20,10114,10114,10079,  0,10112,10113,10112,10180,10179,10000,10103, 20],
    [ 20,10000,10000,10087,10000,10043,10044,10045,10000,10000,10000,10000,10016],
    [ 20,10000,10000,10000,10000,10051,10052,10053,10000,10000,10000,10000,10016],
    [ 20,10000,10000,10032,10033,10034,10000,10000,10000,10000,10000,10000,10024],
    [ 20,10000,10054,10040,10041,10042,10054,10000,10000,10000,10000,10000, 94],
    [ 20,10000,10000,10048,10049,10050,10000,10000,10000,10000,10000,10000, 20],
    [ 20,10095,10000,10000,10000,10000,10000,10000,10000,10000,10000,  0, 20],
    [ 20,10103,10000,10000,10000,  0,  0, 45, 46,10000, 89,10103, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "slience.mp3",
            "keep": true
        },
        "\t[小粽,hero]\b[hero]啊，又是新的一天。",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]先去看看母亲的墓碑吧......。",
        {
            "type": "waitAsync"
        }
    ],
    "parallelDo": "",
    "events": {
        "8,4": [
            "\t[小粽,hero]\b[hero]我经常穿的衣服。"
        ],
        "9,4": [
            "\t[小粽,hero]\b[hero]这是母亲生前最喜欢穿的裙子。"
        ],
        "2,4": [
            "一本日记，日记上写的是——",
            "一月二十四号母亲，儿子一定会好好活下去的，连同您的那一份。",
            "\t[小粽,hero]\b[hero]母亲呀，哎......"
        ],
        "10,11": [
            "提示：从本版本开始可以进行选择所有章节，不过要回答问题。",
            {
                "type": "choices",
                "text": "请选择你要抵达的章节。",
                "choices": [
                    {
                        "text": "第二章",
                        "action": [
                            "好，请回答问题。",
                            {
                                "type": "choices",
                                "text": "哪一位是主角最开始正式见面的？",
                                "choices": [
                                    {
                                        "text": "蒙面男子",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "安兹乌洛斯",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "仙琳",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "小粽击败的第二位头目是哪一位",
                                                "choices": [
                                                    {
                                                        "text": "道傀使",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "烤貂律者",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "若影卡萨",
                                                        "action": [
                                                            "回答正确，即将进入第二章！",
                                                            {
                                                                "type": "pauseBgm"
                                                            },
                                                            {
                                                                "type": "hideStatusBar"
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
                                                                "type": "sleep",
                                                                "time": 500
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:book",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:fly",
                                                                "value": "1"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:yellowKey",
                                                                "value": "6"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:blueKey",
                                                                "value": "5"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:redKey",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "addValue",
                                                                "name": "item:pickaxe",
                                                                "value": "2"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:hp",
                                                                "value": "20674"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:atk",
                                                                "value": "964"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:def",
                                                                "value": "854"
                                                            },
                                                            {
                                                                "type": "setValue",
                                                                "name": "status:mdef",
                                                                "value": "1140"
                                                            },
                                                            {
                                                                "type": "function",
                                                                "function": "function(){\ncore.removeMaps(\"MT1\", \"MT26\")\n}"
                                                            },
                                                            "在进行空间传送的途中，小粽从仙琳那里了解到了有关四星尊天的相关情报。",
                                                            "\t[小粽,hero]仙琳，四星尊天具体是指的是什么？",
                                                            "\t[仙琳,fairy]四星尊天其实是一个非常大的区域空间，这个区域空间与你之前所接触的前20F截然不同。",
                                                            "\t[仙琳,fairy]这个区域空间大多是以平面室外或者室内来组成的，这个区域空间可以说是这座高塔的基层空间。",
                                                            "\t[小粽,hero]简单的来说就是这个区域面积很大，不像之前封闭的空间。",
                                                            "\t[仙琳,fairy]嗯！对！就是这样",
                                                            "\t[仙琳,fairy]这个区域的普通魔物其实跟你前面面对的那些无智慧的魔物并没有什么区别，唯独这个大区域的各个头目你要特别注意",
                                                            "\t[仙琳,fairy]四星尊天流传这这么一段话：",
                                                            "\t[仙琳,fairy]\\d剑之巅:  破万法 斩山河 定乾坤",
                                                            "\t[仙琳,fairy]\\d体之巅：强健体 破刀枪 震山河",
                                                            "\t[仙琳,fairy]\\d音之巅：奏音律 声振体 语入心",
                                                            "\t[仙琳,fairy]\\d器之巅：施器物 塑法物 创造物",
                                                            "\t[仙琳,fairy]每段话分别对应着这个区域的头目的特殊能力。",
                                                            "就在这个时候仙琳那粉嫩的小脸不禁微微一红，好像是想起了之前19F发生的某些事情，但很快就恢复了正常",
                                                            "\t[仙琳,fairy]这个区域空间一共有四个头目，他们分别管辖着属于自己的一片领域。",
                                                            "\t[小粽,hero]斩山河...强健体...奏音律...施器物...。",
                                                            "\t[小粽,hero]斩山河和强健体好理解，奏音律勉强能理解，但这施器物......。",
                                                            "\t[仙琳,fairy]小粽 你还记不记得我当初不是说过这个有两位是我的好姐妹吗。",
                                                            "\t[仙琳,fairy]剑之巅和器之巅的传人就分别是我的好姐妹们。",
                                                            "\t[仙琳,fairy]施器物简单的来说就是\\d外物之道。",
                                                            "\t[小粽,hero]外物之道？那是什么。",
                                                            "\t[仙琳,fairy]外物之道简单的来说就是凭借身外之物来进行战斗。",
                                                            "\t[仙琳,fairy]修炼外物之道的生灵肉体防御跟普通生灵没有什么区别。",
                                                            "\t[仙琳,fairy]但是却可以凭借器物来达到杀伤比自己肉体实力强大的多的敌人。",
                                                            "\t[小粽,hero]......原来如此，这种修炼路线跟我们人类的科技技术很类似。",
                                                            "\t[小粽,hero]我们人类使用的一类武器应该算是你们所谓的外物之道。",
                                                            "\t[小粽,hero]对了 仙琳 那我们接下来该先去哪个领域？",
                                                            "\t[仙琳,fairy]先去剑之巅，你不是正好也是走剑道的吗？跟堇姐姐切磋应该会快速的提高你的实力的~",
                                                            "\t[小粽,hero]你说的堇姐姐.....她会不会很敌视我这样的人类？",
                                                            "\t[仙琳,fairy]嗯......不会的，堇姐姐她一心只对剑感兴趣，并不会因为你是人类勇者而与你死斗。",
                                                            "\t[小粽,hero]......明白了，或许从她身上我能感悟出更高层次的剑道吧。",
                                                            {
                                                                "type": "sleep",
                                                                "time": 500
                                                            },
                                                            "与此同时  光明圣堂内",
                                                            {
                                                                "type": "setCurtain",
                                                                "time": 1000,
                                                                "async": true
                                                            },
                                                            {
                                                                "type": "changeFloor",
                                                                "floorId": "MT27",
                                                                "loc": [
                                                                    641,
                                                                    641
                                                                ],
                                                                "time": 0
                                                            },
                                                            {
                                                                "type": "disableShop",
                                                                "id": "moneyShop1"
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
                    },
                    {
                        "text": "第三章",
                        "action": [
                            "好，请回答问题。",
                            {
                                "type": "choices",
                                "text": "下面哪一位是剑神星尊？",
                                "choices": [
                                    {
                                        "text": "堇",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "罗天的未婚妻叫什么名字？",
                                                "choices": [
                                                    {
                                                        "text": "星钰",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "洛柔",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "洛兰",
                                                        "action": [
                                                            {
                                                                "type": "choices",
                                                                "text": "魔塔世界第三个大区域叫什么？",
                                                                "choices": [
                                                                    {
                                                                        "text": "三圣之巅",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "四星尊天",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "阴阳圣坛",
                                                                        "action": [
                                                                            "回答正确，即将进入第三章！",
                                                                            {
                                                                                "type": "pauseBgm"
                                                                            },
                                                                            {
                                                                                "type": "hideStatusBar"
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
                                                                                "type": "sleep",
                                                                                "time": 500
                                                                            },
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:book",
                                                                                "value": "1"
                                                                            },
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:fly",
                                                                                "value": "1"
                                                                            },
                                                                            "随着时间的流逝，小粽他们已经开启了传送法阵去这座魔塔的第三个区域——阴阳圣坛。",
                                                                            "虽然传送法阵开启了，但是！阴阳圣坛与四星尊天的空间距离要比前20F到四星尊天要远的多。",
                                                                            "在小粽他们传送的同时，堇已经到达了阴阳圣坛的阴之坛了。",
                                                                            "注意：接下来会暂时切换主角，也就是说之前的道具和钥匙都不能用了！",
                                                                            "还有，接下来每一章钥匙道具属性都会重新变动,说白了就是防止你们滚太多雪球。",
                                                                            "玩家：？？？",
                                                                            "而且接下来是独立关卡所以放心咸鱼吧！",
                                                                            "主角2——堇",
                                                                            "四星尊天的剑神星尊，四大星尊的最强存在，对剑的领悟达到了一种匪夷所思的境界，攻击力非常强大！",
                                                                            "缺点：续航能力和防御偏低。",
                                                                            "就这么简单的介绍了，让我们继续开始游戏吧！",
                                                                            {
                                                                                "type": "setHeroIcon",
                                                                                "name": "hero1.png"
                                                                            },
                                                                            {
                                                                                "type": "disableShop",
                                                                                "id": "161Fshop"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:hp",
                                                                                "value": "1000000000"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:atk",
                                                                                "value": "250000000"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:def",
                                                                                "value": "50000000"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:mdef",
                                                                                "value": "100000000"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:money",
                                                                                "value": "0"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "item:yellowKey",
                                                                                "value": "0"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "item:blueKey",
                                                                                "value": "0"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "item:redKey",
                                                                                "value": "0"
                                                                            },
                                                                            {
                                                                                "type": "setValue",
                                                                                "name": "status:money",
                                                                                "value": "0"
                                                                            },
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:I507",
                                                                                "value": "-1"
                                                                            },
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:centerFly",
                                                                                "value": "-114514"
                                                                            },
                                                                            {
                                                                                "type": "addValue",
                                                                                "name": "item:pickaxe",
                                                                                "value": "-114514"
                                                                            },
                                                                            {
                                                                                "type": "showStatusBar"
                                                                            },
                                                                            {
                                                                                "type": "changeFloor",
                                                                                "floorId": "MT185",
                                                                                "loc": [
                                                                                    6,
                                                                                    1
                                                                                ],
                                                                                "direction": "down",
                                                                                "time": 0
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "初始魔塔",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "堇",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "泰帝",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "罗天",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "星钰",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "第四章",
                        "action": [
                            "好，请回答问题。",
                            {
                                "type": "choices",
                                "text": "堇是了阴阳圣坛的哪一坛？",
                                "choices": [
                                    {
                                        "text": "阴之坛",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "最后截杀堇的是哪一位？",
                                                "choices": [
                                                    {
                                                        "text": "黯夜殇",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "圣羽洛斯",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "君阁主",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "魔王",
                                                        "action": [
                                                            {
                                                                "type": "choices",
                                                                "text": "阳之坛的最强者是哪一位？",
                                                                "choices": [
                                                                    {
                                                                        "text": "圣护之手·闇",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "圣护之手·天",
                                                                        "action": [
                                                                            {
                                                                                "type": "choices",
                                                                                "text": "最后是谁为小粽付出了自己的生命？",
                                                                                "choices": [
                                                                                    {
                                                                                        "text": "仙琳",
                                                                                        "action": [
                                                                                            "回答正确，即将进入第四章！",
                                                                                            {
                                                                                                "type": "pauseBgm"
                                                                                            },
                                                                                            {
                                                                                                "type": "hideStatusBar"
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
                                                                                                "type": "sleep",
                                                                                                "time": 500
                                                                                            },
                                                                                            {
                                                                                                "type": "addValue",
                                                                                                "name": "item:book",
                                                                                                "value": "1"
                                                                                            },
                                                                                            {
                                                                                                "type": "addValue",
                                                                                                "name": "item:fly",
                                                                                                "value": "1"
                                                                                            },
                                                                                            {
                                                                                                "type": "sleep",
                                                                                                "time": 500
                                                                                            },
                                                                                            {
                                                                                                "type": "playBgm",
                                                                                                "name": "GG2.mp3",
                                                                                                "keep": true
                                                                                            },
                                                                                            "\t[仙琳]再见了，小粽，谢谢你教会了你们人类的情感，\n在未来的道路上你一定要好好活着哟！",
                                                                                            "\t[小粽]仙琳！不！！",
                                                                                            "\t[小粽]啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！！",
                                                                                            {
                                                                                                "type": "playSound",
                                                                                                "name": "051-Explosion04.ogg"
                                                                                            },
                                                                                            {
                                                                                                "type": "autoSave"
                                                                                            },
                                                                                            {
                                                                                                "type": "changeFloor",
                                                                                                "floorId": "MT243",
                                                                                                "loc": [
                                                                                                    1,
                                                                                                    3
                                                                                                ],
                                                                                                "direction": "down",
                                                                                                "time": 0
                                                                                            }
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "仙月",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "星钰",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "罗天",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    }
                                                                                ]
                                                                            }
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "圣护之手·桦",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "圣护之手·鸠",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
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
                                    {
                                        "text": "阳之坛",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "第五章",
                        "action": [
                            "好，请回答问题。",
                            {
                                "type": "choices",
                                "text": "第四章一开始与小粽见面的那个人真的是星钰的亲生父亲吗？",
                                "choices": [
                                    {
                                        "text": "是",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "不是",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "哪一位才是君阁主？",
                                                "choices": [
                                                    {
                                                        "text": "黯夜殇",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "圣羽洛斯",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "梦",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "都不是",
                                                        "action": [
                                                            {
                                                                "type": "choices",
                                                                "text": "星天的真实身份是什么？",
                                                                "choices": [
                                                                    {
                                                                        "text": "魔塔世界第一家族族长",
                                                                        "action": [
                                                                            {
                                                                                "type": "choices",
                                                                                "text": "小粽的母亲是被谁杀害的？",
                                                                                "choices": [
                                                                                    {
                                                                                        "text": "星天",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "君无天",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "黯夜殇",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "圣羽洛斯",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "choices",
                                                                                                "text": "小粽的其中一个身份是？",
                                                                                                "choices": [
                                                                                                    {
                                                                                                        "text": "第一代试验体",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "第二代试验体",
                                                                                                        "action": [
                                                                                                            {
                                                                                                                "type": "choices",
                                                                                                                "text": "圣羽洛斯最后是谁杀的？",
                                                                                                                "choices": [
                                                                                                                    {
                                                                                                                        "text": "小粽",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "罗天",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "君无天",
                                                                                                                        "action": [
                                                                                                                            "回答正确，即将进入第五章！",
                                                                                                                            {
                                                                                                                                "type": "addValue",
                                                                                                                                "name": "item:book",
                                                                                                                                "value": "1"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "type": "addValue",
                                                                                                                                "name": "item:fly",
                                                                                                                                "value": "1"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "type": "hideStatusBar"
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "type": "playBgm",
                                                                                                                                "name": "start.mp3",
                                                                                                                                "keep": true
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
                                                                                                                                "type": "changeFloor",
                                                                                                                                "floorId": "MT447",
                                                                                                                                "loc": [
                                                                                                                                    6,
                                                                                                                                    6
                                                                                                                                ],
                                                                                                                                "direction": "down",
                                                                                                                                "time": 0
                                                                                                                            },
                                                                                                                            {
                                                                                                                                "type": "insert",
                                                                                                                                "loc": [
                                                                                                                                    0,
                                                                                                                                    0
                                                                                                                                ],
                                                                                                                                "floorId": "MT447"
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "堇",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
                                                                                                                        ]
                                                                                                                    }
                                                                                                                ]
                                                                                                            }
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "第三代试验体",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "魔王之子",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
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
                                                                    {
                                                                        "text": "三圣之巅之君阁主",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "阴阳圣坛主管者",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "君阁主之徒",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
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
                    {
                        "text": "最终章",
                        "action": [
                            "好，请回答问题。",
                            {
                                "type": "choices",
                                "text": "哪一位三圣之巅上任阁主是操作傀儡为主的？",
                                "choices": [
                                    {
                                        "text": "黯祖",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "谶祖",
                                        "action": [
                                            {
                                                "type": "choices",
                                                "text": "仙月是谁的妻子？",
                                                "choices": [
                                                    {
                                                        "text": "黯祖",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "谶祖",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    },
                                                    {
                                                        "text": "剑祖",
                                                        "action": [
                                                            {
                                                                "type": "choices",
                                                                "text": "在魔殿第三十层谶祖操作的第五位傀儡是谁？",
                                                                "choices": [
                                                                    {
                                                                        "text": "安兹乌洛斯",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "洛兰",
                                                                        "action": [
                                                                            {
                                                                                "type": "choices",
                                                                                "text": "罗天与梦是最后以什么结局结尾的？",
                                                                                "choices": [
                                                                                    {
                                                                                        "text": "成功劝说，并一起对抗魔王。",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "成功劝说，并与梦一起退隐。",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "虽然劝说成功，但是梦并没有跟罗天他们去对抗魔王，",
                                                                                        "action": [
                                                                                            "回答错误，请重新选择。"
                                                                                        ]
                                                                                    },
                                                                                    {
                                                                                        "text": "没有劝说成功，反倒是被直接杀害，梦随之跳崖自杀。",
                                                                                        "action": [
                                                                                            {
                                                                                                "type": "choices",
                                                                                                "text": "魔王为什么说他一定要完成造神计划？",
                                                                                                "choices": [
                                                                                                    {
                                                                                                        "text": "毁灭这个世界",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "成为世界最强者",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "主人的任务罢了",
                                                                                                        "action": [
                                                                                                            "回答错误，请重新选择。"
                                                                                                        ]
                                                                                                    },
                                                                                                    {
                                                                                                        "text": "复活自己的爱人",
                                                                                                        "action": [
                                                                                                            {
                                                                                                                "type": "choices",
                                                                                                                "text": "仙琳的亲生母亲是谁的爱人？",
                                                                                                                "choices": [
                                                                                                                    {
                                                                                                                        "text": "魔王",
                                                                                                                        "action": [
                                                                                                                            {
                                                                                                                                "type": "choices",
                                                                                                                                "text": "仙琳的亲生母亲是谁的爱人？",
                                                                                                                                "choices": [
                                                                                                                                    {
                                                                                                                                        "text": "魔王",
                                                                                                                                        "action": [
                                                                                                                                            {
                                                                                                                                                "type": "choices",
                                                                                                                                                "text": "仙琳最后被魔王成功复活了吗？",
                                                                                                                                                "choices": [
                                                                                                                                                    {
                                                                                                                                                        "text": "成功了！",
                                                                                                                                                        "action": [
                                                                                                                                                            "回答错误，请重新选择。"
                                                                                                                                                        ]
                                                                                                                                                    },
                                                                                                                                                    {
                                                                                                                                                        "text": "没有.....",
                                                                                                                                                        "action": [
                                                                                                                                                            "接下来是关于最终章结局的选项，请谨慎选择。",
                                                                                                                                                            {
                                                                                                                                                                "type": "choices",
                                                                                                                                                                "text": "在罗天被梦杀害的时候你是选择理性还是感性应对",
                                                                                                                                                                "choices": [
                                                                                                                                                                    {
                                                                                                                                                                        "text": "感性",
                                                                                                                                                                        "action": [
                                                                                                                                                                            {
                                                                                                                                                                                "type": "choices",
                                                                                                                                                                                "text": "你是否最后原谅魔王呢？",
                                                                                                                                                                                "choices": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "text": "是",
                                                                                                                                                                                        "action": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "setValue",
                                                                                                                                                                                                "name": "flag:求道者",
                                                                                                                                                                                                "value": "1",
                                                                                                                                                                                                "norefresh": true
                                                                                                                                                                                            },
                                                                                                                                                                                            "即将进入最终章！！",
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:book",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:fly",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "hideStatusBar"
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
                                                                                                                                                                                                "type": "changeFloor",
                                                                                                                                                                                                "floorId": "MT449",
                                                                                                                                                                                                "loc": [
                                                                                                                                                                                                    6,
                                                                                                                                                                                                    111
                                                                                                                                                                                                ],
                                                                                                                                                                                                "direction": "down",
                                                                                                                                                                                                "time": 0
                                                                                                                                                                                            }
                                                                                                                                                                                        ]
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "text": "否",
                                                                                                                                                                                        "action": [
                                                                                                                                                                                            "即将进入最终章！！",
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:book",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:fly",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "hideStatusBar"
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
                                                                                                                                                                                                "type": "changeFloor",
                                                                                                                                                                                                "floorId": "MT449",
                                                                                                                                                                                                "loc": [
                                                                                                                                                                                                    6,
                                                                                                                                                                                                    111
                                                                                                                                                                                                ],
                                                                                                                                                                                                "direction": "down",
                                                                                                                                                                                                "time": 0
                                                                                                                                                                                            }
                                                                                                                                                                                        ]
                                                                                                                                                                                    }
                                                                                                                                                                                ]
                                                                                                                                                                            }
                                                                                                                                                                        ]
                                                                                                                                                                    },
                                                                                                                                                                    {
                                                                                                                                                                        "text": "理性",
                                                                                                                                                                        "action": [
                                                                                                                                                                            {
                                                                                                                                                                                "type": "setValue",
                                                                                                                                                                                "name": "flag:梦之泪",
                                                                                                                                                                                "value": "1",
                                                                                                                                                                                "norefresh": true
                                                                                                                                                                            },
                                                                                                                                                                            {
                                                                                                                                                                                "type": "choices",
                                                                                                                                                                                "text": "你是否最后原谅魔王呢？",
                                                                                                                                                                                "choices": [
                                                                                                                                                                                    {
                                                                                                                                                                                        "text": "是",
                                                                                                                                                                                        "action": [
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "setValue",
                                                                                                                                                                                                "name": "flag:求道者",
                                                                                                                                                                                                "value": "1",
                                                                                                                                                                                                "norefresh": true
                                                                                                                                                                                            },
                                                                                                                                                                                            "即将进入最终章！！",
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:book",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:fly",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "hideStatusBar"
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
                                                                                                                                                                                                "type": "changeFloor",
                                                                                                                                                                                                "floorId": "MT449",
                                                                                                                                                                                                "loc": [
                                                                                                                                                                                                    6,
                                                                                                                                                                                                    111
                                                                                                                                                                                                ],
                                                                                                                                                                                                "direction": "down",
                                                                                                                                                                                                "time": 0
                                                                                                                                                                                            }
                                                                                                                                                                                        ]
                                                                                                                                                                                    },
                                                                                                                                                                                    {
                                                                                                                                                                                        "text": "否",
                                                                                                                                                                                        "action": [
                                                                                                                                                                                            "即将进入最终章！！",
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:book",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "addValue",
                                                                                                                                                                                                "name": "item:fly",
                                                                                                                                                                                                "value": "1"
                                                                                                                                                                                            },
                                                                                                                                                                                            {
                                                                                                                                                                                                "type": "hideStatusBar"
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
                                                                                                                                                                                                "type": "changeFloor",
                                                                                                                                                                                                "floorId": "MT449",
                                                                                                                                                                                                "loc": [
                                                                                                                                                                                                    6,
                                                                                                                                                                                                    111
                                                                                                                                                                                                ],
                                                                                                                                                                                                "direction": "down",
                                                                                                                                                                                                "time": 0
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
                                                                                                                                    {
                                                                                                                                        "text": "小粽",
                                                                                                                                        "action": [
                                                                                                                                            "回答错误，请重新选择。"
                                                                                                                                        ]
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "text": "仙梦",
                                                                                                                                        "action": [
                                                                                                                                            "回答错误，请重新选择。"
                                                                                                                                        ]
                                                                                                                                    },
                                                                                                                                    {
                                                                                                                                        "text": "初代勇者",
                                                                                                                                        "action": [
                                                                                                                                            "回答错误，请重新选择。"
                                                                                                                                        ]
                                                                                                                                    }
                                                                                                                                ]
                                                                                                                            }
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "小粽",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "仙梦",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
                                                                                                                        ]
                                                                                                                    },
                                                                                                                    {
                                                                                                                        "text": "初代勇者",
                                                                                                                        "action": [
                                                                                                                            "回答错误，请重新选择。"
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
                                                                    {
                                                                        "text": "星天",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    },
                                                                    {
                                                                        "text": "泰帝",
                                                                        "action": [
                                                                            "回答错误，请重新选择。"
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        "text": "梦",
                                                        "action": [
                                                            "回答错误，请重新选择。"
                                                        ]
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        "text": "剑祖",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    },
                                    {
                                        "text": "梦",
                                        "action": [
                                            "回答错误，请重新选择。"
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,11": [
            {
                "type": "changeFloor",
                "floorId": "MT573",
                "loc": [
                    6,
                    12
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "12,8": {
            "floorId": "MT1",
            "loc": [
                1,
                6
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "cannotMove": {},
    "bgmap": [
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10016,10017,10018,10016,10017,10018,10016,10000,10000,10016,10018,10000],
    [10000,10016,10017,10018,10016,10017,10018,10016,10000,10000,10016,10018,10000],
    [10000,10024,10025,10026,10025,10025,10025,10024,10025,10026,10024,10026,10000],
    [10000,10000,10000,10000,10000,10035,10036,10037,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000],
    [10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000,10000]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,10006,10007,  0,  0,  0],
    [  0,  0,10163,10111,  0,  0,  0,  0,10014,10015,  0,  0,  0],
    [  0,10115,10107,10071,  0,10104,10105,10104,10172,10171,  0,10095,  0],
    [  0,10114,10114,10079,  0,  0,  0,  0,10180,10179,  0,10103,  0],
    [  0,  0,  0,10087,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,10110,  0,10055,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,10095,  0,  0,  0,  0,  0,  0,  0,  0,  0,10095,  0],
    [  0,10103,  0,  0,  0,  0,  0,  0,  0,  0,  0,10103,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "width": 13,
    "height": 13,
    "autoEvent": {},
    "cannotMoveDirectly": true,
    "bg2map": [

],
    "fg2map": [

]
}