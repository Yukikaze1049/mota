main.floors.MT72=
{
    "floorId": "MT72",
    "title": "主塔 72 层",
    "name": "72",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "aybhs.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "8,2": [
            {
                "type": "setValue",
                "name": "item:I1035",
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
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,451,  5,  0, 81,923,  5, 21,451, 21,  5, 88,  5],
    [  5,389,  5,839,  5,380,  5,  0,717,  0,  5,  0,  5],
    [  5,386,  5,  0,  5,  0,  5,  5, 81,  5,  5,922,  5],
    [  5, 21,840,450,  5,713,  0, 21,  0,924, 81,  0,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,450,  5],
    [  5,  0, 21,  0,842,  0,380,  0,841,  0,379,  0,  5],
    [  5,922,  5,  5,  5,  5,  5,  5,  5,  5,  5, 81,  5],
    [  5,  0, 81,839,  5, 23,  0, 24,  5,450,  0,839,  5],
    [  5,  0,  5,  0,  5,  0,842,  0,  5,923,  5,  5,  5],
    [  5,923,  5,450,  5,  5, 81,  5,  5,  0,685,387,  5],
    [  5, 87,  5,  0,713,  0,451,  0,717, 21,  5,390,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
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