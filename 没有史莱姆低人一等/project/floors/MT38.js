main.floors.MT38=
{
    "floorId": "MT38",
    "title": "主塔 38 层",
    "name": "38",
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
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT38_10_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,3": {
            "0": {
                "condition": "flag:door_MT38_10_3==2",
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
                        "name": "flag:door_MT38_10_3",
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
    [ 20,  0,444,236, 81,  0, 87,  0, 20,  0,382,  0, 20],
    [ 20,379,  0,381, 20,373,  0,373, 20, 21,  0, 21, 20],
    [ 20,  0,380,  0, 20,  0,225,  0, 20, 20, 85, 20, 20],
    [ 20, 81, 20, 20, 20, 20, 82, 20, 20,228,  0,228, 20],
    [ 20,228,  0,445, 20,445,  0,376,279,  0,  0,  0, 20],
    [ 20,  0, 21,444, 20,  0,234,  0, 20, 20, 81, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 81, 20, 20, 21,  0, 21, 20],
    [ 20, 81,  0, 81,233,  0,224,445, 20,  0,235,  0, 20],
    [ 20, 81, 20, 81, 20, 20, 82, 20, 20, 20, 81, 20, 20],
    [ 20, 81, 20, 81, 20, 21,  0,  0, 20,  0,  0,445, 20],
    [ 20, 22, 20, 22, 20,  0, 88,  0, 81,227,375,  0, 20],
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
        11
    ]
}