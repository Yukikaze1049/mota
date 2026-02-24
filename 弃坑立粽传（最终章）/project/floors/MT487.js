main.floors.MT487=
{
    "floorId": "MT487",
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
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 250000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "2,11": {
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
    [376,90007,90007,348,90007,361,90007,365,349,1487,349,365,90007],
    [392,1488,364,1487,90007,1481,  0,90007,90007, 82,90007,90007,402],
    [90007,90007,90007,383,90007,  0,402,1488,371,  0,339,90007,1481],
    [384,  0,1446,1490, 81, 21,90007,347,90007,1491,  0,1480, 21],
    [90007,90007,90007, 21,90007, 81,90007,90007,1484,355,90007, 81,90007],
    [384,  0,1446,  0,90007, 81, 21,1491,402,90007,1446,  0,1446],
    [90007,90007,  0,90007,90007,367,90007,  0,90007,90007,336,1446,352],
    [367,383,1480,90007,335,1490,351,1480,383,90007,  0,402,  0],
    [90007,90007, 81,90007,90007, 22, 81,90007,90007,90007,1491,90007, 81],
    [402,369,353,337,90007,1479,90007,430,385,1489,  0,1489,401],
    [90007,90007,1491,90007,1489, 21,1489,90007,90007,90007, 81,90007,90007],
    [402, 82, 88,1478,382,1446,  0,1480,370, 82,1488,393,377],
    [400,90007,90007,90007,1489, 21,1489,386,399, 83,393,377, 87]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "universe2.mp3"
}