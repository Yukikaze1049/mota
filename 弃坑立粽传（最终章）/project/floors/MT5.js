main.floors.MT5=
{
    "floorId": "MT5",
    "title": "主塔 1 层",
    "name": "1",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 27, 31, 28,  1,221,  0,221, 22, 34,  1, 87,  1],
    [  1,  0,209,  0,  1, 81, 32,  1, 28,  1,  1,  0,  1],
    [  1,  1, 81,  1,  1,  1, 28,  1,  1,  1,  1, 31,  1],
    [  1, 21,201, 29,  1, 47,217,  0,  0,  0, 81, 83,  1],
    [  1,  1,  0,  1,  1,  1,  0, 81,  0,  1,  1,  0,  1],
    [  1,  1, 27, 31,  0,202,300,  1,201,  0,  0, 31,  1],
    [  1,  1,  1,201,  1,  1,201,  4,  4,  4,202,  1,  1],
    [  1,  1, 21,201,  0,  0,  0, 24,385,  4,  0,  1,  1],
    [  1,  1, 81,  1,  1,  1, 81,  4,  4,  4, 81,  1,  1],
    [  1,  0,202,  0,  1, 27, 32, 28,  1,  0,203,  0,  1],
    [  1, 31, 21, 31,  1, 21, 88, 23,  1, 29, 21, 29,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "firststep.mp3",
    "bg2map": [

],
    "fg2map": [

]
}