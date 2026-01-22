main.floors.MT69=
{
    "floorId": "MT69",
    "title": "塔A 8 层",
    "name": "塔A 8 层",
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "8,6": [
            {
                "type": "setValue",
                "name": "flag:lan15",
                "value": "1"
            }
        ],
        "4,5": [
            {
                "type": "setValue",
                "name": "flag:hong15",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "9,11": {
            "0": {
                "condition": "flags.huang15",
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
        "9,2": {
            "0": {
                "condition": "flags.huang16",
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
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 32,227,  0,  0, 81,524,  0, 34,  1,  0, 87,10024],
    [10026,499,  1,  1,523,  1,  0,500,  0,513,  0,  0,10024],
    [10026, 32,227,  0,  0,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  1,  1, 81,  1,  1,  0, 21,  0,226,  0,  0,10024],
    [10026,  0, 21,  0,507,  1,523,  1,  1,  1,  1, 81,10024],
    [10026,226,  0, 21,  0,  1,  0,  1,509, 32, 32,522,10024],
    [10026, 81,  1,  1,  1,  1,522,  1,  1,  1,  1, 82,10024],
    [10026,  0,  0,522,  0,  1,  0, 21,  0,226,  0,  0,10024],
    [10026,  1,  1,  1,  0,  1, 81,  1,  1,  1,  1, 81,10024],
    [10026,  0, 21,  1,  0,  1,  0,501,356,  1, 32,  0,10024],
    [10026, 88,  0,226,  0, 81,222,  0,  0,513,  0, 21,10024],
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