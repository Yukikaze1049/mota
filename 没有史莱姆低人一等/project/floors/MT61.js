main.floors.MT61=
{
    "floorId": "MT61",
    "title": "主塔 61 层",
    "name": "61",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X101592",
    "bgm": "bxsgzz2.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT61_2_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,4": [
            {
                "type": "setValue",
                "name": "flag:door_MT61_2_5",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,5": {
            "0": {
                "condition": "flag:door_MT61_2_5==2",
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
                        "name": "flag:door_MT61_2_5",
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
    [ 20, 88,  0,447, 20,  0,1109,  0, 20,449, 20,453, 20],
    [ 20,  0,  0,  0, 20,387,  0, 21, 20,449, 20,452, 20],
    [ 20, 20, 81, 20, 20,  0,223,  0, 20,561, 20,451, 20],
    [ 20,277,  0,277, 20, 20, 81, 20, 20, 81, 20,450, 20],
    [ 20, 20, 85, 20, 20,  0,787,  0, 20,  0, 20, 84, 20],
    [ 20, 21,  0,  0,325,385, 20,386,277,  0,787, 87, 20],
    [ 20, 20, 20,794, 20,447, 20,447, 20,326, 20,1063, 20],
    [ 20,491, 20, 81, 20, 20, 20, 20, 20, 81, 20,355, 20],
    [ 20,1059, 20,  0, 20,450,450,450, 20,  0, 20,355, 20],
    [ 20,1059, 20,448, 20, 20,631, 20, 20,448, 20,355, 20],
    [ 20,1059,389,  0,246, 21, 21, 21,601,  0, 20,401, 20],
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
        1,
        1
    ]
}