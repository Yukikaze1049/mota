main.floors.SL3=
{
    "floorId": "SL3",
    "title": "魔塔 3 层",
    "name": "魔塔3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "ybmmdfh.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,8": [
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "setBlock",
                "number": "E1232",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            "\t[阿史,hero]\b[hero]……",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "setBlock",
                "number": "skeletonWarrior",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[阿史,hero]\b[hero]骷髅队长，我史莱姆与你无冤无仇，你想干什么……",
            "\t[骷髅队长,E1232]\b[this,6,6]哼，背叛魔塔，便是我骷髅一族的仇人！把它关进大牢！",
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
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        10
                    ]
                ],
                "remove": true
            },
            {
                "type": "changeFloor",
                "floorId": "SL2",
                "loc": [
                    3,
                    9
                ]
            },
            "\t[???]小家伙，醒醒！",
            {
                "type": "setCurtain",
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 22,  0,1222, 81,  0,  1,443,  1, 21, 81,442,  1],
    [  1,  0,443,  0,  1,442, 81,  0,  1, 21,  1, 28,  1],
    [  1, 21,  0, 27,  1,  0,  1, 29,209,  0,  1,  0,  1],
    [  1,  1,  1,  1,  1,209,  1,1225,  1,  1,  1,1221,  1],
    [  1,443, 81,  0,490,  0,446,  0,  0, 21,  0,  0,  1],
    [  1, 81,  1,  1, 81,  1,  0,  1,209,  1,210,  1,  1],
    [  1,209,  1,  0,209,  1,  0,  1,  0,  1,  0, 21,  1],
    [  1,  0,  1, 29,  0,  1,  0,  1,443,  1,  1,  0,  1],
    [  1, 28,210,  0,442,  1,  0,  1,  0, 81,  0, 29,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1, 81,  1,  1],
    [  1, 88,  0,  0,  0,  0,  0,  0,  1, 27,  0, 87,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": null
}