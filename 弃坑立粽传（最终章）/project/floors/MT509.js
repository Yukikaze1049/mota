main.floors.MT509=
{
    "floorId": "MT509",
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
    "bgm": "universe4.mp3",
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
            "value": 200000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 200000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 1000000
        }
    ],
    "parallelDo": "",
    "events": {
        "8,0": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到12400时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times8>=510)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "493Fshop"
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "508Fshop"
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
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "4,9": {
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
    [1513,90007,90007,90007,383,90007, 88,  0,126,90007,401,90007,1513],
    [90007,90007,  0,367,1500,  0,  0,1509,1474,90007, 21,666,90007],
    [401,90007, 21, 81,  0,90007, 81,90007,90007,90007,1511, 21,401],
    [370,90007,90007,384,1282,90007,1510,338,1498,355, 81,90007,90007],
    [354,90007,337, 82,368, 81,370,  0,90007,  0,371,90007,666],
    [338,1508,  0,353,1503,90007,1507,90007,90007,339,  0, 81,1507],
    [90007,  0,90007, 82,90007,90007, 21,  0,90007,1509,90007,90007,90007],
    [1496, 21,1509,346,90007,353,1502,337,1510,  0,90007, 21, 21],
    [ 21,90007,90007,  0,362,90007,  0,90007,  0,368, 81,1500, 21],
    [ 83,90007,90007,90007, 87,1495,336,1502,336,90007,90007, 81,90007],
    [ 21, 21, 21, 21,90007,  0,  0,90007, 81,90007,386,1510,386],
    [90007, 22, 22,90007,90007,1503,90007,345,1511,361,90007,370,90007],
    [1513,90007,90007,90007,90007,340,90007,401,90007,401,90007,90007,1513]
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