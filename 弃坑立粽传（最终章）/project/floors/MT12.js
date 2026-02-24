main.floors.MT12=
{
    "floorId": "MT12",
    "title": "主塔 8 层",
    "name": "8",
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
        "11,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "4,9": {
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
    [  1, 31,  1, 29,366, 29,  1,335, 34,351,  1, 34,  1],
    [  1, 32,  1,  1, 81,  1,  1, 21,226, 21,  1, 33,  1],
    [  1, 34,  1,  0,  0,  0, 32,  1, 81,  1,  1, 34,  1],
    [  1, 81,  1, 86,  1, 30,  0,  0,219,  0,  1, 82,  1],
    [  1, 34,  0,  0,  0,  1,218,  0,  1,  0,211,  0,  1],
    [  1,255,  1, 81,255, 21,351,  1,  0,  0, 81,300,  1],
    [  1,351,  0,  0, 21,  1,  1,410,219,  4, 24, 88,  1],
    [  1,  1,218,  1, 81,  1,  0,  1, 31,  4,412,  4,  1],
    [  1, 86, 30,225, 87, 82,  0,444,  0,  4,  4,  4,  1],
    [  1,215,  1,410,  1,  1, 32,  1, 30,  1,382,  1,  1],
    [  1,410,  1, 30,  0,219,  0,  0,255, 81, 21,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "firststep.mp3"
}