main.floors.MT441=
{
    "floorId": "MT441",
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
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "GG6.mp3",
            "keep": true
        },
        {
            "type": "setCurtain",
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
                5,
                10
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
                12
            ]
        },
        "\t[初代勇者,E1409]\b[this,6,3]\r[gray]没想到.....我竟然会败在你的手里.....真是讽刺啊！",
        "\t[初代勇者,E1409]\b[this,6,3]\r[gray]曾经的初代勇者.....终究沉寂于那不可视的黑暗之中.....。",
        "\t[初代勇者,E1409]\b[this,6,3]\r[gray]真正的黑暗.....将会彻底侵蚀这个世界.....而我却再也不能阻止这一切了.......。",
        "\t[初代勇者,E1409]\b[this,6,3]\r[gray]而人类.....也会...就此终结.......",
        "\t[初代勇者,E1409]\b[this,6,3]\r[gray]哈哈哈哈哈哈.......呜呜呜呜....哈哈哈哈......",
        {
            "type": "setBlock",
            "number": "N1404",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1406",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1407",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1408",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1409",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1410",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1411",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1412",
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
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "N1413",
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
            "time": 500
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        {
            "type": "changePos",
            "loc": [
                6,
                7
            ],
            "direction": "left"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "changePos",
            "loc": [
                6,
                7
            ],
            "direction": "down"
        },
        "\t[星钰,N1196]\b[this,7,10]魔....魔王.......！",
        "魔王缓缓升起右手示意不要再说话了",
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
            "type": "moveHero",
            "time": 1000,
            "steps": [
                "down"
            ]
        },
        {
            "type": "setBlock",
            "number": "X130112",
            "loc": [
                [
                    6,
                    8
                ]
            ],
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
        {
            "type": "moveHero",
            "time": 1000,
            "steps": [
                "down"
            ]
        },
        {
            "type": "setBlock",
            "number": "X130112",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "time": 0
        },
        "\t[魔王,hero]\b[hero]\r[red]还差...哈....哈...还差.......哈...最后....一步...",
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
        "\t[魔王,hero]\b[hero]\r[red]噗！！！",
        {
            "type": "setBlock",
            "number": "X130113",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 0
        },
        "\t[魔王,hero]\b[hero]\r[red]梦儿的孩子....就可以...。",
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
        "\t[魔王,hero]\b[hero]\r[red]噗！！！",
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
            "type": "hide",
            "loc": [
                [
                    6,
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
                    5,
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
                    7,
                    10
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1400",
            "loc": [
                [
                    5,
                    9
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "N1401",
            "loc": [
                [
                    7,
                    9
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
                    10
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
                    11
                ]
            ],
            "time": 0
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
        "星钰和君无天缓缓扶起魔王，小粽同时将要怀中的仙琳抱给魔王。",
        "\t[魔王,hero]\b[hero]\r[red]梦儿....等我将我们的女儿复活....我就去你那里赎罪.....",
        {
            "type": "playBgm",
            "name": "disorder10.mp3",
            "keep": true
        },
        "\t[？？]\r[red]没有这个必要了，因为一切都将终结！！",
        {
            "type": "animate",
            "name": "attack9",
            "loc": "hero",
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
        "\t[魔王,hero]\b[hero]\r[red]！！！噗！！",
        "一只穿越了空间的右手直接刺破了魔王的胸膛！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                9
            ],
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
                6,
                11
            ]
        },
        {
            "type": "playSound",
            "name": "139-Darkness02.ogg"
        },
        {
            "type": "animate",
            "name": "attack18",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "setBlock",
            "number": "E1414",
            "loc": [
                [
                    6,
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
                    9
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
                    9
                ]
            ],
            "time": 0
        },
        {
            "type": "changePos",
            "loc": [
                6,
                9
            ],
            "direction": "up"
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
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                9
            ],
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
                6,
                11
            ]
        },
        "\t[小粽/星钰/君无天]\r[red]谶祖？？？！！！！！这不可能！！！",
        "\t[魔王,hero]\b[hero]\r[red]居然！是你！！",
        "\t[谶祖？,E1414]\b[this,6,8]谶祖？好怀念的名字.....没想到在这方世界居然还有记得谶祖的人。",
        "\t[小粽/星钰/君无天]\r[red]不可能！这不可能！！！你明明已经被梦给彻底消灭了！为什么会完好无损！！",
        "\t[谶祖？,E1414]\b[this,6,8]...............原来如此，谶祖这个副体已经被这方世界的人给消灭掉了。看来这个世界除了一些既定之人之外还是有不少大能者呢。",
        "\t[谶祖？,E1414]\b[this,6,8].......原来如此，我不在的这段时间你这个副体干了这么多的事情啊，虽然还没有达到我当初给你定的要求，但是足够了。",
        "\t[小粽/星钰/君无天]\r[red]你...究竟在说些什么！！",
        "\t[谶祖？,E1414]\b[this,6,8]安静一点，蝼蚁们！",
        {
            "type": "playSound",
            "name": "stop1.wav"
        },
        {
            "type": "changeFloor",
            "floorId": "MT442",
            "loc": [
                6,
                9
            ],
            "direction": "up",
            "time": 0
        },
        "这位疑似谶祖的男子随口一言，此处的空间瞬间封锁与压制，在场所有人无论是身体，还是思维，都不得动弹！",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                8
            ]
        },
        "\t[谶祖？,E1414]\b[this,6,8]嗯........副体的记忆已经被我全部取回，那么就给予你们能够暂时活动吧！顺便也解决一些小事。",
        {
            "type": "playSound",
            "name": "stop1.wav"
        },
        {
            "type": "changeFloor",
            "floorId": "MT441",
            "loc": [
                6,
                9
            ],
            "direction": "up",
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
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                9
            ],
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
                6,
                11
            ]
        },
        "\t[众人]刚刚发生了什么？！",
        "\t[谶祖？,E1414]\b[this,6,8]你还记得当初我对你的预言吗？名为魔王的男子。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
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
        "\t[谶祖？,E1414]\b[this,6,8]\r[gray]我之前说过，未来你会失去你珍视的事物，以前如此，而现在亦是如此。",
        "\t[魔王,hero]\b[hero]\r[red]你....你！",
        "\t[谶祖？,E1414]\b[this,6,8]\r[gray]在你死前我可以告诉你一个秘密，那就是——",
        "\t[谶祖？,E1414]\b[this,6,8]\r[red]你与仙梦的之间种种因缘，都是由我一人来书写的！",
        "\t[魔王,hero]\b[hero]什…………么！这怎么……可能！",
        "\t[谶祖？,E1414]\b[this,6,8]\r[red]宿命的时针终究流入时间的长河,而人们却总是在探寻真理的道路上漫步。",
        "\t[谶祖？,E1414]\b[this,6,8]\r[red]但是......无论你们未来能做出什么，都只会在既定的道路上徘徊。",
        "\t[谶祖？,E1414]\b[this,6,8]\r[red]因为......我已经看到了你们的过去，现在，以及未来！",
        "\t[谶祖？,E1414]\b[this,6,8]这几句话，不知道你有没有听说过呢？",
        "\t[魔王,hero]\b[hero]这是初代勇者当初自言自语所说的话？！！你怎么可能知道！！",
        "\t[谶祖？,E1414]\b[this,6,8]答案很简单，因为你们每一个人都是棋盘上的棋子，而你们这些棋子却认为自己才是那司管一切的棋手，殊不知你们只能算是弃子！",
        "\t[邪神·谶,E1414]\b[this,6,8]而我才是那司管一切的棋手——\r[gray]邪神·谶",
        "\t[魔王,hero]\b[hero]………………这……这！",
        "\t[邪神·谶,E1414]\b[this,6,8]不知道你还记不得当初你打破永劫冰牢后，却没有发现任何魔王与谶祖的痕迹呢？",
        "\t[魔王,hero]\b[hero]！！！！！",
        "\t[邪神·谶,E1414]\b[this,6,8]没错，就是你猜测的那样，上一任魔王根本就不存在，而谶祖被冰封只是给世人演了一场戏而已。",
        "\t[邪神·谶,E1414]\b[this,6,8]而你能够顺理成章的成为魔王，不仅是运气原因，更是——\r[red]我当初对初代勇者的思维控制啊！！",
        "\t[魔王,hero]\b[hero]什么！！！！！",
        "\t[邪神·谶,E1414]\b[this,6,8]是我控制圣羽洛斯将你打成重伤，然后引诱仙梦来救你去初代勇者的空间，在那之后就让初代勇者骗你去完成那所谓的造神计划，为我对情感的测试提供充足的帮助！！",
        "\t[魔王,hero]\b[hero]\r[red]………………这……这....不！不可能！！不可能！！！！",
        "\t[邪神·谶,E1414]\b[this,6,8]好了，废话说的一些多了。该结束这一切了！",
        "\t[邪神·谶,E1414]\b[this,6,8]感谢你，替我表演了这么完美的演出，作为奖励……",
        "\t[邪神·谶,E1414]\b[this,6,8]\r[red]你就成为我力量的一部分吧！",
        {
            "type": "playBgm",
            "name": "GG5.mp3",
            "keep": true
        },
        "\t[魔王,hero]\b[hero]\r[red]…………哈哈哈………………我苦苦追寻…………最终只是换来…………黄……粱……一……梦…………吗…………",
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
        "时间回到十七年前在他成为魔王不久之后.....",
        {
            "type": "changeFloor",
            "floorId": "MT443",
            "loc": [
                6,
                155
            ],
            "time": 500
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
                "type": "setCurtain",
                "time": 500
            },
            "\t[邪神·谶,E1414]\b[this,6,8]感谢你，替我表演了这么完美的演出，作为奖励……",
            "\t[邪神·谶,E1414]\b[this,6,8]\r[red]你就成为我力量的一部分吧！",
            "\t[魔王,hero]\b[hero]\r[red]…………哈哈哈………………我苦苦追寻…………最终只是换来…………黄……粱……一……梦…………吗…………",
            {
                "type": "playSound",
                "name": "138-Darkness01.ogg"
            },
            {
                "type": "animate",
                "name": "attack19",
                "loc": "hero"
            },
            {
                "type": "changePos",
                "loc": [
                    2,
                    123
                ]
            },
            "魔王的身躯正在以肉眼可见的速度化为尘埃………",
            "年少有为却遇悲欢离合 ，十多年计划最终只是换来一场黄粱梦…………",
            "由于自己的一意孤行，导致所有人都离他而去…………",
            "即使最后醒悟过来，粉碎了初代勇者的阴谋，但是这只不过是邪神为他设定最后的使命罢了.....。",
            "\r[red]魔王——就此陨落！",
            "\t[邪神·谶,E1414]\b[this,6,8]造神计划！就此落幕！！",
            "\t[邪神·谶,E1414]\b[this,6,8]接下来，就让你们看看真正神灵的力量吧！",
            "\t[邪神·谶,E1414]\b[this,6,8]\r[red]蝼蚁们！！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
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
            "他们本以为战胜了魔王就能够粉碎这一切，但谁也没有想到会是这样的结局…………",
            "他们本以为魔王才是这一切的幕后者，但谁也没想到魔王也只是牺牲品…………",
            "他们本以为最后的结局是魔王以自己的生命换得仙琳新生，但谁也没想到换来的却是与之前同样的结局…………",
            "而现在……真正的幕后黑手已经揭露出那可吞噬一切光明的獠牙，准备收获那早已成熟的果实……",
            "而小粽他们…………又该何去何从呢…………",
            "不过…………在遥远的彼岸，终会有那希翼的灯火会照耀那已被黑暗侵袭的世界。",
            "敬请期待弃坑立粽传最终章——永不言败！",
            "第五章已完结,是否记录分数,或者继续前行?",
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "/=",
                "value": "1000000000000"
            },
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
                                        "reason": "第五章 黄粱一梦（全绿难度）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "第五章 黄粱一梦（0绿难度）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "继续前行",
                        "action": [
                            {
                                "type": "changeFloor",
                                "floorId": "MT449",
                                "loc": [
                                    6,
                                    111
                                ],
                                "time": 0
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
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,130112, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,1409, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,  0,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,312,312,  0,  0,312, 17, 17, 17, 17],
    [ 17, 17, 17,312,312,  0,  0,  0,312,312, 17, 17, 17],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17],
    [ 17,312,312,312,312,1195,  0,1196,312,312,312,312, 17],
    [312,312,312,312,312,312,1403,312,312,312,312,312,312],
    [312,312,312,312,312,312,1398,312,312,312,312,312,312]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,312,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,130112,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,130113,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,312,312,130112,130120,312,  0,  0,  0,  0],
    [  0,  0,  0,312,312,130114,312,130128,312,312,  0,  0,  0],
    [  0,  0,312,312,312,312,  0,312,312,312,312,  0,  0],
    [  0,312,312,312,312,312,312,312,312,312,312,312,  0],
    [312,312,312,312,312,312,312,312,312,312,312,312,312],
    [312,312,312,312,312,312,312,312,312,312,312,312,312]
],
    "fg2map": [

]
}