main.floors.MT347=
{
    "floorId": "MT347",
    "title": "剑祖之坛（五重天）",
    "name": "剑祖之坛（五重天）",
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
        "6,6": {
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
    [ 21, 21,140006, 34, 33,140006, 87,140006,140006, 22,1170,140006,140006],
    [ 21, 82, 47,140006, 81,140006,412,140006,386,140006, 81,411,140006],
    [140006,140006,1172,140006,411,140006,1176,140006,1169, 81,1157,  0,140006],
    [399,140006, 21,1175,  0,140006, 21,140006,386,140006,  0,1157,140006],
    [ 21, 82,140006, 81,140006,140006,1159,140006,140006,140006,140006, 32, 21],
    [140006,367,  0,335,1157,  0,384,140006, 29,140006,410,140006, 81],
    [402,140006, 81,140006,140006,384, 88,140006,  0,1170,  0,  0,  0],
    [140006, 81,1170, 29,140006,  0,384,140006,1173,140006, 32,140006,1172],
    [ 34,1177,140006,1176,384,140006,1166, 81,  0,1177,  0,140006, 21],
    [  0, 47,140006, 22,140006,334,  0,140006,1173,140006, 81,140006,140006],
    [ 81,140006,140006, 81,140006,140006, 83,140006,335,  0,367,140006, 34],
    [ 33,140006,371,1177,371,140006, 81,140006,140006, 82,140006,140006,  0],
    [ 34,140006, 33,387, 33,140006, 50,140006, 33,399,140006,140006, 23]
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