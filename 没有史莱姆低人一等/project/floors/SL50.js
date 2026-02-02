main.floors.SL50=
{
    "floorId": "SL50",
    "title": "试炼 50 层",
    "name": "魔塔50",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "immortal.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:youyi===3)",
            "true": [
                {
                    "type": "sleep",
                    "time": 2000
                },
                "\t[魔王,redKing]\b[this,6,4]哼，弱小的史莱姆，你来了。",
                {
                    "type": "moveHero",
                    "time": 500,
                    "steps": [
                        "up:4"
                    ]
                },
                "\t[阿史,hero]\b[hero]再弱小，我也一步一步走到了你的面前。",
                "\t[阿史,hero]\b[hero]魔王，你压迫了魔塔的怪物们这么久，该血债血偿了！",
                "\t[魔王,redKing]\b[this,6,4]是吗？不说你能不能打败本座，就说我身后的魔卫军团，你也无法对抗呀。这无尽的卫兵，汪洋大海，你如何与本座匹敌?要知道，一个人的力量终究是有限的。",
                "\t[阿史,hero]\b[hero]确实，一个人的力量是有限的。但正是这种有限性赋予了我们与他人合作的机会。通过团结合作，我们可以汇聚每个人的力量，共同完成伟大的事业。每个人的独特才能和贡献都是宝贵的，当我们携手合作时，就能创造出无限的可能性。",
                "\t[阿史,hero]\b[hero]魔王，你可曾听闻，星星之火可以燎原?",
                "\t[阿史,hero]\b[hero]这一次，我的背后，不再是一个人。",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        2,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        3,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        4,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        5,
                        9
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        9
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        7,
                        9
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        8,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        9,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        10,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        3,
                        8
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        8
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        9,
                        8
                    ],
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "setBlock",
                    "number": "N1304",
                    "loc": [
                        [
                            9,
                            8
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1305",
                    "loc": [
                        [
                            3,
                            8
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1004",
                    "loc": [
                        [
                            6,
                            8
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1307",
                    "loc": [
                        [
                            2,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1307",
                    "loc": [
                        [
                            3,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1307",
                    "loc": [
                        [
                            4,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1306",
                    "loc": [
                        [
                            8,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1306",
                    "loc": [
                        [
                            9,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1306",
                    "loc": [
                        [
                            10,
                            10
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1308",
                    "loc": [
                        [
                            5,
                            9
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1308",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N1308",
                    "loc": [
                        [
                            7,
                            9
                        ]
                    ]
                },
                {
                    "type": "sleep",
                    "time": 2000
                },
                "\t[骷髅王,N1305]\b[this,3,8]骷髅王率领骷髅军前来助阵！",
                "\t[大法师,N1304]\b[this,9,8]大法师率领吸血族前来助阵！",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]骑士队长率领骑士队前来助阵！",
                "\t[魔王,redKing]\b[this,6,4]骷髅王，大法师，骑士队长，你们竟敢背叛本座！",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]一个人的觉得终究是势单力薄的，只有千万个你和我站出来，一切才有可能。",
                "\t[大法师,N1304]\b[this,9,8]一个人的觉醒可能看起来势单力薄，但如果这个觉醒能够启发他人，它就能像种子一样，逐渐生根发芽，影响更多的人。每个人的觉醒都有可能成为改变世界的起点。就像星星之火可以燎原，一个人的觉醒也可能成为推动社会进步的力量。",
                "\t[骷髅王,N1305]\b[this,3,8]魔王，你压迫魔塔的怪物们这么久，也应当知道，哪里有压迫，哪里就有反抗！",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]骑士队，反了！",
                "\t[骷髅王,N1305]\b[this,3,8]骷髅军，反了！",
                "\t[大法师,N1304]\b[this,9,8]吸血族，反了！",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]兄弟们，消灭魔王暴政！",
                "\t[众怪物]消灭魔王暴政！",
                "\t[阿史,hero]\b[hero]听啊，魔王，这是来自底层怪物的怒吼！看啊，魔王，这是来自底层怪物的愤怒！",
                "\t[魔王,redKing]\b[this,6,4]真是可笑啊，再多的蝼蚁，再大的愤怒，又能耐本座何?",
                "\t[魔王,redKing]\b[this,6,4]本座捏死你们，犹如将史莱姆一族灭族，将骷髅队长挫骨扬灰，将吸血鬼魂飞魄散那般简单。",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]听着，魔王。我们会为自己拼出一条血路的，我们将不再受你的指挥！",
                "\t[魔王,redKing]\b[this,6,4]废话少说，来吧！",
                "\t[骑士队长（觉醒）,N1004]\b[this,6,8]上！",
                {
                    "type": "jump",
                    "from": [
                        6,
                        8
                    ],
                    "to": [
                        6,
                        5
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "blood",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        5
                    ],
                    "to": [
                        6,
                        8
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "setEnemyOnPoint",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ],
                    "name": "atk",
                    "operator": "*=",
                    "value": "0.9"
                },
                "\t[大法师,N1304]\b[this,9,8]让我来！",
                {
                    "type": "jump",
                    "from": [
                        9,
                        8
                    ],
                    "to": [
                        6,
                        5
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "blood",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "setEnemyOnPoint",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ],
                    "name": "def",
                    "operator": "*=",
                    "value": "0.9"
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        5
                    ],
                    "to": [
                        9,
                        8
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[骷髅王,N1305]\b[this,3,8]魔王，还有我呢！",
                {
                    "type": "jump",
                    "from": [
                        3,
                        8
                    ],
                    "to": [
                        6,
                        5
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "blood",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        5
                    ]
                },
                {
                    "type": "setEnemyOnPoint",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ],
                    "name": "hp",
                    "operator": "*=",
                    "value": "0.9"
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        5
                    ],
                    "to": [
                        3,
                        8
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[魔王,redKing]\b[this,6,4]就你们几个三脚猫功夫，还想与本座斗，真是异想天开呀！",
                "\t[阿史,hero]\b[hero]魔王，该我了，你受死吧！"
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(flag:huimiemota===1)",
                    "true": [
                        {
                            "type": "setEnemyOnPoint",
                            "loc": [
                                [
                                    6,
                                    4
                                ]
                            ],
                            "name": "atk",
                            "operator": "*=",
                            "value": "1.2"
                        },
                        {
                            "type": "setEnemyOnPoint",
                            "loc": [
                                [
                                    6,
                                    4
                                ]
                            ],
                            "name": "hp",
                            "operator": "*=",
                            "value": "1.2"
                        },
                        "\t[魔王,redKing]\b[this,6,4]魔塔的叛徒，你来了。",
                        {
                            "type": "jumpHero",
                            "loc": [
                                6,
                                11
                            ],
                            "time": 500
                        },
                        {
                            "type": "changePos",
                            "direction": "up"
                        },
                        {
                            "type": "moveHero",
                            "time": 500,
                            "steps": [
                                "up:4"
                            ]
                        },
                        "\t[阿史,hero]\b[hero]勇者说得对，对于你这种残暴不仁的家伙，就该将罪恶的魔塔毁灭。",
                        "\t[魔王,redKing]\b[this,6,4]要知道，你的父母……",
                        "\t[阿史,hero]\b[hero]我的父母已经被你杀死了。",
                        "\t[魔王,redKing]\b[this,6,4]你的族人……",
                        "\t[阿史,hero]\b[hero]我的族人也被你杀死了。",
                        "\t[魔王,redKing]\b[this,6,4]魔塔的底层怪物们……",
                        "\t[阿史,hero]\b[hero]它们正在受你的压迫，与死了并无两样。",
                        "\t[阿史,hero]\b[hero]受死吧，该死的魔王！感受来自底层怪物的愤怒吧！"
                    ],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:chuishouchenfu===1)",
                            "true": [
                                "\t[魔王,redKing]\b[this,6,4]恭喜你啊，阿史，你击败了入侵的魔王。",
                                {
                                    "type": "moveHero",
                                    "time": 500,
                                    "steps": [
                                        "up:4"
                                    ]
                                },
                                {
                                    "type": "changePos",
                                    "direction": "up"
                                },
                                "\t[阿史,hero]\b[hero]嗯。魔王大人，按照约定，您应该放过史莱姆一族和骷髅军、吸血族和骑士队的怪物们。",
                                "\t[魔王,redKing]\b[this,6,4]哈哈哈哈哈哈！本座当然会信守承诺。以后，你就在五区当一个史莱姆王吧！",
                                "\t[阿史,hero]\b[hero]多谢魔王。",
                                {
                                    "type": "win",
                                    "reason": "垂首臣服"
                                }
                            ],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:yongbuchenmode===1)",
                                    "true": [
                                        "\t[魔王,redKing]\b[this,6,4]你来了?",
                                        {
                                            "type": "moveHero",
                                            "time": 500,
                                            "steps": [
                                                "up:4"
                                            ]
                                        },
                                        "\t[阿史,hero]\b[hero]是的，我来了。",
                                        "\t[魔王,redKing]\b[this,6,4]你可以跪下了。",
                                        "\t[阿史,hero]\b[hero]???",
                                        "\t[魔王,redKing]\b[this,6,4]你没有和勇者一起联手对付本座，本座很大方，便饶你一命。",
                                        "\t[阿史,hero]\b[hero]魔王，你是不是搞错了什么？勇者杀了太多的怪物，我不屑与之合作。但是你，也不比勇者差到哪里去啊。",
                                        "\t[阿史,hero]\b[hero]史莱姆一族的仇，我是一定要报的。",
                                        "\t[魔王,redKing]\b[this,6,4]有胆量，我很欣赏你。不过光靠胆量可是远远不够的，来吧，我倒想看看，你凭什么为那些怪物报仇?",
                                        "\t[阿史,hero]\b[hero]呵呵，受死吧魔王！"
                                    ],
                                    "false": []
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "if",
                "condition": "(flag:youyi===3)",
                "true": [
                    "阿史击败魔王后，魔塔底层怪物们获得了自由，从此底层怪物们站起来了，赤旗从此插遍了魔塔！",
                    {
                        "type": "win",
                        "reason": "走向共和"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "(flag:huimiemota===1)",
                        "true": [
                            "阿史击败魔王后，勇者救出了公主，之后，勇者摧毁了罪恶的魔塔，阿史没想到勇者会这么做，怪物们的家园从此不再……",
                            {
                                "type": "win",
                                "reason": "毁灭魔塔"
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flag:yongbuchenmode===1)",
                                "true": [
                                    "阿史击败魔王和勇者后，解放了魔塔，不久后它在魔塔被解放后隐居起来，在很多年以后，想起了自己孤军奋战的日子，就像那永不磨灭的番号一般……",
                                    {
                                        "type": "win",
                                        "reason": "永不磨灭的番号"
                                    }
                                ],
                                "false": []
                            }
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4],
    [  4,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  4],
    [  4,  1,  1,  1,1309,  0,1309,  0,1309,  1,  1,  1,  4],
    [  4,  1,  1,  0,  0,1309,245,1309,  0,  0,  1,  1,  4],
    [  4,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  4],
    [  4,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  4],
    [  4,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  4],
    [  4,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  4],
    [  4,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  4],
    [  4,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,  4],
    [  4,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": null
}