main.floors.MT334=
{
    "floorId": "MT334",
    "title": "终焉之城·魔殿第三层",
    "name": "终焉之城·魔殿第三层",
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
    "firstArrive": null,
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
    "events": {
        "6,1": [
            {
                "type": "openShop",
                "id": "332Fshop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "1,11": {
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
    [240092, 34,  0, 34,240092,  7,131,  8,240092, 34,  0, 34,240092],
    [240092,240092, 81,240092,240092, 23,228, 50,240092,240092, 81,240092,240092],
    [240092, 21,1151, 21, 83,1156,383,1156, 83, 21,1151, 21,240092],
    [240092,240092, 81,240092,240092,1154,  0,1154,240092,240092, 81,240092,240092],
    [240092, 22,1157, 22,240092,  0,367,  0,240092, 22,1157, 22,240092],
    [240092,240092, 82,240092,240092,1154,  0,1154,240092,240092, 82,240092,240092],
    [240092, 33,1159, 33,240092,240092,367,240092,240092, 33,1159, 33,240092],
    [240092,386, 23,386,240092,240092,  0,240092,240092,386, 23,386,240092],
    [240092,240092,240092,240092,240092,1154,367,1154,240092,240092,240092,240092,240092],
    [240092,240092,240092,240092,240092,240092, 82,240092,240092,240092,240092,240092,240092],
    [240092, 87, 83,1150,383,  0, 21,  0,383,1150,  0, 88,240092],
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