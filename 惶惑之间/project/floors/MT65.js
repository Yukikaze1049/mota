main.floors.MT65=
{
    "floorId": "MT65",
    "title": "塔A 4 层",
    "name": "塔A 4 层",
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
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:lan7",
                "value": "1"
            }
        ],
        "3,11": [
            {
                "type": "setValue",
                "name": "flag:hong7",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,9": {
            "0": {
                "condition": "flags.huang7",
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
        "8,5": {
            "0": {
                "condition": "flags.huang8",
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
    [10026,226,  0, 81, 21, 32,  1,499, 21, 81,225,  0,10024],
    [10026,  0,522,  1,356, 21,  1, 21,500,  1,  0,224,10024],
    [10026, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  0,  0,225,  0,  0,226,  0,  0,225,  0,  0,10024],
    [10026,  1,  1,  1,  1, 81,  1,  1,513,  1,  1,  1,10024],
    [10026,  0, 81,  0,224,  0,509,  1,  0, 81,  0, 88,10024],
    [10026,222,  1,  0,  1,  1,  1,  1,225,  1,  0,  0,10024],
    [10026,  0,  1,  0,224,  0,  0,  0,  0,  1, 31,  0,10024],
    [10026, 81,  1,  1,  1,  1, 82,  1,  1,  1,  1,513,10024],
    [10026,  0, 21, 21,  1,  0,  0,  0,  1,  1,501,  0,10024],
    [10026, 21, 21,507,  1,  0, 87,  0, 81, 81,  0, 32,10024],
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