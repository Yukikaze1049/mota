main.floors.MT437=
{
    "floorId": "MT437",
    "title": "魔塔之巅",
    "name": "魔塔之巅",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "holy3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "blockWall",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "holy8.mp3",
            "keep": true
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
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
            "loc": "hero",
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                11
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                12
            ]
        },
        "\t[魔王,E1396]\b[this,6,2]终于…………成功了。",
        "站在小粽他们面前的魔王已经脱去那深紫色的兜帽服装，以一种崭新的姿态面向小粽他们。魔王的面容与之前并无大异，唯独多了一份沧桑的气息。",
        "\t[小粽,hero]\b[hero]成功了？难道说！！",
        "\t[魔王,E1396]\b[this,6,2]非也，并非是你们想的那样。",
        "\t[魔王,E1396]\b[this,6,2]现在的我，已经成为半神强者！",
        "\t[小粽,hero]\b[hero]什么？！",
        "\t[魔王,E1396]\b[this,6,2]你知道为什么我没有杀你们吗？",
        "\t[魔王,E1396]\b[this,6,2]那是因为我刚才要同时压制生命与死亡之力了啊！",
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
                11
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                12
            ]
        },
        "\t[魔王,E1396]\b[this,6,2]虽然不知道为什么你们的力量比之前强上了几分，但是在我面前——",
        "\t[魔王,E1396]\b[this,6,2]\r[red]如同虚设！",
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
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        "\t[魔王,E1396]\b[this,6,2]哦？看来是我小瞧你了呢，居然能接下这一招。",
        "\t[小粽,hero]\b[hero]你完成造神计划的目的就是为了复活仙琳的母亲吧！",
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unknown",
            "loc": [
                6,
                2
            ]
        },
        "\t[魔王,E1396]\b[this,6,2]嗯？你……",
        "\t[小粽,hero]\b[hero]看来的确如此，原来真的如图星天前辈预测的那样，你要复活的就是仙月奶奶的女儿——仙梦！",
        "\t[魔王,E1396]\b[this,6,2]你是怎么知道的！",
        {
            "type": "move",
            "loc": [
                6,
                2
            ],
            "time": 10,
            "keep": true,
            "steps": [
                "down",
                "down",
                "down",
                "down",
                "down",
                "down"
            ]
        },
        "\t[君无天,N1195]\b[hero,2]浪血千刃斩！",
        {
            "type": "animate",
            "name": "attack8",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "jump",
            "from": [
                6,
                8
            ],
            "to": [
                6,
                2
            ],
            "time": 500,
            "keep": true
        },
        "\t[魔王,E1396]\b[this,6,8]哼！",
        "\t[魔王,E1396]\b[this,6,2]告诉我，你是怎么知道的！",
        "\t[小粽,hero]\b[hero]在登上塔顶之前，我们看到了你的过去，知道了这一切的真相。",
        "\t[魔王,E1396]\b[this,6,2]……………………",
        "\t[小粽,hero]\b[hero]好了， 既然你问了我问题，那我也得礼尚往来才对。",
        "\t[魔王,E1396]\b[this,6,2]你想问什么？",
        "\t[小粽,hero]\b[hero]为什么！你为什么不保护好仙琳，保护好自己的亲生骨肉！",
        "\t[小粽,hero]\b[hero]导致她…………死在了我面前。",
        "\t[魔王,E1396]\b[this,6,2]仙琳？我的女儿？......",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        "\t[魔王,E1396]\b[this,6,2]哦，原来是那个当初在登天潭径那个小丫头啊。",
        "\t[魔王,E1396]\b[this,6,2]说实话仙琳的死跟我有什么关系，而且她死就死吧，我只需要梦儿能够活过来，其他人的死活跟我有什么关系呢！",
        "\t[小粽,hero]\b[hero]看啊，仙琳，这就是你那所谓的父亲！为了那虚无缥缈的希望就连自己的亲生骨肉都可以忽视的父亲！！",
        "\t[小粽,hero]\b[hero]为了不让你的父亲继续沉沦下去，就让我…………亲手结束这一切吧！",
        "结束这一切吧！",
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(flag:boss435F===114514)",
                    "true": [],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:boss435F===114514)",
                            "true": [],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:boss435F===114514)",
                                    "true": [],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:boss435F===114514)",
                                            "true": [],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:boss435F===114514)",
                                                    "true": [],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss435F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E1396"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss435F",
                                                                    "value": "4",
                                                                    "norefresh": true
                                                                },
                                                                "\t[星钰,N1196]\b[hero,1]\r[red]啊啊啊啊啊啊啊啊啊啊啊啊！！",
                                                                "\t[小粽,hero]\b[hero]星钰！",
                                                                "\t[君无天,N1195]\b[hero,2]魔王！你找死！",
                                                                "\t[魔王,E1396]\b[this,6,2]哈哈哈哈哈哈！！来！",
                                                                "\t[魔王,E1396]\b[this,6,2]\r[gold]神魔决五式·蚀骨煞心！",
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
                                                                "\t[三人]\r[red]噗！！！",
                                                                "\t[魔王,E1396]\b[this,6,2]\r[red]看到了吗！这就是我的力量！为了完成造神计划所需的力量！！你们是不可能阻止我的！！！",
                                                                "\t[小粽,hero]\b[hero]该死！怎么会这么强，我们应该如何是好…………",
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
                                                                    "type": "hideStatusBar"
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
                                                                    "floorId": "MT439",
                                                                    "loc": [
                                                                        6,
                                                                        111
                                                                    ],
                                                                    "time": 0
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss435F===2)",
                                                                    "true": [
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E1396"
                                                                        },
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss435F",
                                                                            "value": "3"
                                                                        },
                                                                        "\t[魔王,E1396]\b[this,6,2]该死的小虫子，在一旁输出的很爽是吧！",
                                                                        "\t[魔王,E1396]\b[this,6,2]\r[gold]神魔决四式·逆海梵天！",
                                                                        "魔王全属性提升！",
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1396",
                                                                            "name": "hp",
                                                                            "value": "40000000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1396",
                                                                            "name": "atk",
                                                                            "value": "1650000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1396",
                                                                            "name": "def",
                                                                            "value": "125000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss435F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1396"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss435F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[魔王,E1396]\b[this,6,2]你们有你们的目的，我也有我的目的，道不同不相为谋，既然不愿面临这一切，那便长眠于此吧！",
                                                                                "\t[小粽,hero]\b[hero]但这背后绝对是一场悲剧！是一场虚妄的梦！",
                                                                                "\t[魔王,E1396]\b[this,6,2]闭嘴！\r[gold]神魔决三式·三生葬魂！",
                                                                                "魔王全属性提升！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "hp",
                                                                                    "value": "37500000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "atk",
                                                                                    "value": "1500000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "def",
                                                                                    "value": "120000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                "\t[小粽,hero]\b[hero]天虚游神剑！",
                                                                                "\t[魔王,E1396]\b[this,6,2]来的好！\r[gold]神魔决一式·魔海棠涛！",
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1396"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss435F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[魔王,E1396]\b[this,6,2]何必负偶抵抗，安详的死去吧。",
                                                                                "\t[君无天,N1195]\b[hero,2]魔王，你所做的一切绝对都是浮光掠影、黄粱一梦！",
                                                                                "\t[魔王,E1396]\b[this,6,2]但这对于我来说便是——\r[gold]希望！",
                                                                                "\t[魔王,E1396]\b[this,6,2]\r[gold]神魔决二式·魔赦罪生！",
                                                                                "魔王全属性提升！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "hp",
                                                                                    "value": "35000000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "atk",
                                                                                    "value": "1200000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1396",
                                                                                    "name": "def",
                                                                                    "value": "110000000000000000"
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
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT438",
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
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,1396, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,312, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,312, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,312,312,312,312,312, 17, 17, 17, 17],
    [ 17, 17, 17,312,312,312,312,312,312,312, 17, 17, 17],
    [ 17, 17,312,312,312,312,312,312,312,312,312, 17, 17],
    [ 17,312,312,312,312,312,312,312,312,312,312,312, 17],
    [312,312,312,312,312,312,312,312,312,312,312,312,312],
    [312,312,312,312,312,312, 93,312,312,312,312,312,312]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,312,312,312,312,312,  0,  0,  0,  0],
    [  0,  0,  0,312,312,312,312,312,312,312,  0,  0,  0],
    [  0,  0,312,312,312,312,312,312,312,312,312,  0,  0],
    [  0,312,312,312,312,312,312,312,312,312,312,312,  0],
    [312,312,312,312,312,312,312,312,312,312,312,312,312],
    [312,312,312,312,312,312,312,312,312,312,312,312,312]
],
    "fg2map": [

],
    "ratio": 500000000
}