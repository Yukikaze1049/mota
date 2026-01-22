main.floors.MT127=
{
    "floorId": "MT127",
    "title": "??塔??层",
    "name": "??塔??层",
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
        {
            "type": "animate",
            "name": "dispel",
            "loc": [
                6,
                1
            ]
        },
        {
            "type": "setBlock",
            "number": "upFloor",
            "loc": [
                [
                    6,
                    1
                ]
            ]
        },
        "\t[佛修斯,N607]\b[this,6,3]如此危险的地方……",
        "\t[佛修斯,N607]\b[this,6,3]没想到我一介圣职者也得上前线拼命……我的人生真是完完全全的失败啊……",
        "\t[佛修斯,N607]\b[this,6,3]这里的魔物都如此强大……真不愧是始祖的塔……",
        "\t[佛修斯,N607]\b[this,6,3]恐怕今日就是我的忌日了……",
        {
            "type": "move",
            "loc": [
                6,
                3
            ],
            "time": 500,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "changeFloor",
            "floorId": "MT128",
            "loc": [
                0,
                0
            ]
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
    [  1,  0,  0,  0,  0,  0,226,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,610,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1, 28, 21,  0,  1,216,  0,216,  1, 31,224,  0,  1],
    [  1, 32,  0,  0,  1,  0,  0,  0,  1,225,  0,  0,  1],
    [  1, 27,  0,227, 82,  0,  0,  0,  0,  0,  0, 88,  1],
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