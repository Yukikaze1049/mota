main.floors.MT15=
{
    "floorId": "MT15",
    "title": "主塔 15 层",
    "name": "15",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "saber.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,5": [
            {
                "type": "if",
                "condition": "(item:I694===1)",
                "true": [
                    "\t[金若美,N555]\b[this,4,5]厉害呀，小子，竟然打败了二阶灵兽火焰史莱姆!",
                    "\t[奕开,hero]\b[hero]侥幸罢了。",
                    "\t[金若美,N555]\b[this,4,5]好了，测试结束了，你可以离开啦。",
                    {
                        "type": "changeFloor",
                        "floorId": "MT1",
                        "loc": [
                            6,
                            3
                        ],
                        "direction": "up"
                    },
                    {
                        "type": "changePos",
                        "direction": "right"
                    },
                    "\t[奕开,hero]\b[hero]这边区域开放啦，去看看。"
                ],
                "false": [
                    "\t[奕开,hero]\b[hero]这里面怎么有一只二阶灵兽，火焰史莱姆呀。",
                    "\t[金若美,N555]\b[this,4,5]啊，不好意思，一定是之前的老师没有清点好。你的实力不错，如果不想去挑战了，也是第二名。",
                    "\t[金若美,N555]\b[this,4,5]刚刚有个女孩去挑战这个火焰史莱姆了，我看她虽然打不过，但表现不错，要是你能把火焰史莱姆挑战成功，一定是第一名，怎么样，要不要试试",
                    "\t[奕开,hero]\b[hero]第一名有什么奖励呀，嘻嘻。",
                    "\t[金若美,N555]\b[this,4,5]我能保证你能够百分百收服这个火焰史莱姆，它可以每回合对怪物造成3%的额外伤害。",
                    "\t[奕开,hero]\b[hero]不怎么厉害呀",
                    "\t[金若美,N555]\b[this,4,5]emmmm，还有一瓶初级魔防便携药剂，喝下后可以提升5倍魔防的生命值。",
                    "\t[金若美,N555]\b[this,4,5]还有一个炸弹，可以炸死怪物哦",
                    "\t[奕开,hero]\b[hero]听起来不错",
                    "\t[金若美,N555]\b[this,4,5]打不赢就来找我吧，我可以随时送你离开(离开这里之后永远都不会回来了，记得清理怪物)",
                    {
                        "type": "choices",
                        "text": "\t[金若美,N555]要离开吗",
                        "choices": [
                            {
                                "text": "离开",
                                "action": [
                                    {
                                        "type": "setBlock",
                                        "number": "upFloor",
                                        "loc": [
                                            [
                                                12,
                                                3
                                            ]
                                        ],
                                        "floorId": "MT1"
                                    },
                                    {
                                        "type": "show",
                                        "loc": [
                                            [
                                                12,
                                                3
                                            ]
                                        ],
                                        "floorId": "MT1"
                                    },
                                    {
                                        "type": "changeFloor",
                                        "floorId": "MT1",
                                        "loc": [
                                            6,
                                            3
                                        ],
                                        "direction": "up"
                                    },
                                    {
                                        "type": "changePos",
                                        "direction": "right"
                                    },
                                    "\t[奕开,hero]\b[hero]这边区域开放啦，去看看"
                                ]
                            },
                            {
                                "text": "我要去挑战!",
                                "action": []
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,1": [
            {
                "type": "setValue",
                "name": "item:I694",
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
                "type": "setValue",
                "name": "item:bomb",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        12,
                        3
                    ]
                ],
                "floorId": "MT1"
            },
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        12,
                        3
                    ]
                ],
                "floorId": "MT1"
            },
            "\t[奕开,hero]\b[hero]没想到，我竟然打败了这个家伙，还得到了它的认可!",
            "\r[red]注：找金若美提交任务之时，不要装备火焰史莱姆\r[]"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,4": [
            "\t[???,N1036]\b[this,6,3]可恶，打不过。看来只能回去了。",
            "\t[奕开,hero]\b[hero]这声音……樱姝?",
            {
                "type": "turnBlock",
                "direction": "down",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            "\t[???,N1036]\b[this,6,3]奕开哥哥!",
            "\t[奕开,hero]\b[hero]樱姝，你怎么来到灵兽学院了？",
            "\t[韩樱姝,N1036]\b[this,6,3]自奕家落败后不久，我父亲不久也离世了，韩家掌权的变成了我哥。",
            "\t[韩樱姝,N1036]\b[this,6,3]奕开哥哥，我俩从小一起长大，我可没有瞧不起奕家败落悔婚。",
            "\t[奕开,hero]\b[hero]我知道你的为人，不过，这和你来到灵兽学院有什么关系呀",
            "\t[韩樱姝,N1036]\b[this,6,3]我哥攀附上了当今的大皇子，想让我嫁给大皇子……",
            "\t[奕开,hero]\b[hero]所以你跑来这里了？",
            "\t[韩樱姝,N1036]\b[this,6,3]眼下，你是打算挑战这个火焰史莱姆吗？你先解决它再说吧，我去提交测试结果咯",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 29,  1, 32,  1,  0,922,  0,  1, 31,218,  0,  1],
    [  1, 29,  1, 32,  1,  0,  0,  0,  1,  0,  1, 29,  1],
    [  1, 29,  1, 32,  1,  0,1055,  0,  1, 81,  1, 28,  1],
    [  1,211,  1,218,  1,  1, 83,  1,  1,602,  1,  1,  1],
    [  1,  0,  1,  0,555,  0,  0,207, 21,  0,  1,547,  1],
    [  1,  0,210,  0,  0,221,  1, 31,  0,211,  1, 28,  1],
    [  1,  1, 82,  1,  1,  0,  1,  1,  1, 81,  1,218,  1],
    [  1, 31,  0, 21,  1, 21,  0,602,  0,  0, 82,  0,  1],
    [  1,  0,211,  0,  1,  0,  1,  1, 81,  1,  1,221,  1],
    [  1,  1, 81,  1,  1,207,  1,  0,221,  0,  1, 21,  1],
    [  1, 88,  0,  0,207, 32,  1, 27,  0, 28,  1, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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