main.floors.MT338=
{
    "floorId": "MT338",
    "title": "终焉之城·魔殿第七层",
    "name": "终焉之城·魔殿第七层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle23.mp3",
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
        "12,6": {
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
    [240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092],
    [240092,399,240092,337,386,353, 82,337,386,353,240092,380,240092],
    [240092,238,240092, 81,240092,240092,1156,240092,240092, 81,  0,1159,240092],
    [240092,367,  0,  0,1165,  0,  0,  0,1165,410,  0,240092,240092],
    [240092,  0,240092,240092,240092,240092, 82,240092,240092,240092,1160,387,240092],
    [240092, 21,  0,1161,240092, 21,  0,410,240092,  0,411,240092,240092],
    [240092,240092,249,  0,  0,  0, 88,  0,1157, 32,238, 82, 87],
    [240092, 21,  0,1161,240092, 34,  0, 21,240092,  0,240092,240092,240092],
    [240092,  0,240092,240092,240092,240092, 81,240092,240092,1156,240092, 21,240092],
    [240092,367,  0,  0,1160,  0, 32,  0,238,  0, 82,1156,240092],
    [240092,240092, 81,240092,384,240092, 81,240092,383,240092,240092, 21,240092],
    [240092,351,1165,335,240092, 33,1157, 21,240092,240092, 21, 21,240092],
    [240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092]
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