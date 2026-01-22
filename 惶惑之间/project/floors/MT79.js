main.floors.MT79=
{
    "floorId": "MT79",
    "title": "塔B 8 层",
    "name": "塔B 8 层",
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
        "6,11": {
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
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:z7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z7==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            5
                        ]
                    }
                ]
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:z7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z7==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            5
                        ]
                    }
                ]
            }
        ],
        "1,7": [
            {
                "type": "setValue",
                "name": "flag:z7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z7==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            8
                        ]
                    }
                ]
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:z7",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z7==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            8
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "9,11": [
            {
                "type": "setValue",
                "name": "flag:huang15",
                "value": "1"
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:hong16",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "8,6": {
            "0": {
                "condition": "flags.lan15",
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
        "1,2": {
            "0": {
                "condition": "flags.lan16",
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
    [10026, 34,  1,  0, 81,  0, 87,  0,  1,  0, 21,  0,10024],
    [10026,512,  1,  0,  1,  0,  0,  0, 81,227,  0, 34,10024],
    [10026,  0,  0,  0,  1,  0,523,  0,  1,  0,499,  0,10024],
    [10026,226,  0,226,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026,  1, 85,  1,  1, 21,  0, 32,  1,  0,501,  0,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,512,523,  0, 32,10024],
    [10026,222,  0,222,  1,  0,522,  0,  1,  0,500,  0,10024],
    [10026,  1, 85,  1,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026, 21,  0, 21,  1, 32,  0,  0, 81,524,  0, 21,10024],
    [10026,  0, 23,  0,  1,  0,  0,  0,  1,  1,356,  0,10024],
    [10026, 32,507, 32,  1,  0, 88,  0,  1,510,  0, 32,10024],
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