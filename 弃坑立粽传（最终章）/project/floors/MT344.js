main.floors.MT344=
{
    "floorId": "MT344",
    "title": "剑祖之坛（二重天）",
    "name": "剑祖之坛（二重天）",
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
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "5,4": {
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
    [140006, 34,384,140006,  0,140006,335,140006,140006,396, 23,140006,140006],
    [140006,368,1169, 81,411, 81,384,1176,410,140006,1177,140006,140006],
    [140006, 34,384,140006,  0,1169,351,140006,1166,  0,1175,140006,140006],
    [140006,140006,140006,140006, 81, 87, 82, 31,140006,1170,  0,140006,140006],
    [140006,386,1166,366,1171,140006, 21, 81,140006,383,140006, 21,140006],
    [140006, 34,140006, 81,140006,140006,1159,140006,351,  0,1157,  0,140006],
    [140006,140006, 21,1171, 21,140006,338,140006,140006,1173,  0,1173,140006],
    [140006, 33,140006, 81,140006, 21,1170,  0,140006,140006, 81,140006,140006],
    [140006, 81,367,1159,367,140006,140006,367, 82,1163,410,1168,140006],
    [140006,140006, 81,140006, 81,1157,140006,140006,369,140006,140006, 82,140006],
    [140006,370,1175,370,140006,383, 81,1172,353,140006,396, 88,140006],
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