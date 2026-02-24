main.floors.MT380=
{
    "floorId": "MT380",
    "title": "终焉之城·魔殿第三十八层",
    "name": "终焉之城·魔殿第三十八层",
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
        "2,5": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT380_2_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,4": {
            "0": {
                "condition": "flag:door_MT380_2_4==1",
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
    [1203,351,  0,1223, 81,  0, 47, 81,1223,  0,240092, 23,  0],
    [ 81,240092,335,240092,  0,1221,  0,240092,  0,336,240092,  0,1229],
    [400,386, 82,666,240092, 81,240092,1224, 21, 82,666,240092, 81],
    [1228,400,240092, 82,  0, 22,  0,384,240092,384,240092, 21, 21],
    [ 81,240092, 85,387,1228,240092, 21,  0,1230,1218,412,240092, 21],
    [  0,240092, 87,240092,  0,  0, 81,1227,368, 81,  0,240092,1203],
    [ 22,  0,240092,400,240092, 82,1229, 82,1230,240092,402,  0, 81],
    [  0,1226,  0,1221,  0,383, 82, 21,240092,412,240092,1219,  0],
    [1218,240092,367,  0,351,1224,240092,  0,369,1223, 86,  0, 22],
    [  0, 21,240092,335,1230,  0,1230,1227,  0,240092,350,240092, 81],
    [1227,  0,335, 82,240092,1222,240092, 82,1221,  0,1226,240092,334],
    [ 81,240092,240092,  0,388,  0,388,  0,240092,1222, 81,1219,400],
    [430,  0,1228, 86,  0,372, 88, 21,  0,401,  0,240092,402]
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