main.floors.MT53=
{
    "floorId": "MT53",
    "title": "地下 9 层",
    "name": "地下 9 层",
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
        "1,11": {
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
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:bb9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb9==2",
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
                "name": "flag:bb9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb9==2",
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
    [10026, 33, 84,  0,  1,  0, 88,  0,  1, 31,  0, 31,10024],
    [10026,  1,  1,  0, 81,  0,  0, 32,  1,  0,505,  0,10024],
    [10026,  0,  0,  0,  1,  1,  1,  1,  1, 31,  0, 31,10024],
    [10026,502,  1,  1,  1, 21,  0, 21,  1,  1, 85,  1,10024],
    [10026,  0, 81,212,  1,  0, 31,  0,  1,253,  0,253,10024],
    [10026, 21,  1,  0,  1,503,  1,212,  1,  0,  0,  0,10024],
    [10026,  0,  1,499, 81,  0,  1,  0, 81,  0,  0,  0,10024],
    [10026,503,  1,  1,  1,  1,  1,  1,  1,  1, 82,  1,10024],
    [10026,  0,  0,  0,212,  0,  0, 81,207,  0,212,  0,10024],
    [10026,  0,  1, 81,  1,  1,  1,  1,  0,  0,  0, 21,10024],
    [10026, 87,  1,267,501,500,356,  1, 21, 21, 21, 21,10024],
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