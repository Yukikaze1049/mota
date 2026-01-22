main.floors.MT6=
{
    "floorId": "MT6",
    "title": "米娅家",
    "name": "米娅家",
    "width": 19,
    "height": 18,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "happy.mp3",
    "weather": null,
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "happy.mp3"
        },
        {
            "type": "unfollow",
            "name": "my.png"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "setVolume",
            "value": 100,
            "time": 1
        },
        {
            "type": "playBgm",
            "name": "happy.mp3",
            "keep": true
        },
        "\t[hero]\b[hero]没想到你家居然就是开旅馆的，真是太棒了！",
        "\t[hero]\b[hero]好久没吃到这么丰盛的大餐了。",
        "\t[米娅父亲,N357]\b[this,7,11]恩人不必客气，反倒是我还要感谢你救了我女儿米娅。",
        "\t[hero]\b[hero]没事没事。",
        "\t[米娅父亲,N357]\b[this,7,11]米娅！你这么晚还跑到森林里去干什么！？",
        "\t[米娅父亲,N357]\b[this,7,11]你知不知道晚上的森林是很危险的！",
        "\t[米娅,N335]\b[this,5,13]因为之前听说森林里长出了夜松露，所以想碰碰运气。",
        "\t[米娅,N335]\b[this,5,13]……可之前的森林里都没见到过魔物。",
        "\t[hero]\b[hero]森林里出现魔物，恐怕是……这里出现了魔塔吧？",
        "\t[hero]\b[hero]而且还是刚出现的。",
        "\t[米娅父亲,N357]\b[this,7,11]你说……魔塔？",
        "\t[米娅,N335]\b[this,5,13]魔塔是什么？",
        "\t[hero]\b[hero]会源源不断催生魔物的神秘之塔。只有杀死里面的塔主才能彻底根除。",
        "\t[hero]\b[hero]而王国最受欢迎的职业——勇者。就是专门负责清理这种塔的啦。",
        "\t[米娅,N335]\b[this,5,13]但你不是说你是漂泊者？",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    7,
                    11
                ]
            ]
        },
        "\t[米娅父亲,N357]\b[this,7,11]什么！？",
        "\t[米娅父亲,N357]\b[this,7,11]漂泊者！？",
        "\t[hero]\b[hero]先生，请冷静！",
        "\t[hero]\b[hero]虽然本人是一位漂泊者，但安全性有保证，绝对无害。",
        "\t[米娅父亲,N357]\b[this,7,11]但……但漂泊者不是……",
        "\t[米娅,N335]\b[this,5,13]爸，漂泊者究竟是？",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    7,
                    11
                ]
            ]
        },
        "\t[米娅父亲,N357]\b[this,7,11]漂泊者指的就是那些受到诅咒的人，身上会开始出现魔物化的特征……",
        "\t[米娅父亲,N357]\b[this,7,11]因为其身份不被任何地方所接纳 所以只能一直在外流浪。",
        "\t[hero]\b[hero]但是杀死魔物获取魔晶可以延缓魔化，从这一点来看，漂泊者也同样是魔物敌人。",
        "\t[hero]\b[hero]所以……你们是可以相信我，我会去解决这个魔塔。",
        "\t[hero]\b[hero]因为这也是我的生理需求。",
        "\t[米娅父亲,N357]\b[this,7,11]但……你怎么能保证自己不会中途魔化？",
        "\t[hero]\b[hero]（伸出左臂，上面安装着一个类似护腕的装置。）",
        "\t[hero]\b[hero]看到这个东西了没。",
        "\t[hero]\b[hero]这就是我的抑制器，当我的魔化程度到达不可逆之时……连接着我神经的抑制器就会对我进行处刑。",
        "\t[hero]\b[hero]所以……我是一名合法漂泊者。",
        "\t[米娅父亲,N357]\b[this,7,11]合法漂泊者？",
        "\t[hero]\b[hero]目前魔塔的危险性与数量都已经上升到了国家难以控制的阶段。",
        "\t[hero]\b[hero]单靠勇者已经很难解决问题了。",
        "\t[hero]\b[hero]所以……为了物尽其用。将漂泊者也作为可控战力投入进去。",
        "\t[hero]\b[hero]王国制造了这个抑制器，同意佩戴的漂泊者将能够受到合法的对待。",
        "\t[米娅父亲,N357]\b[this,7,11]好吧……而且看你这样子，也和传闻中那些疯狂的漂泊者不一样。",
        "\t[米娅父亲,N357]\b[this,7,11]所以你是来处理那个魔塔的？",
        "\t[hero]\b[hero]想不处理也不行啊……毕竟我的命直接和魔塔挂钩。",
        "\t[hero]\b[hero]这魔化症可真是上天赐给王国的免费劳动力。",
        "\t[米娅父亲,N357]\b[this,7,11]那好吧，你就现在我这里住就好了。",
        "\t[米娅父亲,N357]\b[this,7,11]不过，你是漂泊者的事情最好还是别告诉其他人。",
        "\t[米娅父亲,N357]\b[this,7,11]即使你有这个抑制器作为保证，村里的人估计还是不会接受你。",
        "\t[hero]\b[hero]明白。",
        "\t[米娅父亲,N357]\b[this,7,11]那今晚就好好休息吧。",
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
            "time": 1
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
            "time": 1
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    12
                ]
            ],
            "remove": true,
            "time": 1
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    11
                ]
            ],
            "remove": true,
            "time": 1
        },
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    13
                ]
            ],
            "remove": true,
            "time": 1
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    12
                ]
            ],
            "time": 1
        },
        {
            "type": "changePos",
            "loc": [
                17,
                3
            ],
            "direction": "down"
        },
        "休息一晚后，生命和魔力恢复了。",
        "第二天。",
        {
            "type": "setValue",
            "name": "status:hp",
            "operator": "+=",
            "value": "500"
        },
        {
            "type": "setValue",
            "name": "status:mana",
            "operator": "+=",
            "value": "100"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[hero]\b[hero]久违的被子和床。",
        "\t[hero]\b[hero]一个充足的睡眠有助于我接下来一整天的行动！",
        {
            "type": "setBlock",
            "number": "N338",
            "loc": [
                [
                    13,
                    13
                ]
            ],
            "time": 1
        },
        {
            "type": "move",
            "loc": [
                13,
                13
            ],
            "time": 200,
            "keep": true,
            "steps": [
                "up:5"
            ]
        },
        "\t[米娅,N335]\b[this,13,8]约瑟，你起来了吗？",
        "\t[hero]\b[hero]怎么了？",
        "\t[米娅,N335]\b[this,13,8]我想你对村子还不是很熟悉。",
        "\t[米娅,N335]\b[this,13,8]我可以先带你认识一下？",
        "\t[hero]\b[hero]也好……熟悉据点也有助于我活动。",
        "\t[hero]\b[hero]那就劳烦你了。",
        "\t[米娅,N335]\b[this,13,8]嗯，那我们走吧！",
        {
            "type": "moveHero",
            "time": 200,
            "steps": [
                "left:1",
                "down:1",
                "left:3",
                "down:4"
            ]
        },
        {
            "type": "hide",
            "loc": [
                [
                    13,
                    8
                ]
            ],
            "remove": true
        },
        {
            "type": "setHeroIcon",
            "name": "my.png"
        },
        {
            "type": "follow",
            "name": "hero.png"
        },
        {
            "type": "setValue",
            "name": "flag:ztl",
            "value": "1"
        },
        {
            "type": "showStatusBar"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.dzw==4)",
            "true": [
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        0.3
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[hero]\b[hero]呼……今天这一天发生的事情，感觉比一周都多。",
                "\t[hero]\b[hero]身体都快散架了……",
                "\t[hero]\b[hero]身上被刻了契约……现在为止都没有感觉有过异样……",
                "\t[hero]\b[hero]还是说……其实是在骗我？",
                "\t[hero]\b[hero]但想要攻略这座塔……她的力量是必要的。",
                "\t[hero]\b[hero]只能走一步看一步了。",
                "\t[hero]\b[hero]至少今晚能在这张大床上睡过饱觉，那对这个世界还能有什么抱怨呢？",
                {
                    "type": "moveHero",
                    "time": 500,
                    "async": true,
                    "steps": [
                        "right:1"
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "down"
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
                "休息一晚后，生命和魔力恢复了。",
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "1000"
                },
                {
                    "type": "setValue",
                    "name": "status:mana",
                    "value": "100"
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            14,
                            4
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            6,
                            13
                        ]
                    ]
                },
                "\t[???]\b[this,14,4]咳咳！该起床了！",
                "\t[hero]\b[hero]！！？",
                {
                    "type": "setCurtain",
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": "left"
                },
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "happy.mp3",
                    "keep": true
                },
                "\t[hero]\b[hero]喂喂喂！你不知道被男人喊起床是件多么令人心情失落的事情吗！？",
                "\t[伊杰明,N416]\b[this,14,4]啧……能被我喊起床，你已经是沾了大光了。",
                "\t[伊杰明,N416]\b[this,14,4]何况你再不起来，我们可就又要浪费掉一天的时间了。",
                "\t[hero]\b[hero]怎么……现在是什么时候了？",
                "\t[伊杰明,N416]\b[this,14,4]已经中午了……在下可是用完了午饭后才来找你的。",
                "\t[hero]\b[hero]居然一觉睡到了中午……看来我是真的太累了。",
                "\t[伊杰明,N416]\b[this,14,4]我们现在的时间可是很紧迫的。",
                "\t[伊杰明,N416]\b[this,14,4]没有时间磨蹭在睡眠上了。",
                "\t[伊杰明,N416]\b[this,14,4]赫小姐早上已经去探查魔塔了，我和她说咱两需要做些准备。",
                "\t[伊杰明,N416]\b[this,14,4]关于你昨晚的那件事，在下已经有些头绪了。",
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1",
                        "down:1"
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "left"
                },
                "\t[hero]\b[hero]真的？",
                "\t[伊杰明,N416]\b[this,14,4]总之先跟我来吧。",
                {
                    "type": "moveHero",
                    "steps": [
                        "left:2"
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            14,
                            4
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setHeroIcon",
                    "name": "yjm.png"
                },
                {
                    "type": "follow",
                    "name": "hero.png"
                },
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1",
                        "down:8",
                        "left:3"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            6,
                            13
                        ]
                    ]
                },
                "\t[米娅,N335]\b[this,6,13]啊……约瑟先生，你醒了？",
                "\t[米娅,N335]\b[this,6,13]您的午饭……",
                "\t[约瑟,N365]\b[hero,1]先给我那些可以直接拿在手上吃的吧！",
                "\t[约瑟,N365]\b[hero,1]现在恐怕没空坐下来品尝了！",
                "\t[米娅,N335]\b[this,6,13]好……好的！",
                {
                    "type": "move",
                    "loc": [
                        6,
                        13
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "right:3",
                        "up:1"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            9,
                            12
                        ]
                    ]
                },
                {
                    "type": "tip",
                    "text": "获得鸡肉三明治"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "sleep",
                    "time": 500,
                    "noSkip": true
                },
                {
                    "type": "move",
                    "loc": [
                        9,
                        12
                    ],
                    "time": 200,
                    "keep": true,
                    "steps": [
                        "backward:1"
                    ]
                },
                "\t[约瑟,N365]\b[hero,1]谢啦",
                {
                    "type": "moveHero",
                    "steps": [
                        "left:1",
                        "down:3",
                        "left:3",
                        "down:1"
                    ]
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "5"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT7",
                    "loc": [
                        23,
                        20
                    ],
                    "direction": "down"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==11)",
            "true": [
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "happy.mp3",
                    "keep": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            4,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            10
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            13
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            10
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        7,
                        10
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "down:1"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "left",
                    "loc": [
                        [
                            7,
                            11
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        5,
                        11
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "down:1"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        4,
                        11
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "left:1",
                        "down:1"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        5,
                        10
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "right:1",
                        "down:1"
                    ]
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]哦哦，好丰盛的菜系呀！",
                "\t[米娅父亲,N357]\b[this,7,11]哼哼……不是我自夸，我的厨艺在这里可是首屈一指的。",
                "\t[hero]\b[hero]不过，这道烤鸡为何看起来……",
                "\t[米娅父亲,N357]\b[this,7,11]嗯？",
                "\t[米娅,N335]\b[this,3,13]啊，这是我做的，花了不少功夫呢。",
                "\t[米娅,N335]\b[this,3,13]约瑟先生，来试试这道烤鸡吧？",
                "\t[米娅,N335]\b[this,3,13]虽然可能火候有些没控好，但我用了很多香料，相信味道应该不会差的！",
                "\t[米娅父亲,N357]\b[this,7,11]喂喂喂……你怎么真把这给端出来了啊（小声）",
                "\t[米娅父亲,N357]\b[this,7,11]（唔……光看卖相就……关键这傻女儿还觉得很不错。）",
                "\t[hero]\b[hero]嗯……",
                "\t[hero]\b[hero]（尝了一口）",
                "\t[hero]\b[hero]哦！肉香很浓郁啊！",
                "\t[hero]\b[hero]好久没吃过烤鸡了！太过瘾了！",
                "\t[米娅,N335]\b[this,3,13]真的吗！？太好了！我就知道这一次做的应该还挺成功的！",
                "\t[米娅父亲,N357]\b[this,7,11]（真的吗？）",
                {
                    "type": "move",
                    "loc": [
                        7,
                        11
                    ],
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "down:1"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "left",
                    "loc": [
                        [
                            7,
                            12
                        ]
                    ]
                },
                "\t[米娅父亲,N357]\b[this,7,12]（尝了一口）",
                "\t[米娅父亲,N357]\b[this,7,12]！！！",
                "\t[米娅,N335]\b[this,3,13]爸爸，你怎么了？",
                "\t[米娅父亲,N357]\b[this,7,12]没……没事……为父突然肚子有些疼。",
                "\t[米娅父亲,N357]\b[this,7,12]先失陪一下……",
                "\t[米娅,N335]\b[this,3,13]真是的，爸爸！你非要在晚餐时搞这么失礼的事情。",
                "\t[米娅父亲,N357]\b[this,7,12]（唔……不行……这烤鸡完全就是一种酸甜苦辣和焦味糅杂在一起的感觉……我不行了……）",
                {
                    "type": "move",
                    "loc": [
                        7,
                        12
                    ],
                    "time": 200,
                    "steps": [
                        "right:6"
                    ]
                },
                "\t[芙朵,N436]\b[this,2,11]约瑟先生，似乎胃口很好啊？",
                "\t[hero]\b[hero]那是自然，你知道我已经连续吃了半个月路边的魔物了吗？",
                "\t[hero]\b[hero]连一只正常的野兽都没碰到过。",
                "\t[hero]\b[hero]那味道就跟腐肉一样……果然魔物这玩意拿来当锻造素材是绝佳，但用来当食物那可真是地狱。",
                "\t[芙朵,N436]\b[this,2,11]原来魔物的味道是腐肉味吗……",
                "\t[hero]\b[hero]要是能好吃，那还不全被捕猎完了？",
                "\t[hero]\b[hero]对了，伊杰明姑且不说，你师父呢？",
                "\t[芙朵,N436]\b[this,2,11]啊，师傅她习惯提前吃晚餐，之后会花费两小时时间锻炼。",
                "\t[hero]\b[hero]还真是自律，不过看起来你们年龄也没差多少，她就已经是你们的师傅了，实力应该不容小觑。",
                "\t[芙朵,N436]\b[this,2,11]是的，师傅只比我和格兰姆年长五岁，但实力却已经超越很多同级的勇者了。",
                "\t[芙朵,N436]\b[this,2,11]那么，我现在得去给格兰姆送饭了，他估计还得静养两天才能行动。",
                "\t[芙朵,N436]\b[this,2,11]再次感谢你救了他，约瑟先生。",
                "\t[hero]\b[hero]小事一桩，我一向喜欢乐于助人的。",
                {
                    "type": "move",
                    "loc": [
                        2,
                        11
                    ],
                    "time": 200,
                    "steps": [
                        "down:3",
                        "right:4",
                        "down:2"
                    ]
                },
                "\t[hero]\b[hero]呵……难得吃这么爽。",
                "\t[hero]\b[hero]不过没准也是最后一顿了……哈哈……",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 500,
                    "async": true
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "12"
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
                "第二天。生命值重置为3000,抑制器魔力恢复为100。",
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "3000"
                },
                {
                    "type": "setValue",
                    "name": "status:mana",
                    "value": "100"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            13
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT7",
                    "loc": [
                        25,
                        40
                    ],
                    "direction": "up"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==20)",
            "true": [
                {
                    "type": "setBlock",
                    "number": "N335",
                    "loc": [
                        [
                            7,
                            12
                        ]
                    ]
                },
                "\t[hero]\b[hero]不用留我的晚饭了。",
                "\t[hero]\b[hero]在没处理掉这新冒出来的三座塔前我就不回来了。",
                "\t[米娅,N335]\b[this,7,12]这……这也太勉强了吧？",
                "\t[hero]\b[hero]放心……从大小来看，这三座比最初的那座小多了。",
                "\t[hero]\b[hero]一次性解决掉全部的麻烦才是我的风格。",
                "\t[hero]\b[hero]何况……我现在的状态可谓是前所未有的好。",
                "\t[hero]\b[hero]（没有魔化症的困扰后……就感觉整个人实在是精神太多了！）",
                "\t[米娅,N335]\b[this,7,12]虽然……约瑟你昨天回来后，气色比之前好上了很多……",
                "\t[米娅,N335]\b[this,7,12]但一下子连续讨伐三座……",
                "\t[hero]\b[hero]作为漂泊者……只要有魔物，就能通过他们的魔晶来恢复状态。",
                "\t[hero]\b[hero]所以三座还是一座……对我来说差别不大啦。",
                "\t[hero]\b[hero]（原本由于使用力量过多的消耗远大于魔晶的恢复……所以魔化症完完全全是个定时炸弹。）",
                "\t[hero]\b[hero]（但现在有了怀特莉丝后……就变成了正面收益……恐怕我是唯一一个得此殊荣的漂泊者了吧。）",
                "\t[hero]\b[hero]总之……让伊杰明和赫好好养伤吧。",
                "\t[hero]\b[hero]我会在他们康复前回来的。",
                "\t[米娅,N335]\b[this,7,12]约瑟……",
                {
                    "type": "moveHero",
                    "time": 500,
                    "steps": [
                        "down:2"
                    ]
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT94",
                    "loc": [
                        6,
                        8
                    ],
                    "direction": "up"
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "21"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==22)",
            "true": [
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            3,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N428",
                    "loc": [
                        [
                            2,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N417",
                    "loc": [
                        [
                            7,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I362",
                    "loc": [
                        [
                            3,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I361",
                    "loc": [
                        [
                            6,
                            11
                        ]
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "I363",
                    "loc": [
                        [
                            5,
                            12
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            12
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                {
                    "type": "playBgm",
                    "name": "happy.mp3",
                    "keep": true
                },
                "\t[伊杰明,N416]\b[this,7,11]哦……你是说那家伙还变化成了在下吗？",
                "\t[伊杰明,N416]\b[this,7,11]因为口癖不对，被你识破了。",
                "\t[伊杰明,N416]\b[this,7,11]哈哈哈！还真是有趣啊！",
                "\t[伊杰明,N416]\b[this,7,11]嗯……这趣事可以用在创作里。",
                "\t[hero]\b[hero]你们恢复的怎么样了？",
                "\t[赫,N426]\b[this,2,11]基本上已经可以正常活动了。",
                "\t[赫,N426]\b[this,2,11]居然让你一个人处理掉了三座塔……身为勇者还真是惭愧。",
                "\t[伊杰明,N416]\b[this,7,11]确实是厉害啊。",
                "\t[伊杰明,N416]\b[this,7,11]我已经想把你作为我下一部作品的主角了。",
                "\t[hero]\b[hero]呵……要是畅销了记得付我版权费啊。",
                "\t[赫,N426]\b[this,2,11]那么，言归正传。",
                "\t[赫,N426]\b[this,2,11]明日就是真正意义上的最后一战了。",
                "\t[赫,N426]\b[this,2,11]我先前去探查过了。",
                "\t[赫,N426]\b[this,2,11]村子外侧的魔力已经变得非常薄弱了。",
                "\t[赫,N426]\b[this,2,11]即使是村民也可以随意进出，看来塔主已经没法维持他的结界了。",
                "\t[hero]\b[hero]终于是到了强弩之末了啊。",
                "\t[伊杰明,N416]\b[this,7,11]约瑟先生，你方才说这座塔是被称之为始祖塔之一的惶惑之塔吧？",
                "\t[hero]\b[hero]是啊，你对这些有什么头绪吗？",
                "\t[伊杰明,N416]\b[this,7,11]嗯……有关始祖塔的说法其实早在几十年前就已经失传了。",
                "\t[伊杰明,N416]\b[this,7,11]不过从我这些年的走访调查来看。",
                "\t[伊杰明,N416]\b[this,7,11]目前有关记载的塔之始祖已经被攻略了四位。",
                "\t[伊杰明,N416]\b[this,7,11]首先就是你之前在红之塔的记忆中所得知的被帝国攻陷的落日公。",
                "\t[伊杰明,N416]\b[this,7,11]然后是被大法师马林焚多所击败的灾宴主。",
                "\t[伊杰明,N416]\b[this,7,11]以及被第二代帝国剑圣所击败的星空尊。",
                "\t[伊杰明,N416]\b[this,7,11]当然……这三起事件已经相当久远了。",
                "\t[伊杰明,N416]\b[this,7,11]具体情况也无从得知了。",
                "\t[伊杰明,N416]\b[this,7,11]在三十年前被两位漂泊者合作所杀死的虚妄家，算是在下目前找到的最完整的记录了。",
                "\t[伊杰明,N416]\b[this,7,11]虚妄家这位塔主本身战斗力不高，但善用变化之术来欺骗对手。",
                "\t[伊杰明,N416]\b[this,7,11]但最后被一位无名的漂泊者联合另一位叫温蒂的漂泊者反将一军而死。",
                "\t[伊杰明,N416]\b[this,7,11]这么一想……那位巴别塔的黑衣人倒也将变化之术用的出神入化。",
                "\t[伊杰明,N416]\b[this,7,11]莫非他们掌握了始祖们的某种力量……",
                "\t[伊杰明,N416]\b[this,7,11]曾经有过一个说法，将这些始祖全部杀死后，这个世界上的魔塔就会彻底消失。",
                "\t[伊杰明,N416]\b[this,7,11]不过，由于这些始祖的力量太过强大，能够杀死他们的勇士寥寥无几。",
                "\t[伊杰明,N416]\b[this,7,11]随着历史的变迁，这些事件也逐渐被人遗忘。",
                "\t[赫,N426]\b[this,2,11]我在勇者协会也未曾了解过这些。",
                "\t[赫,N426]\b[this,2,11]看来确实自从那场大浩劫后，很多东西都失传了。",
                "\t[伊杰明,N416]\b[this,7,11]在下走访世界各地，其目的之一就是收集这些零碎的信息。",
                "\t[伊杰明,N416]\b[this,7,11]把最初的历史拼图给拼起来。",
                "\t[hero]\b[hero]那么，这一次的魔塔就确定是始祖——惶惑卿了吧？",
                "\t[hero]\b[hero]有过这一位的始祖的记录吗？",
                "\t[伊杰明,N416]\b[this,7,11]很遗憾……在下也并未得知过有关惶惑卿的消息。",
                "\t[米娅,N335]\b[this,13,12]惶惑……",
                {
                    "type": "setBlock",
                    "number": "N336",
                    "loc": [
                        [
                            12,
                            12
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        12,
                        12
                    ],
                    "time": 500,
                    "keep": true,
                    "steps": [
                        "left:3"
                    ]
                },
                "\t[米娅,N335]\b[this,9,12]我好像有点印象？",
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            7,
                            11
                        ]
                    ]
                },
                {
                    "type": "changePos",
                    "direction": "right"
                },
                "\t[伊杰明,N416]\b[this,7,11]当真？米娅小姐？",
                "\t[伊杰明,N416]\b[this,7,11]是这个村子附近流传的吗？",
                "\t[米娅,N335]\b[this,9,12]嗯……我想起来了！",
                "\t[米娅,N335]\b[this,9,12]以前我还是小孩的时候，村里的老人曾经给我们讲过故事。",
                "\t[米娅,N335]\b[this,9,12]相传在几十年前，这里就出现过一座魔塔。",
                "\t[米娅,N335]\b[this,9,12]就是我之前和约瑟先生说的那个！村里的那个雕像！",
                "\t[hero]\b[hero]你是说……那个曾经救了村子的无名勇者？",
                "\t[米娅,N335]\b[this,9,12]嗯，当时出现的那座塔就是叫惶惑之间。",
                "\t[米娅,N335]\b[this,9,12]勇者的名字没有留下来，但那座塔的名字被写进了故事里。",
                "\t[米娅,N335]\b[this,9,12]相传是一位身着漆黑铠甲的勇者进入了惶惑之间。",
                "\t[米娅,N335]\b[this,9,12]之后他就连同惶惑之间一起消失了。",
                "\t[hero]\b[hero]漆黑铠甲的勇者……",
                "\t[伊杰明,N416]\b[this,7,11]黑骑士吗。",
                "\t[赫,N426]\b[this,2,11]原来如此……几十年前……",
                "\t[赫,N426]\b[this,2,11]怪不得他所用的招式与勇者协会所传授的技能如此相像。",
                "\t[hero]\b[hero]被制作成傀儡也与那个塔主的能力对应上了。",
                "\t[hero]\b[hero]啧……要是输了……恐怕我们也会变成傀儡了。",
                "\t[伊杰明,N416]\b[this,7,11]不过当初黑骑士究竟为何能够让惶惑之间消失……",
                "\t[伊杰明,N416]\b[this,7,11]而之后惶惑之间又为什么能够再现……",
                "\t[伊杰明,N416]\b[this,7,11]这还真是从未听闻过的情况。",
                "\t[赫,N426]\b[this,2,11]不管怎么样……明天必须彻底的打败惶惑卿。",
                "\t[赫,N426]\b[this,2,11]解散吧。",
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 800,
                    "async": true
                },
                {
                    "type": "move",
                    "loc": [
                        2,
                        11
                    ],
                    "time": 200,
                    "keep": true,
                    "async": true,
                    "steps": [
                        "up:1"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        7,
                        11
                    ],
                    "time": 200,
                    "keep": true,
                    "async": true,
                    "steps": [
                        "up:3"
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        9,
                        12
                    ],
                    "time": 200,
                    "steps": [
                        "right:4"
                    ]
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setBlock",
                    "number": "N427",
                    "loc": [
                        [
                            2,
                            10
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            1,
                            10
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            13,
                            11
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            13,
                            9
                        ]
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==23)",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            1,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            10
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            11
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            12
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
                "\t[hero]\b[hero]见鬼……脑袋好疼……",
                "\t[hero]\b[hero]怎么会做了这么长的梦……",
                "\t[hero]\b[hero]看来我最近真是神经过敏了。",
                "\t[hero]\b[hero]呵呵……米洛……如今我的这幅样子，是否有一点你的影子？",
                "\t[怀特莉丝,N430]\b[hero]叽里呱啦的说什么呢？",
                "\t[hero]\b[hero]没什么……就是梦到了些本以为忘记的记忆。",
                "\t[hero]\b[hero]差点就陷在过去了啊。",
                "\t[怀特莉丝,N430]\b[hero]哼，吊人胃口吗？",
                "\t[hero]\b[hero]这样吧，要是我们成功击败惶惑卿的话，你也找回了自己的记忆。",
                "\t[hero]\b[hero]我就在之后的旅行中把我的过去讲给你听。",
                "\t[怀特莉丝,N430]\b[hero]哦……亏你还记得之前的约定啊",
                "\t[怀特莉丝,N430]\b[hero]不过你这……在我的印象里……好像叫做什么战前flag吧？",
                "\t[怀特莉丝,N430]\b[hero]是叫这个名词吗？虽然浮现出了这个名词……但我不记得是什么意思了。",
                "\t[hero]\b[hero]就是开战前立下约定，在战后要干什么事情。",
                "\t[hero]\b[hero]然后就绝对会战死。",
                "\t[怀特莉丝,N430]\b[hero]那你弄这种不吉利的约定是什么意思？",
                "\t[hero]\b[hero]因为我会证明自己能够打破这种迷信。",
                "\t[hero]\b[hero]而且立下flag再获得胜利，显得很帅气嘛。",
                "\t[怀特莉丝,N430]\b[hero]你是睡觉睡傻了吗？",
                "\t[怀特莉丝,N430]\b[hero]要是真因为这个失败了，我可饶不了你！",
                "\t[hero]\b[hero]走啦，去集合了。",
                "生命重置至5000，黄蓝钥匙清零，魔力补满。",
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "24"
                },
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "value": "5000"
                },
                {
                    "type": "setValue",
                    "name": "status:mana",
                    "value": "100"
                },
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "value": "0"
                },
                {
                    "type": "setValue",
                    "name": "item:blueKey",
                    "value": "0"
                },
                {
                    "type": "function",
                    "function": "function(){\ncore.setFlag('skill', 0); // 关闭技能状态\ncore.setFlag('skillName', '无');\nflags.sc = \"#FFFFFF\";\nflags.sr = 0\n}"
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
                    "type": "changeFloor",
                    "floorId": "MT7",
                    "loc": [
                        25,
                        40
                    ],
                    "direction": "down"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "4,13": [
            {
                "type": "playSound",
                "name": "item.mp3"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        12
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "10,12": [
            "\t[米娅,N335]\b[hero]对了，约瑟，你还没吃早饭吧？",
            "\t[米娅,N335]\b[hero]桌上的三明治是留给你的。",
            "\t[约瑟,N365]\b[hero,1]是我喜欢的草莓果酱。",
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        12
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        13
                    ]
                ],
                "remove": true
            }
        ],
        "10,13": [
            "\t[米娅,N335]\b[hero]对了，约瑟，你还没吃早饭吧？",
            "\t[米娅,N335]\b[hero]桌上的三明治是留给你的。",
            "\t[约瑟,N365]\b[hero,1]是我喜欢的草莓果酱。",
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        12
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        10,
                        13
                    ]
                ],
                "remove": true
            }
        ],
        "16,10": [
            {
                "type": "if",
                "condition": "(flags.gsmy==1)",
                "true": [
                    "\t[约瑟,N365]\b[hero]还是不去米娅的房间了。",
                    {
                        "type": "moveHero",
                        "steps": [
                            "down:1"
                        ]
                    }
                ],
                "false": [
                    "\t[米娅,hero]\b[hero]楼上是我和爸爸的房间，就不去啦。",
                    {
                        "type": "moveHero",
                        "steps": [
                            "down:1"
                        ]
                    }
                ]
            }
        ],
        "6,16": [
            {
                "type": "if",
                "condition": "(flags.dzw==22)",
                "true": [
                    "\t[hero]\b[hero]明天就要决战了，大晚上的就不出门了。",
                    {
                        "type": "moveHero",
                        "steps": [
                            "up:1"
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "setBlock",
                        "number": "A367",
                        "loc": [
                            [
                                23,
                                18
                            ]
                        ],
                        "floorId": "MT7"
                    },
                    {
                        "type": "setBlock",
                        "number": "A368",
                        "loc": [
                            [
                                23,
                                19
                            ]
                        ],
                        "floorId": "MT7"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT7",
                        "loc": [
                            23,
                            20
                        ],
                        "direction": "down"
                    }
                ]
            }
        ],
        "4,12": {
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
        "14,4": {
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
        "6,13": {
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
        "4,11": {
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
        "5,11": {
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
        "5,10": {
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
        "3,13": {
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
        "7,10": {
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
        "2,11": {
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
                    "type": "if",
                    "condition": "(flags.dzw==22)",
                    "true": []
                }
            ]
        },
        "3,11": {
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
        "0,0": [
            "第二版到此结束，感谢您的游玩。",
            {
                "type": "choices",
                "text": "要去尝试游玩与本塔同一世界观的作品\n《虚妄之间》（另一位漂泊者无名的故事）或\n《凝滞之间》（吟游诗人伊杰明在另一座魔塔的故事）吗？\n选择选项之后就能提交本塔成绩了。",
                "choices": [
                    {
                        "text": "玩《凝滞之间》",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/nzzjmt/\");\n}"
                            }
                        ]
                    },
                    {
                        "text": "玩《虚妄之间》",
                        "action": [
                            {
                                "type": "function",
                                "function": "function(){\nwindow.open(\"https://h5mota.com/games/xwzjmt/\");\n}"
                            }
                        ]
                    },
                    {
                        "text": "不玩",
                        "action": []
                    }
                ]
            },
            {
                "type": "choices",
                "text": "选择计分规则",
                "choices": [
                    {
                        "text": "生命",
                        "action": [
                            "分数为生命。",
                            "额外的，每把绿钥匙增加1000000分。",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "core.itemCount('greenKey')*1000000"
                            },
                            {
                                "type": "win",
                                "reason": "离开遗迹(生命榜)"
                            }
                        ]
                    },
                    {
                        "text": "钥匙",
                        "action": [
                            "分数为1000+蓝钥匙*1000+黄钥匙*500",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "value": "1000+flags.yjh*500+flags.yjl*1000"
                            },
                            "额外的，每把绿钥匙增加1000000分。",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "core.itemCount('greenKey')*1000000"
                            },
                            {
                                "type": "win",
                                "reason": "离开遗迹(钥匙榜)"
                            }
                        ]
                    },
                    {
                        "text": "综合",
                        "action": [
                            "分数为生命+蓝钥匙*1000+黄钥匙*500+魔力*50",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "flags.yjh*500+flags.yjl*1000+hero.mana*50"
                            },
                            "额外的，每把绿钥匙增加1000000分。",
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "+=",
                                "value": "core.itemCount('greenKey')*1000000"
                            },
                            {
                                "type": "win",
                                "reason": "离开遗迹(综合榜)"
                            }
                        ]
                    }
                ]
            }
        ],
        "7,12": {
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
        "2,10": [
            {
                "type": "if",
                "condition": "(flags.dzw==22)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(flags.h1==1)",
                        "true": [
                            "\t[赫,N426]\b[this,2,10]记得别告诉别人，听到了吗？"
                        ],
                        "false": [
                            "\t[hero]\b[hero]哦？你在画画？",
                            "\t[赫,N426]\b[this,2,10]怎么？觉得不像是我这样的人会做的事吗？",
                            "\t[hero]\b[hero]嘿……还真是……没想到你画画水平居然这么高。",
                            "\t[hero]\b[hero]完全可以当个画家了。",
                            "\t[hero]\b[hero]应该是从小就开始练习了吧？既然如此……为什么又当起勇者来了？",
                            "\t[赫,N426]\b[this,2,10]没错……画画确实是我从小就开始的。",
                            "\t[赫,N426]\b[this,2,10]不过我最初的目标就是当一位勇者。",
                            "\t[赫,N426]\b[this,2,10]我的父母就是勇者……但为了处理魔塔，我几乎没怎么见过他们。",
                            "\t[赫,N426]\b[this,2,10]于是小时候的我就在想……要是我也当上勇者就能一直见到他们了吧……",
                            "\t[赫,N426]\b[this,2,10]但当时我只是一味的沉浸在画中的幻想里。",
                            "\t[赫,N426]\b[this,2,10]并未付出过什么行动。",
                            "\t[赫,N426]\b[this,2,10]直到被一个塔主给欺骗……用我的画变成了魔塔……",
                            "\t[赫,N426]\b[this,2,10]犯下大错的我本该成为一个罪人而死去。",
                            "\t[赫,N426]\b[this,2,10]但我在画中设计出的自己却前来拯救了我……",
                            "\t[赫,N426]\b[this,2,10]那个理想中的自己也教会了我……要实现梦想不能只停留在梦和想上面。",
                            "\t[赫,N426]\b[this,2,10]前面的实现两字……才是我应该注意的。",
                            "\t[赫,N426]\b[this,2,10]实现梦想这四个字……没有前面的实现就不会有后面的梦想。",
                            "\t[赫,N426]\b[this,2,10]当然……现在画画的爱好也保留了下来。",
                            "\t[赫,N426]\b[this,2,10]毕竟做与想要相辅相成啊。",
                            "\t[hero]\b[hero]没想到你曾经的故事还挺浪漫的。",
                            "\t[赫,N426]\b[this,2,10]我也真是喝多了……居然会和你说这些……",
                            "\t[赫,N426]\b[this,2,10]你可别告诉其他人！",
                            "\t[hero]\b[hero]哈哈，当然……我可不敢得罪赫小姐你。",
                            {
                                "type": "setValue",
                                "name": "flag:h1",
                                "value": "1"
                            }
                        ]
                    },
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                2,
                                10
                            ]
                        ]
                    }
                ]
            }
        ],
        "7,8": [
            {
                "type": "if",
                "condition": "(flags.dzw==22)",
                "true": [
                    {
                        "type": "if",
                        "condition": "(flags.yjm1==1)",
                        "true": [
                            "\t[伊杰明,N416]\b[this,7,8]不睡觉吗？约瑟先生？",
                            {
                                "type": "turnBlock",
                                "direction": "up",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ]
                            }
                        ],
                        "false": [
                            "\t[伊杰明,N416]\b[this,7,8]不睡觉吗？约瑟先生？",
                            "\t[伊杰明,N416]\b[this,7,8]在下之前看您很热衷于睡眠啊。",
                            "\t[hero]\b[hero]那还不是因为累的。",
                            "\t[伊杰明,N416]\b[this,7,8]哈哈……越有能力的人就要越辛苦。",
                            "\t[伊杰明,N416]\b[this,7,8]正是这个时代的世道啊。",
                            "\t[hero]\b[hero]不过我倒是很好奇你究竟为何会踏上研究魔塔的道路。",
                            "\t[hero]\b[hero]像你这样专程为了研究魔塔而只身入塔的人我可是第一次见到。",
                            "\t[伊杰明,N416]\b[this,7,8]我过去在魔塔中见证过很多故事。",
                            "\t[伊杰明,N416]\b[this,7,8]比方说我一次旅行时，在一座位于城镇废墟中的魔塔里邂逅了一位失忆少女。",
                            "\t[伊杰明,N416]\b[this,7,8]那座魔塔竟是由她思念而出现的。",
                            "\t[伊杰明,N416]\b[this,7,8]因为想小镇永远停留在被毁灭前……由此而诞生的愿望，结合她体内庞大的魔力，形成了那座魔塔。",
                            "\t[伊杰明,N416]\b[this,7,8]但过去终究已经成为了历史……不论多么强大的力量也无法改变现实。",
                            "\t[伊杰明,N416]\b[this,7,8]当少女找回了因痛苦而封锁起来的回忆以后，那座魔塔便连同她一起消失了。",
                            "\t[伊杰明,N416]\b[this,7,8]少女本身完全就是人类……并不是同其他塔主一样的人类。",
                            "\t[伊杰明,N416]\b[this,7,8]那座魔塔的形成仅仅源自她最真挚的感情。",
                            "\t[伊杰明,N416]\b[this,7,8]从那一刻起……在下就在思考……一直以来人们都认为魔塔是魔族侵略人类的一种手段。",
                            "\t[伊杰明,N416]\b[this,7,8]但真相真是如此吗？",
                            "\t[伊杰明,N416]\b[this,7,8]魔塔中似乎还藏着另一种答案。",
                            "\t[伊杰明,N416]\b[this,7,8]而在下想寻找到新的可能。",
                            "\t[hero]\b[hero]呵……突然这么严肃，我还真是有些不适应了。",
                            "\t[hero]\b[hero]受益良多的对话啊……",
                            {
                                "type": "moveHero",
                                "time": 500,
                                "steps": [
                                    "down:1"
                                ]
                            },
                            {
                                "type": "turnBlock",
                                "direction": "down",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ]
                            },
                            "\t[伊杰明,N416]\b[this,7,8]呵呵……那么约瑟先生，你真正的想法是什么呢？",
                            "\t[伊杰明,N416]\b[this,7,8]在下也见过其他的漂泊者……但他们仅仅是出于自身需求。",
                            "\t[伊杰明,N416]\b[this,7,8]若是有超出回报的风险，立刻就会撤退。",
                            "\t[伊杰明,N416]\b[this,7,8]但你似乎并不是出于自身的目的才留下来帮忙的。",
                            "\t[伊杰明,N416]\b[this,7,8]比起其他的漂泊者……你似乎完全不介意前方有多危险。",
                            "\t[hero]\b[hero]哈哈……哪有这么复杂。",
                            "\t[hero]\b[hero]不过是看那个塔不爽而已。",
                            {
                                "type": "turnBlock",
                                "direction": "up",
                                "loc": [
                                    [
                                        7,
                                        8
                                    ]
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "flag:yjm1",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ],
        "1,10": {
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
        "13,11": {
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
                    "type": "if",
                    "condition": "(flags.dzw==22)",
                    "true": [
                        {
                            "type": "if",
                            "condition": "((flags.yjm1==1)&&(flags.h1==1))",
                            "true": [
                                {
                                    "type": "show",
                                    "loc": [
                                        [
                                            13,
                                            8
                                        ]
                                    ]
                                }
                            ],
                            "false": [
                                "\t[hero]\b[hero]现在离睡觉时间似乎有点早。",
                                "\t[hero]\b[hero]是否应该再走走呢？",
                                {
                                    "type": "moveHero",
                                    "steps": [
                                        "down:1"
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "13,9": {
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
                    "type": "if",
                    "condition": "(flags.dzw==22)",
                    "true": [
                        {
                            "type": "setHeroIcon",
                            "name": "o.png"
                        },
                        "\t[怀特莉丝,N430]\b[hero]你的两位同伴倒是都很有故事啊。",
                        {
                            "type": "setHeroIcon",
                            "name": "hero.png"
                        },
                        "\t[hero]\b[hero]比起他们，你的过去恐怕更扑朔迷离吧 ",
                        "\t[hero]\b[hero]探索到目前为止都没有收集到任何有关你的信息。",
                        {
                            "type": "setHeroIcon",
                            "name": "o.png"
                        },
                        "\t[怀特莉丝,N430]\b[hero]……我也很苦恼这个。",
                        "\t[怀特莉丝,N430]\b[hero]但总之……只要明天了结掉那个惶惑卿……即使没能找回记忆，也算如愿了。",
                        "\t[怀特莉丝,N430]\b[hero]不过那个诗人说的不错……",
                        "\t[怀特莉丝,N430]\b[hero]你确实比其他人都多了一种拼命感。",
                        "\t[怀特莉丝,N430]\b[hero]虽然表面上是被我的契约束缚。",
                        "\t[怀特莉丝,N430]\b[hero]但我能感觉得到……你即使没有我的契约，也会留下来的。",
                        "\t[怀特莉丝,N430]\b[hero]你的过去又发生过什么？",
                        {
                            "type": "setHeroIcon",
                            "name": "hero.png"
                        },
                        "\t[hero]\b[hero]呵呵……不过是个落魄少爷的故事而已。",
                        "\t[hero]\b[hero]没什么值得一提。",
                        "\t[hero]\b[hero]硬要说的话，只是我天生正义十足吧？",
                        {
                            "type": "setHeroIcon",
                            "name": "o.png"
                        },
                        "\t[怀特莉丝,N430]\b[hero]哼……不愿意说么。",
                        {
                            "type": "setHeroIcon",
                            "name": "hero.png"
                        },
                        "\t[hero]\b[hero]好了，先睡得饱饱的。",
                        "\t[hero]\b[hero]为明天的决战做准备吧。",
                        {
                            "type": "moveHero",
                            "time": 200,
                            "async": true,
                            "steps": [
                                "up:5",
                                "right:3",
                                "up:1"
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
                            "time": 1500,
                            "keep": true
                        },
                        {
                            "type": "waitAsync"
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT129",
                            "loc": [
                                7,
                                7
                            ],
                            "direction": "left"
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
    "cannotMove": {
        "1,10": [
            "up",
            "down",
            "left",
            "right"
        ]
    },
    "cannotMoveIn": {
        "1,10": [
            "up",
            "down",
            "left",
            "right"
        ]
    },
    "map": [
    [143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,  0,  0,30047,  0,  0,  0,30090,143],
    [143,143,143,143,143,143,143,143,143,143,143,30098,30099,30055,30187,30188,  0,30095,143],
    [143,143,143,143,143,143,143,143,143,143,143,30106,30107,  0,30195,30196,  0,30103,143],
    [143,143,143,143,143,143,143,143,143,143,143,30166,  0,  0,418,  0,  0,30111,143],
    [143,143,143,143,143,143,143,143,143,143,143,30174,  0,  0,  0,  0,  0,  0,143],
    [143,30100,30101,  0,30064,30065,30066,30046,  0,  0,143,  0,  0,  0,  0,  0,30096,30097,143],
    [143,30059,30060,30061,30072,30073,30074,30054,30123,30124,143,30094,  0,  0,  0,  0,30104,30105,143],
    [143,30067,30068,30069,30080,30081,30082,  0,30131,30132,143,  0,  0,  0,  0,  0,  0,  0,143],
    [143,30062,  0,  0,  0,  0,  0,  0,  0,30114,143,143,143,  0,143,143,143,143,143],
    [143,90185,  0,30040,30041,363,30042,358,  0,30122,30016,30017,30017,  0,30017,30136,30137,30138,143],
    [143,30078,438,364,362,361,362,358,  0,30130,30024,30025,30025,  0,30025,30144,30145,30146,143],
    [143,30110,  0,30048,364,363,361,335,  0,  0,  0,  0,  0,  0,  0,30152,30153,30154,143],
    [143,30109,  0,338,30057,338,338,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,143],
    [143,30133,  0,  0,  0,  0,  0,  0,  0,  0,143,143,143,143,143,143,143,143,143],
    [143,30120,30121,  0,  0,  0,  0,  0,  0,  0,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143, 93,143,143,143,143,143,143,143,143,143,143,143,143],
    [143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143,143]
],
    "bgmap": [
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,10145,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000],
    [30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000,30000]
],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30118,30117,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30126,30125,  0,  0,  0, 17,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30103,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30175,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30088,30089,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30086,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30102,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0, 17, 17, 17, 17,  0,  0,  0,  0,30115,  0,  0,  0,  0,  0,  0,  0],
    [  0,30102,  0, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0, 17, 17, 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30017,30017,30017,30017,30017,30017,30017,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30025,30025,30025,30025,30025,30025,30025,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,144,144,144,  0,  0,  0],
    [  0,30017,30017,30017,30017,30017,30017,30017,30017,30017,  0,  0,  0,144,144,144,  0,  0,  0],
    [  0,30025,30025,30025,30025,30025,30025,30025,30025,30025,  0,  0,  0,144,144,144,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,30110,  0,  0,  0,  0,  0,  0,  0],
    [  0,30070,  0,  0,  0,30041,  0,  0,  0,  0,  0,  0,  0,  0,  0,30017,30017,30017,  0],
    [  0,  0,30039,30048,30049,30049,30050,30039,  0,  0,  0,  0,  0,  0,  0,30025,30025,30025,  0],
    [  0,  0,  0,30048,30049,30049,30050,30039,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,30056,30057,30057,30058,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "color": null
}