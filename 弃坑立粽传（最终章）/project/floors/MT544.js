main.floors.MT544=
{
    "floorId": "MT544",
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
    "bgm": "universe6.mp3",
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
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 19198100
        }
    ],
    "parallelDo": "",
    "events": {
        "6,11": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT531\", \"MT532\", \"MT534\", \"MT535\", \"MT536\", \"MT537\", \"MT538\", \"MT539\", \"MT540\", \"MT541\", \"MT542\", \"MT543\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==0)",
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
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,12": {
            "floorId": "MT545",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 500
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,90007, 88,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,90007,338,90007,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  4,670,  4,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  4, 87,  4,  0,  0,  0,  0,  0]
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