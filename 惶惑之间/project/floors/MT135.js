main.floors.MT135=
{
    "floorId": "MT135",
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
        "\t[hero]\b[hero]这就是最后的门了。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": {
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
                    "text": "要用蓝之宝石打开门吗?",
                    "yes": [
                        {
                            "type": "openDoor"
                        },
                        {
                            "type": "setValue",
                            "name": "item:I629",
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
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [10026,  4,  4,  4,  4,  1, 88,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  1,  1,246,  1,  1,  4,  4,  4,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026, 22, 21,  0,231,  0,  0,  0,231,  0, 21, 22,10024],
    [10026,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,10024],
    [10026,  4,  4,  4,  1,  1,666,  1,  1,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,10024],
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