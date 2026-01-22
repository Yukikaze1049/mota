main.floors.MT52=
{
    "floorId": "MT52",
    "title": "地下 10 层",
    "name": "地下 10 层",
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
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "setValue",
                "name": "flag:bb1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb1==3",
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
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:bb1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb1==3",
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
                "name": "flag:bb1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb1==3",
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
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 31,  0,  0,267,  0, 87,  0,267,  0,  0, 31,10024],
    [10026,  0,  0,  0,  1,  0,  0,  0,  1,  0,  0,  0,10024],
    [10026, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 81,10024],
    [10026,  0,503,  1,  1,  0,503,  0,  1,  1,503,  0,10024],
    [10026,502,  0,  1,  1,502,  0,502,  1,  1,  0,502,10024],
    [10026,  1, 81,  1,  1,  1, 85,  1,  1,  1, 81,  1,10024],
    [10026,501, 21,  1,  0,  0,506,  0,  0,  1, 21,356,10024],
    [10026,500,499,  1, 23,  0,  0,  0, 23,  1, 32, 31,10024],
    [10026, 81,  1,  1,  1,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  0, 32,  1, 34,  1, 34,  1, 34,  1, 32,  0,10024],
    [10026, 34,  0, 81,  0, 81,  0, 81,  0, 81,  0, 34,10024],
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