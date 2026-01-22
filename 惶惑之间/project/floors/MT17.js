main.floors.MT17=
{
    "floorId": "MT17",
    "title": "魔塔 0 层",
    "name": "魔塔 0 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": null,
    "weather": null,
    "firstArrive": [
        {
            "type": "if",
            "condition": "flags.b10b!=1",
            "true": [
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "1-10.mp3",
                    "keep": true
                }
            ]
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.dzw==13)",
            "true": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            7
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            7,
                            7
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            7
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            10,
                            7
                        ]
                    ]
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                {
                    "type": "pauseBgm"
                },
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "wx.mp3",
                    "keep": true
                },
                "\t[hero]\b[hero]三处楼梯？这又是怎么回事。",
                "\t[hero]\b[hero]我记得上一次可没这种场面吧？",
                "\t[赫,N426]\b[this,7,7]嗯……我昨天来的时候也只是一处楼梯。",
                "\t[伊杰明,N416]\b[this,5,7]……",
                "\t[伊杰明,N416]\b[this,5,7]完全像是为我们特地准备的一样，是吧？",
                "\t[伊杰明,N416]\b[this,5,7]看来塔主是有意想和我们来一局游戏。",
                "\t[hero]\b[hero]什么意思？",
                "\t[伊杰明,N416]\b[this,5,7]约瑟先生，赫小姐，你们应该知道魔塔中所谓的平衡性调整吧？",
                "\t[赫,N426]\b[this,7,7]嗯……就是塔主不能让魔塔完全倾向于他，导致攻略者毫无机会。",
                "\t[赫,N426]\b[this,7,7]虽然可以利用魔塔源源不断的制造魔物，和抢夺资源。但是每一座魔塔都会在塔主和挑战者之间存在一个相对公平的法则。",
                "\t[赫,N426]\b[this,7,7]这称为平衡性调整。",
                "\t[赫,N426]\b[this,7,7]像我们这样的挑战者对塔主来说就像是天敌一般，理论上只要挑战者源源不断，再强大的魔塔也有被挑战成功的一天。",
                "\t[伊杰明,N416]\b[this,5,7]魔塔先前让多个挑战者分散在不同的空间中，就是一个防止挑战者集合力量超过塔主力量的经典平衡性法则。",
                "\t[伊杰明,N416]\b[this,5,7]但是塔主是可以根据自己的想法在不破坏平衡性的基础上，自由设计塔中的法则。",
                "\t[伊杰明,N416]\b[this,5,7]而现在起点处出现三处楼梯，正是说明了这里的塔主已经设计好了新的法则。",
                "\t[伊杰明,N416]\b[this,5,7]一般主动变化法则的塔主并不多……因为大部分都是些吃老本的存在。",
                "\t[伊杰明,N416]\b[this,5,7]这也是他们被击败的一大原因。",
                "\t[伊杰明,N416]\b[this,5,7]而这座塔的塔主……嘿嘿……果然没让我失望……",
                "\t[hero]\b[hero]唉，这就让问题更复杂了么。",
                "\t[伊杰明,N416]\b[this,5,7]就是要击破这样的魔塔，才能获得更高的成就感啊！",
                "\t[赫,N426]\b[this,7,7]但这三处楼梯究竟有什么深意吗？若是分开我们，也根本不需要如此大费周章。",
                "\t[赫,N426]\b[this,7,7]原本的法则就能让我们每一层都处在不同的空间里。",
                "\t[赫,N426]\b[this,7,7]何必这么多此一举？",
                "\t[hero]\b[hero]就是说……相互关联吧。",
                "\t[hero]\b[hero]恐怕这一次我们所处的空间并不会和以前一样完全独立。",
                "\t[hero]\b[hero]而是相互之间会有某种联系。",
                "\t[hero]\b[hero]需要我们三个人在不同的空间中靠默契达成某些条件，才能继续前进。",
                "\t[伊杰明,N416]\b[this,5,7]厉害！约瑟先生，看来你真的很有攻略魔塔的天赋。",
                "\t[伊杰明,N416]\b[this,5,7]不如以后我们结伴而行共同探索魔塔的奥秘吧！",
                "\t[hero]\b[hero]只是经历的魔塔多了，得出的经验罢了。",
                "\t[hero]\b[hero]同行就免了，我还是习惯做个独行侠。",
                "\t[赫,N426]\b[this,7,7]老实说，我是真想把你们挖来勇者协会。",
                "\t[赫,N426]\b[this,7,7]虽然知道你们不会答应……但我希望解决完这次事件后你们还是能够考虑一下。",
                "\t[伊杰明,N416]\b[this,5,7]倒不如结束后你反过来加入我们去旅行如何？",
                "\t[hero]\b[hero]喂喂……你干嘛说得好像我和你之后就一块行动了一样 ",
                "\t[hero]\b[hero]说起来……你那个护符既然可以将另外的持有者传送过来。",
                "\t[hero]\b[hero]是不是意味着就一个人上去就行了？",
                "\t[伊杰明,N416]\b[this,5,7]唉……没有那么好的事情啊。",
                "\t[伊杰明,N416]\b[this,5,7]我们所在的层数越接近，传送的成功率才会越高。",
                "\t[伊杰明,N416]\b[this,5,7]所以还是得三个人都努力向上去才行。",
                "\t[伊杰明,N416]\b[this,5,7]等我一下。",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        5,
                        7
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "A468",
                    "loc": [
                        [
                            3,
                            5
                        ]
                    ]
                },
                "\t[伊杰明,N416]\b[this,5,7]嗯……这个法阵在我们如果三个也不敌黑骑士的情况下可以将我们之间传送回来。",
                "\t[伊杰明,N416]\b[this,5,7]相当于是上一层保险吧。",
                "\t[hero]\b[hero]可别又像昨天一样出问题了。",
                "\t[伊杰明,N416]\b[this,5,7]放心吧，这次绝对不会有问题。",
                "\t[赫,N426]\b[this,7,7]闲话不多说了，准备出发吧。",
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            7,
                            7
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        7,
                        7
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "right:2"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "left",
                    "loc": [
                        [
                            9,
                            7
                        ]
                    ]
                },
                "\t[赫,N426]\b[this,9,7]那么，祝二位武运昌隆。",
                {
                    "type": "turnBlock",
                    "direction": "right",
                    "loc": [
                        [
                            9,
                            7
                        ]
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            7
                        ]
                    ],
                    "remove": true,
                    "time": 500
                },
                {
                    "type": "move",
                    "loc": [
                        5,
                        7
                    ],
                    "time": 300,
                    "keep": true,
                    "steps": [
                        "left:2"
                    ]
                },
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            3,
                            7
                        ]
                    ]
                },
                "\t[伊杰明,N416]\b[this,3,7]……",
                "\t[伊杰明,N416]\b[this,3,7]呵呵……让我期待一下吧。",
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
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            7
                        ]
                    ],
                    "remove": true,
                    "time": 500
                },
                "\t[hero]\b[hero]啧，三人合作……估计真是一辈子难得的经历。",
                "\t[hero]\b[hero]话说……我该怎么去找那位小姐？",
                "\t[hero]\b[hero]底层也没有了先前往下的通道。",
                "\t[hero]\b[hero]……",
                "\t[hero]\b[hero]难道我即使完成了任务，也不得不进入生命倒计时？",
                "\t[hero]\b[hero]唔……这就让我死的很没面子了啊……",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        5,
                        4
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ]
                },
                "\t[hero]\b[hero]嘿……来了啊……",
                "\t[hero]\b[hero]看来还真是不能小看她。",
                {
                    "type": "moveHero",
                    "time": 300,
                    "steps": [
                        "up:1",
                        "left:1",
                        "up:1"
                    ]
                },
                {
                    "type": "setHeroOpacity",
                    "opacity": 0,
                    "time": 500
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "14"
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
                    "floorId": "MT51",
                    "loc": [
                        6,
                        8
                    ]
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.dzw==15)",
            "true": [
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]多花了不少时间……",
                "\t[hero]\b[hero]希望他们别领先我太多。",
                "\t[怀特莉丝,N430]\b[hero]在我的帮助下，你前进的速度应该能够大幅提高。",
                "\t[hero]\b[hero]这倒也是……",
                "\t[hero]\b[hero]没了诅咒的影响，我现在可谓状态绝佳呀！",
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "16"
                },
                "\t[hero]\b[hero]出发了！",
                {
                    "type": "moveHero",
                    "steps": [
                        "right:1",
                        "up:3"
                    ]
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT62",
                    "loc": [
                        6,
                        1
                    ],
                    "direction": "down"
                }
            ]
        },
        {
            "type": "if",
            "condition": "(flags.hqs==1)",
            "true": [
                {
                    "type": "loadBgm",
                    "name": "wx.mp3"
                },
                {
                    "type": "setBlock",
                    "number": "N417",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ]
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            4
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
                "\t[伊杰明,N416]\b[this,5,4]初次见面，我该怎么称呼您呢？",
                "\t[伊杰明,N416]\b[this,5,4]先前在村里的水井处，破坏掉我的魔法阵的……小鬼？",
                "\t[伊杰明,N416]\b[this,5,4]还是……巴别塔的疯子？",
                "\t[hero]\b[hero]你说什么……！？",
                "\t[伊杰明,N416]\b[this,5,4]这一次又想修改我的法阵……不过我这次的法阵你还满意吗？",
                "\t[黑衣人,N495]\b[this,2,4]……",
                "\t[黑衣人,N495]\b[this,2,4]哎呀呀……玩过头了么……",
                "\t[黑衣人,N495]\b[this,2,4]真是没想到啊。",
                "\t[黑衣人,N495]\b[this,2,4]你这次的魔法阵看着像传送法阵，实际上居然是束缚法阵。",
                "\t[黑衣人,N495]\b[this,2,4]不愧是魔法天才……伊杰明啊。",
                "\t[伊杰明,N416]\b[this,5,4]将自己伪装成村子中的小孩……还给附近的村民修改了认知和记忆……",
                "\t[伊杰明,N416]\b[this,5,4]你究竟在村里潜伏了多久？",
                "\t[hero]\b[hero]（修改认知……原来今早伊杰明就是去治疗被修改认知的村民……所以才会有村民在感谢他吗？）",
                "\t[黑衣人,N495]\b[this,2,4]哈哈！原本只是想玩玩你才修改了你的传送阵。",
                "\t[黑衣人,N495]\b[this,2,4]没想到……一下子就露出了破绽。",
                "\t[黑衣人,N495]\b[this,2,4]这下直接失去了卧底的机会了……唉……亏大了，亏大了。",
                "\t[赫,N426]\b[this,5,6]你……是巴别塔的人！？",
                "\t[hero]\b[hero]巴别塔是什么？",
                "\t[赫,N426]\b[this,5,6]一个企图让魔塔遍布世界的疯子组织……",
                "\t[赫,N426]\b[this,5,6]他们坚信魔塔才是这个世界的本质……彻底的反社会人格。",
                "\t[hero]\b[hero]这么一说的话，伊杰明，和你倒还有几分相似啊？",
                "\t[伊杰明,N416]\b[this,5,4]不不不……约瑟先生，可别把在下与他们混为一谈啊。",
                "\t[伊杰明,N416]\b[this,5,4]在下的创作可是服务于人类的，和他们这种想毁灭人类的做法可是天壤之别啊。",
                "\t[黑衣人,N495]\b[this,2,4]啧……可惜啊……伊杰明……你对魔塔的狂热研究若是能服务于我们的组织……",
                "\t[黑衣人,N495]\b[this,2,4]首领可是很看重你的……",
                "\t[伊杰明,N416]\b[this,5,4]被困在了法阵中还能大放厥词？",
                "\t[黑衣人,N495]\b[this,2,4]被困？",
                "\t[黑衣人,N495]\b[this,2,4]哈哈！我只是故意待在这里等你罢了！",
                "\t[黑衣人,N495]\b[this,2,4]真以为我会被这种程度的束缚困住吗！？",
                {
                    "type": "animate",
                    "name": "an",
                    "loc": [
                        3,
                        5
                    ]
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            5
                        ]
                    ],
                    "remove": true
                },
                "\t[黑衣人,N495]\b[this,2,4]我只不过是好奇……为什么首领那么赏识你罢了。",
                "\t[黑衣人,N495]\b[this,2,4]现在看来……至少你的魔法技术确实不错……能把我也骗过去。",
                "\t[黑衣人,N495]\b[this,2,4]不过嘛……现在满身是伤的你们几个……",
                "\t[黑衣人,N495]\b[this,2,4]该怎么对付我呢？我可是很好奇啊？",
                {
                    "type": "animate",
                    "name": "bing",
                    "loc": [
                        2,
                        4
                    ]
                },
                "\t[黑衣人,N495]\b[this,2,4]唔……这……这是怎么回事？",
                "\t[伊杰明,N416]\b[this,5,4]你恐怕没有考虑到……就连束缚魔法也是个幌子……",
                "\t[伊杰明,N416]\b[this,5,4]自从昨晚发现你伪装成孩子后……在下就一直在做今天的准备了。",
                "\t[伊杰明,N416]\b[this,5,4]隐藏在束缚魔法之下的标记魔法才是在下的重头戏。",
                "\t[伊杰明,N416]\b[this,5,4]现在在下只需随意发射攻击，就能精确命中你的要害！",
                "\t[伊杰明,N416]\b[this,5,4]这就是在下的三重阵。",
                "\t[伊杰明,N416]\b[this,5,4]喜欢改别人的魔法阵是吗？",
                "\t[伊杰明,N416]\b[this,5,4]那就让你好好尝尝代价！",
                "\t[黑衣人,N495]\b[this,2,4]哼！你现在的状态又能再打出多少魔法？",
                "\t[黑衣人,N495]\b[this,2,4]只要我魔力全开……顶住你的魔法伤害根本不在话下！",
                {
                    "type": "move",
                    "loc": [
                        2,
                        4
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "right:2"
                    ]
                },
                {
                    "type": "moveHero",
                    "time": 1,
                    "steps": [
                        "left:1"
                    ]
                },
                {
                    "type": "animate",
                    "name": "jianji2",
                    "loc": [
                        4,
                        4
                    ],
                    "async": true
                },
                {
                    "type": "move",
                    "loc": [
                        4,
                        4
                    ],
                    "time": 1,
                    "keep": true,
                    "steps": [
                        "backward:2"
                    ]
                },
                {
                    "type": "waitAsync"
                },
                "\t[黑衣人,N495]\b[this,2,4]唔！这力量！？",
                "\t[黑衣人,N495]\b[this,2,4]怎么会……为什么你还有这么多力量？",
                "\t[hero]\b[hero]你不知道吗？我这种漂泊者只要有魔晶……就能很快恢复状态的。",
                "\t[hero]\b[hero]何况这里是魔晶遍地的魔塔呢？",
                "\t[黑衣人,N495]\b[this,2,4]没用的，你是杀不了我的！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            4
                        ]
                    ],
                    "remove": true,
                    "time": 500
                },
                "\t[怀特莉丝,N430]\b[hero]他被塔主传送了……",
                "\t[怀特莉丝,N430]\b[hero]看来他们关系不一般。",
                "\t[hero]\b[hero]啧……给他捡回一条命。",
                "\t[伊杰明,N416]\b[this,5,4]咳咳！（吐出一口血）",
                {
                    "type": "changePos",
                    "direction": "up"
                },
                {
                    "type": "turnBlock",
                    "direction": "up",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ]
                },
                "\t[hero]\b[hero]你怎么了！？",
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            5,
                            4
                        ]
                    ]
                },
                "\t[伊杰明,N416]\b[this,5,4]其实……刚刚的魔法已经是在下透支魔力系统才勉强打出的……",
                "\t[伊杰明,N416]\b[this,5,4]导致现在魔力系统几乎断开……受损了……",
                "\t[伊杰明,N416]\b[this,5,4]看来只能拜托约瑟先生你……将我们两个平安带回去养伤了。",
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
                    "type": "setHeroOpacity",
                    "opacity": 0
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT51",
                    "loc": [
                        6,
                        8
                    ],
                    "direction": "up"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,7": [
            "\t[陌生男子,N416]\b[this,6,5]哦……如此……真是有趣……",
            "\t[陌生男子,N416]\b[this,6,5]这可不得了……",
            "\t[hero]\b[hero]请问阁下是？",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[陌生男子,N416]\b[this,6,5]哎呀？居然有人到这里来了？",
            "\t[陌生男子,N416]\b[this,6,5]是来攻略塔的勇者……亦或是为了延续生命的漂泊者？",
            "\t[hero]\b[hero]为什么不能是收了报酬而来的雇佣兵？",
            "\t[陌生男子,N416]\b[this,6,5]哈哈！你很有意思！",
            "\t[陌生男子,N416]\b[this,6,5]确实会来魔塔的只能分为三类人。",
            "\t[陌生男子,N416]\b[this,6,5]为了义务的勇者，为了活命的漂泊者，为了工作的佣兵。",
            "\t[伊杰明,N416]\b[this,6,5]在下是游历王国的诗人，伊杰明•梵恩斯。",
            "\t[伊杰明,N416]\b[this,6,5]不知朋友可否拜读过在下的诗集？",
            "\t[hero]\b[hero]在下约瑟•弗里克，你看都来到魔塔这种地方了……哪还有空闲读书？",
            "\t[伊杰明,N416]\b[this,6,5]太可惜了……我看阁下面相就是个读书的好料子……",
            "\t[伊杰明,N416]\b[this,6,5]却天妒英才……成了漂泊者。",
            "\t[伊杰明,N416]\b[this,6,5]上帝这是多么喜欢开恶劣的玩笑啊！",
            "\t[hero]\b[hero]（这家伙一早就看出我是漂泊者了吧……也是，对我手上的抑制器有些了解的都不难猜出。）",
            "\t[hero]\b[hero]那么，你在这里是为了什么？",
            "\t[伊杰明,N416]\b[this,6,5]那自然是为了研究魔塔……",
            "\t[hero]\b[hero]研究魔塔？",
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "left:2"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    4,
                    5
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "right:4"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "move",
                "loc": [
                    8,
                    5
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "left:2"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[伊杰明,N416]\b[this,6,5]阁下不认为魔塔是这个世界上最不可思议的东西么？",
            "\t[伊杰明,N416]\b[this,6,5]魔塔内部的世界远比它外面的形象要大的多……并且每一座魔塔都存在着各自的法则……",
            "\t[伊杰明,N416]\b[this,6,5]完全就是一个小世界的缩影……这样有趣的东西……又怎么能不叫人感兴趣呢！？",
            "\t[hero]\b[hero]但比起它的有趣……它所带来的灾害要严重的多吧？",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[伊杰明,N416]\b[this,6,5]所说如此……但谁又能说魔塔的存在即是罪恶？",
            "\t[伊杰明,N416]\b[this,6,5]魔塔也不过是遵循其本身的生存规则罢了……和人类一样，它也不过是自然界的一份子。",
            "\t[伊杰明,N416]\b[this,6,5]如果我们以人类的角度来批判其存在即是罪，又是否有些自大了？",
            "\t[伊杰明,N416]\b[this,6,5]不过当然了……话是这么说，但我本身也属于人类嘛。",
            "\t[伊杰明,N416]\b[this,6,5]自然也是以减少人类伤亡为前提而行动的。",
            "\t[hero]\b[hero]那你也准备进塔吗？",
            "\t[伊杰明,N416]\b[this,6,5]当然。",
            "\t[hero]\b[hero]那就祝我们彼此好运吧。",
            "\t[伊杰明,N416]\b[this,6,5]如果有缘的话，说不定会和阁下在某层再遇呢。",
            "\t[hero]\b[hero]哈哈，那就为了下一次的重逢而祝贺吧。",
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "steps": [
                    "up:4"
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,12": [
            {
                "type": "if",
                "condition": "(flags.dzw>13)",
                "true": [],
                "false": [
                    {
                        "type": "if",
                        "condition": "flags.b10b",
                        "true": [
                            {
                                "type": "if",
                                "condition": "(flags.th==1)",
                                "true": [],
                                "false": [
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
                                    }
                                ]
                            },
                            {
                                "type": "setValue",
                                "name": "flag:th",
                                "value": "1"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT16",
                                "loc": [
                                    6,
                                    8
                                ],
                                "direction": "down"
                            }
                        ],
                        "false": [
                            "\t[hero]\b[hero]还不是回去的时候。",
                            {
                                "type": "moveHero",
                                "steps": [
                                    "up:1"
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        "6,6": {
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
        "6,1": [
            {
                "type": "if",
                "condition": "(flags.tfjq==1)",
                "true": [
                    "\t[hero]\b[hero]那家伙还在楼上……还是先避战吧……",
                    {
                        "type": "moveHero",
                        "steps": [
                            "down:1"
                        ]
                    }
                ],
                "false": [
                    {
                        "type": "changeFloor",
                        "floorId": "MT18",
                        "loc": [
                            6,
                            1
                        ],
                        "direction": "down"
                    }
                ]
            }
        ],
        "2,7": {
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
        "10,7": {
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
        "5,4": {
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
        "5,7": {
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
        "7,7": {
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
        "5,6": {
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
        "2,4": {
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
        }
    },
    "changeFloor": {
        "6,6": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  0,  0,  1,  0,  1,  0,  0,  1,  1,10024],
    [10026,  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,  1,10024],
    [10026,  1,497,  0,  0, 89,  0,  0,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,  0,419,  0,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,427, 88,  0,  0,  0,  0,  1,10024],
    [10026,  1, 87,  0,  0,419,  0,429,  0,  0, 87,  1,10024],
    [10026,  1,  1,  1,  1,  1, 86,  1,  1,  1,  1,  1,10024],
    [10026,  1,  4,  1,  4,  1,  0,  1,  4,  1,  4,  1,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10020,10017,10017,10017,10017,10018,  0,10016,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}