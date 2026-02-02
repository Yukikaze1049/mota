main.floors.MT69=
{
    "floorId": "MT69",
    "title": "主塔 69 层",
    "name": "69",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X10006",
    "bgm": "aybhs.mp3",
    "firstArrive": [
        {
            "type": "setEnemy",
            "id": "E922",
            "name": "atk",
            "operator": "*=",
            "value": "100"
        },
        {
            "type": "setEnemy",
            "id": "E922",
            "name": "def",
            "operator": "*=",
            "value": "100"
        },
        {
            "type": "setEnemy",
            "id": "E922",
            "name": "hp",
            "operator": "*=",
            "value": "500"
        },
        {
            "type": "setEnemy",
            "id": "E922",
            "name": "money",
            "operator": "*=",
            "value": "5"
        },
        {
            "type": "setEnemy",
            "id": "E717",
            "name": "hp",
            "operator": "/=",
            "value": "2"
        },
        {
            "type": "setEnemy",
            "id": "E717",
            "name": "money",
            "operator": "-=",
            "value": "80"
        },
        {
            "type": "if",
            "condition": "(flag:hard===0)",
            "true": [
                "获得200w生命值\n推荐套装：双紫幻灭或者骷髅套装或者骑士之力\n推荐路线：用破墙镐提前获取65层紫钥匙内的宝物",
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "2000000"
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,11": [
            "\t[奕开,hero]\b[hero]嗨，圣龙商人，我们又见面啦。",
            "\t[圣龙商人,trader]\b[this]哈哈哈，是啊是啊",
            "\t[奕开,hero]\b[hero]你跑火焰遗迹来做什么？",
            "\t[圣龙商人,trader]\b[this]火焰遗迹的炽火果是难得的火焰属性灵兽进阶的宝物啊！我特地趁着火焰遗迹开启，想来捞一把。",
            "\t[奕开,hero]\b[hero]……",
            "\t[圣龙商人,trader]\b[this]对了，我还收购一些灵兽，你如果有灵兽，可以在我这里出售哦",
            {
                "type": "openShop",
                "id": "itemShop",
                "open": true
            },
            "\t[奕开,hero]\b[hero]行，如果我有多的灵兽，会考虑你的。",
            "\t[圣龙商人,trader]\b[this]当然了，你要是有\r[yellow]圣兽\r[]出售，我也不介意的",
            "\t[奕开,hero]\b[hero]滚！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "0,6": {
            "floorId": "MT68",
            "loc": [
                11,
                6
            ]
        },
        "12,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5],
    [  5,379,379,379,  5,392,  0,924,  0, 21,  0,840,  5],
    [  5,379,  5,  5,  5,  0,  5,  5,  5,  5,  5,  0,  5],
    [  5, 21,  5, 21,  5,713,  5,450,  5, 21,  5,450,  5],
    [  5,841,  5,450,  5,  0,717,451,  5, 21,923, 21,  5],
    [  5, 81,  5,  0, 81,  0,  5,450,  5, 21,  5,  0,  5],
    [ 88,  0,922,  0,  5,  5,  5,  5,  5,  5,  5,713, 87],
    [  5, 81,  5, 82,923, 21,  5,389,435, 81,  0,  0,  5],
    [  5,713,  5,839,  5,450,  5, 21,450,  5,840,  5,  5],
    [  5,389,  5,  0,  5, 21,  5,922,  0,  5, 21,450,  5],
    [  5,450,  5,390,  5, 82,  5,  0,  5,  5,  5,842,  5],
    [  5,122,  5,450,717,  0, 81,  0,  5,452,387, 21,  5],
    [  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5,  5]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        0,
        6
    ]
}