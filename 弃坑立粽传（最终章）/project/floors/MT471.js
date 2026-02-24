main.floors.MT471=
{
    "floorId": "MT471",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
    "bgm": "slience3.mp3",
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
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,9": [
            "\t[小粽,hero]\b[hero]这个是？",
            "\t[世界线初级枢机,E1462]\b[this,6,6]清除！",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
            "floorId": "MT473",
            "loc": [
                6,
                0
            ],
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            "\t[世界线初级枢机,E1462]\b[this,6,6]能量....耗尽。",
            {
                "type": "if",
                "condition": "(flag:梦之泪===1)",
                "true": [
                    "\t[小粽,hero]\b[hero]还挺强的，就在这个暂时休息一下吧。",
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
                    {
                        "type": "playBgm",
                        "name": "GG6.mp3",
                        "keep": true
                    },
                    "\t[？？]..................",
                    "\t[？？]............................",
                    "\t[？？]......................................",
                    "\t[梦（回忆）]对不起，罗天，如果有来世……我或许会选择与你一起，但是这一世……\r[red]你还是为魔王大人付出自己的生命吧！",
                    {
                        "type": "playSound",
                        "name": "049-Explosion02.ogg"
                    },
                    {
                        "type": "changeFloor",
                        "floorId": "MT472",
                        "loc": [
                            111,
                            9
                        ],
                        "time": 0
                    },
                    {
                        "type": "sleep",
                        "time": 500
                    }
                ]
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 81, 33, 33, 81,399,90007, 87,90007,90007, 33, 33,400, 82],
    [ 33,90007,90007,90007,90007,90007, 85,90007,90007,90007,90007,90007, 34],
    [ 33,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007, 33],
    [ 81,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007,400],
    [ 34,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007, 82],
    [ 33,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007, 33],
    [ 81,90007,  0,  0,  0,  0,1462,  0,  0,  0,  0,90007,400],
    [ 34,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007, 82],
    [ 33,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007, 34],
    [ 81,90007,  0,  0,  0,  0,  0,  0,  0,  0,  0,90007,400],
    [ 34,90007,90007,90007,90007,90007, 83,90007,90007,90007,90007,90007, 82],
    [ 33, 81,379,  0,379,  0,379,  0,379,  0,379, 82,400],
    [90007,90007,345,  0, 21,  0, 88,  0, 21,  0,345,90007,90007]
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