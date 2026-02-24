main.floors.MT567=
{
    "floorId": "MT567",
    "title": "未知空间",
    "name": "未知空间",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,0": [
            {
                "type": "changeFloor",
                "floorId": "MT567",
                "loc": [
                    6,
                    111
                ]
            },
            {
                "type": "setCurtain",
                "time": 500
            },
            "\t[记录者,N680]\b[this,6,3]奇怪...怎么过了这么久小粽还没有回来.......",
            "\t[星钰,N1401]\b[this,9,6]会不会出什么事了？",
            "\t[记录者,N680]\b[this,6,3]...........",
            "\t[邪神·谶]七日期限已过，不知道你们准备好了没有？",
            {
                "type": "setValue",
                "name": "flag:求道者",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "playBgm",
                "name": "disorder10.mp3"
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    3,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    9,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            "\t[记录者,N680]\b[this,6,3]是他！没想到这么快就来了！！",
            "\t[星钰,N1401]\b[this,9,6]记录者前辈，我们该怎么办，守望者,仙琳还有小粽他们都还没有回来。",
            "\t[记录者,N680]\b[this,6,3]该死......",
            {
                "type": "playBgm",
                "name": "hope3.mp3",
                "keep": true
            },
            "\t[弃坑立粽]记录者，现在怎么样了？",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    3,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    9,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "N1195",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "N1196",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "playSound",
                "name": "116-Raise02.ogg"
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    4,
                    0
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    8,
                    0
                ],
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N724",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1580",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1581",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1399",
                "loc": [
                    [
                        4,
                        0
                    ]
                ],
                "time": 0,
                "async": true
            },
            {
                "type": "setBlock",
                "number": "N1371",
                "loc": [
                    [
                        8,
                        0
                    ]
                ],
                "time": 0
            },
            "\t[星钰,N1401]\b[this,9,6]哎！这不是梦溪姐姐吗？还有......",
            "\t[星钰/君无天]魔王？？！",
            "\t[弃坑立粽,N724]\b[this,6,2]要不是多亏了你们担任了观测者之声的职责，不然我也没有办法找到他们。",
            "\t[星钰/君无天]原来是这样........。",
            "\t[弃坑立粽,N724]\b[this,6,2]对了，小粽他们怎么样了。",
            "\t[弃坑立粽]他们还没有回来。",
            "\t[弃坑立粽,N724]\b[this,6,2]还没有回来？有点奇怪........。",
            "\t[邪神·谶]喂，我说你们几个还要在里面当缩头乌龟多久？",
            "\t[弃坑立粽,N724]\b[this,6,2].............嗯，时间来不及了，我们得必须暂时阻止邪神·谶，等小粽仙琳他们回来。",
            "\t[众人]嗯！",
            {
                "type": "setHeroIcon",
                "name": "hero2.png"
            },
            {
                "type": "changeFloor",
                "floorId": "MT568",
                "loc": [
                    4,
                    10
                ],
                "direction": "up",
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "0,0": [
            {
                "type": "playBgm",
                "name": "hope3.mp3",
                "keep": true
            },
            "\t[弃坑立粽]记录者，现在怎么样了？",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    3,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    9,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    3
                ]
            },
            {
                "type": "setBlock",
                "number": "N1195",
                "loc": [
                    [
                        3,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "N1196",
                "loc": [
                    [
                        9,
                        6
                    ]
                ],
                "time": 0
            },
            {
                "type": "playSound",
                "name": "116-Raise02.ogg"
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "aid3",
                "loc": "hero"
            },
            {
                "type": "setBlock",
                "number": "N724",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "N1580",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "time": 0
            },
            {
                "type": "setBlock",
                "number": "N1581",
                "loc": [
                    [
                        7,
                        1
                    ]
                ],
                "time": 0
            },
            "\t[星钰,N1401]\b[this,9,6]哎！这不是梦溪姐姐吗？梦溪姐姐不是已经离去了吗。",
            {
                "type": "waitAsync"
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,101,  0,  0,  0,  0,  0,101,  0,  0,  0],
    [  0,  0,  0,102,  0,  0,680,  0,  0,102,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,1400,  0,  0,102,  0,  0,1401,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,101,  0,  0,  0,  0,  0,101,  0,  0,  0],
    [  0,  0,  0,102,  0,  0,  0,  0,  0,102,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}