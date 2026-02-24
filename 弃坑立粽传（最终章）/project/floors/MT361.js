main.floors.MT361=
{
    "floorId": "MT361",
    "title": "终焉之城·魔殿第二十层",
    "name": "终焉之城·魔殿第二十层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "holy3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle25.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,8": [
            {
                "type": "playBgm",
                "name": "holy3.mp3",
                "keep": true
            },
            "\t[？？？,E1194]\b[this,6,6]不愧是剑祖之徒，神之勇者。竟然能够活着走在本座面前。",
            "\t[？？？,E1194]\b[this,6,6]不过你们的旅途到此为止了！",
            "\t[君无天,N1195]\b[hero,3]是你！黯祖！！",
            "\t[小粽,hero]\b[hero]上一任的三圣阁主之黯祖吗？",
            "\t[黯祖,E1194]\b[this,6,6]桀桀桀，没想到你们这些小鬼竟然能够认出本座来！看来这是你们三生修得的福气呢！",
            "\t[黯祖,E1194]\b[this,6,6]谶祖那个家伙太过胆小，竟然要让本座亲自前来解决你们。",
            "\t[黯祖,E1194]\b[this,6,6]等本座将你们的头颅带回到谶祖那个家伙之后，好好让他看看他究竟有多胆小！",
            "\t[小粽,hero]\b[hero]你真觉得你能够吃定我们了吗！",
            "\t[黯祖,E1194]\b[this,6,6]哼！小家伙，本座当年大杀四方的时候，你没有出生！",
            "\t[黯祖,E1194]\b[this,6,6]既然你这么诚心想死，那本座就成全你们！！",
            "\t[黯祖,E1194]\b[this,6,6]让你们这些小家伙看看何为真正的力量！！",
            "【警告】接下来进入特殊boss战模式，黯祖必须连续击败六次才能战胜。请做好准备！",
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "6,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(flag:boss303F===13)",
                    "true": [
                        "膜拜无敌桦佬！"
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:boss303F===123)",
                            "true": [
                                "老魔天下第一！"
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:boss360F===114514)",
                                    "true": [],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:boss360F===5)",
                                            "true": [
                                                {
                                                    "type": "callBook"
                                                },
                                                {
                                                    "type": "setBlock",
                                                    "number": "N1197",
                                                    "loc": [
                                                        [
                                                            5,
                                                            10
                                                        ]
                                                    ],
                                                    "time": 0,
                                                    "async": true
                                                },
                                                {
                                                    "type": "setBlock",
                                                    "number": "N1196",
                                                    "loc": [
                                                        [
                                                            7,
                                                            10
                                                        ]
                                                    ],
                                                    "time": 0,
                                                    "async": true
                                                },
                                                {
                                                    "type": "setBlock",
                                                    "number": "N1195",
                                                    "loc": [
                                                        [
                                                            6,
                                                            9
                                                        ]
                                                    ],
                                                    "time": 0
                                                },
                                                {
                                                    "type": "unfollow",
                                                    "name": "jwt.png"
                                                },
                                                {
                                                    "type": "unfollow",
                                                    "name": "lt.png"
                                                },
                                                {
                                                    "type": "unfollow",
                                                    "name": "xy.png"
                                                },
                                                {
                                                    "type": "playBgm",
                                                    "name": "disorder6.mp3",
                                                    "keep": true
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:boss360F",
                                                    "value": "6"
                                                },
                                                "\t[黯祖,E1194]\b[this,6,6]你们！都是虫子！！",
                                                "\t[黯祖,E1194]\b[this,6,6]就让你们这些虫子们看看何为真正的力量！！",
                                                "\t[君无天,N1195]\b[this,6,9]这股力量.....已经远远凌驾于“梦”了，甚至与仙月前辈相比有过之而无不及......。",
                                                "\t[小粽,hero]\b[hero]......星天前辈.....我们.......真的能战胜他么。",
                                                "\t[君无天,N1195]\b[this,6,9]........................",
                                                "\t[君无天,N1195]\b[this,6,9]小粽，你还记得我师父所说过的话吗？",
                                                "\t[小粽,hero]\b[hero].......当然记得。",
                                                "\t[君无天,N1195]\b[this,6,9]啊.........一个人最强大的并非是他本身固有的力量，而是内心。",
                                                "\t[君无天,N1195]\b[this,6,9]一个内心强大的人，无论在未来面临怎样的困难，怎样的悲伤，都能够重新振作起来，奔向光明！",
                                                "\t[君无天,N1195]\b[this,6,9]所以，我们不应该就此绝望！",
                                                "\t[星钰,N1196]\b[this,7,19]父亲大人.......。",
                                                "\t[小粽,hero]\b[hero]........我知道了",
                                                "\t[黯祖,E1194]\b[this,6,6]哦？君无天，就连你的绝技龙啸九天决都无法阻止我，你还想靠什么来与本座抗衡！",
                                                "\t[君无天,N1195]\b[this,6,9]..........的确如你所言龙啸九天决都无法与你抗衡，但是！",
                                                "\t[君无天,N1195]\b[this,6,9]\\d我说过！一个人最强大的并非是他本身固有的力量，而是内！心！",
                                                "\t[黯祖,E1194]\b[this,6,6]无趣至极！那就让本座看看你的这颗道心究竟有几分几两呢！！",
                                                "\t[君无天,N1195]\b[this,6,9]（星天兄弟，没想到这一招还会从我手中继续延续下去.......。）",
                                                "\t[君无天,N1195]\b[this,6,9]小粽！掩护我！！",
                                                "\t[小粽,hero]\b[hero]嗯！！！",
                                                "\t[君无天,N1195]\b[this,6,9]黯祖！今天就让你见识一下当年你败给我师父的那一招！！",
                                                {
                                                    "type": "playSound",
                                                    "name": "cgefc01.wav"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "unexpected1",
                                                    "loc": [
                                                        6,
                                                        6
                                                    ]
                                                },
                                                "\t[黯祖,E1194]\b[this,6,6]你说什么？！！",
                                                "\t[君无天,N1195]\b[this,6,9]\r[red]浪！",
                                                "\t[君无天,N1195]\b[this,6,9]\r[red]血！",
                                                "\t[黯祖,E1194]\b[this,6,6]不可能！你怎么可能会剑老头的这一招！！",
                                                "\t[君无天,N1195]\b[this,6,9]\r[red]千！",
                                                "\t[黯祖,E1194]\b[this,6,6]混蛋！给我死！！",
                                                "\t[小粽,hero]\b[hero]要想伤害星天前辈，就先踏过我的尸体！！",
                                                "\t[黯祖,E1194]\b[this,6,6]该死的小虫子！！给我滚！！",
                                                {
                                                    "type": "playSound",
                                                    "name": "049-Explosion02.ogg"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "attack11",
                                                    "loc": "hero"
                                                },
                                                {
                                                    "type": "playSound",
                                                    "name": "049-Explosion02.ogg"
                                                },
                                                {
                                                    "type": "vibrate",
                                                    "time": 500
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
                                                "\t[小粽,hero]\b[hero]\r[red]咳咳咳！！我说过，要想伤害他们，就必须踏过我的尸体！",
                                                "\t[黯祖,E1194]\b[this,6,6]混蛋！！",
                                                "\t[君无天,N1195]\b[this,6,9]\r[red]仞！",
                                                {
                                                    "type": "playSound",
                                                    "name": "cgefc01.wav"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "unexpected1",
                                                    "loc": [
                                                        6,
                                                        6
                                                    ]
                                                },
                                                "\t[黯祖,E1194]\b[this,6,6]！！这股意境！！不可能！！",
                                                "\t[君无天,N1195]\b[this,6,9]\r[red]斩！！",
                                                "君无天施展绝技浪血千仞斩，黯祖攻防削弱成原来的二分之一！！！",
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E1194",
                                                    "name": "atk",
                                                    "value": "7500000000000000"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E1194",
                                                    "name": "def",
                                                    "value": "1500000000000000"
                                                },
                                                {
                                                    "type": "sleep",
                                                    "time": 500
                                                },
                                                {
                                                    "type": "callBook"
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
                                                    "keep": true
                                                },
                                                {
                                                    "type": "battle",
                                                    "id": "E1194"
                                                },
                                                "\t[黯祖,E1194]\b[this,6,6]\r[red]不可能！！！！",
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
                                                    "type": "sleep",
                                                    "time": 500
                                                },
                                                {
                                                    "type": "insert",
                                                    "loc": [
                                                        6,
                                                        2
                                                    ]
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:boss360F===4)",
                                                    "true": [
                                                        {
                                                            "type": "battle",
                                                            "id": "E1194"
                                                        },
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:boss360F",
                                                            "value": "5"
                                                        },
                                                        "\t[君无天,N1195]\b[hero,3]噗！！！",
                                                        "\t[小粽,hero]\b[hero]咳咳咳！！！",
                                                        "\t[星钰,N1196]\b[hero,2]父亲大人！小粽！！",
                                                        "\t[黯祖,E1194]\b[this,6,6]........了不起，没想到你们居然还能够站在本座面前。看来剑祖他教了个好徒弟啊！",
                                                        "\t[黯祖,E1194]\b[this,6,6]不过可惜可惜，要不是在当年一战剑祖身受重伤，不然我也不会像现在这样保持自若呢。",
                                                        "\t[君无天,N1195]\b[hero,3]你这种家伙！没有资格说我师父！",
                                                        "\t[黯祖,E1194]\b[this,6,6]有没有资格，不是你这种小辈所能决定的！",
                                                        "\t[黯祖,E1194]\b[this,6,6]游戏玩的也差不多了，是时候该结束这一切了！",
                                                        "黯祖完全施展黑暗之力，获得三连击技能！并且属性大幅度提升！！",
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E1194",
                                                            "name": "special",
                                                            "value": "[40,1,8,9,5]"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E1194",
                                                            "name": "hp",
                                                            "value": "50000000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E1194",
                                                            "name": "atk",
                                                            "value": "15000000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E1194",
                                                            "name": "def",
                                                            "value": "3000000000000000"
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss360F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E1194"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss360F",
                                                                    "value": "4"
                                                                },
                                                                "\t[罗天,N1197]\b[hero,1]噗！！！",
                                                                "\t[星钰,N1196]\b[hero,2]罗天！！",
                                                                "\t[小粽,hero]\b[hero]不好！他被黯气所伤，必须进行急救！",
                                                                "\t[黯祖,E1194]\b[this,6,6]没有这个必要了，因为你们很快就会死在这里！",
                                                                "\t[君无天,N1195]\b[hero,3].........龙啸九天决！",
                                                                "\t[黯祖,E1194]\b[this,6,6]哦？！剑老头当初的成名绝招吗，看来你不仅融会贯通，还对他进行了改善！",
                                                                "\t[黯祖,E1194]\b[this,6,6]那本座也就认真一回吧！",
                                                                "黯祖施展出更为恐怖的黑暗之力，获得净化技能！并且属性随之提升！",
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1194",
                                                                    "name": "special",
                                                                    "value": "[40,1,8,9]"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1194",
                                                                    "name": "hp",
                                                                    "value": "55000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1194",
                                                                    "name": "atk",
                                                                    "value": "14000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1194",
                                                                    "name": "def",
                                                                    "value": "750000000000000"
                                                                },
                                                                {
                                                                    "type": "update"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss360F===2)",
                                                                    "true": [
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E1194"
                                                                        },
                                                                        "\t[君无天,N1195]\b[hero,3]你这家伙.....居然已经达到“梦”那个水平的战力了！",
                                                                        "\t[黯祖,E1194]\b[this,6,6]“梦”？你是指时刻跟随在魔王身边的那个小妞吗。",
                                                                        "\t[黯祖,E1194]\b[this,6,6]如果你们认为我的实力只有这点水平的话，那本座可要说声：\\d“抱歉了”！",
                                                                        "黯祖施展出更为恐怖的黑暗之力，获得反击技能！并且属性随之提升！",
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss360F",
                                                                            "value": "3"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1194",
                                                                            "name": "special",
                                                                            "value": "[40,1,8]"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1194",
                                                                            "name": "hp",
                                                                            "value": "55000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1194",
                                                                            "name": "atk",
                                                                            "value": "13000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1194",
                                                                            "name": "def",
                                                                            "value": "750000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss360F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1194"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss360F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[黯祖,E1194]\b[this,6,6]哦？有点乐子，看来谶祖那个胆小鬼害怕是有一定道理的啊！",
                                                                                "\t[黯祖,E1194]\b[this,6,6]不过这对于我来说还是不够啊！",
                                                                                "\t[黯祖,E1194]\b[this,6,6]来吧，继续让我看看你们究竟有何作为！",
                                                                                "黯祖施展出更为恐怖的黑暗之力，属性随之提升！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "hp",
                                                                                    "value": "55000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "atk",
                                                                                    "value": "12500000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "def",
                                                                                    "value": "700000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1194"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss360F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[黯祖,E1194]\b[this,6,6]你们就只有这点实力吗？如果这就是你们极限的话，那可是太让本座失望了啊！",
                                                                                "\t[小粽,hero]\b[hero]你不要太过自大了！",
                                                                                "\t[黯祖,E1194]\b[this,6,6]哦？是吗，那这样如何！",
                                                                                "黯祖施展出更为恐怖的黑暗之力，获得先攻技能！并且属性随之提升！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "special",
                                                                                    "value": "[40,1]"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "hp",
                                                                                    "value": "50000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "atk",
                                                                                    "value": "12000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1194",
                                                                                    "name": "def",
                                                                                    "value": "600000000000000"
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
        "6,2": [
            {
                "type": "setBlock",
                "number": "N1198",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            "\t[君无天,N1195]\b[this,6,9]............",
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
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
            "\t[君无天,N1195]\b[this,6,9]噗！",
            "\t[君无天,N1195]\b[this,6,9]（已经......到极限了吗）",
            "\t[小粽/星钰]星天前辈/父亲大人！",
            "\t[君无天,N1195]\b[this,6,9]我没事。",
            "\t[黯祖,E1194]\b[this,6,6]不可能！你们这些小鬼怎么可能击败我！",
            "\t[君无天,N1195]\b[this,6,9]......没想到你的生命力竟然如此顽强，就连这一招都无法取你性命。",
            "\t[君无天,N1195]\b[this,6,9]不过你已经被我剑气所重创，你！已经输了！！",
            "\t[黯祖,E1194]\b[this,6,6]谶祖！你这个胆小鬼！你还要继续看戏吗！！",
            {
                "type": "playBgm",
                "name": "holy2.mp3",
                "keep": true
            },
            "\t[？？？]桀桀桀，这不就来了吗！",
            {
                "type": "playSound",
                "name": "139-Darkness02.ogg"
            },
            {
                "type": "animate",
                "name": "attack18",
                "loc": [
                    7,
                    5
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "E1182",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 0
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "callBook"
            },
            "\t[小粽,hero]\b[hero]丝毫不逊色于黯祖的存在.......你就是谶祖？！",
            "\t[谶祖,E1182]\b[this,7,5]初次见面，自我介绍一下，吾乃谶祖，三圣之巅的上一任阁主。",
            "\t[黯祖,E1194]\b[this,6,6]够了！你这个白痴，赶紧解决掉他们，没看到我马上就要不行了吗！",
            "\t[谶祖,E1182]\b[this,7,5]你还是老样子，内心太过浮躁，所以你才吃了他们的大亏。",
            "\t[黯祖,E1194]\b[this,6,6].....别冷嘲热讽了，究竟我是你的队友还是他们是你的队友啊！",
            "\t[谶祖,E1182]\b[this,7,5]哎，行了，我知道了。",
            "\t[谶祖,E1182]\b[this,7,5]你们几个.......准备好了吗！",
            "\t[君无天,N1195]\b[this,6,9]（该死，以我现在的状态无法再施展第二次绝技了！）",
            "\t[小粽,hero]\b[hero]......要想伤害他们，得先问过.......。",
            {
                "type": "animate",
                "name": "attack9",
                "loc": [
                    6,
                    6
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "playBgm",
                "name": "disorder7.mp3",
                "keep": true
            },
            "谁也没想到的是，谶祖直接刺破了黯祖的心脏！！",
            "\t[黯祖,E1194]\b[this,6,6]谶祖！你在干什么！！",
            "\t[谶祖,E1182]\b[this,7,5]你问我干什么，我只是请你去黄泉作客而已呀！",
            "\t[黯祖,E1194]\b[this,6,6]你.......为什么要这么做！！",
            "\t[谶祖,E1182]\b[this,7,5]好吧，既然你这么想知道，我就成全你！",
            "\t[谶祖,E1182]\b[this,7,5]对面的小家伙们，你们也顺便听一听这个故事吧。",
            "\t[小粽,hero]\b[hero].......................",
            "\t[谶祖,E1182]\b[this,7,5]几十多年前，魔塔世界有四位天才，他们分别........",
            "\t[黯祖,E1194]\b[this,6,6]你......你提这些陈年往事干什么！",
            "\t[谶祖,E1182]\b[this,7,5]呵呵，不要着急，毕竟每一个故事都要有一个背景作为故事的铺垫才行啊。",
            "\t[谶祖,E1182]\b[this,7,5]而我刚才说的那四位天才，就是现在的黯祖，谶祖，剑祖，以及生命之使！",
            "\t[小粽,hero]\b[hero]...........",
            "\t[谶祖,E1182]\b[this,7,5]剑祖对于君无天来说应该非常清楚，黯祖与谶祖分别就是我们二人，至于那最强的生命之使.......。",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]就是现在隐居在生命之森的仙月阁下！",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ]
            },
            "\t[谶祖,E1182]\b[this,7,5]你们没必要流露出这样吃惊的表情，仙月阁下的实力比你们想象中还要强大，你们看到的不过只是她的冰山一角！",
            "\t[谶祖,E1182]\b[this,7,5]而且当初的仙月可是魔塔世界第一美人，不知道当初有多少追求她的人呢......。",
            "\t[黯祖,E1194]\b[this,6,6]你......够了！不要再提了！！",
            "\t[谶祖,E1182]\b[this,7,5]哦？是吗，即使过了几十多年，我想....你还是没有忘记她吧！",
            "\t[黯祖,E1194]\b[this,6,6]..................",
            "\t[谶祖,E1182]\b[this,7,5]不过他当年并没有选择你，而是选择了他！",
            "\t[黯祖,E1194]\b[this,6,6]..........................",
            "\t[君无天,N1195]\b[this,6,9]你说的他.......难道是！",
            "\t[谶祖,E1182]\b[this,7,5]嗯，就是你想的那样！",
            "\t[君无天,N1195]\b[this,6,9]！！！！",
            "\t[小粽,hero]\b[hero]...........！难道说——",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]没错！就是君无天的师父，当年魔塔剑之巅峰的剑祖！！",
            {
                "type": "vibrate",
                "time": 500,
                "async": true
            },
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            "\t[众人]什么？！！",
            "\t[君无天,N1195]\b[this,6,9].........怎么会这样！那师父他为什么......。",
            "\t[谶祖,E1182]\b[this,7,5]别急，这个故事很长，让我一一讲给你们听。",
            "\t[谶祖,E1182]\b[this,7,5]当初黯祖追求仙月未果，而剑祖却成功了，并且他与仙月还成功有了一个孩子。",
            "\t[谶祖,E1182]\b[this,7,5]本来故事应该以这么一个结局而告终，可是呢.......！",
            "\t[谶祖,E1182]\b[this,7,5]黯祖因为之前本身对剑祖有摩擦，并且自己所爱之人却爱上了自己的情敌，因此因爱生恨，在仙月孩子出生的那一天......",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]他出手打伤了仙月！",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            "\t[谶祖,E1182]\b[this,7,5]......你们是不是很想知道他为什么要这么做！",
            "\t[众人]......................嗯。",
            "\t[谶祖,E1182]\b[this,7,5]你自己来说吧。",
            "\t[黯祖,E1194]\b[this,6,6]为什么！为什么她选择是他而不是我啊！！",
            "\t[黯祖,E1194]\b[this,6,6]明明我对她一片痴心，她为什么不能够领会我的情意，而是选择那个轻浮的家伙！！",
            "\t[黯祖,E1194]\b[this,6,6]而在那之后，我明白了，我得不到的东西也别人也别想得到！！",
            "\t[黯祖,E1194]\b[this,6,6]因此我趁她最虚弱的时候打伤了她！如果不是剑祖那个混蛋，我到时就得手了！！",
            "\t[谶祖,E1182]\b[this,7,5].......的确，如果不是我和你携手打伤了剑老头，你当初估计会被剑老头给千刀万剐吧！",
            "\t[黯祖,E1194]\b[this,6,6]对啊！既然你当初帮了我，那你为什么现在要这么做！！",
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
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "holy4.mp3",
                "keep": true
            },
            "\t[谶祖,E1182]\b[this,7,5]\r[red]那是因为这一切的一切都是我早就设计好的！",
            {
                "type": "vibrate",
                "time": 500,
                "async": true
            },
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
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
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero",
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ]
            },
            "\t[黯祖,E1194]\b[this,6,6]你.....你说什么？！！",
            "\t[谶祖,E1182]\b[this,7,5]你不觉得很奇怪吗，明明刚才我已经刺破了你的心脏，你却还能够歇斯底里这么久。",
            "\t[谶祖,E1182]\b[this,7,5]对于其他人来说，刺破心脏，是一种必死的状态，而你不会。",
            "\t[黯祖,E1194]\b[this,6,6]你.....你什么意思！",
            "\t[谶祖,E1182]\b[this,7,5]在魔塔世界中，所有人都说你是黯夜生物的始祖，所有的黯夜生物都是从你手中创造的。",
            "\t[谶祖,E1182]\b[this,7,5]但是事实上你只是一个空有战斗欲望的莽夫罢了，对于生物科学这一方面可谓是如同初生的婴儿一般懵懂。这一点我没说错吧！",
            "\t[黯祖,E1194]\b[this,6,6].............我........。",
            "\t[谶祖,E1182]\b[this,7,5]那么问题来了，是谁传播的谣言，又是谁创造出来黯夜一族这个生物呢？！",
            "\t[黯祖,E1194]\b[this,6,6].....................是你！",
            "\t[谶祖,E1182]\b[this,7,5]嗯，第一个问题你算是答对了，那么第二个问题——",
            "\t[谶祖,E1182]\b[this,7,5]为什么魔塔中人将你尊称黯夜之祖的时候，你对此没有做出任何反应，反而是顺理成章的欣然接受呢？",
            "\t[黯祖,E1194]\b[this,6,6].................黯夜意味着无尽的黑暗，他们尊称我为黯夜之祖的时候我认为我在黑暗这条路上可谓是魔塔世界第一人了！",
            "\t[谶祖,E1182]\b[this,7,5]啊，跟我预想的完全一样呢，果然你会这么回答我呢！",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            "\t[黯祖,E1194]\b[this,6,6]你......你在开什么玩笑！",
            "\t[谶祖,E1182]\b[this,7,5]这并不是玩笑话，我只是在澄清事实而已。",
            "\t[谶祖,E1182]\b[this,7,5]我之所以说你对我问题的回答是我预料到的原因是——",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]你的思想，早已被我潜移默化所控制了呢！",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[黯祖,E1194]\b[this,6,6]不可能！这不可能！我怎么可能会被你悄无声息地控制住自己的思想！！",
            "\t[谶祖,E1182]\b[this,7,5]是吗？如果不是我控制了你的思想，那你当初又为什么不对此自己是黯夜之祖这件事做出任何反应呢？",
            "\t[黯祖,E1194]\b[this,6,6]那是我的误解！误解！！",
            "\t[谶祖,E1182]\b[this,7,5]哦？真的只是误解吗？那我再问你几个问题——",
            "\t[谶祖,E1182]\b[this,7,5]你记得你小时候的事吗？你能告诉我你为什么要一直穿着这身盔甲呢，哪怕是你对仙月表白的时候。",
            "\t[黯祖,E1194]\b[this,6,6]............",
            "\t[黯祖,E1194]\b[this,6,6]................",
            "\t[黯祖,E1194]\b[this,6,6].....................",
            "\t[黯祖,E1194]\b[this,6,6].....................我不知道。",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]没错！你不知道！你什么也不知道！因为从你拥有记忆的那一刻就是以这种模样与我见面的啊！！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            {
                "type": "vibrate",
                "time": 500
            },
            "\t[黯祖,E1194]\b[this,6,6].....................你....究竟...是谁？....而我.....又是....谁！",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]我为谶祖，而你——",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]是我第一个制作出来的傀儡啊！！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            {
                "type": "vibrate",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[黯祖,E1194]\b[this,6,6]什...........么.....。",
            "\t[谶祖,E1182]\b[this,7,5]你对仙月的爱，对剑祖的厌恶与憎恨，都只是我所编写的剧本而已。",
            "\t[谶祖,E1182]\b[this,7,5]是我控制你去打伤妊娠期的仙月，也是我让你与你眼前的几个小家伙决一死战。",
            "\t[黯祖,E1194]\b[this,6,6]谶！祖！你！你！！",
            "\t[谶祖,E1182]\b[this,7,5]无需激动，身为一个傀儡，你不是做的很好么？至少你的一生还是有意义的。",
            "\t[黯祖,E1194]\b[this,6,6]我！我要杀了你！！",
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
                "name": "attack12.wav"
            },
            "\t[谶祖,E1182]\b[this,7,5]身为一个傀儡，竟然想反抗主人？真是个不听话的傀儡啊。",
            "\t[谶祖,E1182]\b[this,7,5]听话者给予奖赏，至于不听话的垃圾吗......",
            "\t[谶祖,E1182]\b[this,7,5]\r[red]没有存在的必要了！",
            "\t[黯祖,E1194]\b[this,6,6]你！啊啊啊啊啊！！！",
            {
                "type": "playSound",
                "name": "138-Darkness01.ogg"
            },
            {
                "type": "animate",
                "name": "attack19",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true,
                "time": 500
            },
            "三圣之巅上一任阁主之黯祖，传闻所有黯夜生物的创始人，曾经对仙月的爱慕者，现在在如今看来却是如此的可笑。",
            "从一开始就被当做傀儡一样玩弄着，却还像无知者一样浑然不知。等到死亡的终点才发现，自己不过只是一个被遗弃的傀儡罢了.......",
            "\r[red]三圣之巅上一任阁主黯祖——陨！",
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
            {
                "type": "sleep",
                "time": 500
            },
            "\t[谶祖,E1182]\b[this,7,5]结束了。至于你们几个.......。",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    10
                ],
                "async": true
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "emmslow",
                "loc": [
                    7,
                    5
                ]
            },
            "\t[谶祖,E1182]\b[this,7,5]如果你们想知道更多真相的话，吾在魔殿第三十层等你们！",
            "\t[谶祖,E1182]\b[this,7,5]当然，前提是你们得担负得起得知真相的能力！请！",
            {
                "type": "playSound",
                "name": "139-Darkness02.ogg"
            },
            {
                "type": "animate",
                "name": "attack18",
                "loc": [
                    7,
                    5
                ],
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[小粽,hero]\b[hero]呼.....呼......他走了！不过他刚刚为什么不直接解决掉我们，以刚才我们的状态在他面前绝对没有任何抵抗能力！",
            "\t[君无天,N1195]\b[this,6,9].........有可能.....对于他来说...我们存在的意义就是跟他所说的真相有关。",
            "\t[君无天,N1195]\b[this,6,9]对了！罗天他怎么样了。",
            "\t[星钰,N1196]\b[this,7,10]父亲大人，罗天他没事，没有伤及内脏，已经被我紧急治疗了，只是暂时昏迷了。",
            "\t[君无天,N1195]\b[this,6,9]那就好....毕竟他也是仙月前辈的徒弟。从某种意义上也算是我的小师弟啊。",
            "\t[小粽,hero]\b[this,6,8]星天前辈，我们必须......做好最充分的准备。我感觉这个谶祖比我们想象中的还要危险！",
            "\t[君无天,N1195]\b[this,6,9]的确，就算是魔王，我也没有感到绝望，最多只是无力，而这个家伙所展示的一切却让我们感受到了绝望。",
            "\t[君无天,N1195]\b[this,6,9]在魔王身上我感受到的是力量上的绝对差距，而在谶祖身上......我感受到的是他那纵横捭阖,唯我独尊的谋略与自信。",
            "\t[君无天,N1195]\b[this,6,9]这种气质，不是光靠提升力量就能得到的。",
            {
                "type": "animate",
                "name": "emmslow",
                "loc": [
                    6,
                    9
                ]
            },
            "\t[君无天,N1195]\b[this,6,9].....无论前方等待的是什么，我们只有继续前进，否则只有败亡一途。",
            "\t[君无天,N1195]\b[this,6,9]先让罗天恢复过来再继续前进吧。",
            "\t[小粽/星钰].......嗯。",
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
            "与此同时.......。",
            {
                "type": "changeFloor",
                "floorId": "MT362",
                "loc": [
                    62,
                    1
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,0": [
            {
                "type": "changeFloor",
                "floorId": "MT363",
                "loc": [
                    6,
                    0
                ],
                "direction": "down",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "battle26.mp3"
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [401,240092,240092,240092,240092,240092, 87,240092,240092,240092,240092,240092,401],
    [401,240092,396,380,396,240092, 85,240092,401,402,401,240092,401],
    [  0,240092,380,396,380, 85,  0, 85,402,401,402,240092,  0],
    [666,240092,240092,240092,240092,240092, 85,240092,240092,240092,240092,240092,666],
    [ 83,400,240092,  0,  0,  0,  0,  0,  0,  0,240092,402,240092],
    [ 81,400,240092,  0,  0,  0,  0,  0,  0,  0,240092,402,399],
    [400,240092,240092,  0,  0,  0,1194,  0,  0,  0,240092,240092, 82],
    [ 81,399,240092,  0,  0,  0,  0,  0,  0,  0,240092,402,399],
    [399,240092,240092,  0,  0,  0,  0,  0,  0,  0,240092,402, 82],
    [400,240092,240092,240092,240092,240092, 81,240092,240092,240092,240092,240092,400],
    [ 81,240092,240092,240092,240092,397,666,397,240092,240092,240092,240092,402],
    [400, 81,400, 81,430, 22,397, 22,430, 82,402,400, 82],
    [240092,240092,240092,240092,240092,240092, 88,240092,240092,240092,240092,240092,240092]
],
    "bgmap": [
    [  0,1158,1158,1158,1158,1158,  0,1158,1158,1158,1158,1158,  0],
    [  0,1158,  0,  0,  0,1158,  0,1158,  0,  0,  0,1158,  0],
    [  0,1158,  0,  0,  0,  0,  0,  0,  0,  0,  0,1158,  0],
    [  0,1158,1158,1158,1158,1158,  0,1158,1158,1158,1158,1158,  0],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}