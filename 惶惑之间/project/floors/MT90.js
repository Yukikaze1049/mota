main.floors.MT90=
{
    "floorId": "MT90",
    "title": "塔C 9 层",
    "name": "塔C 9 层",
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
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "4,1": [
            {
                "type": "setValue",
                "name": "flag:huang18",
                "value": "1"
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:lan18",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "5,8": {
            "0": {
                "condition": "flags.hong17",
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
        "8,1": {
            "0": {
                "condition": "flags.hong18",
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
    [10026,  0, 21, 32,510,  1, 88,  0,511,501,  1, 87,10024],
    [10026,524,  0, 21, 32,  1,  0,  0,  1,  0, 83,  0,10024],
    [10026, 81,  1,  1,  1,  1, 81,  1,  1,227,  1,  1,10024],
    [10026,  0,  0,523,  0,  0,  0,222,  0,  0,  1, 34,10024],
    [10026,  1,  1,  1, 81,  1,  1,  1,  1,  1,  1,499,10024],
    [10026,  0, 21,  1,  0,  1,  0,  0, 81,  0,524,  0,10024],
    [10026,509,  0,222,  0,  1,227,227,  1,  0,  1,  1,10024],
    [10026,  0, 21,  1,  0,511,  0,  0,  1,  0, 81,  0,10024],
    [10026,  1,  1,  1,523,  1,  1, 81,  1,  1,  1,222,10024],
    [10026, 33,  0,  1,  0,  1,  0, 34,  1,500, 21,  0,10024],
    [10026,  0,524, 81,  0, 81,522,  0,  1, 32, 21,  0,10024],
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