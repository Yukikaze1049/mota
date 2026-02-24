main.floors.MT24=
{
    "floorId": "MT24",
    "title": "主塔 18 层",
    "name": "18",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "8,5": {
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
    [  1,  0,  0, 32,  0,  1,  0,  0,  0,421,  0, 88,  1],
    [  1, 86, 81,  1,  0,366,  0,  1, 81,  1,300,  0,  1],
    [  1,459,  0,  1, 81,  1,  1, 28,445, 28,  1,  0,  1],
    [  1,382,495,385, 34,300,  1,  1, 83,  1,  1, 29,  1],
    [  1, 86,  1,  0,445,489, 22, 81, 87,466,432,  0,  1],
    [  1,421,  0,  1,  1,421,  1,  1, 82,  1,  1,  0,  1],
    [  1,  0,232,382,  1,  0,367,  1,489, 21,  1, 32,  1],
    [  1,  0, 21,  1,  0,  0,  0,  1,  0,300,436,  0,  1],
    [  1, 86,  1,366,474,  0,  1,  0,  0,  1,367,  1,  1],
    [  1,489, 30,  1,  1,  0, 81,474,  0, 81,  1, 32,  1],
    [  1, 21,412,367,  1, 30,  1, 21,  1, 34, 32, 32,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "battle1.mp3"
}