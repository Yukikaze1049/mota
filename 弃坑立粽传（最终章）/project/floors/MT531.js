main.floors.MT531=
{
    "floorId": "MT531",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe6.mp3",
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "universe6.mp3",
            "keep": true
        },
        {
            "type": "function",
            "function": "function(){\ncore.removeMaps(\"MT0\", \"MT530\")\n}"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "operator": "/=",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "/=",
            "value": "2"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "2500000000"
        },
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'小粽'"
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[小粽,hero]\b[hero]咳咳咳，没想到第九重的压制居然如此强烈，我看看这第十重.......",
        {
            "type": "callBook"
        },
        "\t[小粽,hero]\b[hero]这.....这都是什么妖魔鬼怪。这加持的也太恐怖了吧。",
        "\t[小粽,hero]\b[hero]我不觉得我能够对付眼前这个家伙，还是先回去吧。",
        "\t[？？？]等一下。",
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unexpected2",
            "loc": "hero"
        },
        {
            "type": "setBlock",
            "number": "N1542",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "time": 500
        },
        "\t[小粽,hero]\b[hero]守望者前辈？你怎么会在这里？！",
        "\t[守望者,N1542]\b[this,6,6]因为一些原因我出现在这里。我现在终于找到对付第十重办法了。",
        "\t[小粽,hero]\b[hero]什么办法？",
        "\t[守望者,N1542]\b[this,6,6]你拿上这个东西，就知道了。",
        {
            "type": "choices",
            "text": "\t[小粽,hero]（感觉有点不对劲，我应该.....）",
            "choices": [
                {
                    "text": "动用守望者的底牌跑路",
                    "action": [
                        {
                            "type": "pauseBgm"
                        },
                        "\t[小粽,hero]\b[hero]...........就是现在！",
                        {
                            "type": "playSound",
                            "name": "116-Raise02.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "aid3",
                            "loc": "hero"
                        },
                        {
                            "type": "changePos",
                            "loc": [
                                51,
                                1
                            ],
                            "direction": "up"
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        "\t[守望者,N1542]\b[this,6,6]...............",
                        {
                            "type": "screenFlash",
                            "color": [
                                255,
                                0,
                                0,
                                1
                            ],
                            "time": 500,
                            "times": 1
                        },
                        "\t[守望者？,N1542]\b[this,6,6]...............呵，还挺谨慎的呢，居然直接用动了守望者底牌逃离这里.....不过",
                        {
                            "type": "playBgm",
                            "name": "disorder10.mp3",
                            "keep": true
                        },
                        {
                            "type": "playSound",
                            "name": "139-Darkness02.ogg"
                        },
                        {
                            "type": "animate",
                            "name": "attack18",
                            "loc": [
                                6,
                                6
                            ]
                        },
                        {
                            "type": "screenFlash",
                            "color": [
                                255,
                                0,
                                0,
                                1
                            ],
                            "time": 500,
                            "times": 1
                        },
                        {
                            "type": "playSound",
                            "name": "Zombie02.wav"
                        },
                        {
                            "type": "setBlock",
                            "number": "E1544",
                            "loc": [
                                [
                                    6,
                                    6
                                ]
                            ]
                        },
                        "\t[邪神·谶,E1544]\b[this,6,6]\r[red]那又如何！",
                        "\t[邪神·谶,E1544]\b[this,6,6]\r[red]你这样做只不过是苟延残喘罢了！",
                        "\t[邪神·谶,E1544]\b[this,6,6]\r[red]时间也差不多，不知道你们能够给我带来怎样的答卷呢！",
                        "\t[邪神·谶,E1544]\b[this,6,6]\r[red]哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！！",
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
                            "type": "setVolume",
                            "value": 0,
                            "time": 500
                        },
                        {
                            "type": "pauseBgm"
                        },
                        {
                            "type": "sleep",
                            "time": 500
                        },
                        {
                            "type": "setVolume",
                            "value": 90,
                            "time": 0
                        },
                        {
                            "type": "changeFloor",
                            "floorId": "MT546",
                            "loc": [
                                6,
                                9
                            ],
                            "direction": "up",
                            "time": 0
                        }
                    ]
                },
                {
                    "text": "直接接受",
                    "action": [
                        "\t[小粽,hero]好吧，究竟是什么东西？",
                        "\t[守望者,N1542]\b[this,6,6]就是这个功法。",
                        {
                            "type": "setBlock",
                            "number": "I1543",
                            "loc": [
                                [
                                    6,
                                    7
                                ]
                            ]
                        },
                        "\t[守望者,N1542]\b[this,6,6]还有这是我找到的可以炸断一层墙的神奇道具，收好。",
                        {
                            "type": "setValue",
                            "name": "item:earthquake",
                            "value": "114"
                        },
                        "\t[守望者,N1542]\b[this,6,6]对了，还有钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "value": "514"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "value": "191"
                        },
                        {
                            "type": "setValue",
                            "name": "item:redKey",
                            "value": "81"
                        },
                        "\t[守望者,N1542]\b[this,6,6]好了，就这些，不过这些只是身外之物，真正还是要靠你自己。",
                        "\t[小粽,hero]放心吧，前辈，我一定会阻止邪神·谶的。",
                        "\t[守望者,N1542]\b[this,6,6]嗯，我相信你",
                        {
                            "type": "hide",
                            "loc": [
                                [
                                    6,
                                    6
                                ]
                            ],
                            "remove": true,
                            "time": 500
                        },
                        "\t[小粽,hero]这个功法感觉好强大，如果我能完全掌握的话一定能对抗邪神·谶的！"
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
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
    [1533,90007,90007,90007,90007,90007, 87,90007,90007,90007,90007,90007,1533],
    [90007,90007,90007,90007,90007,90007,1534,90007,90007,90007,90007,90007,90007],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [348,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,364],
    [90007,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,90007],
    [1533,90007,90007,90007,90007,90007,  0,90007,90007,90007,90007,90007,1533]
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