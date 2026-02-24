main.floors.MT473=
{
    "floorId": "MT473",
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
        "5,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到1300时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times8>=210)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "459Fshop"
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "472Fshop"
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
        "6,0": {
            "floorId": "MT471",
            "loc": [
                6,
                0
            ],
            "time": 0
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [90007,90007,90007,90007,90007,90007, 88,90007,90007,90007,90007,90007,90007],
    [346,346,346,346,346, 24,396, 24,362,362,362,362,362],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [402,402,401,402,402, 24,396, 24,412,412,430,412,412],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [ 22, 22, 21, 22, 22, 24,396, 24, 21, 21, 47, 21, 21],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [90007,90007, 22, 81, 81, 81,380, 82, 21, 21, 21,90007,90007],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [90007,90007, 22, 81, 81, 81,380, 82, 21, 21, 21,90007,90007],
    [90007,90007,90007,90007,90007,126,  0,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007,380,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007, 87,90007,90007,90007,90007,90007,90007]
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