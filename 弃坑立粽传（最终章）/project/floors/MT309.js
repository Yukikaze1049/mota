main.floors.MT309=
{
    "floorId": "MT309",
    "title": "未知空间",
    "name": "未知空间",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
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
        {
            "type": "sleep",
            "time": 500
        },
        "\t[？？？,N724]\b[this,6,2].........................",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        {
            "type": "changeFloor",
            "floorId": ":next",
            "loc": [
                111,
                11
            ],
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            "\t[？？？,N724]\b[this,6,2]你所蕴含的情感的确让人叹为观止...........不过！",
            "\t[？？？,N724]\b[this,6,2]世界线仍旧要继续运行！",
            "\t[？？？,N724]\b[this,6,2]所以抱歉了，你的情感最终还是会消逝在时间长河中！",
            {
                "type": "vibrate",
                "time": 500
            },
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "animate",
                "name": "unexpected2",
                "loc": [
                    6,
                    2
                ]
            },
            "\t[？？？,N724]\b[this,6,2]哦？那个叫小粽的小家伙被人杀掉了呀.......",
            {
                "type": "animate",
                "name": "emmslow",
                "loc": [
                    6,
                    2
                ]
            },
            "\t[？？？,N724]\b[this,6,2]那么，是时候动用我之前送你的命道牌了！",
            "\t[？？？,N724]\b[this,6,2]就当我为你铺一条道路了！",
            "\t[？？？,N724]\b[this,6,2]不过...未来还是得......",
            "\t[？？？,N724]\b[this,6,2]哈哈哈哈哈哈哈哈！！",
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
                "floorId": "MT302",
                "loc": [
                    111,
                    11
                ],
                "time": 500
            },
            {
                "type": "insert",
                "loc": [
                    12,
                    12
                ],
                "floorId": "MT302"
            }
        ],
        "6,12": [
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "god1.mp3",
                "keep": true
            },
            "\t[？？？]..............时间差不多了！",
            "\t[？？？]各个势力即将要碰撞出那最璀璨的火花了！",
            "\t[？？？]让我看看......................",
            "\t[？？？]\\d勇者,立守护之剑,造苍穹守世。",
            "\t[？？？]\\d魔者,寻伊人之梦,统绝世之塔。",
            "\t[？？？]\\d神者,窥人心之本,定万道法则。",
            "\t[？？？]\\d那么究竟最后谁才是真正的赢家呢！是勇者，魔者，还是神者呢？",
            "\t[？？？]\\d吾可是非常期待呀！！",
            "\t[？？？]\\d那么！再临了！！",
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "insert",
                "loc": [
                    6,
                    0
                ],
                "floorId": "MT302"
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,724,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
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