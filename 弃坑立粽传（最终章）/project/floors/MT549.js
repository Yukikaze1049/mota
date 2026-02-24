main.floors.MT549=
{
    "floorId": "MT549",
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
                "function": "function(){\ncore.checkMonster([\"MT549\", ]);\n}"
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
            "\t[小粽,hero]\b[hero]邪神·谶！停止这个无聊的游戏吧！",
            "\t[小粽,hero]\b[hero]将我放置在这个游戏之中，你到底在\r[red]追求什么？！",
            "\t[小粽,hero]\b[hero]这场游戏的尽头，你究竟在\r[red]渴望着什么？！",
            "\t[邪神·谶,E1544]\b[this,6,1]破坏既定的和谐。",
            "\t[小粽,hero]\b[hero]你说什么？",
            "\t[邪神·谶,E1544]\b[this,6,1]破坏掉这个故事，让其走向无法捕捉的混沌。",
            "\t[小粽,hero]\b[hero]你......究竟在说些什么？",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "250000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "220000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "500000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT551",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
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
    [388,  0,1138,1138,1138,1138,1138,1138,1138,1138, 21, 22, 21],
    [1138,1546,1138,1138,1138,1138,1544,1138,385,1138, 21,1549, 21],
    [1547,  0, 82,669,1273,1138,670,1138,1546,1138,1138, 81,1138],
    [  0,1138,1138,1138,669,1138,1550,1138,  0,1547,  0,335,383],
    [1548, 21,  0,1551,1138,1138, 83,1138, 81,1138,1138,1138,1138],
    [1273,1138,1138,  0,  0,1547, 21,1547,  0,  0,  0,  0,  0],
    [1274,1138, 21,  0,1138,1138,1551,1138,1138,1138,335,1138,383],
    [1138,1138, 81,1138,382,1552,  0,1552,382,1138,1138,1138, 81],
    [356,1138,371,1548,1138,1138, 81,1138,1138,1138,  0,369,1548],
    [340,1138,1138, 81, 81,669,1545,669,1138,  0,1546,1138,1138],
    [372,1138,1138,1547,1138,1552, 22,1552, 82,1138,353,1273,337],
    [340,1138,1138,  0,1138,1138, 81,1138,1395,1138,1138,1138, 81],
    [356,1549,1273,1546,1138,1138,  0,1138,1549, 23,1546,  0,1549]
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