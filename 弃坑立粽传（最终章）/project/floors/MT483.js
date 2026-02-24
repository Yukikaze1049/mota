main.floors.MT483=
{
    "floorId": "MT483",
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
        "0,0": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT483_5_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT483_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT483_7_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT483_6_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "5,6": {
            "0": {
                "condition": "flag:door_MT483_5_6==1",
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
        },
        "6,5": {
            "0": {
                "condition": "flag:door_MT483_6_5==1",
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
        },
        "7,6": {
            "0": {
                "condition": "flag:door_MT483_7_6==1",
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
        },
        "6,7": {
            "0": {
                "condition": "flag:door_MT483_6_7==1",
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
    [ 87,1478,402,352,384,352,1480,400,400,1486,335,367,351],
    [1478,90007,90007,90007,90007,90007, 81,90007,90007,90007,90007,90007,1486],
    [402,90007,90007,90007,351,1485,  0,1485,351,90007,90007,90007,334],
    [352,90007,90007,90007,90007,367,1480,367,90007,90007,90007,90007,350],
    [384,90007,335,90007,90007,90007,367,90007,90007,90007,335,90007,1477],
    [352,90007,1485,367,90007,90007, 85,90007,90007,367,1485,90007, 29],
    [1480, 81,  0,1480,367, 85,386, 85,367,1480,  0, 81, 27],
    [400,90007,1485,367,90007,90007, 85,90007,90007,367,1485,90007,262],
    [400,90007,335,90007,90007,90007,367,90007,90007,90007,335,90007, 28],
    [1486,90007,90007,90007,90007,367,1480,367,90007,90007, 81,90007,1476],
    [335,90007,90007,90007,351,1485,  0,1485,351,90007,400,90007, 29],
    [367,90007,90007,90007,90007,90007, 81,90007,90007,90007, 81,90007,1483],
    [351,1486,334,350,1477, 29, 27,262, 28,1476, 29,1483, 88]
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