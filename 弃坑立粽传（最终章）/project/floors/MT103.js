main.floors.MT103=
{
    "floorId": "MT103",
    "title": "登天之巅",
    "name": "登天之巅",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 100,
    "defaultGround": "ground",
    "bgm": "battle6.mp3",
    "firstArrive": [
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    13
                ]
            ],
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    2,
                    7
                ]
            ],
            "time": 0
        },
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    3
                ]
            ],
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
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]呼...看来这里就是登天之巅的尽头了！",
        "\t[小粽,hero]\b[hero]那么，就让我看看，剑神星尊的真实实力吧！",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up",
                "up",
                "up"
            ]
        },
        {
            "type": "moveViewport",
            "time": 300,
            "steps": [
                "up",
                "up",
                "up",
                "up"
            ]
        },
        {
            "type": "playBgm",
            "name": "hope1.mp3"
        },
        "\t[堇,E671]\b[this,7,1]...........你来了。",
        "\t[堇,E671]\b[this,7,1]你能到达我的面前，就说明你已经击败了我那四个早与剑道背道而驰的手下。",
        "\t[小粽,hero]\b[hero]侥幸和一些机缘罢了，不值一提。",
        "\t[堇,E671]\b[this,7,1]侥幸与机缘吗？.....呵，有意思，那么........",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                7,
                1
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]这股看似锋锐却内敛的剑气......不愧是四星尊天的剑神星尊！",
        "\t[堇,E671]\b[this,7,1]....呵,过奖了,你所修的剑道也有自己的独特之处。",
        "\t[堇,E671]\b[this,7,1]我侧重的剑走偏锋,而你给我的是那种均衡之感。",
        "\t[堇,E671]\b[this,7,1]看似平凡，却不平庸！",
        "\t[小粽,hero]\b[hero]没有你之前对我的指点，恐怕我也不可能领悟到属于我自己的剑道。",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                7,
                1
            ]
        },
        "\t[堇,E671]\b[this,7,1]来吧，就让我看看，你能给我带来什么样的剑道！",
        "\t[小粽,hero]\b[hero]好！",
        {
            "type": "playBgm",
            "name": "battle6.mp3"
        },
        "提示：即将进入特殊动作战，请准备好爆米花和汽水。",
        "当然你也可以选择跳过直接与BOSS交战，不过为了省时间剧情也直接跳过了。",
        {
            "type": "choices",
            "text": "是否跳过",
            "choices": [
                {
                    "text": "不跳过",
                    "action": [
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "up",
                                "up",
                                "up",
                                "up",
                                "up"
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                7,
                                1
                            ],
                            "time": 100,
                            "keep": true,
                            "steps": [
                                "down",
                                "down",
                                "down",
                                "down"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "attack8",
                            "loc": [
                                7,
                                6
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Thunder03.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack6",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "vibrate",
                            "time": 100,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 110,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 10,
                            "async": true,
                            "steps": [
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "loc": [
                                [
                                    7,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                7,
                                5
                            ],
                            "time": 10,
                            "keep": true,
                            "steps": [
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 100,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 20,
                            "async": true,
                            "steps": [
                                "up",
                                "up",
                                "up"
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                7,
                                3
                            ],
                            "time": 20,
                            "keep": true,
                            "steps": [
                                "down",
                                "down"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 50,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill01.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack7",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill16.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack4",
                            "loc": [
                                7,
                                5
                            ],
                            "async": true
                        },
                        {
                            "type": "vibrate",
                            "time": 200,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 1000,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 30,
                            "async": true,
                            "steps": [
                                "left",
                                "left",
                                "left",
                                "left"
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "left",
                            "loc": [
                                [
                                    7,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                7,
                                5
                            ],
                            "time": 30,
                            "keep": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "skill16.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack4",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 50,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 30,
                            "async": true,
                            "steps": [
                                "down",
                                "down",
                                "down",
                                "down",
                                "down"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 100,
                            "noSkip": true
                        },
                        {
                            "type": "turnBlock",
                            "direction": "down",
                            "loc": [
                                [
                                    4,
                                    5
                                ]
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                4,
                                5
                            ],
                            "time": 30,
                            "keep": true,
                            "steps": [
                                "left",
                                "down",
                                "down",
                                "down"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 50,
                            "noSkip": true
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                3,
                                10
                            ],
                            "direction": "right"
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                3,
                                10
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "sleep",
                            "time": 50,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "cgefc01.wav"
                        },
                        {
                            "type": "animate",
                            "name": "unexpected1",
                            "loc": [
                                3,
                                8
                            ],
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 100,
                            "noSkip": true
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
                            "type": "animate",
                            "name": "attack8",
                            "loc": [
                                3,
                                8
                            ],
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "time": 300,
                            "async": true,
                            "steps": [
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "vibrate",
                            "time": 200,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 250,
                            "noSkip": true
                        },
                        {
                            "type": "turnBlock",
                            "loc": [
                                [
                                    3,
                                    8
                                ]
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                3,
                                8
                            ],
                            "time": 10,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "backward",
                                "backward",
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 150,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "emmslow",
                            "loc": [
                                3,
                                3
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                3,
                                3
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "forward"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 500,
                            "async": true,
                            "steps": [
                                "up",
                                "up",
                                "up",
                                "up"
                            ]
                        },
                        "\t[堇,E671]\b[this,3,4]看来,我还是小看你了。",
                        "\t[堇,E671]\b[this,3,4]你的剑道与上次相比又有了质的飞跃。",
                        "\t[小粽,hero]\b[hero]哈！多谢夸奖。",
                        "\t[堇,E671]\b[this,3,4]接下来，我可要认真起来了,小心点。",
                        {
                            "type": "sleep",
                            "time": 600,
                            "noSkip": true
                        },
                        {
                            "type": "jump",
                            "from": [
                                3,
                                4
                            ],
                            "to": [
                                3,
                                7
                            ],
                            "time": 200,
                            "keep": true,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 250,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "attack8",
                            "loc": [
                                3,
                                9
                            ],
                            "async": true
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                3,
                                9
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "backward",
                                "backward",
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 250,
                            "noSkip": true
                        },
                        {
                            "type": "turnBlock",
                            "direction": "left",
                            "loc": [
                                [
                                    3,
                                    7
                                ]
                            ]
                        },
                        {
                            "type": "jump",
                            "from": [
                                3,
                                7
                            ],
                            "to": [
                                8,
                                6
                            ],
                            "time": 300,
                            "keep": true,
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "062-Swing01.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack10",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "time": 10,
                            "async": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right",
                                "right",
                                "right",
                                "down"
                            ]
                        },
                        {
                            "type": "turnBlock",
                            "direction": "left",
                            "loc": [
                                [
                                    8,
                                    6
                                ]
                            ]
                        },
                        {
                            "type": "animate",
                            "name": "attack5",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                6
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                7
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                7
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                8
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                10,
                                8
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                10,
                                9
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "move",
                            "loc": [
                                11,
                                9
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "turnBlock",
                            "direction": "right"
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                10,
                                9
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "sleep",
                            "time": 50
                        },
                        {
                            "type": "move",
                            "loc": [
                                11,
                                10
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "left"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                10,
                                10
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "move",
                            "loc": [
                                10,
                                10
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "left"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                9,
                                10
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "move",
                            "loc": [
                                10,
                                11
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "left"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                9,
                                11
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                11
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "left"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                11
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                12
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "left"
                            ]
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "playSound",
                            "name": "Attack04.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "160-Skill04.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 150
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
                                8,
                                12
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "down"
                            ]
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
                            "type": "changePos",
                            "loc": [
                                9,
                                12
                            ],
                            "direction": "left"
                        },
                        {
                            "type": "moveHero",
                            "time": 100,
                            "async": true,
                            "steps": [
                                "left"
                            ]
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
                            "type": "sleep",
                            "time": 350
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
                            "type": "sleep",
                            "time": 200
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    13
                                ]
                            ]
                        },
                        "\t[小粽,hero]\b[hero]不好！！！",
                        "\t[堇,E671]\b[this,8,13]破！",
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
                            "type": "sleep",
                            "time": 110,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Wind01.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "fast",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "moveHero",
                            "time": 10,
                            "async": true,
                            "steps": [
                                "up",
                                "up",
                                "up",
                                "up",
                                "up",
                                "up"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "steps": [
                                "down"
                            ]
                        },
                        {
                            "type": "vibrate",
                            "time": 200
                        },
                        {
                            "type": "sleep",
                            "time": 110,
                            "noSkip": true
                        },
                        "\t[堇,E671]\b[this,8,13]剑,是内化于心，外放于行。",
                        "\t[堇,E671]\b[this,8,13]虽然技巧很好，但是其蕴含的剑气还是太过孱弱。",
                        "\t[堇,E671]\b[this,8,13]继续，让我看看你究竟能给我带来些什么！",
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                8,
                                13
                            ],
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "jump",
                            "from": [
                                8,
                                13
                            ],
                            "to": [
                                8,
                                7
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "157-Skill01.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack12",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill02.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack13",
                            "loc": [
                                8,
                                10
                            ],
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 501,
                            "noSkip": true
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                13
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "turnBlock",
                            "direction": "down",
                            "loc": [
                                [
                                    8,
                                    7
                                ]
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                8,
                                7
                            ],
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "jump",
                            "from": [
                                8,
                                7
                            ],
                            "to": [
                                8,
                                13
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Thunder03.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack6",
                            "loc": [
                                8,
                                10
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill16.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack4",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 501,
                            "noSkip": true
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                7
                            ],
                            "direction": "down"
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    8,
                                    13
                                ]
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                8,
                                13
                            ],
                            "time": 500,
                            "async": true
                        },
                        {
                            "type": "jump",
                            "from": [
                                8,
                                13
                            ],
                            "to": [
                                8,
                                7
                            ],
                            "time": 500,
                            "keep": true,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Thunder03.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack6",
                            "loc": [
                                8,
                                10
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill16.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack4",
                            "loc": "hero",
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 501,
                            "noSkip": true
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                13
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "turnBlock",
                            "direction": "down",
                            "loc": [
                                [
                                    8,
                                    7
                                ]
                            ]
                        },
                        "\t[小粽,hero]\b[hero]（不能再保留实力了,直接速战速决！）",
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "moveHero",
                            "time": 10,
                            "steps": [
                                "up",
                                "up",
                                "up",
                                "up",
                                "up"
                            ]
                        },
                        "\t[小粽,hero]\b[hero]刀剑乱舞！",
                        "\t[堇,E671]\b[this,8,7]！！！",
                        {
                            "type": "sleep",
                            "time": 200,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "154-Support12.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "defend2",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "attack3",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill01.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "154-Support12.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "defend2",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "154-Support12.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "defend2",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "154-Support12.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "defend2",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "154-Support12.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "defend2",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 90,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 45,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "Attack08.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "cannon02.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 45,
                            "noSkip": true
                        },
                        {
                            "type": "playSound",
                            "name": "skill01.ogg"
                        },
                        {
                            "type": "sleep",
                            "time": 300,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "hand",
                            "loc": [
                                8,
                                7
                            ],
                            "async": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                7
                            ],
                            "time": 10,
                            "keep": true,
                            "steps": [
                                "backward",
                                "backward",
                                "backward",
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        "\t[堇,E671]\b[this,8,7]唔！",
                        {
                            "type": "moveHero",
                            "time": 200,
                            "steps": [
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 300,
                            "noSkip": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                1
                            ],
                            "time": 800,
                            "keep": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 300,
                            "noSkip": true
                        },
                        "\t[堇,E671]\b[this,8,4]....好！很好！！不错的剑法",
                        "\t[堇,E671]\b[this,8,4]接下来就让你看看我自创的剑技！",
                        "\t[小粽,hero]\b[hero]（不好，她居然还有后手）",
                        "\t[小粽,hero]\b[hero]（先后撤恢复下体力）",
                        "\t[堇,E671]\b[this,8,4]百夜行！",
                        {
                            "type": "moveHero",
                            "time": 200,
                            "steps": [
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 500,
                            "noSkip": true
                        },
                        "\t[小粽,hero]\b[hero]（嗯？怎么没动静？？）",
                        {
                            "type": "sleep",
                            "time": 500,
                            "noSkip": true
                        },
                        "\t[小粽,hero]\b[hero]不对！！！",
                        {
                            "type": "show",
                            "loc": [
                                [
                                    5,
                                    13
                                ]
                            ],
                            "time": 50,
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                8,
                                13
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "VXSand.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Annihilation2.wav"
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                5,
                                13
                            ],
                            "time": 100,
                            "async": true,
                            "steps": [
                                "right",
                                "right",
                                "right",
                                "right",
                                "right",
                                "right"
                            ]
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                13
                            ],
                            "direction": "down"
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                8,
                                10
                            ],
                            "time": 200
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                4
                            ],
                            "time": 100,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                8,
                                13
                            ],
                            "direction": "right"
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                8,
                                10
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "VXSand.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Annihilation2.wav"
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                5,
                                8
                            ],
                            "time": 200
                        },
                        {
                            "type": "sleep",
                            "time": 60,
                            "noSkip": true
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    5,
                                    10
                                ]
                            ],
                            "time": 50,
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                5,
                                8
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "VXSand.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Annihilation2.wav"
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                5,
                                10
                            ],
                            "time": 150,
                            "steps": [
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 60,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                4,
                                10
                            ],
                            "time": 200,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "turnBlock",
                            "direction": "left",
                            "loc": [
                                [
                                    8,
                                    9
                                ]
                            ]
                        },
                        {
                            "type": "show",
                            "loc": [
                                [
                                    4,
                                    3
                                ]
                            ],
                            "time": 50,
                            "async": true
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                4,
                                9
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "VXSand.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Annihilation2.wav"
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                4,
                                3
                            ],
                            "time": 150,
                            "async": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 60,
                            "noSkip": true
                        },
                        {
                            "type": "jumpHero",
                            "loc": [
                                9,
                                5
                            ],
                            "time": 200,
                            "async": true
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                4,
                                9
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "VXSand.ogg"
                        },
                        {
                            "type": "playSound",
                            "name": "Annihilation2.wav"
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "animate",
                            "name": "attack16",
                            "loc": [
                                8,
                                9
                            ],
                            "async": true
                        },
                        {
                            "type": "playSound",
                            "name": "Wind01.ogg"
                        },
                        {
                            "type": "turnBlock",
                            "direction": "right",
                            "loc": [
                                [
                                    8,
                                    9
                                ]
                            ]
                        },
                        {
                            "type": "move",
                            "loc": [
                                8,
                                9
                            ],
                            "time": 50,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "forward"
                            ]
                        },
                        {
                            "type": "sleep",
                            "time": 160,
                            "noSkip": true
                        },
                        {
                            "type": "turnBlock",
                            "direction": "up",
                            "loc": [
                                [
                                    9,
                                    9
                                ]
                            ]
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                9,
                                5
                            ],
                            "direction": "down"
                        },
                        {
                            "type": "sleep",
                            "time": 100,
                            "noSkip": true
                        },
                        {
                            "type": "move",
                            "loc": [
                                9,
                                9
                            ],
                            "time": 50,
                            "keep": true,
                            "async": true,
                            "steps": [
                                "forward",
                                "forward",
                                "forward"
                            ]
                        },
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
                            "type": "moveHero",
                            "time": 100,
                            "steps": [
                                "backward",
                                "backward",
                                "backward",
                                "backward",
                                "backward"
                            ]
                        },
                        "\t[小粽,hero]\b[hero]呼....呼..",
                        "\t[堇,E671]\b[this,9,6]到此为止了吗？",
                        "\t[堇,E671]\b[this,9,6]这就到了你的极限吗？",
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "insert",
                            "loc": [
                                14,
                                14
                            ],
                            "floorId": "MT103"
                        }
                    ]
                },
                {
                    "text": "跳过",
                    "action": [
                        {
                            "type": "battle",
                            "id": "E575"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT108",
                            "loc": [
                                6,
                                12
                            ],
                            "direction": "up",
                            "time": 0
                        }
                    ]
                }
            ]
        },
        {
            "type": "waitAsync"
        }
    ],
    "eachArrive": null,
    "parallelDo": "",
    "events": {
        "14,14": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "callSave"
                },
                {
                    "type": "pauseBgm"
                },
                "\t[小粽,hero]\b[hero]（该死！究竟缺了些什么，为什么感觉自己的路就在眼前，却接触不到。）",
                {
                    "type": "playSound",
                    "name": "stop1.wav"
                },
                {
                    "type": "showImage",
                    "code": 1,
                    "image": "stop3.jpg",
                    "loc": [
                        0,
                        0
                    ],
                    "opacity": 1,
                    "time": 0
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[？？？]苍穹....开！",
                "\t[小粽,hero]！！！谁",
                "\t[小粽,hero]！！！！！！",
                {
                    "type": "setCurtain",
                    "color": [
                        255,
                        255,
                        255,
                        1
                    ],
                    "time": 1000,
                    "keep": true
                },
                {
                    "type": "hideImage",
                    "code": 1,
                    "time": 0
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT104",
                    "loc": [
                        6,
                        11
                    ],
                    "direction": "up",
                    "time": 0
                }
            ]
        },
        "14,13": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "playBgm",
                    "name": "battle6.mp3",
                    "keep": true
                },
                "\t[小粽,hero]\b[hero](看样子是回来了。）",
                "\t[堇,E671]\b[this,9,6]到此为止了吗？",
                "\t[堇,E671]\b[this,9,6]这就到了你的极限吗？",
                "\t[小粽,hero]\b[hero]呵呵...的确到此为止了，就在刚才我找到了属于我自己的路。",
                "\t[堇,E671]\b[this,9,6]哦？",
                "\t[小粽,hero]\b[hero]直接结束吧！",
                {
                    "type": "playSound",
                    "name": "111-Heal07.ogg"
                },
                {
                    "type": "animate",
                    "name": "up1",
                    "loc": "hero"
                },
                "\t[堇,E671]\b[this,9,6]！！！这气场",
                "\t[堇,E671]\b[this,9,6]怎么可能！你的气息明明.....",
                "\t[小粽,hero]\b[hero]这是我自创的剑法，他的名字为.....",
                "\t[小粽,hero]\b[hero]\\d天！",
                "\t[小粽,hero]\b[hero]\\d破！",
                "\t[小粽,hero]\b[hero]\\d苍！",
                "\t[小粽,hero]\b[hero]\\d穹！",
                {
                    "type": "moveHero",
                    "time": 50,
                    "steps": [
                        "down",
                        "down",
                        "down",
                        "down",
                        "down"
                    ]
                },
                "\t[堇,E671]！！！",
                {
                    "type": "animate",
                    "name": "attack17",
                    "loc": [
                        9,
                        5
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
                    "id": "E575"
                },
                "\t[堇,E671]呜哇！",
                "\t[堇,E671]不可能！！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                "\t[小粽,hero]呃！",
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 100,
                    "times": 1
                },
                "\t[小粽,hero]咳咳咳！！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            4
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            10
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            1
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            2
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            7
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            5
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            1
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            2
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            3
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            9
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            11
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            12
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            11,
                            5
                        ]
                    ],
                    "floorId": "MT105",
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            11,
                            6
                        ]
                    ],
                    "floorId": "MT105",
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
                    "time": 200,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 200,
                    "times": 1
                },
                {
                    "type": "screenFlash",
                    "color": [
                        255,
                        0,
                        0,
                        1
                    ],
                    "time": 200,
                    "times": 1
                },
                {
                    "type": "sleep",
                    "time": 500
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT105",
                    "loc": [
                        7,
                        7
                    ],
                    "direction": "up",
                    "time": 0
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
    [  0,20200,20201,20201,20201,20201,20201,20201,20201,20201,20201,20201,20201,20202,  0],
    [  0,20208,20209,20209,20209,20209,20209,672,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,575,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,578,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20208,20209,20209,20209,577,20209,20209,20209,20209,20209,20209,20209,20210,  0],
    [  0,20216,20217,20217,20217,20217,20217,20217,20217,20217,20217,20217,20217,20218,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,150123,  0,  0,  0,  0,  0,  0,  0,  0,  0,150123,  0,  0],
    [  0,  0,150131,  0,  0,  0,  0,  0,  0,  0,  0,  0,150131,  0,  0],
    [  0,  0,150139,  0,  0,  0,  0,  0,  0,  0,  0,  0,150139,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,150123,  0,  0,  0,  0,  0,  0,  0,  0,  0,150123,  0,  0],
    [  0,  0,150131,  0,  0,  0,  0,  0,  0,  0,  0,  0,150131,  0,  0],
    [  0,  0,150139,  0,  0,  0,  0,  0,  0,  0,  0,  0,150139,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}