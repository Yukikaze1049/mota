main.floors.MT78=
{
    "floorId": "MT78",
    "title": "塔B 7 层",
    "name": "塔B 7 层",
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:z5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z5==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ]
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:z5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z5==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            6,
                            8
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "5,9": [
            {
                "type": "setValue",
                "name": "flag:huang13",
                "value": "1"
            }
        ],
        "3,7": [
            {
                "type": "setValue",
                "name": "flag:hong14",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,7": {
            "0": {
                "condition": "flags.lan13",
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
        "2,4": {
            "0": {
                "condition": "flags.lan14",
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
    [10026, 21,  0, 21,  1,  0, 88,  0,  1,  0,500,  0,10024],
    [10026,  0,501,  0,  1,  0,  0,  0, 81,227,  0, 34,10024],
    [10026, 21,  0, 21,  1, 21,  0,  0,  1,  0, 21,  0,10024],
    [10026,  1,512,  1,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026,  0,  0,  0,224,  0,  0,  0,224,  0,  0, 31,10024],
    [10026, 81,  1,  1,  1,  1, 81,  1,  1,  0, 21,  0,10024],
    [10026,522,  1,507,  1,226,  0,226,  1, 81,  1,512,10024],
    [10026,  0,  1, 34,  1,  1, 85,  1,  1,524,  1,523,10024],
    [10026,  0, 82,  0,  1,510,  0, 21,  1,  0,  0,  0,10024],
    [10026,222,  1,222,  1,  0,  0,  0,  1,  0,499,  0,10024],
    [10026,  0,356,  0,  1,  0, 87,  0,  1, 32,  0, 32,10024],
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