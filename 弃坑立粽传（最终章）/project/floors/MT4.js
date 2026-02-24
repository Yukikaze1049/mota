main.floors.MT4=
{
    "floorId": "MT4",
    "title": "主塔 0 层",
    "name": "0",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]这里就是魔塔内部了吗？",
        "\t[小粽,hero]\b[hero]只是站在这里就能感受到其充溢的魔力，能建造出这座高塔，真的很难想象建造出这座高塔的魔物实力......",
        "\t[小粽,hero]\b[hero]要小心行事了！",
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "down",
                "down",
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "setBlock",
            "number": "fairy",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "setBlock",
            "number": "ground",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        "\t[小粽,hero]\b[hero]嗯？",
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "setBlock",
            "number": "fairy",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "sleep",
            "time": 50
        },
        {
            "type": "setBlock",
            "number": "ground",
            "loc": [
                [
                    6,
                    8
                ]
            ]
        },
        {
            "type": "changePos",
            "direction": "down"
        },
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]是什么东西在跳来跳去？......",
        "\t[小粽,hero]\b[hero]算了，不管了。",
        {
            "type": "moveHero",
            "time": 300,
            "steps": [
                "down",
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 300
        },
        {
            "type": "playBgm",
            "name": "lolita1.mp3"
        },
        {
            "type": "setBlock",
            "number": "fairy",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        },
        "\t[???,fairy]\b[this,6,6]哈！！！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero",
            "async": true
        },
        {
            "type": "changePos",
            "direction": "up"
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]闇夜......",
        "\t[???,fairy]\b[this,6,6]你好呀~我是......",
        "\t[小粽,hero]\b[hero]\r[red]\\d斩！",
        "\t[???,fairy]\b[this,6,6]等...等一下呀！(QAQ)",
        {
            "type": "playSound",
            "name": "Attack07.ogg"
        },
        {
            "type": "animate",
            "name": "attack1",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "playSound",
            "name": "aid1.ogg"
        },
        {
            "type": "animate",
            "name": "aid1",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "小粽所施展的剑气被类似于光魔法的光环所消融了.....",
        "在那时刻，小粽无意的流露出惊骇的表情，虽然自己刚才所施展的是较为基础的剑技，但对方也不应该如此轻易的化解自己的剑技。",
        "伴随着惊骇的则是沉重的神色,小粽没有想到入口的一个魔物都有如此实力，这也使小粽更加难以看透这座魔塔内的情况。",
        "\t[???,fairy]\b[this,6,6]喂！我就打个招呼而已，你怎么就直接二话不说就开打呢？",
        "\t[小粽,hero]\b[hero]嗯？！你会说我们人类的语言？",
        {
            "type": "playSound",
            "name": "Raise1.ogg"
        },
        {
            "type": "animate",
            "name": "wuyu",
            "loc": [
                6,
                6
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[???,fairy]\b[this,6,6]哈？现在稍微有智慧的魔物都会你们人类的语言。",
        "\t[???,fairy]\b[this,6,6]而且你们人类的语言已经成我们这里“普遍”语言了呢。",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero](......看起来这里的魔物并没有像当初历史所讲述的那样\r[red]魔物都没有智慧可言并且会吞噬生命能量）",
        "\t[小粽,hero]\b[hero](至少它不会这样,不然我早就会被它给抹杀掉了......)",
        "\t[???,fairy]\b[this,6,6]喂！你在想什么事情吗？怎么就站在这里发呆了？",
        "\t[???,fairy]\b[this,6,6]难不成......你是个思维臆想者？",
        {
            "type": "sleep",
            "time": 300
        },
        "\t[???,fairy]\b[this,6,6]害，你这人真无趣，还是让我自我介绍一下吧。",
        "\t[仙琳,fairy]\b[this,6,6]我的名字叫做仙琳 我是属于仙子一族的~~ 你可以叫我仙子或者仙儿~",
        "\t[仙琳,fairy]\b[this,6,6]我们仙子一族历来都担任着引导者的身份，就比如引导像你这样的勇者。",
        "\t[小粽,hero]\b[hero](整理思绪中)你好,仙子小姐，我的名字叫小粽，请问能不能告诉我关于这座魔塔的情况?",
        "\t[仙琳,fairy]\b[this,6,6]你怎么跟以前那些勇者一样叫我仙子小姐呢（嫌弃），我有那么老吗？",
        "\t[仙琳,fairy]\b[this,6,6]算了，先不管这事，我们说重点。",
        "\t[仙琳,fairy]\b[this,6,6]这座魔塔传闻是由魔物之主建造的，也就是\r[red]\\d魔王。",
        "\t[仙琳,fairy]\b[this,6,6]从外面看，这座魔塔跟你们人类的高塔没什么区别，但是这座魔塔内部是由无数个异空间拼接而成，你在进来的时候应该感受到其充溢的魔力了吧。",
        "\t[小粽,hero]\b[hero]的确如此，我一进来就感受到了有一股强大的魔力压制着我。",
        "\t[小粽,hero]\b[hero]而且我也感受到了类似于空间魔法的力量。",
        {
            "type": "pauseBgm"
        },
        "\t[仙琳,fairy]\b[this,6,6]嗯，那就是当初魔王所布置的,而且......小粽勇者，我有个坏消息要告诉你。",
        "\t[小粽,hero]\b[hero]什么坏消息？",
        "\t[仙琳,fairy]\b[this,6,6]魔王当初所设置的传送是一种单向通行的法阵。简单的说：就是只能进来不能出去，除非是魔王亲自操作传送阵，不然是不可能离开这座魔塔的......",
        "\t[小粽,hero]\b[hero]什么？！那我岂不是不能打败魔王就无法离开这里了？！",
        "\t[仙琳,fairy]\b[this,6,6]理论上的确如此，所以小粽勇者你......",
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]呼！事到如今，只有殊死一搏了，谢谢你，仙子小姐，感谢你告诉我这些消息，我要继续前进了！",
        "\t[仙琳,fairy]\b[this,6,6](......，他的眼神居然还是如此的坚定，即使是我告诉他这座魔塔的真实情况)",
        "\t[仙琳,fairy]\b[this,6,6]（或许，他真的能创造奇迹吧。）",
        "\t[仙琳,fairy]\b[this,6,6](毕竟我也想有一天能够离开这里，去看一看他们人类的世界呢。)",
        "\t[仙琳,fairy]\b[this,6,6]对了，小粽勇者，在这座魔塔中存在有一种叫绿钥匙的东西，如果拿了的话会能够更好的应对接下来的战斗。",
        "\t[小粽,hero]\b[hero]好的，我会注意的。",
        "\t[仙琳,fairy]\b[this,6,6]那祝你武运昌隆了~",
        {
            "type": "setBlock",
            "number": "ground",
            "loc": [
                [
                    6,
                    6
                ]
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
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
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 45,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 46,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
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