main.floors.MT349=
{
    "floorId": "MT349",
    "title": "剑祖之坛（七重天）",
    "name": "剑祖之坛（七重天）",
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
        "3,6": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
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
    [140006,140006,140006,140006,140006,140006, 87,1169,  0,1169,412,1169,  0],
    [140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006, 21],
    [140006, 32, 34, 33, 81, 31, 34, 33, 81, 34, 33, 81,1169],
    [140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006, 21],
    [353,337, 21,  0,1177,370,354,338,  0,1177, 21,  0,1177],
    [1178,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006],
    [  0,140006,140006, 88,367,367,367,1166,367,367,1166,  0,351],
    [ 21,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,335,1175],
    [337, 82,399, 33, 33, 82,399, 33, 33, 32, 31,140006,351],
    [353,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,335,1175],
    [1178, 81, 33, 34, 81, 33, 34, 31,140006,140006,140006,140006,351],
    [ 21,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,335,1175],
    [  0,399,1178,368,384,1174,368,384,1174,368,384,1174,399]
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