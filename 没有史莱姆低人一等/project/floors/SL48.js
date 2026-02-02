main.floors.SL48=
{
    "floorId": "SL48",
    "title": "魔塔 48 层",
    "name": "魔塔48",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "jindi.mp3",
    "firstArrive": null,
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_2_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_SL48_6_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,4": {
            "0": {
                "condition": "flag:door_SL48_2_4==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_2_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "10,4": {
            "0": {
                "condition": "flag:door_SL48_10_4==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_10_4",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,6": {
            "0": {
                "condition": "flag:door_SL48_2_6==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_2_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,9": {
            "0": {
                "condition": "flag:door_SL48_10_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_10_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,6": {
            "0": {
                "condition": "flag:door_SL48_2_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_2_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "2,9": {
            "0": {
                "condition": "flag:door_SL48_6_6==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_6_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,9": {
            "0": {
                "condition": "flag:door_SL48_6_3==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_6_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "6,6": {
            "0": {
                "condition": "flag:door_SL48_10_6==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_10_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "6,3": {
            "0": {
                "condition": "flag:door_SL48_6_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL48_6_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,444,  0,448,  1,  1, 87,  1,  1, 21,  0, 21,  1],
    [  1,  0, 23,  0, 82, 82,393, 82, 82,  0,449,  0,  1],
    [  1,446,  0,447,  1,  1, 85,  1,  1, 22,  0, 22,  1],
    [  1,  1, 85,  1,  1,1295,  0,1295,  1,  1, 85,  1,  1],
    [  1,1295,383,1295,  1,  0,388,  0,  1,1294,383,1294,  1],
    [  1,  1, 85,  1,  1,  1, 85,  1,  1,  1, 85,  1,  1],
    [  1,1293,  0,1293,  1,1294,  0,1294,  1,1291,  0,1291,  1],
    [  1,  0,384,  0,  1,  0,387,  0,  1,  0,384,  0,  1],
    [  1,  1, 85,  1,  1,  1, 85,  1,  1,  1, 85,  1,  1],
    [  1,1289,  0,1289,  1,1290,  0,1290,  1,1285,  0,1285,  1],
    [  1,  0,447,  0, 81,  0, 88,  0, 81,  0,447,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        11
    ]
}