main.floors.MT81=
{
    "floorId": "MT81",
    "title": "登天之巅（左二）",
    "name": "登天之巅（左二）",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 100,
    "defaultGround": "ground",
    "bgm": "battle4.mp3",
    "firstArrive": null,
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,8": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    7
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "3,0": {
            "floorId": "MT80",
            "loc": [
                3,
                12
            ],
            "time": 0
        },
        "0,9": {
            "floorId": "MT82",
            "loc": [
                12,
                9
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "9,8": [
            {
                "type": "addValue",
                "name": "flag:door_MT81_10_7",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "addValue",
                "name": "flag:door_MT81_10_7",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,7": {
            "0": {
                "condition": "flag:door_MT81_10_7==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "if",
                        "condition": "flag:door_MT81_10_7==2",
                        "true": [
                            {
                                "type": "openDoor"
                            }
                        ],
                        "false": [
                            {
                                "type": "revisit"
                            }
                        ]
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [337,369,140006, 91,140006,140006,140006,383,140006,140006,140006,140006,140006],
    [653,353,140006, 33,647, 27,  0,652, 33,  0,650,386,140006],
    [ 81,140006,140006, 83,140006,140006, 82,140006, 81,140006,  0,140006,140006],
    [ 33, 21,  0,641, 27,611,  0,140006, 33,  0, 33,641, 34],
    [140006, 82,140006, 30,140006,  0,140006,140006,  0,140006,  0, 30,140006],
    [383,651,140006,140006,140006,617, 33, 21,652,140006, 33,140006,335],
    [140006,370,338,354,140006,  0,611,140006, 27,140006,  0, 81,657],
    [140006,659,399, 33, 82,  0,140006,140006,383,140006,  0,140006,351],
    [140006, 81, 82,140006,140006,  0,383,140006,140006,650,  0,650,140006],
    [ 92,366, 33,334,140006,  0,140006,140006, 22,140006,664,140006,400],
    [140006, 33,350,657, 81,  0,  0, 81,140006,386,140006,387, 22],
    [140006,140006,140006, 82,140006,140006,612,385, 21,656,399,654,140006],
    [140006,140006, 21, 21, 21,140006,140006,140006,140006,140006,140006,140006,140006]
],
    "bgmap": [

],
    "fgmap": [

]
}