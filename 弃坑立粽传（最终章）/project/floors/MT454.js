main.floors.MT454=
{
    "floorId": "MT454",
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
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,4": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT454_6_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_MT454_6_6==1",
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
    [90007,90007,90007,400,90007,90007,  0,90007,337,399,369,1435, 33],
    [90007,90007, 23,262,90007,90007,385,90007, 21, 82,90007, 81,90007],
    [90007,90007,90007,367,336,90007, 82,1442,90007, 21,353,1432, 34],
    [90007,90007,90007,1429,1439, 81,354,90007,90007, 82,90007, 81,90007],
    [90007,90007, 81,351, 82, 82, 87,338,90007, 81, 81,382,334],
    [90007,  0,351,1425,  0,1425,1431, 33, 83,90007, 32,90007,1436],
    [90007, 81,90007,90007,  0, 81, 85,90007,  0, 28,90007,90007,334],
    [ 27,1426, 31,90007,1433, 21,1432, 81,  0,1442,355,1441,350],
    [90007,90007,1441, 22,1440, 81,353,90007,1433,90007,  0,338, 81],
    [351,1436, 31,90007,1438,90007,1430,  0, 32, 81, 81,1431, 21],
    [90007, 28,  0,1426,  0,334,  0,350,90007,90007, 29, 81,90007],
    [90007, 81,90007,90007,1440,90007,262,90007, 27, 28,90007, 81,90007],
    [372,1429, 21,90007, 21, 82, 88, 81,1428, 82,336,1439,352]
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