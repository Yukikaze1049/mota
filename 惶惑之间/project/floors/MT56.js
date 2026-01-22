main.floors.MT56=
{
    "floorId": "MT56",
    "title": "地下 6 层",
    "name": "地下 6 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": false,
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
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:bb6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb6==2",
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
                "name": "flag:bb6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb6==2",
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
                "name": "flag:bb6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb6==4)",
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
                "name": "flag:bb6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb6==4)",
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
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:bb61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb61==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:bb61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb61==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            8
                        ]
                    }
                ]
            }
        ],
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:bb61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb61==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            5
                        ]
                    }
                ]
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:bb61",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.bb61==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            5
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
    [10026, 21,  0,  0,216,  0, 87,  0,204,  0,  0, 21,10024],
    [10026,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,10024],
    [10026,  0,  0,  0,  1,  1,216,  1,  1,  0,  0,  0,10024],
    [10026,212,  0,212,  1,  0,  0,  0,  1,253,  0,253,10024],
    [10026,  1, 85,  1,  1,502,  1,204,  1,  1, 85,  1,10024],
    [10026,  0,  0,  0,  1,  0,  1,  0,  1,  0,  0,  0,10024],
    [10026,207,  0,207,  1, 81,  1, 82,  1,267,  0,267,10024],
    [10026,  1, 85,  1,  1,  0,  1,  0,  1,  1, 85,  1,10024],
    [10026, 32,  0, 32,  1,212,  1,253,  1,499,  0,500,10024],
    [10026,  0,505,  0,  1,  0,  0,  0,  1,  0,501,  0,10024],
    [10026, 32,  0, 32,  1,  0, 88,  0,  1, 21,  0, 21,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "underGround": true
}