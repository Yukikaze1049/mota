main.floors.MT89=
{
    "floorId": "MT89",
    "title": "塔C 8 层",
    "name": "塔C 8 层",
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
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:lan16",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:huang16",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "4,5": {
            "0": {
                "condition": "flags.hong15",
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
        "2,11": {
            "0": {
                "condition": "flags.hong16",
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
    [10026, 21,  0,222, 81,  0, 87,  0,  1, 21, 34, 21,10024],
    [10026,509, 32,  0,  1,  0,  0,  0,  1,510,  0,499,10024],
    [10026,  1,  1, 82,  1,  1,523,  1,  1,  1, 81,  1,10024],
    [10026, 32, 32,  0,  1,  0,  0,  0, 81,227,  0, 32,10024],
    [10026, 21, 21,  0,511,  0,  1,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  0,522,  0,226,  0,  0, 88,10024],
    [10026, 32,  1, 21,  1, 81,  1,  1,  1,  1,  1,  1,10024],
    [10026,501,  1, 21,  1,  0,  0,  0,522,  0, 21, 31,10024],
    [10026,500,  1,226,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026, 21,  1,  0, 81,  0,222,  0,  1,  0, 21, 34,10024],
    [10026,  0,511,  0,  1, 32,  0,  0, 81,524,  0, 21,10024],
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