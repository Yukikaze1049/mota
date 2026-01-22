main.floors.MT_1=
{
    "floorId": "MT_1",
    "title": "地下 1 层",
    "name": "地下 1 层",
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
        "6,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:db1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:db1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db1==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
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
    [10026,  0,  0,  0, 81,  0, 88,  0,  1,  0,  0,356,10024],
    [10026,214,  0,214,  1,  0,  0,  0, 81,218,  0,  0,10024],
    [10026,  1, 85,  1,  1,  1,  1,  1,  1, 81,  1,  1,10024],
    [10026, 21,  0, 21,  1,  0,  0,  0,  1,  0,  1, 32,10024],
    [10026,  0, 27,  0,  1,  0,  0,  0,  1,  0,  1,  0,10024],
    [10026, 31,  0, 31,  1,  0, 87,  0,  1, 81,  1,218,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  0,435,  0,10024],
    [10026,  0, 28, 32,  1,  0,  0,  0,  1,435,  0,  0,10024],
    [10026,  0, 31, 29,  1,  1, 83,  1,  1,  1,  1, 81,10024],
    [10026, 81,  1,  1,  1,  1, 83,  1,  1, 21,  0,215,10024],
    [10026,218,435,218, 81,  0,  0,  0, 81,  0,  0,  0,10024],
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