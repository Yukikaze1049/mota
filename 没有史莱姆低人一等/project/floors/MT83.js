main.floors.MT83=
{
    "floorId": "MT83",
    "title": "主塔 83 层",
    "name": "83",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "jindi.mp3",
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
        "3,1": [
            {
                "type": "setValue",
                "name": "item:I1094",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT83_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT83_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,7": [
            {
                "type": "setValue",
                "name": "item:I1050",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "item:I1048",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MT83_6_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT83_6_9",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0, 81,891,  0, 20, 88,452,  0, 20,395,  0, 20],
    [ 20,452, 20,435, 21, 20,  0,  0,795, 20,  0,251, 20],
    [ 20,  0, 20,393,454, 20, 20, 20, 81, 20, 20, 81, 20],
    [ 20,788, 20, 20, 20, 20, 21,  0,  0,904,  0,453, 20],
    [ 20,  0,  0,  0,795,  0,  0,452,  0, 20, 21,  0, 20],
    [ 20, 20, 81, 20, 20, 20, 82, 20, 20, 20, 20,795, 20],
    [ 20,  0,790,  0, 20,  0,742,  0,454,  0, 20,  0, 20],
    [ 20,454,  0,454, 20,892,  0,892, 20,788, 20,452, 20],
    [ 20, 20,742, 20, 20, 20, 85, 20, 20,  0, 20,  0, 20],
    [ 20,391,392,393, 20, 21,  0, 21, 20,453, 20,789, 20],
    [ 20, 21, 21, 21, 20,  0, 87,  0, 83,  0, 81,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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