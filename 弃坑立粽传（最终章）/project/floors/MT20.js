main.floors.MT20=
{
    "floorId": "MT20",
    "title": "主塔 15 层",
    "name": "15",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 2,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "4,10": [
            {
                "type": "pauseBgm"
            },
            {
                "type": "playBgm",
                "name": "Recoil1.mp3",
                "keep": true
            },
            "\t[小粽,hero]\b[hero]这是......?",
            "\t[???,portal]\b[this,4,10]进来吧,名为小粽的主角。",
            "\t[小粽,hero]\b[hero]！！！你是谁？你怎么知道我的名字？？！",
            "\t[???,portal]\b[this,4,10]我是谁并不重要，重要的是这对你来说是一场机缘。",
            "\t[???,portal]\b[this,4,10]所以，进来吧！",
            "\t[小粽,hero]\b[hero]！！！",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500
            },
            {
                "type": "changeFloor",
                "floorId": "MT21",
                "loc": [
                    6,
                    11
                ],
                "direction": "up",
                "time": 0
            },
            {
                "type": "hide",
                "loc": [
                    [
                        4,
                        10
                    ]
                ],
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "5,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,6": {
            "floorId": "MT22",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,411, 30,  1,352, 21, 22,412,  1, 32,366, 32,  1],
    [  1, 34,457, 81,336, 33,466,385,  1,366,474,366,  1],
    [  1,411, 30,  1, 82,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1,  1,  1,  1, 30,421,  0,  0,  0,  0,  0,382,  1],
    [  1,445,  0, 34,  0,  1, 81,  1, 86,  1,  1,  1,  1],
    [  1,  0, 81,  1, 81,  1, 87, 32,  0, 81,489, 34,  1],
    [  1, 32,  1,382,445,366, 82,  1, 81,  1,351, 22,  1],
    [  1, 27, 81,  1,  1, 81,  1,335,232,335,  1,  1,  1],
    [  1,455,  0, 28,436,  0,  1, 21,351, 21, 82, 34,  1],
    [  1, 81,  1,  1, 89,  4,  4,  4,  4,  4,  1, 34,  1],
    [  1, 32, 34,  4,  0, 88, 24, 47, 50,  4, 32, 34,  1],
    [  1,  1,  1,  4,  4,  4,  4,  4,  4,  4,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "battle1.mp3",
    "bg2map": [

],
    "fg2map": [

]
}