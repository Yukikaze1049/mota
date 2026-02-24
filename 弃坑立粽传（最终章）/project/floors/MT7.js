main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 3 层",
    "name": "3",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "2,6": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "openShop",
                    "id": "shop1"
                }
            ]
        },
        "6,7": [
            {
                "type": "playBgm",
                "name": "lolita1.mp3"
            },
            "\t[小粽,hero]\b[hero]嗯？仙子小姐。",
            "\t[仙琳,fairy]\b[this,6,7]在这个区域打的比较吃力吧？",
            "\t[小粽,hero]\b[hero]的确，这座塔周围都是强敌，稍不注意就会吃大亏。",
            "\t[仙琳,fairy]\b[this,6,7] 在这座魔塔中有一种类似于剑盾的宝石结晶，你现在得赶快去拿，不然接下来的战斗你会吃不消的。",
            "\t[仙琳,fairy]\b[this,6,7]我感应到四楼和七楼分别存放着是剑和盾，这消息应该会对你有所帮助。",
            "\t[小粽,hero]\b[hero]好的，我会注意的。",
            "\t[仙琳,fairy]\b[this,6,7]那我先去前面探路了~",
            {
                "type": "hide",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "firststep.mp3"
            }
        ],
        "0,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "新版商店要按V键开启。"
            ]
        }
    },
    "changeFloor": {
        "5,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "11,1": {
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,210, 81,206, 32, 81,  0,  1,  1, 81, 87,  1],
    [  1, 30, 34,  1,334,  1,  1, 21,  0, 29, 27,246,  1],
    [  1,350,  1,  1, 22,  1,  1,  0,246, 32,  1,  1,  1],
    [  1, 50,  1,  1,  1, 31, 31, 82,300, 29, 81, 31,  1],
    [  1,  1,  1,  1,  1, 31,  1, 86,  1,  1, 28,  1,  1],
    [  1,  7,131,  8,  1,  1,  1, 29, 81, 32,217, 27,  1],
    [129, 30,246, 30, 82, 88,124, 27,  1,  0,  0,  1,  1],
    [  1,221, 34,221,  1,  1,203,  1,  1, 86,  1, 32,  1],
    [  1,  1, 81,  1,  0, 21,  0,  0,203,  0, 31, 81,  1],
    [  1,203, 21,202,  0,  1, 81,  1, 29,  1, 81,  1,  1],
    [  1, 27,  1, 28,  1, 31,209,350,  1, 21,205, 27,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "firststep.mp3",
    "bg2map": [

],
    "fg2map": [

]
}