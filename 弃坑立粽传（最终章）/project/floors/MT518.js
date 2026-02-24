main.floors.MT518=
{
    "floorId": "MT518",
    "title": "世界线的终焉（未知地带）",
    "name": "世界线的终焉（未知地带）",
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
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe3.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "Recoil1.mp3"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "if",
            "condition": "(flag:求道者===1)",
            "true": [
                "\t[守望者,N1398]\b[this,6,6]...........究竟在哪里呢.........",
                "\t[守望者,N1398]\b[this,6,6]想在无尽的世界线之中寻找到他们真可谓是天方夜谭..........",
                "\t[守望者,N1398]\b[this,6,6]时间快要到了，不能再拖延了，必须找到他们。",
                "\t[守望者,N1398]\b[this,6,6].............",
                {
                    "type": "playSound",
                    "name": "cgefc01.wav"
                },
                {
                    "type": "animate",
                    "name": "unexpected1",
                    "loc": [
                        6,
                        6
                    ]
                },
                "\t[守望者,N1398]\b[this,6,6]！！！找到了！！",
                "\t[守望者,N1398]\b[this,6,6]是观测者之声的缘故吗？..........还是说是观测者亲自出手？",
                "\t[守望者,N1398]\b[this,6,6]无论是哪一种，对于我们来说都是好的！",
                "\t[守望者,N1398]\b[this,6,6]全速前进！！",
                {
                    "type": "showStatusBar"
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT519",
                    "loc": [
                        6,
                        12
                    ],
                    "direction": "up",
                    "time": 0
                }
            ],
            "false": [
                "\t[守望者,N1398]\b[this,6,6]...........究竟在哪里呢.........",
                "\t[守望者,N1398]\b[this,6,6]想在无尽的世界线之中寻找到他们真可谓是天方夜谭..........",
                "\t[守望者,N1398]\b[this,6,6]时间快要到了，不能再拖延了，必须找到他们。",
                {
                    "type": "showStatusBar"
                },
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT519",
                    "loc": [
                        6,
                        12
                    ],
                    "direction": "up",
                    "time": 0
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1398,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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