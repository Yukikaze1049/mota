main.floors.MT458=
{
    "floorId": "MT458",
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
        "6,5": {
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
    [  0, 34,90007,383,1432, 31,90007, 31,1432,370, 21,90007, 47],
    [ 23,90007,335,  0,90007, 27,1283, 27,90007,370, 21,90007, 83],
    [90007, 23,1438,90007,351,1443,  0,1443,351,90007, 22,90007, 82],
    [400,1438,90007,335,367,90007, 86,90007,367,335,90007,90007, 81],
    [90007,336, 32,1443,90007, 21,  0, 34,90007,1443,385,90007,338],
    [ 33,90007,1429,  0, 86,  0, 88,  0, 23,  0,1442, 81,1430],
    [ 82,352, 32,1443,90007, 34,  0, 21,90007,1443,336,90007,354],
    [90007, 81,90007,351,367,90007, 86,90007,1444,352,  0,90007, 81],
    [351,1427,335,90007,335,1443,  0,1443,  0, 81,1436, 21, 81],
    [90007, 81,90007,338,90007,367,1433,  0,1439,350,90007, 81,90007],
    [  0,1435,370, 33,90007, 32,  0,90007,334,90007, 21,1439, 22],
    [1311,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [388,90007, 22, 81, 81, 81,  0,1431,367,1430, 81, 83, 87]
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