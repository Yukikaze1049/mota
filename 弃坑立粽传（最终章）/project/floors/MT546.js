main.floors.MT546=
{
    "floorId": "MT546",
    "title": "未知空间",
    "name": "未知空间",
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
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe4.mp3",
    "firstArrive": [
        {
            "type": "hideStatusBar"
        },
        {
            "type": "playBgm",
            "name": "hope3.mp3",
            "keep": true
        },
        {
            "type": "changePos",
            "loc": [
                41,
                1
            ],
            "direction": "up"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[星钰,N1401]\b[this,9,6]\r[red]唔！",
        "\t[君无天,N1400]\b[this,3,6]星钰！没事吧。",
        "\t[记录者,N680]\b[this,6,3]果然...只靠让你们担任观测者之声还是有些困难了。",
        "\t[记录者,N680]\b[this,6,3]要不你先休息吧，长时间的消耗精神力对你来说太过致命了，毕竟你的身体并没有达到神灵的境界。",
        "\t[星钰,N1401]\b[this,9,6]\r[red]多谢，但是不用。",
        "\t[君无天,N1400]\b[this,3,6]可是........",
        "\t[星钰,N1401]\b[this,9,6]父亲大人，我已经不是那个曾经需要您保护的孩子了，现在我已经有自己的主见了，有自己的想法了。",
        "\t[君无天,N1400]\b[this,3,6]........我知道了。",
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                6,
                9
            ]
        },
        {
            "type": "changePos",
            "loc": [
                6,
                9
            ],
            "direction": "up"
        },
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                3
            ],
            "async": true
        },
        {
            "type": "sleep",
            "time": 200
        },
        {
            "type": "setBlock",
            "number": "N1252",
            "loc": [
                [
                    3,
                    6
                ]
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "N1250",
            "loc": [
                [
                    9,
                    6
                ]
            ]
        },
        "\t[星钰,N1401]\b[this,9,6]小粽！你回来了。",
        "\t[君无天,N1400]\b[this,3,6]这实力.........完全无法匹敌.....你究竟闯到了第几重？",
        "\t[记录者,N680]\b[this,6,3]嗯........回来的时间的确差不多，看来你这次旅途还比较顺利。",
        "\t[小粽,hero]\b[hero]...................",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]记录者前辈，守望者前辈去哪里了？",
        "\t[记录者,N680]\b[this,6,3]守望者去寻找能够对付邪神·谶的办法了，不久就能回来。",
        "\t[小粽,hero]\b[hero]...............是吗？",
        "\t[记录者,N680]\b[this,6,3]嗯？看你这表情，难道出什么事了吗。",
        "\t[小粽,hero]\b[hero]......我在第十重的门口见到了守望者。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                3
            ]
        },
        "\t[星钰,N1401]\b[this,9,6]什么？第十重？！",
        "\t[君无天,N1400]\b[this,3,6]重点不是这个，你是说你在那个地方见到了守望者？？！",
        "\t[小粽,hero]\b[hero]...............嗯。",
        "\t[君无天,N1400]\b[this,3,6]不可能！明明守望者去寻找对付邪神·谶的办法了，怎么可能会到小粽你那里去。",
        "\t[君无天,N1400]\b[this,3,6]记录者前辈，你知道是怎么一回事吗？",
        "\t[记录者,N680]\b[this,6,3].........只有一种可能，你见到的那个人是邪神·谶。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[星钰,N1401]\b[this,9,6]！！！",
        "\t[君无天,N1400]\b[this,3,6]什么？！邪神·谶！！",
        "\t[小粽,hero]\b[hero]原来如此....我说为什么我看到他伪装成守望者模样的时候隐隐约约感觉他极其危险。",
        "\t[记录者,N680]\b[this,6,3]你之所以看到他是守望者模样是因为他正在对你进行思维误导，这是也是他最擅长的能力。",
        "\t[记录者,N680]\b[this,6,3]还好你反应的快，如果你刚才再拖延的话就危险了。",
        "\t[记录者,N680]\b[this,6,3]不过没想到邪神·谶居然打算以这种方法来对付我们....果然他说的游戏只是捉弄我们罢了。",
        {
            "type": "playBgm",
            "name": "disorder10.mp3",
            "keep": true
        },
        "\t[邪神·谶]七日期限已过，不知道你们准备好了没有？",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                3
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[记录者,N680]\b[this,6,3]是他！没想到这么快就来了！！",
        "\t[星钰,N1401]\b[this,9,6]记录者前辈，我们该怎么办，守望者和仙琳都还没有回来。",
        "\t[记录者,N680]\b[this,6,3]该死，如果再多半天时间就能.......",
        "\t[小粽,hero]\b[hero]就让我一个人先拖住他吧。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                3,
                6
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                6
            ],
            "async": true
        },
        "\t[星钰,N1401]\b[this,9,6]可是这太危险了！",
        "\t[小粽,hero]\b[hero]但现在也没有更好的办法了。毕竟现在在这里的就属我战力最高了。",
        "\t[记录者,N680]\b[this,6,3]现在只能这样......我们三人必须得在这里链接情感中枢将所有人顺利带回来。而小粽必须在守望者和仙琳回来之前拖延住邪神·谶。",
        "\t[小粽,hero]\b[hero]嗯，先走了，不能让那个家伙进来破坏这里。",
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
        "小粽在说完之后就跨越空间离开了这里，并没有说些什么",
        "因为在这种情况下言语只会成为累赘。",
        "在小粽出来的那一刻等待他的就是这一切的黑幕——邪神·谶！",
        {
            "type": "pauseBgm"
        },
        {
            "type": "changeFloor",
            "floorId": "MT554",
            "loc": [
                6,
                12
            ],
            "direction": "up",
            "time": 0
        },
        {
            "type": "waitAsync"
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
    [  0,  0,  0,101,  0,  0,  0,  0,  0,101,  0,  0,  0],
    [  0,  0,  0,102,  0,  0,680,  0,  0,102,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,101,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,1400,  0,  0,102,  0,  0,1401,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,101,  0,  0,  0,  0,  0,101,  0,  0,  0],
    [  0,  0,  0,102,  0,  0,  0,  0,  0,102,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,143,143,143,143,143,143,143,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}