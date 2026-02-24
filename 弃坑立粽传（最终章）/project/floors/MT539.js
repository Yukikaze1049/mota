main.floors.MT539=
{
    "floorId": "MT539",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe6.mp3",
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
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 19198100
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "4,3": {
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
    [1533,90007,90007,335,90007,90007,353,90007,  0,90007,  0,90007,1533],
    [90007,367,90007,1539, 81,667,1541,  0,369,1534,337,90007,90007],
    [90007,  0,90007,335,90007,90007,337,90007,90007,335,90007,90007,367],
    [  0,351,90007,90007, 87, 21,90007,  0,1538,  0,367,1536,  0],
    [1535,  0,335,  0, 81,1541,  0,351,90007,383,1538,90007,383],
    [350,90007,90007,1538, 22,90007,335,  0,90007,90007,335,  0,90007],
    [382,90007,  0,351, 81,367,1537,90007,666,90007,90007,383,  0],
    [1539,  0,335,90007,351,  0, 81,  0,1541,666,1538,  0,90007],
    [90007,666,1535,90007,90007,90007,335,1534,90007,1537,90007,351,1538],
    [666,90007,382,  0,1537,351,  0,90007,367,  0,367,90007,335],
    [ 22,1539,  0,90007,  0,90007, 81,90007, 21,90007,1536,351,  0],
    [90007,90007,351,1535,335,1541, 88,  0,1534,335,  0,90007,90007],
    [1533,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,1533]
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