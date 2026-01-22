main.floors.MT77=
{
    "floorId": "MT77",
    "title": "塔B 6 层",
    "name": "塔B 6 层",
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
    "afterBattle": {
        "2,7": [
            {
                "type": "setValue",
                "name": "flag:z4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z4==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    }
                ]
            }
        ],
        "2,9": [
            {
                "type": "setValue",
                "name": "flag:z4",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z4==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            3,
                            8
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:huang11",
                "value": "1"
            }
        ],
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:hong12",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,2": {
            "0": {
                "condition": "flags.lan11",
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
        "9,6": {
            "0": {
                "condition": "flags.lan12",
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
    [10026, 21, 32,  1,  0,  0, 87,  1,356,356,501,  0,10024],
    [10026,  0,500,  1, 81,  1,  1,  1,  1,  1,  1,512,10024],
    [10026,222,  0,  1,  0,  0,  0, 81,  0,226,  0,  0,10024],
    [10026, 81,  1,  1,  1,  1,522,  1,  0,  1,  1, 81,10024],
    [10026,  0,  0,226,  0, 21,  0,  1,  0,  1, 21,  0,10024],
    [10026, 81,  1,  1,  1,  1,  1,  1,  0,512,  0, 88,10024],
    [10026,  0,522,  1, 21,  0, 21,  1,  0,  1,  0,  0,10024],
    [10026, 31,  0, 85,  0,510,  0,  1,522,  1,  1, 82,10024],
    [10026,  0,522,  1, 21,  0, 21,  1,  0,  1, 21, 32,10024],
    [10026, 81,  1,  1,  1,  1,  1,  1,  0,  1,  0,499,10024],
    [10026,  0,524,  0, 22, 34,507,  1,  0, 81,523,  0,10024],
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