main.floors.SL45=
{
    "floorId": "SL45",
    "title": "魔塔 45 层",
    "name": "魔塔45",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "10,2": {
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
                "\t[魔王,redKing]\b[this]你来了。",
                "\t[阿史,hero]\b[hero]是的，魔王，没想到我们还有联手的一天呢。",
                "\t[魔王,redKing]\b[this]是啊，本座也没有想到，自己竟然能一不小心把勇者培养得这么强大。",
                "\t[阿史,hero]\b[hero]更可笑的是，人家勇者根本不领你的情，依然要与你决斗是吧。",
                "\t[魔王,redKing]\b[this]唉，这是本座的过错，本座向你道歉 。不过你如今也变强大了，如果你能成功帮本座击退勇者，本座以后会尊重史莱姆一族，并给你封一个高高的职位的。",
                "\t[阿史,hero]\b[hero]魔王，你应该道歉的不是我，而是被你害死的魔塔底层怪物们。",
                "\t[魔王,redKing]\b[this]好啦好啦，先不追究这些事了，当前最重要的还是如何赶走入侵的勇者。这样吧，我把我的智慧权杖交给你。",
                {
                    "type": "setValue",
                    "name": "item:I361",
                    "operator": "+=",
                    "value": "1"
                },
                "\t[阿史,hero]\b[hero]嗯",
                "\t[魔王,redKing]\b[this]去干掉该死的勇者吧！",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,6": {
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
    [  1,  0,444,  0,381,  0,1285,446,  1,  0,  0,  0,  1],
    [  1, 81,  1,  1,  1,1284,  1,  0,  0,  0,1310,  0,  1],
    [  1,446,1287,  0,  1,  0,  1,1287,  1,  0,  0,  0,  1],
    [  1,379,  1,447,  0,380,1289,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1, 81,  1,  1,  1,1285,  1,444,  0,375,  1],
    [  1, 87,  1,1285,446,1284,444,  0,  1,  0, 21,  0,  1],
    [  1,  0,  1,  1, 81,  1,  0, 21, 81,1285,  0,444,  1],
    [  1,445,  1,  0, 22,  1,1283,  1,  1, 82,  1,1287,  1],
    [  1,  0,  1,379,  0,1289,  0,  1,379,385,1290,  0,  1],
    [  1,1283,  1,  1,  1,  1,445,  1,  1,  1,  1,  1,  1],
    [  1,  0, 21,445,  0,1284,  0,444,  0,1283,  0, 88,  1],
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
        11,
        11
    ]
}