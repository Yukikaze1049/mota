main.floors.MT105=
{
    "floorId": "MT105",
    "title": "登天之巅",
    "name": "登天之巅",
    "width": 15,
    "height": 15,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "bgm": "Recoil1.mp3",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "pauseBgm"
        },
        "\t[小粽,hero]\b[this,7,7]呼.....呼.....",
        "\t[小粽,hero]\b[this,7,7]呃！",
        "\t[堇,E671]\b[this,7,2]...................",
        "\t[小粽,hero]\b[this,7,7]看来.....是我赢了呢。",
        {
            "type": "vibrate",
            "time": 500
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 0,
            "keep": true
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
        "\t[小粽,hero]\b[this,7,7]怎么回事？？！为什么周围环境变这么暗？",
        {
            "type": "hideStatusBar"
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
            "time": 0
        },
        {
            "type": "playBgm",
            "name": "disorder1.mp3",
            "keep": true
        },
        {
            "type": "moveViewport",
            "time": 300,
            "async": true,
            "steps": [
                "down",
                "down",
                "down"
            ]
        },
        {
            "type": "setHeroIcon",
            "name": "hero1.png"
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "up"
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setValue",
            "name": "flag:heroLight",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0.4"
        },
        {
            "type": "setValue",
            "name": "flag:lightRadius",
            "value": "10"
        },
        {
            "type": "function",
            "function": "function(){\ncore.control.drawHero1();\n}"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "up"
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unknown",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "sleep",
            "time": 300
        },
        "\t[小粽,N676]\b[this,7,7]嗯？！你......",
        "\t[堇,N675]\b[hero]啊......啊...............",
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "show",
            "loc": [
                [
                    3,
                    4
                ]
            ],
            "time": 500
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    1
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    2
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    3,
                    10
                ]
            ],
            "time": 800
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unknown",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "right"
        },
        {
            "type": "show",
            "loc": [
                [
                    4,
                    7
                ]
            ],
            "time": 500
        },
        {
            "type": "show",
            "loc": [
                [
                    5,
                    5
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "time": 500
        },
        {
            "type": "show",
            "loc": [
                [
                    9,
                    1
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    9,
                    2
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    10,
                    3
                ]
            ],
            "time": 500
        },
        {
            "type": "show",
            "loc": [
                [
                    10,
                    9
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "show",
            "loc": [
                [
                    10,
                    11
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    10,
                    12
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    5
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "show",
            "loc": [
                [
                    11,
                    6
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "down"
        },
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                7
            ]
        },
        "此时面前的剑神星尊——堇,失去了之前冰冷的气质,，她的脸色早已苍白，她的双眼已早已空洞,如同失足少女一般",
        "胸口上的鲜血不断敲击着其脚下的地面,似乎在倾诉些什么.........",
        "之前周围不时所吹过来的微风,此时早已如同泡沫一般消融了....只听的到了不间断的——血的声音",
        "\t[小粽,N676]\b[this,7,7]你......",
        "看到眼前的一幕,小粽既感到诡异,又感到一丝迷惑",
        "在小粽说完的那一刻,堇那本来如同冰山一般冰寒冷漠的面孔..........",
        "此时却显露出令人不寒而栗的面容！",
        "此时的面容所表达的情感与之前截然不同",
        "之前是一种外在的冰冷和高冷",
        "而此时所表达的则是一种令人恐惧与心寒的情感",
        "\t[小粽,N676]\b[this,7,7]（情况不对劲,这是怎么回事?）",
        "\t[小粽,N676]\b[this,7,7]堇小姐，你..........",
        {
            "type": "playSound",
            "name": "139-Darkness02.ogg"
        },
        {
            "type": "animate",
            "name": "attack18",
            "loc": [
                7,
                2
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
            "loc": [
                7,
                7
            ],
            "async": true
        },
        "\t[小粽,N676]\b[this,7,7]（好恐怖的黑暗气息！她究竟是........）",
        "\t[小粽,N676]\b[this,7,7]（这究竟是怎么一回事??!,为什么感觉她就像变了一个人似的）",
        "此时的堇做出一个令人发指的行为",
        "她那早已沾上鲜血的玉手半覆盖在她的面容,并且不时的舔舐着她的手掌",
        "此时的堇突然停止的她之前那令人匪夷所思的行为",
        "\t[小粽,N676]\b[this,7,7]你....",
        "\t[堇,N672]\b[hero]\r[red]哼哼哼！哈哈哈哈哈！哈哈哈哈哈哈哈哈！！终于又让我感受到了！感受到那美味的鲜血了呢！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                7
            ]
        },
        "小粽此时一脸严肃的样子,并不是因为对面所说的话而感到慎重，而是因为随着说话的时候其气息正在不断飙升,已经远远凌驾于之前的实力了",
        "\t[堇,N672]\b[hero]你叫小粽没错吧,，多亏了你，让我感受到了那美味的鲜血呢",
        "\t[堇,N672]\b[hero]多少年了.我有多少年没有感受到鲜红的鲜血了呢！",
        "\t[堇,N672]\b[hero]\r[red]哼哼哼哼哼哼哼！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！！",
        "\t[堇,N672]\b[hero]这种感觉真的是令人愉悦呢！你说是不是呀?",
        "\t[小粽,N676]\b[this,7,7].......................",
        "\t[堇,N672]\b[hero]既然你让我感受到了这种快感,作为奖励....................",
        "\t[堇,N672]\b[hero]\r[red]你的身体 你的血肉 就由我来咬噬殆尽吧！",
        "\t[堇,N672]\b[hero]能够吸噬你这样的人类,\r[red]我简直就要高潮了呢！！",
        "\t[堇,N672]\b[hero]来吧,小家伙,尽情的恐惧吧,尽情的颤抖吧！",
        "\t[堇,N672]\b[hero]你心中的恐惧越大,我就能越能感受到更加愉悦的快感哟！！！",
        "\t[小粽,N679]\b[this,7,7]......看来这就是你的真实面目吗?",
        "\t[小粽,N679]\b[this,7,7]虽然我不知道为什么你的性格和实力与之前相比有了巨大的落差..............",
        "\t[小粽,N676]\b[this,7,7]但是！你是不是觉得真的就吃定我了?",
        "\t[堇,N672]\b[hero]哦呵呵呵呵呵！！小家伙，不要以为你领悟了什么属于自己的剑道，就能在我面前大放厥词了！",
        {
            "type": "moveHero",
            "time": 10,
            "steps": [
                "down",
                "down",
                "down",
                "down"
            ]
        },
        "\t[堇,N672]\b[hero]从你进入这座魔塔开始,你的命运就是陨落于此！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                7
            ]
        },
        "\t[小粽,N676]\b[this,7,7]好快的速度！",
        {
            "type": "playSound",
            "name": "050-Explosion03.ogg"
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": [
                7,
                7
            ],
            "async": true
        },
        {
            "type": "vibrate",
            "time": 500,
            "async": true
        },
        {
            "type": "turnBlock",
            "loc": [
                [
                    7,
                    7
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                7
            ],
            "time": 100,
            "keep": true,
            "steps": [
                "backward",
                "backward",
                "backward",
                "backward",
                "backward"
            ]
        },
        "\t[小粽,N676]\b[this,7,7]呃！",
        "\t[堇,N672]\b[hero]哦?看来我还小瞧你了,我这一击居然只是将你击退数步",
        {
            "type": "animate",
            "name": "yongchang",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "pauseBgm"
        },
        "\t[堇,N672]\b[hero]那么这一击,你还挡得住吗？",
        "\t[小粽,N676]\b[this,7,7]等一下！",
        "\t[堇,N672]\b[hero]哦?你有什么遗言吗。",
        "\t[小粽,N676]\b[this,7,7]你的真实身份究竟是什么?如果一开始就有这种力量的话,为什么一开始还需要与我论剑呢",
        "\t[堇,N672]\b[hero]你马上就是个死人了,这跟你有什么关系?",
        "\t[小粽,N676]\b[this,7,7]我的实力或许对于你来说的确不够看,但至少也让我做个明白鬼吧。",
        "\t[堇,N672]\b[hero]哼！你打算拖延时间？指望仙琳那个小丫头来救你?",
        "\t[堇,N672]\b[hero]小家伙,这个空间早已被我用特殊手段给封锁了。",
        "\t[堇,N672]\b[hero]别说是她，就算是魔塔高层人物也别想在短时间内攻破到这个空间！",
        "\t[堇,N672]\b[hero]在你死亡的那一刻你就会知.......",
        {
            "type": "move",
            "loc": [
                7,
                12
            ],
            "time": 10,
            "keep": true,
            "steps": [
                "forward",
                "forward",
                "forward",
                "forward",
                "forward"
            ]
        },
        {
            "type": "playBgm",
            "name": "disorder2.mp3",
            "keep": true
        },
        "\t[小粽,N676]\b[this,7,7]趁现在！天道锁！！",
        "\t[堇,N672]\b[hero]！！！",
        {
            "type": "animate",
            "name": "deep1",
            "loc": [
                7,
                5
            ],
            "async": true
        },
        {
            "type": "playSound",
            "name": "VXMagic.ogg"
        },
        {
            "type": "sleep",
            "time": 264
        },
        {
            "type": "playSound",
            "name": "VXDown.ogg"
        },
        {
            "type": "sleep",
            "time": 240
        },
        "\t[堇,N672]\b[hero]你以为暂时困住我就能将我击败?！",
        "\t[堇,N672]\b[hero]最多三秒,时间一到就是你的死期！",
        "\t[小粽,N676]\b[this,7,7]三秒！足够了！这是我唯一的机会！！受死吧！！",
        "\t[小粽,N676]\b[this,7,7]天道苍穹！",
        {
            "type": "animate",
            "name": "attack17",
            "loc": [
                7,
                5
            ],
            "async": true
        },
        {
            "type": "playSound",
            "name": "VXIce8.ogg"
        },
        {
            "type": "sleep",
            "time": 150
        },
        {
            "type": "playSound",
            "name": "VXFire4.ogg"
        },
        {
            "type": "sleep",
            "time": 90
        },
        {
            "type": "playSound",
            "name": "VXBreath.ogg"
        },
        {
            "type": "sleep",
            "time": 90
        },
        {
            "type": "playSound",
            "name": "spark1.wav"
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 100,
            "times": 10
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "sleep",
            "time": 1
        },
        {
            "type": "setCurtain",
            "time": 0
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "up"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        "\t[堇,N675]\b[hero]....................",
        "\t[小粽,N676]\b[this,7,7]........................",
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 300,
            "times": 1
        },
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "up"
        },
        {
            "type": "playBgm",
            "name": "Eternity1.mp3",
            "keep": true
        },
        "\t[小粽,N676]\b[this,7,7]噗！！咳咳咳！！",
        {
            "type": "playSound",
            "name": "attack12.wav"
        },
        "伴随着一声清脆的声音,小粽的利剑破碎了..............",
        {
            "type": "changePos",
            "loc": [
                7,
                2
            ],
            "direction": "down"
        },
        "\t[堇,N672]\b[hero]....................了不起！没想到你居然有如此实力。",
        "\t[堇,N672]\b[hero]这是你第二次伤到我了",
        "\t[堇,N672]\b[hero]但是！",
        {
            "type": "moveHero",
            "time": 10,
            "steps": [
                "down",
                "down",
                "down",
                "down"
            ]
        },
        {
            "type": "sleep",
            "time": 100
        },
        "\t[堇,N672]\b[hero]一切都结束了！",
        {
            "type": "playSound",
            "name": "attack11.wav"
        },
        "随着利刃的斩下，小粽用他那唯一可以活动的手臂挥舞着破碎的利剑挡住了堇的一击。",
        {
            "type": "vibrate",
            "time": 500,
            "async": true
        },
        "\t[堇,N672]\b[hero]有什么意义吗？不过是苟延残喘罢了！",
        "\t[小粽,N676]\b[this,7,7]........................",
        {
            "type": "playSound",
            "name": "050-Explosion03.ogg"
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": "hero"
        },
        {
            "type": "move",
            "loc": [
                7,
                7
            ],
            "time": 100,
            "keep": true,
            "steps": [
                "backward",
                "backward",
                "backward",
                "backward",
                "backward"
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
            "time": 300,
            "times": 1
        },
        {
            "type": "changePos",
            "loc": [
                7,
                6
            ],
            "direction": "down"
        },
        {
            "type": "vibrate",
            "time": 500
        },
        "\t[小粽,N676]\b[this,7,6]呃！！",
        "\t[小粽,N676]\b[this,7,6]........................你...",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "move",
            "loc": [
                7,
                12
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "forward"
            ]
        },
        "小粽用他那破碎的利剑强行插入坚硬的地面不让自己倒下.....",
        "\t[堇,N672]\b[hero]为什么？为什么你还不束手就擒？！",
        "\t[堇,N672]\b[hero]明明早就知道你与我的差距如同天壤之别，为什么还要抵抗？？！",
        {
            "type": "move",
            "loc": [
                7,
                11
            ],
            "time": 1000,
            "keep": true,
            "steps": [
                "forward"
            ]
        },
        "\t[小粽,N676]\b[this,7,6]..............因为...........我不能失败....不能....",
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 300,
            "times": 1,
            "async": true
        },
        {
            "type": "changePos",
            "loc": [
                7,
                6
            ],
            "direction": "down"
        },
        "\t[小粽,N676]\b[this,7,6]唔！咳咳咳咳咳！！！",
        "\t[小粽,N676]\b[this,7,6]我还有......未完成的..............",
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 300,
            "times": 1,
            "async": true
        },
        {
            "type": "changePos",
            "loc": [
                7,
                6
            ],
            "direction": "down"
        },
        "\t[小粽,N676]\b[this,7,6]唔！咳咳咳咳咳！！！",
        "\t[小粽,N676]\b[this,7,6]天道..............!",
        "\t[堇,N672]\b[hero]...............很遗憾，死亡是你唯一的终点。",
        "\t[堇,N672]\b[hero]闇九天！",
        {
            "type": "playSound",
            "name": "138-Darkness01.ogg"
        },
        {
            "type": "animate",
            "name": "attack19",
            "loc": [
                7,
                10
            ]
        },
        "\t[小粽,N676]\b[this,7,6]噗！！！",
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 300,
            "times": 1
        },
        {
            "type": "changePos",
            "loc": [
                7,
                6
            ],
            "direction": "down"
        },
        "\t[小粽,N676]\b[this,7,6]（要面临死亡了吗？）",
        "\t[小粽,N676]\b[this,7,6]（对不起，前辈，我的道路就此完结了.......）",
        "\t[小粽,N676]\b[this,7,6]（对不起，仙琳，我的勇者之路也就此完结了.....）",
        "\t[小粽,N676]\b[this,7,6]（对不起，母亲，小粽我终究还是未能保护好自己.....）",
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "playSound",
            "name": "Ice7.ogg"
        },
        {
            "type": "animate",
            "name": "light2",
            "loc": [
                7,
                10
            ],
            "async": true
        },
        "在小粽濒临死亡的时候,胸口上的项链突然光亮起来。",
        "\t[堇,N672]\b[hero]！！这是......",
        "\t[小粽,N676]\b[this,7,6]！！！母亲的项链？！",
        "\t[小粽,N676]\b[this,7,6]不好！！！",
        {
            "type": "vibrate",
            "time": 2000,
            "async": true
        },
        {
            "type": "setCurtain",
            "color": [
                255,
                255,
                255,
                1
            ],
            "time": 500,
            "keep": true
        },
        {
            "type": "playSound",
            "name": "051-Explosion04.ogg"
        },
        {
            "type": "sleep",
            "time": 500
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
            "keep": true
        },
        {
            "type": "sleep",
            "time": 500
        },
        "随着一声爆炸声，小粽陷入了昏迷状态。",
        "与此同时，一位仙子正在急速飞向登天之巅的最高峰。",
        "\t[仙琳,fairy]究竟发生了什么？！为什么堇姐姐体内隐藏的黑暗之力又重新涌现了！！",
        "\t[仙琳,fairy]小粽，你可千万不要出事呀！",
        "不知过了多久之后...",
        "\t[仙琳,fairy]终于进来了，堇姐姐体内的黑暗之力居然可以连禁锢空间这种魔法都使出来了！",
        "\t[仙琳,fairy]好像就在前面。",
        "仙琳到达了之前小粽与堇决战的平台，看到了早已倒在地上的小粽。",
        "\t[仙琳,fairy]小粽！",
        "仙琳立刻飞向了倒在地上的小粽,施展出了治疗魔法",
        "\t[仙琳,fairy]呼~还有呼吸！",
        "\t[仙琳,fairy]不过失血太严重了！而且体内好像有一缕堇姐姐的黑暗之力。",
        "\t[仙琳,fairy]得把小粽赶紧带到仙子一族里治疗,不然就危险了！",
        "\t[？？？]用不着这样了！",
        "\t[仙琳,fairy]！！！谁！",
        "\t[？？？]是我，仙琳妹妹。",
        "仙琳的身边突然出现了一位女子。",
        "\t[仙琳,fairy]堇姐姐？！！",
        "此时堇的服装与小粽第一次对决时的服装无异了,根本不像是之前有浴血奋战的样子。",
        "堇重新浮现出之前的高冷气质，唯独看小粽是一种复杂的眼神。",
        "\t[堇,N672]把他带到我那里吧，我有办法治好他。",
        "\t[仙琳,fairy]堇姐姐你.....",
        "\t[堇,N672]时间紧迫，到时再说。",
        "\t[仙琳,fairy].......好",
        {
            "type": "setHeroIcon",
            "name": "hero.png"
        },
        {
            "type": "setValue",
            "name": "flag:heroLight",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:darkRatio",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "flag:lightRadius",
            "value": "0"
        },
        "与此同时。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    6
                ]
            ],
            "floorId": "MT106",
            "time": 500
        },
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    11
                ]
            ],
            "floorId": "MT106",
            "time": 500
        },
        {
            "type": "changeFloor",
            "floorId": "MT106",
            "loc": [
                222,
                222
            ],
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
    [  0,20200,20201,20201,20201,20201,20201,20201,20201,20201,20201,20201,20201,20202,  0],
    [  0,20208,  0,  0,130120,  0,  0,  0,  0,130121,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,130128,  0,  0,675,  0,130129,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,130112,  0,  0,20210,  0],
    [  0,20208,  0,130114,  0,  0,  0,  0,  0,  0,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,130114,  0,  0,  0,  0,  0,130120,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,  0,130128,  0,20210,  0],
    [  0,20208,  0,  0,130115,  0,  0,679,  0,  0,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,130112,  0,  0,20210,  0],
    [  0,20208,  0,130115,  0,  0,  0,  0,  0,  0,  0,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,130114,  0,  0,  0,130120,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,130128,  0,  0,20210,  0],
    [  0,20208,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,20210,  0],
    [  0,20216,20217,20217,20217,20217,20217,20217,20217,20217,20217,20217,20217,20218,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,20209,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [  0,  0,150123,  0,  0,  0,  0,  0,  0,  0,  0,  0,150123,  0,  0],
    [  0,  0,150131,  0,  0,  0,  0,  0,  0,  0,  0,  0,150131,  0,  0],
    [  0,  0,150139,  0,  0,  0,  0,  0,  0,  0,  0,  0,150139,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,150123,  0,  0,  0,  0,  0,  0,  0,  0,  0,150123,  0,  0],
    [  0,  0,150131,  0,  0,  0,  0,  0,  0,  0,  0,  0,150131,  0,  0],
    [  0,  0,150139,  0,  0,  0,  0,  0,  0,  0,  0,  0,150139,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}