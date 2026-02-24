main.floors.MT475=
{
    "floorId": "MT475",
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
    "events": {
        "6,5": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,3": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "0,7": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT475_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT475_6_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_MT475_6_4==2",
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
    [1464,90007,369,  0,337,  0,353,1457,  0,339,  0,90007,1464],
    [90007,90007, 82, 81,90007,90007, 81,90007,90007,  0,355,  0,90007],
    [90007,90007, 23,1461,90007,380,400,380,90007,1450,90007,1311,399],
    [399,90007, 82, 81,90007,396, 88,396,1468,370,90007, 21,90007],
    [ 81,90007,364,1451,90007,90007,  0,90007,386,90007,377,1456,377],
    [399,90007, 82, 81,90007,1467,  0,1467,90007,90007,90007,340,90007],
    [ 81, 82,  0,346,90007,90007,397,90007,361,377,345,1458,90007],
    [ 87,400,1461,399,1468,399,90007,90007,1458,90007,90007, 82,90007],
    [90007,90007, 81,362,90007,345,90007,1467,394,1467,90007,380,90007],
    [399,90007, 81,1451,  0, 82, 22,90007,1451,90007,90007,364,90007],
    [400, 82,  0,  0,1469,377,1458,  0,379,400, 82,348,400],
    [90007,90007,397,90007,1461,393,90007, 81,90007,395, 81,1461,90007],
    [1464,90007,397,90007,401,90007,354,1311,338, 81,369,90007,1464]
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