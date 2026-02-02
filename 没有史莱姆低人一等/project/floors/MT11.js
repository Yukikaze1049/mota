main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 11 层",
    "name": "11",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "saber.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
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
        "11,9": [
            {
                "type": "setValue",
                "name": "item:I1124",
                "operator": "+=",
                "value": "1"
            },
            "\t[奕开,hero]\b[hero]好东西"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  0,  0,202,  0,  0, 21,  0,205,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,211,  1,  1,  1,  1],
    [  1, 32,  1, 31, 81,602,  0,  1,  0,  1,  0, 22,  1],
    [  1, 27,  1, 31,  1,  0, 30,  1,  0, 81,206,  0,  1],
    [  1,210,  1,203,  1,  1,  1,  1,203,  1,  0, 32,  1],
    [  1,  0,202,  0,369,  0,205,  0, 31,  1,  1,  1,  1],
    [  1, 81,  1,  1,  1,  1,  1, 21,  0,209,  0, 32,  1],
    [  1,201,  1,  0,367,442,  1,602,  1,  1,  1,  1,  1],
    [  1,548,  1,211, 21,369,  1,  0,  1, 31, 81,216,  1],
    [  1,548,  1, 82,  1,  1,  1, 31,  1,368,  1, 34,  1],
    [  1,548,  1,  0, 32,  0,206,  0, 81,217,  1, 34,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}