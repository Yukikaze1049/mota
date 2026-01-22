main.floors.MT153=
{
    "floorId": "MT153",
    "title": "最终之塔18层",
    "name": "最终之塔18层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 7,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "bz.mp3"
        },
        {
            "type": "autoText",
            "text": "前方即将开始战斗，请做好准备（调整技能、道具等）再前进\n（完善到最优地步后就大胆前进吧）",
            "time": 3000
        },
        {
            "type": "setValue",
            "name": "flag:jqjs",
            "value": "0"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,2": [
            {
                "type": "setVolume",
                "value": 100,
                "time": 1
            },
            {
                "type": "playBgm",
                "name": "bz.mp3",
                "keep": true
            },
            {
                "type": "loadBgm",
                "name": "htls.mp3"
            },
            "\t[怀特莉丝,N430]\b[this,5,4]闻斯莫提！！！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]终于来了啊……我已经恭候多时了。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵……你们也太慢了吧。",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "down:1"
                ]
            },
            "\t[hero]\b[hero]看你的态度……是认为我们没办法打败你吗？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]哈哈哈哈！当然。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]难道你们认为我会打没有准备的仗吗？",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    4
                ]
            },
            "\t[怀特莉丝,N430]\b[this,5,4]难道你认为你现在能够打赢完全体的我？",
            "\t[怀特莉丝,N430]\b[this,5,4]我能感觉到你目前的状态可是很虚弱。",
            "\t[怀特莉丝,N430]\b[this,5,4]就连跟当初讨伐我时来比都差远了。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]啊……是啊……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]过去这么多年了……依旧没有恢复过来……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]看来人成为塔主终究还是有着局限性。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]八十年前冒出来的那个黑骑士……你们应该也体会过他的力量了吧？",
            "\t[hero]\b[hero]……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]是个很出色的勇者啊……比当初的我们四人都更优秀。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]是个很厉害的后辈啊。",
            "\t[hero]\b[hero]这可不像是把他变成战斗傀儡的始作俑者说出的话。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵……只是作为曾经的前辈感慨一下罢了。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]在我刚成为塔主后，一直在寻找如何可以不依靠吸取惶惑卿魔力，依旧能作为塔主的方法。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]但拜那个黑骑士所赐，我险些失去魔塔的控制权。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]这也是为什么这座塔消失了那么久的缘故。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵，那可真是一次两败俱伤的战斗。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]那个黑骑士死亡，而我则被破坏掉了吸收回路，导致我空有一堆惶惑卿的魔力，却无法将它转换成自己的魔力，差点就连魔塔也维持不了。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]这才不得不暂时将魔塔封印起来。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]好不容易经过了八十年的岁月，我终于恢复了一些力量，将魔塔重新解封。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]刚试图汲取这周边村民的生命，重新发展魔塔。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]却遇上了你们这三个实力不容小觑的讨伐者。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]还真是造化弄人……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]不过啊我转念一想……这或许也是一个机会。",
            "\t[怀特莉丝,N430]\b[this,5,4]别说废话了！",
            "\t[怀特莉丝,N430]\b[this,5,4]你只需要把你的命交代在这就行了！",
            {
                "type": "move",
                "loc": [
                    5,
                    4
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    6
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    6
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:1"
                ]
            },
            "\t[怀特莉丝,N430]\b[this,5,5]……！？",
            "\t[怀特莉丝,N430]\b[this,5,5]刚刚我的魔力被他夺走了一部分？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]我的命吗？呵呵……我可没有活够啊……我有多珍惜自己的生命，你应该最清楚不过。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]你难道认为我就这么白白让你回收力量吗？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]从一开始我就决定了，让你重新找回力量，成为当初的状态。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]而我将会再一次执行掠夺仪式！",
            "\t[怀特莉丝,N430]\b[this,5,5]你！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]没错！不过又是重现一出几百年前的那场结局罢了！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵……你们的行动我从一开始就掌握着。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]真以为自己能够一路取回力量然后杀了我吗？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]哪有这么好的事情！",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    5
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        2
                    ]
                ],
                "remove": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    3
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:1"
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        1
                    ]
                ],
                "remove": true
            },
            {
                "type": "move",
                "loc": [
                    5,
                    2
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:1"
                ]
            },
            "\t[怀特莉丝,N430]\b[this,5,1]啊啊啊！！！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]就是这样！力量再一次回来！这可比吸收那些村民后再慢慢发展要快多了！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]你们终究……只是被我操纵的棋子！",
            "\t[hero]\b[hero]可恶！",
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:4"
                ]
            },
            {
                "type": "animate",
                "name": "jianji2",
                "loc": [
                    6,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "backward:1"
                ]
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]怎么？急着寻死么？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]留你性命到现在，已经称得上是慈悲了吧？",
            "\t[hero]\b[hero]仁慈？哼哼……我看是愚蠢才对！",
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "jianji2",
                "loc": [
                    6,
                    8
                ]
            },
            "\t[hero]\b[hero]你就后悔让我活到现在吧！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]嘴巴真硬啊！你现在想使用那个传送同伴的护符吧？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵……我早就将这里布下了魔力结界，除了目前作为这座塔主人的我，其他人都无法进来！",
            "\t[hero]\b[hero]靠！还真用不了了……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]而在我重新恢复惶惑的力量后，你还能拿什么和我打？",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "backward:3"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[hero]\b[hero]唔……！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    1
                ],
                "async": true
            },
            "\t[怀特莉丝,N430]\b[this,5,1]啊啊啊！！！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]呵呵……力量回来了……回来了！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]终于恢复到一半的程度了……这下我也可以自由战斗了！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]怀特莉丝你就继续待在塔底成为我的魔力源吧。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]当然，等我研究出如何不需要借用你力量后就会赐你一死的，哈哈哈！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]好了……约瑟。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]面对全盛状态的我，你还能有什么办法？",
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "animate",
                "name": "jianji2",
                "loc": [
                    6,
                    5
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,6]什么！？",
            "\t[hero]\b[hero]怀特莉丝的力量并没有被你完全夺走……",
            "\t[hero]\b[hero]还留下一部分……虽然不多……",
            "\t[hero]\b[hero]但那也是始祖之力！",
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "jianji2",
                "loc": [
                    6,
                    6
                ],
                "async": true
            },
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]契约？原来如此……她之前在你身上立下的契约上，留下了她的一部分力量……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]难怪我感觉力量还是差了一点……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]但那又如何？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]你不过是留有一小部分力量而已。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]拿什么战胜我？",
            "\t[hero]\b[hero]对付你这种混蛋……足够了！",
            "\t[hero]\b[hero]里式·光中影！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,8]来啊！",
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:2"
                ]
            },
            {
                "type": "animate",
                "name": "omnislash",
                "loc": [
                    6,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "darkexplode",
                "loc": [
                    6,
                    7
                ],
                "async": true
            },
            {
                "type": "moveHero",
                "time": 50,
                "async": true,
                "steps": [
                    "backward:3"
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    8
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "function",
                "function": "function(){\ncore.unloadEquip(0)\n}"
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,9]出色的剑技……居然消耗掉了我这么多力量……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,9]作为剑士来说确实是天赋异禀，不过还是不足以弥补你我的差距！",
            "\t[hero]\b[hero]咳咳……到此为止了么……剑断了……怀特莉丝的魔力也用尽了……",
            "\t[hero]\b[hero]（这个护身符在发光？）",
            "\t[闻斯莫提,hhq2.png]\b[this,6,9]等你死后，就代替那个黑骑士成为魔塔中的最强傀儡好了！",
            {
                "type": "move",
                "loc": [
                    6,
                    9
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "up:2"
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
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]……这是？",
            {
                "type": "setValue",
                "name": "item:I351",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setBlock",
                "number": "N416",
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
                "type": "setBlock",
                "number": "N426",
                "loc": [
                    [
                        7,
                        5
                    ]
                ],
                "time": 500
            },
            {
                "type": "waitAsync"
            },
            "\t[伊杰明,N416]\b[this,5,5]你好啊，塔主。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]你们是怎么到这里的？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]原来是这样啊……那家伙刚才和我对招的时候趁着自己拥有惶惑之力偷偷用了护符。",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]这才输了我一招！",
            "\t[hero]\b[hero]嘿嘿……现在才发觉么？",
            "\t[伊杰明,N416]\b[this,5,5]都到了这一步了。",
            "\t[伊杰明,N416]\b[this,5,5]可不能让我们前功尽弃了！",
            {
                "type": "move",
                "loc": [
                    5,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "huo",
                "loc": [
                    6,
                    7
                ]
            },
            "\t[赫,N426]\b[this,6,7]约瑟，还带着你那个护身符吗！？",
            "\t[赫,N426]\b[this,6,7]配上这把剑！",
            {
                "type": "setValue",
                "name": "item:I657",
                "operator": "-=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I700",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I699",
                "operator": "+=",
                "value": "1"
            },
            "\t[赫,N426]\b[this,6,7]我去帮伊杰明！",
            {
                "type": "move",
                "loc": [
                    7,
                    5
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "left",
                "loc": [
                    [
                        7,
                        7
                    ]
                ]
            },
            {
                "type": "animate",
                "name": "skill12",
                "loc": [
                    6,
                    7
                ]
            },
            "\t[hero]\b[hero]这把剑……好强的邪性！",
            "\t[hero]\b[hero]和这枚护身符散发出的温和感完全相反……",
            "\t[hero]\b[hero]但这样正好能互相抵消对我的损害。",
            {
                "type": "animate",
                "name": "darkexplode",
                "loc": [
                    5,
                    6
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "darkexplode",
                "loc": [
                    7,
                    7
                ],
                "async": true
            },
            {
                "type": "turnBlock",
                "direction": "right",
                "loc": [
                    [
                        5,
                        6
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    6
                ],
                "time": 50,
                "keep": true,
                "async": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    7
                ],
                "time": 50,
                "keep": true,
                "steps": [
                    "backward:2"
                ]
            },
            {
                "type": "waitAsync"
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]即使让你们聚在一起了又如何？我现在可是等同于始祖！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]果然……那些废物都靠不住……连拖都拖不住你们这些杂碎！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]到头来唯一能相信的只有我自己啊！",
            "\t[hero]\b[hero]拼了！",
            {
                "type": "function",
                "function": "function(){\ncore.loadEquip('I699')\n}"
            },
            "\t[hero]\b[hero]这感觉是……脑中自动出现了剑技！？",
            "\t[hero]\b[hero]闻斯莫提!接好了啊！",
            "\t[闻斯莫提,hhq2.png]\b[this,6,7]这一击就送你上路！！！",
            {
                "type": "move",
                "loc": [
                    6,
                    7
                ],
                "time": 50,
                "keep": true,
                "async": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "moveHero",
                "time": 50,
                "steps": [
                    "down:5"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "dj",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "battle",
                "id": "E694"
            },
            {
                "type": "playSound",
                "name": "Damage2.wav"
            },
            "\t[hero]\b[hero]唔……咳咳……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]是我胜了。",
            {
                "type": "playSound",
                "name": "Damage2.wav"
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 1500,
                "async": true
            },
            {
                "type": "animate",
                "name": "gz",
                "loc": [
                    6,
                    4
                ]
            },
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]咳……什么？怎……怎么会！？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]天使之泪与漆黑之刃……原来如此……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]该死的黑骑士……居然还留了这一手么……我终究还是败在了这上面么……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]呵呵……果然舍弃了人性堕入魔道的我终究会死在前仆后继而来的勇者手上吗？",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]其实我早就明白会有这么一天的……从我一开始计划成为塔主的时候……就明白的……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]……比谁都清楚……只……只是一直不愿意承认……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]勇者意志的传承……不管经历多少时代……都不会断啊……",
            "\t[闻斯莫提,hhq2.png]\b[this,6,4]是你赢了，约瑟·弗里克。",
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "remove": true,
                "time": 1500
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    5,
                    1
                ]
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[hero]\b[hero]啊啊啊！终于结束了！！",
            "\t[伊杰明,N416]\b[this,3,6]打赢了始祖级别的强敌……这一趟可谓是没白来啊……",
            "\t[赫,N426]\b[this,9,7]那边那位小姐似乎……",
            "\t[伊杰明,N416]\b[this,3,6]约瑟，你似乎隐瞒了些什么啊？",
            {
                "type": "turnBlock",
                "direction": "up",
                "loc": [
                    [
                        3,
                        6
                    ]
                ]
            },
            "\t[伊杰明,N416]\b[this,3,6]比如……和这位散发着塔主级别魔力的小姐的关系？",
            "\t[怀特莉丝,N430]\b[this,5,1]……",
            {
                "type": "move",
                "loc": [
                    5,
                    1
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:3",
                    "right:1",
                    "down:1"
                ]
            },
            {
                "type": "turnBlock",
                "direction": "right",
                "loc": [
                    [
                        3,
                        6
                    ]
                ]
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "up:2"
                ]
            },
            "\t[hero]\b[hero]嘿……怀特莉丝，怎么一副这么严肃的表情？",
            "\t[hero]\b[hero]既然解决掉了夺取你身份的敌人。",
            "\t[hero]\b[hero]你也取回了你的记忆和力量。",
            "\t[hero]\b[hero]那就开心一点嘛？笑一个如何？",
            "\t[hero]\b[hero]我还没见过你笑呢？哈哈！",
            {
                "type": "setVolume",
                "value": 100,
                "time": 1
            },
            {
                "type": "playBgm",
                "name": "htls.mp3",
                "startTime": 3,
                "keep": true
            },
            "\t[怀特莉丝,N430]\b[this,6,5]约瑟……我们的契约已经结束，我也不再是怀特莉丝。",
            "\t[惶惑卿,N430]\b[this,6,5]而是十二始祖之一的惶惑卿。",
            "\t[hero]\b[hero]怀特莉丝……",
            "\t[惶惑卿,N430]\b[this,6,5]我们塔主与你们人类终究是互相对立不死不休的存在。",
            "\t[惶惑卿,N430]\b[this,6,5]身为塔之始祖……面对进入魔塔的人类只有一种迎接方式……",
            "\t[惶惑卿,N430]\b[this,6,5]你懂的吧？",
            "\t[hero]\b[hero]哈哈……你是来真的吗？",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    5
                ]
            },
            {
                "type": "animate",
                "name": "fh",
                "loc": [
                    6,
                    7
                ]
            },
            {
                "type": "setValue",
                "name": "status:hp",
                "operator": "+=",
                "value": "10000"
            },
            {
                "type": "tip",
                "text": "恢复了10000点生命值"
            },
            "\t[惶惑卿,N430]\b[this,6,5]这样你的伤势就恢复了。",
            "\t[惶惑卿,N430]\b[this,6,5]约瑟·弗里克……我现以惶惑卿之名向你申请决战！",
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "time": 500
            },
            "\t[惶惑卿,N430]\b[this,6,5]你若是不接受的话……",
            "\t[惶惑卿,N430]\b[this,6,5]我就继续扩张这座魔塔。",
            "\t[惶惑卿,N430]\b[this,6,5]吸收周边的生命。",
            "\t[惶惑卿,N430]\b[this,6,5]我在顶上等你。",
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "steps": [
                    "down:1"
                ]
            },
            "\t[hero]\b[hero]呃……你们怎么说？",
            "\t[hero]\b[hero]要不要跟我一起上去。",
            "\t[赫,N426]\b[this,9,7]……",
            "\t[伊杰明,N416]\b[this,3,6]哎呀哎呀……那位小姐不是指名道姓的让你过去吗？",
            "\t[伊杰明,N416]\b[this,3,6]我们要是这么不解风情的跟过去算什么话？",
            "\t[伊杰明,N416]\b[this,3,6]更何况我们身上的伤可没有被治疗啊？",
            "\t[伊杰明,N416]\b[this,3,6]你好意思让我们两个伤患跟着去送死吗？嗯？",
            "\t[赫,N426]\b[this,9,7]约瑟……你之后最好老老实实地和我们解释清楚这一切。",
            "\t[赫,N426]\b[this,9,7]不然我可饶不了你！",
            {
                "type": "move",
                "loc": [
                    3,
                    6
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1",
                    "right:2"
                ]
            },
            "\t[伊杰明,N416]\b[this,5,7]好了！快踏上你最后的一战吧！",
            "\t[hero]\b[hero]唉……终究是要我来承担一切。",
            "\t[hero]\b[hero]那你们就在这休息片刻。",
            "\t[hero]\b[hero]我去去就回！",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "changeFloor",
                "floorId": "MT154",
                "loc": [
                    6,
                    6
                ]
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  4,  4,  4,  4,  2,  0,  2,  4,  4,  4,  4,10024],
    [10026,  4,  2,  2,  2,  2,  0,  2,  2,  2,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,430,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,697,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  0,  0,  0,  0,  0,  0,  0,  2,  4,10024],
    [10026,  4,  2,  2,  2,  2,  2,  2,  2,  2,  2,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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