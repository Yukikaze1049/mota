main.floors.SL35=
{
    "floorId": "SL35",
    "title": "魔塔 35 层",
    "name": "魔塔35",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "BlackBlade.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "loc": [
                11,
                2
            ],
            "direction": "down"
        },
        "\t[阿史,hero]\b[hero]\r[red]\\c[50]！\\c[]\r[]",
        "\t[魔王,redKing]\b[this,4,6]勇者君，你终于来了。",
        "\t[勇者,E1123]\b[this,8,6]魔王，公主竟然是假的，你把我骗到魔塔里面，是想做什么？",
        "\t[魔王,redKing]\b[this,4,6]伟大的神明创造了智慧权杖和神圣剑，我掌握着智慧权杖，却能被神圣剑对抗。而神圣剑只有真正的勇者才能毁灭。",
        "\t[魔王,redKing]\b[this,4,6]因此，我培养了一代又一代勇者，希望这个勇者可以帮我销毁神圣剑，让我创造一个伟大的时代。",
        "\t[勇者,E1123]\b[this,8,6]如你所说，我就是那个勇士?",
        "\t[魔王,redKing]\b[this,4,6]是的，怎么样，要不要与我合作，一起销毁神圣剑，让这个伟大的时代降临?",
        "\t[勇者,E1123]\b[this,8,6]哈哈哈哈哈哈哈！魔王，你在说笑吗？我不会销毁神圣剑的，更加不会让这个黑暗时代降临的！",
        "\t[魔王,redKing]\b[this,4,6]代表正义的勇士与代表黑暗的魔王终将有一战，来吧！",
        "\t[勇者,E1123]\b[this,8,6]正有此意魔王，受死吧！",
        {
            "type": "jump",
            "from": [
                8,
                6
            ],
            "to": [
                7,
                6
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "jump",
            "from": [
                4,
                6
            ],
            "to": [
                5,
                6
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "animate",
            "name": "thunder",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "sword",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "jianji",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                6,
                6
            ]
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                6,
                6
            ]
        },
        "\t[魔王,redKing]\b[this,5,6]哼！",
        "\t[勇者,E1123]\b[this,7,6]嘁！",
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                4,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                8,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                4,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                8,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                4,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                6,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bigExplosion",
            "loc": [
                8,
                8
            ],
            "async": true
        },
        {
            "type": "waitAsync"
        },
        "\t[魔王,redKing]\b[this,5,6]你杀不了我。",
        "\t[勇者,E1123]\b[this,7,6]哼，先停下来！你还藏了一只老鼠在这呢？",
        "\t[魔王,redKing]\b[this,5,6]不要污蔑我，这只老鼠可不是我藏的！给我过来！",
        {
            "type": "jumpHero",
            "loc": [
                6,
                4
            ],
            "time": 500
        },
        "\t[阿史,hero]\b[hero]啊！（一股力量将自己吸了过来！）",
        "\t[魔王,redKing]\b[this,5,6]竟然是你！",
        "\t[勇者,E1123]\b[this,7,6]好强大的绿史莱姆，竟然能在我和魔王的战斗之时不受影响！",
        "\t[阿史,hero]\b[hero]没错，是我，没有被你杀死的史莱姆——阿史。魔王，你受死吧！",
        "\t[魔王,redKing]\b[this,5,6]呵呵，阿史，本座很佩服你，你能在骷髅军、吸血族、骑士队和史莱姆内奸层层围堵下走到本座的面前，你真的很不错。",
        "\t[魔王,redKing]\b[this,5,6]不过，你恨错了对象。杀害史莱姆最多的，是你面前的勇者，而本座，虽然对你史莱姆一族下达了追杀令，但终究是对史莱姆一族手下留情了。",
        "\t[魔王,redKing]\b[this,5,6]人类勇者，有一个“清怪”的癖好，所有残存的史莱姆，都被他清理了。你应该帮助本座对付这个小子才是。",
        "\t[勇者,E1123]\b[this,7,6]哦?是吗？这位史莱姆兄弟，你是魔塔的怪物，魔王是什么样的人，你比我更清楚，它能用一整座魔塔的怪物来磨砺我，想必你们也没有被它当回事。",
        "\t[勇者,E1123]\b[this,7,6]不如这样，你与我联手将魔王打败了，也算是拯救了魔塔。",
        "\t[魔王,redKing]\b[this,5,6]勇者君，你也少吹了，你之前杀死了不知道多少史莱姆，还拿去做了史莱姆酱，一点也不比我做的差",
        "\t[魔王,redKing]\b[this,5,6]你真要是与勇者联手了，那么魔塔都将毁于一旦，他会把魔塔所有的怪物都清理干净，包括你史莱姆一族的所有族人！",
        "\t[勇者,E1123]\b[this,7,6]希望你考虑一下，与谁联手！",
        {
            "type": "if",
            "condition": "(flag:youyi===3)",
            "true": [
                "\t[阿史,hero]\b[hero]哼，你们都闭嘴吧！魔塔所有被压迫的底层怪物的命运，由我们自己决定！",
                "\t[阿史,hero]\b[hero]我不会与你们任何一个联手，魔塔将属于所有被压迫的怪物！",
                "\t[魔王,redKing]\b[this,5,6]哈哈哈哈，既然如此，我便先解决了你！",
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "defUp",
                    "loc": [
                        6,
                        4
                    ]
                },
                "\t[魔王,redKing]\b[this,5,6]怎么回事？",
                "\t[阿史,hero]\b[hero]大概是你们刚刚战斗了一场，没有力量再杀我了吧！魔王，你还不快滚！（我联合了三族的力量，岂是那么容易被你杀死的?）",
                "\t[魔王,redKing]\b[this,5,6]哼，有本事就来50层，我会等着你的！！",
                "\t[勇者,E1123]\b[this,7,6]好厉害的史莱姆，我会在49层等着你的！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            2
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            6
                        ]
                    ],
                    "remove": true
                }
            ],
            "false": [
                {
                    "type": "choices",
                    "text": "\t[阿史,hero]选择合作对象",
                    "choices": [
                        {
                            "text": "勇者",
                            "action": [
                                "\t[魔王,redKing]\b[this,5,6]哼，你会后悔的！",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            5,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            1,
                                            2
                                        ]
                                    ],
                                    "remove": true
                                },
                                "\t[勇者,E1123]\b[this,7,6]好的很，史莱姆兄弟，在46层，我们细细谈论一下如何对付魔王",
                                {
                                    "type": "show",
                                    "loc": [
                                        [
                                            1,
                                            10
                                        ]
                                    ],
                                    "floorId": "SL46"
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:huimiemota",
                                    "value": "1"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            7,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                }
                            ]
                        },
                        {
                            "text": "魔王",
                            "action": [
                                "\t[勇者,E1123]\b[this,7,6]果然是扶不起的烂狗屎，魔王都追杀你这么久，还能一起合作，真是想不到。来吧，我在49层等着你！",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            7,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                },
                                "\t[魔王,redKing]\b[this,5,6]很好，识时务者为俊杰，来45层，本座给你战胜勇者的宝物。",
                                {
                                    "type": "show",
                                    "loc": [
                                        [
                                            10,
                                            2
                                        ]
                                    ],
                                    "floorId": "SL45"
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            5,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            1,
                                            2
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:chuishouchenfu",
                                    "value": "1"
                                }
                            ]
                        },
                        {
                            "text": "不合作",
                            "action": [
                                "\t[阿史,hero]\b[hero]哼，你们都闭嘴吧！魔塔所有被压迫的底层怪物的命运，由我们自己决定！",
                                "\t[阿史,hero]\b[hero]我不会与你们任何一个联手，魔塔将属于所有被压迫的怪物！",
                                "\t[魔王,redKing]\b[this,5,6]哈哈哈哈，既然如此，我便先解决了你！",
                                {
                                    "type": "animate",
                                    "name": "bigExplosion",
                                    "loc": [
                                        6,
                                        4
                                    ]
                                },
                                {
                                    "type": "animate",
                                    "name": "defUp",
                                    "loc": [
                                        6,
                                        4
                                    ]
                                },
                                "\t[魔王,redKing]\b[this,5,6]怎么回事？",
                                "\t[阿史,hero]\b[hero]大概是你们刚刚战斗了一场，没有力量再杀我了吧！魔王，你还不快滚！（我拥有宝物的力量，岂是那么容易被你杀死的?）",
                                "\t[魔王,redKing]\b[this,5,6]哼，有本事就来50层，我会等着你的！！",
                                "\t[勇者,E1123]\b[this,7,6]好厉害的史莱姆，我会在49层等着你的！",
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            5,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            1,
                                            2
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "hide",
                                    "loc": [
                                        [
                                            7,
                                            6
                                        ]
                                    ],
                                    "remove": true
                                },
                                {
                                    "type": "setValue",
                                    "name": "flag:yongbuchenmode",
                                    "value": "1"
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
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4, 87,  4,  4,  4,  4,  4,  4,  4,  4,  4, 88,  4],
    [  4, 85,  4,  4,  4,  4,  4,  4,  4,  4,  4,  0,  4],
    [  4,  0,  0,  0,  0,  4,  4,  4,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  0,  0,  0,  0,  0,  0,  0,  4,  4,  4],
    [  4,  0,  4,  0,245,  0,  0,  0,1123,  0,  4,  0,  4],
    [  4,  0,  4,  0,  0,  0,  0,  0,  0,  0,  4,  0,  4],
    [  4,  0,  4,  4,  4,  0,  0,  0,  4,  4,  4,  0,  4],
    [  4,  0,  4,  4,  4,  0,  0,  0,  4,  4,  4,  0,  4],
    [  4,  0,  4,  4,  4,  0,  0,  0,  4,  4,  4,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
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
    "flyPoint": [
        11,
        1
    ]
}