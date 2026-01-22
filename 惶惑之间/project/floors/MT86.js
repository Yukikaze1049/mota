main.floors.MT86=
{
    "floorId": "MT86",
    "title": "塔C 5 层",
    "name": "塔C 5 层",
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
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:huang10",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:lan10",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "1,11": {
            "0": {
                "condition": "flags.hong9",
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
        "4,11": {
            "0": {
                "condition": "flags.hong10",
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
    [10026, 88,  0,  0,  0, 21, 32,  1,509, 32, 32,  0,10024],
    [10026,  1,  1,  1,225,  1,  1,  1,  1,  1,  1,523,10024],
    [10026,  0, 81,  0,  0,  0,  0,  0,225,  0,  0,  0,10024],
    [10026,225,  1,224,  1,  1,  1, 81,  1,  1,  1, 81,10024],
    [10026, 21,  1,  0,  1,  0,  0,  0,  1, 21,  0,  0,10024],
    [10026, 21,  1, 31,  1,522,  1,  1,  1, 32,  0, 87,10024],
    [10026, 21,  1,  0,  1,501, 32,510,  1, 21,  0,  0,10024],
    [10026,  1,  1,224,  1,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  0,  0,  0, 82,  0, 31,  0,  1,  0,  0,226,10024],
    [10026, 81,  1,  1,  1,499,  0,500,  1, 31,499,  0,10024],
    [10026,511,501, 34,511,  0, 31,  0,  1,500, 31,  0,10024],
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