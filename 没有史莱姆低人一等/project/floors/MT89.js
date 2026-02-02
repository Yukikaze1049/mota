main.floors.MT89=
{
    "floorId": "MT89",
    "title": "主塔 89 层",
    "name": "89",
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
    "firstArrive": [
        "\r[red]注意:下一层是剧情强制战斗\r[]"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [ 20, 88,  0,  0,788,  0,  0,  0,789,  0, 21,452, 20],
    [ 20, 20, 20, 20, 20, 20, 84, 20, 20, 20, 20, 20, 20],
    [ 20,891,  0,452,  0,251,  0,  0, 20,453,892,453, 20],
    [ 20, 81, 20, 20, 20, 20, 20,796, 20, 20, 81, 20, 20],
    [ 20,386,386, 20,  0,  0, 21,  0,788,  0,  0,378, 20],
    [ 20, 20, 20, 20,790, 20, 20, 20, 20, 20, 20, 81, 20],
    [ 20,391,  0, 20,  0, 20,  0,393, 20, 21,  0,788, 20],
    [ 20,  0,742, 81, 82, 81,742,  0, 20,  0,453,  0, 20],
    [ 20,393,  0, 20,  0, 20,  0,392, 20,789,  0, 21, 20],
    [ 20, 20, 20, 20,892, 20, 20, 20, 20, 82, 20, 20, 20],
    [ 20,452, 21,251,  0,  0, 87,  0,742,  0,453,452, 20],
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
        1,
        1
    ]
}