main.floors.MT482=
{
    "floorId": "MT482",
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
        "6,0": {
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
    [90007,397,365,349,1488,90007, 88,90007,90007, 21,1476, 22,90007],
    [402, 83,90007,90007, 82,90007,399,90007,334,90007, 81, 81,386],
    [ 82, 29,  0, 27,1476, 83,  0, 82,1477, 81,  0, 27,1479],
    [  0,262,90007, 81,90007,90007,  0,90007,350,90007,1483, 82,337],
    [ 28, 82,334,1483,383,1485,  0,1485,399,1485,352,1485,1478],
    [1446,399,90007,350,90007,90007,1479,90007,1486,335,1480,90007, 82],
    [  0, 81,351,90007,334,90007,383,90007,90007,1485,90007,90007,387],
    [  0,1486,  0,335,1477, 81,400,90007,1485,90007,356, 82,371],
    [  0,90007,90007,  0,367,90007,367,  0,  0,1446,  0, 82,1446],
    [  0,1480,352,90007,1478,  0,1476,90007,1485,  0,372, 81, 81],
    [  0,90007,90007,369,337,90007, 81,90007,  0,90007,1485,  0,1485],
    [1488,90007,401,1479,90007,400, 82,335,1477,367,  0,1486,352],
    [666,90007,90007,401,90007,402,400,90007,351,90007,1485,402, 87]
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