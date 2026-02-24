main.floors.MT503=
{
    "floorId": "MT503",
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
        "4,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,8": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "12,10": [
            {
                "type": "setValue",
                "name": "flag:door_MT503_6_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "0,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT503_6_9",
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
                "condition": "flag:door_MT503_6_9==2",
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
    [1506,90007,402,90007, 88,361,  0,90007,664,90007,397,90007,1506],
    [90007,401, 81, 81,345,  0,345, 81,1494,  0,1502,381,90007],
    [1488,90007,402,90007,90007,90007,90007,90007,402,90007,  0, 81,1282],
    [ 82,90007, 82,1501,90007,352,90007, 81,881, 81,1446,90007,666],
    [345,90007,400,  0,384,  0,90007,401,  0,1482,  0, 82,380],
    [  0, 82,  0,1501,90007,1484,387,1491,90007,400,1496,90007,396],
    [361,90007,1494,90007,90007,90007, 82,90007,90007,90007,338,338,90007],
    [1500, 81, 21,90007,380,401,1282,401,380,90007, 81,90007,90007],
    [377,90007,400, 81,1502,90007, 87,90007,1502, 81,1481,402,402],
    [90007,90007, 83,90007,90007,1475, 85,1475,90007,90007, 81,90007, 82],
    [90007, 22,1498, 22,90007,90007, 81,90007,90007, 22,1499,90007,1488],
    [90007, 22, 21, 22,90007,395,1498,395,90007,90007, 81,90007,90007],
    [1506,90007, 22,90007,90007,401,395,401,90007, 23,1496,90007,1506]
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