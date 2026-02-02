main.floors.MT28=
{
    "floorId": "MT28",
    "title": "主塔 28 层",
    "name": "28",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "sanbu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,0": {
            "floorId": "MT29",
            "loc": [
                6,
                12
            ]
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setValue",
                "name": "item:I1054",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I496",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "confirm",
                "text": "要跳过剧情吗?",
                "yes": [
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
                    {
                        "type": "openShop",
                        "id": "shop2",
                        "open": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "setBlock",
                        "number": "upFloor",
                        "loc": [
                            [
                                6,
                                0
                            ]
                        ]
                    },
                    {
                        "type": "follow",
                        "name": "hero.png"
                    },
                    {
                        "type": "follow",
                        "name": "hanyingshu.png"
                    }
                ],
                "no": [
                    "\t[奕开,hero]\b[hero]先捕捉了这个家伙。",
                    {
                        "type": "jumpHero",
                        "loc": [
                            6,
                            4
                        ],
                        "time": 500
                    },
                    {
                        "type": "changePos",
                        "direction": "up"
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
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
                    "\t[??,trader]\b[this,6,1]哈哈哈，真是少年英雄啊",
                    "\t[奕开,hero]\b[hero]阁下何人？竟然一直在这里窥探我与紫骷髅对战。",
                    "\t[??,trader]\b[this,6,1]不好意思啦，我路过这里，正好看到了罢了，我是圣龙的主人，你可以叫我圣龙商人。",
                    "\t[奕开,hero]\b[hero]圣龙?",
                    {
                        "type": "setBlock",
                        "number": "N334",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N1055",
                        "loc": [
                            [
                                7,
                                5
                            ]
                        ]
                    },
                    "\t[立天,N331]\b[this,5,5]圣龙是当今最强大的两大辅助灵兽之一啊。",
                    "\t[韩樱姝,N1036]\b[this,7,5]最强大的两只辅助灵兽?另一个是谁啊？",
                    "\t[立天,N331]\b[this,5,5]平时就知道打打杀杀，果然不知道吧。圣龙是最强的群体辅助灵兽，据说它全力辅助之下，可以给上万只灵兽提供增益属性。",
                    "\t[立天,N331]\b[this,5,5]至于另一只灵兽，则是“独天精灵”。",
                    "\t[奕开,hero]\b[hero]独天精灵?我听说灵兽榜第一的灵兽是独天神兽，它与独天精灵是什么关系",
                    "\t[立天,N331]\b[this,5,5]独天神兽在上一次灵兽大战中失去了主人，退隐之后，收养了一只小精灵，精心培养，给它取名“独天精灵”。",
                    "\t[立天,N331]\b[this,5,5]独天神兽实力之强大，一般灵兽给它提供增益属性能被瞬间抽空力量，不过独天精灵是唯一能够给独天神兽提供增幅的辅助灵兽。",
                    "\t[立天,N331]\b[this,5,5]不过，还没有人见过独天精灵与独天神兽全力战斗是什么样子呢。",
                    "\t[圣龙商人,trader]\b[this,6,1]哈哈，各位谬赞了，圣龙哪有那么厉害。我啊，平时不过卖卖商品罢了。",
                    "\t[奕开,hero]\b[hero]对哦，圣龙商人，您有什么好东西卖给我们呀",
                    "\t[圣龙商人,trader]\b[this,6,1]我这里有什么好东西，你们可以看看。",
                    {
                        "type": "openShop",
                        "id": "shop2",
                        "open": true
                    },
                    "\t[立天,N331]\b[this,5,5]看完了，你可以走开了吗，你拦路啦",
                    "\t[圣龙商人,trader]\b[this,6,1]哈哈，抱歉啦，我走啦！",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "setBlock",
                        "number": "upFloor",
                        "loc": [
                            [
                                6,
                                0
                            ]
                        ]
                    },
                    "\t[立天,N331]\b[this,5,5]奕开，咱们继续深入吧",
                    "\t[奕开,hero]\b[hero]行。",
                    {
                        "type": "hide",
                        "loc": [
                            [
                                5,
                                5
                            ]
                        ],
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
                        "remove": true
                    },
                    {
                        "type": "follow",
                        "name": "hero.png"
                    },
                    {
                        "type": "follow",
                        "name": "hanyingshu.png"
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,6": [
            "\t[奕开,hero]\b[hero]奇怪，怎么什么也没有呀",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "unfollow"
            },
            {
                "type": "setBlock",
                "number": "N334",
                "loc": [
                    [
                        5,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "N1055",
                "loc": [
                    [
                        7,
                        5
                    ]
                ]
            },
            "\t[立天,N331]\b[this,5,5]既然没有什么东西，咱就走吧",
            "\t[???,poisonSkeleton]吼！",
            {
                "type": "setBlock",
                "number": "poisonSkeleton",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            "\t[韩樱姝,N1036]\b[this,7,5]是紫骷髅!开哥哥，我来帮你！",
            "\t[立天,N331]\b[this,5,5]哇呀！该死的，这么凶的东西，竟然到了本少爷脸上!",
            "\t[韩樱姝,N1036]\b[this,7,5]……你是来帮倒忙的吧?",
            "\t[奕开,hero]\b[hero]别担心，我来对付它，樱姝，你照顾好立天。",
            "\t[韩樱姝,N1036]\b[this,7,5]好，开哥哥你小心！走啦！",
            "\t[立天,N331]\b[this,5,5]我们不帮奕开吗？",
            "\t[韩樱姝,N1036]\b[this,7,5]你能帮什么忙?本姑娘也是将军府千金都没你这么娇贵!",
            "\t[立天,N331]\b[this,5,5]将军府千金有什么了不起，我可是……",
            "\t[韩樱姝,N1036]\b[this,7,5]你可是什么?还不快走?",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        5
                    ]
                ],
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
                "remove": true
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,122, 20, 20, 20, 20, 20, 20],
    [ 20,1103,  0, 21, 20, 20, 20, 20, 20,443,  0,445, 20],
    [ 20,  0,235,  0, 20,  0,  0,  0, 20,  0, 20,  0, 20],
    [ 20, 20, 81, 20, 20,  0,  0,  0, 20,220, 20, 81, 20],
    [ 20,  0,215,  0, 20,  0,  0,  0, 20,  0, 20, 81, 20],
    [ 20, 21, 20,  0, 20, 20, 83, 20, 20,219, 20,  0, 20],
    [ 20,382, 20,214, 81,  0,  0,  0, 20,  0, 20,  0, 20],
    [ 20, 20, 20, 20, 20, 20,  0,  0, 82,253,  0,377, 20],
    [ 20, 21, 21, 21, 82, 20,  0, 20, 20, 20, 83, 20, 20],
    [ 20, 20, 20, 20,443,213,  0,  0, 20,  0, 22,  0, 20],
    [ 20, 21, 21, 21, 82, 20, 88,  0, 20, 22,  0, 22, 20],
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
        11
    ]
}