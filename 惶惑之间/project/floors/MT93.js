main.floors.MT93=
{
    "floorId": "MT93",
    "title": "??层",
    "name": "??层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "up:1"
            ]
        },
        "\t[hero]\b[hero]过不去了……",
        "\t[怀特莉丝,N430]\b[hero]可恶……本以为现在就能结果掉塔主！",
        "\t[怀特莉丝,N430]\b[hero]要是之后让他恢复过来就不妙了！",
        "\t[hero]\b[hero]这门……",
        "\t[hero]\b[hero]有个缺口和黑骑士所掉落的宝石很吻合。",
        "\t[hero]\b[hero]（尝试放入黑宝石）",
        "\t[hero]\b[hero]……门是绿色的。",
        "\t[hero]\b[hero]果然需要的是绿色的宝石才行么……",
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "setValue",
            "name": "flag:hqs",
            "value": "1"
        },
        {
            "type": "changeFloor",
            "floorId": "MT92",
            "loc": [
                6,
                11
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,9": {
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
                    "text": "要用绿之宝石打开门吗?\n开门后将禁用快捷商店。",
                    "yes": [
                        {
                            "type": "openDoor"
                        },
                        {
                            "type": "setValue",
                            "name": "item:I556",
                            "operator": "-=",
                            "value": "1"
                        },
                        {
                            "type": "disableShop",
                            "id": "wqsd"
                        },
                        {
                            "type": "disableShop",
                            "id": "wqsd2"
                        },
                        {
                            "type": "disableShop",
                            "id": "wqsd3"
                        },
                        {
                            "type": "disableShop",
                            "id": "djsd"
                        },
                        {
                            "type": "disableShop",
                            "id": "djsd2"
                        },
                        {
                            "type": "disableShop",
                            "id": "djsd3"
                        }
                    ],
                    "no": []
                }
            ]
        }
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,6": {
            "floorId": "MT134",
            "loc": [
                6,
                6
            ]
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
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  1,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  1,  1,667,  1,  1,  4,  4,  4,10024],
    [10026,  4,  4,  4,  1,  0,  0,  0,  1,  4,  4,  4,10024],
    [10026,  4,  4,  4,  1,  0, 88,  0,  1,  4,  4,  4,10024],
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