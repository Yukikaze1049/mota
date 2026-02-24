main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 13 层",
    "name": "13",
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
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "1,11": {
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
    [  1, 88,  1,  1,  1,  1,  1,  0,  0, 32, 21, 29,  1],
    [  1,  0, 32,  0, 21,  0, 32, 29, 81,  1, 86,  1,  1],
    [  1, 86,  1, 82,  1,  1,  1,  1, 34,427,  0,427,  1],
    [  1,455,  1,411,366, 22,  0,421, 81,  1,366,  1,  1],
    [  1,387,  1,  0,  1,  1,  1,  0,  0,427,  0,427,  1],
    [  1, 33, 82, 34,  1,412, 82,  0,  1,383, 82,  1,  1],
    [  1, 82,  1,474,  0,445, 34,227,  0,  1, 32, 82,  1],
    [  1, 34, 86,  0,  1,  0,  1,  1, 30,  0,  1, 47,  1],
    [  1,  0,  1,411,  0,213, 30, 32,236, 82, 21,  1,  1],
    [  1,408,383,  1, 81,  1,  1, 81,  1, 21,436,334,  1],
    [  1, 87,  1,411,236, 21,  1,212, 33,  1,350,  1,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "battle1.mp3"
}