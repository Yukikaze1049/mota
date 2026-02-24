main.floors.MT385=
{
    "floorId": "MT385",
    "title": "终焉之城·魔殿第四十三层",
    "name": "终焉之城·魔殿第四十三层",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "2,7": {
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
    [430,1242,240092, 81, 81,385, 88,385, 81,401,240092,240092,396],
    [ 81,401,240092,386,1236, 81,  0,  0,240092,402,240092,240092,1239],
    [387,1234,240092,240092,240092,  0,666,1242,240092,240092, 21,240092,  0],
    [ 81,402,1235,666,1241,240092, 83,240092,  0,1236,383, 21,240092],
    [ 81,351,  0,240092,  0,1230, 21,1230,240092, 81,240092,240092, 22],
    [383, 81,1242,384, 81,240092,1234, 81,402,369,1234,353,240092],
    [1231,240092,240092,240092, 81,1230,386,1230,240092, 82,  0,240092,387],
    [367,240092, 87,1239, 22,351,1242, 21,350,  0,1237,  0,1238],
    [ 81,240092,240092,240092,240092,402,335,402,1235,366, 82,384,240092],
    [1231,402, 81,1241,387,240092, 81,240092,402,240092,  0,1240, 21],
    [384, 81, 22,  0,240092,387,1231,368,240092,1238, 21,240092,401],
    [240092,1241, 81, 21,240092,240092,240092,  0,240092,401,240092,369, 81],
    [240092,378,240092, 81, 81,1230,354,1230,240092,1236,338,1242,353]
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