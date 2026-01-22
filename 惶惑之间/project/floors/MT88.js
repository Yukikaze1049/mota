main.floors.MT88=
{
    "floorId": "MT88",
    "title": "塔C 7 层",
    "name": "塔C 7 层",
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
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:huang14",
                "value": "1"
            }
        ],
        "2,4": [
            {
                "type": "setValue",
                "name": "flag:lan14",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "3,7": {
            "0": {
                "condition": "flags.hong14",
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
        "11,1": {
            "0": {
                "condition": "flags.hong13",
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
    [10026, 32,  0,  0,523,  0,  0,522,  0,  0, 81,511,10024],
    [10026,  1, 81,  1,  1,  1,  1,  1,  1,  0,  1,  0,10024],
    [10026, 21,  0, 21,  1,499,  0,500,  1,226,  1,501,10024],
    [10026,  0,509,  0,  1,  0,227,  0,  1,  0,  1, 33,10024],
    [10026,  1,  1,  1,  1,  1, 81,  1,  1,  0,  1,  1,10024],
    [10026,510,  0,  1,  0, 21,  0,  0,522,  0,  0, 87,10024],
    [10026,  0,222,511,  0,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026, 32,  0,  1,  0, 81,  0,  1,  0,  0,222,  0,10024],
    [10026,  1,  1,  1,226,  1,522,  1,523,  1,  1,  0,10024],
    [10026,  0,  0,  1,  0,  1,  0,  1,  0,  1,  1, 23,10024],
    [10026, 88,  0, 81,  0,  1, 31, 81,  0,524,  0,  0,10024],
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