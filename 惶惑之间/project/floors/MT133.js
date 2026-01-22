main.floors.MT133=
{
    "floorId": "MT133",
    "title": "魔塔 0 层",
    "name": "魔塔 0 层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": -1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[伊杰明,N416]\b[this,5,7]这一次完全就是城门大开了啊。",
        "\t[伊杰明,N416]\b[this,5,7]没有空间结界的反应……",
        "\t[伊杰明,N416]\b[this,5,7]看来我们三个不用分开了。",
        "\t[hero]\b[hero]说实话……我是不理解这塔主为什么总是弯弯绕绕的。",
        "\t[hero]\b[hero]喜欢把牌一张一张的打出。",
        "\t[hero]\b[hero]若是一开始就聚起来不是显得他胜算更大些么？",
        "\t[赫,N426]\b[this,7,7]或许有什么难言之隐……令他没有办法将手牌一次性全部打出。",
        "\t[伊杰明,N416]\b[this,5,7]嗯……魔塔的规则就是会调整双方的公平性。",
        "\t[伊杰明,N416]\b[this,5,7]再困难的塔也会留有一线生机给探索者发现。",
        "\t[伊杰明,N416]\b[this,5,7]至于能不能找到就全凭本事了。",
        "\t[伊杰明,N416]\b[this,5,7]如果他选择将之前的所有牌一次性打出。",
        "\t[伊杰明,N416]\b[this,5,7]我们未必不会找到魔塔的平衡性调整给予我们的空子。",
        "\t[伊杰明,N416]\b[this,5,7]那么胜负就会在一天之内分出。",
        "\t[伊杰明,N416]\b[this,5,7]而如今他这般一张一张的出牌则恰恰说明他是个谨慎派。",
        "\t[hero]\b[hero]真是麻烦啊。",
        "\t[hero]\b[hero]如果是我宁可选择一次性决出胜负。",
        "\t[赫,N426]\b[this,7,7]前进吧。",
        {
            "type": "move",
            "loc": [
                5,
                7
            ],
            "time": 500,
            "steps": [
                "right:1",
                "up:1"
            ]
        },
        {
            "type": "follow",
            "name": "yjm.png"
        },
        {
            "type": "move",
            "loc": [
                7,
                7
            ],
            "time": 500,
            "steps": [
                "left:1",
                "up:1"
            ]
        },
        {
            "type": "follow",
            "name": "h.png"
        },
        {
            "type": "function",
            "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT28: true, MT29: true, MT92: true, MT93: true, MT133: true }\n}"
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    6
                ]
            ],
            "floorId": "MT92",
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    5
                ]
            ],
            "floorId": "MT92",
            "remove": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,12": [
            "\t[hero]\b[hero]到决战了可不能打退堂鼓啊。",
            {
                "type": "moveHero",
                "steps": [
                    "up:1"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": "MT92",
            "loc": [
                6,
                1
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
    [10026,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,10024],
    [10026,  1,  1,  0,  0,  1,  0,  1,  0,  0,  1,  1,10024],
    [10026,  1,  0,  0,  0,  1,  0,  1,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1,10024],
    [10026,  1,  0,  0,  0,419,  0,429,  0,  0,  0,  1,10024],
    [10026,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,10024],
    [10026,  1,  4,  1,  4,  1,  0,  1,  4,  1,  4,  1,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10020,10017,10017,10017,10017,10018,  0,10016,10017,10017,10017,10017,10019]
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