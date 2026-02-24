main.floors.MT345=
{
    "floorId": "MT345",
    "title": "剑祖之坛（三重天）",
    "name": "剑祖之坛（三重天）",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "ground",
    "bgm": "battle24.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "5,4": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,11": {
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
    [140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006],
    [140006, 21,  0,1166, 81,140006, 34,369,140006,352,368,336,140006],
    [140006,  0, 21,140006,367,140006,140006,1173,140006,140006,1176,140006,140006],
    [140006,1166, 81,1163,  0,1159,  0, 31,1175,  0,  0,338,140006],
    [140006,140006, 31, 81,140006, 88,140006,1173,140006,140006, 33,140006,140006],
    [140006,412,140006, 81, 31,1172, 31,140006,140006,1173,  0,1173,140006],
    [140006, 82,410, 82,140006,366, 81,  0,411,  0,1170, 21,140006],
    [140006,140006, 21,351,140006,140006, 81,140006,140006,140006, 81,140006,140006],
    [140006,367,1172, 21,335,140006, 81,1170,386,1173,  0,1173,140006],
    [140006,140006,140006,140006,399,1173,  0,1173,140006, 81,140006,140006,140006],
    [140006,1169, 81,380,1176,140006,1169, 82, 21,1177,140006,  0,140006],
    [140006, 22,140006,140006, 33,140006, 87,140006, 22, 21,140006, 23,140006],
    [140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006]
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