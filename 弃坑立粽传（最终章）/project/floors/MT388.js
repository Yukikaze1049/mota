main.floors.MT388=
{
    "floorId": "MT388",
    "title": "终焉之城·魔殿第四十六层",
    "name": "终焉之城·魔殿第四十六层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle28.mp3",
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
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 100000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "0,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "12,12": {
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
    [ 88,240092,338,240092,371,1241,387,240092,334, 82,353,337,353],
    [388,240092,1240,240092,240092, 81,240092,240092,350,240092,369,1238,369],
    [430,240092,351,  0,240092, 23,1242,240092,1235,240092,240092, 81,240092],
    [401,240092,1235,335,  0,240092, 22,1240,  0,368,1241, 47,240092],
    [  0, 81,  0,240092, 82,240092,240092,1230,240092,  0,384,240092,240092],
    [240092,240092,336,1238,336,  0,368, 21,240092, 81, 21, 81,1239],
    [402,240092,1242,240092,240092, 81,240092,1230,240092,  0,1237,240092,340],
    [412,1231,377,240092,  0,387,1236,  0,1240,401,  0,240092,356],
    [240092,  0,240092,401,1242,240092,371, 81,386,  0,240092,240092,430],
    [ 21,1237,240092,240092,383, 81,240092,240092, 81,1236,402,240092,240092],
    [240092,361, 81,382,1235,370,  0, 81,351,  0,240092,240092,  0],
    [240092, 83,240092,240092,240092,  0,1234, 21,1237,335,1242,240092,1230],
    [666,1239,396,396,396,240092,338,240092,337,240092, 22,240092, 87]
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