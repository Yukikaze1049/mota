main.floors.MT490=
{
    "floorId": "MT490",
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
        "6,2": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT481\", \"MT482\", \"MT483\", \"MT484\", \"MT485\", \"MT486\", \"MT487\", \"MT488\", \"MT489\"]);\n}"
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
                    },
                    {
                        "type": "insert",
                        "loc": [
                            1,
                            0
                        ]
                    }
                ]
            }
        ],
        "6,3": [
            {
                "type": "playBgm",
                "name": "slience3.mp3",
                "keep": true
            },
            "\t[仙琳,fairy]\b[hero]嗯？这里怎么可能有人？？",
            "\t[？？,E1492]\b[this,6,7]...........对不起.......对不起........。",
            "\t[仙琳,fairy]\b[hero]？你怎么了，是有什么难处吗。",
            "\t[？？,E1492]\b[this,6,7]...........对不起.......对不起........。",
            "\t[仙琳,fairy]\b[hero]（奇怪.....这个女人究竟是谁？她为什么要一直说对不起。）",
            "\t[？？,E1492]\b[this,6,7]...........对不起.......对不起........。",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down",
                    "down"
                ]
            },
            "\t[仙琳,fairy]\b[hero]......喂，你没事吧。",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[？？,E1492]\b[this,6,7]对不起！",
            "\t[仙琳,fairy]\b[hero]！！！这气场！！不好！！",
            {
                "type": "battle",
                "id": "E1492"
            },
            {
                "type": "hideStatusBar"
            },
            "\t[仙琳,fairy]\b[hero]呼....呼....你究竟是怎么回事？怎么突然就动手？！",
            "\t[？？,E1492]\b[this,6,7]...........对不起........。",
            "\t[仙琳,fairy]\b[hero]（而且为什么我感觉自己的能力被她完美克制了....这究竟是怎么一回事？）",
            "\t[仙琳,fairy]\b[hero].....你能告诉我为什么你现在有什么难处吗？",
            "\t[？？,E1492]\b[this,6,7]...........对不起........少爷。",
            {
                "type": "playSound",
                "name": "jump.mp3"
            },
            {
                "type": "animate",
                "name": "unknown",
                "loc": "hero"
            },
            "\t[仙琳,fairy]\b[hero]少爷？",
            "\t[？？,E1492]\b[this,6,7]...........对不起........少爷。",
            "\t[仙琳,fairy]\b[hero]你是做了什么什么对不起他的事情吗？",
            "\t[仙雅,E1492]\b[this,6,7]...........对不起........少爷，这都是仙雅的错.......都是........。",
            "\t[仙琳,fairy]\b[hero]仙雅？.......总感觉在哪里听说过这个名字.........。",
            {
                "type": "animate",
                "name": "emmslow",
                "loc": "hero"
            },
            {
                "type": "animate",
                "name": "emmslow",
                "loc": "hero"
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[仙琳,fairy]\b[hero]等等！难道说！！你是！！",
            "\t[仙雅,E1492]\b[this,6,7]这都是仙雅的错.......都是........。",
            "\t[仙琳,fairy]\b[hero]..........仙子一族第一位神灵——\r[gold]仙雅？？！！",
            "\t[仙琳,fairy]\b[hero]但是不对呀，我明明没有感受你拥有皇族血脉......但是为什么你却能够完美克制我的能力呢.....。",
            "\t[仙琳,fairy]\b[hero]而且如果你真是仙雅的话，那你的外貌也不应该是人类的模样呀。",
            "\t[仙琳,fairy]\b[hero]所以你....究竟是什么身份？",
            "\t[仙雅,E1492]\b[this,6,7]..................",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        7
                    ]
                ],
                "remove": true,
                "time": 500
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[仙琳,fairy]\b[hero]突然凭空消失了？！",
            "\t[仙琳,fairy]\b[hero]这是怎么一回事.....？她究竟是谁。为什么会出现在这里，还有为什么她能够完美克制我的能力。",
            "\t[仙琳,fairy]\b[hero]唔，该死，伤势有些重了，必须先暂时停下来治疗一下。",
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
            "就在仙琳治疗她伤势的时候，星钰和君无天已经回到了最初的地方。",
            {
                "type": "changeFloor",
                "floorId": "MT491",
                "loc": [
                    6,
                    144
                ],
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,7": []
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [155,90007,667,666,667, 83, 88, 83,667,666,667,90007,155],
    [155,90007,666,667,666,90007,  0,90007,666,667,666,90007,155],
    [155,90007,90007,90007,90007,90007,670,90007,90007,90007,90007,90007,155],
    [155,155,155,152,152,152,  0,152,152,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,1492,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,  0,  0,  0,  0,  0,152,155,155,155],
    [155,155,155,152,152,152,152,152,152,152,155,155,155],
    [155,155,155,155,155,155,155,155,155,155,155,155,155]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,301,301,301,301,301,301,301,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "bgm": "universe2.mp3"
}