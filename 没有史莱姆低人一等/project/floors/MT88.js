main.floors.MT88=
{
    "floorId": "MT88",
    "title": "主塔 88 层",
    "name": "88",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "jindi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "7,7": [
            {
                "type": "setValue",
                "name": "item:I1084",
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 87,  0,453,386,452,789,  0, 20, 21,549,393, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 81, 20,  0,892,  0, 20],
    [ 20,454, 20,453,  0,788,  0,  0, 20, 20, 81, 20, 20],
    [ 20,452, 20, 20,904, 20,452,  0,742,  0,  0,390, 20],
    [ 20,397, 20,388,  0, 20, 20, 20, 20, 20, 21,  0, 20],
    [ 20,891, 81,  0,453, 20,452,452,452, 20,  0, 88, 20],
    [ 20, 20, 20, 20, 81, 20,  0,796,  0, 20, 22,  0, 20],
    [ 20,453,  0,789,  0, 20, 20, 82, 20, 20, 20,788, 20],
    [ 20, 20, 81, 20,  0,  0,904,  0,387,453, 20,  0, 20],
    [ 20,396,790, 20, 81, 20, 20, 20, 20,  0, 20,452, 20],
    [ 20,453,454, 20,251, 21,395,452, 20,795, 81,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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
        11,
        6
    ]
}