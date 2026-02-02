main.floors.SL32=
{
    "floorId": "SL32",
    "title": "魔塔 32 层",
    "name": "魔塔32",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "BlackBlade.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_8",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_8_11",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL32_6_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_SL32_6_5==2",
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
                        "name": "flag:door_SL32_6_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,5": {
            "0": {
                "condition": "flag:door_SL32_8_5==2",
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
                        "name": "flag:door_SL32_8_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,8": {
            "0": {
                "condition": "flag:door_SL32_6_8==2",
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
                        "name": "flag:door_SL32_6_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,8": {
            "0": {
                "condition": "flag:door_SL32_8_8==2",
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
                        "name": "flag:door_SL32_8_8",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "8,11": {
            "0": {
                "condition": "flag:door_SL32_8_11==2",
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
                        "name": "flag:door_SL32_8_11",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "6,11": {
            "0": {
                "condition": "flag:door_SL32_6_11==2",
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
                        "name": "flag:door_SL32_6_11",
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
    [  1, 87,  0, 82,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  1,  1,  1,  0,896,  0,896,  0,  1,  1,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1,  0,446,  0,  1,  0,  1,  0,375,  0,  1],
    [  1,  0,  1,446,  0,446, 86,  0, 86,375,  0,375,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1,  0,  0,  0,  1,  0,  1,  0,376,  0,  1],
    [  1,  0,  1,  0,  0,  0, 86,  0, 86,376,  0,376,  1],
    [  1,  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1],
    [  1,  0,  1,  0, 21,  0,  1,  0,  1,  0,377,  0,  1],
    [  1, 88,  1, 21,  0, 21, 86,  0, 86,377,  0,377,  1],
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
        1,
        11
    ]
}