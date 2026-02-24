main.floors.MT541=
{
    "floorId": "MT541",
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
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
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
    [1533,90007,337,  0,1539,  0, 87,  0,1539,  0,337,90007,1533],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [338,90007,369,90007,337,90007,  0,354,90007, 21,90007,  0,335],
    [1541, 81,1536, 21,1535,  0,1539,90007,90007,1534,90007,351,  0],
    [354,90007,90007,90007,351,90007,  0,338,90007,  0,90007,1539,90007],
    [90007,668,1534,335,  0,90007,90007, 81,90007,668,1537,  0,353],
    [669,90007,90007, 81,90007,383,  0,1538,  0,1536,90007,669,  0],
    [367,90007,351,  0,90007, 81,90007,90007,90007,  0,90007,1537,90007],
    [351,1535,  0,1539,383,  0,90007,351,1538,  0,90007,  0,  0],
    [351,90007,335,90007,90007,351,1537,  0,367,90007,351,  0,367],
    [90007,90007,90007,  0,367,  0,90007,335,  0,  0,1538,90007,90007],
    [90007,  0,351,1534,90007,1541,  0,90007,1536,90007,383,  0,90007],
    [1533,90007,  0,383,90007,335, 88,90007, 21,369,90007,90007,1533]
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