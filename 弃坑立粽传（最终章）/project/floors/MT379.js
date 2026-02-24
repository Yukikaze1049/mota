main.floors.MT379=
{
    "floorId": "MT379",
    "title": "终焉之城·魔殿第三十七层",
    "name": "终焉之城·魔殿第三十七层",
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
        "1,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,12": {
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
    [394,240092, 22,240092, 22,1219,240092,240092,334,1226,350,240092,240092],
    [1228,335,1219, 21,240092, 81,240092,396,240092, 81, 82,402,666],
    [240092,351,240092,  0, 29,  0,399,1229,  0,1218,240092,240092,240092],
    [383,1224,240092,240092,1203, 27,240092,380,240092,352, 81,1224,335],
    [335,240092, 21,1227,393,240092,240092,240092,240092,368,240092,367,402],
    [1221, 81,240092,240092,1228,377,1227,240092,335,1222,240092,1227,240092],
    [240092,387,401,1218, 47,240092,383,400,1223,240092,240092,387,430],
    [240092, 88,371,240092, 21,240092,1224,240092,  0,1222, 21,240092,240092],
    [240092,240092,240092,412,1223, 81, 21,1221,240092, 30,240092,240092,371],
    [351,367,335,240092,  0,240092,1227,351,412,1203,350,240092, 21],
    [240092,1219,240092,350,1226,240092, 81,240092,240092,334,  0,1223,371],
    [ 81,  0,1221,400,240092,240092, 81,240092, 29,1222,240092, 81,240092],
    [401,240092,240092,366,1228, 81, 87,1229, 30,240092, 21,1221, 21]
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