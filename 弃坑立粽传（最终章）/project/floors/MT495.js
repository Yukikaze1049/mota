main.floors.MT495=
{
    "floorId": "MT495",
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
    "events": {
        "8,11": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到4700时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times8>=385)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "472Fshop"
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "493Fshop"
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
            "floorId": "MT493",
            "loc": [
                6,
                12
            ],
            "time": 0
        },
        "2,5": {
            "floorId": "MT494",
            "loc": [
                2,
                5
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [1493,90007,90007,90007,370,354,90007,402,90007,1489,90007,90007,1493],
    [90007,401,394,90007,354,386,90007,  0, 81,  0, 81,  0,90007],
    [90007,90007,1494,90007,386,1499,90007, 47,90007,1489,90007,  0,90007],
    [90007,377, 81,90007,90007, 81,90007,90007,90007,90007,90007,881, 81],
    [345,1482,361,90007,  0,  0,1496,  0,377,1487,  0,  0,395],
    [1487,90007, 87,1282,  0,881,  0,361,90007,  0,1482,347,1482],
    [ 81,90007,90007,90007,1480,90007,90007,90007,90007,90007, 82,90007,90007],
    [353,  0,1491,367,400,351,90007,399,90007,354,  0,90007, 22],
    [90007,1282,90007,90007,1479,90007,  0,1490,371,1481,354, 81,1484],
    [401,396, 81,351,  0,1446,  0,90007,90007,90007,90007, 81,90007],
    [664,90007,1482,90007,90007,90007, 81,90007,90007,90007,1489, 21,1489],
    [90007,400, 21,90007, 47,  0,664,  0,126,90007,387, 81,90007],
    [1493,90007,370,90007,  0, 21, 88, 21,  0,90007,339,90007,1493]
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