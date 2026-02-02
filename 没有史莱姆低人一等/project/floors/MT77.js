main.floors.MT77=
{
    "floorId": "MT77",
    "title": "主塔 77 层",
    "name": "77",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,2": [
            {
                "type": "setValue",
                "name": "item:I1037",
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
    [  5,685, 81,  0,923, 21, 87,  0,  5,  0,385,450,  5],
    [  5, 21,  5, 82,  5,  5,  5,841, 81,839,385,450,  5],
    [  5,387,  5, 21,  0,  5,  0,384,  5,  0,385,450,  5],
    [  5,450,  5,  0,450,  5, 21,  0,  5,  5,  5,  5,  5],
    [  5,  5,  5,922,  5,  5,  5, 81,  5,  0, 21,553,  5],
    [  5, 23,  5,  0,450,  5,383,  0, 81,840, 21,553,  5],
    [  5,685,  0,924,  0,  5,  0,717,  5,  0, 21,553,  5],
    [  5,  5, 82,  5,  5,  5,  5, 81,  5,  5,  5,  5,  5],
    [  5,  0,  0,713, 81,922,  0,  0, 81,717,  0,842,  5],
    [  5,381,381,381,  5,  5, 81,  5,  5,391,  5,490,  5],
    [  5, 21, 21, 21,  5,  0, 88,  0,  5,392,  5,394,  5],
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
        6,
        11
    ]
}