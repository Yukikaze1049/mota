main.floors.MT440=
{
    "floorId": "MT440",
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
    "ratio": 500000000,
    "defaultGround": "blockWall",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "holy8.mp3",
            "keep": true
        },
        "\t[君无天,N1195]\b[this,5,8]\r[red]呃咳咳咳咳咳！！",
        "\t[小粽,hero]\b[hero]哈.....呼......呼......哈........。",
        "\t[星钰,N1196]\b[this,7,8]小粽......父亲大人.......你们.....",
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
        "\t[星钰,N1196]\b[this,7,8]\r[red]咳咳咳！！",
        "\t[魔王,E1396]\b[this,6,4]\r[red]为什么！你们还要抵抗！！为什么！！",
        "\t[小粽,hero]\b[hero]\r[red]我......不会.......就此停下，因为我答应过她……不会在此停下！！",
        "\t[魔王,E1396]\b[this,6,4]\r[red]不可理喻，神魔决八式·死寂黑暗！",
        {
            "type": "playSound",
            "name": "050-Explosion03.ogg"
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": "hero",
            "async": true
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": [
                7,
                8
            ]
        },
        {
            "type": "jump",
            "from": [
                5,
                8
            ],
            "to": [
                0,
                12
            ],
            "time": 1,
            "keep": true,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                7,
                8
            ],
            "to": [
                12,
                12
            ],
            "time": 1,
            "keep": true,
            "async": true
        },
        {
            "type": "moveHero",
            "time": 1,
            "steps": [
                "backward",
                "backward",
                "backward",
                "backward",
                "backward"
            ]
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
        "\t[三人]\r[red]噗！！",
        {
            "type": "setBlock",
            "number": "N1400",
            "loc": [
                [
                    0,
                    12
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "N1401",
            "loc": [
                [
                    12,
                    12
                ]
            ]
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
        "\t[小粽,hero]\b[hero]\r[red]噗！咳咳咳咳咳！！",
        "\t[星钰,N1401]\b[this,12,12]小粽！",
        "\t[魔王,E1396]\b[this,6,4]你们几个……我受够了！给我去死吧！！",
        "\t[魔王,E1396]\b[this,6,4]\r[red]神魔决最终式·永劫冰心！！",
        {
            "type": "setEnemy",
            "id": "E1396",
            "name": "hp",
            "value": "50000000000000000000"
        },
        {
            "type": "setEnemy",
            "id": "E1396",
            "name": "atk",
            "value": "2000000000000000000"
        },
        {
            "type": "setEnemy",
            "id": "E1396",
            "name": "def",
            "value": "150000000000000000"
        },
        {
            "type": "callBook"
        },
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "down",
                "down",
                "down"
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
                12,
                12
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                0,
                12
            ]
        },
        "\t[小粽,hero]\b[hero]好快！！",
        "\t[君无天,N1400]\b[this,0,12]不好！来不及了！！",
        "\t[星钰,N1401]\b[this,12,12]小粽！！！！！！！！",
        {
            "type": "playSound",
            "name": "Paralyze1.ogg"
        },
        {
            "type": "screenFlash",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 100,
            "times": 1
        },
        {
            "type": "move",
            "loc": [
                6,
                7
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "down"
            ]
        },
        "\t[小粽,hero]\b[hero]\r[gray]（我要死了吗………）",
        {
            "type": "playSound",
            "name": "Paralyze1.ogg"
        },
        {
            "type": "screenFlash",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 100,
            "times": 1
        },
        {
            "type": "move",
            "loc": [
                6,
                8
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "down"
            ]
        },
        "\t[小粽,hero]\b[hero]\r[gray]（就这么结束了吗....）",
        {
            "type": "playSound",
            "name": "Paralyze1.ogg"
        },
        {
            "type": "screenFlash",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 100,
            "times": 1
        },
        {
            "type": "move",
            "loc": [
                6,
                9
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "down"
            ]
        },
        "\t[小粽,hero]\b[hero]\r[gray]（仙琳…………我要与你在黄泉相见了…………）",
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
        "\t[？？]小粽，小粽？",
        "\t[小粽]嗯？这个声音是……！",
        {
            "type": "setBlock",
            "number": "E962",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "time": 0
        },
        {
            "type": "playBgm",
            "name": "lolita4.mp3",
            "keep": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[仙琳,E962]\b[this,6,11]小粽……我回来了。",
        {
            "type": "callBook"
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
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                0,
                12
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                12,
                12
            ]
        },
        "\t[小粽,hero]\b[hero]！！！！仙！！仙琳？！！",
        "\t[星钰,N1401]\b[this,12,12]仙！仙琳妹妹？？！！",
        "\t[君无天,N1400]\b[this,0,12]这…………究竟是？！！",
        "\t[魔王,E1396]\b[this,6,10]\r[red]不可能！！！这不可能！！你明明已经死了！！",
        "\t[仙琳,E962]\b[this,6,11]我的父亲…………就让我……来结束这一切吧！",
        "\t[仙琳,E962]\b[this,6,11]\r[gold]生命！礼赞！！",
        "\t[魔王,E1396]\b[this,6,10]\r[red]不！不可能！！",
        "\t[魔王,E1396]\b[this,6,10]\r[red]啊啊啊啊啊啊啊啊啊啊啊！！",
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
            "type": "hide",
            "loc": [
                [
                    6,
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
                    6,
                    10
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    0,
                    12
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    12,
                    12
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "setHeroIcon",
            "name": "hero2.png"
        },
        {
            "type": "changePos",
            "loc": [
                6,
                2
            ],
            "direction": "down"
        },
        {
            "type": "setBlock",
            "number": "N1402",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1252",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1250",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1398",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 0
        },
        {
            "type": "setBgFgBlock",
            "name": "bg",
            "number": "X130112",
            "loc": [
                [
                    6,
                    2
                ]
            ]
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
            "type": "playBgm",
            "name": "GG2.mp3",
            "keep": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "仙琳的身躯缓缓的倒在地上，此时她的神色面如金纸……身体愈发虚幻.....。",
        "\t[小粽,N724]\b[this,6,10]仙琳？…………仙琳！",
        "小粽试图呼唤仙琳让她苏醒过来，却只能得到无声的回应…………",
        "\t[星钰,N1250]\b[this,7,8]这…………究竟是怎么一回事…………",
        "\t[君无天,N1252]\b[this,5,8]死者复生…………这是神迹啊！",
        "\t[小粽,N724]\b[this,6,10]仙琳…………你……不要离开我……",
        "\t[小粽,N724]\b[this,6,10]我不想再面临…………悲欢离合了啊！",
        {
            "type": "moveHero",
            "time": 1000,
            "steps": [
                "down",
                "down"
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
                7,
                8
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N1196",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1195",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "time": 0
        },
        "\t[星钰,N1196]\b[this,7,8]好啊！没想到你竟然还没有死！就让我替仙琳妹妹她们来…………",
        "而在此时君无天用自己的右手挡住了星钰面前。",
        "\t[星钰,N1196]\b[this,7,8]父亲大人？为什么……",
        "\t[君无天,N1195]\b[this,5,8]不要阻拦他了，他已经不再是之前的魔王了。",
        "\t[星钰,N1196]\b[this,7,8]可是....父亲大人你上次就是太过信任梦才让罗天.....。",
        "\t[小粽,N724]\b[this,6,10]……………………",
        {
            "type": "choices",
            "text": "\t[小粽]……………………",
            "choices": [
                {
                    "text": "放下之前的过往冤孽",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "flag:求道者",
                            "value": "1",
                            "norefresh": true
                        },
                        "\t[小粽,N724]\b[this,6,10]就听星天前辈的吧。",
                        "\t[星钰,N1196]\b[this,7,8]………………好吧。"
                    ]
                },
                {
                    "text": "冤孽不可饶恕",
                    "action": [
                        {
                            "type": "setValue",
                            "name": "flag:殉道者",
                            "value": "1",
                            "norefresh": true
                        },
                        "\t[君无天,N1195]\b[this,5,8]小粽！何必再因之前的冤孽而蒙蔽自己的双眼，对于有些事情来说，一笑解恩怨才是最好的选择啊！",
                        "\t[小粽,N724]\b[this,6,10]………………那就听星天前辈的。"
                    ]
                }
            ]
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
        "\t[魔王,hero]\b[hero]\r[gray]谢谢你能在够这最后一刻理解我，君阁主。",
        "\t[君无天,N1195]\b[this,5,8]我已经不再是魔塔世界的君阁主了，不用对我说谢。",
        "\t[魔王,hero]\b[hero]\r[gray]哈....是呀。我也不是魔塔世界的魔王了。",
        {
            "type": "moveHero",
            "time": 1000,
            "steps": [
                "down",
                "down",
                "down",
                "down"
            ]
        },
        {
            "type": "setBlock",
            "number": "N1252",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1250",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "time": 0
        },
        "\t[魔王,hero]\b[hero]\r[gray]………………这就是我与梦儿的孩子吗？真是漂亮呀…………",
        "\t[魔王,hero]\b[hero]\r[gray]由于梦儿的死，导致我失去了许多记忆，也包括自己女儿的记忆……",
        "\t[魔王,hero]\b[hero]\r[gray]孩子…………就让我……来。",
        {
            "type": "playBgm",
            "name": "Eternity2.mp3",
            "keep": true
        },
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                6,
                9
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
                7,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                10
            ]
        },
        "\t[小粽,N724]\b[this,6,10]这力量是！……",
        "\t[君无天,N1252]\b[this,5,8]是创造之力！你居然已经领悟了！！",
        "\t[魔王,hero]\b[hero]\r[gray]本来……我是要将你们三人吞噬才能领悟出来然后去复活梦儿…",
        "\t[魔王,hero]\b[hero]\r[gray]但是……在最后一刻……由于她……我的女儿仙琳....是她帮助我....领悟出来这创造之力…………",
        "\t[魔王,hero]\b[hero]\r[gray]其实......我的时日不多了……不过……在生命的最后时刻……我还是尽可能的…………赎罪吧。",
        "\t[小粽,N724]\b[this,6,10]…………",
        "\t[魔王,hero]\b[hero]\r[gray]小粽，在你身上……我看到了曾经的自己…………勇敢，重情，努力拼搏，不服输的性格……的…………赎罪吧",
        "\t[魔王,hero]\b[hero]\r[gray]而且你的过去……也与我大同小异…………",
        "\t[魔王,hero]\b[hero]\r[gray]不过…………结局会不一样的！",
        "\t[魔王,hero]\b[hero]\r[gray]我的梦儿早就死了，但是我的孩子……她一定会幸福的活下去的！",
        "仙琳的眉毛不由自主的颤抖了一下，并且身躯不再虚幻！",
        {
            "type": "setBlock",
            "number": "N1403",
            "loc": [
                [
                    6,
                    9
                ]
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
                7,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                10
            ]
        },
        "\t[星钰,N1250]\b[this,7,8]有效果了！",
        "\t[魔王,hero]\b[hero]\r[gray]呼…………小粽，能答应我最后一件事……好吗？",
        "\t[小粽,N724]\b[this,6,10]……请说……",
        "\t[魔王,hero]\b[hero]在未来…………\\d一定要让她幸福啊！",
        "\t[小粽,N724]\b[this,6,10]\\d嗯！！！",
        "\t[魔王,hero]\b[hero]哈哈哈…………那就好…………那就好啊……",
        "\t[星钰,N1250]\b[this,7,8]看来……故事的最后……这是个好结局呢。",
        "\t[君无天,N1252]\b[this,5,8]………………嗯。",
        "\t[魔王,hero]\b[hero]是呀…………这一切真的是.....",
        {
            "type": "playBgm",
            "name": "holy7.mp3",
            "keep": true
        },
        "\t[？？？？]不，这并不是一个好结局！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                8
            ]
        },
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
        "\t[魔王,hero]\b[hero]\r[red]噗！！",
        "\t[星钰,N1250]\b[this,7,8]啊？！",
        "\t[小粽,N724]\b[this,6,10]魔王！！",
        "\t[君无天,N1252]\b[this,5,8]什么人？！！！",
        "\t[？？？？]难道你已经忘记了你最初的信念了吗？！真是让我失望啊！！！",
        {
            "type": "setBlock",
            "number": "N1196",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1195",
            "loc": [
                [
                    5,
                    8
                ]
            ],
            "time": 0
        },
        {
            "type": "changePos",
            "loc": [
                6,
                8
            ],
            "direction": "up"
        },
        {
            "type": "playSound",
            "name": "138-Darkness01.ogg"
        },
        {
            "type": "animate",
            "name": "attack19",
            "loc": [
                6,
                0
            ]
        },
        {
            "type": "setBlock",
            "number": "N1404",
            "loc": [
                [
                    6,
                    0
                ]
            ],
            "time": 0
        },
        {
            "type": "move",
            "loc": [
                6,
                0
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "down",
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "E1409",
            "loc": [
                [
                    6,
                    2
                ]
            ],
            "time": 0
        },
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
            "type": "callBook"
        },
        "\t[魔王,hero]\b[hero].....为什么....你要这么做！初代勇者大人！！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ]
        },
        "\t[君无天,N1195]\b[this,5,8]什么？当初凭一己之力抗衡整个魔塔世界的初代勇者居然还活着！！",
        "\t[初代勇者,E1409]\b[this,6,2]为什么？你居然还问我为什么？！！你难道忘记自己的真实身份是人类了吗！！",
        "\t[魔王,hero]\b[hero]我当然没有忘记自己身上流淌着的是人类的血脉....我也没有忘记当初我还是人类的时候那段美好的时光。",
        "\t[魔王,hero]\b[hero]但初代勇者大人.....你为什么....要阻止我....复活我的女儿呢！！",
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]那是因为......她身上流淌着魔物的血液啊！！！",
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
        "\t[魔王,hero]\b[hero]只是......因为......她流淌着魔物的血液就要.......\r[red]完全否定她的存在吗！！",
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
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]你懂什么！你这种只想偏安一隅的小辈懂什么！！你知不知道当年魔物入侵人类世界的时候，弱小的人类在面对比他们强悍无数倍魔物时那绝望而无助的模样！！",
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]如果不是我为了获得保护人类的力量而且自甘变成魔物这幅模样，你们人类早就灭亡了！",
        "\t[小粽,N724]\b[this,6,10]你在说什么？明明人类历史是这样描述的——\\d三十年前的天灾近乎毁灭了这个世界，随着天灾的到来魔物因此而来，同时魔物们在世界的中心处修建了一座巨大的高塔就再也没有出来过！！",
        "\t[小粽,N724]\b[this,6,10]\\d而且从来也没有初代勇者的这段历史！！",
        "\t[初代勇者,E1409]\b[this,6,2]三十年前？天灾？魔物因此而来？并在那个时候修建高塔？没有初代勇者的历史？",
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！！",
        "\t[小粽,N724]\b[this,6,10].....这有什么好笑的？！",
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]哈哈哈哈哈哈......没想到啊.....没想到啊！现在的人类后生竟然都已忘记当年的伤痛，以一个这么可笑的借口来妄图掩盖真相？！！真是....",
        "\t[初代勇者,E1409]\b[this,6,2]\r[red]成何体统！！",
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
        "\t[星钰,N1196]\b[this,7,8]\r[red]唔啊！！！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ]
        },
        "\t[君无天,N1195]\b[this,5,8]星钰！！",
        "\t[星钰,N1196]\b[this,7,8]好...好强大的威严....喘不过气了.....。",
        "\t[初代勇者,E1409]\b[this,6,2]我给你最后一次机会，你是愿意继续完成造神计划，还是与所有的魔物一起\r[red]葬身于此！！",
        "\t[魔王,hero]\b[hero]..................",
        "\t[魔王,hero]\b[hero]...........................",
        "\t[魔王,hero]\b[hero]................................",
        "\t[小粽,N724]\b[this,6,10]....魔王前辈。",
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
            "type": "changePos",
            "loc": [
                6,
                8
            ],
            "direction": "down"
        },
        "魔王回头看了小粽一眼....再看向了沉睡在小粽怀里的仙琳。魔王那对任何人都是冷若冰霜的眼神却在此时变得无比温柔。",
        "\t[魔王,hero]\b[hero]............叫我岳父吧。虽然我可能没有这个资格。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                10
            ]
        },
        "\t[小粽,N724]\b[this,6,10]我明白了.....。",
        {
            "type": "changePos",
            "loc": [
                6,
                8
            ],
            "direction": "up"
        },
        "魔王会心一笑，随之转过头来，将他的利刃指向了初代勇者！",
        "\t[初代勇者,E1409]\b[this,6,2]这就是你的选择吗？看来你担任了这么久的魔物之主早已忘记自己原本的身份了！！居然想庇护魔物！！",
        "\t[魔王,hero]\b[hero]\\d人又如何，魔物又如何？有的人类拥有比魔物还要奸诈的内心与计谋，而有的魔物却拥有比至善之人还要纯洁无暇的内心！",
        "\t[魔王,hero]\b[hero]\\d人与魔，本无差别，他们都拥有情感，都能够相互理解与包容对方的不足。也正是因为情感的存在，梦儿为了救我付出了自己的生命。",
        "\t[魔王,hero]\b[hero]\\d正是因为情感的存在，当初仙琳才会为小粽付出自己生命的代价去拯救他。",
        "\t[魔王,hero]\b[hero]\\d正是因为情感的存在，小粽才能与星钰，君无天等人一同并肩作战！",
        "\t[魔王,hero]\b[hero]\\d也正是因为情感的存在，才让我！拥有必须阻止你的理由！！",
        {
            "type": "vibrate",
            "time": 500,
            "async": true
        },
        {
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        "\t[魔王,hero]\b[hero]初代勇者，我曾经敬重你，仰慕你，但如今你的行为已经与真正的勇者精神背道而驰了！！所以——",
        "\t[魔王,hero]\b[hero]\\d决一死战吧！！",
        "\t[初代勇者,E1409]\b[this,6,2]你是以以前人类的身份与我决战还是以现在魔王的身份呢？",
        "\t[魔王,hero]\b[hero]身份并不重要，重要的是要拥有一颗不忘自我的初心！！",
        "\t[魔王,hero]\b[hero]小粽！星钰！君无天！我以曾经勇者和魔王的命令要求你们！——\r[red]不要插手！保护好自己！！",
        "\t[君无天,N1195]\b[this,5,8]可是....",
        "\t[魔王,hero]\b[hero]\r[red]闭嘴！立刻执行！！",
        "\t[君无天,N1195]\b[this,5,8]是...魔王大人！",
        "\t[君无天,N1195]\b[this,5,8]小粽，星钰，我们后退，保护好仙琳。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    10
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
                    8
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    8
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1398",
            "loc": [
                [
                    6,
                    12
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1403",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1195",
            "loc": [
                [
                    5,
                    10
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
                    10
                ]
            ],
            "time": 0
        },
        "\t[初代勇者,E1409]\b[this,6,2]很好，非常好！既然如此！！那你就与他们一起死吧！！",
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'魔王'"
        },
        "\t[魔王,hero]\b[hero]以吾之血，缚令诸神！",
        "\t[初代勇者,E1409]\b[this,6,2]以燃烧自己的生命之火来换取与本座抗衡的力量吗！那就让本座看看你究竟走到哪一步！！",
        {
            "type": "showStatusBar"
        },
        "提示：接下来请操作魔王击败初代勇者吧，不用担心血量的问题，这里是剧情杀。",
        "魔王燃烧了自己的生命之火，血量提升五十万京！全属性提升五十京！！",
        {
            "type": "addValue",
            "name": "status:hp",
            "value": "5000000000000000000000"
        },
        {
            "type": "addValue",
            "name": "status:atk",
            "value": "500000000000000000"
        },
        {
            "type": "addValue",
            "name": "status:def",
            "value": "500000000000000000"
        },
        {
            "type": "addValue",
            "name": "status:mdef",
            "value": "500000000000000000"
        },
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
                                                    "condition": "(flag:boss439F===4)",
                                                    "true": [
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
                                                        "\t[君无天,N1195]\b[this,5,10]这力量！！完全无法匹敌！！难道这就是神灵真正的力量吗！！",
                                                        "\t[魔王,hero]\b[hero]也罢....既然你执意如此.....那就",
                                                        "\t[魔王,hero]\b[hero]\r[red]结束这场闹剧吧！！！初代勇者！！",
                                                        "\t[初代勇者,E1409]\b[this,6,2]......来吧！",
                                                        {
                                                            "type": "changePos",
                                                            "loc": [
                                                                6,
                                                                3
                                                            ],
                                                            "direction": "down"
                                                        },
                                                        {
                                                            "type": "playBgm",
                                                            "name": "GG6.mp3",
                                                            "keep": true
                                                        },
                                                        "\t[魔王,hero]\b[hero]小粽.......剩下的一切.....就交给你了！就让我.....终结这一切吧！！",
                                                        {
                                                            "type": "playSound",
                                                            "name": "cgefc01.wav"
                                                        },
                                                        {
                                                            "type": "animate",
                                                            "name": "unexpected1",
                                                            "loc": [
                                                                6,
                                                                12
                                                            ]
                                                        },
                                                        {
                                                            "type": "changePos",
                                                            "loc": [
                                                                6,
                                                                3
                                                            ],
                                                            "direction": "up"
                                                        },
                                                        "\t[魔王,hero]\b[hero]\r[aqua]............神魔决终式·永....劫.....冰.......心！",
                                                        "魔王完全燃烧自己的生命之火，血量提升一百万京！全属性提升五十京！！",
                                                        {
                                                            "type": "addValue",
                                                            "name": "status:hp",
                                                            "value": "10000000000000000000000"
                                                        },
                                                        {
                                                            "type": "addValue",
                                                            "name": "status:atk",
                                                            "value": "500000000000000000"
                                                        },
                                                        {
                                                            "type": "addValue",
                                                            "name": "status:def",
                                                            "value": "500000000000000000"
                                                        },
                                                        {
                                                            "type": "addValue",
                                                            "name": "status:mdef",
                                                            "value": "500000000000000000"
                                                        },
                                                        "\t[初代勇者,E1409]\b[this,6,2]等等！！你这力量！！不可能！！",
                                                        "\t[魔王,hero]\b[hero]结束了！",
                                                        "\t[君无天,N1195]\b[this,5,10]完全燃烧了自己的生命之火！！魔王！！！！",
                                                        "\t[小粽,N1398]\b[this,6,12]岳父！！！！！",
                                                        {
                                                            "type": "hideStatusBar"
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
                                                            "id": "E1409"
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
                                                            "type": "sleep",
                                                            "time": 500
                                                        },
                                                        {
                                                            "type": "changeFloor",
                                                            "floorId": "MT441",
                                                            "loc": [
                                                                6,
                                                                7
                                                            ],
                                                            "direction": "up",
                                                            "time": 0
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss439F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E1409"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss439F",
                                                                    "value": "4"
                                                                },
                                                                "\t[魔王,hero]\b[hero]初代勇者，在你眼中如果对于你来说我是属于魔物这邪恶一方的话，那对于我来说你则是魔物邪恶的一方了。",
                                                                "\t[初代勇者,E1409]\b[this,6,2]既然你已经心知肚明，那又何必与我在此浪费口舌！",
                                                                "\t[魔王,hero]\b[hero]如果真是这样的话，那我为何还要浪费口舌对你说三道四有关正义与邪恶呢！",
                                                                "\t[初代勇者,E1409]\b[this,6,2]................",
                                                                "\t[初代勇者,E1409]\b[this,6,2]看来，你在担任魔王这个角色之后....已经拥有蛊惑人心的能力了！我是不会信服的！",
                                                                "\t[初代勇者,E1409]\b[this,6,2]热身该结束了！下一招就结束这一切吧！！",
                                                                "初代勇者全属性大幅度提升！！并且同时获得三连击，破甲，净化技能！！",
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1409",
                                                                    "name": "special",
                                                                    "value": "[43,1,8,5,9,7]"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1409",
                                                                    "name": "hp",
                                                                    "value": "200000000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1409",
                                                                    "name": "atk",
                                                                    "value": "6500000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E1409",
                                                                    "name": "def",
                                                                    "value": "850000000000000000"
                                                                },
                                                                {
                                                                    "type": "update"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss439F===2)",
                                                                    "true": [
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E1409"
                                                                        },
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss439F",
                                                                            "value": "3"
                                                                        },
                                                                        "\t[魔王,hero]\b[hero]魔物当初入侵人类世界这一件事情并不完全代表他们就是邪恶的，也许他们是因为其他原因.....",
                                                                        "\t[初代勇者,E1409]\b[this,6,2]够了！给我住口！！看来我当初提拔你成为万魔之主是我这一生最大的错误！！",
                                                                        "初代勇者全属性提升！",
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1409",
                                                                            "name": "hp",
                                                                            "value": "75000000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1409",
                                                                            "name": "atk",
                                                                            "value": "3800000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E1409",
                                                                            "name": "def",
                                                                            "value": "530000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss439F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1409"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss439F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[魔王,hero]\b[hero]初代勇者，你可要知道，这个世界并不只是非黑即白！",
                                                                                "\t[魔王,hero]\b[hero]魔物并不全是邪恶的，同样人类不也全部都是善良的。",
                                                                                "\t[魔王,hero]\b[hero]如果只以善恶作为评判一个人的标准的话是完全不可取的。",
                                                                                "\t[魔王,hero]\b[hero]因为评判行为善恶的标准在于动机！",
                                                                                "\t[初代勇者,E1409]\b[this,6,2]什么动机！我之前都说过！魔物侵犯了我们的家园！他们就是邪恶的象征！",
                                                                                "初代勇者获得先攻，反击属性",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1409",
                                                                                    "name": "special",
                                                                                    "value": "[43,1,8]"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                "\t[初代勇者,E1409]\b[this,6,2]你应该知道我有能力提拔你，那我也同样有能力毁灭你！",
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E1409"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss439F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[初代勇者,E1409]\b[this,6,2]的确有点水平，看来你并不是完全依靠当初我给予你的力量才到现在这一步的。",
                                                                                "\t[初代勇者,E1409]\b[this,6,2]来吧！就让我们一起重新演绎那经典的——\r[gold]正义的勇者击败邪恶的魔王的故事吧！",
                                                                                "初代勇者全属性提升！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1409",
                                                                                    "name": "hp",
                                                                                    "value": "70000000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1409",
                                                                                    "name": "atk",
                                                                                    "value": "3500000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E1409",
                                                                                    "name": "def",
                                                                                    "value": "525000000000000000"
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
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17,  0, 17, 17],
    [ 17, 17, 17, 17, 17, 17,312, 17, 17, 17,  0, 17, 17],
    [ 17, 17, 17, 17, 17, 17,1396, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,312,312,1398,312,312, 17, 17, 17, 17],
    [ 17, 17, 17,312,312,1195,312,1196,312,312, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17,312,312,312,312,312, 17,312,312,312,312,312, 17],
    [312,312,312,312,312,312,312,312,312,312,312,312,312],
    [312,312,312,312,312,312,  0,312,312,312,312,312,312]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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

]
}