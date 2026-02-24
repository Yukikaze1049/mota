main.floors.MT390=
{
    "floorId": "MT390",
    "title": "终焉之城·魔殿第四十八层",
    "name": "终焉之城·魔殿第四十八层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle28.mp3",
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
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 100000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "8,12": {
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
    [ 81,401,402,240092,240092,240092, 87,240092,401,666, 82,401,401],
    [401,240092, 81,401,402, 81, 22, 82,401,240092,240092,240092,666],
    [402,240092,240092,  4,  4,  4,  0,240092,240092,240092,668,240092, 82],
    [ 81,240092,  4,1273,669,  4, 22,  0, 83,  4, 82,240092,401],
    [401,240092,666,  4,669,  4,  0,  4, 83,  4,668,240092,401],
    [401,240092,402,  4,669,  4, 21,  4,669,  4, 82,240092,666],
    [ 81,240092, 81,  4,669,  4,  0,  4,669,  4,668,240092, 82],
    [401,240092,666,  4, 83, 83, 21,  4,669,  4, 82,240092,401],
    [401,240092,402,  4,  4,240092,  0,  4,669,  4,668,240092,667],
    [ 81,240092, 81,666,402,240092, 21,  4,1273,  4, 82,240092, 82],
    [401,240092,240092,240092, 81,240092,  0,  4,  4,  4,668,240092,401],
    [401,240092,240092,240092,666,240092,  0,  0,  0,240092, 82,240092,667],
    [ 81,666, 81,666, 81,240092,240092,240092, 88,240092,667,401, 82]
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