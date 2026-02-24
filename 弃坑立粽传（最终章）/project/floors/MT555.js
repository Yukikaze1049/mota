main.floors.MT555=
{
    "floorId": "MT555",
    "title": "未知之地",
    "name": "未知之地",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe4.mp3",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]可恶！这究竟是什么能力，为什么我会一直陷入你这个轮回之中！",
        "\t[小粽,hero]\b[hero]为什么会这样？！",
        "\t[邪神·谶,E1544]\b[this,6,1]我改写了masterdata的设定值，所以我才能让你一直陷入这里。",
        "\t[小粽,hero]\b[hero]设定值？那是什么东西。",
        "\t[小粽,hero]\b[hero]你究竟在说些什么？",
        "\t[邪神·谶,E1544]\b[this,6,1]那是你完全无法理解的 更为高层次的语言。",
        "\t[邪神·谶,E1544]\b[this,6,1]而现在的我的真实实力，将会彻底颠覆你们认知的一切！",
        "\t[邪神·谶,E1544]\b[this,6,1]无论是你，还是守望者，对于现在的本座来说如同虚设！",
        "\t[邪神·谶,E1544]\b[this,6,1]我在这里，可以看见你们以及世界的一切！",
        "\t[邪神·谶,E1544]\b[this,6,1]很遗憾，你们是完全没有胜算的。",
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
        {
            "type": "changeFloor",
            "floorId": "MT550",
            "loc": [
                6,
                111
            ],
            "time": 0
        }
    ],
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
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 25000000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,1": [
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "350000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "360000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "575000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT556",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
            }
        ],
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT553\", ]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==1)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    {
                        "type": "hide",
                        "remove": true
                    },
                    {
                        "type": "insert",
                        "loc": [
                            6,
                            1
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [1138, 21,386, 21,1138,1138,1138,1138,1138,337,1273,353,1138],
    [1138,370, 21,370,1138,1138,1544,1138,1274,1138,1546,1138, 23],
    [1138, 21,354, 21,1138,1138,670,1138,354,1138,  0,1138, 21],
    [1138,338,1550,338,1138,1138, 83,1138,1274,1549,  0,1138, 21],
    [1138,1138, 81,1138,1138,1138,1276,1138,338,1138,  0,  0,1549],
    [337,1138,  0,338,1138,1138,1550,1138,1138,1138,1138, 81,1138],
    [1546, 81,354,  0,  0,1550,  0,1550,  0,  0,  0,  0,354],
    [353,1138,1273,1138,355,1138, 21,1138,355,1138,  0,338,  0],
    [369,1138,338,1138,1274,1138,  0,1138,1274,1138,1138,  0,1138],
    [ 81,1138,1547,  0,1138,1276,1395,1276,1138,  0,370,1547,1273],
    [1273,1138,  0,354,1138,1138, 83,1138,1138,338,  0,1138, 82],
    [ 81,1138,1138,1546,1138,  0,  0,  0,1138,1546,1138,1138,1274],
    [1273,1138,352,384,1138,  0,  0,  0,1138,384,336,1138,1273]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}