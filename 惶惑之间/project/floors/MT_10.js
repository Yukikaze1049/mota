main.floors.MT_10=
{
    "floorId": "MT_10",
    "title": "地下 10 层",
    "name": "地下 10 层",
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
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:db10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db10==2",
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
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:db10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db10==2",
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
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:b10b",
                "value": "1"
            },
            {
                "type": "show",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "floorId": "MT17"
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
    [10026, 21,  0,  0,215,  0, 87,  0,215,  0,  0, 21,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,10024],
    [10026, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 81,10024],
    [10026,434,  0,  1,  1,  0,435,  0,  1,  1,  0,211,10024],
    [10026,  0,434,  1,  1,435,  0,435,  1,  1,211,  0,10024],
    [10026,  1, 81,  1,  1,  1, 85,  1,  1,  1, 81,  1,10024],
    [10026, 29, 21,  1,  0,  0,208,  0,  0,  1, 21,356,10024],
    [10026, 28, 27,  1, 23,  0,  0,  0, 23,  1, 32, 31,10024],
    [10026,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,10024],
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
    "flyPoint": [
        6,
        1
    ]
}