main.floors.MT375=
{
    "floorId": "MT375",
    "title": "终焉之城·魔殿第三十三层",
    "name": "终焉之城·魔殿第三十三层",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,7": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "7,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT375_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT375_6_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flag:door_MT375_6_9==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "map": [
    [367,335,240092,240092,400,240092, 88,240092,412,400,1223, 30,240092],
    [351,1225, 81,400, 81,1220, 21,1220, 81,240092,240092,1222,240092],
    [367,335,240092, 30,1222,240092,1203,240092,351,  0,335, 81,402],
    [240092,240092,240092,240092,  0,1224,412,1224,  0,240092,240092,240092,240092],
    [385,240092,367,1223,383,240092, 81,240092,367,1226,334,240092,402],
    [1227, 81, 21,402,240092,240092, 83,240092,240092,350,  0, 81,1218],
    [369,240092,1218,240092,240092,402,384,402,240092,1223,240092,240092,402],
    [402,240092,382, 82,1224,384, 87,384,1225,366,400,240092,240092],
    [240092,334,  0,240092,240092,402,384,402,240092, 81,1218,240092,402],
    [ 81,  0, 21,1219,240092,240092, 85,240092,240092,334,  0, 81,1219],
    [399,240092,240092,386,240092,1220, 21,1220,240092,240092,412,240092,352],
    [ 81, 22,240092, 21, 81,240092, 81,240092,240092,402,1227,240092,368],
    [240092,1226, 81,1224,370,401,1221,383, 81, 81,384,240092,240092]
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