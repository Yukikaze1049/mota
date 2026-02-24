main.floors.MT343=
{
    "floorId": "MT343",
    "title": "剑祖之坛（一重天）",
    "name": "剑祖之坛（一重天）",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "ground",
    "bgm": "battle24.mp3",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "12,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT343_11_9",
                "operator": "+=",
                "value": "1"
            }
        ],
        "12,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT343_11_9",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "11,9": {
            "0": {
                "condition": "flag:door_MT343_11_9==2",
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
    [140006,140006,140006,140006,140006,140006, 88,140006,140006,140006,140006,140006,140006],
    [140006,140006, 33,346, 33,140006,334,140006, 33, 82,393,1166,140006],
    [140006,400,140006,362, 82, 82,  0,410, 81,140006,140006, 81,140006],
    [140006, 82,1169,394,1163,140006,140006,1168, 81,1168,399, 81,1172],
    [140006,140006, 81,140006, 82,384,1173,  0,1173, 82,140006, 81,140006],
    [140006,  0,368,1168,140006,140006,339,1171,140006,387,1170,  0, 34],
    [140006, 33,140006,384,1163,  0,1175,140006, 34,1175,140006, 81,140006],
    [140006,  0,1157,140006, 81,140006,  0,386,140006, 33,140006, 81,1172],
    [140006,140006, 81, 81,1171, 32,140006,1163, 47,  0, 81, 32,140006],
    [140006,410,1168,140006,367,1159, 22,140006,  0,1170,  0, 85,140006],
    [140006,1157,410,140006, 81,140006,140006,140006,140006,  0, 82,1169,140006],
    [140006, 23, 82,353,1170, 34,140006,383,1171,  0, 83, 87,140006],
    [140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006,140006]
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