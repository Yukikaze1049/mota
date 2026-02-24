main.floors.MT23=
{
    "floorId": "MT23",
    "title": "主塔 17 层",
    "name": "17",
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
        "1,11": {
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
    [  1, 33,432, 81,  0,  1,  1,  1, 34,495,383, 87,  1],
    [  1, 21,383,  1, 28,457, 86,366,  0,  1,  1, 82,  1],
    [  1,412,  1,366,  1, 32,  1,  0,  0, 27,  1, 27,  1],
    [  1,  1, 30,445,  0,  1,  1, 81,  0,  0, 81,436,  1],
    [  1,  0,  0,  0, 21,  1,  1,  0,421,  0,  1, 28,  1],
    [  1, 81,  1,  1,  0,474,  0,  0,383,  1,  1,  1,  1],
    [  1,421,382, 81,  1, 81,  1,  1,459,  1,334, 32,  1],
    [  4,  4,  4, 81,382,232,  0,  0, 30, 81,489,366,  1],
    [  4, 23,  4, 81,  1,  0,  1,445,  0,  1,350, 32,  1],
    [  4, 24,  4,366, 82,  0,  1,  1, 21,  1,  1,  1,  1],
    [  1, 88,  0, 21,466,  0, 27,  0,  0, 82, 33, 33,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "battle1.mp3"
}