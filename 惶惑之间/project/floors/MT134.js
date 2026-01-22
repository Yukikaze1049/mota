main.floors.MT134=
{
    "floorId": "MT134",
    "title": "??层",
    "name": "??层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": -1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "zz.mp3"
        },
        "\t[hero]\b[hero]原来后面还剩下些残存的魔物啊。",
        "\t[伊杰明,N416]\b[hero]不过这些魔物已经不值一提了。",
        {
            "type": "setVolume",
            "value": 100,
            "time": 0
        },
        {
            "type": "playBgm",
            "name": "zz.mp3",
            "keep": true
        },
        {
            "type": "setValue",
            "name": "item:I669",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:ltf",
            "value": "0"
        },
        {
            "type": "function",
            "function": "function(){\nflags.lhjnx = '冰魔法支援';\nflags.lhx = 0;\n}"
        },
        {
            "type": "autoText",
            "text": "现在可以在背包里使用伊杰明和赫的支援技能了（快捷键2）\n该区域需要频繁用到它，请务必善用。",
            "time": 3000
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "confirm",
                    "text": "要用红之宝石打开门吗?",
                    "yes": [
                        {
                            "type": "openDoor"
                        },
                        {
                            "type": "setValue",
                            "name": "item:I604",
                            "operator": "-=",
                            "value": "1"
                        }
                    ],
                    "no": []
                }
            ]
        }
    },
    "changeFloor": {
        "6,6": {
            "floorId": "MT93",
            "loc": [
                6,
                6
            ]
        },
        "6,1": {
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
    [10026,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  1,  1,665,  1,  1,  4,  4,  4,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026, 21, 21,  0,219,  0, 88,  0,219,  0, 21, 21,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026,  4,  4,  4,  1,  1,220,  1,  1,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1, 21,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1, 22,  1,  4,  4,  4,  4,10024],
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