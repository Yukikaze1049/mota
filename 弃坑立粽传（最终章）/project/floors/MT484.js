main.floors.MT484=
{
    "floorId": "MT484",
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
        "0,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "5,7": {
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
    [ 88,90007,1480,383,90007,383,1480,90007,430,90007,1486,386,90007],
    [355,90007, 81,90007,90007,90007, 81,90007, 81,  0,401,90007,383],
    [371,90007,382,402,1478,  0,335,1486,90007,370,  0,1446,  0],
    [339,90007,90007, 81,90007,262,90007,400,90007,90007, 82,90007,1480],
    [1483,400,1476,350,1488,  0,1483,90007, 29,90007,  0,1446,366],
    [ 28,90007, 29,90007,393,90007, 29,  0,1476, 81,  0,90007,1477],
    [90007,90007,1477,90007,90007,356,90007, 28,  0,90007,1485,90007,  0],
    [ 21,1485,400,1485,400, 87,400,90007,1488,  0,  0,1486,350],
    [90007,  0,1446,90007,356,  0,356,90007,90007,  0,1485,334,  0],
    [352,1477,  0,90007,1485,  0,1485,90007,  0, 81,90007, 82,90007],
    [90007,400,90007,90007,90007,1479,90007,352,1446,90007,371,1488,371],
    [1486,384,1486,399,1486,  0,1478,  0,383,90007, 21,355, 21],
    [352,90007,384,90007,336,90007,90007,90007,  0,90007,371, 21,371]
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