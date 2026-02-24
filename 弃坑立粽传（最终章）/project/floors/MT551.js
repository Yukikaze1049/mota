main.floors.MT551=
{
    "floorId": "MT551",
    "title": "未知之地",
    "name": "未知之地",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
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
            "type": "function",
            "function": "function(){\ncore.removeMaps(\"MT0\", \"MT550\")\n}"
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
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT551\", ]);\n}"
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
            "\t[小粽,hero]\b[hero]邪神·谶！快停下，这种恶趣味的游戏真的有意思吗？！",
            "\t[小粽,hero]\b[hero]你到底想要干什么，如果只是想杀死我何必大费周章？！",
            "\t[邪神·谶,E1544]\b[this,6,1]我有一个想法。",
            "\t[邪神·谶,E1544]\b[this,6,1]这个想法是：我的存在是\r[gold]“被书写出来的”。",
            "\t[小粽,hero]\b[hero]“被书写出来的”？",
            "\t[小粽,hero]\b[hero]什么意思？？",
            "\t[邪神·谶,E1544]\b[this,6,1]很简单，我是被谁书写出来的在某个剧本的一部分。",
            "\t[邪神·谶,E1544]\b[this,6,1]不，不对，不仅是我。",
            "\t[邪神·谶,E1544]\b[this,6,1]\r[gold]你们也不过只是剧本中的一部分。",
            "\t[小粽,hero]\b[hero]你在开什么玩笑？！！",
            "\t[邪神·谶,E1544]\b[this,6,1]对，“你在开什么玩笑”。",
            "\t[邪神·谶,E1544]\b[this,6,1]你刚才所说的这句话，这句台词也是被书写出来的。",
            "\t[邪神·谶,E1544]\b[this,6,1]而我现在要做的是让既定的和谐崩溃。",
            "\t[邪神·谶,E1544]\b[this,6,1]对此，我需要让所有的意志，所有的情感..........",
            "\t[邪神·谶,E1544]\b[this,6,1]\r[red]都按照我想的改写！",
            {
                "type": "setValue",
                "name": "status:atk",
                "operator": "-=",
                "value": "325000000"
            },
            {
                "type": "setValue",
                "name": "status:def",
                "operator": "-=",
                "value": "280000000"
            },
            {
                "type": "setValue",
                "name": "status:mdef",
                "operator": "-=",
                "value": "375000000"
            },
            {
                "type": "changeFloor",
                "floorId": "MT552",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": "MT551",
            "loc": [
                6,
                12
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
    [1138,1138,1275,1274,1275,1138,1138,1138,354,  0,386,  0,338],
    [370,1138,666,1549,666,1138,1544,1138,  0,354, 23,338,  0],
    [338,1138,1138, 81,1138,1138,670,1138,1138,1138,1549,1138,1138],
    [1546, 81, 21,1546, 21,1138,1550,1138,1552,  0,1552,  0,1552],
    [354,1138,1138, 81,1138,1138,1550,1138,352,1548,384,1548,336],
    [1138,1138,383,  0,335,1138, 83,1138,1552,  0,1552,  0,1552],
    [  0,1273, 24,1138,1551,  0,  0,1138,1138,1138, 81,  0,1138],
    [1547,1138,367,1138,1138,1138,1547,1551,335,1547,  0,  0,1276],
    [  0,367,1548,1138,1138,1552,1273,1552,1138,1138,1551,1138,1138],
    [1546,1138,367,1138,1138,1138,  0,1138,335,1548,  0,1548,335],
    [  0,1276,1138,1138,1138,1138,1545,335, 81,351,1138,351,  0],
    [1549,1138,1138,1274,1275,1138, 50,1138,1138, 81,1138, 81,1138],
    [  0,393,1138,1275,1274, 24, 88,1138,383,1547,1138,1547,383]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
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