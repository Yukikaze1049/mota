main.floors.MT6=
{
    "floorId": "MT6",
    "title": "主塔 6 层",
    "name": "6",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "saber.mp3",
    "firstArrive": [
        {
            "type": "if",
            "condition": "(flag:hard===0)",
            "true": [
                "获得炸弹2枚(可以炸史莱姆王，依然触发获得道具和金币\r[red]有就用，这个不会计分\r[])，攻击便携药剂和防御便携药剂各1瓶。黄钥匙*5",
                {
                    "type": "setValue",
                    "name": "item:bomb",
                    "operator": "+=",
                    "value": "2"
                },
                {
                    "type": "setValue",
                    "name": "item:I494",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:I495",
                    "operator": "+=",
                    "value": "1"
                },
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "5"
                }
            ],
            "false": []
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,4": [
            "\t[奕开,hero]\b[hero]这位姑娘，你挡路了(此人好熟悉，有一种曾经与她并肩作战的感觉)",
            "\t[??,N555]\b[this,6,4]不好意思啊，新来的学弟，我是灵兽学院四大守护神兽——玄金琉璃的主人，金若美。",
            "\t[金若美,N555]\b[this,6,4]我负责这一区域的试炼，会给予大家一些提示。这一区的楼传先禁了，你最好清理完这一区的怪物(不清理完也能玩)，因为离开本区就不能回来了",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
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
    [  1, 32, 34, 32, 82,  0,  0,  0, 82, 32, 34, 32,  1],
    [  1,  1,  1,  1,  1, 21,  0, 21,  1,  1,  1,  1,  1],
    [  1, 22, 81, 81, 81,  0,  0,  0, 81, 81, 81, 22,  1],
    [  1,  1,  1,  1,  1,  1,555,  1,  1,  1,  1,  1,  1],
    [  1,  0, 29,  0,202,  0,  0,  0,205,  0, 31,  0,  1],
    [  1, 81,  1,  1,  1, 81,  1, 81,  1,  1,  1, 32,  1],
    [  1,  0,  1, 31, 27,203,  1,203, 28, 31,  1,  0,  1],
    [  1,201,  1,  1,  1,  1,  1,  1,  1,  1,  1,202,  1],
    [  1,  0, 28,  0,217,  0,  0,  0,206,  0, 27,  0,  1],
    [  1,206,  1,  1,  1,  1, 81,  1,  1,  1,  1,209,  1],
    [  1,547, 21, 22,  1, 31, 87,  0,  1, 31,370,  0,  1],
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