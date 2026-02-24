main.floors.MT378=
{
    "floorId": "MT378",
    "title": "终焉之城·魔殿第三十六层",
    "name": "终焉之城·魔殿第三十六层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "holy3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle22.mp3",
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
            "value": 10000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 10000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 50000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "1,7": {
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
    [240092,1226, 81,399, 28,240092,386,338,354,370,240092,666,402],
    [ 81,400,240092, 27,1225,240092,240092,240092,1228,240092,240092,240092, 82],
    [1218,240092,240092,240092, 81,240092, 21,1226, 30,  0,240092,666,372],
    [383,240092,240092,334,1222, 81,1224,399,240092,1223,240092,356,340],
    [ 81,240092,1203, 81, 21,240092,412,240092,  0,350,240092,356,340],
    [1224,240092,402,240092, 81,240092,240092,240092,334,1219, 82,1229,388],
    [430,240092,240092,370,1223,369, 81,386,240092, 22,240092,240092,240092],
    [240092, 87,1224,402,240092,1221,240092,1219,240092,240092,240092,402,400],
    [351,240092,240092, 81,1226,368,240092, 28,1218,400,240092,240092,399],
    [335,1227, 21,240092,399,240092, 29,  0,240092, 21,382,240092, 81],
    [351,240092, 29,  0,1203, 21,1222,240092,384,240092, 81,1223,366],
    [335, 81,1224, 27,240092,402,387,402,1219, 21,1203,350,240092],
    [351,240092,367,240092,240092,240092, 88,240092,240092,240092,240092,1221,383]
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