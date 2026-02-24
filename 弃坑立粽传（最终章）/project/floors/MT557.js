main.floors.MT557=
{
    "floorId": "MT557",
    "title": "未知之地",
    "name": "未知之地",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "Sky4.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe4.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 50000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 100000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 5000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 25000000
        }
    ],
    "parallelDo": "",
    "events": {
        "3,11": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 150
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "1,9": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 150
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "8,9": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 150
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "12,9": [
            "\t[邪神·谶,E1544]\b[this,6,1]好好回忆一下吧，当初你所看到的那副光景！",
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 250
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "11,0": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 250
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "8,7": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 250
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "2,5": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 500
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 0
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            }
        ],
        "6,3": [
            {
                "type": "playSound",
                "name": "Paralyze1.ogg"
            },
            {
                "type": "showImage",
                "code": 1,
                "image": "stop8.png",
                "loc": [
                    0,
                    0
                ],
                "opacity": 1,
                "time": 1000
            },
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true,
                "async": true
            },
            {
                "type": "hideImage",
                "code": 1,
                "time": 500
            },
            {
                "type": "sleep",
                "time": 500
            },
            "\t[邪神·谶]没错，就在她刚刚成为神灵的那一天，她就已经死了。",
            "\t[邪神·谶]虽然这对你来说的确是不可想象，不可相信的场景，但是现实就是这样令人无奈的。",
            "\t[邪神·谶]守望者为了阻止世界线的崩坏，亲手将她杀害了！",
            "\t[邪神·谶]至于你问我仙琳既然已经死了，那为什么重新复活呢，那是因为.........",
            "\t[邪神·谶]是我创造了当初魔塔世界第一位神灵仙雅！也就是仙琳！",
            "\t[邪神·谶]在神灵仙雅死亡之后，我创造了一个与仙雅一模一样的复制品，并且将仙雅的善意人格灌输到这里....并且将其丢入时间长河，等有朝一日能够为我凝练出至强的情感。",
            "\t[邪神·谶]至于你问我这是怎么做到的，答案很简单，因为你们所处的这个魔塔世界也是我创造的，所有的故事都是我设计好的！我既然都能够做到这些，那本座也肯定能够做到之前的那一步。",
            "\t[邪神·谶]无论是魔王与仙梦之间的因缘，还是你与仙琳之间的因缘，都不过是我创造的产物罢了。",
            {
                "type": "setCurtain",
                "time": 1000
            },
            "\t[邪神·谶,E1544]\b[this,6,1]所以.........你明白了吗？",
            "\t[邪神·谶,E1544]\b[this,6,1]与你相遇定下誓言的仙琳......",
            "\t[邪神·谶,E1544]\b[this,6,1]是复制人。",
            "\t[邪神·谶,E1544]\b[this,6,1]你所坚信的东西，全都是由我创造出来的意识！",
            "\t[邪神·谶,E1544]\b[this,6,1]你们的一切旅途，都是由我所写下的故事！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            "\t[小粽,hero]\b[hero]..................",
            "\t[小粽,hero]\b[hero]..........................",
            "\t[小粽,hero]\b[hero].................................",
            "\t[小粽,hero]\b[hero].................................那",
            "\t[小粽,hero]\b[hero].......................",
            "\t[邪神·谶,E1544]\b[this,6,1]看来你已经彻底迷失自己前进的目的，也罢就让我........",
            "\t[小粽,hero]\b[hero].......................",
            "\t[小粽,hero]\b[hero].......................",
            {
                "type": "playBgm",
                "name": "hope4.mp3",
                "keep": true
            },
            "\t[小粽,hero]\b[hero]....\r[red]那又怎么样！！！",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    1
                ]
            },
            "\t[邪神·谶,E1544]\b[this,6,1]............你说什么？！！",
            "\t[小粽,hero]\b[hero]\r[red]别开玩笑了！",
            "\t[小粽,hero]\b[hero]\r[red]仙琳就是仙琳！",
            "\t[小粽,hero]\b[hero]我们所创造的\r[red]回忆.......",
            "\t[小粽,hero]\b[hero]\r[red]不是你这种家伙能够捏造出来的意识！！",
            "\t[小粽,hero]\b[hero]我们的\r[red]长途跋涉.......\r[white]我们之间所结下的\r[red]因缘......",
            "\t[小粽,hero]\b[hero]\r[red]不是你所能写出来的故事！！",
            "\t[小粽,hero]\b[hero]像你这种家伙.......",
            "\t[小粽,hero]\b[hero]你这种只会身处高处看事物的家伙........怎么可能！",
            "\t[小粽,hero]\b[hero]\r[red]理解我们的“想法”！！",
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
                "type": "changeFloor",
                "floorId": "MT558",
                "loc": [
                    6,
                    10
                ],
                "direction": "down",
                "time": 500
            },
            {
                "type": "insert",
                "loc": [
                    0,
                    0
                ],
                "floorId": "MT558"
            },
            {
                "type": "hide",
                "remove": true,
                "time": 0
            },
            {
                "type": "waitAsync"
            }
        ],
        "6,0": [
            "\t[小粽,hero]\b[hero]如果是虚假的记忆是不会触动心灵的。但是！",
            "\t[小粽,hero]\b[hero]\r[red]我现在的确被触动了。",
            "\t[小粽,hero]\b[hero]所以我........",
            "\t[小粽,hero]\b[hero]\r[red]相信此时此刻的情感！",
            "\t[小粽,hero]\b[hero]什么是真实的......什么是虚伪的.......",
            "\t[小粽,hero]\b[hero]\r[red]此时此刻\r[white]的这个瞬间......",
            "\t[小粽,hero]\b[hero]只有这份情感是........\r[red]绝对不会是虚假的！",
            "\t[小粽,hero]\b[hero]只有拥有这份情感......",
            "\t[小粽,hero]\b[hero]我就可以继续前进！",
            "\t[小粽,hero]\b[hero]绝对不会输给你这种家伙！！",
            "\t[邪神·谶,E1544]\b[this,6,1]实在是太有趣了。",
            "\t[邪神·谶,E1544]\b[this,6,1]既然你这么说.......就来试试我的这份“意识”究竟有多少能耐吧！",
            {
                "type": "playSound",
                "name": "Thunder03.ogg"
            },
            {
                "type": "animate",
                "name": "attack6",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "playSound",
                "name": "157-Skill01.ogg"
            },
            {
                "type": "animate",
                "name": "attack7",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "animate",
                "name": "attack8",
                "loc": [
                    6,
                    1
                ]
            },
            "\t[邪神·谶,E1544]\b[this,6,1]只有这种程度的力量吗？这点力量连饶痒痒都算不上啊！",
            "\t[小粽,hero]\b[hero]该死！为什么会无法对你造成伤害！",
            "\t[邪神·谶,E1544]\b[this,6,1]本以为你刚才说了一些慷慨激昂的话之后能给予我更多的惊喜，看来我最后得到的还是与之前一样的结果啊。",
            "\t[？？？]不要轻易放弃希望，现在还不是绝望的时候。",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    1
                ],
                "async": true
            },
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero"
            },
            "\t[小粽,hero]\b[hero]这声音是？",
            {
                "type": "playSound",
                "name": "087-Action02.ogg"
            },
            {
                "type": "animate",
                "name": "buff1",
                "loc": [
                    6,
                    2
                ]
            },
            {
                "type": "setBlock",
                "number": "E1555",
                "loc": [
                    [
                        6,
                        2
                    ]
                ],
                "time": 0
            },
            "\t[弃坑立粽,E1555]\b[this,6,2]以神的名义，将希望带到这个即将被黑暗所侵蚀的世界！",
            "\t[邪神·谶,E1544]\b[this,6,1]哦？你终于来了，本座还以为你要继续当缩头乌龟呢。",
            "\t[弃坑立粽,E1555]\b[this,6,2]邪神·谶，这一次，你已经输了！",
            "\t[邪神·谶,E1544]\b[this,6,1]哦？是吗，就算多加上你一人又如何呢？！",
            "\t[弃坑立粽,E1555]\b[this,6,2]那就让你好好看看吧！",
            "\t[弃坑立粽,E1555]\b[this,6,2]以神的名义，粉碎这场虚妄的游戏吧！",
            {
                "type": "screenFlash",
                "color": [
                    255,
                    255,
                    255,
                    1
                ],
                "time": 500,
                "times": 1
            },
            {
                "type": "playSound",
                "name": "051-Explosion04.ogg"
            },
            {
                "type": "changeFloor",
                "floorId": "MT562",
                "loc": [
                    6,
                    11
                ],
                "direction": "up",
                "time": 0
            }
        ]
    },
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,1395,  0,1138,1138,1138,1138,1138,  0,336,1549,  0,352],
    [  0,1138,  0,1138,1138,1138,1544,1138,1395,1138,1138,1138,  0],
    [384,1138,336,1138,1138,1138,  0,1138,  0,352,  0,1138,336],
    [1550,1138,1550,1138,1138,1138,  0,1138,1138,1138,1549,1138,1549],
    [384,1138,384,1138,1138,1138,  0,1138,1138,1138,336,1138,352],
    [  0,1138,  0,  0,352,1550,384,1138,1138,1138,  0,1138,  0],
    [  0,1138,1138,1138,1138,1138,1138,1138,1138,1138,384,1138,336],
    [352,1550,  0,384,1395,336,1550,336,  0,384,1550,1138,1549],
    [1138,1138,1138,1138,1138,1138,1138,1138,1138,1138,1138,1138,352],
    [336,  0,1546,352,  0,1546,1276,352,  0,1138,1138,1138,  0],
    [1546,1138,1138,1138,1138,1138,1138,1138,1546,1138,1138,1138,336],
    [  0,352,1546,  0,336,1546,  0,1138,336,1138,1138,1138,1549],
    [1138,1138,1138,1138,1138,1138,  0,1138,  0,  0,1549,352,  0]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0, 17, 17, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0],
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
    "bg2map": [

],
    "fg2map": [

]
}