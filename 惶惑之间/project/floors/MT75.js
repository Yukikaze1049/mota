main.floors.MT75=
{
    "floorId": "MT75",
    "title": "塔B 4 层",
    "name": "塔B 4 层",
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
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:z6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z6==2)",
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
                "name": "flag:z6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.z6==2)",
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
        "1,9": [
            {
                "type": "setValue",
                "name": "flag:hong8",
                "value": "1"
            }
        ],
        "11,9": [
            {
                "type": "setValue",
                "name": "flag:huang7",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flags.lan7",
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
        "2,5": {
            "0": {
                "condition": "flags.lan8",
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
    [10026, 87,  1,  0,501,  0,  1,  0, 32,  0,  1, 88,10024],
    [10026,  0,  1, 31,  0, 31,  1,356,  0,356,  1,  0,10024],
    [10026,225,  1,  0,523,  0,  1,  0,523,  0,  1,225,10024],
    [10026,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1,  0,10024],
    [10026,  0,512,  0,  0,  0,  0,  0,  0,  0, 81,  0,10024],
    [10026, 81,  1,226,  1,  1,512,  1,  1,224,  1,224,10024],
    [10026,  0,  0,  0,  1,225,  0,225,  1,  0,  0,  0,10024],
    [10026,  1,  1, 81,  1,  1, 85,  1,  1, 81,  1,  1,10024],
    [10026,507,  0,522,  1, 21,  0, 21,  1,522,  0,510,10024],
    [10026,  0, 31,  0,  1,  0, 32,  0,  1,  0, 32,  0,10024],
    [10026, 21,  0, 21,  1,499,  0,500,  1, 21,  0, 21,10024],
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