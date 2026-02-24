main.floors.MT476=
{
    "floorId": "MT476",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
    "bgm": "universe1.mp3",
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
        "0,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "10,7": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT476_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT476_6_8",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,12": [
            {
                "type": "setValue",
                "name": "flag:door_MT476_6_8",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,8": {
            "0": {
                "condition": "flag:door_MT476_6_8==3",
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
    [1464,90007,90007, 22,90007,400,1451,400,90007, 82,402,90007,1464],
    [90007, 81, 21,1456,400,90007, 81,90007,399, 81,90007,430,90007],
    [ 22,1468,90007,90007,1450,  0,1469,  0,90007,  0,90007,1451,  0],
    [90007,399,355,90007,412,90007, 81,395,  0,379,  0,399,1470],
    [1456,339,1457, 33,90007, 33,90007,90007,90007, 81,379,90007, 82],
    [348,90007,338,1444,370, 82,393, 22,377, 81,  0,90007, 82],
    [90007,376,90007, 82,1467,90007,1467,1456,1467,90007, 83,402,392],
    [ 88,392,430, 21, 23,1461, 47,1461,402,1461, 87,402,392],
    [90007,376,90007, 81,1467,90007,1467,90007,1467,90007, 85,90007,392],
    [430,90007,  0,1435,337,1469,  0,  0, 81,380,  0,90007,1469],
    [ 82,1311,353,1461, 81,90007,1470,  0,1458,  0,396,  0, 82],
    [90007,355,90007,1461, 83,90007,90007,90007,90007,90007,  0,380,90007],
    [1464,90007,90007,1461,664,90007,1451,1451,1451, 81,396,90007,1464]
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

]
}