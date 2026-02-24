main.floors.MT233=
{
    "floorId": "MT233",
    "title": "未知地带",
    "name": "未知地带",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "Recoil1.mp3",
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[仙琳,fairy]\b[this,6,10]！！我这是在哪？",
        "\t[？？？,N1398]\b[this,6,2]真的要这么做吗？",
        {
            "type": "setBlock",
            "number": "N724",
            "loc": [
                [
                    6,
                    2
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
                6,
                10
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        "\t[仙琳,fairy]\b[this,6,10]小粽？！！！",
        "\t[？？？,N724]\b[this,6,2]我并不是你认识的那个人，你可以称我为——\\d守望者！",
        "\t[仙琳,fairy]\b[this,6,10]守望者？",
        "\t[？？？,N724]\b[this,6,2]不过与其在意我的身份，你现在倒不如关心一下你刚才的决定吧！",
        "\t[仙琳,fairy]\b[this,6,10].................",
        "\t[？？？,N724]\b[this,6,2]我问你一个问题:你真的打算这么做吗？你可要想清楚这样做的代价！而且对于你做出的决定...........你无悔吗？！",
        "\t[仙琳,fairy]\b[this,6,10].................",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                10
            ]
        },
        "\t[仙琳,fairy]\b[this,6,10]其实呀，在我以前认识小粽的时候，我是带着一种目的性的，为的就是能够离开这座魔塔，有朝一日能够去看看他们的人类世界。",
        "\t[仙琳,fairy]\b[this,6,10]但是随着时间的流逝，我发现小粽他的实力越来越强大，也就是说未来有一天他有可能真的能够打败魔王！因此我非常开心........",
        "\t[仙琳,fairy]\b[this,6,10]但其实我也知道，如果我一直隐瞒下去的话，总有一天这个秘密会被识破的....",
        "\t[仙琳,fairy]\b[this,6,10]于是后来我打算把这个秘密直接告诉他。",
        "\t[仙琳,fairy]\b[this,6,10]在告诉这个秘密之前，我其实是非常忐忑不安的，因为我很害怕他会因此不理我，讨厌我，甚至是厌恶我........",
        "\t[仙琳,fairy]\b[this,6,10]但幸运的是，在我把这个秘密告诉他的时候，他并没有对我产生反感。相反，他还特别愿意这么去做。",
        "\t[仙琳,fairy]\b[this,6,10]而在那个时候，我意识到，我似乎孕发出了他们人类的一种情感——\\d喜欢。",
        "\t[仙琳,fairy]\b[this,6,10]我喜欢与小粽在一起的时光，可以说小粽他是除了我的至亲以为最重要的人了！",
        "\t[仙琳,fairy]\b[this,6,10]而现在堇姐姐生死未知，小粽和星姐姐要被他们完全无法匹敌的存在所围剿。",
        "\t[仙琳,fairy]\b[this,6,10]我知道，如果我不站出来，挡在小粽的面前，我可能....就再也见不到他了....。",
        "\t[仙琳,fairy]\b[this,6,10]所以我打算做出那个决定，目的就是为了保护我所珍视的事物！",
        "\t[仙琳,fairy]\b[this,6,10]毕竟我最喜欢他了！",
        "\t[仙琳,fairy]\b[this,6,10]这就是我的答案！至死不渝！！",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        "\t[？？？,N724]\b[this,6,2]为了保护自己最珍视的事物吗..............",
        "\t[？？？,N724]\b[this,6,2]原来如此，看来情感果然是个有趣的事物！它可以让人们将心链接在一起，从而迸发出令人叹为观止的火花！",
        "\t[？？？,N724]\b[this,6,2]你的故事，我已经了解了，既然你一心要这么做的话，我也不会阻拦你。",
        "\t[？？？,N724]\b[this,6,2]我即将把你带离这个空间，\\d就让我看看你体内蕴含的情感究竟有多强烈！！！",
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
                    10
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "show",
            "loc": [
                [
                    7,
                    1
                ]
            ],
            "time": 0
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[？？？,N680]\b[this,7,1]看来，这个小丫头还是选择了那一步呢。",
        "\t[？？？,N724]\b[this,6,2]的确如此，但是她体内的情感已经远远超出正常的临界值了。",
        "\t[？？？,N680]\b[this,7,1]嘛，我对这种东西没兴趣，我只想看后续。",
        "\t[？？？,N724]\b[this,6,2]后续？这个小丫头马上就要死了，你觉得后面有什么后续呢?",
        "\t[？？？,N680]\b[this,7,1]哈哈哈！或许就像你当初告诉我的那样，这种剧情才有趣呢！",
        "\t[？？？,N680]\b[this,7,1]不过你在未来打不打算复活这个小丫头呢?",
        "\t[？？？,N724]\b[this,6,2]也许会，也许不会。",
        "\t[？？？,N680]\b[this,7,1]哎，这样呀.....",
        "\t[？？？,N680]\b[this,7,1]罢了，随便问问而已，你想怎么样就怎么样吧。",
        "\t[？？？,N680]\b[this,7,1]我先离开了，防止那个世界观测到一些关键信息呢。",
        "\t[？？？,N724]\b[this,6,2]随便你。",
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
            "type": "pauseBgm"
        },
        {
            "type": "changeFloor",
            "floorId": ":before",
            "loc": [
                111,
                23
            ],
            "direction": "up",
            "time": 0
        },
        {
            "type": "insert",
            "loc": [
                0,
                12
            ],
            "floorId": "MT232"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,12": [
            "第三章已完结，是否记录分数，或者继续前行?",
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
                                        "reason": "第三章 至死不渝 （全绿难度）"
                                    }
                                ],
                                "false": [
                                    {
                                        "type": "win",
                                        "reason": "第三章 至死不渝 （0绿难度）"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "text": "继续前行",
                        "action": [
                            {
                                "type": "sleep",
                                "time": 500
                            },
                            {
                                "type": "playBgm",
                                "name": "GG2.mp3",
                                "keep": true
                            },
                            "\t[仙琳]再见了，小粽，谢谢你教会了你们人类的情感，\n在未来的道路上你一定要好好活着哟！",
                            "\t[小粽]仙琳！不！！",
                            "\t[小粽]啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！！",
                            {
                                "type": "playSound",
                                "name": "051-Explosion04.ogg"
                            },
                            {
                                "type": "autoSave"
                            },
                            {
                                "type": "changeFloor",
                                "floorId": "MT243",
                                "loc": [
                                    1,
                                    3
                                ],
                                "direction": "down",
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,680,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1398,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,124,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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