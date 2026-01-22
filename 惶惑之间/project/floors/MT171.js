main.floors.MT171=
{
    "floorId": "MT171",
    "title": "塔顶",
    "name": "塔顶",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": -1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setCurtain",
            "time": 500
        },
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
        "\t[惶惑卿,N430]\b[this,6,4]人类……为什么一定要来打扰我？",
        "\t[克洛德,N590]\b[this,7,8]当然是为了拯救这个被魔塔侵蚀的世界！",
        "\t[惶惑卿,N430]\b[this,6,4]我从未接触过你们人类。",
        "\t[惶惑卿,N430]\b[this,6,4]也未曾放出这里的魔物去袭击过你们。",
        "\t[惶惑卿,N430]\b[this,6,4]仅仅是待在这世界的一角也不被你们允许？",
        "\t[克洛德,N590]\b[this,7,8]别开玩笑了！你们魔族杀死了多少我们的同胞！",
        "\t[惶惑卿,N430]\b[this,6,4]我们塔主并没有什么族群意识。",
        "\t[惶惑卿,N430]\b[this,6,4]你们可以认为我们每一个塔主都是单独的个体。",
        "\t[惶惑卿,N430]\b[this,6,4]即使是塔主之间也会相互争斗。",
        "\t[惶惑卿,N430]\b[this,6,4]或许有的塔主会攻击你们，但也有的塔主对你们毫无兴趣，更有甚者曾希望过和平相处。",
        "\t[惶惑卿,N430]\b[this,6,4]我们降生在这世界并不一定就是作为你们的敌人而存在。",
        "\t[闻斯莫提,N611]\b[this,5,8]魔塔的出现注定了你们与我们只能留下一个。",
        "\t[闻斯莫提,N611]\b[this,5,8]不论是否存在向往和平的塔主，人类与魔塔之间的血债已经不可能还清。",
        "\t[闻斯莫提,N611]\b[this,5,8]而消灭了你们这些始祖，魔塔才会彻底从这个世界上消失。",
        "\t[闻斯莫提,N611]\b[this,5,8]这就是这个世界现在的规则，所以你也别怨我们前来讨伐你！",
        "\t[惶惑卿,N430]\b[this,6,4]愚蠢的人类，消灭我们始祖就能消除所有的魔塔……",
        "\t[惶惑卿,N430]\b[this,6,4]这是否只是一个谎言？你们可有人愿意去证实？",
        "\t[惶惑卿,N430]\b[this,6,4]也罢……既然你们主动进了这个魔塔，那身为塔之始祖的我便不可能放过你们。",
        "\t[惶惑卿,N430]\b[this,6,4]或许就如你们所说，你我两族谁有一死才可结束纷争。",
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "down:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                8
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                8
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                4,
                9
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                9
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "up:1"
            ]
        },
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
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
            "type": "waitAsync"
        },
        {
            "type": "playSound",
            "name": "VXFire4.ogg"
        },
        {
            "type": "sleep",
            "time": 250
        },
        {
            "type": "playSound",
            "name": "Annihilation2.wav"
        },
        {
            "type": "sleep",
            "time": 250
        },
        {
            "type": "playSound",
            "name": "158-Skill02.ogg"
        },
        {
            "type": "sleep",
            "time": 250
        },
        {
            "type": "playSound",
            "name": "VXthu.ogg"
        },
        {
            "type": "sleep",
            "time": 250
        },
        {
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        {
            "type": "sleep",
            "time": 1000
        },
        {
            "type": "move",
            "loc": [
                6,
                5
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "backward:2"
            ]
        },
        {
            "type": "move",
            "loc": [
                4,
                8
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "left:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "right",
            "loc": [
                [
                    3,
                    8
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                7
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "backward:2"
            ]
        },
        {
            "type": "move",
            "loc": [
                8,
                8
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "right:1"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "left",
            "loc": [
                [
                    9,
                    8
                ]
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                7
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "backward:2"
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[惶惑卿,N430]\b[this,6,3]……厉害啊……",
        "\t[惶惑卿,N430]\b[this,6,3]竟能将我逼至如此境地。",
        "\t[克洛德,N590]\b[this,7,9]可恶……已经没力气了……",
        "\t[克洛德,N590]\b[this,7,9]就差一点了……",
        "\t[佛修斯,N607]\b[this,3,8]现在只能看哪一方还能有余力爆发……",
        {
            "type": "move",
            "loc": [
                5,
                9
            ],
            "time": 500,
            "keep": true,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        "\t[闻斯莫提,N611]\b[this,5,6]辛苦各位了。",
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
            "name": "bing",
            "loc": [
                3,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bing",
            "loc": [
                7,
                9
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "bing",
            "loc": [
                9,
                8
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[莉雅朵洛,N581]\b[this,9,8]闻斯莫提……你想干什么！？",
        "\t[佛修斯,N607]\b[this,3,8]你……保留了力量吗？",
        {
            "type": "turnBlock",
            "direction": "up",
            "loc": [
                [
                    5,
                    6
                ]
            ]
        },
        "\t[闻斯莫提,N611]\b[this,5,6]哼哼……惶惑卿。",
        "\t[闻斯莫提,N611]\b[this,5,6]今后就由我来接管你的魔塔了。",
        "\t[惶惑卿,N430]\b[this,6,3]……人类，你想做什么？",
        "\t[闻斯莫提,N611]\b[this,5,6]意思就是我会取代你。",
        "\t[克洛德,N590]\b[this,7,9]什么意思！？闻斯莫提你背叛了我们吗！？",
        "\t[克洛德,N590]\b[this,7,9]你究竟要做什么！？",
        "\t[闻斯莫提,N611]\b[this,5,6]只是想活下去而已。",
        "\t[闻斯莫提,N611]\b[this,5,6]你们知道的，感染了魔化症就只有死路一条。",
        "\t[闻斯莫提,N611]\b[this,5,6]但这只是基于人类而言。",
        "\t[闻斯莫提,N611]\b[this,5,6]如果成为了塔主，那就不一样了。",
        "\t[惶惑卿,N430]\b[this,6,3]人类成为塔主？",
        "\t[惶惑卿,N430]\b[this,6,3]怎么可能有这种事情。",
        "\t[闻斯莫提,N611]\b[this,5,6]不可能吗？我可是魔法学院的天才。",
        "\t[闻斯莫提,N611]\b[this,5,6]像这样的方法别人做不到……但我可以做到！",
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
            "name": "领域",
            "loc": [
                6,
                3
            ]
        },
        "\t[惶惑卿,N430]\b[this,6,3]呃啊！",
        "\t[闻斯莫提,N611]\b[this,5,6]用这颗我研究出的宝石就能不断吸取你的力量。",
        "\t[闻斯莫提,N611]\b[this,5,6]而我使用这些力量时，这座魔塔就会自动认为我是这里的塔主……也就是曾经的你。",
        "\t[惶惑卿,N430]\b[this,6,3]……你！",
        "\t[闻斯莫提,N611]\b[this,5,6]这就是始祖的力量吗？",
        "\t[闻斯莫提,N611]\b[this,5,6]呵呵……还真是前所未有的庞大啊。",
        "\t[闻斯莫提,N611]\b[this,5,6]我不会杀了你，因为这样我就无法继续获得你的魔力供给。",
        "\t[闻斯莫提,N611]\b[this,5,6]但是今后，我将抹去你的记忆，而你就作为供应我魔力的能源而永远囚禁在这塔底吧！",
        "\t[惶惑卿,N430]\b[this,6,3]人类！！！",
        "\t[惶惑卿,N430]\b[this,6,3]我绝对不会放过你的！！！",
        "\t[闻斯莫提,N611]\b[this,5,6]那么，再见了，上任塔主。",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "setBlock",
            "number": "E694",
            "loc": [
                [
                    5,
                    6
                ]
            ],
            "time": 500
        },
        "\t[克洛德,N590]\b[this,7,9]闻斯提莫你……一开始就计划好了吗……",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]是啊，当我得知自己感染魔化症的时候可吓坏了。",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]这世界还有这么多东西等着我研究，我怎能就此停下脚步。",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]既然身为人类的生命将要结束，那我不妨就成为魔族开启新的道路。",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]只要能活下去，让我做什么都行！",
        "\t[莉雅朵洛,N581]\b[this,9,8]……你这混蛋……",
        "\t[克洛德,N590]\b[this,7,9]闻斯莫提……你这可悲的家伙……",
        "\t[佛修斯,N607]\b[this,3,8]……",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]那么永别了。",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]我的战友们。",
        {
            "type": "hide",
            "loc": [
                [
                    3,
                    8
                ]
            ],
            "remove": true,
            "time": 500,
            "async": true
        },
        {
            "type": "hide",
            "loc": [
                [
                    9,
                    8
                ]
            ],
            "remove": true,
            "time": 500
        },
        {
            "type": "waitAsync"
        },
        "\t[克洛德,N590]\b[this,7,9]闻斯莫提，即使你成为了塔主，但总有一天会有的新的勇者前来讨伐你的。",
        "\t[克洛德,N590]\b[this,7,9]而你则会付出你该有的代价。",
        {
            "type": "hide",
            "loc": [
                [
                    7,
                    9
                ]
            ],
            "remove": true,
            "time": 500
        },
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]感谢你的忠告，克洛德。",
        "\t[闻斯莫提,hhq2.png]\b[this,5,6]那么接下来，魔塔啊……欢迎你的新主人吧。",
        {
            "type": "setVolume",
            "value": 0,
            "time": 1500,
            "async": true
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 1500,
            "keep": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1,
            "time": 1
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setValue",
            "name": "flag:mh",
            "value": "1"
        },
        {
            "type": "changeFloor",
            "floorId": "MT149",
            "loc": [
                6,
                3
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10026,  4,  4,  1,  1,  1,  1,  1,  1,  1,  4,  4,10024],
    [10026,  4,  1,  1,  0,  0,  0,  0,  0,  1,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,430,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  0,  0,614,  0,593,  0,  0,  1,  4,10024],
    [10026,  4,  1,  1,610,  0,  0,  0,584,  1,  1,  4,10024],
    [10026,  4,  4,  1,  1,  1,  1,  1,  1,  1,  4,  4,10024],
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