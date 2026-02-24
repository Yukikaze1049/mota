main.floors.MT342=
{
    "floorId": "MT342",
    "title": "剑祖之坛（外围）",
    "name": "剑祖之坛（外围）",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "bgm": "battle24.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "battle24.mp3"
        },
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        },
        "\t[小粽,hero]\b[hero]这种远离凡尘俗世地方....就是剑祖居住地吗？",
        "\t[君无天,N1195]\b[hero,3]剑祖之坛.....没想到我又一次踏入这里了.....。",
        "\t[星钰,N1196]\b[hero,2]父亲大人，我隐隐感觉有一种不好的感觉.....",
        "\t[小粽,hero]\b[hero]嗯？星天前辈，为什么我感觉这里也有魔殿的魔物呢。",
        "\t[君无天,N1195]\b[hero,3]...........！！！不好，一定是谶祖那个家伙。我们快去我师父那里！"
    ],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,12": [
            {
                "type": "changeFloor",
                "floorId": "MT336",
                "loc": [
                    12,
                    6
                ],
                "direction": "left",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "battle23.mp3"
            }
        ],
        "0,12": [
            "\t[君无天,N1252]\b[hero,3].............",
            "\t[小粽,hero]\b[hero]星天前辈..........。",
            "\t[君无天,N1252]\b[hero,3]啊......我没事，只是十多年没见师父还没来得及叙述就要远征了，难免有些伤感。",
            "\t[星钰,N1250]\b[hero,2]父亲大人，剑祖爷爷他一定会等到你远征归来那一天的。",
            "\t[君无天,N1252]\b[hero,3]哈，希望吧。",
            "\t[君无天,N1252]\b[hero,3]好了，现在我们基本拥有抗衡那两个老不死的资本了，现在就让我们清算这一切吧！",
            "\t[小粽,hero]\b[hero]嗯！",
            "提示：可以去魔殿十层以上的区域了",
            {
                "type": "openDoor",
                "loc": [
                    6,
                    4
                ],
                "floorId": "MT341",
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    3
                ],
                "floorId": "MT341",
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    2
                ],
                "floorId": "MT341",
                "async": true
            },
            {
                "type": "openDoor",
                "loc": [
                    6,
                    1
                ],
                "floorId": "MT341",
                "async": true
            },
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        6,
                        0
                    ]
                ],
                "floorId": "MT341",
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ]
    },
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
    [140006,140006,140006,140006,140006,140006, 87,140006,140006,140006,140006,140006,140006],
    [140006,384,140006,367, 31,140006,  0,140006, 31,367,140006,384,140006],
    [140006,1166, 81,351,1163, 81, 21, 81,1163,351, 81,1166,140006],
    [140006, 34,140006,367, 31,140006,  0,140006, 31,367,140006, 34,140006],
    [140006,140006,140006,140006,140006,140006, 34,140006,140006,140006,140006,140006,140006],
    [140006, 32, 33, 81, 33, 81,  0, 82,399, 34, 82,399, 33],
    [140006,140006,140006,140006,140006,140006,351,140006,140006,140006,140006,140006,140006],
    [140006, 31, 21, 21, 21, 82,  0, 81, 81, 81, 31, 22,140006],
    [140006,140006,140006,140006,140006,140006,367,140006,140006,140006,140006,140006,140006],
    [140006, 33,399, 33,399, 24,  0, 24, 21, 22, 23, 33,140006],
    [140006,140006,140006,140006,140006,140006,335,140006,140006,140006,140006,140006,140006],
    [140006, 23,338, 21,337, 24,  0, 24,353, 22,354, 22,140006],
    [140006,140006,140006,140006,140006,140006, 88,140006,140006,140006,140006,140006,140006]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "ratio": 500000000
}