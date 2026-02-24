main.floors.MT488=
{
    "floorId": "MT488",
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
        "12,12": {
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
    [90007,400,90007,  0, 82,379,90007,90007, 21,1446, 21, 21, 21],
    [402, 82,  0,383,90007,379,363,1487,90007, 82,90007,90007,90007],
    [90007,400,1446,90007,1489,90007,90007, 81,90007,388, 81, 21,430],
    [400, 81,  0,1481,378, 21,400,1481,  0,1487, 81,90007,90007],
    [90007,90007,353,  0,1489, 81,90007,90007,90007,  0,  0,383,  0],
    [1488, 23,90007,385, 82,  0, 81,384,  0,1446,367,  0,367],
    [ 81,90007,90007, 81,90007,1484,  0,90007,400,90007,90007,1480,90007],
    [1487, 81, 21,1480, 21,90007,385,90007,1446,354,90007,335,90007],
    [ 22,90007, 21, 22, 21,90007, 81,90007,90007,402, 82,1490,351],
    [ 22,90007,90007, 81,90007,1489,353,1489,90007,386,90007,366,90007],
    [90007, 21,352,1481,368,90007, 83,90007,90007,1487,  0,1479,334],
    [90007,90007, 81,90007,90007,90007,1488,90007,90007, 81,90007, 82,90007],
    [352,336,1491,400,90007,664, 87,664,90007,1488,400,664, 88]
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