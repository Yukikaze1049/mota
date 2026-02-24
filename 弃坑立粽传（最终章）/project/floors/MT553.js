main.floors.MT553=
{
    "floorId": "MT553",
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
                "function": "function(){\ncore.checkMonster([\"MT553\", ]);\n}"
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
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "640000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "480000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "250000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT555",
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
    [1275,1138,1276, 23,1276,1138,1138,1138,1276, 23,1276,1138,1275],
    [355,1138,1138, 81,1138,1138,1544,1138,1138, 81,1138,1138,355],
    [339,1138,340,1274,340,1138,670,1138,340,1274,340,1138,339],
    [1549,1138,1274,1550,1274,1138,1550,1138,1274,1550,1274,1138,1549],
    [ 81,1274,1138, 81,1138,1550,392,1550,1138, 81,1138,1274, 81],
    [1138,1546,369,  0,1138,1138, 83,1138,1138,  0,369,1546,1138],
    [1138,337,1138, 21,1274,335,1551,351,1274, 21,1138,353,1138],
    [1138,353,1138,1546,1138,1552,  0,1552,1138,1546,1138,337,1138],
    [393,1550,1138,384,336,1138,383,1138,352,384,1138,1550,393],
    [1138,  0,1138,1138,1138, 21,1551, 21,1138,1138,1138,  0,1138],
    [1138,383,1273,1547, 21,1552,384,1552, 21,1547,1273,383,1138],
    [1138,1547,1138,1138,1548,1138,1274,1138,1548,1138,1138,1547,1138],
    [1138,1273,1138,669,383,1138,  0,1138,383,669,1138,1273,1138]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}