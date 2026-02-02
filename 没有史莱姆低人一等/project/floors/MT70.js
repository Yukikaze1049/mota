main.floors.MT70=
{
    "floorId": "MT70",
    "title": "主塔 70 层",
    "name": "70",
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
        "12,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,1": [
            {
                "type": "setValue",
                "name": "item:I1039",
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
    [  5,394,394,842,435, 21,685, 21,435,841,393,393,  5],
    [  5,  5,  5,  5,  5,  5, 81,  5,  5,  5,  5,  5,  5],
    [  5,450,450,450,450,713,  0,717,385,385,385,385,  5],
    [  5,  5,  5,  5,  5,  5, 82,  5,  5,  5,  5,  5,  5],
    [  5,  0, 22,  0,  5,387,923,389,  5,  0,450,  0,  5],
    [  5, 87,  0,922, 81,  0,  0,  0, 81,922,  0,  0, 88],
    [  5,  0,450,  0,  5,389,924,388,  5,  0, 22,  0,  5],
    [  5,  5,  5,  5,  5,  5,1063,  5,  5,  5,  5,  5,  5],
    [  5, 22, 22, 22, 22, 22,401, 21, 21, 21, 21, 21,  5],
    [  5,  5,  5,  5,  5,  5,402,  5,  5,  5,  5,  5,  5],
    [  5,454,454,454,454,454,401,453,453,453,453,453,  5],
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
        12,
        6
    ]
}