main.floors.MT185=
{
    "floorId": "MT185",
    "title": "阴之坛一层",
    "name": "阴之坛一层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1000000,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "pauseBgm"
        },
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'堇'"
        },
        {
            "type": "function",
            "function": "function(){\ncore.removeMaps(\"MT0\", \"MT184\")\n}"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "battle12.mp3",
            "keep": true
        },
        "\t[堇,hero]\b[hero]这里就是阴阳圣坛中的阴之坛吗？",
        "\t[堇,hero]\b[hero]没想到这些怪物实力居然如此惊人！得小心了！！"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            "【系统】这个区域所有宝石与血瓶提升的能力为1000000倍！",
            {
                "type": "hide",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":next",
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
    [  4,  4,  4,  4,  4,667,  4,667,  4,  4,  4,  4,  4],
    [  4, 32,335, 32,  4, 24,  0, 24,  4, 27,  4, 28,  4],
    [  4,  4,835,  4,  4, 21,  0, 21,  4,843,  4,843,  4],
    [  4,  4, 81,  4,  4,  4, 86,  4,  4,  0, 28,  0,  4],
    [  4,  4,  0, 21,833, 31,  0, 27,833, 31,  4, 21,  4],
    [  4,  4, 27,  4,  4,  4,837,  4,  4,  4,  4,  0,  4],
    [  4,  4, 31, 82,833, 34, 22,335,836, 81, 29, 34,  4],
    [  4,  4,843,  4,  4,  4, 81,  4,  4,  4, 83,  4,  4],
    [  4, 28,  0, 32, 28,  4, 23,  4,336,352,368,399,  4],
    [  4, 81,  4,  0,  4,  4, 82,  4,846,  4,  4,  4,  4],
    [  4, 28,842,  0,833,  4,  0,  4,  0,334,  4,383,  4],
    [  4, 34,334, 82, 27, 34,834, 34,836,  0,839, 32,  4],
    [  4,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "battle12.mp3"
}