main.floors.MT496=
{
    "floorId": "MT496",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 50000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 100000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 250000
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
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT496_2_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT496_2_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT496_2_12",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,11": [
            {
                "type": "setValue",
                "name": "flag:door_MT496_2_12",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,12": {
            "0": {
                "condition": "flag:door_MT496_2_12==4",
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
    [1493,90007,430,90007,363,363,1499,363,363,90007,399,90007,1493],
    [90007,90007,  0,90007,90007,90007, 81,90007,90007,90007,1446,384,90007],
    [ 21, 21,1446, 21,90007,1482,400,1482,90007,1490,383,1480,368],
    [90007,90007, 81,90007,353,90007, 81,90007,  0,368,90007,90007, 81],
    [401,  0,881,  0,1480, 21,664, 21,1479,  0,90007,402,1496],
    [90007, 81,90007,  0,90007,90007, 22,90007,90007,368,90007,90007, 81],
    [372,1496,90007, 81,355,1501, 88,1501,339, 81,90007, 22,1499],
    [90007,356,90007,  0,90007,90007,1496,90007,90007,  0,90007,90007, 83],
    [377,1494,90007, 81,340,1501,  0,1501,356, 81,90007,1474,1282],
    [90007,345,90007,  0,90007,90007,1488,90007,90007,  0,90007,1474,1474],
    [379,1499,90007, 81,361,1501,  0,1501,345, 81,90007,1474,1474],
    [90007,363,1282,90007,90007,90007,1282,90007,90007, 81,90007,90007,90007],
    [1493,90007, 85,1475,1475,90007, 87, 21, 82,401,90007,90007,1493]
],
    "bgmap": [

],
    "fgmap": [
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "universe3.mp3"
}