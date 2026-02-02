main.floors.MT84=
{
    "floorId": "MT84",
    "title": "主塔 84 层",
    "name": "84",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,3": [
            {
                "type": "setValue",
                "name": "item:I1099",
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
    [ 20,395, 20,788, 21, 21, 21,796, 81,  0, 20,453, 20],
    [ 20,  0,790,  0, 20, 20, 20, 20, 20,390, 20,453, 20],
    [ 20,397, 20,452,  0,795, 20,453, 20,  0, 20,892, 20],
    [ 20, 20, 20, 20, 20,  0, 20,392, 20,904, 81,  0, 20],
    [ 20,452,389,  0, 20, 22, 20,393, 20, 20, 20,452, 20],
    [ 20,452,389,892, 81,  0, 20, 21, 20,549, 20,  0, 20],
    [ 20,452,389,  0, 20,788, 20,891, 20,549, 20,795, 20],
    [ 20, 20, 20, 20, 20,  0, 20, 81, 20,549, 20, 81, 20],
    [ 20,452,1083, 21,742,  0,  0,  0,789, 21, 20,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 81, 20, 20, 20, 20,789, 20],
    [ 20,453,383, 21,251,  0, 88,790,387,388, 20, 87, 20],
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
        6,
        11
    ]
}