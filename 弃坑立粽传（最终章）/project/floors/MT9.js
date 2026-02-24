main.floors.MT9=
{
    "floorId": "MT9",
    "title": "主塔 5 层",
    "name": "5",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "5,8": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_6_7",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_6_7",
                "value": "1"
            }
        ],
        "8,5": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_7_6",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_7_6",
                "value": "1"
            }
        ],
        "7,4": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_6_5",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_6_5",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_5_6",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "addValue",
                "name": "flag:door_MT9_5_6",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,7": {
            "0": {
                "condition": "flag:door_MT9_6_7==2",
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
                "condition": "flag:door_MT9_7_6==2",
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
                "condition": "flag:door_MT9_6_5==2",
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
        "5,6": {
            "0": {
                "condition": "flag:door_MT9_5_6==2",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,164, 27, 28, 29,206, 31, 27, 28, 29,206,  1],
    [  1,162,  1,  1,  1,  1, 81,  1,  1,  1,  1, 31,  1],
    [  1, 27,  1,  1,335,222,  0,222,335,  1,  1,  0,  1],
    [  1, 28,  1,351,  1,435, 21,435,  1,351,  1, 21,  1],
    [  1, 29,  1,222,435,  1, 85,  1,435,222,  1,209,  1],
    [  1,206, 81,  0, 21, 85,385, 85, 21,  0, 81,435,  1],
    [  1, 31,  1,222,435,  1, 85,  1,435,222,  1, 31,  1],
    [  1, 27,  1,351,  1,435, 21,435,  1,351,  1, 31,  1],
    [  1, 28,  1,  1,335,222,  0,222,335,  1,  1, 31,  1],
    [  1, 29,  1,  1,  1,  1, 81,  1,  1,  1,  1,162,  1],
    [  1,206, 31,  0, 21,209,435, 31, 31, 31,164, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "firststep.mp3"
}