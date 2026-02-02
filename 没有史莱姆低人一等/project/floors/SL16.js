main.floors.SL16=
{
    "floorId": "SL16",
    "title": "魔塔 16 层",
    "name": "魔塔16",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "Aeterna.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,7": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "4,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL16_10_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL16_10_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,8": {
            "0": {
                "condition": "flag:door_SL16_10_8==2",
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
                        "name": "flag:door_SL16_10_8",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,443,  1,370,  1,  0,1236, 22,  1,444,1245,367,  1],
    [  1,367, 82,369,1243,445,  1,1236,  1,  1, 81,  1,  1],
    [  1, 21,  1,  1,  1,  0,1237,  0, 81,  0,369,  0,  1],
    [  1, 21,  1,445,  1,  0,  1,  1,  1,367,  0, 21,  1],
    [  1,1237, 81,367,1234,  0, 81,1234,  1,  1,1236,  1,  1],
    [  1,  1,  1,  1,  1,  0,  1,368,  1,  0,445,  0,  1],
    [  1, 88,  1,443,  0,443,  1,443,  1,1243,  0,1243,  1],
    [  1,  0,  1,  1,207,  1,  1,1237,  1,  1, 85,  1,  1],
    [  1,  0,1235,  0,  0,  1, 21,  0,  1, 21,  0,443,  1],
    [  1, 81,  1,  1,  1,  1,  1, 81,  1,  0, 23,  0,  1],
    [  1,1241,  0,  0, 87,  1,369,369, 82,443,  0, 21,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        1,
        7
    ]
}