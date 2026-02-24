main.floors.MT374=
{
    "floorId": "MT374",
    "title": "终焉之城·魔殿第三十二层",
    "name": "终焉之城·魔殿第三十二层",
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
    [ 21,369,240092,369, 21,240092, 87,240092,401,387,240092, 21, 21],
    [240092,352,1219,352,240092,334,1223,334,240092,1227, 82, 22, 21],
    [ 47,240092, 83,240092,350,1220,402,1220,350,240092, 81, 21,1221],
    [1218, 81,  0,367,240092,240092,1219,240092,240092,1224,666,240092, 81],
    [240092,240092,351,1225,240092,1220,367,1220,  0,399,240092, 22,1226],
    [402,240092,240092,335,  0, 81,412,240092,350,1218,240092,240092, 81],
    [400,240092, 28,1224,336,240092,1224,399,240092, 28,  0, 27,1203],
    [ 81,1218,  0,334, 82,1220,383,1220,382,1222,240092,240092, 81],
    [399,382, 81,1226,399, 81,1218,240092,240092, 29, 81,240092,350],
    [240092, 81,240092,240092,334,1223, 27,240092,352,1225,412, 81,400],
    [ 21,1203, 81,240092,240092,240092,1203,240092,400,240092,  0,1224,382],
    [ 21,240092, 81,1219,385, 81,  0, 81,384,240092,240092, 81,240092],
    [ 81,1222, 21,383, 82,369, 88,369, 82,368,336,1221,402]
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