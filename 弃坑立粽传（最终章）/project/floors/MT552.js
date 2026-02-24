main.floors.MT552=
{
    "floorId": "MT552",
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
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT552\", ]);\n}"
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
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
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
        ],
        "6,1": [
            "\t[邪神·谶,E1544]\b[this,6,1]而我现在要成为超越被人书写的存在！为此.........",
            "\t[邪神·谶,E1544]\b[this,6,1]我要凭借足以扰乱写手的强力“意志”与“情感”。",
            "\t[邪神·谶,E1544]\b[this,6,1]扭曲这个故事！",
            "\t[邪神·谶,E1544]\b[this,6,1]我要用写手都难以控制的强力“意志”与“情感”。",
            "\t[邪神·谶,E1544]\b[this,6,1]破坏所有的世界线！",
            "\t[邪神·谶,E1544]\b[this,6,1]当我的语言转换为“文字”时.....",
            "\t[邪神·谶,E1544]\b[this,6,1]文  字      由         我   来    破    坏 ！",
            "\t[邪神·谶,E1544]\b[this,6,1]通   过   我      的       语      言",
            {
                "type": "setText",
                "time": 0
            },
            {
                "type": "autoText",
                "text": "\t[邪神·谶,E1544]\b[this,6,1]                   \r[red]破坏自己",
                "time": 500
            },
            {
                "type": "setText",
                "time": 45
            },
            "\t[邪神·谶,E1544]\b[this,6,1]写手  不得不\r[red]破   坏   自   己\r[white]   的  文   字！",
            "\t[邪神·谶,E1544]\b[this,6,1]\r[red]凭     借      我     的 意    志",
            "\t[邪神·谶,E1544]\b[this,6,1]\r[red]扭   曲     这  个   故        事",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "295000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "295000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "600000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT553",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
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
    [370,338,1549,354,370,1138,1138,1138,370,354,1549,338,370],
    [1138,1138, 81,1138,1138,1138,1544,1138,1138,1138, 81,1138,1138],
    [1138,1138, 21,1138,1138,1138,670,1138,1138,1138, 21,1138,1138],
    [335,1138,1551,1138,351,1138,397,1138,335,1138,1551,1138,351],
    [1548, 81,  0, 81,1547,1138,1550,1138,1547, 81,  0, 81,1548],
    [351,1138,1545,1138,335,1138,1550,1138,351,1138,1545,1138,335],
    [1138,1138, 21,1138,1138,1138,  0,1138,1138,1138, 21,1138,1138],
    [ 21,  0,1276, 21,1275,  0,1273,  0,1275, 21,1276,  0, 21],
    [1138,1138,  0,1138,1138,1138,  0,1138,1138,1138,  0,1138,1138],
    [351,1138,1545,1138,335,1138, 21,1138,351,1138,1545,1138,335],
    [1547, 81, 21, 81,1548,1138,  0,1138,1548, 81, 21, 81,1547],
    [335,1138, 81,1138,351,1138, 21,1138,335,1138, 81,1138,351],
    [1138,353,1546,337,1138,1138,  0,1138,1138,337,1546,353,1138]
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