main.floors.MT64=
{
    "floorId": "MT64",
    "title": "主塔 64 层",
    "name": "64",
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
        "1,7": {
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
        "7,5": [
            {
                "type": "setValue",
                "name": "item:I1047",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,448,380,379,277, 20,394,393,246, 81,448,448, 20],
    [ 20, 20, 20, 20, 81, 20,449, 21,  0, 20,448,448, 20],
    [ 20, 21,  0, 20,  0, 20, 20, 20, 20, 20, 20,631, 20],
    [ 20,  0,601, 81,448, 20, 21,448,447, 20, 21,  0, 20],
    [ 20,384,  0, 20,  0, 20,  0,787,  0, 20,  0, 21, 20],
    [ 20, 20, 20, 20,326, 20, 20, 81, 20, 20,601,  0, 20],
    [ 20, 88, 81,325,  0,787,  0,448,  0, 20, 81, 20, 20],
    [ 20,  0, 20, 20, 20, 20, 20, 20, 81, 20,448,  0, 20],
    [ 20,246, 20,451,392,393, 21,223,  0,325,  0,631, 20],
    [ 20,  0, 20, 20, 20, 20, 20, 20, 20, 81, 20,435, 20],
    [ 20,448, 22,  0,223,  0, 87,277,  0,448, 20,435, 20],
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
        7
    ]
}