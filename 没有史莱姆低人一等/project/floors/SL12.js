main.floors.SL12=
{
    "floorId": "SL12",
    "title": "魔塔 12 层",
    "name": "魔塔12",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "Aeterna.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,4": [
            {
                "type": "if",
                "condition": "switch:A",
                "true": [],
                "false": [
                    "\t[阿史,hero]\b[hero]咦，这里怎么有一朵花？",
                    {
                        "type": "setValue",
                        "name": "switch:A",
                        "value": "true"
                    }
                ]
            },
            {
                "type": "if",
                "condition": "(item:cross===1)",
                "true": [
                    {
                        "type": "jumpHero",
                        "loc": [
                            7,
                            5
                        ],
                        "time": 500
                    },
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            7,
                            4
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "magicMaster",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ]
                    },
                    "\t[阿史,hero]\b[hero]大法师，你怎么在这里？",
                    "\t[大法师,magicMaster]\b[this,7,4]我为何不能在这里？",
                    "\t[大法师,magicMaster]\b[this,7,4]对了，史莱姆一族得罪了魔王，你还敢到处晃？",
                    "\t[阿史,hero]\b[hero]大法师，您也要帮魔王对付史莱姆一族吗？",
                    "\t[大法师,magicMaster]\b[this,7,4]没必要，我的实力对付史莱姆实在是太以大欺小了",
                    "\t[阿史,hero]\b[hero]那您在这里找什么？",
                    "\t[大法师,magicMaster]\b[this,7,4]我在找一件宝物，那是我挚友吸血鬼所畏惧之物",
                    "\t[阿史,hero]\b[hero]是不是这个？",
                    {
                        "type": "setValue",
                        "name": "item:cross",
                        "operator": "-=",
                        "value": "1"
                    },
                    "\t[大法师,magicMaster]\b[this,7,4]十字架，是的，竟然在这里！",
                    "\t[阿史,hero]\b[hero]是的，魔王利用此物对付吸血鬼，我将它藏了起来。因为我们都是魔塔的同胞，都是魔塔底层的怪物，不能这样算计来算计去的。",
                    "\t[大法师,magicMaster]\b[this,7,4]……",
                    "\t[大法师,magicMaster]\b[this,7,4]想不到，你一个史莱姆，竟然有如此大的觉悟。在深渊之中期待光芒笼罩……是多么可笑的事，每个人却一直在做……当只有几人在深渊之上，那么就光明成了罪恶，罪恶为什么又成了“光明”呢？这个世界之中还有几个人，是……清醒之人呢？愿你们都是清醒之人，不被世俗的欲望玷污",
                    "\t[阿史,hero]\b[hero]大法师……",
                    "\t[大法师,magicMaster]\b[this,7,4]魔塔的怪物们是不应该自相残杀，如果魔王对付史莱姆一族，你可以让史莱姆幸存的怪物来找我，我愿意庇护它们。",
                    "\t[阿史,hero]\b[hero]大法师，谢谢您，您真是一位德高望重的前辈。",
                    {
                        "type": "setValue",
                        "name": "flag:youyi",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                7,
                                4
                            ]
                        ],
                        "remove": true
                    }
                ],
                "false": []
            }
        ]
    },
    "changeFloor": {
        "3,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,205,  0,443,  0,1233,  0,205,  0, 29,  1],
    [  1,  0, 27,  1,  1,  1,  1,  1, 81,  1,  1,443,  1],
    [  1, 82,  1,  1,443,368,443,  1,445,  0,  1,  0,  1],
    [  1,205,  0,  1,  1,206,  1,168,  1,205,  1,1242,  1],
    [  1,  0,1238,  0, 28,  0,1239,  0,206,  0,  1,  0,  1],
    [  1,443,  1,  1,  1,  1,  1, 81,  1,367,  1, 21,  1],
    [  1, 21,  1,443,  0, 21,  1,  0,  1,  1,  1,  0,  1],
    [  1,  0,206,  0, 29,  0,  1,1242,  0,443,  0,1238,  1],
    [  1, 81,  1,  1,  1, 81,  1,  0,  1,  1,  1,  1,  1],
    [  1,205,  0,  0,  1,1233,  1, 21,  1,  0, 21, 28,  1],
    [  1,  0,443, 88,  1,  0, 29,  0, 81,1233, 29,443,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        3,
        11
    ]
}