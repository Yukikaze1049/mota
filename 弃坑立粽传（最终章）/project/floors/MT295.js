main.floors.MT295=
{
    "floorId": "MT295",
    "title": "永生之巅第三层",
    "name": "永生之巅第三层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "004-CloudySky01.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "ground",
    "bgm": "battle18.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,1": [
            {
                "type": "openShop",
                "id": "296Fshop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT295_7_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "7,3": {
            "0": {
                "condition": "flag:door_MT295_7_3==6",
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
    [240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006],
    [240006, 22,240006, 21,240006,335, 88,240006,240006,  7,131,  8,240006],
    [240006,1050,240006,1050,240006,1050,240006,240006,240006,400,1056,400,240006],
    [240006,351,  0,335,1049,  0,  0, 85,399,240006, 81,240006,240006],
    [240006,1050,240006,1050,240006,1050,240006,1048,240006, 34,384, 34,240006],
    [240006, 33,240006, 23,240006,351,240006, 83,240006,240006,1051,240006,240006],
    [240006,240006,240006,240006,240006,240006,  0,  0,1052,367,  0, 34,240006],
    [240006,367,  0,367,  0, 22,1049,240006,384,240006, 81,240006,240006],
    [240006,  0,1051,  0,240006, 82,240006,240006,240006, 21,1052, 21,240006],
    [240006,367,  0,367,240006,353,1047, 21,1051,240006, 21,240006,240006],
    [240006,1056,240006,1056,240006, 33,240006,240006, 81,240006, 81,240006,240006],
    [240006, 87, 82,386, 82,337,240006,355,399,339,1057,240006,240006],
    [240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006,240006]
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