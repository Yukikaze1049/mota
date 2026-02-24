main.floors.MT251=
{
    "floorId": "MT251",
    "title": "训练营七重",
    "name": "训练营七重",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 200000000,
    "defaultGround": "ground",
    "weather": [
        "rain",
        1
    ],
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,6": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "2,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT251_1_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT251_3_1",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT251_11_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT251_9_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "1,9": {
            "0": {
                "condition": "flag:door_MT251_1_9==1",
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
        "3,1": {
            "0": {
                "condition": "flag:door_MT251_3_1==1",
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
        "11,3": {
            "0": {
                "condition": "flag:door_MT251_11_3==1",
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
        "9,11": {
            "0": {
                "condition": "flag:door_MT251_9_11==1",
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
    [145,145,145,145,145,145,145,145,145,145,145,145,145],
    [145,337,353, 85, 21,968,411,977,352,145,337,353,145],
    [145, 34,978,145, 81,145, 81,145,  0, 81,977,369,145],
    [145,145, 81,972, 21,145, 33,145,336,968,145, 85,145],
    [145,  0, 34,  0,145,145, 81,145,145,384, 81,  0,145],
    [145,367,145,145,145, 33,  0, 33,145,145,145, 21,145],
    [145,  0, 82,399, 81,  0, 87,  0, 86, 21, 86,  0,145],
    [145, 21,145,145,145, 33,  0, 33,145,145,145, 33,145],
    [145,  0, 81, 47,145,145, 83,145,145,  0,337,978,145],
    [145, 85,145,972, 21,145, 23,145, 21,980, 81,145,145],
    [145,336,968, 81,371,145, 81,145, 81,145,979, 22,145],
    [145, 21,352,145, 33,387, 88, 81,399, 85,387, 33,145],
    [145,145,145,145,145,145,145,145,145,145,145,145,145]
],
    "bgmap": [
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302],
    [302,302,302,302,302,302,302,302,302,302,302,302,302]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "battle15.mp3"
}