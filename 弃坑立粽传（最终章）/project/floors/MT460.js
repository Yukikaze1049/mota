main.floors.MT460=
{
    "floorId": "MT460",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,12": {
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
    [90007,90007,90007, 82, 81,  0, 88,  0, 81, 82,90007,90007,90007],
    [ 23, 82, 82, 82,90007,90007,370,90007,90007, 82, 82, 82, 23],
    [90007,90007,90007,90007, 81, 81, 21, 81, 81,90007,90007,90007,90007],
    [370, 34,370, 34,370,1443,370,1443,370, 34,370, 34,370],
    [90007,90007,90007,90007, 81,90007, 21,90007, 81,90007,90007,90007,90007],
    [90007,384,1310, 21,351,1443,370,1443,351, 21,1310,384,90007],
    [90007,90007,90007,90007, 81,90007, 22,90007, 81,90007,90007,90007,90007],
    [90007,385,1311, 21,335,1443,370,1443,335, 21,1311,385,90007],
    [90007,90007,90007,90007, 81,90007, 22,90007, 81,90007,90007,90007,90007],
    [90007,386,1435, 21,383,1443,370,1443,383, 21,1435,386,90007],
    [90007,90007,90007,90007, 81,90007,  0,90007, 81,90007,90007,90007,90007],
    [90007, 22,1432, 34, 21,1443,1310,1443, 21, 34,1432, 22,90007],
    [90007,90007, 22,90007, 34, 81, 87, 81, 34,90007, 22,90007,90007]
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