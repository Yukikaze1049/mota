main.floors.MT346=
{
    "floorId": "MT346",
    "title": "剑祖之坛（四重天）",
    "name": "剑祖之坛（四重天）",
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
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,6": {
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
    [140006,140006,140006,1169,370,399,140006,399,370,1169,140006,140006,140006],
    [140006, 22,140006, 82,140006,386,1177,386,140006, 82,140006, 22,140006],
    [140006,1176, 82,362, 21,140006, 83,140006, 21,362, 82,1176,140006],
    [140006, 22,140006, 21,1177,370,1169,370,1177, 21,140006, 22,140006],
    [140006, 82,140006,140006, 81,140006, 81,140006, 81,140006,140006, 82,140006],
    [140006,1170, 34,337,1176,140006, 87,140006,1176,337, 34,1170,140006],
    [140006,335,140006,140006, 81,140006, 82,140006, 81,140006,140006,335,140006],
    [140006,367, 82,  0,336,1173, 21,1173,336,  0, 82,367,140006],
    [140006,1159,140006,368, 32,140006, 81,140006, 32,368,140006,1159,140006],
    [140006, 82,140006,140006,140006,411,384,411,140006,140006,140006, 82,140006],
    [140006, 21, 22, 33,368,384, 88,384,368, 33, 22, 21,140006],
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