main.floors.MT433=
{
    "floorId": "MT433",
    "title": "未知地带",
    "name": "未知地带",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[青年,hero]\b[hero]\r[red]唔！咳咳咳！！",
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
        "\t[青年,hero]\b[hero]怎么可能！那个男人·……究竟是何方神圣！为什么会如此轻描淡写的抹去我的绝招…………",
        "\t[青年,hero]\b[hero]\r[red]咳咳咳！该死！全身粉碎性骨折了…………",
        {
            "type": "setBlock",
            "number": "N1353",
            "loc": [
                [
                    5,
                    7
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N1354",
            "loc": [
                [
                    7,
                    7
                ]
            ],
            "time": 500
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        "\t[二哥,N1353]\b[this,5,7]终于找到你了，鼠辈！",
        "\t[三哥,N1354]\b[this,7,7]老大……你安息吧。",
        "\t[青年,hero]\b[hero]\r[red]该死！身体无法动弹了！",
        "\t[青年,hero]\b[hero]\r[red]难道我…………会死在这里吗…………梦……儿。",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "115-Raise01.ogg"
        },
        {
            "type": "animate",
            "name": "attack20",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "setBlock",
            "number": "N1355",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "lolita4.mp3",
            "keep": true
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
                5,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                7
            ]
        },
        "\t[青年,hero]\b[hero]梦？梦儿？？！！",
        "\t[青年,hero]\b[hero]是……是你吗？梦儿！",
        "\t[梦儿,N1355]\b[this,6,5]没错，我回来了。",
        {
            "type": "setBlock",
            "number": "N1351",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "time": 0
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "N1371",
            "loc": [
                [
                    6,
                    5
                ]
            ],
            "time": 0
        },
        "\t[梦儿,N1371]\b[this,6,5]是你们？伤了他吗？！",
        "\t[二哥,N1353]\b[this,5,7]居然是你？很好！正好省事了！",
        "\t[梦儿,N1371]\b[this,6,5]看来……真的是你们……\r[red]伤！了！他！",
        {
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        {
            "type": "vibrate",
            "time": 500
        },
        "\t[二哥,N1353]\b[this,5,7]等等！你的气息！！不可能！",
        "\t[二哥,N1353]\b[this,5,7]你一个弱女子怎么可能拥有这么恐怖的力量！！",
        "\t[三哥,N1354]\b[this,7,7]二哥！我们怎么办！动用圣羽洛斯大人给的\r[gold]至高底牌吧！",
        "\t[二哥,N1353]\b[this,5,7]\r[red]那快啊！",
        "\t[梦儿,N1371]\b[this,6,5]\r[red]你们！必须付出血的代价！！",
        "\t[三哥,N1354]\b[this,7,7]\r[aqua]光明驱散！！",
        "\t[梦儿,N1371]\b[this,6,5]\r[red]生命·礼赞！！",
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
        {
            "type": "changeFloor",
            "floorId": "MT434",
            "loc": [
                6,
                6
            ],
            "direction": "down",
            "time": 0
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "playBgm",
                "name": "Eternity.mp3",
                "keep": true
            },
            {
                "type": "setBlock",
                "number": "N1383",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "N1384",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[二哥,N1383]\b[this,5,7]啧啧啧……真是可惜，要不是那个小美人突然爆发出那么恐怖的力量，我也不会动用这张连圣羽洛斯大人都不舍得用的底牌了呢。",
            "\t[三哥,N1384]\b[this,7,7]二哥，那他们……",
            "\t[二哥,N1383]\b[this,5,7]他们？哼！他们可以当同命鸳鸯了，算他们运气好。",
            "\t[？？？]宿命的时针终究流入时间的长河,而人们却总是在探寻真理的道路上漫步。",
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "animate",
                "name": "unknown",
                "loc": [
                    5,
                    7
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1353",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "time": 0
            },
            {
                "type": "animate",
                "name": "unknown",
                "loc": [
                    7,
                    7
                ]
            },
            {
                "type": "setBlock",
                "number": "N1354",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "time": 0
            },
            "\t[二哥,N1353]\b[this,5,7]嗯？是谁在装神弄鬼！",
            "\t[？？？]但是......无论你们未来能做出什么，都只会在既定的道路上徘徊。",
            "\t[？？？]因为......我已经看到了你们的过去，现在，以及未来！",
            {
                "type": "playSound",
                "name": "139-Darkness02.ogg"
            },
            {
                "type": "animate",
                "name": "attack18",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1375",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 0
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
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "waitAsync"
            },
            "\t[二哥,N1353]\b[this,5,7]就是你在装神弄鬼吗？！给我滚过来！",
            {
                "type": "playSound",
                "name": "138-Darkness01.ogg"
            },
            {
                "type": "animate",
                "name": "attack19",
                "loc": [
                    5,
                    7
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "attack19",
                "loc": [
                    7,
                    7
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "remove": true,
                "time": 0,
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "remove": true,
                "time": 0
            },
            "\t[？？？,N1375]\b[this,6,5]聒噪。",
            "\t[？？？,N1375]\b[this,6,5]嗯.........那位曾经以一己之力抗衡整个魔物大军的勇者.......应该也已经摆好了自己的棋子了吧",
            "\t[？？？,N1375]\b[this,6,5]不知道....他的那副棋盘的背后.....究竟能给我带来怎样的惊喜呢！",
            "\t[？？？,N1375]\b[this,6,5]不过也罢，就让本座暂时担当你这副棋盘上的棋子吧，也让我深刻体会一下你们所蕴含的情感吧！",
            "\t[？？？,N1375]\b[this,6,5]哈哈哈哈哈哈哈哈！！",
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
                "floorId": "MT434",
                "loc": [
                    6,
                    9
                ],
                "direction": "up",
                "time": 500
            },
            {
                "type": "insert",
                "loc": [
                    0,
                    0
                ]
            },
            {
                "type": "waitAsync"
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
    [240115,240129,240129,240129,240129,240129,240129,240129,240129,240129,240129,240129,240131],
    [240122,240081,240081,240081,240081,240081,240081,240081,240081,240081,240081,240081,240120],
    [240122,240089,240089,240089,240089,240089,130120,240089,240089,240089,240089,240089,240120],
    [240122,240097,240097,240097,240097,240097,130128,240097,240097,240097,240097,240097,240120],
    [240122,  0,  0,  0,  0,  0,130113,  0,  0,  0,  0,  0,240120],
    [240122,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240120],
    [240122,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240120],
    [240122,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,240120],
    [240099,240105,240105,240105,240105,240106,  0,240105,240105,240105,240105,240105,240091],
    [240107,240113,240113,240113,240113,240114,  0,240112,240113,240113,240113,240113,240123],
    [240121,240121,240121,240121,240121,240122,  0,240120,240121,240121,240121,240121,240121],
    [240121,240121,240121,240121,240121,240122,  0,240120,240121,240121,240121,240121,240121],
    [240121,240121,240121,240121,240121,240122,  0,240120,240121,240121,240121,240121,240121]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,240089,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,240097,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}