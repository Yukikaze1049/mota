main.floors.MT66=
{
    "floorId": "MT66",
    "title": "塔A 5 层",
    "name": "塔A 5 层",
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
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:z1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.z1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ]
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:z1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.z1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            7
                        ]
                    }
                ]
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:z1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z1==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:z1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z1==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ]
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:z2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z2==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:z2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z2==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ]
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:z2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z2==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    }
                ]
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:z2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z2==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            7
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "1,11": [
            {
                "type": "setValue",
                "name": "flag:hong9",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:lan9",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "7,3": {
            "0": {
                "condition": "flags.huang9",
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
        "7,7": {
            "0": {
                "condition": "flags.huang10",
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
    [10026,499,  0,500,  1,  0, 87,  0,  1,500,  0,499,10024],
    [10026,  0,501,  0,  1,  0,  0,  0,  1,  0,501,  0,10024],
    [10026, 31,  0, 31,  1,226,  1,513,  1, 31,  0, 31,10024],
    [10026,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,10024],
    [10026,224,  0,224,  1,523,  1,522,  1,225,  0,225,10024],
    [10026,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,10024],
    [10026,  1, 85,  1,  1,226,  1,513,  1,  1, 85,  1,10024],
    [10026,224,  0,224,  1,  0,  0,  0,  1,225,  0,225,10024],
    [10026,  0,  0,  0,  1,  1, 81,  1,  1,  0,  0,  0,10024],
    [10026,  1, 81,  1,  1, 21,  0,  0,  1,  1, 81,  1,10024],
    [10026,507,  0,  0,225,  0, 88,  0,224,  0,  0,509,10024],
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