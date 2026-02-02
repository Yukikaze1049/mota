main.floors.MT18=
{
    "floorId": "MT18",
    "title": "主塔 18 层",
    "name": "18",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "sanbu.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:hard===0)",
            "true": [
                "乱撞模式额外获得破墙镐3把(建议破除18层绿史莱姆和23层绿门的墙体)，炸弹一枚(建议炸19层拦路高级巫师)，生命值提升5000\n推荐开启灵兽栏：一到两格（主修加攻防）\n推荐灵兽：骷髅人+骷髅人+骷髅人",
                {
                    "type": "setValue",
                    "name": "status:hp",
                    "operator": "+=",
                    "value": "5000"
                },
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "3"
                },
                {
                    "type": "setValue",
                    "name": "item:bomb",
                    "operator": "+=",
                    "value": "1"
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,7": [
            {
                "type": "choices",
                "text": "\t[老伯,man]想要这个史莱姆吗，十把黄钥匙",
                "choices": [
                    {
                        "text": "想要",
                        "action": [
                            {
                                "type": "if",
                                "condition": "(item:yellowKey>=10)",
                                "true": [
                                    {
                                        "type": "setValue",
                                        "name": "item:yellowKey",
                                        "operator": "-=",
                                        "value": "10"
                                    },
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ],
                                "false": [
                                    "\t[老伯,man]\b[this,1,7]钥匙不够就不要出来装逼啦"
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "12,6": {
            "floorId": "MT0",
            "loc": [
                0,
                7
            ]
        },
        "1,11": {
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
    [ 20, 33, 20, 21, 33, 21, 20,  0,369, 81,214,  0, 20],
    [ 20, 27, 20,  0,222,  0, 20,442,  0, 20, 21, 21, 20],
    [ 20,252, 20, 20, 82, 20, 20, 20,213, 20,368,367, 20],
    [ 20,  0,  0, 21,  0, 21,219,  0,547, 20, 20, 20, 20],
    [ 20, 83, 20,  0, 33,  0, 20, 29,  0, 20, 21, 21, 20],
    [ 20,201, 20,255, 20, 20, 20, 20,255, 81,  0,  0, 88],
    [ 20,121, 20,  0, 20, 33, 20,442,  0, 20, 21, 21, 20],
    [ 20,  0, 20,  0, 81,213, 20,213, 20, 20, 20, 20, 20],
    [ 20,253, 81,  0, 20,  0, 81,  0, 29, 29,  0,212, 20],
    [ 20,  0, 20,265, 20,253, 20, 20, 20, 20, 20, 81, 20],
    [ 20, 87, 20,378, 20,442,442,442, 20,442,374, 22, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
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
        12,
        6
    ]
}