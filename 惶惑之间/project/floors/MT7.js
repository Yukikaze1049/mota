main.floors.MT7=
{
    "floorId": "MT7",
    "title": "提亚村",
    "name": "提亚村",
    "width": 50,
    "height": 45,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "moveHero",
            "steps": [
                "down:2",
                "right:1",
                "down:12",
                "right:10",
                "down:1",
                "right:5"
            ]
        },
        "\t[米娅,N335]\b[hero]这是我们这里的杂货铺。",
        "\t[米娅,N335]\b[hero]货物还是很齐全的，村里的人都靠它进的货来生活。",
        "\t[约瑟,N365]\b[hero,1]晨露商行……这不是全国最大的连锁商会吗？",
        "\t[约瑟,N365]\b[hero,1]居然会在这里开分店？",
        "\t[米娅,N335]\b[hero]听贝儿说是来这里收购愈合草的，因为村子附近的愈合草产量很大。",
        {
            "type": "moveHero",
            "steps": [
                "left:3",
                "up:1",
                "left:17"
            ]
        },
        "\t[米娅,N335]\b[hero]这是威兹克叔叔开的锻造屋。",
        "\t[米娅,N335]\b[hero]听说他曾经是王国有名的装备铸造师。",
        "\t[米娅,N335]\b[hero]不过现在也只是给村民打打农具罢了。",
        "\t[米娅,N335]\b[hero]如果你需要武器的话，也可以找他来帮忙。",
        "\t[约瑟,N365]\b[hero,1]……哦？",
        "\t[约瑟,N365]\b[hero,1]这村子还有这等人物么。",
        {
            "type": "moveHero",
            "steps": [
                "left:4"
            ]
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "openDoor",
            "loc": [
                15,
                32
            ],
            "async": true
        },
        {
            "type": "openDoor",
            "loc": [
                15,
                33
            ]
        },
        {
            "type": "setBlock",
            "number": "N369",
            "loc": [
                [
                    15,
                    32
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N370",
            "loc": [
                [
                    15,
                    33
                ]
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "moveHero",
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "setValue",
            "name": "flag:dzw",
            "value": "0"
        },
        {
            "type": "changeFloor",
            "floorId": "MT8",
            "loc": [
                6,
                12
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.dzw==1)",
            "true": [
                {
                    "type": "moveHero",
                    "steps": [
                        "right:7",
                        "down:2"
                    ]
                },
                "\t[约瑟,N365]\b[hero,1]这雕像是？",
                "\t[约瑟,N365]\b[hero,1]磨损的这么严重，都几乎看不出原来的样子了。",
                "\t[米娅,N335]\b[hero]嗯……这是村子几百年前流传的英雄。",
                "\t[米娅,N335]\b[hero]传说当初我们村子这片地方规模还挺大的。",
                "\t[米娅,N335]\b[hero]并不能用村子来称呼，应该和一座小城差不多吧？",
                "\t[米娅,N335]\b[hero]但一座魔塔的出现让这里生灵涂炭。",
                "\t[米娅,N335]\b[hero]而这位无名勇者曾经攻略了魔塔，成为了英雄。",
                "\t[米娅,N335]\b[hero]之后剩下的幸存者连同一批外来者重新修建了家园，就成了如今的村子。",
                "\t[米娅,N335]\b[hero]但事后大家也不记得勇者的名字是什么了。",
                "\t[约瑟,N365]\b[hero,1]被历史遗忘就是英雄最后的末路么……",
                "\b[this,25,43]快去通知村长!",
                "\t[约瑟,N365]\b[hero,1]那边好像出什么事了，过去看看吧。",
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "2"
                },
                {
                    "type": "autoText",
                    "text": "如果迷路了的话，进入浏览地图模式可以查看整个大地图哦。",
                    "time": 3000
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==3)",
            "true": [
                {
                    "type": "move",
                    "loc": [
                        34,
                        11
                    ],
                    "time": 500,
                    "keep": true,
                    "async": true,
                    "steps": [
                        "down:1"
                    ]
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        0.3
                    ],
                    "time": 1,
                    "keep": true
                },
                "\t[hero]\b[hero]等等，伊杰明！",
                {
                    "type": "waitAsync"
                },
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            34,
                            12
                        ]
                    ]
                },
                "\t[伊杰明,N416]\b[this,34,12]嗯？约瑟先生还有什么事情吗？",
                {
                    "type": "moveHero",
                    "steps": [
                        "left:3"
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                "\t[hero]\b[hero]确实有件事我希望你能帮个忙。",
                "\t[伊杰明,N416]\b[this,34,12]看你的意思，这里只有在下一人能够处理是吧？",
                "\t[伊杰明,N416]\b[this,34,12]呵呵……体会到本人本领之多的恐怖之处了吧！？",
                "\t[hero]\b[hero]（这家伙怎么比我还能贫嘴……）",
                "\t[hero]\b[hero]呃……长话短说。",
                "\t[hero]\b[hero]我需要一种可以短时间内让我不断溢出魔力的方法。",
                "\t[hero]\b[hero]我想你作为一个魔法师，应该会有什么头绪吧？",
                "\t[伊杰明,N416]\b[this,34,12]先声明，在下主业是诗人，魔法只是爱好。",
                "\t[伊杰明,N416]\b[this,34,12]其次嘛……短时间内可以给你持续提供魔力的方法……",
                "\t[伊杰明,N416]\b[this,34,12]这是你的作战计划吗？",
                "\t[hero]\b[hero]可以算是吧……怎么样？能做到吗？",
                "\t[伊杰明,N416]\b[this,34,12]在下也不能保证可以……容我今晚研究一下。",
                "\t[伊杰明,N416]\b[this,34,12]明天给你答复，你看怎么样？",
                "\t[hero]\b[hero]那就拜托你了。",
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "4"
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
                            34,
                            12
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT6",
                    "loc": [
                        16,
                        3
                    ],
                    "direction": "left"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==5)",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            8,
                            12
                        ]
                    ],
                    "floorId": "MT6",
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            40,
                            34
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "moveHero",
                    "steps": [
                        "left:5",
                        "up:4"
                    ]
                },
                "\t[伊杰明,N416]\b[hero]我们到了。",
                "\t[约瑟,N365]\b[hero,1]水井？",
                "\t[约瑟,N365]\b[hero,1]这和我昨晚说的那个有什么关联之处吗？",
                "\t[伊杰明,N416]\b[hero]不知你有没有听说过遗迹？",
                "\t[约瑟,N365]\b[hero,1]就是那种魔塔被攻略完后，残存的力量生成的特殊地形？",
                "\t[伊杰明,N416]\b[hero]不错……所谓的遗迹依旧保留了魔塔中的部分内容。",
                "\t[伊杰明,N416]\b[hero]但却不会蔓延危害。",
                "\t[伊杰明,N416]\b[hero]并且还可以从中找到一些价值不菲的宝物。",
                "\t[伊杰明,N416]\b[hero]根据我昨晚的占星……没想到这村中的水井下方，就藏着一个遗迹。",
                "\t[约瑟,N365]\b[hero,1]你的意思是……这村子的土地上曾经诞生过魔塔？",
                "\t[伊杰明,N416]\b[hero]是这样的……并且这地下有着大量魔晶矿的反应。",
                "\t[伊杰明,N416]\b[hero]根据这些魔晶矿……我们就可以制作出一颗魔能水晶球来实现短时间内给你提供源源不断的魔力。",
                "\t[约瑟,N365]\b[hero,1]没想到……这村子下面居然别有洞天啊……",
                "\t[伊杰明,N416]\b[hero]遗迹的强度未必会比魔塔低，所以我们最好还是先做足准备再下去。",
                "\t[伊杰明,N416]\b[hero]锻造屋和晨露商行已经开业了，如果有需要的话可以先去买点装备和补给。",
                {
                    "type": "autoText",
                    "text": "接下来要通过水井进入遗迹，进入后暂时无法返回。",
                    "time": 3000
                },
                {
                    "type": "autoText",
                    "text": "为了接下来的战斗，请先去两个商店购买需要的物品吧。",
                    "time": 3000
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "6"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==7)",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            17,
                            16
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            18,
                            16
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            19,
                            16
                        ]
                    ]
                },
                {
                    "type": "setCurtain",
                    "time": 1
                },
                "\t[小孩a,N383]\b[this,17,16]哇！谁在这里画了张图？",
                "\t[小孩a,N383]\b[this,17,16]这画的是个啥？",
                "\t[小孩b,N469]\b[this,19,16]笨，这一看就是魔法阵啊",
                "\t[小孩a,N383]\b[this,17,16]真的吗！？我还是第一次见！",
                "\t[小孩a,N383]\b[this,17,16]你连魔法阵都知道啊！？",
                "\t[小孩b,N469]\b[this,19,16]嘿嘿……实不相瞒，我叔叔就是个魔法师",
                "\t[小孩b,N469]\b[this,19,16]他出村旅行之前，还教过我一些东西。",
                "\t[小孩b,N469]\b[this,19,16]所以我也立志成为一名魔法师。",
                "\t[小孩b,N469]\b[this,19,16]其实一个魔法阵可以修改成不同的样式。",
                "\t[小孩b,N469]\b[this,19,16]来，我给你露一手，把这个法阵改成别的式样。",
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 1,
                    "keep": true
                },
                {
                    "type": "setHeroOpacity",
                    "opacity": 1,
                    "time": 1
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "8"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT30",
                    "loc": [
                        6,
                        11
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==10)",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            17,
                            16
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            18,
                            16
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            19,
                            16
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "moveHero",
                    "time": 1,
                    "steps": [
                        "up:1"
                    ]
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]咳咳！",
                "\t[hero]\b[hero]见鬼……咳咳……我……游泳……咳咳！！",
                "\t[伊杰明,N416]\b[hero,1]唔……我地上的法阵！",
                "\t[伊杰明,N416]\b[hero,1]该死……是谁把在下的法阵给涂掉了！？",
                {
                    "type": "show",
                    "loc": [
                        [
                            18,
                            9
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        18,
                        9
                    ],
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "down:3"
                    ]
                },
                "\t[赫,N426]\b[down,18,12]你们这是清理了一天水井？",
                {
                    "type": "changePos",
                    "direction": "up"
                },
                "\t[伊杰明,N416]\b[hero,1]咳咳！确切的说，我们这是在为备战魔塔做准备。",
                "\t[伊杰明,N416]\b[hero,1]在下和约瑟先生已经通过这水井下方残留的遗迹，获取了不少魔晶矿。",
                "\t[伊杰明,N416]\b[hero,1]有助于生产我们接下来的道具。",
                "\t[伊杰明,N416]\b[hero,1]所以，所以这是一次极具挑战性的战略部署任务。",
                "\t[伊杰明,N416]\b[hero,1]而我们充分发挥自己的能力，圆满完成了这项任务！",
                "\t[hero]\b[hero]咳……咳咳……圆满？",
                "\t[伊杰明,N416]\b[hero,1]尽管这个……最后是出了一些微不足道的小插曲。",
                "\t[伊杰明,N416]\b[hero,1]但抛开事实不谈，我们的成果是很丰硕的。",
                "\t[赫,N426]\b[down,18,12]这……这样吗？",
                "\t[伊杰明,N416]\b[hero,1]好了！时间紧迫，在下就立刻回去研发道具了！",
                "\t[伊杰明,N416]\b[hero,1]我们明天上午正式集合，挑战魔塔。",
                {
                    "type": "unfollow",
                    "name": "yjm.png"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            18,
                            17
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        18,
                        17
                    ],
                    "time": 200,
                    "steps": [
                        "down:3",
                        "right:7"
                    ]
                },
                "\t[hero]\b[hero]唔……这比魔塔还要了我命……",
                "\t[赫,N426]\b[down,18,12]没想到，这村子下面居然还有一个遗迹。",
                "\t[赫,N426]\b[down,18,12]对了，我今天也去那个魔塔里调查了一番。",
                "\t[赫,N426]\b[down,18,12]确实是有些棘手。",
                "\t[赫,N426]\b[down,18,12]你们所说的那个黑骑士徘徊于各楼层之中。",
                "\t[赫,N426]\b[down,18,12]虽没有正面接触，但就感知到的气场而言，确实并非我们三人中任何一个能够应对的。",
                "\t[hero]\b[hero]或许伊杰明那家伙所谓的三打一战术真能达成魔塔史上前所未有的突破。",
                "\t[赫,N426]\b[down,18,12]历史上也不乏有过在某一层中，实现多人同时出现对付boss的例子。",
                "\t[赫,N426]\b[down,18,12]但主动权在我们这一方的，还是头一回。",
                "\t[赫,N426]\b[down,18,12]你们今晚好好准备下，可别明天出什么岔子。",
                {
                    "type": "move",
                    "loc": [
                        18,
                        12
                    ],
                    "time": 500,
                    "steps": [
                        "up:3"
                    ]
                },
                "\t[hero]\b[hero]事业心很重的小姐啊……",
                "\t[hero]\b[hero]唉，一个是为了爱好，一个是为了使命。",
                "\t[hero]\b[hero]偏偏我这么一个喜欢混日子的要为了生存而奔波。",
                "\t[hero]\b[hero]肚子饿了……",
                "\t[hero]\b[hero]还是先用餐再想别的吧。",
                {
                    "type": "moveHero",
                    "async": true,
                    "steps": [
                        "down:4",
                        "right:5"
                    ]
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
                    "type": "waitAsync"
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "11"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT6",
                    "loc": [
                        5,
                        13
                    ],
                    "direction": "up"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==12)",
            "true": [
                {
                    "type": "setCurtain",
                    "time": 500
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            18,
                            34
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            26,
                            41
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            24,
                            41
                        ]
                    ]
                },
                "\t[村民]\b[down,18,34]真的太感谢您了。",
                "\t[伊杰明]\b[down,18,34]没事，举手之劳而已，我想之后应该不会再有这类事情了。",
                {
                    "type": "move",
                    "loc": [
                        18,
                        34
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "right:6"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            24,
                            34
                        ]
                    ]
                },
                "\t[伊杰明,N416]\b[down,24,34]不好意思……让各位久等了。",
                {
                    "type": "move",
                    "loc": [
                        24,
                        34
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "down:4"
                    ]
                },
                "\t[hero]\b[hero]看起来你又派上什么用场了啊？",
                "\t[伊杰明,N416]\b[this,24,38]呵呵，正所谓技多不压身啊。",
                "\t[伊杰明,N416]\b[this,24,38]你的要求已经完成了，约瑟先生。",
                {
                    "type": "move",
                    "loc": [
                        24,
                        38
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "down:2"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            24,
                            40
                        ]
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "left"
                },
                {
                    "type": "setValue",
                    "name": "item:I349",
                    "operator": "+=",
                    "value": "1"
                },
                "\t[伊杰明,N416]\b[this,24,40]这颗水晶可以给你提供五分钟源源不断的魔力供给，可是相当珍贵的东西啊。",
                "\t[hero]\b[hero]让你做出这么珍贵的东西，我一下子还真有点不好意思。",
                "\t[hero]\b[hero]事先说好，钱我现在是分文没有的。",
                "\t[hero]\b[hero]只能靠其他的回报你了。",
                "\t[伊杰明,N416]\b[this,24,40]呵呵，你我之间还需要这么见外吗？",
                "\t[伊杰明,N416]\b[this,24,40]只要接下来的探索中，你能多多出力就可以了。",
                "\t[hero]\b[hero]我可一直都在拼命的呀。",
                "\t[赫,N426]\b[this,26,41]抓紧时间吧。",
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            26,
                            41
                        ]
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            24,
                            40
                        ]
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "move",
                    "loc": [
                        24,
                        40
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "down:1"
                    ]
                },
                "\t[伊杰明,N416]\b[this,24,41]那就让我们出发吧？",
                "\t[hero]\b[hero]请让我再做点准备。",
                {
                    "type": "autoText",
                    "text": "接下来即将再次前往魔塔，请做好准备。",
                    "time": 3000
                },
                {
                    "type": "autoText",
                    "text": "为了接下来的战斗，请先去两个商店购买需要的物品吧，有新货哦。",
                    "time": 3000
                },
                {
                    "type": "autoText",
                    "text": "准备完毕后，与赫对话即可进入下一个战斗层。",
                    "time": 3000
                },
                {
                    "type": "setValue",
                    "name": "item:I473",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "13"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==24)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N416",
                    "loc": [
                        [
                            24,
                            41
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N426",
                    "loc": [
                        [
                            26,
                            41
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            24,
                            37
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            25,
                            37
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            26,
                            37
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            27,
                            37
                        ]
                    ]
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                {
                    "type": "playBgm",
                    "name": "wx.mp3",
                    "keep": true
                },
                "\t[伊杰明,N416]\b[this,24,41]咳咳，各位都准备好了吧？",
                "\t[伊杰明,N416]\b[this,24,41]这一次可是真正意义上的决胜负了。",
                "\t[赫,N426]\b[this,26,41]格兰姆，你和芙朵就留守在村子里。",
                "\t[赫,N426]\b[this,26,41]以防魔物袭击。",
                "\t[格兰姆,N410]\b[this,24,37]明白！",
                "\t[芙朵,N436]\b[this,26,37]赫老师……一定要小心啊。",
                "\t[米娅,N335]\b[this,25,37]……约瑟先生！",
                {
                    "type": "changePos",
                    "direction": "up"
                },
                "\t[hero]\b[hero]怎么了小米娅？搞这么激动？",
                "\t[米娅,N335]\b[this,25,37]我……我总有种不好的预感……",
                "\t[米娅,N335]\b[this,25,37]感觉你没法回来了……",
                "\t[hero]\b[hero]（唔……难道是之前立的flag造成的么……）",
                "\t[hero]\b[hero]安心安心……像这么危险的塔我已经经历过好多次啦。",
                "\t[米娅,N335]\b[this,25,37]总之这个护身符请你收下吧！",
                {
                    "type": "move",
                    "loc": [
                        25,
                        37
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "down:2"
                    ]
                },
                {
                    "type": "setValue",
                    "name": "item:I657",
                    "operator": "+=",
                    "value": "1"
                },
                "\t[米娅,N335]\b[this,25,39]传闻是曾经那位救过村子的勇者留下的……",
                "\t[米娅,N335]\b[this,25,39]虽然不知道怎么传到我爸那里了。",
                "\t[米娅,N335]\b[this,25,39]但应该能起到些作用吧！",
                "\t[hero]\b[hero]那我也不客气了。",
                "\t[hero]\b[hero]做好一桌好吃的等着我吧！",
                "\t[米娅,N335]\b[this,25,39]嗯！",
                {
                    "type": "move",
                    "loc": [
                        25,
                        39
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "backward:2"
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "down"
                },
                "\t[伊杰明,N416]\b[this,24,41]啧啧……有少女相送，真是令人羡慕啊！",
                "\t[村长,N440]\b[this,27,37]伊杰明大师，那就由老朽来为您送行吧。",
                "\t[伊杰明,N416]\b[this,24,41]唉……总感觉自己是不是输了什么……",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 9000,
                    "async": true
                },
                {
                    "type": "autoText",
                    "text": "接下来是最后一次前往魔塔，请做好准备。",
                    "time": 3000
                },
                {
                    "type": "autoText",
                    "text": "为了接下来的战斗，请先去两个商店购买需要的物品吧，有新货哦。",
                    "time": 3000
                },
                {
                    "type": "autoText",
                    "text": "准备完毕后，与赫对话即可进入下一个战斗层。",
                    "time": 3000
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "25"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "8,18": [
            "门是锁着的。"
        ],
        "37,9": [
            {
                "type": "if",
                "condition": "flags.dzw==25",
                "true": [
                    "门是锁着的。"
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "((flags.dzw==6)||(flags.dzw==13))",
                        "true": [
                            "门是锁着的。"
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "(flags.sw==1)",
                                "true": [
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            37,
                                            8
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "openDoor",
                                        "loc": [
                                            37,
                                            9
                                        ]
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N369",
                                        "loc": [
                                            [
                                                37,
                                                8
                                            ]
                                        ],
                                        "async": true
                                    },
                                    {
                                        "type": "setBlock",
                                        "number": "N370",
                                        "loc": [
                                            [
                                                37,
                                                9
                                            ]
                                        ]
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "moveHero",
                                        "steps": [
                                            "up:1"
                                        ]
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "MT28",
                                        "loc": [
                                            11,
                                            12
                                        ],
                                        "direction": "up"
                                    }
                                ],
                                "false": [
                                    "门是锁着的。"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "23,19": [
            {
                "type": "openDoor",
                "loc": [
                    23,
                    19
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    23,
                    18
                ]
            },
            {
                "type": "setBlock",
                "number": "N369",
                "loc": [
                    [
                        23,
                        18
                    ]
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N370",
                "loc": [
                    [
                        23,
                        19
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "MT6",
                "loc": [
                    6,
                    16
                ],
                "direction": "up"
            }
        ],
        "18,13": [
            {
                "type": "if",
                "condition": "(flags.dzw==6)",
                "true": [
                    "\t[村民,N379]\b[this]什么？你们要去井里？",
                    "\t[村民,N379]\b[this]千万不要！会淹死的！",
                    {
                        "type": "turnBlock",
                        "direction": "down"
                    }
                ],
                "false": [
                    "\t[村民,N379]\b[this]千万不要掉到井里去，我们村曾经就淹死过一个人。",
                    {
                        "type": "turnBlock",
                        "direction": "down"
                    }
                ]
            }
        ],
        "26,12": [
            "\t[村民,N371]\b[this]这几天的天气都很好，晒衣服真是太方便了。",
            {
                "type": "turnBlock",
                "direction": "up"
            }
        ],
        "5,32": [
            "\t[村民,N383]\b[this]好想把那个稻草人的帽子戴到我头上呀。",
            "\t[村民,N383]\b[this]可惜我太矮了够不着。",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "40,34": [
            "\t[晨露商行店员,N375]\b[this]晨露商行暂时停业，过一阵子再来看看吧。",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "43,33": [
            {
                "type": "if",
                "condition": "((flags.dzw==6)||(flags.dzw==13))",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            43,
                            32
                        ],
                        "async": true
                    },
                    {
                        "type": "openDoor",
                        "loc": [
                            43,
                            33
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N369",
                        "loc": [
                            [
                                43,
                                32
                            ]
                        ],
                        "async": true
                    },
                    {
                        "type": "setBlock",
                        "number": "N370",
                        "loc": [
                            [
                                43,
                                33
                            ]
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "moveHero",
                        "steps": [
                            "up:1"
                        ]
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT29",
                        "loc": [
                            7,
                            12
                        ],
                        "direction": "up"
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "flags.dzw==25",
                        "true": [
                            {
                                "type": "openDoor",
                                "loc": [
                                    43,
                                    32
                                ],
                                "async": true
                            },
                            {
                                "type": "openDoor",
                                "loc": [
                                    43,
                                    33
                                ]
                            },
                            {
                                "type": "setBlock",
                                "number": "N369",
                                "loc": [
                                    [
                                        43,
                                        32
                                    ]
                                ],
                                "async": true
                            },
                            {
                                "type": "setBlock",
                                "number": "N370",
                                "loc": [
                                    [
                                        43,
                                        33
                                    ]
                                ]
                            },
                            {
                                "type": "waitAsync"
                            },
                            {
                                "type": "moveHero",
                                "steps": [
                                    "up:1"
                                ]
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT29",
                                "loc": [
                                    7,
                                    12
                                ],
                                "direction": "up"
                            }
                        ],
                        "false": [
                            {
                                "type": "turnBlock",
                                "direction": "right",
                                "loc": [
                                    [
                                        40,
                                        34
                                    ]
                                ]
                            },
                            "\t[村民,N375]\b[this,40,34]晨露商行暂时停业，过一阵子再来看看吧。",
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        40,
                                        34
                                    ]
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "25,44": [
            {
                "type": "if",
                "condition": "(flags.dzw===6)",
                "true": [
                    "\t[伊杰明,N416]\b[hero]现在我们要先前往水井里的遗迹。",
                    {
                        "type": "moveHero",
                        "steps": [
                            "up:1"
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "if",
                        "condition": "((flags.dzw==13)||(flags.dzw==25))",
                        "true": [
                            "\t[赫,N426]\b[this,26,41]准备好了？到我这里来吧。",
                            {
                                "type": "moveHero",
                                "steps": [
                                    "up:1"
                                ]
                            }
                        ],
                        "false": [
                            {
                                "type": "if",
                                "condition": "switch:A",
                                "true": [],
                                "false": [
                                    {
                                        "type": "setVolume",
                                        "value": 0,
                                        "time": 500,
                                        "async": true
                                    },
                                    {
                                        "type": "setHeroOpacity",
                                        "opacity": 0,
                                        "time": 500
                                    },
                                    {
                                        "type": "waitAsync"
                                    },
                                    {
                                        "type": "stopSound"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "switch:A",
                                        "value": "true"
                                    }
                                ]
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT9",
                                "loc": [
                                    6,
                                    0
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "39,17": [
            "\t[村民,N447]\b[this]啊？你是勇者吗？",
            "\t[村民,N447]\b[this]我年轻的时候曾经去王都应聘过勇者，但是在选拔战中失败了。",
            "\t[村民,N447]\b[this]现在只好回来种种田啦。",
            {
                "type": "turnBlock",
                "direction": "down"
            }
        ],
        "20,39": [
            "\t[村民,N451]\b[this]虽然我是女孩子，但是我长大了也要成为和这个雕像一样的大英雄。",
            {
                "type": "turnBlock",
                "direction": "right"
            }
        ],
        "34,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "15,33": [
            {
                "type": "openDoor",
                "loc": [
                    15,
                    32
                ],
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    15,
                    33
                ]
            },
            {
                "type": "setBlock",
                "number": "N369",
                "loc": [
                    [
                        15,
                        32
                    ]
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N370",
                "loc": [
                    [
                        15,
                        33
                    ]
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "MT8",
                "loc": [
                    6,
                    12
                ],
                "direction": "up"
            }
        ],
        "18,15": [
            {
                "type": "if",
                "condition": "(flags.dzw==6)",
                "true": [
                    {
                        "type": "confirm",
                        "text": "确认要进入遗迹吗？\n(如果还没有购买装备和补给道具请返回)",
                        "yes": [
                            {
                                "type": "setVolume",
                                "value": 0,
                                "time": 1500,
                                "async": true
                            },
                            "\t[伊杰明,N416]\b[hero]准备好了吧？",
                            "\t[伊杰明,N416]\b[hero]这个遗迹的隐藏通道在井水水源通道的另一侧，位置还挺深。",
                            "\t[伊杰明,N416]\b[hero]进入井后在下会使用一个短距离传送魔法直接将我们传送过去。",
                            "\t[伊杰明,N416]\b[hero]所以当在下跳进去的时候，约瑟先生，你可要跟紧了。",
                            "\t[伊杰明,N416]\b[hero]否则可能你没法进入在下的魔法范围，到时候就单纯变成了跳井自尽了。",
                            "\t[约瑟,N365]\b[hero,1]啧……",
                            "\t[约瑟,N365]\b[hero,1]该说不说……我还确实不擅长游泳……",
                            "\t[约瑟,N365]\b[hero,1]像我这么优秀的人……上帝总得给我个弱点。",
                            "\t[伊杰明,N416]\b[hero]那么，让我们一鼓作气前进吧！",
                            {
                                "type": "jumpHero",
                                "loc": [
                                    18,
                                    15
                                ],
                                "time": 500,
                                "async": true
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
                                "type": "waitAsync"
                            },
                            {
                                "type": "pauseBgm"
                            },
                            "\t[村民,N379]\b[down,18,13]啊啊啊啊！又有人掉进井里淹死了！",
                            {
                                "type": "hide",
                                "loc": [
                                    [
                                        18,
                                        13
                                    ]
                                ],
                                "remove": true
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT30",
                                "loc": [
                                    6,
                                    11
                                ],
                                "direction": "up"
                            }
                        ],
                        "no": []
                    }
                ]
            }
        ],
        "18,16": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "17,16": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "19,16": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "18,9": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "18,17": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "18,34": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        },
        "25,37": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[米娅,N335]\b[this,25,37]我会在这里等你到你回来的！",
                {
                    "type": "turnBlock",
                    "direction": "down"
                }
            ]
        },
        "27,37": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[村长,N440]\b[this,27,37]约瑟先生，您们的恩情我们村子会记住的！",
                {
                    "type": "turnBlock",
                    "direction": "down"
                }
            ]
        },
        "24,37": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[格拉姆,N410]\b[this,24,37]你们一定要加油啊！",
                {
                    "type": "turnBlock",
                    "direction": "down"
                }
            ]
        },
        "26,37": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[芙朵,N436]\b[this,26,37]你和老师都要平安回来哦!",
                {
                    "type": "turnBlock",
                    "direction": "down"
                }
            ]
        },
        "24,41": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                "\t[伊杰明,N416]\b[this,24,41]在下随时都可以出发，你跟赫小姐说就可以了。",
                {
                    "type": "turnBlock",
                    "direction": "down"
                }
            ]
        },
        "26,41": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "choices",
                    "text": "\t[赫,N426]准备好了吗？",
                    "choices": [
                        {
                            "text": "确定",
                            "action": [
                                "\t[hero]\b[hero]动身吧。",
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
                                    "type": "if",
                                    "condition": "(flags.dzw==25)",
                                    "true": [
                                        {
                                            "type": "changeFloor",
                                            "floorId": "MT133",
                                            "loc": [
                                                6,
                                                6
                                            ],
                                            "direction": "up"
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "changeFloor",
                                            "floorId": "MT17",
                                            "loc": [
                                                6,
                                                6
                                            ],
                                            "direction": "up"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "取消",
                            "action": [
                                {
                                    "type": "turnBlock",
                                    "direction": "down"
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,40102,40103,40100,40101,40102,40103,40048,40048,  0,40048,40048, 20, 20, 20, 20, 20, 20, 20,  0,40109,40110, 20, 20, 20, 20, 20, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20,40101,40102,40103,40109,40110,  0,  0,40109,40110,  0,  0,  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,  0,  0,  0, 20, 20, 20,40143,40143,40143,40143,40143,40143,40143,40143,40143,40143,40143,  0,  0,  0, 20, 20, 20, 20],
    [ 20, 20,40109,40110,  0,  0,  0,  0,  0,40139,  0,  0,  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,151,  0,  0, 20, 20,40151,40151,40151,40151,40151,40151,40151,40151,40151,40151,40151,  0,  0,  0,  0,  0, 20, 20],
    [ 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,40139,  0,  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,151,  0,  0, 20, 20,40159,40159,40159,40159,40159,40159,40159,40159,40159,40159,40159,40026,40026,40004,  0,  0, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17,40034,40012,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,151,151,151,  0,  0,40167,40167,40167,40167,40167,40167,40167,40167,40167,40167,40167,40034,40034,40012,  0,  0, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,40147,40147,40156,  0,40017,  0,  0,  0,40018,151,151,151,151,151,151,151,151,151,151,151,151,  0,40087,40173,40174,40174,40174,40174,40174,40174,40174,40174,40174,40175,  0,  0,40017,  0,  0,  0, 20],
    [40019,40220,40220,40220,40220,40220,40220,40217,  0,40155,40155,40156,  0,40017,  0,  0,  0,  0,  0,151,151,151,151,151,151,151,151,151,151,151,  0,40095,40181,40182,40182,40182,40182,40182,40182,40182,40182,40182,40183,  0,  0,40017,  0,  0,  0, 20],
    [40019,40220,40220,40220,40220,40220,40220,40225,  0,40155,40155,40156,  0,40017,  0,  0,  0,  0,  0,40092,40093,151,151,151,151,151,151,151,151,151,  0,40103,40189,40190,40190,40190,40190,367,40190,40190,40190,40190,40191,  0,  0,40017,  0,  0, 20, 20],
    [40019,40143,40143,40143,40143,40143,40221,40233,  0,40155,40155,40156,  0,40017,  0,  0,  0,  0,426,40100,40101,40102,151,151,151,151,151,151,151,40109,40110,  0,40197,40198,40198,40198,40198,368,40203,40198,40198,40198,40199,  0,  0,40017,  0,  0, 20, 20],
    [40019,40151,40151,40151,40151,40151,40229,40153,  0,40155,40155,40156,  0,40017,  0,  0,  0,  0,  0,  0,40109,40110,  0,151,151,151,151, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 91,  0,40019,  0,  0,  0,  0,  0,40017,  0, 20, 20, 20],
    [40019,40159,40159,40159,40159,40232,40233,40153,  0,40155,40155,40156,  0,40017,  0,  0,  0,  0,  0,  0,  0,  0,40137,  0,40139,40140,  0, 17,  0,  0,  0,  0,  0,  0,416,  0,  0,  0,  0,40027,  0,  0,  0,  0,  0,40017, 20, 20, 20, 20],
    [40019,40167,40167,40167,40167,40240,40153,40237,40238,40239,40155,40164,  0,40017,  0,  0,  0,  0,  0,  0,  0,40144,40145,40146,40147,40148,374,  0,  0,  0,  0,  0,  0,  0,  0,  0,40013,40034,40034,40035,  0,  0,  0,  0,  0,40017, 20, 20, 20, 20],
    [40019,40173,40174,40174,40174,40152,40161,40245,40246,40247,40163,40164,  0,40017,  0,  0,  0,  0,379,  0,  0,40152,40153,40154,40155,40156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40019,  0,  0,  0,  0,  0,  0,  0,  0,40017, 20, 20, 20, 20],
    [40019,40181,40182,40182,40182,40168,40169,40253,40254,40255,40171,40172,  0,40017,40071,  0,  0,40060,40061,  0,  0,40152,40153,40154,40155,40156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40019,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20],
    [40019,40189,40190,40190,40190,40176,40177,40178,40178,40178,40179,40180,  0,40017,40071,  0,  0,40068,40070,  0,  0,40152,40237,40238,40239,40156,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40019,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20],
    [40019,40197,40198,40198,40198,40198,40185,40186,40186,40186,40186,40188,  0,40017,  0,  0,  0,385,468,470,  0,40168,40245,40246,40247,40172,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40021,40010,40010,40010,40010,40010,40010,40010,40010,40020, 20, 20, 20, 20],
    [40019,  0,40097,40098,40099,40192,40194,40194,367,40194,40194,40196,  0,40017,  0,  0,  0,  0,416,  0,  0,40259,40260,40261,40262,40263,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,447,  0,  0,  0,40130,40131,  0,  0, 20, 20, 20],
    [  0,  0,40105,40106,40107,40200,40201,40201,368,40201,40201,40204,40067,40017,  0,  0,  0,  0,  0,  0,  0,40192,40194,367,40194,40196,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40137,40138,40139,40131,  0, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40067,40067,40017,  0,  0,  0,  0,  0,  0,  0,40200,40202,368,40202,40204,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40137,40145,40146,40147,40139,40140, 20, 20, 20],
    [ 20, 20,40010,40010,40010,40010,40010,40014,  0,40015,40010,40010,40010,40020,  0,  0,  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40144,40145,40153,40146,40155,40147,40148, 20, 20, 20],
    [ 20, 20,  0,  0,  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40209,40209,40209,40209,40152,40153,40153,40226,40155,40155, 20, 20, 20, 20],
    [ 20, 20,40100,40101,40102,40103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40220,40220,40220,40220,40220,40220,40217,40234,40155,40155, 20, 20, 20, 20],
    [ 20,40103,  0,40109,40110,  0,  0,  0,  0,  0,40143,40143,40143,40143, 17, 17, 17,40143,40143,40143,40143,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40220,40220,40220,40220,40220,40220,40225,40154,40155,40155,40156, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,40151,40151,40151,40151,  0,40154,  0,40151,40151,40151,40151,  0,  0,40018,  0,  0,  0,  0,  0,  0,  0,  0,40077,40078,  0,  0,40143,40143,40143,40143,40143,40221,40233,40154,40155,40155,40156, 20, 20, 20],
    [ 20,  0,40053,  0,40049,  0,  0,  0,  0,  0,40159,40159,40159,40232,40233,40154,40235,40236,40159,40159,40159,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40084,40085,40086,40087,  0,40151,40151,40151,40151,40151,40229,40161,40154,40155,40155,40156,  0, 20, 20],
    [ 20,40059,40059,  0,  0,  0,  0,  0,  0,  0,40167,40167,40167,40240,40153,40154,40155,40244,40167,40167,40167,  0,  0,40043,  0,  0,  0,  0,  0,  0,  0,40092,40093,40094,40095,  0,40159,40159,40159,40159,40232,40233,40161,40154,40155,40155,40156,  0, 20, 20],
    [ 20, 20,  0,  0,40077,40078,  0,  0,  0,  0,40173,40174,40088,40248,40153,40154,40155,40252,40206,40174,40175,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40100,40101,40102,40103,  0,40167,40167,40167,40167,40240,40153,40237,40238,40239,40155,40156,  0, 20, 20],
    [ 20, 20,  0,40084,40085,40086,40087,  0,  0,  0,40181,40182,40096,40152,40161,40162,40163,40164,40214,40182,40183,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40109,40110,  0,  0,40173,40174,40174,40174,40248,40161,40245,40246,40247,40163,40164,  0, 20, 20],
    [ 20, 20,  0,40092,40093,40094,40095,  0,  0,  0,40189,40190,40096,40168,40169,40170,40171,40172,40222,40190,40191,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40181,40182,40182,40182,40182,40169,40253,40254,40255,40171,40172,  0, 20, 20],
    [ 20, 20, 20,40100,40101,40102,40103,  0,  0,  0,40197,40198,40096,40176,40177,40178,40179,40180,40230,40198,40199,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40189,40190,40190,40190,40190,40177,40178,40178,40178,40179,40180,  0, 20, 20],
    [ 20, 20, 20,  0,40109,40110,  0,  0,  0,  0,  0,  0,  0,40184,40185,40186,40187,40188,40058,40058,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40197,40198,40198,40198,40198,40185,40186,40186,40186,40187,40188, 20, 20, 20],
    [ 20, 20, 20, 20,  0,383,  0,  0,  0,  0,  0,  0,  0,40192,40193,367,40195,40196,  0,40057,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40097,40098,40099,40192,40193,40194,367,40194,40194,40196,  0, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,40200,40201,368,40041,40041,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40105,40106,40107,40200,40201,40202,368,40202,40202,40204,  0,  0, 20],
    [ 20, 20, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 91,  0,  0,418,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,375,  0,  0, 91,  0,  0,  0,  0, 20, 20],
    [ 20, 20,40102,40103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40084,40085,40086,40087,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20,40110,  0,40013,40034,40034,40034,40072,40022,  0,  0,  0,  0,  0,  0,  0,40084,40085,40086,40087,  0,  0,  0,  0,  0,  0,  0,  0,  0,40092,40093,40094,40095,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20],
    [ 20, 20,  0,  0,40019,40073,40064,40064,40080,  0,  0,  0,  0,  0,  0,  0,  0,40092,40093,40094,40095,  0,  0,  0,410,335,436,440,  0,  0,40100,40101,40102,40103,  0,  0,  0,  0,40084,40085,40086,40087,  0,  0,  0, 20, 20, 20, 20, 20],
    [ 20, 20,  0,  0,40019,40073,40064,40064,40075,40038,  0,  0,  0,  0,  0,  0,  0,40100,40101,40102,40103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40109,40110,  0, 20, 20,  0,  0,40092,40093,40094,40095,  0,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20,  0,  0,40019,  0,  0,  0,  0,40017,  0,  0,  0,  0,  0,  0,  0,  0,40109,40110,453,  0,  0,444,  0,  0,  0,  0,  0, 20,  0,  0,  0, 20, 20, 20, 20,  0,40100,40101,40102,40103,  0, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20,  0,  0,40021,40010,40010,40010,40010,40020,  0, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20,  0,  0,445,  0,  0,  0,  0,  0, 20,  0, 20, 20, 20, 20, 20, 20, 20,40108,40109,40110,  0, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20, 20,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0,429,  0, 20, 20,  0,  0, 20, 20, 20, 20, 20, 20, 20, 20,  0,  0, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0,  0,  0,  0,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20,  0,  0,  0, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,40048,40048,30005,40048,40048, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20,  0, 93, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,40000,40000,40000,145,145,40000,145,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,145,145,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,145,145,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,145,145,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,145,145,145,145,145,145,145,145,145,145,145,145,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,145,145,40000,40000,40000,145,145,145,145,145,145,145,145,145,145,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,145,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,145,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,145,40000,40000,145,145,145,145,145,145,145,145,145,145,145,145,145,145,145,40000,40000,145,145,145,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,145,145,145,145,145,145,40000,145,145,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,145,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000],
    [40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,145,145,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000,40000]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40134,40134,40134,40134,40134,40134,40134,40134,40133,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,40128,40129,40130,40131,40132,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40216,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,40136,40137,40138,40139,40140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40241,  0,  0,  0,40241,  0,40224,  0,40241,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40136,40137,40145,40146,40147,40139,40026,40026,40004,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40249,  0,  0,  0,40249,  0,  0,  0,40249,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40144,40145,40145,40146,40147,40147,40148,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40076,40077,40078,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40209,40209,40209,40209,40209,40209,40209,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40076,40077,40078,40079,  0,  0,  0,  0,  0,40084,40085,40086,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40084,40085,40086,40087,  0,  0,  0,  0,  0,40092,40093,40094,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40094,40095,  0,  0,  0,  0,  0,40100,40101,40102,  0,  0,40113,  0,40113,  0,  0,  0,40113,  0,40113,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40039,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,40141,40142,40081,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40129,40130,40131,40097,40098,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,40149,40150,40089,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40136,40137,40138,40139,40140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40005,40026,40026,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40216,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40118,  0,40118,  0,  0,  0,  0,  0,  0,  0,  0,  0,40063,  0,  0,  0,  0,  0,  0,  0,40224,  0,40157,40158,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40126,  0,40127,  0,  0,  0,  0,  0,  0,  0,  0,  0,40063,  0,  0,  0,  0,  0,  0,  0,  0,  0,40165,40166,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40113,  0,40121,  0,  0,40117,  0,40117,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40002,40002,40002,40002,40002,40002,40002,40002,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40184,  0,40125,  0,40125,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,40114,  0,  0,  0,40114,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40129,40130,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40136,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40002,40002,40002,  0,40002,40002,40002,  0,40007,40002,40002,40002,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40136,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40092,40093,40094,40095,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40209,40209,40209,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40133,40134,40134,40134,40134,40210,40134,40134,40134,40134,40133,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40143,40143,40143,40143,40217,40218,40219,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40216,  0,  0,  0,  0,  0,40216,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40241,  0,  0,40225,  0,40227,  0,  0,40241,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40224,  0,  0,  0,  0,  0,40243,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40249,  0,  0,  0,  0,40216,  0,  0,40249,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40243,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40117,  0,  0,  0,40089,  0,  0,  0,40118,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40125,  0,  0,  0,  0,  0,  0,  0,40127,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40115,  0,  0,  0,  0,  0,  0,  0,40113,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40168,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40123,  0,  0,40114,  0,40122,  0,  0,  0,40041,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40114,  0,40114,40176,  0,40116,  0,40116,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40184,  0,40125,  0,40125,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40083,40082,  0,  0,40114,  0,  0,  0,40114,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40090,40091,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40077,40078,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,40005,40026,40026,40026,40004,  0,  0,  0,  0,  0,  0,  0,  0,  0,40077,40078,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40077,40078,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40002,40002,40002,40002,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,40092,40093,40094,40095,40092,40093,40094,40095,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40100,40101,40102,40103,40076,40077,40078,40079,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40092,40093,40094,40095,40101,  0,  0,  0,  0,  0,40048,  0,  0,  0,  0,  0,40048,  0,  0,  0,  0,  0,  0,40108,  0,  0,40111,40084,40085,40086,40087,40133,40134,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40100,  0,  0,40108,  0,  0,40111,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40092,40093,40094,40095,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,40016,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40100,40101,40102,40103,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40005,40026,40026,40026,40026,40026,40026,40026,40026,40026,40026,40026,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40108,40109,40110,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40013,40034,40034,40034,40034,40034,40034,40034,40034,40034,40034,40034,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40019,  0,  0,  0,  0,40152,40153,40153,40154,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40226,  0,  0,  0,  0,  0,  0,  0,  0,146,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40234,  0,  0,  0,  0,  0,  0,  0,  0,146,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40194,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40154,  0,  0,  0,  0,  0,  0,  0,  0,  0,146,146,  0,  0,  0,  0,  0,  0,  0,  0,40108,  0,  0,40111,  0,  0,  0,  0,  0,40202,40203,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40154,  0,  0,  0,  0,  0,  0,  0,  0,40024,  0,40108,  0,  0,40111,  0,  0,40097,40098,40099,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40154,  0,  0,  0,  0,  0,  0,40044,  0,  0,  0,  0,  0,  0,  0,  0,  0,40105,40106,40107,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40017,  0,  0,  0,  0],
    [  0,  0,  0,  0,40190,40190,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,147,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40017,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40016,  0,147,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,40194,  0,  0,  0,  0,  0,  0,  0,  0,147,147,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40019,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,147,  0,  0,  0,  0,40194,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40019,  0,  0,40002,40002,  0,  0,  0,40062,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40021,40010,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40062,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40032,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40156,  0,  0,  0],
    [40094,40095,  0,  0,  0,  0,40032,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40156,  0,  0,  0],
    [40102,40103,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [40110,40111,40016,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40016,  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,146,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,  0,  0,  0,  0,  0,40174,  0,  0,  0,  0,  0,  0,  0,  0,  0,146,  0,  0,  0,  0,40032,  0,40032,40032,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,146,146,146,  0,  0,  0,  0,40182,  0,  0,  0,  0,  0,  0,  0,  0,  0,146,40024,  0,  0,  0,40032,40032,40032,40032,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,146,146,146,146,  0,  0,  0,  0,40190,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,146,146,  0,  0,  0,  0,  0,40198,40202,  0,  0,  0,40230,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40108,  0,  0,40111,  0,  0,40016,  0,  0,40104,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40194,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40194,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40016,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40203,40204,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40093,40094,40095,  0,  0,  0,  0,  0,  0,40044,  0,  0,  0,  0,40062,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40101,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,40109,  0,40111,  0,40073,40074,40075,40025,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40073,40074,40075,40033,40030,  0,40024,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40073,40074,40074,40075,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,40073,40074,40074,40075,  0,  0,  0,  0,  0,  0,  0,  0,40108,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40111,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40140,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40216,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,40224,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40083,40082,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,40090,40091,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40076,40077,40078,40079,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,40084,40085,40086,40087,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgm": "happy.mp3",
    "weather": [
        "cloud",
        3
    ]
}