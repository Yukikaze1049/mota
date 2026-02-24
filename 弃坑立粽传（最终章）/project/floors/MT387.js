main.floors.MT387=
{
    "floorId": "MT387",
    "title": "终焉之城·魔殿第四十五层",
    "name": "终焉之城·魔殿第四十五层",
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
        "7,9": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "0,0": {
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
    [ 87, 83, 22,387,387,1239,401,240092,401,393,240092, 21,362],
    [1239,240092, 82,240092,240092, 81,240092,401,240092,1239,  0,1238,240092],
    [666,240092, 82,240092,  0,1230,382,1230,  0,361,1242, 82,667],
    [1242, 21,  0,1231,353,240092,1235,240092,377,1234,  0, 21,240092],
    [ 50,240092,1237,337,240092,240092,335,1238,401,240092, 22,1241, 21],
    [1241,240092,  0,240092,240092,1240,  0,352, 82,240092,240092,240092,386],
    [  0,388,1234,401,1230, 21,1230,240092,351,240092, 81,337,240092],
    [1231,240092,  0, 81,240092, 81,240092,  0,1236, 81,353,1238,240092],
    [371,1242, 21, 81,1235,  0,1239,401,  0, 81,240092, 21,402],
    [ 81,240092,  0,240092,352,240092,430, 88,430,240092,240092,  0, 22],
    [  0,338,1239,336,1240,  0,1242,387,  0,1234,240092,1237,240092],
    [ 81,240092,386, 81,240092,240092,240092,1231,240092,370,1241,338,  0],
    [1236,384, 82,402,401,240092,335,351,240092,240092,430,240092,240092]
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