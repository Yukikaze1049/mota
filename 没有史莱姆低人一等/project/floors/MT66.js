main.floors.MT66=
{
    "floorId": "MT66",
    "title": "主塔 66 层",
    "name": "66",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X101592",
    "bgm": "bxsgzz2.mp3",
    "firstArrive": [
        {
            "type": "unfollow"
        },
        {
            "type": "moveHero",
            "steps": [
                "down:6"
            ]
        },
        {
            "type": "setBlock",
            "number": "N1006",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        "\t[???,N1006]\b[this,6,2]终于等到机会了。",
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[奕开,hero]\b[hero]阁下究竟是何人？为何要追杀我",
        "\t[???,N1006]\b[this,6,2]你不会有机会知道了，去地下问阎王爷吧，哈哈哈哈！",
        {
            "type": "setBlock",
            "number": "E717",
            "loc": [
                [
                    6,
                    3
                ]
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
        "\t[金若美,N555]想不到，竟然有人敢在我的眼皮子底下对灵兽学院的学生动手，真是活得不耐烦了。",
        "\t[尼宇,N1002]金姑娘，尼宇求见。",
        "\t[金若美,N555]哦?世子阁下来找我，可惜我现在有急事，晚点再说吧。",
        "\t[尼宇,N1002]什么急事呀，不过是一个小侍卫被杀罢了。",
        "\t[金若美,N555]这是你做的？",
        "\t[尼宇,N1002]没错。",
        "\t[金若美,N555]你可知道，这个人是灵兽学院的重点人才?",
        "\t[尼宇,N1002]我知道。",
        "\t[金若美,N555]他还是晶弥•立天殿下的侍卫！",
        "\t[尼宇,N1002]我知道。",
        "\t[金若美,N555]你就是蠢货，滚开，别拦着我救人！",
        "\t[尼宇,N1002]站住，你知道这是什么?",
        "\t[金若美,N555]亲王令……你！",
        "\t[尼宇,N1002]如果你忠于皇室，那就听令，别去！",
        "\t[金若美,N555]哼，你如此大胆，敢杀皇子的侍卫，不怕殿下生气吗？",
        "\t[尼宇,N1002]纵使殿下生气，我也要杀了这个小子。",
        {
            "type": "setCurtain",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setBlock",
                "number": "N332",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "floorId": "MT4"
            },
            {
                "type": "show",
                "loc": [
                    [
                        8,
                        8
                    ]
                ],
                "floorId": "MT4"
            },
            "\t[???,N1006]\b[this,6,2]啊，你怎么打败了我的灵兽！",
            "\t[奕开,hero]\b[hero]你也可以去死了！",
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    3
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "animate",
                "name": "jianji",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "remove": true
            },
            "\t[???,N1006]\b[this,6,2]啊！",
            {
                "type": "confirm",
                "text": "确认要跳过剧情吗?",
                "yes": [],
                "no": [
                    {
                        "type": "setBlock",
                        "number": "N1002",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "floorId": "MT4"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT3",
                        "loc": [
                            1,
                            8
                        ],
                        "direction": "up"
                    },
                    "\t[立天,N331]尼宇，你这个混蛋！",
                    "\t[尼宇,N1002]很抱歉，殿下，不过我已经派人宰了那小子。",
                    "\t[立天,N331]你……啊！",
                    "\t[奕开,hero]\b[hero]不好！立天！",
                    {
                        "type": "jumpHero",
                        "loc": [
                            1,
                            3
                        ],
                        "time": 500
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT4",
                        "loc": [
                            6,
                            11
                        ]
                    },
                    "\t[奕开,hero]\b[hero]住手！尼宇！",
                    "\t[尼宇,N1002]\b[this,4,8]！！",
                    "\t[尼宇,N1002]\b[this,4,8]你还活着！",
                    {
                        "type": "turnBlock",
                        "direction": "down",
                        "loc": [
                            [
                                8,
                                8
                            ]
                        ],
                        "floorId": "MT4"
                    },
                    "\t[立天,N331]\b[this,8,8]奕开！唔……",
                    "\t[尼宇,N1002]\b[this,4,8]殿下！",
                    {
                        "type": "jumpHero",
                        "loc": [
                            8,
                            9
                        ],
                        "time": 500
                    },
                    "\t[奕开,hero]\b[hero]立天，你怎么样！尼宇，你对立天做了什么？",
                    "\t[立天,N331]\b[this,8,8]奕开！唔……他没对我做什么……",
                    "\t[尼宇,N1002]\b[this,4,8]殿下，你怎么样?",
                    "\t[立天,N331]\b[this,8,8]尼宇，我现在见到你就不适，你还不快滚！",
                    "\t[尼宇,N1002]\b[this,4,8]殿下！",
                    "\t[立天,N331]\b[this,8,8]滚啊！",
                    "\t[尼宇,N1002]\b[this,4,8]好，殿下好些我再来看殿下。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                8
                            ]
                        ],
                        "floorId": "MT4",
                        "remove": true
                    },
                    "\t[奕开,hero]\b[hero]立天，你怎么了？",
                    "\t[立天,N331]\b[this,8,8]我的老毛病患了。",
                    "\t[奕开,hero]\b[hero]我还以为是尼宇对你不利呢。",
                    "\t[立天,N331]\b[this,8,8]尼宇对我很忠心，他派了两个训练师暗中保护我，要想对我不利，你也拦不住……但是他对我忠心，未必会对你好。",
                    "\t[奕开,hero]\b[hero]我也不知道我哪里得罪了尼宇世子。",
                    "\t[立天,N331]\b[this,8,8]我已经调查清楚了，你和永亲王有仇是吧？你家因为永亲王而败落……",
                    "\t[奕开,hero]\b[hero]啊这……尼宇世子是永亲王之子?",
                    "\t[立天,N331]\b[this,8,8]没错，我不会让他再动你了，你也当心他一些。",
                    "\t[奕开,hero]\b[hero]对了，你的病……",
                    "\t[立天,N331]\b[this,8,8]自我出生时，便有体寒之症，力量不如常人。\n父皇母后寻遍天下医者，也不得治，据说，我的灵魂生来便是破碎的……",
                    "\t[奕开,hero]\b[hero]灵魂破碎?对了，我有一个问题问你，就是你有几个兄弟呀?",
                    "\t[立天,N331]\b[this,8,8]我有一个姐姐立环公主，有一个是章贵妃才出生不久的弟弟……可惜，父皇很是喜爱，准备把他封为储君……",
                    "\t[立天,N331]\b[this,8,8]也不知道母后怎么样了……",
                    {
                        "type": "setBlock",
                        "number": "N1055",
                        "loc": [
                            [
                                6,
                                5
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    {
                        "type": "setBlock",
                        "number": "youngMan",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    {
                        "type": "setBlock",
                        "number": "N342",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    {
                        "type": "setBlock",
                        "number": "N342",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    "\t[同学]韩家竟然来人了，好像要把韩樱姝带回去。",
                    "\t[同学]是吗？没想到韩樱姝是偷偷跑出来的，，咱去看看？",
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[奕开,hero]\b[hero]。。。樱姝，我得去看看。立天，你怎么样?",
                    "\t[立天,N331]\b[this,8,8]你先去看樱姝吧，我不要紧的……",
                    "\t[奕开,hero]\b[hero]好。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT17",
                        "loc": [
                            6,
                            1
                        ]
                    },
                    "\t[韩樱姝,N1036]\b[this,6,5]放开我！放开我！",
                    "\t[韩晟,youngMan]\b[this,6,3]把小姐带回去！",
                    "\t[奕开,hero]\b[hero]住手！",
                    {
                        "type": "setBlock",
                        "number": "N555",
                        "loc": [
                            [
                                5,
                                1
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    "\t[金若美,N555]\b[this,5,1]你是什么人？敢来灵兽学院抓学生。",
                    "\t[韩晟,youngMan]\b[this,6,3]哼，我是韩家的家主，韩樱姝私自离开家族，我要带她回去，怎么，灵兽学院也管别人的家事吗？",
                    "\t[金若美,N555]\b[this,5,1]……",
                    "\t[奕开,hero]\b[hero]住手！韩晟，樱姝不想回去，你还强行带她回去?",
                    "\t[韩樱姝,N1036]\b[this,6,5]放开我！放开我！",
                    "\t[韩晟,youngMan]\b[this,6,3]我说是什么人呢，原来是奕家的小子啊，你还以为奕家是从前的奕家呢？",
                    "\t[韩晟,youngMan]\b[this,6,3]如今陛下赐婚，让我家樱姝嫁给大皇子殿下，你敢阻拦！",
                    "\t[韩樱姝,N1036]\b[this,6,5]开哥哥，救我！",
                    "\t[奕开,hero]\b[hero]不行，我不能让你带走樱姝！",
                    {
                        "type": "moveHero",
                        "steps": [
                            "down:1"
                        ]
                    },
                    "\t[韩晟,youngMan]\b[this,6,3]来人呐，给我教训这个不知天高地厚的小子！",
                    "\t[骑士,N339]是！",
                    {
                        "type": "move",
                        "loc": [
                            5,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up:3"
                        ]
                    },
                    {
                        "type": "move",
                        "loc": [
                            7,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true,
                        "steps": [
                            "up:3"
                        ]
                    },
                    {
                        "type": "waitAsync"
                    },
                    {
                        "type": "turnBlock",
                        "direction": "right",
                        "loc": [
                            [
                                5,
                                2
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    {
                        "type": "turnBlock",
                        "direction": "left",
                        "loc": [
                            [
                                7,
                                2
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    {
                        "type": "animate",
                        "name": "hand",
                        "loc": [
                            6,
                            2
                        ]
                    },
                    "\t[奕开,hero]\b[hero]啊！",
                    {
                        "type": "setBlock",
                        "number": "N988",
                        "loc": [
                            [
                                7,
                                0
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    "\t[斐安娜,N988]\b[this,7,0]这是怎么回事啊……",
                    "\t[奕开,hero]\b[hero]啊！",
                    "\t[韩晟,youngMan]\b[this,6,3]哼，韩樱姝，今天就要带走你，早日和皇子成婚！",
                    {
                        "type": "setBlock",
                        "number": "N331",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "floorId": "MT17"
                    },
                    "\t[立天,N331]\b[this,6,1]住手！",
                    "\t[韩晟,youngMan]\b[this,6,3]什么东西，也敢管老子的事?",
                    "\t[立天,N331]\b[this,6,1]我就是你所说的，和樱姝订婚的皇子，晶弥•立天。",
                    "\t[韩晟,youngMan]\b[this,6,3]……",
                    "\t[韩晟,youngMan]\b[this,6,3]大胆！你竟敢假扮皇子，你知道是什么罪过吗？来人啊，还不快快教训他！",
                    "\t[斐安娜,N988]\b[this,7,0]你们敢！",
                    {
                        "type": "jump",
                        "from": [
                            7,
                            0
                        ],
                        "to": [
                            7,
                            1
                        ],
                        "time": 500,
                        "keep": true
                    },
                    "\t[立天,N331]\b[this,6,1]这是我的亲王令，韩晟，有什么问题吗？",
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    "\t[奕开,hero]\b[hero]拜见皇子殿下！",
                    "\t[斐安娜,N988]\b[this,7,1]拜见皇子殿下！",
                    "\t[金若美,N555]\b[this,5,1]拜见皇子殿下！",
                    "\t[韩晟,youngMan]\b[this,6,3]怎么会……皇子殿下！",
                    "\t[立天,N331]\b[this,6,1]还不速速退下！",
                    {
                        "type": "jump",
                        "from": [
                            5,
                            2
                        ],
                        "to": [
                            5,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "jump",
                        "from": [
                            7,
                            2
                        ],
                        "to": [
                            7,
                            5
                        ],
                        "time": 500,
                        "keep": true,
                        "async": true
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[韩晟,youngMan]\b[this,6,3]殿下！",
                    "\t[立天,N331]\b[this,6,1]斐安娜，给我好好教训这个冒犯我的家伙！",
                    "\t[斐安娜,N988]\b[this,7,1]愿为殿下效劳！来人，把韩晟拉下去打一顿！",
                    "\t[韩晟,youngMan]\b[this,6,3]殿下饶命啊！",
                    "\t[立天,N331]\b[this,6,1]奕开、韩樱姝是我的好友，他们两情相悦，我总不能拆散他们吧，我与韩樱姝订婚就此作废吧！",
                    "\t[立天,N331]\b[this,6,1]都退下吧！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                1
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                3
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                1
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    "\t[韩樱姝,N1036]\b[this,6,5]皇子殿下。",
                    "\t[立天,N331]\b[this,6,1]知道我的身份了，就这么拘谨了?你还是叫我立天比较好。",
                    "\t[奕开,hero]\b[hero]立天，你太鲁莽了！怎么能为了这点小事就自爆身份呢？",
                    "\t[韩樱姝,N1036]\b[this,6,5]确实如此，立天你隐藏身份在此，一定有重要的事，如今为了这点小事暴露了，真是不应该。",
                    "\t[立天,N331]\b[this,6,1]我的挚友有难，如果这也算小事，那什么才叫大事?",
                    "\t[韩樱姝,N1036]\b[this,6,5]谢谢你，立天。不过我和奕开哥哥不是两情相悦……",
                    "\t[立天,N331]\b[this,6,1]啊?你们不是一对吗？我记得你们说过你们之前定过亲的。",
                    "\t[韩樱姝,N1036]\b[this,6,5]我们只是从小一起长大，谁说一定要互相喜欢。我们只是兄妹情罢了。",
                    "\t[奕开,hero]\b[hero]嗯，是这样的。",
                    "\t[立天,N331]\b[this,6,1]……",
                    "\t[奕开,hero]\b[hero]呃，对了，我听说火焰遗迹即将开启，我打算去试炼一番。",
                    "\t[立天,N331]\b[this,6,1]你去吧，我这实力去了也只能给你添麻烦。",
                    "\t[韩樱姝,N1036]\b[this,6,5]去吧，火焰遗迹和我菜鸟训练师没啥关系。",
                    "\t[奕开,hero]\b[hero]立天，你的身份暴露了，要当心点哦",
                    "\t[立天,N331]\b[this,6,1]知道了，我就回宿舍，你回来之前，我哪也不去行吧。而且学院还有尼宇和斐安娜呢，再不济也有金院长和四位守护者。你放心去吧！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "floorId": "MT17",
                        "remove": true
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT1",
                        "loc": [
                            6,
                            9
                        ],
                        "direction": "up"
                    },
                    "\t[骑士,N347]\b[this,6,8]嗨，哪里去呀。",
                    "\t[奕开,hero]\b[hero]听说火焰遗迹开启了，我打算去看看。晏夫学长。",
                    "\t[晏夫,N347]\b[this,6,8]哟，你怎么知道我是晏夫?",
                    "\t[奕开,hero]\b[hero]守护灵兽学院东面的邓天博学长，守护灵兽学院西面的金若美学姐我都见过了。\n北面的王磊学长没见过，至于南面嘛，我也没见过其他人，想必学长便是飞天神雀的主人了。",
                    "\t[晏夫,N347]\b[this,6,8]挺聪明的。对了，王磊也要去外面办点事，经过火焰遗迹，我让他送你一程吧！",
                    "\t[奕开,hero]\b[hero]那就麻烦晏学长啦。",
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
                    "半天后",
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[晏夫,N347]\b[this,6,8]该死的王磊，直接遁地走了！",
                    "\t[奕开,hero]\b[hero]没事的，晏学长，可能是王学长比较忙吧",
                    "\t[晏夫,N347]\b[this,6,8]能有什么忙的，这个贱货。"
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        12,
                        6
                    ]
                ],
                "floorId": "MT0"
            },
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        12,
                        6
                    ]
                ],
                "floorId": "MT0"
            },
            {
                "type": "changeFloor",
                "floorId": "MT0",
                "loc": [
                    8,
                    6
                ],
                "direction": "right"
            },
            "\t[奕开,hero]\b[hero]火焰遗迹在东面，赶紧启程吧！"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 88, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20,  0,  0,  0,  0,  0,  0,  0, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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
        6,
        0
    ]
}