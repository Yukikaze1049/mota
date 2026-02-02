main.floors.MT40=
{
    "floorId": "MT40",
    "title": "主塔 40 层",
    "name": "40",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "aybhsboss.mp3",
    "firstArrive": [
        {
            "type": "confirm",
            "text": "确认要跳过剧情吗?",
            "yes": [
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "upFloor",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT16",
                    "loc": [
                        1,
                        6
                    ]
                }
            ],
            "no": [
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        9
                    ],
                    "time": 500
                },
                {
                    "type": "changePos",
                    "direction": "up"
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        4
                    ]
                },
                "\t[红骑士,redKnight]\b[this,6,4]吼!",
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "E841",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ]
                },
                "\t[火焰骑士,E841]\b[this,6,4]吼!",
                "\t[奕开,hero]\b[hero]我靠，这是……红骑士进化雷劫",
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        4,
                        2
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        8,
                        2
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        4,
                        6
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        8,
                        6
                    ],
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        4
                    ]
                },
                "\t[火焰骑士,E841]\b[this,6,4]啊！",
                "\t[奕开,hero]\b[hero]好可怕的雷劫……",
                "\t[火焰骑士,E841]\b[this,6,4]什么人？",
                "\t[奕开,hero]\b[hero]糟了，被发现了!口吐人言，它竟然进化为五阶灵兽了!",
                "\t[火焰骑士,E841]\b[this,6,4]该死的人类，竟敢偷窥我渡劫，找死！",
                {
                    "type": "animate",
                    "name": "thunder",
                    "loc": [
                        6,
                        4
                    ]
                },
                {
                    "type": "animate",
                    "name": "bigExplosion",
                    "loc": [
                        6,
                        4
                    ]
                },
                "\t[火焰骑士,E841]\b[this,6,4]啊！",
                "\t[奕开,hero]\b[hero]可恶，我得赶紧跑，趁着它还未渡劫成功。",
                "\t[火焰骑士,E841]\b[this,6,4]可恶的人类，我必杀你！",
                {
                    "type": "changePos",
                    "direction": "down"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            4
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "E841",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                "\t[火焰骑士,E841]\b[this,6,10]哪里跑！",
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        8
                    ],
                    "time": 500
                },
                {
                    "type": "jumpHero",
                    "loc": [
                        6,
                        5
                    ],
                    "time": 500
                },
                "\t[奕开,hero]\b[hero]这位大哥，我只是路过此地，不是有意窥探你渡劫……",
                "\t[火焰骑士,E841]\b[this,6,10]我渡劫的动静这么大，你跑来说不是有意，骗谁呢？你今天就和这片森林一起消失吧！",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "to": [
                        6,
                        8
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "animate",
                    "name": "领域",
                    "loc": [
                        5,
                        1
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "领域",
                    "loc": [
                        3,
                        5
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "领域",
                    "loc": [
                        8,
                        5
                    ],
                    "async": true
                },
                {
                    "type": "animate",
                    "name": "领域",
                    "loc": [
                        6,
                        7
                    ],
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            1
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            3
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            2
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            9,
                            3
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            8,
                            4
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            8,
                            6
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            3,
                            5
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            4,
                            6
                        ]
                    ],
                    "remove": true,
                    "async": true
                },
                {
                    "type": "waitAsync"
                },
                "\t[火焰骑士,E841]\b[this,6,8]何人阻我?",
                {
                    "type": "animate",
                    "name": "yongchang",
                    "loc": [
                        6,
                        9
                    ]
                },
                {
                    "type": "setBlock",
                    "number": "N996",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ]
                },
                "\t[???,N996]\b[this,6,9]是我，碧灵仙子。",
                "\t[火焰骑士,E841]\b[this,6,8]哈哈哈，原来是“木灵”碧灵仙子啊，久仰久仰。",
                "\t[碧灵仙子,N996]\b[this,6,9]火焰骑士，恭喜你晋级五阶灵兽。不过，你最好是不要在这里再造杀孽了。",
                "\t[火焰骑士,E841]\b[this,6,8]怎么，碧灵仙子要救这个人类吗？",
                "\t[碧灵仙子,N996]\b[this,6,9]我是在救你！这个人类身上有玄金琉璃、冰炮玄武、飞天神雀、魔焰星君的气息，恐怕不是你能得罪的起的!",
                "\t[奕开,hero]\b[hero]玄金琉璃是金若美学姐的灵兽，冰炮玄武是邓天博学长的灵兽，我的确接触过，飞天神雀也是灵兽学院的守护神兽，我偶然接触也是可能……",
                "\t[奕开,hero]\b[hero]魔焰星君……灵兽榜排名第三的火系王者，百年前因为灵兽大战，主人战死后就隐居了，再也没有在灵兽学院出现过，我啥时候沾染了它的气息?",
                "\t[火焰骑士,E841]\b[this,6,8]哼，管你说破天，你一个木系灵兽还想在我火系灵兽面前救人，真是天大的笑话！",
                "\t[碧灵仙子,N996]\b[this,6,9]哦?这么说来，火焰骑士你是觉得我打不过你了?",
                "\t[火焰骑士,E841]\b[this,6,8]哈哈哈，木灵大人，别怪我不客气啦!",
                {
                    "type": "animate",
                    "name": "领域",
                    "loc": [
                        6,
                        10
                    ],
                    "async": true
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        8
                    ],
                    "to": [
                        6,
                        7
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[火焰骑士,E841]\b[this,6,7]啊！木灵大人饶命啊！",
                "\t[碧灵仙子,N996]\b[this,6,9]真以为进阶五阶灵兽，属性克制就可以放肆了吗？在我面前，你依然不过是一阶灵兽与五阶灵兽的差距。还不快滚！",
                "\t[火焰骑士,E841]\b[this,6,7]是!",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            7
                        ]
                    ],
                    "remove": true
                },
                "\t[奕开,hero]\b[hero]多谢阁下救命之恩！",
                "\t[碧灵仙子,N996]\b[this,6,9]不用客气，我只是感受到你身上有玄金琉璃的气息，想必你与它的主人是熟悉的，有空我想与玄金琉璃较量较量。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            9
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "N334",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "to": [
                        5,
                        6
                    ],
                    "time": 500,
                    "keep": true
                },
                {
                    "type": "setBlock",
                    "number": "N1055",
                    "loc": [
                        [
                            6,
                            10
                        ]
                    ]
                },
                {
                    "type": "jump",
                    "from": [
                        6,
                        10
                    ],
                    "to": [
                        7,
                        6
                    ],
                    "time": 500,
                    "keep": true
                },
                "\t[韩樱姝,N1036]\b[this,7,6]开哥哥，你没事，太好了！",
                "\t[奕开,hero]\b[hero]樱姝!立天!",
                "\t[立天,N331]\b[this,5,6]我们刚刚看到这里有巨大动静，很多灵兽都往相反方向跑，我们怕你有威胁，就跑过来看看。",
                "\t[奕开,hero]\b[hero]还好还好，刚刚这里有一个五阶火系灵兽渡劫，你们幸好来的晚，它发现我窥探，要杀我灭口。",
                "\t[奕开,hero]\b[hero]好在这里突然出现一个自称碧灵仙子的灵兽，出现阻止了它。",
                "\t[立天,N331]\b[this,5,6]碧灵仙子?你竟然看到了碧灵仙子!",
                "\t[奕开,hero]\b[hero]怎么了？碧灵仙子看起来很厉害的样子，不过可惜没有上灵兽榜。",
                "\t[立天,N331]\b[this,5,6]灵兽榜是人类培养的最强灵兽排行，碧灵仙子这种无主灵兽自然不在此中。不过，无主灵兽也有十二个很厉害的，分别是六灵和六御。",
                "\t[立天,N331]\b[this,5,6]碧灵仙子就是“六灵”之一的“木灵”，很是强大。",
                "\t[奕开,hero]\b[hero]咱们还得深入才行，只捉了一个紫骷髅……",
                "\t[韩樱姝,N1036]\b[this,7,6]不用了，我刚刚在路上碰到两只二阶灵兽打架，打得两败俱伤，我顺手就抓了，咱们可以回去交差啦。",
                "\t[奕开,hero]\b[hero]太好了",
                {
                    "type": "hide",
                    "loc": [
                        [
                            5,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            7,
                            6
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "N1002",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ],
                    "floorId": "MT3"
                },
                {
                    "type": "setBlock",
                    "number": "N334",
                    "loc": [
                        [
                            2,
                            8
                        ]
                    ],
                    "floorId": "MT3"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT3",
                    "loc": [
                        3,
                        9
                    ],
                    "direction": "up"
                },
                "\t[奕开,hero]\b[hero]你是什么人？",
                "\t[???,N1002]\b[this,2,5]哈弥类•尼宇拜见皇子殿下。",
                "\t[奕开,hero]\b[hero]!!!!",
                "\t[立天,N331]\b[this,2,8]无妨，尼宇表哥是自己人。尼宇表哥，这是我的侍卫，奕开。",
                "\t[尼宇,N1002]\b[this,2,5]怎么会只有一个侍卫?殿下……",
                "\t[立天,N331]\b[this,2,8]今时不同往日，我在这里有金莫院长庇护，倒是无需太多侍卫。",
                "\t[尼宇,N1002]\b[this,2,5]那怎么可以，我会派两个五阶训练师在暗中保护殿下的，这个小子不过是个低阶训练师，如何靠得住",
                "\t[奕开,hero]\b[hero]……",
                "\t[立天,N331]\b[this,2,8]尼宇表哥，我信得过我的侍卫。",
                "\t[尼宇,N1002]\b[this,2,5]殿下这个侍卫，可是叫奕开?",
                "\t[奕开,hero]\b[hero]正是。",
                "\t[尼宇,N1002]\b[this,2,5]好好干，不错。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            5
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "turnBlock",
                    "direction": "down",
                    "loc": [
                        [
                            2,
                            8
                        ]
                    ]
                },
                "\t[立天,N331]\b[this,2,8]尼宇是支持我的一个世子，你不必担心。",
                "\t[奕开,hero]\b[hero]嗯。",
                {
                    "type": "hide",
                    "loc": [
                        [
                            2,
                            8
                        ]
                    ],
                    "remove": true
                },
                {
                    "type": "setBlock",
                    "number": "npc1",
                    "loc": [
                        [
                            10,
                            9
                        ]
                    ],
                    "floorId": "MT3"
                },
                "\t[沈清妍,npc0]\b[this,10,9]奕开，你在这里呀。",
                {
                    "type": "changePos",
                    "direction": "right"
                },
                "\t[奕开,hero]\b[hero]怎么了？沈同学。",
                "\t[沈清妍,npc0]\b[this,10,9]邓天博学长找你，快过去一趟吧。他在\r[red]学院东侧\r[]",
                {
                    "type": "hide",
                    "loc": [
                        [
                            10,
                            9
                        ]
                    ],
                    "floorId": "MT3",
                    "remove": true
                },
                {
                    "type": "show",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "floorId": "MT16"
                },
                {
                    "type": "setBlock",
                    "number": "upFloor",
                    "loc": [
                        [
                            12,
                            6
                        ]
                    ],
                    "floorId": "MT16"
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,1104,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,1104,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,1104,  0,  0,  0,  0,1104,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,227,  0,1104,  0,  0,  0, 20],
    [ 20,  0,1104,1104,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,1104,  0,  0,  0,1104,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,1104,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20,  0, 20, 20, 20, 20, 20, 20],
    [ 20,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 20],
    [ 20,  0,  0,  0,  0,  0, 88,  0,  0,  0,  0,  0, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10006,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,10006,10006,10006,10006,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,10006,10006,10006,10006,10006,10006,  0,  0,  0],
    [  0,  0,  0,10006,10006,10006,10006,10006,10006,  0,  0,  0,  0],
    [  0,  0,10006,10006,10006,10006,10006,10006,10006,  0,  0,  0,  0],
    [  0,  0,  0,10006,10006,10006,10006,10006,10006,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,10006,10006,10006,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,10006,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        11
    ]
}