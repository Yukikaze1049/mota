main.floors.SL22=
{
    "floorId": "SL22",
    "title": "魔塔 22 层",
    "name": "魔塔22",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "huiyi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "2,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL22_2_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_SL22_2_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,4": {
            "0": {
                "condition": "flag:door_SL22_2_4==2",
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
                        "name": "flag:door_SL22_2_4",
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
    [  1,  0, 87,  1,367,  0,  1,  0, 21,  0, 81,1250,  1],
    [  1,1247,  1,  1,  0, 21, 81,1247,  0,372,  1,370,  1],
    [  1,  0,  0,  0,369,  0,  1,  0,444,  0,  1,  1,  1],
    [  1,  1, 85,  1,  1,1249,  1,  1,1250,  1,  1,371,  1],
    [  1,1249,  0,1249,  1,  0,  1,445,  0, 21,  1,1249,  1],
    [  1,  0,373,  0,  1,  0,1247,  0,367,  0,1247,  0,  1],
    [  1,  1, 81,  1,  1, 81,  1,  1,  1,  1,  1, 21,  1],
    [  1,445,  0,443,1247,  0,  0, 81, 81,  0, 81,  0,  1],
    [  1,1250,  1,  1,  1,  1,1248,  1,  1,1246,  1,445,  1],
    [  1,372, 82,443,  1, 21,  0,  1,443,  0,  1,  0,  1],
    [  1,372,  1,  0,1246,368,443,  1,445,443,  1, 88,  1],
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
        11,
        11
    ]
}