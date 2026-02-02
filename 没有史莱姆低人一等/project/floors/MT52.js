main.floors.MT52=
{
    "floorId": "MT52",
    "title": "剧情2 层",
    "name": "剧情",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": true,
    "cannotMoveDirectly": true,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "canlie.mp3",
    "firstArrive": [
        "\t[勇者,N1299]\b[this,6,11]魔王，竟敢抓走公主！来救公主啦！",
        {
            "type": "move",
            "loc": [
                6,
                11
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    6,
                    10
                ]
            ]
        },
        {
            "type": "playSound",
            "name": "获得道具"
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    10
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    10
                ]
            ]
        },
        {
            "type": "playSound",
            "name": "开关门"
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                6,
                10
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:2",
                "right:5",
                "up:7",
                "left:5"
            ]
        },
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                5,
                1
            ]
        },
        "\t[绿史莱姆,N1186]\b[this,5,1]呜呜呜……",
        {
            "type": "hide",
            "loc": [
                [
                    5,
                    1
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                6,
                1
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                4,
                1
            ]
        },
        "\t[红史莱姆,N1190]\b[this,4,1]咕噜咕噜……",
        {
            "type": "hide",
            "loc": [
                [
                    4,
                    1
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                5,
                1
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        "\t[绿史莱姆,N1186]\b[this,3,1]咕噜咕噜（别杀我，别杀我！）",
        "\t[勇者,N1299]\b[this,4,1]哈哈哈，这么菜的史莱姆，我一刀一个！拿去做史莱姆酱，一定很美味！",
        {
            "type": "animate",
            "name": "blood",
            "loc": [
                3,
                1
            ]
        },
        "\t[绿史莱姆,N1186]\b[this,3,1]咕噜咕噜……",
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    1
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[勇者,N1299]\b[this,4,1]哈哈哈哈，这魔王安排一些史莱姆在前面送，正好做酱汁！",
        {
            "type": "jump",
            "from": [
                4,
                1
            ],
            "to": [
                1,
                1
            ],
            "time": 500
        },
        "\t[初级法师,bluePriest]\b[this,8,6]哈哈，这史莱姆真是太菜了",
        "\t[骷髅士兵,skeletonWarrior]\b[this,2,7]就是，连勇者都拦不住，要不是队长让我守在这里，哪里能让勇者过去，哈哈哈哈！",
        {
            "type": "playSound",
            "name": "跳跃"
        },
        {
            "type": "jumpHero",
            "loc": [
                11,
                11
            ],
            "time": 500
        },
        "\t[阿史,hero]\b[hero]呜呜呜，我的兄弟们……",
        {
            "type": "changeFloor",
            "floorId": "MT51",
            "loc": [
                6,
                5
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,201,202,201,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  0,  1],
    [  1, 31,  0,  0, 81,  0,  1, 27, 21,  0,  1,  0,  1],
    [  1,  0,209,  0,  1,  0,  1, 28, 31,  0,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  1,  1,  1, 81,  1,  0,  1],
    [  1, 21,  0,  0,  1,  0, 81,205,217,205,  1,  0,  1],
    [  1,  0,210,  0,  1,  0,  1,  1,  1,  1,  1,  0,  1],
    [  1,  1, 81,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  1,  1, 81,  1,  1,  1, 81,  1,  1],
    [  1, 31,  0, 21,  1,  0,  0, 21,  1,  0,205,  0,  1],
    [  1, 31, 46, 21,  1,  0,1302,  0,  1,201, 32,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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