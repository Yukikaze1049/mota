main.floors.MT76=
{
    "floorId": "MT76",
    "title": "塔B 5 层",
    "name": "塔B 5 层",
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
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:z3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.z3==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:z3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.z3==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            6
                        ]
                    }
                ]
            }
        ],
        "8,5": [
            {
                "type": "setValue",
                "name": "flag:z3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z3==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            6
                        ]
                    }
                ]
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:z3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z3==4)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            9,
                            6
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "7,3": [
            {
                "type": "setValue",
                "name": "flag:huang9",
                "value": "1"
            }
        ],
        "4,11": [
            {
                "type": "setValue",
                "name": "flag:hong10",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,11": {
            "0": {
                "condition": "flags.lan9",
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
        "8,1": {
            "0": {
                "condition": "flags.lan10",
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
    [10026, 88,  0,225,  0,  0,522,  0,512,  0,500,  0,10024],
    [10026,  0,  0,  1,  0,  0,  1,  0,  1,499,  0, 32,10024],
    [10026, 31,  0,  1,  0, 21,  1,510,  1,  0,501,  0,10024],
    [10026,  1, 81,  1, 81,  1,  1,  1,  1,  1,  1, 82,10024],
    [10026,  0,225,  1,  0,224,  1,  0,225,  1,  0,  0,10024],
    [10026, 21,  0,  1,  0,  0, 85,  0,  0, 85,  0, 87,10024],
    [10026,  0,226,  1,  0,224,  1,  0,225,  1,  0,  0,10024],
    [10026,  1, 81,  1, 81,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026, 21,  0,  1,224,  0, 81, 34, 81,  0,  1,356,10024],
    [10026,500,499,  1,  0,  0,  1,  1,  1,  0,  1,356,10024],
    [10026, 32,501,  1,507,  0,225,  0,522,  0, 81,512,10024],
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