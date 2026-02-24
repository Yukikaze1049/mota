main.floors.MT459=
{
    "floorId": "MT459",
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
    "events": {},
    "changeFloor": {
        "12,12": {
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
    [ 33,90007, 33,90007, 33,90007, 87,90007, 33,90007,345, 21,345],
    [354,90007,338,90007, 21,90007,1311,90007, 21,90007,399,393,399],
    [411,90007,411,90007,383,1443, 33,1443,383,90007,393, 33,393],
    [1432,90007,1444,90007,90007,90007, 33,90007,90007,90007,90007,262, 83],
    [ 32,1429,367,383,367,1429,384,1442,384,368,1310,385,369],
    [ 81,90007,90007,90007, 82,90007,90007,90007, 82,90007,90007,90007, 82],
    [334,90007,1443,90007,368,1427, 21, 22, 82,90007, 21,90007, 82],
    [ 32,1430,  0,1436,336,90007,90007,90007, 21,90007,1431,90007, 82],
    [90007,90007,1443,90007,  0,  0,  0,  0,  0,  0,1433,1436,383],
    [337,1429,  0,1436,1433,90007, 81,90007,90007,90007,90007,  0,90007],
    [90007,90007,1443,90007,  0,90007,1311, 22,90007,1440,  0,1436,367],
    [353,1429,  0,1436,  0,90007,90007, 81,90007, 27,90007, 32,90007],
    [90007,90007,1443,90007,352,90007,400,1435,90007, 28,90007,339, 88]
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