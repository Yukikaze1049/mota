main.floors.MT455=
{
    "floorId": "MT455",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
    "bgm": "universe.mp3",
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
        "3,12": [
            {
                "type": "openShop",
                "id": "454Fshop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "6,4": {
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
    [401,  0,90007,352,  0,90007,  0,337,90007,369,90007,90007, 21],
    [90007,262,90007,  0,336,90007,353,  0,90007,337, 82,90007,351],
    [355, 21,90007,1429,90007,90007,90007,1427,  0,1438,  0,1439,335],
    [90007,1435,90007,  0,1442,  0,90007, 34,90007,90007,1283,90007,367],
    [338, 21,1432,335,90007, 21, 88,1438,  0,90007,  0,90007,90007],
    [90007,90007,90007,  0,90007,  0, 21,90007,1426, 31,1440,90007,400],
    [  0,  0,1433,410,1430,370,  0, 81,382,90007, 27,90007, 83],
    [ 22,90007,90007,90007,  0,90007, 81,90007,90007,90007, 82,90007, 29],
    [ 33,90007,334,1425, 34,1425,350,1441, 28,1436,  0,1434,  0],
    [ 81,90007,90007, 81,90007,90007, 81,90007, 81,90007, 81, 22,1428],
    [ 81,90007,1425,  0,1425,90007,1283,90007,1283,90007,1283,90007, 28],
    [ 81,90007, 21,1430, 21,90007,335,90007, 21,90007,351,90007,1431],
    [ 22,90007,  7,131,  8,90007,350,90007, 21,90007,334,90007, 87]
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