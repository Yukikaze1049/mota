main.floors.MT54=
{
    "floorId": "MT54",
    "title": "地下 8 层",
    "name": "地下 8 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
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
        ],
        "2,4": {
            "trigger": "action",
            "enable": true,
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
                "\t[hero]\b[hero]我来了。",
                "\t[????,N430]\b[this,2,2]果真没让我失望。",
                "\t[hero]\b[hero]……我现在要使用这颗魔力水晶球了。",
                "\t[hero]\b[hero]你做好准备了吗？",
                "\t[????,N430]\b[this,2,2]快开始吧。",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        2,
                        5
                    ]
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        2,
                        2
                    ]
                },
                {
                    "type": "setValue",
                    "name": "item:I349",
                    "operator": "-=",
                    "value": "1"
                },
                {
                    "type": "tip",
                    "text": "失去魔力水晶",
                    "icon": "I349"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                "\t[hero]\b[hero]原来用尽过后，是会直接碎掉的一次性道具么。",
                "\t[hero]\b[hero]嗯？怎么还是被关在那里？",
                {
                    "type": "show",
                    "loc": [
                        [
                            2,
                            6
                        ]
                    ],
                    "time": 500
                },
                "\t[????,N430]\b[this,2,6]那是我分离出来的一部分力量。作为分身留在那里，好骗过这里的塔主。",
                {
                    "type": "changePos",
                    "direction": "down"
                },
                "\t[hero]\b[hero]你……真的是人类吗？",
                "\t[????,N430]\b[this,2,6]我现在自己也不知道这个答案。",
                "\t[hero]\b[hero]那……我身上的什么诅咒能给我消去了吗？",
                "\t[????,N430]\b[this,2,6]哼哼……当然没这么容易……",
                "\t[????,N430]\b[this,2,6]当你帮我杀死这里的塔主后，契约自动解除。",
                "\t[hero]\b[hero]可恶……强制打工光有一个魔化诅咒就够我受得了。",
                "\t[hero]\b[hero]再加一个什么契约……我可真是吃不消了啊……",
                "\t[????,N430]\b[this,2,6]魔化诅咒？",
                "\t[????,N430]\b[this,2,6]哦……原来你身上带着这种东西啊……我说怎么感觉你的身体构造有点特殊。",
                "\t[????,N430]\b[this,2,6]作为我的协助者，我可以暂时帮你控制这个诅咒。",
                "\t[hero]\b[hero]真的！？",
                "\t[hero]\b[hero]你还有这种能力？",
                "\t[????,N430]\b[this,2,6]之后我会附身在你的影子中，在这个状态下我可以将你身上的魔化诅咒削弱一半。",
                "\t[????,N430]\b[this,2,6]这样你就不用频繁使用魔晶来维持你的理智了。",
                "\t[????,N430]\b[this,2,6]不过如果你的魔力消耗量过大，身上也是会出现魔化特征的。",
                "\t[????,N430]\b[this,2,6]但我可以维持住你的理智，不被魔化所侵蚀。",
                "\t[????,N430]\b[this,2,6]不过在这个状态下你自身的力量会由于魔化而削弱，你掌握的魔化能力也会无法施展。",
                "\t[hero]\b[hero]你究竟为什么可以做到这些……",
                "\t[hero]\b[hero]恐怕就连王国顶尖的魔法师也无法……",
                "\t[????,N430]\b[this,2,6]我现在也没有你想要的答案。",
                "\t[????,N430]\b[this,2,6]但我想……杀死塔主后应该就能让我明白了。",
                "\t[????,N430]\b[this,2,6]因为我的身体现在唯一的情绪就在告诉我一定要去杀了这里的塔主。",
                "\t[????,N430]\b[this,2,6]而就我看来，即使你们三人合力也未必是塔主的对手。",
                "\t[????,N430]\b[this,2,6]有了我的帮助，你们才能有机会。",
                "\t[????,N430]\b[this,2,6]我们的目标现在是一致的，我需要你，你也需要我。",
                "\t[????,N430]\b[this,2,6]所以你尽管放心的相信我好了。",
                "\t[hero]\b[hero]……",
                "\t[hero]\b[hero]好吧……毕竟之前如果没有你的帮忙，我已经被那个黑骑士给砍死了。",
                "\t[hero]\b[hero]啊……对了，在这之前你得有个名字吧？",
                "\t[hero]\b[hero]我叫……",
                "\t[????,N430]\b[this,2,6]约瑟，我知道你们的名字。",
                "\t[hero]\b[hero]呃……你不知道你这样显得很没礼貌么。",
                "\t[怀特莉丝,N430]\b[this,2,6]称呼我为怀特莉丝吧。",
                "\t[hero]\b[hero]这名字是你现想的？",
                "\t[怀特莉丝,N430]\b[this,2,6]这是刻在我魔力系统里的名字。",
                "\t[hero]\b[hero]（魔力系统么……只有高阶魔法师才有的东西，可以帮助他们节省大量准备而快速施法。）",
                "\t[hero]\b[hero]（像我这种只会一些低阶魔法的，就与此无缘了，不知道伊杰明有没有。）",
                "\t[怀特莉丝,N430]\b[this,2,6]……如果我曾经在魔力系统里记录日志，应该就能找回记忆了。",
                "\t[怀特莉丝,N430]\b[this,2,6]嗯，从现在开始，我要开始记录！",
                "\t[hero]\b[hero]好了，现在记录这事先放一放。",
                "\t[hero]\b[hero]我现在得抓紧时间赶回去了，不然到时候他们两个到了，我没到就尴尬了。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            6
                        ]
                    ],
                    "remove": true,
                    "time": 500
                },
                "\t[怀特莉丝,N430]\b[hero]现在我已经附在你的影子中了，你接下来可以放心大胆的使用魔力了。",
                "\t[hero]\b[hero]这种感觉……真的身体好像轻松了不少？",
                "\t[hero]\b[hero]这种状态……前所未有的畅快啊！",
                "\t[hero]\b[hero]脑袋也没有之前被诅咒影响的疼痛感了！",
                "\t[怀特莉丝,N430]\b[hero]你不是说要赶时间吗？怎么还有心情感慨。",
                "\t[hero]\b[hero]我也没想过能这么清爽啊？毕竟被折磨了快十年。理解一下嘛。",
                {
                    "type": "moveHero",
                    "async": true,
                    "steps": [
                        "down:1",
                        "right:4",
                        "down:3"
                    ]
                },
                {
                    "type": "setVolume",
                    "value": 0,
                    "time": 1000,
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
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "setValue",
                    "name": "flag:dzw",
                    "value": "15"
                },
                {
                    "type": "function",
                    "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT28: true, MT29: true, MT17: true }\n}"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT17",
                    "loc": [
                        5,
                        4
                    ],
                    "direction": "down"
                }
            ]
        },
        "2,6": {
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
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,  0,  0,  1,  0,101,  0,  1, 31,  0, 31,10024],
    [10026,  0,430,  0,  1,  0,102,  0,  1,  0, 32,  0,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1, 31,  0, 31,10024],
    [10026,  1, 85,  1,  1,  1, 84,  1,  1,  1, 86,  1,10024],
    [10026,  0,  0,  1,  1,  0,  0,  0,  1, 21,  0, 21,10024],
    [10026,  0,433, 83, 83,  0,  0,  0, 86,  0,501,  0,10024],
    [10026,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026,  0,502,  0,  0,  0,503,  0,  0,  0,502,  0,10024],
    [10026,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1,  0,10024],
    [10026,  0,  1,  0,267,  0,  1,  0,253,  0,  1,  0,10024],
    [10026, 88,  1,499,  0, 34,  1, 34,  0,500,  1, 87,10024],
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
    "underGround": true
}