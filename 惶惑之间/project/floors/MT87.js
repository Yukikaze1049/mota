main.floors.MT87=
{
    "floorId": "MT87",
    "title": "塔C 6 层",
    "name": "塔C 6 层",
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
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "4,4": [
            {
                "type": "setValue",
                "name": "flag:huang12",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:lan12",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "6,11": {
            "0": {
                "condition": "flags.hong12",
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
        "7,11": {
            "0": {
                "condition": "flags.hong11",
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
    [10026,499, 21,  0,523, 81,  0,  0, 81,522,  0, 21,10024],
    [10026, 32, 21, 21,  0,  1,  0,  0,  1,  0, 31,  0,10024],
    [10026,  1,  1,  1,  1,  1,226,226,  1,  1,  1, 81,10024],
    [10026,  0, 32, 32,510,  1,  0,  0,  1, 21,523,  0,10024],
    [10026,524,  1, 82,  1,  1,  1, 81,  1, 21,  1,  1,10024],
    [10026,  0,  1, 32, 32,  0,  1,  0,  1,509,  1, 88,10024],
    [10026, 81,  1,  1,  1,222,  1,  0,  1,  1,  1,  0,10024],
    [10026,  0,522,  0,  0,  0, 81,  0,  0,  0,522,  0,10024],
    [10026,  0,  1,  1,  1,  1,  1,  1, 81,  1,  1,  1,10024],
    [10026,  0,  1,500,  0,501,  1,  1,  0,  1, 22,  0,10024],
    [10026, 87,  1,  0, 34,  0,511,511,  0,523,  0, 32,10024],
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