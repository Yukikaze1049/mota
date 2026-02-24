main.floors.MT367=
{
    "floorId": "MT367",
    "title": "终焉之城·魔殿第二十五层",
    "name": "终焉之城·魔殿第二十五层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle26.mp3",
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
        "6,5": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,9": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "10,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,0": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT367_8_11",
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
                "condition": "flag:door_MT367_8_11==12",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "map": [
    [1200,1190,1191,240092, 23,1187,430,1187, 23,240092,1191,1190,1200],
    [240092,240092, 81,240092,240092,240092,1187,240092,240092,240092, 81,240092,240092],
    [240092,338,  0,355,  0,240092, 83,240092,  0,355,  0,338,240092],
    [ 21,240092,1190,240092,339,  0,1200,  0,339,240092,1190,240092, 21],
    [ 21,240092,  0,240092,240092,240092, 82,240092,240092,240092,  0,240092, 21],
    [1193,240092,1183,400,240092, 21, 88, 21,240092,400,1183,240092,1193],
    [ 81, 33,367,240092,240092,393, 22,393,240092,240092,367, 33, 81],
    [240092,367,1184, 22,240092,240092,400,240092,240092, 22,1184,367,240092],
    [1186, 81,240092,1188, 21,1185,  0,1185, 21,1188,240092, 81,1186],
    [ 22,240092,399,240092,1192,240092, 87,240092,1192,240092,399,240092, 22],
    [240092,399,1189, 33,386,339, 33,355,386, 33,1189,399,240092],
    [240092,240092, 81,240092,240092,240092, 85,240092,240092,240092, 81,240092,240092],
    [1200,1190,1191,240092,430,393,401,393,430,240092,1191,1190,1200]
],
    "bgmap": [
    [  0,1158,1158,1158,1158,1158,  0,1158,1158,1158,1158,1158,  0],
    [  0,1158,  0,  0,  0,1158,  0,1158,  0,  0,  0,1158,  0],
    [  0,1158,  0,  0,  0,  0,  0,  0,  0,  0,  0,1158,  0],
    [  0,1158,1158,1158,1158,1158,  0,1158,1158,1158,1158,1158,  0],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,  0,  0,  0,  0,  0,  0,  0,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}