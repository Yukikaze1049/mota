main.floors.MT74=
{
    "floorId": "MT74",
    "title": "塔B 3 层",
    "name": "塔B 3 层",
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "11,6": [
            {
                "type": "setValue",
                "name": "flag:hong6",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:huang5",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "7,3": {
            "0": {
                "condition": "flags.lan5",
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
                "condition": "flags.lan6",
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
    [10026,  0,226,  0, 21,  1,  0, 32,  0,  1,  0, 87,10024],
    [10026,  0,  1, 22, 32,  1,499,  0,500,  1,  0,  0,10024],
    [10026, 81,  1,  1,  1,  1,  1,512,  1,  1,  1, 81,10024],
    [10026,  0,  0,  0,224,  0,  0,  0,225,  0,  0,  0,10024],
    [10026,522,  1, 81,  1,  1,  1, 82,  1, 81,  1,  1,10024],
    [10026,  0,  1,  0,225, 32,225,  0,  1,  0,222,507,10024],
    [10026,512,  1,  1,  1,  1,  1, 81,  1,  0,  1,  1,10024],
    [10026,  0,224,  0,  0,  0,224,  0,  1,226,  1,510,10024],
    [10026,  0,  1,  1, 81,  1,  1, 21,  1,  0,  1,501,10024],
    [10026,  0,  1, 21,225, 21,  1, 21,  1, 31,  1, 31,10024],
    [10026, 88,  1, 31,356, 31,  1, 32,  1,  0,224,  0,10024],
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