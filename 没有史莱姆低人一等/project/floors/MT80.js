main.floors.MT80=
{
    "floorId": "MT80",
    "title": "主塔 80 层",
    "name": "80",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "jindi.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:hard===0)",
            "true": [
                "破墙镐*5，哪里不会挖哪里，作者再也不用担心我卡关啦！\n推荐套装：烈火焚天",
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "5"
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,12": {
            "floorId": "MT68",
            "loc": [
                6,
                0
            ]
        },
        "11,1": {
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
    [ 20,393,393,393, 21,891, 20, 21,  0,904,  0, 87, 20],
    [ 20, 20, 20, 20, 20,  0, 20,  0, 20, 20, 20, 20, 20],
    [ 20,454,  0,  0, 20,453, 20,795, 20,  0, 21,452, 20],
    [ 20,  0,400,790, 81,  0, 20,  0, 81,789, 21,452, 20],
    [ 20,401,  0,  0, 20,796, 82,398, 20,  0, 21,452, 20],
    [ 20, 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20],
    [ 20,  0,452,  0,796, 81,  0,788,  0, 81,795,  0, 20],
    [ 20,904, 20, 20, 20, 20,382, 20,  0, 20,  0,452, 20],
    [ 20,  0, 20,453,435, 20,  0, 20,892, 20, 20,790, 20],
    [ 20, 21, 20, 21,395, 20,795, 20,400, 20, 22,391, 20],
    [ 20,  0, 82,742,  0, 20,  0, 20,401, 20,397,390, 20],
    [ 20, 20, 20, 20, 20, 20, 88, 20, 20, 20, 20, 20, 20]
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
        6,
        12
    ]
}