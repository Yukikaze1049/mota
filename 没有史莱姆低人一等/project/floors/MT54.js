main.floors.MT54=
{
    "floorId": "MT54",
    "title": "主塔 54 层",
    "name": "54",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "X101592",
    "bgm": "bxsgzz2.mp3",
    "firstArrive": [
        {
            "type": "changePos",
            "direction": "left"
        },
        "\t[立天,N331]\b[this,6,6]你受伤了？",
        "\t[奕开,hero]\b[hero]我没事",
        {
            "type": "moveHero",
            "steps": [
                "left:3"
            ]
        },
        "\t[立天,N331]\b[this,6,6]这个给你。",
        "\t[奕开,hero]\b[hero]这是……亲王令?",
        "\t[立天,N331]\b[this,6,6]是的，这块令牌就代表了我，如果下次有人对你动手，你直接杀了便是，不必留手。",
        "\t[奕开,hero]\b[hero]立天……殿下……",
        "\t[立天,N331]\b[this,6,6]我不允许我的侍卫被人打得这么狼狈!",
        {
            "type": "setBlock",
            "number": "N1036",
            "loc": [
                [
                    6,
                    1
                ]
            ]
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
                "down:2"
            ]
        },
        "\t[韩樱姝,N1036]\b[this,6,3]嗨，你们两个，咱们快要参加团队赛了，怎么愁眉苦脸的",
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        "\t[韩樱姝,N1036]\b[this,6,3]呀，奕开，你怎么受伤了，究竟是什么人!",
        "\t[奕开,hero]\b[hero]一点小伤罢了，不值得你如此震惊。",
        "\t[韩樱姝,N1036]\b[this,6,3]奕开……",
        "\t[奕开,hero]\b[hero]我没事。",
        "\t[立天,N331]\b[this,6,6]好啦，奕开，樱姝，咱一起去参加团队赛吧。",
        "\t[韩樱姝,N1036]\b[this,6,3]好。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "remove": true
        },
        {
            "type": "follow",
            "name": "hero.png"
        },
        {
            "type": "follow",
            "name": "hanyingshu.png"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,6": {
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
                    "floorId": "MT101",
                    "loc": [
                        12,
                        6
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "12,6": {
            "floorId": "MT3",
            "loc": [
                0,
                6
            ]
        },
        "6,0": {
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
    [ 20, 20, 20, 20, 20, 20, 87, 20, 20, 20, 20, 20, 20],
    [ 20,30546,  0,  0,  0,  0,  0,  0,  0,  0,  0,30546, 20],
    [ 20,  0,  0,449,  0,  0,  0,  0,  0,449,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,333,  0,  0,  0,  0,  0, 88],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,449,  0,  0,  0,  0,  0,449,  0,  0, 20],
    [ 20,30546,  0,  0,  0,  0,  0,  0,  0,  0,  0,30546, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [
    [  0,30540,  0,  0,  0,  0,  0,  0,  0,  0,  0,30540,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,30540,  0,  0,  0,  0,  0,  0,  0,  0,  0,30540,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        12,
        6
    ]
}