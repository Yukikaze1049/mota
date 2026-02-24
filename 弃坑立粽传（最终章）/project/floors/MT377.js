main.floors.MT377=
{
    "floorId": "MT377",
    "title": "终焉之城·魔殿第三十五层",
    "name": "终焉之城·魔殿第三十五层",
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
        "2,3": {
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
    "afterBattle": {
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT377_6_11",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,11": {
            "0": {
                "condition": "flag:door_MT377_6_11==2",
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
    [384,240092,412,240092,399, 22,1224,240092,350,402,350,240092,334],
    [1227, 81,1222,  0,1203,240092,335,240092,240092,1221,240092,350,  0],
    [352,240092,240092, 28,240092,240092,1222,  0,1219,367,240092,1227,382],
    [240092,240092, 88,1226, 27,240092,334,240092,240092, 21,383, 81,240092],
    [402,240092,240092, 29,  0, 82, 81,399,240092,1225,240092,240092,370],
    [1221, 81,399,  0,240092,240092, 30,1226, 29,  0, 29, 81,1228],
    [ 81,240092,240092,1223, 30,240092,240092, 21,240092,1218,400,240092,386],
    [1219,401,240092, 27, 81,240092,334,1203,240092,412,240092,240092,402],
    [240092,240092,240092,1224,412, 82,1227,350,240092,371,240092,240092,240092],
    [1220,  0,1220,240092,240092,240092, 81,240092,240092,240092,1220,  0,1220],
    [  0, 81,  0, 81,350,1220,388,1220,334, 81,  0, 81,  0],
    [1220,  0,1220,240092,1228,240092, 85,240092,1228,240092,1220,  0,1220],
    [240092,1219,240092,240092,387,240092, 87,240092,387,240092,240092,1219,240092]
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