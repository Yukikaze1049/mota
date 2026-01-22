main.floors.MT67=
{
    "floorId": "MT67",
    "title": "塔A 6 层",
    "name": "塔A 6 层",
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,11": [
            {
                "type": "setValue",
                "name": "flag:hong11",
                "value": "1"
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:lan11",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "5,8": {
            "0": {
                "condition": "flags.huang11",
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
        "4,4": {
            "0": {
                "condition": "flags.huang12",
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
    [10026, 87,  0,  0, 82,  0, 88,  0, 81,  0,  0,226,10024],
    [10026,  0,  0, 21,  1, 21,  0,  0,  1,  0,226,509,10024],
    [10026, 81,  1,  1,  1,  1, 81,  1,  1, 81,  1,  1,10024],
    [10026,522,  0,  0,513,  0,522,  0,  1,  0,  1, 34,10024],
    [10026,  0,  0, 31,  1, 21,  0,  0,  1,  0,  1,  0,10024],
    [10026, 81,  1,  1,  1,  1,  1, 81,  1,522,  1,227,10024],
    [10026,  0,  0,226,  0,  0,  0,  0,  1,  0,  0,  0,10024],
    [10026, 81,  1,  1,  1,513,  1,222,  1,356,  0,  0,10024],
    [10026,222,  0,  1,  0,523,  1, 21,  1,  1,  1, 81,10024],
    [10026,  0,501,  1,499,  0,  1, 21,  1, 21,  0,523,10024],
    [10026, 21, 31,  1, 31, 21,  1,507,  1, 32,500,  0,10024],
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