main.floors.SL41=
{
    "floorId": "SL41",
    "title": "魔塔 41 层",
    "name": "魔塔41",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "jindi.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:youyi===3)",
            "true": [
                "因为有三族的气运，阿史的天赋得到了强化",
                {
                    "type": "setValue",
                    "name": "flag:技能强化",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I1311",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I1122",
                    "operator": "-=",
                    "value": "1"
                }
            ],
            "false": [
                {
                    "type": "if",
                    "condition": "(flag:yongbumomiede===1)",
                    "true": [
                        "不联手路线，生命值增加20000",
                        {
                            "type": "setValue",
                            "name": "status:hp",
                            "operator": "+=",
                            "value": "20000"
                        }
                    ],
                    "false": []
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": "SL40",
            "loc": [
                6,
                1
            ]
        },
        "6,11": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,1281,  0,380,  1, 88,  1,  0,1280,446,  0,  1],
    [  1, 21,  1, 81,  1,  1,  0,  1,1282,  1,  0, 21,  1],
    [  1,  0,  1,379,  1,447,  0,  1,  0, 81,381,  0,  1],
    [  1,446,1282,  0,1281,  0,  1,  1,444,  1,  1,1281,  1],
    [  1,  0,  1,447,  1,1280,  1,1280,  0,  0, 81,  0,  1],
    [  1,1280,  1,  1,  1,  0,1281,379,  1,1282,  1,379,  1],
    [  1,  0,1282,  0,444,  0,  1,1280, 22,  0,  1,  0,  1],
    [  1,446,  1, 81,  1,1280,  1,  1,  0,  1,  1,1281,  1],
    [  1,  0,1280,380,  1,  0,  0, 81,1282,  1,447,  0,  1],
    [  1, 81,  1,  1,  1,  1,375,  1,  0,1283,  0,380,  1],
    [  1,1282,  0,446,379,  1, 87,  1,381,  1,447,  0,  1],
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
    "flyPoint": [
        6,
        1
    ]
}