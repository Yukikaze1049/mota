main.floors.MT339=
{
    "floorId": "MT339",
    "title": "终焉之城·魔殿第八层",
    "name": "终焉之城·魔殿第八层",
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
        "12,6": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,11": {
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
    [240092,240092, 32,240092, 32,240092,240092, 33,240092,240092,240092,383,240092],
    [240092,240092, 21,1160, 21,1159,387, 82, 81,1155,383,1160,240092],
    [240092,411,240092, 81,240092,240092, 82, 81,367,240092,240092, 81,240092],
    [240092,238, 21,1155,410,240092,249,240092,1160,354,1157, 21,240092],
    [240092,240092,  0,240092,240092,240092, 30,240092,240092,240092,  0,1164,240092],
    [240092,370,238,240092,  0,1156,  0,1155,240092,240092,240092,249, 88],
    [240092,  0, 22, 81,1165, 21, 81,  0, 29,240092,  0, 27, 81],
    [240092,1157,240092,240092,240092, 82,  0,1156, 82,1165, 31,240092,240092],
    [240092, 81,240092,368,  0,384,1159,240092, 21, 81,240092,350,240092],
    [240092, 32,1164, 22,240092,240092, 81,240092,240092, 22,1155, 21,240092],
    [240092,383,240092,352,1155, 82, 87, 83, 32,1156,240092,334,240092],
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