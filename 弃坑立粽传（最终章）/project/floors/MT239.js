main.floors.MT239=
{
    "floorId": "MT239",
    "title": "主塔 9 层(回忆）",
    "name": "主塔 9 层(回忆）",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "defaultGround": "ground",
    "color": [
        92,
        92,
        92,
        0.27
    ],
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                92,
                92,
                92,
                0.27
            ],
            "time": 0,
            "keep": true
        },
        "\t[仙琳,fairy]\b[this,2,9]小粽勇者，再往上就到了这个区域的BOSS层了，要小心行事",
        "\t[仙琳,fairy]\b[this,2,9]以前你们人类的勇者大都数都败在了这个BOSS手中，如果没有充足的血量就不要上楼",
        "\t[小粽,hero]\b[hero]对了，仙子小姐，这座魔塔一共有多少层?",
        {
            "type": "sleep",
            "time": 1000,
            "noSkip": true
        },
        "\t[仙琳,fairy]\b[this,2,9]有多少层我也不清楚呢~应该有几百层吧",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]几......几百层？？！",
        "\t[小粽,hero]\b[hero]我现在都对付这些无智慧的魔物都感到比较吃力,那魔王究竟实力有多强？？！",
        "\t[仙琳,fairy]\b[this,2,9]我听我外婆说：魔王全盛时期可以随手毁灭一座城市.但是我听起来感觉魔王并不怎么强呢~",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]随......随手毁灭一座城市叫不怎么强？？？！",
        "\t[小粽,hero]\b[hero]要是魔王真有这实力，我们人类不早就被灭亡了.他还花什么时间建这座高塔呢？！",
        "\t[仙琳,fairy]\b[this,2,9]嗯......谁知道呢 ,或许魔王有什么其他目的和原因吧，比如：物极必反？",
        "\t[仙琳,fairy]\b[this,2,9]哎呀，管他呢，反正魔王肯定不会在意你这样的普通勇者呢~",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]仙子小姐，我知道我现在实力比较孱弱,但你能不能不要当面这样打击我呀......",
        "\t[仙琳,fairy]\b[this,2,9]啧,这你就不懂了，如果你一开始实力就比较强的话，会很容易被魔塔内某些大人物给注意到的",
        "\t[仙琳,fairy]\b[this,2,9]如果被他们注意到，魂飞魄散都是轻的,毕竟......并不是所有魔物都像我这样不敌视你们人类呢~",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]等等......某些大人物？你们魔物内部还有森严的等级秩序？",
        "\t[仙琳,fairy]\b[this,2,9]当然有呀，我们魔物等级排序甚至比你们人类还复杂",
        "\t[仙琳,fairy]\b[this,2,9]就比如说第十层和二十层的boss就是最初级的等级，",
        "\t[仙琳,fairy]\b[this,2,9]在这之上的就是四尊者了，我的两个好姐妹就是这其中的一员",
        "\t[仙琳,fairy]\b[this,2,9]再往上的其实我也不太清楚，因为我平时就在这两个级别所管理的地域活动",
        "\t[仙琳,fairy]\b[this,2,9]反正我只知道这座魔塔有一个叫“三圣阁”的高层势力，具体内容我也不清楚",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]呼~我明白了，看来这是一段不简单的旅程呀",
        "\t[仙琳,fairy]\b[this,2,9]嗯嗯，所以你先打爆楼上那个丑骷髅吧，我在十一F等你~",
        {
            "type": "changeFloor",
            "floorId": ":next",
            "loc": [
                8,
                5
            ],
            "direction": "left",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "4,9": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 27, 81, 81,207, 21, 34,  1,  1,334,350,366,  1],
    [  1,  1, 27,  1,411,  1,  1,  1, 32,  1,226,  1,  1],
    [  1,350,225,  1,  1,  1,  1,350,225,  0,  0, 27,  1],
    [  1,  1,  0,  0, 29,  0,  1,  1,  1,  1, 86,  1,  1],
    [  1,410,  0,444,  1, 34,220,  0,  0,  0,383, 33,  1],
    [  1,  1, 21,  1,  1,  1,  1,  0,  1,  1, 81,  1,  1],
    [  1,  1,  0,  0,255, 30, 82, 33,  1,  0, 32,  0,  1],
    [  1, 27,255,  1, 81,  1,  1, 21,  1,  0,  1,  0,  1],
    [  1,  1,124,  0, 88,  1,  1, 34,  1,366,  1,  0,  1],
    [  1, 34,  1, 21,  1,  1,  1, 82,  1, 81,  1, 29,  1],
    [  1, 34, 81,255, 28,  1, 87,382,207, 30,220, 21,  1],
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