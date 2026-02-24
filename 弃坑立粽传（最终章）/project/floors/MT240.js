main.floors.MT240=
{
    "floorId": "MT240",
    "title": "主塔 19 层(回忆）",
    "name": "主塔 19 层(回忆）",
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
        {
            "type": "sleep",
            "time": 500
        },
        "\t[仙琳,fairy]\b[this,7,5]楼上就是第二个区域的头目了，要小心行事。",
        "\t[小粽,hero]\b[hero]对了，仙子小姐，第二区域的头目有没有什么特别能力？",
        "\t[仙琳,fairy]\b[this,7,5]特别能力？他好像并没有什么......",
        "当仙琳说到这里的时候，粉嫩的小脸无意间浮现出一丝羞涩的嫣红，就如同果冻一般的鲜艳，让人产生一种想上去咬上一口的冲动。",
        "仙琳缓缓的低下了头，似乎是为了掩饰眼前的尴尬，但是其呼吸声却不由自主的厚重起来，仿佛是刚刚经历过什么“\\d大战”一样。",
        "小粽看到仙琳在讲述第二区域的头目时所展现出如同沉鱼落雁一般的神色与姿态，不禁微微一愣，但很快就恢复过来，随之嘴角一抽，心想：",
        "这个第二区域的头目是不是以前对这个她“\\d做”了些什么......",
        "此时双方都凝固在这种相对静止的状态中，此时的画面就如同艺术家所描绘的世界名画一般。",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                7,
                5
            ]
        },
        {
            "type": "sleep",
            "time": 1500
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        {
            "type": "sleep",
            "time": 1500
        },
        "\t[小粽,hero]\b[hero]喂！仙琳，醒醒！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                5
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[仙琳,fairy]\b[this,7,5]啊？啊？？怎么了？",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]......刚刚你在说到了那个第二区域的头目有什么特殊能力，难道是......",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                5
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[仙琳,fairy]\b[this,7,5]哎呀！不是你想的那样了！！",
        "\t[仙琳,fairy]\b[this,7,5]你怎么满脑子的都是些龌蹉的思想！真是讨厌死了呢！！",
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
            "time": 500
        },
        "\t[小粽,hero]\b[hero]什么叫做我思想龌龊......明明我只是问你这个区域的头目有什么特殊能力罢了，比如反击呀，净化呀...,你却突然满脸羞涩起来......。",
        "\t[仙琳,fairy]\b[this,7,5]我不管 我不管！反正就是你的错！！",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": "hero",
            "async": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]好吧，你说是就是。",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]所以这个区域的头目......",
        "\t[仙琳,fairy]\b[this,7,5]不告诉你,反正你一定可以打死那个变态的！呕!(吐舌头）",
        {
            "type": "changeFloor",
            "floorId": ":next",
            "loc": [
                3,
                3
            ],
            "direction": "down",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "8,5": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 47,  1,383,436,411, 34,411,436,383,  1, 50,  1],
    [  1, 83,  1,  1, 81,  1,  1,  1, 81,  1,  1, 83,  1],
    [  1,  0, 21,  0, 34,  0,  1,  0,  0,  0, 21,  0,  1],
    [  1,  1,  1,  1,  1,  0, 81,  0,412,  0,  1, 81,  1],
    [  1,411,411,411,  1,  0,459,124, 88,  1,411,459,  1],
    [  1,411,411,459, 81,  0,  1, 82,  1,411,411,411,  1],
    [  1,  1, 81,  1,  1,459,  1,  0,  1,  1, 81,  1,  1],
    [  1,383,495,383,  1,466,387,  0,  1,383,495,383,  1],
    [  1,  1, 81,  1,  1,  1,260,  1,  1,  1, 81,  1,  1],
    [  1, 33,466, 22, 21,  1,397,  1, 21, 22,466, 33,  1],
    [  1,367,412,383, 82,387, 87,387, 82,383,412,367,  1],
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