main.floors.MT149=
{
    "floorId": "MT149",
    "title": "最终之塔14层",
    "name": "最终之塔14层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 3,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "if",
            "condition": "flags.zzt1==1&&flags.zzt2==1",
            "true": [
                "\t[hero]\b[hero]这两扇门应该是由伊杰明和赫解开的。"
            ],
            "false": [
                "\t[hero]\b[hero]这两扇门……应该要由伊杰明和赫来打开。"
            ]
        },
        "\t[hero]\b[hero]不过为什么会出现在紫宝石之前？",
        "\t[hero]\b[hero]还是说根本就没有紫宝石和那个闻斯莫提的记忆？",
        {
            "type": "setHeroIcon",
            "name": "o.png"
        },
        "\t[怀特莉丝,hero]\b[hero]不，紫之宝石就在后面。",
        "\t[怀特莉丝,hero]\b[hero]我感知到了。",
        {
            "type": "setHeroIcon",
            "name": "hero.png"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.mh==1)",
            "true": [
                {
                    "type": "setCurtain",
                    "time": 500
                },
                "\t[hero]\b[hero]所以……你……你才是惶惑卿？",
                {
                    "type": "setHeroIcon",
                    "name": "o.png"
                },
                "\t[怀特莉丝,hero]\b[hero]……啊啊啊啊啊！！！",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        3
                    ]
                },
                "\t[怀特莉丝,hero]\b[hero]我……全都想起来了！",
                "\t[怀特莉丝,hero]\b[hero]我要杀了你！闻斯莫提！",
                {
                    "type": "setHeroIcon",
                    "name": "hero.png"
                },
                {
                    "type": "setBlock",
                    "number": "N433",
                    "loc": [
                        [
                            6,
                            3
                        ]
                    ]
                },
                {
                    "type": "move",
                    "loc": [
                        6,
                        3
                    ],
                    "time": 100,
                    "steps": [
                        "up:2"
                    ]
                },
                "\t[hero]\b[hero]喂！等等啊！",
                {
                    "type": "setValue",
                    "name": "flag:mh",
                    "value": "0"
                },
                {
                    "type": "setVolume",
                    "value": 100,
                    "time": 1
                },
                {
                    "type": "playBgm",
                    "name": "jw0.mp3",
                    "keep": true
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {
        "6,2": [
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
                "type": "setHeroOpacity",
                "opacity": 0,
                "time": 1
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "changeFloor",
                "floorId": "MT171",
                "loc": [
                    1,
                    11
                ],
                "direction": "up"
            }
        ]
    },
    "afterOpenDoor": {
        "6,3": [
            "\t[hero]\b[hero]还真的放在这里。",
            "\t[hero]\b[hero]不过……为什么塔的结构会这样……",
            "\t[hero]\b[hero]这宝石在那两扇门之前不是应该更合理？",
            {
                "type": "setHeroIcon",
                "name": "o.png"
            },
            "\t[怀特莉丝,hero]\b[hero]看看这段记忆中是否有关于塔主的信息。",
            {
                "type": "setHeroIcon",
                "name": "hero.png"
            }
        ]
    },
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flags.zzt1==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            9
                        ]
                    }
                ]
            }
        },
        "6,6": {
            "0": {
                "condition": "flags.zzt2==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,675,  0,  0,  2, 87,  2,  0,  0,678,  0,10024],
    [10026,  0,  2,  0,  0,674,671,677,  0,  0,  2,  0,10024],
    [10026,501,  2,  2, 81,  2, 81,  2, 81,  2,  2, 21,10024],
    [10026, 32,  2, 31,  0,  2,  0,  2,  0, 31,  2, 32,10024],
    [10026, 32,  2,  0,356,  2,  0,  2,356,  0,  2, 32,10024],
    [10026,  2,  2,  2,  2,  2,511,  2,  2,  2,  2,  2,10024],
    [10026, 31,499, 32, 21,  2,  0,  2, 22, 32,500, 31,10024],
    [10026,  0,  0,  0,  0,  2,  0,  2,  0,  0,  0,  0,10024],
    [10026,  2,678,  2,  2,  2,512,  2,  2,  2,675,  2,10024],
    [10026,356,  0,677,  0, 81,  0, 81,  0,674,  0,356,10024],
    [10026, 21,  0,  0,677,  2, 88,  2,674,  0,  0, 21,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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