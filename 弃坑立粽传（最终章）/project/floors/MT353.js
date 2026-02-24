main.floors.MT353=
{
    "floorId": "MT353",
    "title": "终焉之城·魔殿第十二层",
    "name": "终焉之城·魔殿第十二层",
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
    "bgm": "battle25.mp3",
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
    "events": {
        "2,2": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    2,
                    3
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "10,2": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    10,
                    3
                ]
            },
            {
                "type": "hide",
                "time": 0
            }
        ],
        "7,11": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到400时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times7>=76)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "332Fshop"
                                        },
                                        {
                                            "type": "hide",
                                            "loc": [
                                                [
                                                    6,
                                                    1
                                                ]
                                            ],
                                            "floorId": "MT334",
                                            "remove": true,
                                            "time": 0
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "351Fshop"
                                        }
                                    ],
                                    "false": [
                                        "\t[神秘商人,womanMagician]不够不够。",
                                        {
                                            "type": "exit"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "text": "暂时不用",
                            "action": [
                                "\t[神秘商人,womanMagician]那好吧。"
                            ]
                        }
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT353_2_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT353_2_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT353_10_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT353_10_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "2,3": {
            "0": {
                "condition": "flag:door_MT353_2_3==2",
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
        },
        "10,3": {
            "0": {
                "condition": "flag:door_MT353_10_3==2",
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
    [240092, 33,387, 33,240092,240092,240092,240092,240092, 33,387, 33,240092],
    [240092,339,  0,339,240092,240092, 87,240092,240092,339,  0,339,240092],
    [240092,1185,  0,1185,240092,  0,1184,  0,240092,1185,  0,1185,240092],
    [240092,240092,  0,240092,240092,1185,  0,1185,240092,240092,  0,240092,240092],
    [240092,371,411,371,240092,  0,  0,  0,240092,371,411,371,240092],
    [240092, 21,387,1191, 82, 21,  0, 21, 82,1191,387, 21,240092],
    [240092,240092,240092,240092,240092,1183,412,1183,240092,240092,240092,240092,240092],
    [240092,240092,240092,240092,240092,240092, 83,240092,240092,240092,240092,240092,240092],
    [240092,1187, 82,368, 33,1184, 21,240092, 33,240092, 21,  0,240092],
    [240092,387, 83,  0,384,240092,1186, 81,1188, 81,1186,411,240092],
    [240092,393,240092, 81,240092, 22,399,240092,386,240092,240092,1189,240092],
    [240092,387,240092, 33, 33, 81,386,126,400,240092,399,388,240092],
    [240092,240092,240092,240092,240092,240092, 88,240092,240092,240092,240092,240092,240092]
],
    "bgmap": [
    [  0,  0,  0,  0,1158,1158,1158,1158,1158,  0,  0,  0,  0],
    [  0,  0,  0,  0,1158,1158,1158,1158,1158,  0,  0,  0,  0],
    [  0,  0,  0,  0,1158,1158,1158,1158,1158,  0,  0,  0,  0],
    [  0,  0,  0,  0,1158,1158,1158,1158,1158,  0,  0,  0,  0],
    [  0,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,  0],
    [  0,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,  0],
    [  0,  0,  0,  0,  0,1158,1158,1158,  0,  0,  0,  0,  0],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
    [1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158,1158],
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