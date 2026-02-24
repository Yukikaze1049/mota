main.floors.MT481=
{
    "floorId": "MT481",
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
    "defaultGround": "T1158",
    "firstArrive": [
        {
            "type": "function",
            "function": "function(){\ncore.removeMaps(\"MT0\", \"MT480\")\n}"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[仙琳,fairy]\b[hero]呼.....刚才的世界中枢还挺棘手的，不过还是比不过我~",
        "\t[仙琳,fairy]\b[hero]不知道小粽他现在走到哪一步了。",
        "\t[仙琳,fairy]\b[hero]嗯....小粽他一定没问题。我相信他",
        "\t[仙琳,fairy]\b[hero]我也要加把劲啊！",
        "\t[仙琳,fairy]\b[hero]虽然这些家伙挺强的，但还不至于让我使用最终形态。",
        "接下来是仙琳的主场，仙琳皇族血统为她提供一亿魔防！！",
        {
            "type": "addValue",
            "name": "status:mdef",
            "value": "100000000"
        }
    ],
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
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [90007,90007,90007,90007,90007,90007, 87,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,334,262,  0,262,350,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007, 83,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,350,262,  0,262,334,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007, 82,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,334,262,  0,262,350,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007, 81,90007,90007,90007,90007,90007,90007],
    [90007,90007,90007,90007,350,262,  0,262,334,90007,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [ 22, 22, 47, 22, 22, 24,  0, 24,401,401,666,401,401],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [379,347,379,347,379, 24,  0, 24,379,363,379,363,379],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "ratio": 1,
    "bgm": "universe2.mp3"
}