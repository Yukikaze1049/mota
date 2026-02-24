main.floors.MT457=
{
    "floorId": "MT457",
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
        "0,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,5": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "12,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT457_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT457_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT457_6_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_MT457_6_4==3",
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
    [  0,90007, 21,90007, 31, 32, 81,90007,334,90007,90007,90007,1283],
    [394,90007,1435,345,90007,90007, 32, 81,1431,  0, 27,90007,1283],
    [1434,90007, 81,90007,90007,90007,90007,90007,  0,1438,  0, 81,1283],
    [ 83,90007,352,90007, 21,90007,350,1283,  0, 81, 29,90007,90007],
    [  0,336,1427,  0,1444,385, 85, 21,  0,90007,1443,  0,1443],
    [90007, 81, 33,90007,  0,90007, 87,90007,  0,1430,367,1430,351],
    [90007,1311, 82,90007,1433,  0,1429,  0,1433,90007,1443, 32,1443],
    [338,338, 82,90007,90007, 82,90007,90007, 81,90007,90007,  0,90007],
    [90007,90007,383,90007,1427, 28, 81,  0,334,90007, 32,1436,90007],
    [366,90007,1442,1425, 27,1425, 21,90007,1432,  0,90007,  0,90007],
    [334,1431,  0,90007,1440,90007,1439, 81,350,1436, 21,1427,90007],
    [90007,90007, 27,90007,  0,1436,  0,90007,1430,90007,1427, 33,90007],
    [ 88, 34,1426, 29,1441,90007,334, 81,335,90007,90007,90007,400]
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