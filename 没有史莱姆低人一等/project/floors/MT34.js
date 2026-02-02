main.floors.MT34=
{
    "floorId": "MT34",
    "title": "主塔 34 层",
    "name": "34",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "heiansenlin.mp3",
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
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT34_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT34_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT34_10_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT34_10_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,9": {
            "0": {
                "condition": "flag:door_MT34_10_9==4",
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
                        "name": "flag:door_MT34_10_9",
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
    [ 20,  0, 21,  0, 20, 21, 88,  0, 20,  0,369, 30, 20],
    [ 20,232,  0,380, 20,  0,  0,  0, 81,226,369, 30, 20],
    [ 20, 81, 20, 20, 20,233, 20,233, 20,  0,369, 30, 20],
    [ 20,  0, 21,  0, 20,  0, 20,  0, 20, 20, 20, 20, 20],
    [ 20,445,  0,226, 81,369, 20,544,  0,279,  0, 21, 20],
    [ 20, 20, 20,  0, 20, 20, 20, 20, 20, 20, 81, 20, 20],
    [ 20,1114, 20,  0, 20,445,  0, 22, 20,227,  0,227, 20],
    [ 20, 21, 20,279, 20,  0,228,  0, 20,227,  0,227, 20],
    [ 20, 21, 20,  0, 20, 20, 81, 20, 20, 20, 85, 20, 20],
    [ 20,  0, 20,  0,215,  0,  0,379, 20,375,  0,376, 20],
    [ 20,224, 81,445, 20,  0, 87,  0, 20,445,445,445, 20],
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