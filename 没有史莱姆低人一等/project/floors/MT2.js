main.floors.MT2=
{
    "floorId": "MT2",
    "title": " 2 ",
    "name": "2",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "mingyuetianya.mp3",
    "firstArrive": [
        "本层任意一件物品(怪物)都是宝物，获取宝物之后，立即进入试炼！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "获得试炼效果，飞行器*99",
            {
                "type": "setValue",
                "name": "item:centerFly",
                "operator": "+=",
                "value": "99"
            },
            {
                "type": "setValue",
                "name": "flag:fly",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ]
    },
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {
        "5,11": [
            "获得试炼效果，10%反弹",
            {
                "type": "setValue",
                "name": "item:I498",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:fantan",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "10,2": [
            "试炼效果，获得200%的吸血，且无视怪物吸血效果",
            {
                "type": "setValue",
                "name": "item:I514",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "10,7": [
            {
                "type": "setValue",
                "name": "item:I532",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:huixue",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "2,7": [
            "获得试炼效果，格挡18%。",
            {
                "type": "setValue",
                "name": "item:shield1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:gedang",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "4,2": [
            "获得试炼效果，拥有99个炸弹",
            {
                "type": "setValue",
                "name": "item:bomb",
                "operator": "+=",
                "value": "99"
            },
            {
                "type": "setValue",
                "name": "flag:bomb",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "3,9": [
            "获得试炼效果，30%穿透",
            {
                "type": "setValue",
                "name": "item:sword1",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:chuantou",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "4,6": [
            "获得试炼效果，10%反弹",
            {
                "type": "setValue",
                "name": "item:I498",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:fantan",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "5,4": [
            "获得试炼效果，魔法师\n\r[red]本试炼暂且有bug，后续会修复或者删除，且本次不会记成绩，玩家可选择其他路线\r[]",
            {
                "type": "setValue",
                "name": "status:manamax",
                "value": "100"
            },
            {
                "type": "setGlobalFlag",
                "name": "s:enableMana",
                "value": true
            },
            {
                "type": "setValue",
                "name": "item:I365",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I364",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "8,11": [
            "获得试炼效果，减伤40%",
            {
                "type": "setValue",
                "name": "item:I501",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:jianshang",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "6,9": [
            "获得试炼效果，连击。",
            {
                "type": "setValue",
                "name": "item:I500",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:lianji",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ]
    },
    "afterGetItem": {
        "11,1": [
            "获得试炼效果，所有商店打五折",
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "11,3": [
            "获得试炼效果，绿宝石效果翻倍，且额外获得10%护盾的负伤效果，该10%护盾效果不受净化、破盾影响",
            {
                "type": "setValue",
                "name": "item:I1175",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setGlobalValue",
                "name": "greenGem",
                "value": 4
            },
            {
                "type": "setValue",
                "name": "flag:lv",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "7,4": [
            "获得试炼效果，绿钥匙*99",
            {
                "type": "setValue",
                "name": "item:greenKey",
                "value": "99"
            },
            {
                "type": "setValue",
                "name": "flag:lvyaoshi",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "11,6": [
            "获得试炼效果，便携血瓶*99，圣水*1",
            {
                "type": "setValue",
                "name": "item:I496",
                "operator": "+=",
                "value": "99"
            },
            {
                "type": "setValue",
                "name": "flag:bianxie",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "11,11": [
            "获得试炼效果，血瓶效果翻倍",
            {
                "type": "setGlobalValue",
                "name": "greenPotion",
                "value": 100
            },
            {
                "type": "setValue",
                "name": "flag:xue",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "2,5": [
            "获得试炼效果，全塔蓝宝石效果翻倍，红宝石和绿宝石效果减半",
            {
                "type": "setValue",
                "name": "item:I488",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setGlobalValue",
                "name": "redGem",
                "value": 1
            },
            {
                "type": "setGlobalValue",
                "name": "blueGem",
                "value": 4
            },
            {
                "type": "setGlobalValue",
                "name": "greenGem",
                "value": 1
            },
            {
                "type": "setValue",
                "name": "flag:lanbaoshi",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "2,2": [
            "获得试炼效果，拥有魔攻，但全塔蓝宝石无效",
            {
                "type": "setValue",
                "name": "item:I487",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setGlobalValue",
                "name": "blueGem",
                "value": 0
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "1,11": [
            "获得试炼效果，全塔蓝宝石效果翻倍，红宝石效果和绿宝石效果减半",
            {
                "type": "setValue",
                "name": "item:I488",
                "value": "1"
            },
            {
                "type": "setGlobalValue",
                "name": "redGem",
                "value": 1
            },
            {
                "type": "setGlobalValue",
                "name": "blueGem",
                "value": 4
            },
            {
                "type": "setGlobalValue",
                "name": "greenGem",
                "value": 1
            },
            {
                "type": "setValue",
                "name": "flag:lanbaoshi",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ]
    },
    "afterOpenDoor": {
        "1,7": [
            "获得试炼效果，黄钥匙buff",
            {
                "type": "setValue",
                "name": "item:I502",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:huangkey",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ],
        "9,5": [
            "获得试炼效果，黄钥匙buff",
            {
                "type": "setValue",
                "name": "item:I502",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:huangkey",
                "value": "1"
            },
            {
                "type": "changeFloor",
                "floorId": "SL1",
                "loc": [
                    6,
                    11
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [152,152,152,152,152,152,152,152,152,152,152,152,152],
    [152,  0,  0,  0,152,  0, 87,  0,  0,  0,  0,441,152],
    [152,  0, 27,  0,204,  0,  0,  0,  0,152,208,  0,152],
    [152,  0,  0,152,  0,  0,  0,  0,  0,152,  0, 29,152],
    [152,  0,152,152,  0,217,  0, 24,  0,152,  0,  0,152],
    [152,  0, 28,  0,  0,  0,  0,  0,  0, 81,  0,  0,152],
    [152,  0,  0,  0,202,152,152,152,  0,  0,  0, 56,152],
    [152, 81,206,  0,  0,  0,152,  0,  0,  0,201,  0,152],
    [152,  0,  0,  0,  0,  0,152,  0,152,  0,  0,  0,152],
    [152,152,  0,209,152,  0,205,  0,152,152,152,  0,152],
    [152,  0,  0,  0,  0,  0,  0,  0,152,  0,  0,  0,152],
    [152, 28,  0,152,  0,202,  0,  0,203,  0,  0, 31,152],
    [152,152,152,152,152,152,152,152,152,152,152,152,152]
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