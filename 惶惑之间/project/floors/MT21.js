main.floors.MT21=
{
    "floorId": "MT21",
    "title": "魔塔 4 层",
    "name": "魔塔 4 层",
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
        "6,2": [
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
                                6,
                                1
                            ]
                        ],
                        "remove": true,
                        "time": 500,
                        "async": true
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true,
                        "time": 500
                    },
                    {
                        "type": "waitAsync"
                    },
                    "\t[hero]\b[hero]危险期终于过去了",
                    "\t[hero]\b[hero]不得不说……越是危险的魔塔就越容易填饱这东西。",
                    "\t[hero]\b[hero]可惜没法像勇者一样回去领报酬。",
                    "\t[hero]\b[hero]不然我这些年生存下来……怎么也得是个大富翁了。"
                ],
                "no": []
            }
        ]
    },
    "changeFloor": {
        "11,11": {
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
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 87,  0, 31,  1, 21,101, 21,  1, 32,353, 21,10024],
    [10026,  0,  0,  0,  1,  0,102,  0,  1,  0,  0,  0,10024],
    [10026,  0,  0,  0,  1, 31,  0, 31,  1,  0,210,  0,10024],
    [10026,  1, 81,  1,  1,  1, 82,  1,  1,  1, 81,  1,10024],
    [10026,209,  0,  0,  1,  0,  0,  0,  1,  0,  0, 31,10024],
    [10026, 21,210,  0, 81,  0,  1,  0, 81,206,  0,352,10024],
    [10026, 21, 21,209,  1,  0,  0,  0,  1,  0,  0, 21,10024],
    [10026,  1,  1,  1,  1,  1, 81,  1,  1,  1,  1,  1,10024],
    [10026, 32, 21,  0,  1,  0,233,  0,  1,  0,  0, 31,10024],
    [10026, 21,354,  0,  1,  0,  0,  0,  1,  0,  0,  0,10024],
    [10026,  0,  0,217, 81,  0,  0,  0, 81,248,  0, 88,10024],
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