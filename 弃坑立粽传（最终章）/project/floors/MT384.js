main.floors.MT384=
{
    "floorId": "MT384",
    "title": "终焉之城·魔殿第四十二层",
    "name": "终焉之城·魔殿第四十二层",
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
        "\t[小粽,hero]\b[hero]好恐怖的气息，这里究竟是怎么一回事！",
        "\t[君无天,N1195]\b[hero,3]这些魔物都是情感灵魂体的范畴，看来前面一定是发生了什么，才会产生如此恐怖的气息。",
        "\t[君无天,N1195]\b[hero,3]这些灵魂体都非常强，尽量避免与他们作战！"
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
    "events": {
        "7,12": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[神秘商人,womanMagician]我可以提升你的商店等级，让商店里相同金钱出售的能力*2.5，购买价格到2200时来找我吧。",
                {
                    "type": "choices",
                    "text": "\t[神秘商人,womanMagician]是否加倍？",
                    "choices": [
                        {
                            "text": "加倍！",
                            "action": [
                                {
                                    "type": "if",
                                    "condition": "(flag:shop_times7>=216)",
                                    "true": [
                                        {
                                            "type": "disableShop",
                                            "id": "351Fshop"
                                        },
                                        "\t[神秘商人,womanMagician]搞定，顺便为了方便你购买，基础价格和购买效果也翻了一倍。",
                                        {
                                            "type": "hide",
                                            "time": 500
                                        },
                                        {
                                            "type": "openShop",
                                            "id": "382Fshop"
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
        "6,0": {
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
    [394,394,394,1239,240092, 82, 87, 82, 81,  0,352, 81,356],
    [240092, 83,240092, 82,666, 82,1239, 82,  0,368,1242,240092,1236],
    [240092, 82,384,1241,  0,1230, 21,1230,240092, 81,401,  0,368],
    [387, 82, 47,240092,1240,  0,240092,401,  0, 81,1238,336, 81],
    [240092, 21, 81,240092,351, 82, 81,1234,383,1231,240092,1240,430],
    [383, 82, 22,401,  0,240092,383, 81, 81,387,240092, 82,240092],
    [ 21,  0, 81,240092, 81,240092,1241,354,1235, 82,  0,353,  0],
    [240092,1236,  0,352,  0, 81,667, 81,369,1238,240092,1237,369],
    [372,240092,336,1242,240092, 22,240092,240092,1230, 81,1230, 81,240092],
    [666, 82,  0,240092,400, 81,387,401, 81, 21,240092, 21,367],
    [388,240092,1231,335, 81,240092,1234,240092,338,1236,352, 81,383],
    [1239, 81,351,240092, 21,1230, 50,1230, 81,240092,1235,402,1237],
    [240092, 21,402,240092,383, 82, 88,126,393,240092,430,240092,240092]
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