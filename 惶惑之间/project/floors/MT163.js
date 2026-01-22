main.floors.MT163=
{
    "floorId": "MT163",
    "title": "最终之塔B1层",
    "name": "最终之塔B1层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 17,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[hero]\b[hero]该说真不愧是始祖之塔吗？",
        "\t[hero]\b[hero]这座魔塔也算的上是我至今为止遇到过最难打的塔了。",
        "\t[hero]\b[hero]只让约瑟一人面对塔主真的没问题吗？",
        "\t[hero]\b[hero]还是说这是塔主有意为之……",
        "\t[hero]\b[hero]我最好尽快赶回去支援他。",
        {
            "type": "function",
            "function": "function(){\nflags.__visited__ = { MT163: true }\n}"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,6": {
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
    [10026, 33, 21,  0,  3, 21,  0, 21,  3,  0,  0,  0,10024],
    [10026, 21,501,  0,  3,  0, 22,  0,  3,  0,  3,  3,10024],
    [10026,  0,  0,674,  3, 21,  0, 21,  3,  0,679,  0,10024],
    [10026, 82,  3, 81,  3,  3, 86,  3,  3,  0,  3, 21,10024],
    [10026,  0, 32,  0,676,  0,  0,  0, 81,  0,  3, 21,10024],
    [10026, 87,  0,  0,  3,  3,  3,  3,  3,  0,  3, 21,10024],
    [10026,  0, 32,  0,679,  0,  0,  0,679,  0,  3, 34,10024],
    [10026,  3,  3,  3,  3,  3, 81,  3,  3,  3,  3,  3,10024],
    [10026,  0,  0,677, 81,  0,  0,  0, 81,677,  0,  0,10024],
    [10026, 21,499,  0,  3,676,  3,676,  3,  0,500, 21,10024],
    [10026, 33, 21,  0,  3, 32, 32, 32,  3,  0, 21, 33,10024],
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