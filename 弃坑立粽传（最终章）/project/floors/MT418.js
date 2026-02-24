main.floors.MT418=
{
    "floorId": "MT418",
    "title": "未有之地",
    "name": "未有之地",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT418\", ]);\n}"
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
                    }
                ]
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {
        "6,3": [
            "\t[君无天,N1195]\b[hero,2]注意！这次的记忆所蕴含的情感相比于之前有所不同！",
            {
                "type": "hideStatusBar"
            },
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
            "……………………",
            "时间回到二十七年前…………。",
            {
                "type": "changeFloor",
                "floorId": "MT419",
                "loc": [
                    6,
                    110
                ],
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0],
    [  0,  0, 17,240007,240007,240007,1347,240007,240007,240007, 17,  0,  0],
    [  0,  0, 17,240007, 28,240007,670,240007, 28,240007, 17,  0,  0],
    [  0,  0, 17,240007,1315,669,1315,669,1315,240007, 17,  0,  0],
    [  0,  0, 17,240007, 27,240007,  0,240007, 27,240007, 17,  0,  0],
    [  0,  0, 17,240007,240007,240007,1315,240007,240007,240007, 17,  0,  0],
    [  0,  0, 17,240007, 28,1315,  0,1315, 28,240007, 17,  0,  0],
    [  0,  0, 17,240007,240007,240007,240007,240007,240007,240007, 17,  0,  0],
    [  0,  0, 17, 17, 17, 17, 17, 17, 17, 17, 17,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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