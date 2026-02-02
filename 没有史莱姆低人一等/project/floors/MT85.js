main.floors.MT85=
{
    "floorId": "MT85",
    "title": "主塔 85 层",
    "name": "85",
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
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,8": [
            {
                "type": "setValue",
                "name": "item:I1077",
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
    [ 20,  0,790,  0,452,  0,904,  0, 21,  0,789,  0, 20],
    [ 20,388, 20, 20, 20, 20,1060, 20, 20, 20, 20,452, 20],
    [ 20,  0, 20,  0,251,  0,795,  0, 82,  0, 20,  0, 20],
    [ 20, 81, 20,388, 20, 20, 81, 20, 20,742, 20,796, 20],
    [ 20,788, 20,387, 20,452,  0,549, 20, 21, 20,  0, 20],
    [ 20,  0, 20,389, 20,452,  0,549, 20, 21, 20, 81, 20],
    [ 20,452, 20, 20, 20, 20,891, 20, 20, 21, 20,387, 20],
    [ 20,  0,892,  0,1059,  0,  0,389, 20,742, 20,  0, 20],
    [ 20, 20,1063, 20, 20, 20, 81, 20, 20,451, 20,795, 20],
    [ 20,395,395,395, 20,  0,251,  0, 20,451, 20,  0, 20],
    [ 20,396,396,396, 20,454, 87,386, 20,451, 20, 88, 20],
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
        11
    ]
}