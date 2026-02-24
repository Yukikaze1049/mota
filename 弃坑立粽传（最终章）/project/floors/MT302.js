main.floors.MT302=
{
    "floorId": "MT302",
    "title": "永生之巅",
    "name": "永生之巅",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "004-CloudySky01.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "ground",
    "bgm": "battle18.mp3",
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "holy2.mp3",
            "keep": true
        },
        "\t[圣羽洛斯,E510]\b[this,6,6]................",
        "\t[圣羽洛斯,E510]\b[this,6,6]哈哈哈哈哈哈哈哈！！不错嘛！！！\n没想到你这么快就来了呀！！！",
        "\t[圣羽洛斯,E510]\b[this,6,6]不愧是神之勇者呢！",
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
        "\t[圣羽洛斯,E510]\b[this,6,6]自我介绍一下，本座名为圣羽洛斯，\n不过这是你最后一次听到这个名字了！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]！！等等！！这个背影.............！你...........是.......",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        {
            "type": "vibrate",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        {
            "type": "moveHero",
            "time": 100,
            "steps": [
                "backward"
            ]
        },
        "\t[小粽,hero]\b[hero]你！！你是.................！！",
        {
            "type": "hideStatusBar"
        },
        {
            "type": "changeFloor",
            "floorId": ":next",
            "loc": [
                111,
                11
            ],
            "direction": "up",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
            {
                "type": "playBgm",
                "name": "holy2.mp3",
                "keep": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[小粽,hero]\b[hero]你就是圣羽洛斯？！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]怎么，见到我很意外吗？",
            "\t[圣羽洛斯,E509]\b[this,6,6]的确，对于你们这些蝼蚁来说，\n我的确算是个非常伟大的存在",
            "\t[圣羽洛斯,E509]\b[this,6,6]不过你有必要这么吃惊吗？哦呵呵呵呵！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]不过，说实话你的确有点水平，\n居然这么快就击败了我那些废物呢，\n并且走到了我的面前。",
            "\t[圣羽洛斯,E509]\b[this,6,6]而且居然战胜了那个叫堇的第三代试验体呢！\n这种资质的确罕见。",
            "\t[小粽,hero]\b[hero]...................",
            "\t[圣羽洛斯,E509]\b[this,6,6]啧啧啧，我差点忘了，\n你的真实身份并不是神之勇者，\n而且魔王当年丢弃的第二代试验体！",
            "\t[圣羽洛斯,E509]\b[this,6,6]不过一个废弃品居然担任了神之勇者这个身份，真是有趣呀！",
            "\t[小粽,hero]\b[hero].....你是说我与堇都是被你所创造的？",
            "\t[圣羽洛斯,E509]\b[this,6,6]呵呵呵.....你们并不是我创造的 ，\n是魔王那个家伙创造你们的，我只是做个辅助工作而已。",
            "\t[圣羽洛斯,E509]\b[this,6,6]我们创造你们是因为——为了造神计划！",
            "\t[圣羽洛斯,E509]\b[this,6,6]不过很可惜，除了第一代试验体，你们都是些失败品！",
            "\t[圣羽洛斯,E509]\b[this,6,6]不过.....那是对于造神计划而言的！",
            "\t[圣羽洛斯,E509]\b[hero]对于我来说，我有一个自己设计的计划！\n而完成这个计划最核心的就是你！",
            "\t[圣羽洛斯,E509]\b[this,6,6]我利用你那神之勇者的力量！\n作为计划的垫脚石！！\n然后再凭借我这些年积攒的资本，\n在魔王完成造神计划之前一举推翻！",
            "\t[圣羽洛斯,E509]\b[this,6,6]让我一统整座魔塔！\n并且让整个世界都成为我的囊中之物！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]或许这对于你来说很不公平，\n但这就是你的命运！被创造的使命！！",
            {
                "type": "vibrate",
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            "\t[小粽,hero]\b[hero]你说完了吗？",
            "\t[圣羽洛斯,E509]\b[this,6,6]哦？",
            "\t[小粽,hero]\b[hero]不知道你还记不记得一个被你们称为神之祭品的女人?",
            "\t[圣羽洛斯,E509]\b[this,6,6]神之祭品？\n那个八年前本座就完成收集的东西吗？\n你提这个干什么。",
            "\t[小粽,hero]\b[hero]看来........的确是你\r[red]杀的！！！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]哦？看你这杀意，\n这个神之祭品居然跟你有关系呢！",
            "\t[小粽,hero]\b[hero]是！的确有关系！！因为......",
            {
                "type": "playBgm",
                "name": "holy3.mp3",
                "keep": true
            },
            "\t[小粽,hero]\b[hero]\r[red]她就是抚养我长大的母亲！！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            "\t[圣羽洛斯,E509]\b[this,6,6]哦？...................",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[圣羽洛斯,E509]\b[this,6,6]你就是当年那个小鬼？？！",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[圣羽洛斯,E509]\b[this,6,6]....有趣...非常有趣呢！",
            "\t[圣羽洛斯,E509]\b[this,6,6]没想到第二代试验体不仅是神之勇者，\n更是神之祭品的遗孤呢！！这一切.....。",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]真是太有趣了呢！",
            "\t[小粽,hero]\b[hero]圣羽洛斯！你现在有什么遗言吗！\n要不然你就连说遗言的资格都没有了！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]呵呵呵呵呵！！哈哈哈哈哈哈哈哈哈哈！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]时代真的变了呀.....\n一个乳臭未干的小鬼居然都敢对我蹬鼻子上脸了呢！",
            "\t[圣羽洛斯,E509]\b[this,6,6]虽然我已经忘记了当年具体发生了什么，\n但是我还依稀的记得.........。",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]你母亲.....真的很不错呦！",
            "\t[小粽,hero]\b[hero]\r[red]圣羽洛斯！！你找死！！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]哈哈哈哈哈哈哈哈！！！\n来吧！就让我看看你究竟能做到哪一步呢！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]啊哈哈哈哈哈哈哈哈！！！\n哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！",
            {
                "type": "setBlock",
                "number": "E509",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 0
            },
            "【警告】接下来进入特殊boss战模式，圣羽洛斯必须连续击败八次才能战胜。",
            "每次被击败，圣羽洛斯都会更改自身属性（此灵感来自于魔雨剑（忆蝶芯）的大作——哈斯塔/斯莉英雄传）",
            "那么，祝你好运！"
        ],
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(flag:boss303F===8)",
                    "true": [
                        "膜拜无敌桦佬！"
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:boss303F===7)",
                            "true": [
                                "老魔天下第一！"
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:boss303F===6)",
                                    "true": [
                                        {
                                            "type": "battle",
                                            "id": "E509"
                                        },
                                        {
                                            "type": "setValue",
                                            "name": "flag:boss303F",
                                            "value": "7"
                                        },
                                        {
                                            "type": "pauseBgm"
                                        },
                                        {
                                            "type": "playBgm",
                                            "name": "GG2.mp3",
                                            "keep": true
                                        },
                                        "\t[圣羽洛斯,E509]\b[this,6,6]嗯？明明你早已伤痕累累，居然还能做到这一步！",
                                        "\t[小粽,hero]\b[hero]呼.....呼...........,圣羽洛斯！你知道我为什么还能够站在这里吗？！！",
                                        "\t[圣羽洛斯,E509]\b[this,6,6]哦？是什么呢。",
                                        "\t[小粽,hero]\b[hero]那是因为！我这条命！不仅仅属于我一个人的！",
                                        "\t[小粽,hero]\b[hero]因为我！承载着诸多人的希望！！",
                                        {
                                            "type": "setEnemy",
                                            "id": "E509",
                                            "name": "hp",
                                            "value": "650000000000000"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E509",
                                            "name": "atk",
                                            "value": "175000000000000"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E509",
                                            "name": "def",
                                            "value": "50000000000000"
                                        },
                                        {
                                            "type": "changeFloor",
                                            "floorId": "MT307",
                                            "loc": [
                                                6,
                                                7
                                            ],
                                            "direction": "down",
                                            "time": 500
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:boss303F===5)",
                                            "true": [
                                                {
                                                    "type": "battle",
                                                    "id": "E509"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:boss303F",
                                                    "value": "6"
                                                },
                                                "\t[圣羽洛斯,E509]\b[this,6,6]好小子！居然能跟我鏖战这么长时间！\n看来你的价值比我想象的还要大呢！不过.....",
                                                "\t[圣羽洛斯,E509]\b[this,6,6]你所激发的潜能越大，\n对于我的价值也就越高呀！！哈哈哈哈哈哈哈哈！！",
                                                "\t[小粽,hero]\b[hero]圣...羽...洛斯！你不要太高估你自己了！！",
                                                "\t[圣羽洛斯,E509]\b[this,6,6]哦？是吗？！我到要看看你究竟有什么底牌！！",
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E509",
                                                    "name": "hp",
                                                    "value": "700000000000000"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E509",
                                                    "name": "atk",
                                                    "value": "135000000000000"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E509",
                                                    "name": "def",
                                                    "value": "40000000000000"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:boss303F===4)",
                                                    "true": [
                                                        {
                                                            "type": "battle",
                                                            "id": "E509"
                                                        },
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:boss303F",
                                                            "value": "5"
                                                        },
                                                        "\t[圣羽洛斯,E509]\b[this,6,6]意志很坚定！不过你的身体是否能够御驾其意志呢？！",
                                                        "\t[小粽,hero]\b[hero]给我........闭嘴！！我一定.............要杀了你！！！",
                                                        "\t[圣羽洛斯,E509]\b[this,6,6]哈哈哈哈哈哈哈哈！！来吧！！只要你能做到的话！",
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E509",
                                                            "name": "hp",
                                                            "value": "350000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E509",
                                                            "name": "atk",
                                                            "value": "250000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E509",
                                                            "name": "def",
                                                            "value": "10000000000000"
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss303F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E509"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss303F",
                                                                    "value": "4"
                                                                },
                                                                "\t[圣羽洛斯,E509]\b[this,6,6]哦？看来我得重新评价下你的水平了呢！\n居然能跟我耗这么久！",
                                                                "\t[小粽,hero]\b[hero]呼.......呼.....圣羽洛斯！！我一定要杀了你！！",
                                                                "\t[小粽,hero]\b[hero]为所有被你陷害的人们报仇！！！",
                                                                "\t[圣羽洛斯,E509]\b[this,6,6]就凭你？还不够！！",
                                                                "\t[圣羽洛斯,E509]\b[this,6,6]死来！！！",
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E509",
                                                                    "name": "special",
                                                                    "value": "[29]"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E509",
                                                                    "name": "hp",
                                                                    "value": "3000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E509",
                                                                    "name": "atk",
                                                                    "value": "100000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E509",
                                                                    "name": "def",
                                                                    "value": "0"
                                                                },
                                                                {
                                                                    "type": "update"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss303F===2)",
                                                                    "true": [
                                                                        "\t[圣羽洛斯,E509]\b[this,6,6]我可以利用科技力量瞬间恢复自己的伤势，\n而你却只能被我慢慢压榨而死！",
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E509"
                                                                        },
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss303F",
                                                                            "value": "3"
                                                                        },
                                                                        "\t[圣羽洛斯,E509]\b[this,6,6]哦？看来你挺顽强呢，\n就像那肮脏的蟑螂一样顽强！！",
                                                                        "\t[小粽,hero]\b[hero]不要以为你一定就赢了！！！",
                                                                        "\t[圣羽洛斯,E509]\b[this,6,6]很好！我会粉碎掉你那虚无缥缈的希望的！！",
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E509",
                                                                            "name": "special",
                                                                            "value": "[29,11]"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E509",
                                                                            "name": "hp",
                                                                            "value": "300000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E509",
                                                                            "name": "atk",
                                                                            "value": "150000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E509",
                                                                            "name": "def",
                                                                            "value": "10000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss303F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E509"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss303F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[圣羽洛斯,E509]\b[this,6,6]没用的！没用的！！我的科学底蕴是你无法想象的！！",
                                                                                "\t[圣羽洛斯,E509]\b[this,6,6]快点发挥你那最后的价值吧！！哈哈哈哈哈哈哈哈！！！！",
                                                                                "\t[小粽,hero]\b[hero]我会让你永远闭上你那丑恶的嘴脸！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "hp",
                                                                                    "value": "550000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "atk",
                                                                                    "value": "200000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "def",
                                                                                    "value": "25000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                "\t[圣羽洛斯,E509]\b[this,6,6]哈哈哈哈哈哈哈哈！！！来吧！！发挥你最后的价值吧！",
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E509"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss303F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[圣羽洛斯,E509]\b[this,6,6]哈哈哈哈哈哈哈哈！！不错嘛！还有点水平呢！！",
                                                                                "\t[圣羽洛斯,E509]\b[this,6,6]不过就这点水平恐怕是不能为你母亲报仇了呢！！",
                                                                                "\t[小粽,hero]\b[hero]圣！羽！洛！斯！！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "hp",
                                                                                    "value": "650000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "atk",
                                                                                    "value": "175000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E509",
                                                                                    "name": "def",
                                                                                    "value": "32000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
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
        "12,12": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "autoSave"
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
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "remove": true
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[圣羽洛斯,N736]\b[this,6,2]啧啧啧，真是可惜呀，要不是他太不可控了，\n不然我打算用洗脑的方式来解决掉他了呢！",
            "\t[圣羽洛斯,N736]\b[this,6,2]我该准备的都准备完了，是时候该............。",
            {
                "type": "playBgm",
                "name": "disorder2.mp3",
                "keep": true
            },
            {
                "type": "vibrate",
                "time": 500
            },
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    2
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down",
                    "down",
                    "down"
                ]
            },
            "\t[圣羽洛斯,N733]\b[this,6,5]嗯？怎么回事。",
            {
                "type": "changeFloor",
                "loc": [
                    6,
                    14
                ],
                "direction": "up",
                "time": 0
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    6
                ],
                "time": 500
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "attack8",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "backward",
                    "backward"
                ]
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "backward",
                    "backward"
                ]
            },
            "\t[圣羽洛斯,N733]\b[this,6,3]你是..............小粽？!",
            "\t[小粽,hero]\b[hero]这场决斗已经进入加时赛了！圣羽洛斯！！",
            "\t[圣羽洛斯,N733]\b[this,6,3]怎么回事？你怎么可能还活着！\n明明你的身躯早被那剧毒给侵蚀掉了！！！",
            "\t[小粽,hero]\b[hero]有个人之前给了我一张可以能够生死人,肉白骨的道具，\n不然我也不可能还活着！",
            "\t[圣羽洛斯,N733]\b[this,6,3]....................",
            "\t[圣羽洛斯,N733]\b[this,6,3]虽然不知道你是怎么做到的，但是你觉得就凭你能够击败我吗？！",
            "\t[圣羽洛斯,N733]\b[this,6,3]寻常武修者是不可能战胜科技力量的！",
            "\t[小粽,hero]\b[hero]是吗？",
            {
                "type": "moveHero",
                "time": 10,
                "steps": [
                    "up",
                    "up",
                    "up",
                    "up"
                ]
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    3
                ]
            },
            "\t[圣羽洛斯,N733]\b[this,6,3]好快！",
            {
                "type": "animate",
                "name": "attack8",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "backward"
                ]
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "backward",
                    "backward",
                    "backward"
                ]
            },
            "\t[小粽,hero]\b[hero]这样如何？",
            "\t[圣羽洛斯,N733]\b[this,6,2](这小子....实力比之前更强悍了！）",
            "\t[圣羽洛斯,N733]\b[this,6,2]的确了不起！能在这么短的时间内有如此作为！",
            "\t[圣羽洛斯,N733]\b[this,6,2]不过你真当我没有底牌了吗！",
            "\t[小粽,hero]\b[hero]那看看到底是谁能够笑到最后呢！",
            "\t[星天]前面应该就是永生之巅的尽头了吧！",
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "animate",
                "name": "unexpected2",
                "loc": "hero",
                "async": true
            },
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "animate",
                "name": "unexpected2",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    7
                ],
                "direction": "down"
            },
            {
                "type": "setBlock",
                "number": "N592",
                "loc": [
                    [
                        6,
                        12
                    ]
                ],
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    6,
                    12
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "up",
                    "left",
                    "up",
                    "up",
                    "up"
                ]
            },
            "\t[小粽,hero]\b[hero]星天前辈！你终于来了！她们没事吧！！",
            "\t[星天,N592]\b[this,5,8]放心吧，她们没事，不过前面那个人好像是...........",
            {
                "type": "changePos",
                "loc": [
                    6,
                    7
                ],
                "direction": "up"
            },
            "\t[小粽,hero]\b[hero]他就是三圣之巅的阁主——圣羽洛斯！",
            "\t[星天,N592]\b[this,5,8]哦！居然是他！！",
            "\t[圣羽洛斯,N733]\b[this,6,2]...................你..............",
            "\t[小粽,hero]\b[hero]星天前辈！这个男人非常难缠，所以我先打头阵，您在一旁辅助我！",
            "\t[星天,N592]\b[hero]好！明白了！！",
            "\t[小粽,hero]\b[hero]嗯！圣羽洛斯！准备受！！............",
            {
                "type": "pauseBgm"
            },
            {
                "type": "move",
                "loc": [
                    5,
                    8
                ],
                "time": 10,
                "keep": true,
                "steps": [
                    "right"
                ]
            },
            {
                "type": "animate",
                "name": "attack9",
                "loc": "hero",
                "async": true
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
                "times": 1,
                "async": true
            },
            {
                "type": "playSound",
                "name": "Attack09.wav"
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "playSound",
                "name": "Blow4.ogg"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero",
                "async": true
            },
            {
                "type": "playBgm",
                "name": "Eternity1.mp3",
                "keep": true
            },
            "然而就在这一刻，星天的利剑直接刺破了小粽的胸膛！",
            "\t[小粽,hero]\b[hero]为什么！星天前辈！你为什么要这么做！！",
            "\t[星天,N592]\b[this,6,8]很遗憾,小粽,勇者游戏结束了！",
            "\t[小粽,hero]\b[hero]星天前辈！你究竟在说些什么？！",
            "\t[星天,N592]\b[this,6,8]反正你马上就要落入黄泉了，就告诉你这一切的真相吧！",
            "\t[君无天,N592]\b[this,6,8]我的真实名字名为君无天，真实身份是三圣之巅之君阁主！\n同时也是三圣之巅的最强阁主！！",
            {
                "type": "setEnemy",
                "id": "E509",
                "name": "hp",
                "value": "600000000000000"
            },
            {
                "type": "setEnemy",
                "id": "E509",
                "name": "atk",
                "value": "150000000000000"
            },
            {
                "type": "setEnemy",
                "id": "E509",
                "name": "def",
                "value": "30000000000000"
            },
            {
                "type": "setBlock",
                "number": "E509",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "E512",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "time": 0
            },
            {
                "type": "callBook"
            },
            {
                "type": "setBlock",
                "number": "N592",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "time": 0
            },
            "\t[圣羽洛斯,N733]\b[this,6,2]辛苦了，君阁主！",
            "\t[小粽,hero]\b[hero]这......这........",
            "\t[君无天,N592]\b[this,6,8]我知道这个现状对于你来说是无法接受的，但现实就是如此！",
            "\t[小粽,hero]\b[hero]不可能！不可能！！",
            "\t[小粽,hero]\b[hero]星天前辈！你一定是在开玩笑吧！！这绝对不可能是真的！！！",
            "\t[小粽,hero]\b[hero]不是说你是星钰的父亲吗？你不是魔塔最高家族星家的人吗？！",
            "\t[小粽,hero]\b[hero]而为什么你却如此.........!",
            "\t[君无天,N592]\b[this,6,8]是吗？你真的认为我说的都是真的吗？！",
            "\t[君无天,N592]\b[this,6,8]你所看到的真的就是现实吗？而不是镜花水月吗？！",
            "\t[君无天,N592]\b[this,6,8]罢了，我直接告诉你这一切的真相吧！",
            "\t[君无天,N592]\b[this,6,8]其实我并不是星钰的亲生父亲！",
            "\t[小粽,hero]\b[hero]什.......么.....?",
            "\t[君无天,N592]\b[this,6,8]其实，当年...她的父亲是被我\r[red]亲手抹杀！",
            "\t[君无天,N592]\b[this,6,8]而整个星家也是\r[red]我杀的！！",
            "\t[圣羽洛斯,N733]\b[this,6,2]没错！魔塔中人只知道是圣羽洛斯我去毁灭的星家，\n但真正去毁灭星家的其实是君阁主哟！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            "\t[小粽,hero]\b[hero]这！怎么会这样！这.....................!",
            "\t[君无天,N592]\b[this,6,8]怎么样！是不是感到十分意外呀！！",
            "\t[君无天,N592]\b[this,6,8]哦，告诉你一个好消息:",
            "\t[君无天,N592]\b[this,6,8]那两个分别叫星钰和堇的小丫头已经在黄泉路上等你了。",
            "\t[君无天,N592]\b[this,6,8]你看，这样你未来在黄泉路上是不会孤单的哟！",
            "\t[君无天,N592]\b[this,6,8]哦，我还忘了，还有你那小女朋友仙琳早就在黄泉路上等你了呢！",
            "\t[君无天,N592]\b[this,6,8]或许你们可以在地狱里面当同命鸳鸯呢！",
            "\t[圣羽洛斯,N733]\b[this,6,2]对呀！你看看，这样的结局不是很完美吗！",
            "\t[小粽,hero]\b[hero]\r[red]君！无！天！！",
            {
                "type": "changePos",
                "loc": [
                    6,
                    7
                ],
                "direction": "down"
            },
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 100,
                "keep": true,
                "steps": [
                    "backward",
                    "backward"
                ]
            },
            {
                "type": "moveHero",
                "time": 10,
                "steps": [
                    "down",
                    "down"
                ]
            },
            "\t[小粽,hero]\b[hero]\r[red]我要杀了你！",
            "\t[君无天,N592]\b[this,6,10]哼！",
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 1,
                "keep": true,
                "async": true,
                "steps": [
                    "left",
                    "up"
                ]
            },
            {
                "type": "setBlock",
                "number": "E512",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1
            },
            {
                "type": "playSound",
                "name": "050-Explosion03.ogg"
            },
            {
                "type": "animate",
                "name": "attack11",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    9
                ],
                "direction": "left"
            },
            {
                "type": "moveHero",
                "time": 10,
                "steps": [
                    "backward",
                    "backward",
                    "backward",
                    "backward",
                    "backward"
                ]
            },
            {
                "type": "vibrate",
                "time": 500
            },
            "\t[小粽,hero]\b[hero]\r[red]噗！",
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
                "type": "setBlock",
                "number": "N591",
                "loc": [
                    [
                        5,
                        9
                    ]
                ],
                "time": 0,
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    9
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "right",
                    "right"
                ]
            },
            {
                "type": "setBlock",
                "number": "E602",
                "loc": [
                    [
                        7,
                        9
                    ]
                ],
                "time": 0
            },
            "\t[君无天,N591]\b[this,7,9]萤烛之火也敢与日月争辉？！",
            "\t[君无天,N591]\b[this,7,9]就这点实力还敢在本座面前大放厥词？？！！",
            "\t[小粽,hero]\b[hero]\r[red]你！我要杀了你！！",
            {
                "type": "moveHero",
                "time": 10,
                "steps": [
                    "forward",
                    "forward",
                    "forward"
                ]
            },
            "\t[君无天,N591]\b[this,7,9]无趣！",
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1
            },
            {
                "type": "playSound",
                "name": "050-Explosion03.ogg"
            },
            {
                "type": "animate",
                "name": "attack11",
                "loc": "hero"
            },
            {
                "type": "moveHero",
                "time": 10,
                "steps": [
                    "backward",
                    "backward",
                    "backward"
                ]
            },
            {
                "type": "vibrate",
                "time": 500
            },
            "\t[小粽,hero]\b[hero]\r[red]噗！",
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
            "\t[君无天,N591]\b[this,7,9]我不想再浪费时间了,所以....",
            "\t[君无天,N591]\b[this,7,9]\r[red]死吧！",
            "\t[小粽,hero]\b[hero]我...就算在地狱化为了厉鬼！也不会放过你的！",
            "\t[君无天,N591]\b[this,7,9]就算你成为了鬼王，在本座面前也形同虚设！",
            "\t[君无天,N591]\b[this,7,9]\r[red]永别了！小粽！！安详的死去吧！！！",
            {
                "type": "setCurtain",
                "color": [
                    255,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "setBlock",
                "number": "X130112",
                "loc": [
                    [
                        11,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "X130114",
                "loc": [
                    [
                        11,
                        10
                    ]
                ],
                "time": 0
            },
            {
                "type": "playSound",
                "name": "Attack09.wav"
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "playSound",
                "name": "Blow4.ogg"
            },
            {
                "type": "sleep",
                "time": 500
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
                "type": "pauseBgm"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "insert",
                "loc": [
                    0,
                    12
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "12,0": [
            {
                "type": "playBgm",
                "name": "holy3.mp3",
                "keep": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        9
                    ]
                ],
                "floorId": "MT318",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        9
                    ]
                ],
                "floorId": "MT318",
                "time": 0
            },
            "\t[小粽,hero]\b[hero]也正是因为我身上拥有我所珍视之人所寄托给我的希望\n——\r[red]我才走到了这里！！！",
            "\t[小粽,hero]\b[hero]\r[red]所以！伏诛吧！！圣！羽！洛！斯！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]哦？打算孤注一掷了吗！",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]那我也就破例认真一次吧！！",
            "\t[小粽,hero]\b[hero]\r[red]天破苍穹！！",
            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]外物不灭！！",
            {
                "type": "animate",
                "name": "attack17",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "setCurtain",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "keep": true,
                "async": true
            },
            {
                "type": "playSound",
                "name": "VXIce8.ogg"
            },
            {
                "type": "sleep",
                "time": 150
            },
            {
                "type": "playSound",
                "name": "VXFire4.ogg"
            },
            {
                "type": "sleep",
                "time": 90
            },
            {
                "type": "playSound",
                "name": "VXBreath.ogg"
            },
            {
                "type": "sleep",
                "time": 90
            },
            {
                "type": "playSound",
                "name": "spark1.wav"
            },
            {
                "type": "battle",
                "id": "E509"
            },
            "注意：接下来就是纯剧情了（非常长）,如果要刷榜的话可以选择跳过",
            {
                "type": "choices",
                "text": "是否跳过剧情？",
                "choices": [
                    {
                        "text": "是",
                        "action": [
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
                                "type": "insert",
                                "loc": [
                                    6,
                                    0
                                ]
                            }
                        ]
                    },
                    {
                        "text": "否",
                        "action": [
                            {
                                "type": "setBlock",
                                "number": "N733",
                                "loc": [
                                    [
                                        6,
                                        6
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "move",
                                "loc": [
                                    6,
                                    6
                                ],
                                "time": 500,
                                "keep": true,
                                "async": true,
                                "steps": [
                                    "backward",
                                    "backward",
                                    "backward"
                                ]
                            },
                            {
                                "type": "moveHero",
                                "time": 500,
                                "steps": [
                                    "backward",
                                    "backward",
                                    "backward"
                                ]
                            },
                            {
                                "type": "pauseBgm"
                            },
                            {
                                "type": "playBgm",
                                "name": "GG1.mp3",
                                "keep": true
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
                            },
                            "\t[小粽,hero]\b[hero]............................",
                            "\t[圣羽洛斯,E509]\b[this,6,6]............................",
                            {
                                "type": "sleep",
                                "time": 1000
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
                            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]噗！",
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]不可能！不可能！！你怎么可能击败我？！！\n我的科技是无敌的！！！！",
                            "\t[圣羽洛斯,E509]\b[this,6,6]\r[red]一个被废弃的试验体怎么可能战胜我那积攒数多年的科技力量？！！！",
                            "\t[小粽,hero]\b[hero]呼.........呼.........看来......你那以你为傲的科技力量不足以击杀我呢！",
                            "\t[圣羽洛斯,E509]\b[this,6,6]你..........你！！",
                            "\t[小粽,hero]\b[hero]放心！我不会像你那样变态！！\n只要一剑！你就会死！！",
                            "\t[圣羽洛斯,E509]\b[this,6,6]呵呵呵...............这次..就算你赢吧！",
                            {
                                "type": "setCurtain",
                                "color": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "time": 500,
                                "keep": true
                            },
                            {
                                "type": "playSound",
                                "name": "Attack09.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 700
                            },
                            {
                                "type": "playSound",
                                "name": "Blow4.ogg"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "setBlock",
                                "number": "X130112",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
                            },
                            "\t[小粽,hero]\b[hero].............................",
                            "\t[小粽,hero]\b[hero].................................................",
                            "\t[小粽,hero]\b[hero]母亲.....................小粽我..........终于替你报仇了！",
                            "\t[小粽,hero]\b[hero]........终于报仇了！终于报仇了！！...................呜呜呜呜..........",
                            "\t[小粽,hero]\b[hero]母亲,仙琳,堇,星钰,星天前辈,你们知道吗！我终于杀死了这个罪恶滔天的禽兽啊！！",
                            "\t[小粽,hero]\b[hero]只是.........我无法让母亲和仙琳你们复活呀！呜呜呜呜..............",
                            {
                                "type": "pauseBgm"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playBgm",
                                "name": "holy2.mp3",
                                "keep": true
                            },
                            {
                                "type": "playSound",
                                "name": "good.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "good.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playSound",
                                "name": "good.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            "\t[？？？]真是感人的故事呀！不过为了完成我那最终试验，你还是.....",
                            "\t[？？？]\r[red]牺牲吧！",
                            {
                                "type": "playSound",
                                "name": "cgefc01.wav"
                            },
                            {
                                "type": "animate",
                                "name": "unexpected1",
                                "loc": "hero"
                            },
                            "\t[小粽,hero]\b[hero]嗯？这个声音，不可能！！",
                            {
                                "type": "playSound",
                                "name": "VXFire4.ogg"
                            },
                            {
                                "type": "animate",
                                "name": "fire1",
                                "loc": [
                                    6,
                                    3
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N733",
                                "loc": [
                                    [
                                        6,
                                        3
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "sleep",
                                "time": 200
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
                            {
                                "type": "moveHero",
                                "time": 100,
                                "steps": [
                                    "backward"
                                ]
                            },
                            "\t[小粽,hero]\b[hero]不....！不可能！！我明明已经刺穿你的心脏了！！",
                            "\t[小粽,hero]\b[hero]你怎么可能还活着！！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]你知道吗？我曾经做过一个试验——是关于恐惧这种情感的试验",
                            "\t[圣羽洛斯,E509]\b[this,6,3]一般人们都会对未知的事物感到最为恐惧,然而事实上最为恐惧的不是未知！不是静态的恐惧！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]而是人们从大悲到大喜,再从大喜到大悲的一种动态恐惧感！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]而这种恐惧感我愿意称它为——\r[red]终极恐惧！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]而现在我从你的眼中看到了那份恐惧感呢！",
                            "\t[小粽,hero]\b[hero].....呼！虽然不知道你为什么还活着！但是就算你能死而复生,我也能再次将你斩杀！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]哦？是吗，你难道没感觉你体内有什么异样吗？！",
                            {
                                "type": "hideStatusBar"
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
                            "\t[小粽,hero]\b[hero]噗！！",
                            "\t[小粽,hero]\b[hero]是毒！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]没错，就是毒，你是不是很想知道这个毒是什么时候侵入你的身体呢？",
                            "\t[圣羽洛斯,E509]\b[this,6,3]这个毒是在你击溃我身体之前所施展的哟！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]怎么样？这个毒感觉是不是很不错呢！",
                            "\t[小粽,hero]\b[hero]你！！",
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
                            "\t[小粽,hero]\b[hero]噗！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]此毒名为：断魄散，被此毒侵入者会逐渐丧失意志和修为，直至死亡！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]能被此毒杀死，也算是你的福气了！",
                            "\t[小粽,hero]\b[hero]我.....我要！",
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
                            "\t[小粽,hero]\b[hero]噗！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]你想报仇吗？",
                            "\t[小粽,hero]\b[hero]杀了你！",
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
                            "\t[小粽,hero]\b[hero]噗！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]啧啧啧，你现在对于我来说毫无威胁了呢，嘴居然还是那么硬。",
                            "\t[圣羽洛斯,E509]\b[this,6,3]乖乖当个工具人不好吗？毕竟.....",
                            "\t[圣羽洛斯,E509]\b[this,6,3]\r[red]这也是你的命运呀！",
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
                            "\t[小粽,hero]\b[hero]咳咳咳！！你！你！我要.........",
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
                            "\t[小粽,hero]\b[hero]咳咳咳咳咳咳！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]嘛，看你这么痛苦，我都不好意思对你下手了呢！你说我要不要放过你呢？",
                            {
                                "type": "animate",
                                "name": "attack9",
                                "loc": "hero",
                                "async": true
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
                                "times": 1,
                                "async": true
                            },
                            {
                                "type": "playSound",
                                "name": "Attack09.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 700
                            },
                            {
                                "type": "playSound",
                                "name": "Blow4.ogg"
                            },
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "setCurtain",
                                "time": 500
                            },
                            "\t[小粽,hero]\b[hero]噗！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！\n怎么会呢！！我可不是大善人呀！！",
                            "\t[圣羽洛斯,E509]\b[this,6,3]不过我得感谢你为我完成了一次精彩的演出和试验呢，作为奖励.....就请你.....",
                            "\t[圣羽洛斯,E509]\b[this,6,3]\r[red]去死吧！",
                            {
                                "type": "setCurtain",
                                "color": [
                                    255,
                                    0,
                                    0,
                                    1
                                ],
                                "time": 500,
                                "keep": true
                            },
                            {
                                "type": "setBlock",
                                "number": "X130112",
                                "loc": [
                                    [
                                        6,
                                        11
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "changePos",
                                "loc": [
                                    111,
                                    11
                                ]
                            },
                            {
                                "type": "playSound",
                                "name": "Attack09.wav"
                            },
                            {
                                "type": "sleep",
                                "time": 700
                            },
                            {
                                "type": "playSound",
                                "name": "Blow4.ogg"
                            },
                            {
                                "type": "sleep",
                                "time": 500
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
                                "type": "setBlock",
                                "number": "N736",
                                "loc": [
                                    [
                                        6,
                                        2
                                    ]
                                ],
                                "time": 0
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT309",
                                "loc": [
                                    61,
                                    6
                                ],
                                "time": 0
                            },
                            {
                                "type": "waitAsync"
                            }
                        ]
                    }
                ]
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,12": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "E1062",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "time": 0
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[圣羽洛斯,E1062]\b[this,9,9]没想到你居然没有销毁他的尸体呢！",
            "\t[君无天,E602]\b[this,7,9]这种货色，没有资格让我亲自销毁尸体！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]嘛，的确呢，毕竟君阁主可是魔塔剑之巅峰呢，\n怎么会脏自己的手去杀一个小鬼的尸体呢！",
            "\t[君无天,E602]\b[this,7,9]毫无意义的奉承。",
            "\t[君无天,E602]\b[this,7,9]我没有销毁他的尸体，你也应该知道你要干什么吧！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]嘿嘿嘿，那么我先感谢一下君阁主了，等我试验成功，\n到时好处少不了君阁主你呢！",
            "\t[君无天,E602]\b[this,7,9]......................",
            {
                "type": "setBlock",
                "number": "E1063",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "time": 0
            },
            "\t[圣羽洛斯,E1063]\b[this,9,9]嘿嘿嘿，让我先好好研究一下..............",
            "\t[君无天,E602]\b[this,7,9]......................",
            {
                "type": "playBgm",
                "name": "disorder5.mp3",
                "keep": true
            },
            {
                "type": "animate",
                "name": "attack9",
                "loc": [
                    9,
                    9
                ],
                "async": true
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
                "times": 1,
                "async": true
            },
            {
                "type": "playSound",
                "name": "Attack09.wav"
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "playSound",
                "name": "Blow4.ogg"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    9,
                    9
                ],
                "async": true
            },
            "谁也没有想到的是..... 君无天的利剑居然直接刺破了圣羽洛斯的心脏！！",
            {
                "type": "setBlock",
                "number": "E1062",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "time": 0
            },
            "\t[圣羽洛斯,E1062]\b[this,9,9]君无天！你在干什么？！",
            "\t[君无天,E602]\b[this,7,9]干什么？你觉得呢！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]你居然敢背叛我！敢背叛魔王大人！！",
            "\t[君无天,E602]\b[this,7,9]背叛吗？呵，我真是好久没有听到这个名词了呢！",
            "\t[君无天,E602]\b[this,7,9]其实.........早在那次灭族计划我就应该做出背叛这个选择了呢！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]你....你什么意思！！",
            "\t[君无天,E602]\b[this,7,9]刚才我说的没错，是我杀死了星钰她的父亲，也是我导致了整个星家的灭亡.......",
            "\t[君无天,E602]\b[this,7,9]但是！如果不是因为你们！我怎么可能会亲手杀死我最好的兄弟呢！！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]！！！原来你当初真的是星家的同僚？！！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]该死！我还以为当初你是为了调查选拔阁主的资料才重视你的！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]没想到你要的——居然是我们计划灭族的情报！！",
            "\t[君无天,E602]\b[this,7,9]是呀！要不是因为你们！！我也不会这么做！！！",
            "\t[君无天,E602]\b[this,7,9]而且当年如果不是因为你的煽动 ！魔王大人又怎么可能要灭星家！！",
            "\t[君无天,E602]\b[this,7,9]因为对于你来说：一旦灭了星家,你所得到的好处是最多的！",
            "\t[君无天,E602]\b[this,7,9]而且你早就想夺取星家的核心技术了！目的是为了完成你那什么狗屁的试验！！",
            "\t[君无天,E602]\b[this,7,9]也就是因为你！才导致这一系列的悲剧产生！！",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    9,
                    9
                ],
                "async": true
            },
            "\t[圣羽洛斯,E1062]\b[this,9,9]你！你刚才给我体内打了些什么！！为什么我身体内部的肌肉正在不断爆炸与重生！！",
            "\t[君无天,E602]\b[this,7,9]痛苦吗？在星家灭族以后，我一直在寻找彻底杀死你的方法！",
            "\t[君无天,E602]\b[this,7,9]每一次我闭关都是为了研制这个！为了就是有朝一日能够打在你身体！并且毁灭你！！",
            "\t[君无天,E602]\b[this,7,9]但是这个药是一次性的！所以我为了杀死你，我设计了很久很久！",
            "\t[君无天,E602]\b[this,7,9]而今天！就是你的死期！！",
            "\t[圣羽洛斯,E1062]\b[this,9,9]没想到...........我算计天下............居然...败在了你的手里.....真是讽刺呀！哈哈哈......。",
            {
                "type": "animate",
                "name": "attack9",
                "loc": [
                    9,
                    9
                ],
                "async": true
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
                "times": 1,
                "async": true
            },
            {
                "type": "playSound",
                "name": "Attack09.wav"
            },
            {
                "type": "sleep",
                "time": 700
            },
            {
                "type": "playSound",
                "name": "Blow4.ogg"
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "setBlock",
                "number": "X130112",
                "loc": [
                    [
                        9,
                        9
                    ]
                ],
                "time": 0
            },
            "随着君无天利剑的斩落，噗的一声 ，圣羽洛斯的头颅掉落下来。",
            "并且圣羽洛斯的身体也逐渐崩塌！随之而来的是那鲜艳的鲜血。",
            "这位罪恶滔天的男人终于缓缓死了这永生之巅上，结束了他那罪恶的一生...............。",
            "三圣阁主圣羽洛斯-\\d陨。",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[君无天,E602]\b[this,7,9]................",
            "\t[君无天,E602]\b[this,7,9]...............................",
            "\t[君无天,E602]\b[this,7,9]...............................兄弟",
            "\t[君无天,E602]\b[this,7,9]灭族之仇，我已经替你报仇了！",
            "\t[君无天,E602]\b[this,7,9]哈哈哈哈哈哈哈哈...........................",
            {
                "type": "sleep",
                "time": 500
            },
            "\t[君无天,E602]\b[this,7,9]............................",
            "\t[君无天,E602]\b[this,7,9]对不起,小粽,让你受苦了.........。",
            "\t[君无天,E602]\b[this,7,9]我现在立刻带你去前辈那里治疗。",
            "\t[君无天,E602]\b[this,7,9]不过.....希望你醒来以后不要怨恨我..........。",
            "\t[君无天,E602]\b[this,7,9]毕竟.......我现在也没有更好的办法了..............哎...........。",
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
                "type": "pauseBgm"
            },
            {
                "type": "changeFloor",
                "floorId": "MT311",
                "loc": [
                    121,
                    12
                ],
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,0": [
            {
                "type": "hideStatusBar"
            },
            {
                "type": "pauseBgm"
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
            "\\d第五章——黄粱一梦",
            "第四章已完结，是否记录分数，或者继续前行？",
            {
                "type": "choices",
                "text": "是否记录",
                "choices": [
                    {
                        "text": "记录分数",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(item:greenKey > 0)",
                                "true": [
                                    {
                                        "type": "win",
                                        "reason": "第四章 生死之念 （全绿难度）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "第四章 生死之念  （0绿难度）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "继续前行",
                        "action": [
                            {
                                "type": "insert",
                                "loc": [
                                    0,
                                    0
                                ],
                                "floorId": "MT447"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,736,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240006],
    [240006,240006,240006,240006,240006,240006,  0,240006,240006,240006,240006,240006,240006]
],
    "bgmap": [

],
    "fgmap": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17,  0,  0,  0, 17, 17, 17,  0,  0,  0, 17, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17]
],
    "bg2map": [

],
    "fg2map": [

]
}