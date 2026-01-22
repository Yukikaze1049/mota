main.floors.MT80=
{
    "floorId": "MT80",
    "title": "塔B 9 层",
    "name": "塔B 9 层",
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
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:huang17",
                "value": "1"
            }
        ],
        "8,1": [
            {
                "type": "setValue",
                "name": "flag:hong18",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "10,11": {
            "0": {
                "condition": "flags.lan17",
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
        "1,7": {
            "0": {
                "condition": "flags.lan18",
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
    [10026,  0,523,  0,  0,  1, 88,  1,507,  0,  1, 32,10024],
    [10026,  0,  1,  1,522,  1,  0,  1,  0,  0, 81, 32,10024],
    [10026,523,  1,  1,  0, 81,  0, 81,222,  0,  1, 32,10024],
    [10026,  0,  0,524,  0,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026, 81,  1,  1,  1,  1, 32, 21,  0, 81,524,  0,10024],
    [10026,  0, 31, 31,  0,  1,510, 32, 21,  1,  0,523,10024],
    [10026,512,  1,  1, 81,  1,  1,  1,  1,  1,  1, 81,10024],
    [10026,  0,227,  0,  0,  0,  0,222,  0,  0,  0,  0,10024],
    [10026, 83,  1,  1,  1,  1, 81,  1,  1,  1,  1,227,10024],
    [10026,  0,  1,499, 31,  1,  0,  1, 32,501,  1,  0,10024],
    [10026, 87,  1, 31,  0,524,  0,  1,500, 32,512,  0,10024],
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