main.floors.MT70=
{
    "floorId": "MT70",
    "title": "塔A 9 层",
    "name": "塔A 9 层",
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
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:hong17",
                "value": "1"
            }
        ],
        "10,11": [
            {
                "type": "setValue",
                "name": "flag:lan17",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flags.huang17",
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
        "4,1": {
            "0": {
                "condition": "flags.huang18",
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
    [10026, 32,500, 22,513,  0,227,  0, 81,  0,  0, 88,10024],
    [10026,  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,10024],
    [10026,  0,  0,522, 81,  0,  1,  0, 81,226,227,226,10024],
    [10026, 31,  0,  0,  1,522,  1,222,  1,  1,  1, 81,10024],
    [10026,  1, 81,  1,  1,  0,  1,  0,  1,501, 21,  0,10024],
    [10026,  0,523,  0,  1,  0,513,  0,  1, 34, 21,  0,10024],
    [10026, 21,  0,  0,  1,  1,  1,  0,  1,  1,  1,  1,10024],
    [10026,  1, 81,  1,  1,507,524,  0,226,  0,  0,356,10024],
    [10026,  0,524,  0,  1,  1, 83,  1,  1,  1, 81,  1,10024],
    [10026, 21,  0, 21,  1,  0,  0,  0,  1,  0,227,  0,10024],
    [10026, 32,499, 32,  1,  0, 87,  0,  1, 32,509, 32,10024],
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