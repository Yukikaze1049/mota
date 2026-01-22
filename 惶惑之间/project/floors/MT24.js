main.floors.MT24=
{
    "floorId": "MT24",
    "title": "魔塔 7 层",
    "name": "魔塔 7 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": null,
    "weather": null,
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
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
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
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,101,  0,  1,  0, 88,  0, 82,  0,248,  0,10024],
    [10026,  0,102,  0,  1,  0,  0,  0,  1,248,  0, 31,10024],
    [10026,  0,  0,  0,  1,  1, 81,  1,  1,  1,  0,  1,10024],
    [10026,  1, 81,  1,  1,  0,210,  0, 81, 81,  0,  0,10024],
    [10026, 21,  0,217, 81,  0,  0,  0,  1,  1,  1, 86,10024],
    [10026,  1,  1,  1,  1,  1,  1,233,  1,  0,  0,210,10024],
    [10026,217,352,353,354,206,  1,  0,  1, 36,  0,  0,10024],
    [10026, 81,  1,  1,  1, 81,  1,  0,  1,  1,  1, 81,10024],
    [10026,  0,  0,206,  0,  0,  1,233,  1, 21,  0,209,10024],
    [10026,  1, 21,  1, 31,  0,  1,  0,  1,  0,217,  0,10024],
    [10026, 87,  0, 81,  0,  0, 81,  0, 81,209,  0, 31,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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