main.floors.MT99=
{
    "floorId": "MT99",
    "title": "主塔 99 层",
    "name": "99",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X70031",
    "bgm": "canlie.mp3",
    "firstArrive": [
        "\t[???,N1148]\b[this,6,4]何人敢闯皇宫?",
        {
            "type": "jumpHero",
            "loc": [
                6,
                9
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[奕开,hero]\b[hero]是我，奕开。",
        "\t[立天,N331]\b[this,8,2]奕开！",
        "\t[韩樱姝,N1036]\b[this,4,2]开哥哥……（你不该来的，这下我们三要死一起了）",
        "\t[奕开,hero]\b[hero]您便是贵妃娘娘吧?",
        "\t[章贵妃,N1148]\b[this,6,4]奕勇士真有眼光，本宫正是章贵妃，今天是大皇子和韩家小姐的婚礼，勇士可是来喝喜酒的?",
        "\t[???,E917]贵妃娘娘，这小子好像是从前奕家的小子，与韩樱姝是青梅竹马……",
        "\t[奕开,hero]\b[hero]敢问两位是?",
        "\t[立天,N331]\b[this,8,2]他们是章贵妃的左膀右臂，一个是\"邪灵刀\"邱菱，他的灵兽榜上有名，排行第四十八。另一个是\"金魔虎\"撒罗德，灵兽榜上排名第四十二。",
        "\t[骑士,N339]\b[this,7,1]臭小子，闭嘴！",
        {
            "type": "animate",
            "name": "hand",
            "loc": [
                8,
                2
            ]
        },
        "\t[立天,N331]\b[this,8,2]唔……",
        "\t[章贵妃,N1148]\b[this,6,4]原来奕勇士是韩小姐的青梅竹马呀，若是奕勇士愿意为本宫效劳，本宫可保奕勇士荣华富贵",
        "\t[奕开,hero]\b[hero]可惜呀，我不仅是为了韩樱姝而来，这个大皇子抢了我的未婚妻，我要杀了他泄愤！",
        "\t[立天,N331]\b[this,8,2]???",
        "\t[章贵妃,N1148]\b[this,6,4]哦，原来如此呀，勇士若是愿意为本宫效劳，这小子也是可以交给你处置的。",
        "\t[奕开,hero]\b[hero]那多谢贵妃娘娘了。",
        "\t[撒罗德,E918]\b[this,7,6]娘娘不要听他的鬼话。",
        "\t[章贵妃,N1148]\b[this,6,4]???",
        "\t[撒罗德,E918]\b[this,7,6]方才，我的手下调查了一番，这小子在灵兽学院是晶弥立天的贴身侍卫！",
        "\t[章贵妃,N1148]\b[this,6,4]！！！",
        "\t[章贵妃,N1148]\b[this,6,4]好你个狡猾的小子，来人啊，给我抓住他！",
        "\t[奕开,hero]\b[hero]可恶，智取不行，只能硬闯了。",
        "\t[立天,N331]\b[this,8,2]当心啊，奕开。",
        "\t[韩樱姝,N1036]\b[this,4,2]开哥哥，加油。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[奕开,hero]\b[hero]冰皇锁！",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    4,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    8,
                    6
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    4
                ],
                "to": [
                    6,
                    3
                ],
                "time": 500,
                "keep": true
            },
            "\t[章贵妃,N1148]\b[this,6,3]可恶，好强的冰冻！",
            "\t[奕开,hero]\b[hero](幸好有邓学长送我的保命符，否则一个排名第四十八，一个排名第四十二的家伙，我还真不是对手。)",
            "\t[立天,N331]\b[this,8,2]厉害啊，奕开，你竟然把他们控制住了",
            "\t[奕开,hero]\b[hero]这是邓学长送我的保命符，他们实力非常强，估计很快就会挣脱冰封，咱快点走吧！",
            "\t[立天,N331]\b[this,8,2]好",
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "changeFloor",
                "floorId": "MT100",
                "loc": [
                    11,
                    12
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        12
                    ]
                ],
                "floorId": "MT90",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT99_6_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setBlock",
                "number": "N1164",
                "loc": [
                    [
                        4,
                        6
                    ]
                ]
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT99_6_5",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setBlock",
                "number": "N1165",
                "loc": [
                    [
                        8,
                        6
                    ]
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT99_6_5==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT99_6_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,  0,  0,339,  0,339,  0,339,  0,339,  0,  0,  4],
    [  4,  0,  0,  0,1036,  0,  0,  0,331,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  4],
    [  4,  0,  0,  0,  0,  0,1148,  0,  0,  0,  0,  0,  4],
    [  4,  4,  4,  4,  4,  4, 85,  4,  4,  4,  4,  4,  4],
    [80686,  0,  0,  0,  0,917,  0,918,  0,  0,  0,  0,80686],
    [80686,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80686],
    [80686,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80686],
    [80686,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80686],
    [80686,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,80686],
    [80686,  0,  0,  0,  0,  0, 88,  0,  0,  0,  0,  0,80686],
    [80686,80686,80686,80686,80686,80686,80686,80686,80686,80686,80686,80686,80686]
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
        6,
        11
    ]
}