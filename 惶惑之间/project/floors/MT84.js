main.floors.MT84=
{
    "floorId": "MT84",
    "title": "塔C 3 层",
    "name": "塔C 3 层",
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
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:lan6",
                "value": "1"
            }
        ],
        "4,6": [
            {
                "type": "setValue",
                "name": "flag:huang6",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "3,1": {
            "0": {
                "condition": "flags.hong5",
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
        "11,6": {
            "0": {
                "condition": "flags.hong6",
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
    [10026,  0,  0,511,  0,  0,  1, 34,  1, 32, 32, 32,10024],
    [10026,224,  1,  1,  1,225,  1,224,  1,  1,  1, 81,10024],
    [10026,  0,  0,523,  0,  0, 81,  0,  1, 21,  0,225,10024],
    [10026,500,  1,  1,  1,  1,  1,  0,  1,  0,499,  0,10024],
    [10026, 34,  1, 32,  0, 32,  1,  0,  1,224,  0,501,10024],
    [10026,  1,  1,  0,510,  0,  1,225,  1, 82,  1,511,10024],
    [10026,509,  1, 21,  0, 21,  1,  0,  1, 32,  0, 21,10024],
    [10026, 21,  1,  1,522,  1,  1,  0,  1,  0,226,  0,10024],
    [10026,  0,226,  0,  0,  0,224,  0,  1,  1, 81,  1,10024],
    [10026,  1,  1,  1,  1, 81,  1,  0,  1,  0,  0,  0,10024],
    [10026, 88,  0,225,  0,  0,  1,  0, 81,225,  0, 87,10024],
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