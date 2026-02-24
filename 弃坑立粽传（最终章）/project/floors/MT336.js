main.floors.MT336=
{
    "floorId": "MT336",
    "title": "终焉之城·魔殿第五层",
    "name": "终焉之城·魔殿第五层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle23.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {
        "12,6": [
            {
                "type": "changeFloor",
                "floorId": "MT342",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "battle24.mp3"
            }
        ]
    },
    "changeFloor": {
        "6,8": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092],
    [240092,240092,240092,240092, 34,240092, 87,240092, 34,240092, 34, 33,240092],
    [240092, 33,240092,240092, 81,240092,238,240092, 81, 34, 82,240092,240092],
    [240092,1160, 81,  0,353,240092, 83,240092,240092, 81,240092,393,240092],
    [240092,370,240092,238, 81,240092,367,240092, 21,1160,  0,1159,240092],
    [240092,386,240092,  0,351,240092, 21,240092, 21,240092,367,240092, 85],
    [240092,240092,1156,335, 81,240092, 32,240092,240092,  0,  0, 85, 89],
    [240092, 21,  0,1165,410,240092,411,240092, 22,1157,240092,240092, 85],
    [240092,240092,1156,  0, 81,240092, 88,240092,240092,383,  0,240092,240092],
    [240092,  0,  0, 31,  0,1161,  0,1161,240092,238, 34,249,240092],
    [240092,240092, 83,240092,240092,  0,1164,  0,1156,  0,240092, 21,240092],
    [240092, 33,249, 33,240092,380,240092,380,240092, 21,240092, 21,240092],
    [240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092]
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