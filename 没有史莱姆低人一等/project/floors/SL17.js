main.floors.SL17=
{
    "floorId": "SL17",
    "title": "魔塔 17 层",
    "name": "魔塔17",
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
        "4,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,8": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:door_SL17_2_7",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,8": [
            {
                "type": "setValue",
                "name": "flag:door_SL17_2_7",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,7": {
            "0": {
                "condition": "flag:door_SL17_2_7==2",
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
                        "name": "flag:door_SL17_2_7",
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
    [  1,443,  0, 21, 81,  0,1235,  0,445,  1,443,  0,  1],
    [  1,  1,1237,  1,  1,  1,  1,369,  0, 81,  0, 27,  1],
    [  1,368,  0,368,  1, 21,  1,207,  1,  1,  1,1239,  1],
    [  1,  0,445,  0, 82,442,1241,  0,  1, 22,  1,  0,  1],
    [  1,  1,  1,  1,  1, 81,  1,  0,  1,1237,  1,  0,  1],
    [  1,367,  1,1234,  0,  0,1236,  0,443,  0,443,  0,  1],
    [  1,  0, 85,  0,  0,  1,  1,  1,  1, 81,  1, 82,  1],
    [  1,444,  1,1234,  0, 81,445,  1,369,  0,  1, 87,  1],
    [  1,1245,  1,  1,206,  1,443,  1,  1,1236,  1, 29,  1],
    [  1,  0,1241, 82,  0,  1, 81,  1, 21,  0,207, 21,  1],
    [  1, 30,  0,  1, 88,  1, 28,1234,  0, 21,  1,443,  1],
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
        4,
        11
    ]
}