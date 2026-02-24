main.floors.MT21=
{
    "floorId": "MT21",
    "title": "未知地带",
    "name": "未知地带",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setBlock",
            "number": "N724",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 300,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]这！这里是......",
        "\t[???,N724]\b[this,6,2]你终于来了。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                11
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 300,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]你......你为什么跟我长的一样，你究竟是谁？！",
        "\t[???,N724]\b[this,6,2]我是谁并不重要，重要的是，这是属于你的机缘。",
        "\t[小粽,hero]\b[hero]（我......说不了话了！)",
        {
            "type": "sleep",
            "time": 300,
            "noSkip": true
        },
        "\t[???,N724]\b[this,6,2]并且，我看到了，你的未来会面临各种各样的困难与抉择，你的抉择会决定你......",
        {
            "type": "vibrate",
            "time": 500
        },
        "\t[???,N724]\b[this,6,2]呵，看来要没时间了。",
        "\t[???,N724]\b[this,6,2]也罢，在离别之前送你个小玩意，也就暂且当个机缘吧。",
        {
            "type": "addValue",
            "name": "item:I507",
            "value": "1"
        },
        "\t[???,N724]\b[this,6,2]它的名字叫做命道牌，他的唯一作用就是能够复活一次，不过它只能给你使用，对其他人是没用的，而且这卡牌用过一次就会彻底消散",
        "\t[小粽,hero]\b[hero]（能够生死人，肉白骨？？！就算是强如魔王也不可能会复活之法吧！这个跟我外貌几乎一样的人究竟是何方神圣？？！)",
        "\t[???,N724]\b[this,6,2]不用妄图猜测我的身份，现在的你是不可能猜测出来的。",
        "\t[???,N724]\b[this,6,2]你只用知道我不会加害于你就行了，至于其他的事情未来你以后会知道的。",
        "\t[???,N724]\b[this,6,2]不过......你可不要把我的存在告诉任何生灵，一旦你有那个念头，我会将你彻底\r[red]抹杀！",
        {
            "type": "vibrate",
            "time": 1000
        },
        "\t[???,N724]\b[this,6,2]看来这个空间越来越不稳定了，我得把你给送出去了。",
        {
            "type": "vibrate",
            "time": 2000,
            "async": true
        },
        "\t[???,N724]\b[this,6,2]我们还会再见面的，小粽。",
        {
            "type": "waitAsync"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500
        },
        {
            "type": "changeFloor",
            "floorId": "MT20",
            "loc": [
                4,
                10
            ],
            "time": 0
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "sleep",
            "time": 500,
            "noSkip": true
        },
        "\t[小粽,hero]\b[hero]......",
        "\t[小粽,hero]\b[hero]那个家伙......他......",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]他肯定对我是没有敌意的，不然他可以完全不需要跟我浪费时间。",
        "\t[小粽,hero]\b[hero]看来，只有登上塔顶才能得知这一切了吧......",
        "\t[小粽,hero]\b[hero]继续前进吧！",
        {
            "type": "playBgm",
            "name": "battle1.mp3"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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