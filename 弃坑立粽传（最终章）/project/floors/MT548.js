main.floors.MT548=
{
    "floorId": "MT548",
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
    "bgm": "universe4.mp3",
    "firstArrive": [],
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
                "function": "function(){\ncore.checkMonster([\"MT548\", ]);\n}"
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
            "\t[小粽,hero]\b[hero]我已经重新走到你面前了，现在你可以告诉我为什么要这么做了吗？",
            "\t[邪神·谶,E1544]\b[this,6,1]我在做一个试验。",
            "\t[小粽,hero]\b[hero]试验？什么试验。",
            "\t[邪神·谶,E1544]\b[this,6,1]这是\r[red]“篡改人类意志”\r[white]的试验。",
            "\t[小粽,hero]\b[hero]你在开什么玩笑？！我不会让你为所欲为的！！",
            "\t[邪神·谶,E1544]\b[this,6,1]是吗？那么游戏就继续开始吧！",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "320000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "320000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "1500000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT549",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
            },
            "\t[邪神·谶,E1544]\b[this,6,1]还是老规矩，走到我面前我便告诉你真相。"
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [1274,1549,355,339,371,1138,1138,1138,371,355,339,1549,1274],
    [1138, 81,1138, 82,1138,1138,1544,1138,1138, 82,1138, 81,1138],
    [1273,1546,354,338,370,1138,670,1138,370,338,354,1546,1273],
    [1138, 81,1138, 82,1138,1138,1550,1138,1138, 82,1138, 81,1138],
    [385,1551, 21, 21,  0,1138, 83,1138,  0, 21, 21,1551,385],
    [1138,1138,1138,1138,1548,1552, 23,1552,1548,1138,1138,1138,1138],
    [1273,  0,  0,1547,335,1138,  0,1138,335,1547,  0,  0,1273],
    [1138,1138,1547,1138,  0,1552,1274,1552,  0,1138,1547,1138,1138],
    [668,1138,336,1138,351,1138, 21,1138,351,1138,336,1138,668],
    [669,1138,  0, 81, 81, 81,1545, 81, 81, 81,  0,1138,669],
    [ 81,  0,352,1138,667,1138, 81,1138,667,1138,352,  0, 81],
    [1138, 81,1138,1138,1138, 21,1274, 21,1138,1138,1138, 81,1138],
    [1274,1549,387,371, 82,1273,  0,1273, 82,371,387,1549,1274]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}