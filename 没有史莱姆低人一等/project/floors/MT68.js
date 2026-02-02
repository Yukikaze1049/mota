main.floors.MT68=
{
    "floorId": "MT68",
    "title": "主塔 68 层",
    "name": "68",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "aybhs.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": [
            "\t[???,N1116]\b[this,6,3]我等你很久了。",
            "\t[奕开,hero]\b[hero]你是？",
            "\t[王磊,N1116]\b[this,6,3]我是远古石皇的主人，王磊。灵兽学院北边的守护者。",
            "\t[奕开,hero]\b[hero]久仰大名，王学长，你刚刚为什么没来呀?",
            "\t[王磊,N1116]\b[this,6,3]我不想带你。",
            "\t[奕开,hero]\b[hero]……",
            "\t[王磊,N1116]\b[this,6,3]不过有些事耽搁了，你又来了，就顺路吧。",
            "\t[奕开,hero]\b[hero]……",
            "\t[奕开,hero]\b[hero](这就是什么人呀?)",
            "\t[王磊,N1116]\b[this,6,3]火焰遗迹是灵兽榜上第三的魔焰星君所创造的遗迹，是为了挑选继承者创建的，里面的火系训练师十分强大，还有很多滋生的火系灵兽，绝不是好惹的，你可得小心点。",
            "\t[奕开,hero]\b[hero]是，王学长。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        3
                    ]
                ],
                "remove": true
            }
        ],
        "6,0": {
            "trigger": null,
            "enable": false,
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
                    "type": "changeFloor",
                    "floorId": "MT80",
                    "loc": [
                        6,
                        12
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "0,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": "MT69",
            "loc": [
                0,
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
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,1125,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,151,151,151,151,  0,  0,  0,  0, 20],
    [ 20,  0,  0,151,151,151,  0,  0,  0,  0,  0,  0, 20],
    [ 88,  0,  0,151,151,151,  0,  0,  0,  0,  0, 87, 20],
    [ 20,  0,  0,151,151,151,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20,  0,151,151,151,151,151,151,  0,  0, 20, 20],
    [ 20, 20, 20,  0,  0,151,151,151,151,  0,  0, 20, 20],
    [ 20, 20, 20, 20,  0,  0,  0,  0,  0, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        0,
        6
    ]
}