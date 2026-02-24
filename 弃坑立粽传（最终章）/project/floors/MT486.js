main.floors.MT486=
{
    "floorId": "MT486",
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
        "12,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "2,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT486_3_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT486_3_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT486_3_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,11": {
            "0": {
                "condition": "flag:door_MT486_3_11==3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [ 50,90007,371,399,371,90007,351,90007,90007,335,90007,90007, 88],
    [  0,90007,399,430,399, 82,1478,  0,382,1478,334,1485,386],
    [  0,90007,339,1488,339,90007,90007, 81,90007,90007,  0,350,90007],
    [1446,90007,90007, 81,90007,90007,1489, 21,1489,  0,90007,1478,335],
    [  0, 81,351,  0,335, 81,  0,1479,90007,385,90007,351,90007],
    [90007, 81,90007,90007,1479,385,1490,  0,90007,90007,90007,1479,336],
    [399,369,399,90007,  0,90007,  0,1478,90007,400,90007,352,90007],
    [353,399,337,1491,351,90007,90007,  0, 82,338,90007,1480,337],
    [90007,90007,90007,90007,90007,351,1480,382,1491,354,90007,353,90007],
    [90007,90007, 81,400,1478,  0,90007,1479,90007,386,90007,1446,338],
    [90007,90007,1489,90007,90007,367,  0, 21,90007,90007,90007,354,90007],
    [400,90007, 87, 85,335,399,90007, 81,90007,90007,90007,1488,402],
    [ 33, 81,1489,402,90007,90007,1446,1446,1446,90007,90007,402,90007]
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