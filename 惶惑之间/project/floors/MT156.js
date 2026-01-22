main.floors.MT156=
{
    "floorId": "MT156",
    "title": "最终之塔A1层",
    "name": "最终之塔A1层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 10,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[hero]\b[hero]唉，没想到我又得打下手。",
        "\t[hero]\b[hero]没办法，主菜看来只能让给约瑟了。",
        "\t[hero]\b[hero]那么，现在抓紧点时间吧。",
        "\t[hero]\b[hero]或许还能见到最后的结局。",
        {
            "type": "function",
            "function": "function(){\nflags.__visited__ = { MT156: true }\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
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
    [10026,  0,  0,  0,677,  0,  0,  0,676,  0,  3, 87,10024],
    [10026,  3,  3,  0,  3,  3, 86,  3,  3, 81,  3,  0,10024],
    [10026, 21,676,  0,  3, 21,  0, 21,  3,  0,676,  0,10024],
    [10026, 21,  3,  0,  3,  0, 22,  0,  3,  0,  3,  3,10024],
    [10026, 34,  3,  0,  3, 21,  0, 21,  3,  0, 82, 33,10024],
    [10026,  3,  3,679,  3,  3,  3,  3,  3,679,  3,499,10024],
    [10026, 34,  3,  0,  0, 31, 31, 31,  0,  0,  0,674,10024],
    [10026, 21,  3,  0,  3,  3,  3,  3,  3,  3, 81,  3,10024],
    [10026, 21,676,  0,  3,  0,500,  0,  3,  0,676,  0,10024],
    [10026,  3,  3, 81,  3, 33,  0,677, 81,  0,  0,679,10024],
    [10026, 32, 32,  0,  3,  0,501,  0,  3, 32,679, 21,10024],
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