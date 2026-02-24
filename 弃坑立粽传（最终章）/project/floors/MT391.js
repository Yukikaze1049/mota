main.floors.MT391=
{
    "floorId": "MT391",
    "title": "终焉之城·魔殿第四十九层",
    "name": "终焉之城·魔殿第四十九层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle28.mp3",
    "firstArrive": [
        "\t[君无天,N1252]\b[hero,3]纯粹的情感碎片.......竟然有如此恐怖的力量......，那个梦...........。",
        "\t[君无天,N1252]\b[hero,3]我们得想个办法先解决它们才行。"
    ],
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
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 20000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 100000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "9,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT391_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT391_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT391_6_11",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT391_6_11",
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
                "condition": "flag:door_MT391_6_11==4",
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
    [240092,240092,240092,240092,240092,240092, 88,240092,240092,240092,240092,240092,240092],
    [240092,349,349,349,349,240092, 22,240092,401,401,401,401,240092],
    [240092,349,349,349,240092,  0,396,  0,240092,401,401,401,240092],
    [240092,349,349,1243,  0,396, 21,396,  0,1246,401,401,240092],
    [240092,349,349, 83,  0,  0,396,  0,  0,240092,401,401,240092],
    [240092,349,349,240092,  0,  0, 22,  0,  0, 83,401,401,240092],
    [240092,240092,240092,240092, 21, 21,668, 21, 21,240092,240092,240092,240092],
    [240092,381,381,240092,  0,  0,396,  0,  0,240092,365,365,240092],
    [240092,381,381, 83,  0,396, 21,396,  0, 83,365,365,240092],
    [240092,381,381,1245,  0,  0,396,  0,  0,1244,365,365,240092],
    [240092,381,381,381,240092,  0, 22,  0,240092,365,365,365,240092],
    [240092,381,381,381,381,240092, 85,240092,365,365,365,365,240092],
    [240092,240092,240092,240092,240092,240092, 87,240092,240092,240092,240092,240092,240092]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}