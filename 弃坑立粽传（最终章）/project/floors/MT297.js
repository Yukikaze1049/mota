main.floors.MT297=
{
    "floorId": "MT297",
    "title": "永生之巅第五层",
    "name": "永生之巅第五层",
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
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,9": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT297_11_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,7": {
            "0": {
                "condition": "flag:door_MT297_11_7==8",
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
    [240006,240006,400,1054,400,240006, 88,240006,1057,  0,  0,1057,240006],
    [240006,352,240006,1046,240006,240006,385,240006,  0,1051,1051,  0,240006],
    [240006, 21,1056,368, 33,368,1049,240006,  0,1051,1051,  0,240006],
    [240006,336,240006,351, 21,335,240006,240006,1057,  0,  0,1057,240006],
    [240006, 81,240006,240006,240006,1057,240006,384,240006, 81,240006,240006,240006],
    [240006, 34,367, 21,1046,400,  0,1056,  0, 34,1058, 22,240006],
    [240006,240006,1056,240006,387,240006,387,240006,1051,  0,240006, 85,240006],
    [240006,1046,334,  0,240006,240006,1047,240006,240006,1058,240006,400,240006],
    [240006,385,240006,350,  0,240006, 87,240006, 33, 21,240006,412,240006],
    [240006,240006,240006, 81,240006,240006,240006,240006,240006, 81,240006,240006,240006],
    [240006, 21,399,1058,399, 21,240006,337,353,1057,337,353,240006],
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