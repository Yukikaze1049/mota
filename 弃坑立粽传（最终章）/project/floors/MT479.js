main.floors.MT479=
{
    "floorId": "MT479",
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
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            "重生怪可以不用打。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT452\", \"MT453\", \"MT454\", \"MT455\", \"MT456\", \"MT457\", \"MT458\", \"MT459\", \"MT460\", \"MT461\", \"MT462\", \"MT463\", \"MT464\", \"MT465\", \"MT466\", \"MT467\", \"MT468\", \"MT469\", \"MT470\", \"MT471\", \"MT472\", \"MT474\", \"MT475\", \"MT476\", \"MT477\", \"MT478\", \"MT479\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount>68)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "insert",
                        "loc": [
                            1,
                            0
                        ]
                    }
                ]
            }
        ],
        "1,0": [
            "\t[小粽,hero]\b[hero]呼...这样就差不多了，不知道仙琳他们怎么样了。",
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            "与此同时....",
            {
                "type": "showStatusBar"
            },
            {
                "type": "setHeroIcon",
                "name": "hero4.png"
            },
            {
                "type": "setValue",
                "name": "status:name",
                "value": "'仙琳'"
            },
            {
                "type": "changeFloor",
                "floorId": "MT481",
                "loc": [
                    6,
                    12
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT479_3_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,3": {
            "0": {
                "condition": "flag:door_MT479_3_3==9",
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
        },
        "9,3": {
            "0": {
                "condition": "flag:door_MT479_3_3==9",
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
    [1464,90007,90007,1472,90007,90007, 87,90007,90007,1473,90007,90007,1464],
    [90007,90007,1472,1472,1472,90007,670,90007,1473,1473,1473,90007,90007],
    [90007,1474,1474,1472,1474,90007,  0,90007,1474,1473,1474,1474,90007],
    [90007,90007,90007, 85,90007,90007,  0,90007,90007, 85,90007,90007,90007],
    [90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,  0,1462,  0,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,1462,  0,1462,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,1462,  0,1471,  0,1462,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,1462,  0,1462,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,  0,1462,  0,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007],
    [90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007],
    [1464,90007,90007,90007,90007,90007, 88,90007,90007,90007,90007,90007,1464]
],
    "bgmap": [

],
    "fgmap": [
    [  0, 17, 17,  0,  0, 17,  0, 17,  0,  0,  0, 17,  0],
    [ 17, 17,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0, 17],
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