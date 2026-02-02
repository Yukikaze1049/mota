main.floors.SL24=
{
    "floorId": "SL24",
    "title": "魔塔 24 层",
    "name": "魔塔24",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "huiyi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "10,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "4,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 21,375, 21,  1,  0,367,368,  0,  1, 88,  0,  1],
    [  1,  0,1259,  1,  1,1250,  1,  1,1250,  1,  0,  0,  1],
    [  1,  1, 82,  1,  0,444, 81,368,  0,  1,  1,1248,  1],
    [  1, 21,  0,  1,444,  0,  1,  0,367, 81,443,  0,  1],
    [  1,373,445,  1,1251,  1,  1,  1,1247,  1,  1,1249,  1],
    [  1, 21,  0,1249,  0,443,  0,443,  0,  0,  0,  0,  1],
    [  1,  1,1249,  1,  1, 82,  1,  1,  1,1259,  1, 81,  1],
    [  1,443,  0,1250,  0,445,  0, 81,  0,445,  1,369,  1],
    [  1, 81,  1,  1, 22,  0,373,  1,1250,  0,  1,369,  1],
    [  1,1250,  0,  1,  1,1251,  1,  1, 81,  1,  1, 81,  1],
    [  1,  0,372,  1, 87,  0, 21,  0,367,  0,443,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        10,
        1
    ]
}