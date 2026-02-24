main.floors.MT153=
{
    "floorId": "MT153",
    "title": "未知地带",
    "name": "未知地带",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 5000,
    "defaultGround": "ground",
    "bgm": "Recoil1.mp3",
    "color": null,
    "firstArrive": [
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "Recoil1.mp3",
            "keep": true
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[???,N724]\b[this,6,2]..................",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[???,N680]\b[this,7,1]喂？！你这什么意思？？！怎么他去世了你都不管的吗？！",
        "\t[???,N680]\b[this,7,1]还有你那命道牌怎么没有作用呀？！",
        "\t[???,N680]\b[this,7,1]现在好了，他所处的那个世界已经陷入了黑暗之中，我都看不到他的未来了。",
        "\t[???,N680]\b[this,7,1]这就是你想要的吗？！",
        {
            "type": "vibrate",
            "time": 500
        },
        "\t[???,N724]\b[this,6,2]..................",
        "\t[???,N680]\b[this,7,1]你说话呀？！",
        "\t[???,N724]\b[this,6,2]..........是他自己的选择。",
        "\t[???,N680]\b[this,7,1]啥？他自己选择自杀？",
        "\t[???,N680]\b[this,7,1]你耍我吧，哪有正常人会选择自杀的？！",
        "\t[???,N724]\b[this,6,2]不管你信不信，现实就是如此。",
        "\t[???,N680]\b[this,7,1]那你为什么不阻止他？",
        "\t[???,N724]\b[this,6,2]从他选择自杀的那一刻，就说明他已经没有什么价值了。",
        "\t[???,N724]\b[this,6,2]你之所以为他求情，是因为你只想看他想干什么罢了。",
        "\t[???,N724]\b[this,6,2]我看中的是人性，是人心。",
        "\t[???,N724]\b[this,6,2]而你只是为了图一时之乐罢了。",
        "\t[???,N724]\b[this,6,2]总之,这个小鬼太让我失望了。",
        "\t[???,N724]\b[this,6,2]你走吧，我要干其他的事了。",
        "\t[???,N680]\b[this,7,1]......哼！好自为之！",
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "\t[???]其实....是你让他去世的，我说对吧!",
        {
            "type": "sleep",
            "time": 500
        },
        "\t[???]\r[red]观测者！",
        {
            "type": "pauseBgm"
        },
        {
            "type": "if",
            "condition": "(item:greenKey > 0)",
            "true": [
                {
                    "type": "win",
                    "reason": "BadEnding1-无言的消逝(全绿难度)"
                }
            ],
            "false": [
                {
                    "type": "win",
                    "reason": "BadEnding1-无言的消逝(0绿难度)"
                }
            ]
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
    [  0,  0,  0,  0,  0,  0,  0,680,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,724,  0,  0,  0,  0,  0,  0],
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