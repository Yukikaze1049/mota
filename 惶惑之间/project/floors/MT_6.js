main.floors.MT_6=
{
    "floorId": "MT_6",
    "title": "地下 6 层",
    "name": "地下 6 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
                "name": "flag:db61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db61==2",
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
                "name": "flag:db61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db61==2",
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
                "name": "flag:db61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db61==4)",
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
                "name": "flag:db61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db61==4)",
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
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:db62",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db62==2)",
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
                "name": "flag:db62",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db62==2)",
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
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:db62",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db62==4)",
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
                "name": "flag:db62",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.db62==4)",
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,  0,  0,  1,  0, 87,  0,  1, 27,  0, 28,10024],
    [10026,  0, 37,  0,  1,  0,  0,  0,  1,  0, 29,  0,10024],
    [10026,  0,  0,  0,  1,214,  1,211,  1, 21,  0, 21,10024],
    [10026,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,10024],
    [10026,221,  0,221,  1, 81,  1, 82,  1,211,  0,211,10024],
    [10026,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,10024],
    [10026,  1, 85,  1,  1,213,  1,434,  1,  1, 85,  1,10024],
    [10026,221,  0,221,  1,  0,  0,  0,  1,434,  0,434,10024],
    [10026,  0,  0,  0,  1,  1,218,  1,  1,  0,  0,  0,10024],
    [10026,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,10024],
    [10026, 21,  0,  0,211,  0, 88,  0,434,  0,  0, 21,10024],
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