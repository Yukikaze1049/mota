main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 14 层",
    "name": "14",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "5,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "4,3": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_4_4",
                "value": "1"
            }
        ],
        "5,3": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_4_4",
                "value": "1"
            }
        ],
        "6,3": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_4_4",
                "value": "1"
            }
        ],
        "6,5": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_5_7",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_5_7",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "addValue",
                "name": "flag:door_MT19_5_7",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "4,4": {
            "0": {
                "condition": "flag:door_MT19_4_4==3",
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
        "5,7": {
            "0": {
                "condition": "flag:door_MT19_5_7==3",
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
    [  1, 81,  0, 21,  0,  0,382,  0,421,366,  0,411,  1],
    [  1,  0,436,  1,  1,  1,  1,  1, 82,  1,  1,  0,  1],
    [  1, 30,  0, 81,408,408,408,  1, 82, 33,  1,236,  1],
    [  1, 86,  1,  1, 85,  1,  1,  1, 33,387,  1,335,  1],
    [  1,  0,383,  1, 21, 33,465,  1,387,232,  1,351,  1],
    [  1, 81,227,  1, 33,465,  1,  1, 82, 81,  1, 31,  1],
    [  1,  0,  0,  1,465, 85, 38,  1,300, 34, 81, 31,  1],
    [  1, 21,  1,  1,  1,  1,  1,  1,445,  0,  1,421,  1],
    [  1,  0, 81,455,411,385,411,  1,  0, 21,  1,  0,  1],
    [  1, 34,  1,  1,  1, 22, 34,474, 30,  1,  1,411,  1],
    [  1, 88,  0,366, 82, 87,  1,383,  1,385,459, 81,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "battle1.mp3"
}