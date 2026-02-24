main.floors.MT386=
{
    "floorId": "MT386",
    "title": "终焉之城·魔殿第四十四层",
    "name": "终焉之城·魔殿第四十四层",
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
        "2,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "7,9": {
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
    [386,240092,386, 81,402,338,354,370,240092,353,401, 22,240092],
    [1239,240092,1239, 81, 82,240092,1241,240092,240092,  0,1242,240092,240092],
    [ 21, 81,  0,240092, 81,  0,400,1235,  0,1234,240092,346,378],
    [ 82,384,1234,240092,240092,367,1237,335,240092,  0,366,1238,362],
    [  0,240092,371, 82, 22,1230,  0,1230,240092,350,1231,240092,240092],
    [350,1235,  0,1237,240092,240092, 81,240092,402, 81,385,240092, 22],
    [  0,366,240092, 21,1230,  0,1242,388,1240,  0,1238, 81,1231],
    [1236,240092, 88,  0,393,1240,  0,240092,  0,1242,  0,240092,240092],
    [  0, 21,240092, 21,1230, 81,430, 82, 82,240092,384,1235,400],
    [ 21,1241,352,240092,383, 81,240092, 87,1240,335,1236,240092,1237],
    [1231,240092,336,240092,240092,1236,351,240092,351, 81,240092,1242,  0],
    [353,240092, 81,1238,240092,402,240092,1239, 81,240092,1241,  0,1239],
    [  0, 21,240092,368,384, 82,387,401,240092,402,340,240092,380]
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