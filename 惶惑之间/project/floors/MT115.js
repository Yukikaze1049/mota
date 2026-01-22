main.floors.MT115=
{
    "floorId": "MT115",
    "title": "熔岩之塔10层",
    "name": "熔岩之塔10层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 9,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.hs==1)",
            "true": [
                {
                    "type": "setHeroOpacity",
                    "opacity": 1
                },
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]惶惑卿？",
                "\t[hero]\b[hero]莫非这就是我们现在那座塔的塔主？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]……",
                "\t[怀特莉丝,N430]\b[hero]（这个名字……）",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        11,
                        6
                    ]
                },
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]怎么样？恢复魔力了吗？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]嗯……这下子已经恢复了近乎一半的魔力了。",
                "\t[怀特莉丝,N430]\b[hero]看来很快我也能找到我想要的答案了。",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]不过真是没到……原来过去帝国曾经能够对魔塔调查到这个地步。",
                "\t[hero]\b[hero]所谓的始祖塔……如今应该没有多少人知道这种称呼。",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]没有传下来？",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]嗯……大概在六十年前……整个大陆就爆发了一场大战争。",
                "\t[hero]\b[hero]当时数座魔塔同时对人类发起进攻。",
                "\t[hero]\b[hero]人类也少有的团结在了一起。",
                "\t[hero]\b[hero]虽然取得了惨烈的胜利……但整个文明也几乎倒退了很多年。",
                "\t[hero]\b[hero]更何况……之后又有人企图借助这动乱的时期发起内战。",
                "\t[hero]\b[hero]导致很多东西都失传了。",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[怀特莉丝,N430]\b[hero]……",
                "\t[怀特莉丝,N430]\b[hero]是么……那我究竟应该是哪个时期的人呢……",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]那么，就剩下最后的蓝之塔了。",
                "\t[hero]\b[hero]一眨眼已经过了两天时间了……不知道村子怎么样了。",
                "\t[hero]\b[hero]不过我还真是头一次这么辛苦啊……",
                "\t[hero]\b[hero]连续经历了这么多次战斗。",
                "\t[hero]\b[hero]放在以前可不敢想。",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]从之前的记忆来看。",
                "\t[怀特莉丝,N430]\b[hero]蓝之塔里面的boss应该是那个法师或是神官。",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]走吧。",
                {
                    "type": "moveHero",
                    "time": 200,
                    "async": true,
                    "steps": [
                        "left:3"
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
                    "type": "changeFloor",
                    "floorId": "MT117",
                    "loc": [
                        6,
                        12
                    ],
                    "direction": "up"
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,6": [
            "\t[克洛德,E589]\b[this,7,6]……",
            "\t[hero]\b[hero]这个架势……",
            "\t[hero]\b[hero]斩龙剑么。",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,N430]\b[hero]那是什么？",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            "\t[hero]\b[hero]已经失传好多年的一种流派。",
            "\t[hero]\b[hero]相传是过去的剑士斩杀巨龙而创造的剑术。",
            "\t[hero]\b[hero]没想到会在这里遇到……",
            "\t[hero]\b[hero]同为剑士，我还真是荣幸啊。",
            "\t[hero]\b[hero]那么前辈……",
            "\t[hero]\b[hero]请多指教了！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "9,6": {
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
                {
                    "type": "if",
                    "condition": "(core.itemCount('I603')==4)",
                    "true": [
                        {
                            "type": "openDoor",
                            "loc": [
                                9,
                                6
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I603",
                            "value": "0"
                        },
                        {
                            "type": "autoText",
                            "text": "拿到右方宝石后将离开熔岩之塔且无法返回，请注意。",
                            "time": 3000
                        }
                    ],
                    "false": [
                        {
                            "type": "playSound",
                            "name": "error.mp3"
                        },
                        "此门需要4个红宝石碎片才能开启。目前数量：${core.itemCount('I603')}个"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
            {
                "type": "setBlock",
                "number": "I603"
            },
            "\t[hero]\b[hero]不愧是斩龙剑……",
            "\t[hero]\b[hero]若是没有被做成傀儡，恐怕我也很难获胜吧……"
        ]
    },
    "afterGetItem": {
        "7,6": [
            "\t[hero]\b[hero]这一次门后也会出现回忆吗？"
        ],
        "11,6": [
            {
                "type": "setVolume",
                "value": 0,
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
            {
                "type": "setVolume",
                "value": 100,
                "time": 1
            },
            {
                "type": "setHeroOpacity",
                "opacity": 0,
                "time": 1
            },
            {
                "type": "changeFloor",
                "floorId": "MT116",
                "loc": [
                    2,
                    12
                ]
            }
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [150,150,150,150,150,150,150,150,150,150,150,150,150],
    [150, 34, 81,  0,150,150, 21,150,150,150, 33,150,150],
    [150,150,150,  0,600, 81,  0,602, 81,501,  0,500,150],
    [150,  0,356,  0,150,150, 21,150,150,150, 33,150,150],
    [150,599,150,150,150,150,150,150,150,150,150,150,150],
    [150,  0, 31,150, 34,150,  0,  0,  0,150,150,150,150],
    [150, 88,  0,602, 30, 81,  0,606,  0, 85,  0,604,150],
    [150,  0, 31,150, 34,150,  0,  0,  0,150,150,150,150],
    [150,599,150,150,150,150,150,150,150,150,150,150,150],
    [150,  0,356,  0,150,150, 21,150,150,150, 33,150,150],
    [150,150,150,  0,600, 81,  0,602, 81,501,  0,499,150],
    [150, 34, 81,  0,150,150, 21,150,150,150, 33,150,150],
    [150,150,150,150,150,150,150,150,150,150,150,150,150]
],
    "bgmap": [
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154],
    [154,154,154,154,154,154,154,154,154,154,154,154,154]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}