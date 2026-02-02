main.floors.MT29=
{
    "floorId": "MT29",
    "title": "主塔 29 层",
    "name": "29",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "heiansenlin.mp3",
    "firstArrive": [
        {
            "type": "unfollow"
        },
        "\t[立天,N331]\b[this,5,6]奕开，快来休息会，我点燃了火，今晚可以在这里扎营。",
        "\t[韩樱姝,N1036]\b[this,7,6]没想到娇贵的大少爷也能点燃火呢。",
        "\t[立天,N331]\b[this,5,6]本少爷只是娇贵，又不是蠢笨。",
        "\t[奕开,hero]\b[hero]干的不错嘛，咦，哪有一簇鲜花，樱姝，你喜欢吗？",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        "\t[韩樱姝,N1036]\b[this,7,6]好呀，开哥哥，帮我采一束迷迭香，我最喜欢迷迭香啦!",
        {
            "type": "jumpHero",
            "loc": [
                4,
                10
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "left"
        },
        "\t[奕开,hero]\b[hero]好，樱姝。",
        {
            "type": "setBlock",
            "number": "poisonSkeleton",
            "loc": [
                [
                    4,
                    10
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                4,
                10
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "right:1",
                "up:2"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        "\t[紫骷髅,poisonSkeleton]\b[this,5,8]吼！",
        "\t[立天,N331]\b[this,5,6]啊！",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                8
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[紫骷髅,poisonSkeleton]\b[this,5,5]吼！",
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        "\t[韩樱姝,N1036]\b[this,7,6]立天!",
        {
            "type": "jump",
            "from": [
                5,
                3
            ],
            "to": [
                6,
                1
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "jump",
            "from": [
                5,
                5
            ],
            "to": [
                6,
                1
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    7,
                    6
                ]
            ]
        },
        "\t[韩樱姝,N1036]\b[this,7,6]立天!",
        {
            "type": "jump",
            "from": [
                7,
                6
            ],
            "to": [
                6,
                1
            ],
            "time": 500
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        "\t[奕开,hero]\b[hero]立天!樱姝!糟了，紫骷髅竟然逃出来了，完了!"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT28",
            "loc": [
                6,
                0
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 87, 20, 20, 20, 20, 20, 20],
    [ 20, 20,30527,  0,201,  0,  0,  0,  0,  0,30520, 20, 20],
    [ 20, 20,  0,  0,  0,  0,  0,  0,30383,  0,  0, 20, 20],
    [ 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20],
    [ 20, 20,  0,30516,  0,  0,  0,  0,  0,30517,  0, 20, 20],
    [ 20, 20,  0,  0,  0,333,1104,1041,  0,  0,201, 20, 20],
    [ 20, 20,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20],
    [ 20, 20,201,30220,  0,  0,  0,  0,  0,30527,  0, 20, 20],
    [ 20, 20,30520,  0,  0,  0,  0,  0,  0,  0,  0, 20, 20],
    [ 20, 20,  0,30383,  0,  0,  0,  0,201,  0,30383, 20, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 88, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,90019,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fg2map": [

],
    "flyPoint": [
        6,
        12
    ]
}