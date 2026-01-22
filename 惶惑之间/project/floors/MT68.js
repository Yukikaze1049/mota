main.floors.MT68=
{
    "floorId": "MT68",
    "title": "塔A 7 层",
    "name": "塔A 7 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:lan13",
                "value": "1"
            }
        ],
        "11,1": [
            {
                "type": "setValue",
                "name": "flag:hong13",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "5,9": {
            "0": {
                "condition": "flags.huang13",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "1,6": {
            "0": {
                "condition": "flags.huang14",
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
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 88,  0,  0,226,  0, 81,  0,  0, 82,  0,507,10024],
    [10026,  1,  1,  1,  1,  0,  1,  0,523,  1, 23,  0,10024],
    [10026,  0,500,  0,  1, 31,  1,  1, 81,  1, 81,  1,10024],
    [10026, 32,  0,222, 81,  0,  1,  0,522,  1,522,  0,10024],
    [10026,  0, 21,  0,  1,  0,  1, 32,  0, 81,  0, 32,10024],
    [10026,513,  1,  1,  1,522,  1,  1,  1,  1,  1,  1,10024],
    [10026,  0, 21,  0,  1,  0,  1,  0, 21, 21, 21,509,10024],
    [10026, 32,  0,523, 81,  0,  1,227,  1,  1,  1,  1,10024],
    [10026,  0,499,  0,  1,513,  1,  0,  1,  0, 21,  0,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0, 81,524,  0, 34,10024],
    [10026, 87,  0,  0,226,  0,356,  0,  1,  0,501,  0,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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