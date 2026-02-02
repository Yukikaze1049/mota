main.floors.MT60=
{
    "floorId": "MT60",
    "title": "主塔 60 层",
    "name": "60",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X101592",
    "bgm": "bxsgzz2.mp3",
    "firstArrive": [
        "\t[奕开,hero]\b[hero]也许，可以把炸弹史莱姆推过去拿金币"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,1": [
            {
                "type": "setValue",
                "name": "item:I1047",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 87, 82, 21,325,  0, 20,387,787,389, 20,355, 20],
    [ 20,382, 20,794, 20,447, 20,388, 20,389, 20,355, 20],
    [ 20,  0, 20,448, 20,  0, 81,277, 20,389, 81,561, 20],
    [ 20,561, 20,  0, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 81, 20,903,  0, 81,  0,447,  0, 20,386,  0, 20],
    [ 20,  0,326,  0,447, 20,382,  0, 21, 20,  0,277, 20],
    [ 20,601, 20, 20, 20, 20, 20,787, 20, 20, 20, 81, 20],
    [ 20,  0, 20,436,  0, 20,  0, 21,  0,787,  0,  0, 20],
    [ 20,448, 20,  0,223, 20,794, 20, 20, 20, 20,794, 20],
    [ 20,  0, 20, 20, 82, 20,  0, 20,485,448, 20,  0, 20],
    [ 20,277, 21, 21, 21, 20, 88, 20,448,246, 81,447, 20],
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