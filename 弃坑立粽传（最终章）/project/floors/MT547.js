main.floors.MT547=
{
    "floorId": "MT547",
    "title": "未知之地",
    "name": "未知之地",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "disorder10.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]这里是？！",
        "\t[邪神·谶,E1544]\b[this,6,2]游戏很简单，击败你眼前所有的魔物，然后走到我面前。",
        "\t[小粽,hero]\b[hero]......你究竟想干什么？为什么要如此多此一举。",
        "\t[邪神·谶,E1544]\b[this,6,2]呵呵呵.....等你先走到我面前再说吧，那么现在！游戏开始！！"
    ],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 50000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 100000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 25000000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT547\", ]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==1)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "insert",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ],
        "6,1": [
            "\t[邪神·谶,E1544]\b[this,6,1]不错，有点水平。",
            "\t[小粽,hero]\b[hero]我现在已经走到你面前了，这个游戏已经结束了！",
            "\t[邪神·谶,E1544]\b[this,6,1]哦？是吗。",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "300000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "285000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "375000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT548",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
            },
            "\t[小粽,hero]\b[hero]！！！",
            "\t[小粽,hero]\b[hero]这...这是怎么回事？为什么我回到了起点，还有.....",
            "\t[小粽,hero]\b[hero]我刚刚加成的能力怎么完全消失了！",
            "\t[邪神·谶,E1544]\b[this,6,1]本座之前说过，这是游戏。既然是游戏里面的内容，那你又怎么可能会把游戏中带来的能力转变为现实的力量呢？",
            "\t[邪神·谶,E1544]\b[this,6,1]本座重新布置了游戏，如果你想知道后续，就还是像之前一样走到我面前吧。"
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [355,1273,339, 81, 23,1138,1138,1138, 22,1138,  0,385,  0],
    [1138,1138,1549,1138,  0,1138,1544,1138, 21,1138,1552,  0,1552],
    [669,1551,  0,669,1547,1138,670,1138, 21,1138,1138, 81,1138],
    [351,1138,367,1138,  0,1138,1550,1138,1547,1138, 82,  0,  0],
    [1138,1138,  0,335, 81,351, 83,335,  0,  0, 81,1138,340],
    [352,1138,1546,1138,1545,1138,669,1138,1138,1551,1138,1138,388],
    [669,1548,351,  0,367,  0,1547,  0,1548,384,  0,1549,356],
    [336,1138,1138,335,1138,1138,335,1138,1138,1138,1548,1138,1275],
    [1138,1138,1138,1547,  0,  0,1545,  0,1545,  0,367,1138,1138],
    [338,1546,351,  0,1138,1138, 82,1138,1138,1138,1545,1138,1274],
    [354,1138,669,383,1138,  0, 21,  0,1138,335,  0, 81,1546],
    [370,1138,1138,1138,1138, 21,1273, 21,1138,1138,1138,1138,1274],
    [1273,1138,1275,1275, 24,1274,  0,1274, 24,1275,1275,1138,1274]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0, 17, 17,  0,  0,  0,  0,  0, 17, 17,  0,  0],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}