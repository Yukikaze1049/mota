main.floors.MT71=
{
    "floorId": "MT71",
    "title": "主塔 71 层",
    "name": "71",
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
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,2": [
            {
                "type": "setValue",
                "name": "item:I827",
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
    [  5,450,450,450,  5,  0,839, 81,  0,386,  5, 87,  5],
    [  5,  0,923,  0,  5, 21,  5,  5,  5,923,  5,450,  5],
    [  5,  5, 81,  5,  5,392,  5,391,  5,  0,  5,922,  5],
    [  5,450,  0,924,  0,451,  5,389,  5, 21,840,  0,  5],
    [  5,  5,713,  5,  5,  5,  5, 21,  5,  0,  5,  0,  5],
    [  5, 88,  0, 21,  5,386, 81,841,  5,842,  5, 81,  5],
    [  5,  0,  0,  0,  5,  0,  5,450,  5,  0,  5,449,  5],
    [  5, 21,  0, 21,  5,924,  5,  5,  5,393,  5,  0,  5],
    [  5,  5, 81,  5,  5, 21, 21,923,  0,  0, 81,713,  5],
    [  5,  0,922,  0,  5, 21, 21,  5,  5,685,  5,549,  5],
    [  5,450,  0,  0, 81,713,  0,  5,451,393,  5,450,  5],
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
        1,
        6
    ]
}