main.floors.MT85=
{
    "floorId": "MT85",
    "title": "塔C 4 层",
    "name": "塔C 4 层",
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
        "11,11": {
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
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:huang8",
                "value": "1"
            }
        ],
        "2,5": [
            {
                "type": "setValue",
                "name": "flag:lan8",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "1,9": {
            "0": {
                "condition": "flags.hong8",
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
        "3,11": {
            "0": {
                "condition": "flags.hong7",
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
    [10026, 87,  0,  0,225,  0,  1, 21, 32,  1, 31, 32,10024],
    [10026,  1, 81,  1,  1, 81,  1, 21, 21,  1,499,500,10024],
    [10026,  0,222,  0,  1,  0,224,  0, 21,  1,  0, 21,10024],
    [10026, 32,  0, 32,  1,  0,  1,  1,  1,  1,523,  1,10024],
    [10026,  0,509,  0,  1,  0,522,  0,510,  1,  0,  0,10024],
    [10026,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1, 81,10024],
    [10026, 33,  1,  0,  0,  0,  0,224,  0, 81,  0, 31,10024],
    [10026,501,  1,226,  1,  1,  1,  1,  1,  1, 31,  0,10024],
    [10026,511, 81,  0,  0,  1,  0,225,  0, 81,  0, 31,10024],
    [10026,  1,  1,  1, 21,  1,  0,  1,  1,  1,  1,  1,10024],
    [10026, 34, 22,511,  0, 81,  0,224,  0,  0,  0, 88,10024],
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