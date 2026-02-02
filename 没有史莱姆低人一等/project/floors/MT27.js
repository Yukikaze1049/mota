main.floors.MT27=
{
    "floorId": "MT27",
    "title": "主塔 27 层",
    "name": "27",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "sanbu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_8_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_8_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_8_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT27_8_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "8,5": {
            "0": {
                "condition": "flag:door_MT27_8_5==4",
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
                        "name": "flag:door_MT27_8_5",
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
    [ 20, 21,  0, 21, 20,255, 81,  0,442,  0,213, 88, 20],
    [ 20,  0, 21,  0, 20, 21, 20, 20, 20, 20, 20, 81, 20],
    [ 20, 20,214, 20, 20, 28, 20,371,372,373, 20,255, 20],
    [ 20,442,  0,219,  0, 21, 20,553,553,553, 20,  0, 20],
    [ 20, 20, 20, 20, 82, 20, 20, 20, 85, 20, 20,442, 20],
    [ 20,443,  0, 20,253,  0, 20,214,  0,214, 20,  0, 20],
    [ 20,  0,213, 81,  0, 21, 20,214,  0,214, 20, 81, 20],
    [ 20,370,  0, 20,369,  0, 20, 20, 82, 20, 20,252, 20],
    [ 20, 20, 20, 20, 20,  0, 81,253,  0,442, 20,  0, 20],
    [ 20,367, 21,  0, 20,220, 20, 20, 20, 20, 20, 27, 20],
    [ 20, 21,  0,222, 81,  0, 87,  0,213,  0, 81,212, 20],
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
        11,
        1
    ]
}