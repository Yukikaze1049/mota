main.floors.MT340=
{
    "floorId": "MT340",
    "title": "终焉之城·魔殿第九层",
    "name": "终焉之城·魔殿第九层",
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
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
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
    [240092, 23,  0, 34,240092, 23,1157,240092, 27,1155,  0,240092,240092],
    [240092,240092,240092,240092,240092,240092,  0, 81,  0,240092, 30, 81,240092],
    [240092,367,238,334,  0,366,249, 21,1155, 21,240092, 34,240092],
    [240092,240092,240092,1160,240092, 81,240092, 82,240092,240092,1164,  0,240092],
    [240092,370,240092,  0,383,1157,  0,335,1160,  0,335,240092,240092],
    [240092,353,1164,351,240092,240092,240092,240092,351,240092,  0, 21,240092],
    [240092,370,240092,1159,240092,362,1159,  0,1157,  0,240092,1155,240092],
    [240092, 81,249, 32,  0,240092,399,240092,240092,240092,  0,353,240092],
    [240092,240092,240092,240092,238,240092, 82,240092,240092,240092,1157,  0,240092],
    [240092, 34,352,1159,  0,1164,399,1164,  0,1155,  0, 81,240092],
    [240092,368, 21,240092,335,240092, 88,240092,335,240092,1160,411,240092],
    [240092,240092,240092,240092,240092,240092, 87,240092,240092,240092,240092,240092,240092]
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