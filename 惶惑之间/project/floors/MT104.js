main.floors.MT104=
{
    "floorId": "MT104",
    "title": "森林之塔10层",
    "name": "森林之塔10层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.jl==1)",
            "true": [
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]刚刚……那是……你看到了吗？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]看到了。",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]那个精灵的回忆？为什么我们能够看到……",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]应该与塔的某种特性有关……",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]从回忆来看……距今隔了一百年左右啊……",
                "\t[hero]\b[hero]还有始祖塔……这种说法……",
                "\t[hero]\b[hero]莫非这里出现的魔塔也是始祖之一？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        11
                    ]
                },
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]喂喂喂！你怎么了！？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]我身上好像被解除了什么封印……",
                "\t[怀特莉丝,N430]\b[hero]我的魔力……变多了？",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]当真？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]似乎恢复了四分之一的魔力……",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]这么说来……击败剩下的魔塔就能逐渐恢复你全部的魔力了？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,N430]\b[hero]很好……若是能就这样恢复我的力量……",
                "\t[怀特莉丝,N430]\b[hero]就绝对能够手刃掉那个折磨我的混蛋！",
                "\t[怀特莉丝,N430]\b[hero]赶紧做好准备出发下一座塔！",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                "\t[hero]\b[hero]唉……一扯到自己身上的事情就变得这么激动……",
                {
                    "type": "moveHero",
                    "time": 500,
                    "async": true,
                    "steps": [
                        "up:4"
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
                    "floorId": "MT106",
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
            "\t[hero]\b[hero]你就是一直狙击我的家伙吧……",
            "\t[hero]\b[hero]没想到居然真的是精灵族。",
            "\t[hero]\b[hero]呵……长这么大还第一次遇到精灵呢。",
            "\t[莉雅朵洛,E542]\b[this,6,7]……",
            "\t[hero]\b[hero]她的样子……是不是有些怪异？",
            "\t[hero]\b[hero]她不像是塔主。",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,N430]\b[hero]没错……她已经死了。",
            "\t[怀特莉丝,N430]\b[hero]只是一具被操纵的傀儡……和之前的黑骑士一样。",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            "\t[hero]\b[hero]这样啊……",
            "\t[hero]\b[hero]还以为能和真正的精灵族说上话。",
            "\t[hero]\b[hero]让我帮你解脱吧。",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,9": {
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
                    "condition": "(core.itemCount('I554')==4)",
                    "true": [
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                9
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I554",
                            "value": "0"
                        },
                        {
                            "type": "autoText",
                            "text": "拿到下方宝石后将离开森林之塔且无法返回，请注意。",
                            "time": 3000
                        }
                    ],
                    "false": [
                        {
                            "type": "playSound",
                            "name": "error.mp3"
                        },
                        "此门需要4个绿宝石碎片才能开启。目前数量：${core.itemCount('I554')}个"
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:sl10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.sl10==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    }
                ]
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:sl10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.sl10==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            5
                        ]
                    }
                ]
            }
        ],
        "6,7": [
            {
                "type": "setBlock",
                "number": "I554"
            },
            "\t[hero]\b[hero]这就是最后一块碎片了。",
            "\t[hero]\b[hero]应该是用来打开前面的门的吧。",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,N430]\b[hero]……原来如此",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            "\t[hero]\b[hero]怎么了？",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,N430]\b[hero]这座魔塔本质只是之前的魔塔分裂出去的一部分……",
            "\t[怀特莉丝,N430]\b[hero]所以这里真正的塔主本质还是之前那家伙……",
            "\t[怀特莉丝,N430]\b[hero]这精灵看似是塔主……实则与之前的黑骑士一样……不过是塔中的傀儡。",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            },
            "\t[hero]\b[hero]他大费周章的将原本的塔分裂出去三个的目的是什么呢……",
            "\t[hero]\b[hero]还真是喜欢绕圈子的家伙。"
        ]
    },
    "afterGetItem": {
        "6,7": [
            "\t[hero]\b[hero]这么一来就能集齐了。"
        ],
        "6,11": [
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
                "floorId": "MT105",
                "loc": [
                    0,
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,356,  0,  0,553,  0, 88,  0,553,  0,  0,356, 20],
    [ 20, 20, 81, 20, 20, 21,  0, 21, 20, 20, 81, 20, 20],
    [ 20, 31,  0, 31, 20, 20, 81, 20, 20, 31,  0, 31, 20],
    [ 20,  0,550,  0, 20,552, 29,552, 20,  0,550,  0, 20],
    [ 20, 20, 81, 20, 20, 20, 85, 20, 20, 20, 81, 20, 20],
    [ 20, 21,  0, 21, 20, 32,  0, 32, 20, 21,  0, 21, 20],
    [ 20,  0,551,  0, 20,  0,542,  0, 20,  0,551,  0, 20],
    [ 20, 20, 81, 20, 20, 32,  0, 32, 20, 20, 81, 20, 20],
    [ 20, 33,  0, 33, 20, 20, 85, 20, 20, 33,  0, 33, 20],
    [ 20,  0, 29,  0, 20, 20,  0, 20, 20,  0, 29,  0, 20],
    [ 20, 27,  0, 28, 20, 20,556, 20, 20, 28,  0, 27, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "sj": 9,
    "bgmap": [
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305],
    [305,305,305,305,305,305,305,305,305,305,305,305,305]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}