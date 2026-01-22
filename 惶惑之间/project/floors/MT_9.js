main.floors.MT_9=
{
    "floorId": "MT_9",
    "title": "地下 9 层",
    "name": "地下 9 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,2": [
            {
                "type": "confirm",
                "text": "现在就要补充抑制器的魔力吗？",
                "yes": [
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            "hero.loc.x",
                            "hero.loc.y"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "item.mp3"
                    },
                    {
                        "type": "tip",
                        "text": "吸收大块魔晶，魔力+50"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "50"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                1
                            ]
                        ],
                        "remove": true,
                        "async": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                2,
                                2
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:db9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db9==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ]
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:db9",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.db9==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            10,
                            4
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,101,  0,  1,  0, 88,  0,  1,  0,  0,  0,10024],
    [10026,  0,102,  0, 81,  0,  0, 32,  1,  0, 38,  0,10024],
    [10026,  0,  0,  0,  1,  1,  1,  1,  1,  0,  0,  0,10024],
    [10026,434,  1,  1,  1, 21,  0, 21,  1,  1, 85,  1,10024],
    [10026,  0, 81,213,  1,  0, 31,  0,  1,218,  0,218,10024],
    [10026, 21,  1,  0,  1,434,  1,213,  1,  0,  0,  0,10024],
    [10026,  0,  1, 27, 81,  0,  1,  0, 81,  0,  0,  0,10024],
    [10026,211,  1,  1,  1,  1,  1,  1,  1,  1, 82,  1,10024],
    [10026,  0,  0,  0,434,  0,  0, 81,211,  0,434,  0,10024],
    [10026,  0,  1, 81,  1,  1,  1,  1,  0,  0,  0, 21,10024],
    [10026, 87,  1,215, 29, 28,356,  1, 21, 21, 21, 21,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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
        1,
        11
    ]
}