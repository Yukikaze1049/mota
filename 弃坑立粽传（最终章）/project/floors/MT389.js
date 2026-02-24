main.floors.MT389=
{
    "floorId": "MT389",
    "title": "终焉之城·魔殿第四十七层",
    "name": "终焉之城·魔殿第四十七层",
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
        "12,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "8,12": {
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
    [ 21,1231, 21,240092,1237,401,  0,385,  0,240092, 21,240092,240092],
    [384,240092,1237, 81,  0,240092,  0,1242,353,240092, 21,240092,240092],
    [240092,240092,240092,335,1240,383, 81, 21,  0,240092,362,1239,367],
    [335,240092,  0,1241,  0,240092,340,1236, 81,240092,346,240092,  0],
    [  0, 81,430, 81,1240, 22,1242,  0,1231,335,240092,1235,351],
    [383,1236, 81, 22,240092,1238,  0, 81,383,1234,352,  0,240092],
    [240092,386,401,1234, 81,371,240092, 21,240092,336,  0,1238,401],
    [  0,1239,240092, 21,  0,1242,240092,1234,384,240092,368,  0,240092],
    [367,  0,351,1231,240092,  0, 21,  0,240092,401,1236, 81,240092],
    [1235,240092,402, 81, 81,240092,1235,335,1242,383,240092,1231, 23],
    [368,240092,1237,338,  0,1238,401,240092, 81,240092,240092,240092,240092],
    [ 21,1240, 22,1241,354,240092,1239,240092,383,  0,351,  0,383],
    [1242, 21,240092,385,240092,666,388,240092, 87,240092,240092,240092, 88]
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