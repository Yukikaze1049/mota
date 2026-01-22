main.floors.MT64=
{
    "floorId": "MT64",
    "title": "塔A 3 层",
    "name": "塔A 3 层",
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
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "3,1": [
            {
                "type": "setValue",
                "name": "flag:hong5",
                "value": "1"
            }
        ],
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:lan5",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,8": {
            "0": {
                "condition": "flags.huang5",
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
        "4,6": {
            "0": {
                "condition": "flags.huang6",
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
    [10026, 88,  1,507,  1,  0,  0,  0,522,  0,225,501,10024],
    [10026,  0,  1, 31,  1,523,  1, 82,  1,  0,  0,225,10024],
    [10026,  0,  1,  0,  1,  0,  0,509,  1, 31,  0,  0,10024],
    [10026,224,  1,522,  1,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  0,  0,  0,  0, 81,  0,225,  0,  1,  0,  0,10024],
    [10026,  1,  1,  1,513,  1,  0,  1,  0, 81,  0, 87,10024],
    [10026, 21,  0,225,  0,  1,224,  0,224,  1,  0,  0,10024],
    [10026, 21,  0,  0,225,  1,  1, 81,  1,  1,  1,513,10024],
    [10026,  1,222,  1,  1,  1,  0,226,  0,  1,  0,  0,10024],
    [10026,  0,  0,  0,  0,  1, 21,  0, 21,  1, 21, 21,10024],
    [10026, 22, 32,500, 32,  1, 32,499, 32,  1,356,356,10024],
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