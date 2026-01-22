main.floors.MT_8=
{
    "floorId": "MT_8",
    "title": "地下 8 层",
    "name": "地下 8 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        "护盾受损，减少50点。",
        {
            "type": "setValue",
            "name": "status:mdef",
            "operator": "-=",
            "value": "50"
        },
        {
            "type": "loadBgm",
            "name": "b1-b10.mp3"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[hero]\b[hero]……",
        "\t[hero]\b[hero]我……还活着吗？",
        "\t[hero]\b[hero]还是说天堂长得就和魔塔一样？",
        "\t[????,N430]\b[this,2,2]别胡思乱想了。",
        "\t[????,N430]\b[this,2,2]如果没有我，你就只能下地狱了。",
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[hero]\b[hero]多谢姑娘救命之恩。",
        "\t[????,N430]\b[this,2,2]……你",
        "\t[????,N430]\b[this,2,2]不惊讶？",
        "\t[hero]\b[hero]在魔塔里面用常识思考只会逼疯自己。",
        "\t[hero]\b[hero]所以活到现在的我内心也波澜不惊了。",
        "\t[????,N430]\b[this,2,2]你还真是有意思。",
        "\t[????,N430]\b[this,2,2]没错，正是我在那个骑士要杀死你的那一刻把你给转移到这里来的。",
        "\t[????,N430]\b[this,2,2]那么，你能够猜出我接下来想干什么吗？",
        "\t[hero]\b[hero]想办法把你给救出去。",
        "\t[????,N430]\b[this,2,2]呵呵，我开始喜欢你了。",
        "\t[hero]\b[hero]当然，我承认我很讨女孩子喜欢。",
        "\t[hero]\b[hero]那么，就和我说说你现在的状况吧。",
        "\t[????,N430]\b[this,2,2]嗯……总之我目前除了被囚禁在这之外。",
        "\t[????,N430]\b[this,2,2]另一个大麻烦就是……",
        "\t[????,N430]\b[this,2,2]我失去了记忆。",
        "\t[hero]\b[hero]失忆？",
        "\t[????,N430]\b[this,2,2]我想不起来我的过去了。",
        "\t[????,N430]\b[this,2,2]但我的身体似乎还有对我所掌握的魔法保有记忆。",
        "\t[????,N430]\b[this,2,2]当我醒来的时候发现自己被囚禁在这里。",
        "\t[????,N430]\b[this,2,2]之后过去了很久……很久……",
        "\t[????,N430]\b[this,2,2]而我也感受到我的力量也同样被封印了起来。",
        "\t[????,N430]\b[this,2,2]但随着时间的流逝，我终究还是积攒了一点点的力量。",
        "\t[????,N430]\b[this,2,2]所以我就只能等待一个机会。",
        "\t[????,N430]\b[this,2,2]而你，就是我要等的那个机会。",
        "\t[????,N430]\b[this,2,2]为了救你，我也用光了之前自己所积攒的全部力量使用了转移魔法。",
        "\t[????,N430]\b[this,2,2]希望你接下来的行动能令我满意。",
        "\t[hero]\b[hero]使用转移魔法……",
        "\t[hero]\b[hero]这可不是一般人能够做到的。",
        "\t[hero]\b[hero]你的过去……",
        "\t[????,N430]\b[this,2,2]不管是什么身份也好……我现在只想对这里的塔主进行复仇。",
        "\t[hero]\b[hero]我要怎么才能帮你解除封印？",
        "\t[????,N430]\b[this,2,2]魔力……",
        "\t[????,N430]\b[this,2,2]我需要大量的魔力。",
        "\t[????,N430]\b[this,2,2]这里的封印会不断吸收我的魔力，这让我根本无法积攒一丁点魔力。",
        "\t[????,N430]\b[this,2,2]我靠着休眠模式过了不知多久……才积攒出的一些魔力。",
        "\t[????,N430]\b[this,2,2]如果我能够一次性补充大量的魔力……或许就能冲破这封印。",
        "\t[hero]\b[hero]一次性补充大量的魔力……",
        "\t[hero]\b[hero]这听起来可不容易。",
        "\t[????,N430]\b[this,2,2]你只需要想一种办法可以让自己在短时间内获得源源不断的魔力就行了。",
        "\t[????,N430]\b[this,2,2]把你转移过来后，我已经在你身上立下了契约。",
        "\t[????,N430]\b[this,2,2]所以你获得的魔力可以转移到我身上。",
        "\t[hero]\b[hero]？？？",
        "\t[hero]\b[hero]喂喂喂，我还没同意立什么契约吧？",
        "\t[????,N430]\b[this,2,2]总之，不要超过三天时间。",
        "\t[????,N430]\b[this,2,2]如果三天后你没能让我脱困，你就会被我吸光所有魔力而死。",
        "\t[hero]\b[hero]所以……你把我转移过来，就只是让我的死亡延后了三天吧！？",
        "\t[????,N430]\b[this,2,2]不会太难的啦。",
        "\t[????,N430]\b[this,2,2]不是有一个和你一起进塔的家伙吗？",
        "\t[????,N430]\b[this,2,2]我能感觉的到那家伙是个相当出色的魔法师。",
        "\t[????,N430]\b[this,2,2]这种问题，他应该会有办法吧。",
        "\t[hero]\b[hero]他么……",
        "\t[????,N430]\b[this,2,2]我现在得进入休眠模式，节省剩下的魔力了。",
        "\t[????,N430]\b[this,2,2]出口在上面八层左右，就得靠你自己了。",
        "\t[hero]\b[hero]等等！",
        "\t[hero]\b[hero]……",
        "\t[hero]\b[hero]唉……真是位自说自话的大小姐啊。",
        {
            "type": "setVolume",
            "value": 100,
            "time": 1
        },
        {
            "type": "playBgm",
            "name": "b1-b10.mp3",
            "keep": true
        },
        {
            "type": "switch",
            "condition": "flags.hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "观剧模式下的补给，额外获得5黄钥匙2蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "5"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "2"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "正常模式下的补给，额外获得3黄钥匙1蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "3"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            {
                "type": "confirm",
                "text": "现在就要补充抑制器的魔力吗？",
                "yes": [
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            "hero.loc.x",
                            "hero.loc.y"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "item.mp3"
                    },
                    {
                        "type": "tip",
                        "text": "吸收大块魔晶，魔力+50"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "50"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                1
                            ]
                        ],
                        "remove": true,
                        "async": true
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
                    {
                        "type": "waitAsync"
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "4,6": [
            {
                "type": "function",
                "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT_8: true }\n}"
            },
            {
                "type": "choices",
                "text": "你可以从以下选项中选择一项。",
                "choices": [
                    {
                        "text": "50魔力",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:mana",
                                "operator": "+=",
                                "value": "50"
                            }
                        ]
                    },
                    {
                        "text": "绿钥匙",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "item:greenKey",
                                "operator": "+=",
                                "value": "1"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,  0,  0,  1,  0,101,  0,  1, 32,  0, 32,10024],
    [10026,  0,430,  0,  1,  0,102,  0,  1,  0, 34,  0,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1, 32,  0, 32,10024],
    [10026,  1, 85,  1,  1,  1, 86,  1,  1,  1, 86,  1,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1, 21,  0, 21,10024],
    [10026,  0,  0,  0, 86,  0,  0,  0, 86,  0, 29,  0,10024],
    [10026,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026,  0,214,  0,  0,  0,434,  0,  0,  0,211,  0,10024],
    [10026,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1, 46,10024],
    [10026,  0,  1,  0,218,  0,  1,  0,213,  0,  1,  0,10024],
    [10026, 88,  1, 27,  0, 32,  1, 32,  0, 28,  1, 87,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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
        11,
        11
    ]
}