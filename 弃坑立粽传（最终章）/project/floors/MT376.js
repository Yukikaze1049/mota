main.floors.MT376=
{
    "floorId": "MT376",
    "title": "终焉之城·魔殿第三十四层",
    "name": "终焉之城·魔殿第三十四层",
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
        "6,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "2,3": {
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
    [  0, 23,  0,240092,1221, 22, 22,240092,240092, 22,1219,384,240092],
    [240092,240092,240092,240092, 81,240092,240092,1203, 28,  0,240092,1220,382],
    [430,367,240092,400,1222,240092,1218,366, 81, 30, 81,  0,1226],
    [1225,240092, 87,240092,334,1220,383,1220,412,1224,240092,1220,240092],
    [368,401,1219,387,240092,240092,1223,240092,240092,412,240092,334,382],
    [240092,1220, 22,1220, 82,1220,  0,1220,350, 81, 27,1222,240092],
    [ 21,240092, 81,240092, 81,240092, 86,240092,240092,240092,  0, 29, 82],
    [1226, 81,1227,384,1219, 21, 88,240092,399,240092, 21,240092,401],
    [ 21,240092,240092,402,240092,  0, 22,1222, 27,240092,1227,240092,388],
    [240092,240092, 28,1203, 81, 21,1223,240092,240092,402,385, 81,1228],
    [352,336, 82, 29,240092,240092, 81,240092, 21,1203,240092,240092,240092],
    [384,384,240092, 81,240092,350, 81,400,240092, 27, 82,240092,240092],
    [336,352,240092,1225,382,400,240092,402,240092,240092,666, 82,666]
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