main.floors.MT392=
{
    "floorId": "MT392",
    "title": "终焉之城·魔殿最终层",
    "name": "终焉之城·魔殿最终层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": true,
    "images": [
        {
            "name": "006-Mountains01.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "grass",
    "bgm": "battle28.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "0,0": [
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        11
                    ]
                ],
                "remove": true,
                "time": 0
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "up",
                    "up",
                    "up",
                    "up",
                    "up"
                ]
            },
            "\t[梦,E1247]\b[this,6,5]终焉即是创造，存在的意义即是被人需要。",
            "\t[梦,E1247]\b[this,6,5]被人所需要，才能是生命存在的价值。",
            "\t[梦,E1247]\b[this,6,5]你们还是来了吗？看来罗天你并没有听取我的意见。",
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "special",
                "value": "[31,2,9]"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "hp",
                "value": "400000000000000000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "atk",
                "value": "30000000000000000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "def",
                "value": "15000000000000000"
            },
            {
                "type": "setEnemy",
                "id": "E514",
                "name": "money",
                "value": "50000"
            },
            {
                "type": "setBlock",
                "number": "E514",
                "loc": [
                    [
                        6,
                        5
                    ]
                ],
                "time": 0
            },
            "\t[罗天,N1197]\b[up,6,8].....................。",
            "\t[君无天,N1195]\b[up,6,10]你的气息…………怎么回事？",
            "\t[君无天,N1195]\b[up,6,10]为什么你体内突然有一股十分圣洁的气息？",
            "\t[梦,E1216]\b[this,6,5]为什么吗？因为…………我现在是——",
            "\t[梦,E1216]\b[this,6,5]\\d神之圣女！",
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
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    8
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    9
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    10
                ]
            },
            "\t[君无天,N1195]\b[up,6,10]什么？！你现在是神之圣女？！！",
            "\t[小粽,hero]\b[up,6,7]完成造神计划必需品——神之圣女？",
            "\t[星钰,N1196]\b[up,6,9]这……阻拦我们的居然也是祭品吗？",
            "\t[罗天,N1197]\b[up,6,8]等等！梦，你到底在说些什么？",
            "\t[梦,E1216]\b[this,6,5]世人为何总是愚不可及呢？或许这就是完成造神计划其中一个原因吧。",
            "\t[梦,E1216]\b[this,6,5]清除所有愚蠢的生灵，只留下被人所需的生灵！",
            "\t[梦,E1216]\b[this,6,5]而在那之后，魔王大人将会彻底升华这个世界，让这个世界的处境焕然一新！",
            "\t[梦,E1216]\b[this,6,5]而且魔王大人为了完成造神计划付出了太多太多了……。",
            "\t[小粽,hero]\b[up,6,7]但这个计划绝对不可能会让你们实现的！",
            "\t[小粽,hero]\b[up,6,7]你可知道，你们为了完成造神计划所牵扯到的事物有多么庞大吗？",
            "\t[小粽,hero]\b[up,6,7]你又何曾想过，因为这个计划，你们让多少人妻离子散，家毁人亡！",
            "\t[梦,E1216]\b[this,6,5]你一个被魔王大人所抛弃的实验体，能懂些什么？！！",
            "\t[梦,E1216]\b[this,6,5]作为魔王大人所创造的实验体，不但没有遵循自己的使命帮助魔王大人完成造神计划，反而还以这么一个勇者的身份想要来阻止魔王大人！",
            "\t[梦,E1216]\b[this,6,5]不仅是你！你身后的君无天，星钰，甚至是罗天也亦如此！！",
            "\t[梦,E1216]\b[this,6,5]他们作为魔塔里的一员，不但没有遵循魔王大人的意志，反而是助纣为虐！",
            "\t[梦,E1216]\b[this,6,5]我之前给过你们一次离开的机会，可是你们依旧是选择与魔王大人作对！",
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            "\t[梦,E1216]\b[this,6,5]而现在你们的这种选择已经严重损害了魔王大人的利益！所以……",
            {
                "type": "playBgm",
                "name": "holy5.mp3",
                "keep": true
            },
            "\t[梦,E1216]\b[this,6,5]\r[red]今天，就让我……将你们葬身于此吧！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            "\t[星钰,N1196]\b[up,6,9]好强大的威压！这就是魔塔第二高手的实力吗？！竟然如此可怕！！！",
            "\t[罗天,N1197]\b[up,6,8]等等！梦，你当初不是说你很厌恶这种权力的争夺吗？为什么要这么做？！",
            "\t[罗天,N1197]\b[up,6,8]你不是说你想有朝一日可以自由的活着，不受他人约束，只为自己而活着吗。",
            "\t[梦,E1216]\b[this,6,5]……………。",
            "\t[罗天,N1197]\b[up,6,8]既然当初你立下了这个誓言，为什么要被魔王给蒙蔽双眼呢？！",
            "\t[罗天,N1197]\b[up,6,8]正如同小粽说的那样，魔王为了完成这个造神计划使无数人的幸福毁于一旦！",
            "\t[罗天,N1197]\b[up,6,8]星家如此！小粽的仙琳如此！就连我的洛兰也是如此！！",
            "\t[梦,E1216]\b[up,6,5]仙琳是因黯夜殇而燃烧了自己的生命，你的洛兰是因圣羽洛斯而亡。",
            "\t[梦,E1216]\b[up,6,5]而星家则是因为圣羽洛斯的诱导才导致星家的灭亡！",
            "\t[梦,E1216]\b[up,6,5]你们身边所发生的悲剧是因他们两人诞生的！这跟魔王大人有什么关系！！",
            "\t[星钰,N1196]\b[up,6,9]怎么就没有关系了？！若不是因为魔王的决策，他们又怎么可能会去灭我星家，就连我亲生父亲的尸体都被那谶祖所玩弄？！！",
            "\t[星钰,N1196]\b[up,6,9]若不是因为魔王，当初圣羽洛斯又怎么可能会如此嚣张，肆无忌惮的去各地抓取实验体，来完成一个一个变态的实验呢！",
            "\t[星钰,N1196]\b[up,6,9]若不是因为魔王，堇姐姐又怎么可能会被他们给废去修为！",
            {
                "type": "playSound",
                "name": "049-Explosion02.ogg"
            },
            "\t[梦,E1216]\b[this,6,5]\r[red]够了！！",
            "\t[梦,E1216]\b[this,6,5]\r[red]我只知道……你们几个……已经毫无价值了！",
            "\t[梦,E1216]\b[this,6,5]\r[red]不被魔王大人所需要的家伙……没有存在的意义了！！",
            "【警告】接下来进入特殊boss战模式，梦必须连续击败八次才能战胜！！！",
            {
                "type": "waitAsync"
            }
        ],
        "6,5": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "if",
                    "condition": "(flag:boss371F===145)",
                    "true": [],
                    "false": [
                        {
                            "type": "if",
                            "condition": "(flag:boss371F===7)",
                            "true": [],
                            "false": [
                                {
                                    "type": "if",
                                    "condition": "(flag:boss390F===6)",
                                    "true": [
                                        {
                                            "type": "battle",
                                            "id": "E514"
                                        },
                                        "\t[梦,E1216]\b[this,6,5]\r[red]这一招！将会结束这一切！！",
                                        "\t[梦,E1216]\b[this,6,5]\r[red]神主·永劫曲！！",
                                        {
                                            "type": "setEnemy",
                                            "id": "E514",
                                            "name": "special",
                                            "value": "[31,7,9,2,8]"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E514",
                                            "name": "hp",
                                            "value": "550000000000000000"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E514",
                                            "name": "atk",
                                            "value": "120000000000000000"
                                        },
                                        {
                                            "type": "setEnemy",
                                            "id": "E514",
                                            "name": "def",
                                            "value": "20000000000000000"
                                        },
                                        {
                                            "type": "update"
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 500
                                        },
                                        {
                                            "type": "callBook"
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
                                            "type": "unfollow",
                                            "name": "lt.png"
                                        },
                                        {
                                            "type": "unfollow",
                                            "name": "xy.png"
                                        },
                                        {
                                            "type": "unfollow",
                                            "name": "jwt.png"
                                        },
                                        {
                                            "type": "changePos",
                                            "loc": [
                                                6,
                                                5
                                            ],
                                            "direction": "up"
                                        },
                                        {
                                            "type": "setBlock",
                                            "number": "N1256",
                                            "loc": [
                                                [
                                                    6,
                                                    2
                                                ]
                                            ],
                                            "time": 0
                                        },
                                        {
                                            "type": "setBlock",
                                            "number": "N1195",
                                            "loc": [
                                                [
                                                    5,
                                                    5
                                                ]
                                            ],
                                            "time": 0
                                        },
                                        {
                                            "type": "setBlock",
                                            "number": "N1196",
                                            "loc": [
                                                [
                                                    7,
                                                    5
                                                ]
                                            ],
                                            "time": 0
                                        },
                                        {
                                            "type": "setBlock",
                                            "number": "N1197",
                                            "loc": [
                                                [
                                                    6,
                                                    4
                                                ]
                                            ],
                                            "time": 0
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "051-Explosion04.ogg"
                                        },
                                        {
                                            "type": "battle",
                                            "id": "E514"
                                        },
                                        {
                                            "type": "hide",
                                            "loc": [
                                                [
                                                    6,
                                                    5
                                                ]
                                            ],
                                            "remove": true,
                                            "time": 0
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
                                            "type": "setCurtain",
                                            "time": 500
                                        },
                                        {
                                            "type": "setVolume",
                                            "value": 90,
                                            "time": 0
                                        },
                                        {
                                            "type": "playBgm",
                                            "name": "hope2.mp3",
                                            "keep": true
                                        },
                                        {
                                            "type": "hideStatusBar"
                                        },
                                        "\t[罗天,N1197]\b[this,6,4]\r[red]噗！！！",
                                        "\t[小粽,hero]\b[this,6,5]咳咳咳！！罗天！！",
                                        "\t[罗天,N1197]\b[this,6,4]我……我还撑得住！",
                                        "\t[小粽,hero]\b[this,6,5]你先后退，你现在的身体状况已经不适合接下来的战斗了。",
                                        "\t[罗天,N1197]\b[this,6,4]不……我必须要去救赎她！",
                                        "\t[小粽,hero]\b[this,6,5]罗天……你……。",
                                        "\t[君无天,N1195]\b[this,5,5]让他去吧。",
                                        "\t[星钰,N1196]\b[this,7,5]可是…………。",
                                        "\t[君无天,N1195]\b[this,5,5]没事的，去相信他吧。",
                                        "\t[星钰,N1196]\b[this,7,5]……是，父亲大人。",
                                        "\t[小粽,hero]\b[this,6,5]………………。",
                                        {
                                            "type": "move",
                                            "loc": [
                                                6,
                                                4
                                            ],
                                            "time": 500,
                                            "keep": true,
                                            "steps": [
                                                "up"
                                            ]
                                        },
                                        "\t[梦,E1216]\b[this,6,2]…………罗天……你……。",
                                        "\t[罗天,N1197]\b[this,6,3]\\d……梦，你存在的意义不仅仅只是为他人所需要，更是要为自己而活着。",
                                        "\t[罗天,N1197]\b[this,6,3]\\d而且……你的命运应该属于你自己！你的未来……只会因你自己而改变！！",
                                        "\t[梦,E1216]\b[this,6,2]………………",
                                        "罗天向梦伸出了自己的右手",
                                        "\t[罗天,N1197]\b[this,6,3]\\d所以…………过来吧！",
                                        "\t[梦,E1216]\b[this,6,2]………………我……",
                                        "梦也向罗天伸出了自己的右手",
                                        "\t[罗天,N1197]\b[this,6,3]\\d快过来吧，来到我们的身边吧！",
                                        {
                                            "type": "animate",
                                            "name": "attack9",
                                            "loc": [
                                                6,
                                                3
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "Attack09.wav"
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
                                            "type": "sleep",
                                            "time": 200
                                        },
                                        {
                                            "type": "playSound",
                                            "name": "Blow4.ogg"
                                        },
                                        {
                                            "type": "sleep",
                                            "time": 200
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
                                                3
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "animate",
                                            "name": "unexpected1",
                                            "loc": "hero",
                                            "async": true
                                        },
                                        {
                                            "type": "animate",
                                            "name": "unexpected1",
                                            "loc": [
                                                7,
                                                5
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "animate",
                                            "name": "unexpected1",
                                            "loc": [
                                                5,
                                                5
                                            ],
                                            "async": true
                                        },
                                        {
                                            "type": "playBgm",
                                            "name": "GG4.mp3",
                                            "keep": true
                                        },
                                        "然而就在此时，梦的右手直接穿透的罗天的胸膛！",
                                        "\t[罗天,N1197]\b[this,6,4]\r[red]噗！！！",
                                        "\t[小粽,hero]\b[this,6,5]罗天！！",
                                        "\t[君无天,N1195]\b[this,5,5]！！怎么可能！！明明我已经感受不到她的杀意了！！怎么会这样！！",
                                        "\t[星钰,N1196]\b[this,7,5]父亲大人！快救救他！！",
                                        "\t[梦,E1216]\b[this,6,2]……………………",
                                        "\t[罗天,N1197]\b[this,6,3]\r[red]梦！你为什么…………",
                                        "\t[梦,E1216]\b[this,6,2]对不起，罗天，如果有来世……我或许会选择与你一起，但是这一世……\r[red]你还是为魔王大人付出自己的生命吧！",
                                        "\t[罗天,N1197]\b[this,6,3]\r[red]梦！！！",
                                        "\t[君无天,N1195]\b[this,5,5]不好！来不及了！！",
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
                                        "随着梦的右手挥向天空，罗天的身躯也如同灰尘一般缓缓的消散在这天地之间…………",
                                        "在罗天消散之前他的双眼以一种十分震惊的目光看向梦…………",
                                        "罗天到死都没有想到，自己付出与承受了这么多的艰辛与痛苦最终却换来了这么一个结局…………",
                                        "罗天最后看到梦的眼神…………却还是那毫无感情波动的眼神…………",
                                        "\r[red]音律星尊 ·罗天—— 陨！",
                                        "\t[小粽,hero]\b[this,6,5]罗天！！！！！！！",
                                        "\t[星钰,N1196]\b[this,7,5]这……怎么会！！",
                                        "\t[君无天,N1195]\b[this,5,5]梦！你！！",
                                        "\t[梦,E1216]\b[this,6,2]音律星尊·罗天……终于解决掉了！",
                                        "注意！接下来就是剧情选项区了，在这里小粽会面临不同的选择，每种选择都可能会对后续剧情产生巨大的变动！请谨慎选择！！",
                                        {
                                            "type": "choices",
                                            "text": "\t[小粽,hero]....................",
                                            "choices": [
                                                {
                                                    "text": "感性为主导",
                                                    "action": [
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:梦之恨",
                                                            "value": "1",
                                                            "norefresh": true
                                                        },
                                                        "\t[小粽,hero]\b[this,6,5]梦！你必须要付出血的代价！！",
                                                        "\t[梦,E1216]\b[this,6,2]是吗？哈哈哈哈哈哈哈哈哈哈哈哈！！是呀…………毕竟我现在也是个罪恶滔天的女人啊！",
                                                        "\t[梦,E1216]\b[this,6,2]你们有这种神情我也不惊讶……毕竟这是你们的好伙伴呀！",
                                                        "\t[梦,E1216]\b[this,6,2]不过……我就算是死！也不会是死在你的手中！！",
                                                        "\t[梦,E1216]\b[this,6,2]魔王大人最终会完成造神计划的！而到那个时候就是你们的死期！！",
                                                        {
                                                            "type": "jump",
                                                            "from": [
                                                                6,
                                                                2
                                                            ],
                                                            "to": [
                                                                6,
                                                                1
                                                            ],
                                                            "time": 300
                                                        },
                                                        "\t[梦]\r[red]哈哈哈哈哈哈哈哈哈哈哈哈！！！哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈！！",
                                                        {
                                                            "type": "moveHero",
                                                            "time": 100,
                                                            "steps": [
                                                                "up",
                                                                "up"
                                                            ]
                                                        },
                                                        "\t[小粽,hero]\b[this,6,5]该死！这个疯女人竟然直接选择跳崖了。",
                                                        "\t[小粽,hero]\b[this,6,5]哼！下面可是万丈深渊，就算我不杀你，你也会被摔得粉身碎骨！！",
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
                                                            "type": "insert",
                                                            "loc": [
                                                                12,
                                                                0
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    "text": "理性为主导",
                                                    "action": [
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:梦之泪",
                                                            "value": "1",
                                                            "norefresh": true
                                                        },
                                                        "\t[小粽,hero]\b[this,6,5]……梦！你竟然如此无情无义！",
                                                        "\t[小粽,hero]\b[this,6,5]明明罗天为了救赎你，宁愿被被重创却还要继续坚持着，只为让你醒悟过来。",
                                                        "\t[小粽,hero]\b[this,6,5]可是你却自甘堕落！！",
                                                        "\t[梦,E1216]\b[this,6,2]那是因为……我跟罗天是不可能的，我们的立场就决定了我们的未来……",
                                                        "\t[小粽,hero]\b[this,6,5]还是如此吗？你居然还是如此吗！！看来你从头到尾就根本没有让你醒悟过来！",
                                                        "\t[梦,E1216]\b[this,6,2]………………时间差不多了，如果有机会我们再见吧！",
                                                        "\t[星钰,N1196]\b[this,7,5]你想跑哪里去？！杀害罗天的凶手！！",
                                                        "\t[梦,E1216]\b[this,6,2]我要走，你们是拦不住我的！",
                                                        "\t[梦,E1216]\b[this,6,2]魔王大人即将完成造神计划，是生还是死，就看你们自己了！",
                                                        "\t[君无天,N1195]\b[this,5,5]慢着！给我回来！！",
                                                        "\t[梦,E1216]\b[this,6,2]哈！有缘再相见了。",
                                                        {
                                                            "type": "jump",
                                                            "from": [
                                                                6,
                                                                2
                                                            ],
                                                            "to": [
                                                                6,
                                                                1
                                                            ],
                                                            "time": 300
                                                        },
                                                        "\t[小粽,hero]\b[this,6,5]这个家伙…………居然直接选择了跳崖……",
                                                        "\t[小粽,hero]\b[this,6,5]她宁愿是摔死也不让我们亲手杀死她。",
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
                                                            "type": "insert",
                                                            "loc": [
                                                                12,
                                                                0
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ],
                                    "false": [
                                        {
                                            "type": "if",
                                            "condition": "(flag:boss390F===5)",
                                            "true": [
                                                {
                                                    "type": "battle",
                                                    "id": "E514"
                                                },
                                                {
                                                    "type": "setValue",
                                                    "name": "flag:boss390F",
                                                    "value": "6",
                                                    "norefresh": true
                                                },
                                                "\t[小粽,hero]\b[up,6,6]呼……呼……",
                                                "\t[星钰,N1196]\b[up,6,8]没想到……居然如此恐怖……我们四人连手都难以对付！",
                                                "\t[梦,E1216]\b[this,6,5]你们觉得……你们已经赢了吗？！！",
                                                "\t[罗天,N1197]\b[up,6,7]…………停手吧，梦，你其实也只是一个被利用的可怜人罢了。",
                                                "\t[梦,E1216]\b[this,6,5]嗯？你什么意思。",
                                                "\t[罗天,N1197]\b[up,6,7]你之前说你是神之圣女，也就是说你现在只是个造神计划的祭品。",
                                                "\t[罗天,N1197]\b[up,6,7]也就是说……你对于魔王来说只是一个被他人利用的工具罢了。",
                                                "\t[梦,E1216]\b[this,6,5]…………你究竟想要说些什么？",
                                                "\t[罗天,N1197]\b[up,6,7]你还不明白吗？也就是说等魔王把你利用完之后，你就会成为造神计划的垫脚石！！",
                                                "\t[罗天,N1197]\b[up,6,7]所以……你还要继续阻拦我们吗？",
                                                "\t[梦,E1216]\b[this,6,5]…………",
                                                "\t[梦,E1216]\b[this,6,5]………………",
                                                "\t[梦,E1216]\b[this,6,5]……………………",
                                                "\t[梦,E1216]\b[this,6,5]……………………那……",
                                                "\t[梦,E1216]\b[this,6,5]\r[red]……………………那又如何？！",
                                                {
                                                    "type": "playSound",
                                                    "name": "cgefc01.wav"
                                                },
                                                {
                                                    "type": "animate",
                                                    "name": "unexpected1",
                                                    "loc": [
                                                        6,
                                                        7
                                                    ]
                                                },
                                                "\t[罗天,N1197]\b[up,6,7]什么？！！",
                                                "\t[梦,E1216]\b[this,6,5]\r[red]我说……那又如何！！！",
                                                "\t[罗天,N1197]\b[up,6,7]等等！！你知道你现在说些什么吗！！！",
                                                "\t[梦,E1216]\b[this,6,5]\r[red]我当然知道我现在在说些什么！因为……",
                                                "\t[梦,E1216]\b[this,6,5]\r[red]为了魔王大人，我可以付出一切代价！哪怕是以我的生命作为代价！！",
                                                "\t[梦,E1216]\b[this,6,5]\r[red]神主·天葬曲！",
                                                "\t[罗天,N1197]\b[up,6,7]！！！不好！我施展的音律已经被完全压制了！！",
                                                "注意！！梦已经达到不逊色于魔王的力量了！！并且这一次战斗会连续战斗两次！！请注意自身血量！！",
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E514",
                                                    "name": "special",
                                                    "value": "[31,7,9,2,8]"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E514",
                                                    "name": "hp",
                                                    "value": "500000000000000000"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E514",
                                                    "name": "atk",
                                                    "value": "100000000000000000"
                                                },
                                                {
                                                    "type": "setEnemy",
                                                    "id": "E514",
                                                    "name": "def",
                                                    "value": "17500000000000000"
                                                },
                                                {
                                                    "type": "update"
                                                }
                                            ],
                                            "false": [
                                                {
                                                    "type": "if",
                                                    "condition": "(flag:boss390F===4)",
                                                    "true": [
                                                        {
                                                            "type": "battle",
                                                            "id": "E514"
                                                        },
                                                        {
                                                            "type": "setValue",
                                                            "name": "flag:boss390F",
                                                            "value": "5",
                                                            "norefresh": true
                                                        },
                                                        "\t[小粽,hero]\b[up,6,6]………………",
                                                        "\t[梦,E1216]\b[this,6,5]………………",
                                                        "\t[梦,E1216]\b[this,6,5]没有什么可谈的，神主·血染曲！",
                                                        "梦的攻击力与防御力大幅度下降，但是血量大幅度提升！！",
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E514",
                                                            "name": "special",
                                                            "value": "[31,7,9,2,8]"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E514",
                                                            "name": "hp",
                                                            "value": "1000000000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E514",
                                                            "name": "atk",
                                                            "value": "50000000000000000"
                                                        },
                                                        {
                                                            "type": "setEnemy",
                                                            "id": "E514",
                                                            "name": "def",
                                                            "value": "15000000000000000"
                                                        },
                                                        {
                                                            "type": "update"
                                                        }
                                                    ],
                                                    "false": [
                                                        {
                                                            "type": "if",
                                                            "condition": "(flag:boss390F===3)",
                                                            "true": [
                                                                {
                                                                    "type": "battle",
                                                                    "id": "E514"
                                                                },
                                                                {
                                                                    "type": "setValue",
                                                                    "name": "flag:boss390F",
                                                                    "value": "4",
                                                                    "norefresh": true
                                                                },
                                                                "\t[君无天,N1195]\b[up,6,9]咳咳咳！！",
                                                                "\t[梦,E1216]\b[this,6,5]我说过，你施展的这招对于我来说毫无作用！",
                                                                "\t[君无天,N1195]\b[up,6,9]那就......！",
                                                                "\t[梦,E1216]\b[this,6,5]我不会给你这个机会的！直接受死吧！！",
                                                                "\t[梦,E1216]\b[this,6,5]神主·罗刹曲！",
                                                                "\t[小粽,hero]\b[up,6,6]不好！她的力量正在以一种非常恐怖的速度飙升着！快阻止她！！",
                                                                "梦的防御力暂时下降，但是其攻击力大幅度提升！",
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E514",
                                                                    "name": "special",
                                                                    "value": "[31,7,9,2,8]"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E514",
                                                                    "name": "hp",
                                                                    "value": "450000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E514",
                                                                    "name": "atk",
                                                                    "value": "100000000000000000"
                                                                },
                                                                {
                                                                    "type": "setEnemy",
                                                                    "id": "E514",
                                                                    "name": "def",
                                                                    "value": "16500000000000000"
                                                                },
                                                                {
                                                                    "type": "update"
                                                                }
                                                            ],
                                                            "false": [
                                                                {
                                                                    "type": "if",
                                                                    "condition": "(flag:boss390F===2)",
                                                                    "true": [
                                                                        {
                                                                            "type": "battle",
                                                                            "id": "E514"
                                                                        },
                                                                        {
                                                                            "type": "setValue",
                                                                            "name": "flag:boss390F",
                                                                            "value": "3"
                                                                        },
                                                                        "\t[梦,E1216]\b[this,6,5]…………很不错，没想到你们居然有如此实力！",
                                                                        "\t[君无天,N1195]\b[up,6,9]你太高估自己了！龙啸九天决！！",
                                                                        "\t[梦,E1216]\b[this,6,5]君阁主的成名之招吗？的确有些看头……不过！",
                                                                        "\t[梦,E1216]\b[this,6,5]无用亦！神主·般若曲！！",
                                                                        "梦更改精神控制的频率改变了，并且提升了自己的防御力！！",
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E514",
                                                                            "name": "special",
                                                                            "value": "[31,7,9,2,8]"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E514",
                                                                            "name": "hp",
                                                                            "value": "450000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E514",
                                                                            "name": "atk",
                                                                            "value": "40000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "setEnemy",
                                                                            "id": "E514",
                                                                            "name": "def",
                                                                            "value": "18000000000000000"
                                                                        },
                                                                        {
                                                                            "type": "update"
                                                                        }
                                                                    ],
                                                                    "false": [
                                                                        {
                                                                            "type": "if",
                                                                            "condition": "(flag:boss390F===1)",
                                                                            "true": [
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E514"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss390F",
                                                                                    "value": "2"
                                                                                },
                                                                                "\t[梦,E1216]\b[this,6,5]为什么你们还要继续负偶抵抗？成为被魔王大人所需的存在不好吗？",
                                                                                "\t[罗天,N1197]\b[up,6,7]……梦，为什么你现在会变成现在这个模样…………。",
                                                                                "\t[梦,E1216]\b[this,6,5]对不起，罗天，因为这就是……",
                                                                                "\t[梦,E1216]\b[this,6,5]\r[red]我存在的意义啊！",
                                                                                "\t[梦,E1216]\b[this,6,5]安详的离去吧……我不会让你产生痛苦的！",
                                                                                "\t[梦,E1216]\b[this,6,5]神主·星溟曲！",
                                                                                "\t[小粽,hero]\b[up,6,6]罗天！小心！！",
                                                                                "梦更改精神控制的频率，添加反击破甲效果，并且属性得以提升！！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "special",
                                                                                    "value": "[31,7,9,2,8]"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "hp",
                                                                                    "value": "450000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "atk",
                                                                                    "value": "40000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "def",
                                                                                    "value": "16000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ],
                                                                            "false": [
                                                                                "\t[罗天,N1197]\b[up,6,7]梦！难道你真的要帮助魔王完成那所谓的造神计划吗？！",
                                                                                "\t[梦,E1216]\b[this,6,5]我存在的意义就是为了魔王大人完成造神计划的！这也是我的使命！！",
                                                                                "\t[梦,E1216]\b[this,6,5]神主·圣曲！",
                                                                                "\t[君无天,N1195]\b[up,6,9]小心！她的实力比你们想象的还要强大！！",
                                                                                "\t[小粽,hero]\b[up,6,6]天巡剑舞！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "special",
                                                                                    "value": "[31,2,9]"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "hp",
                                                                                    "value": "400000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "atk",
                                                                                    "value": "30000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "def",
                                                                                    "value": "15000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "money",
                                                                                    "value": "50000"
                                                                                },
                                                                                {
                                                                                    "type": "battle",
                                                                                    "id": "E514"
                                                                                },
                                                                                {
                                                                                    "type": "setValue",
                                                                                    "name": "flag:boss390F",
                                                                                    "value": "1"
                                                                                },
                                                                                "\t[梦,E1216]\b[this,6,5]不愧是魔王大人所创造的第二代实验体，神之勇者 ，短短数月从一个最弱小的存在成长到如此高度！",
                                                                                "\t[小粽,hero]\b[up,6,6]嗯？关于第二代实验体这件事应该只有圣羽洛斯与魔王才知道，你是怎么知道的。 ",
                                                                                "\t[梦,E1216]\b[this,6,5]我是怎么知道的？哈哈哈哈哈哈哈！！",
                                                                                "\t[梦,E1216]\b[this,6,5]作为魔王大人的贴身者，我怎么可能会不知道呢！",
                                                                                "\t[梦,E1216]\b[this,6,5]\r[red]更何况…………我可是魔王大人创造的初代实验体呢！！",
                                                                                "\t[众人]\b[up,6,6]什么？！！",
                                                                                "\t[君无天,N1195]\b[up,6,9]难怪…………难怪当初你没有散发出魔物的气息……原来你也是实验体吗？",
                                                                                "\t[星钰,N1196]\b[up,6,8]这……魔王他竟然能有如此可怕……创造出这么强大的存在吗？！",
                                                                                "\t[罗天,N1197]\b[up,6,7]这……这……梦……你……。",
                                                                                "\t[梦,E1216]\b[up,6,5]我是被魔王大人所创造的，我存在的意义就是被魔王大人所需要！只有被他人所需要才能活出价值！！",
                                                                                "\t[梦,E1216]\b[this,6,5]神主·道璇曲！",
                                                                                "梦加强催动精神控制，全属性得以提升！！",
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "hp",
                                                                                    "value": "450000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "atk",
                                                                                    "value": "35000000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "setEnemy",
                                                                                    "id": "E514",
                                                                                    "name": "def",
                                                                                    "value": "15500000000000000"
                                                                                },
                                                                                {
                                                                                    "type": "update"
                                                                                },
                                                                                {
                                                                                    "type": "waitAsync"
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        "6,11": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT332\", \"MT333\", \"MT334\", \"MT335\", \"MT336\", \"MT337\", \"MT338\", \"MT339\", \"MT340\", \"MT341\", \"MT342\", \"MT343\", \"MT344\", \"MT345\", \"MT346\", \"MT347\", \"MT348\", \"MT349\", \"MT350\", \"MT352\", \"MT353\", \"MT354\", \"MT355\", \"MT356\", \"MT357\", \"MT358\", \"MT359\", \"MT360\", \"MT361\", \"MT362\", \"MT363\", \"MT364\", \"MT365\", \"MT366\", \"MT367\", \"MT368\", \"MT369\", \"MT370\", \"MT371\", \"MT372\", \"MT373\", \"MT374\", \"MT375\", \"MT376\", \"MT377\", \"MT378\", \"MT379\", \"MT380\", \"MT381\", \"MT382\", \"MT383\", \"MT384\", \"MT385\", \"MT386\", \"MT387\", \"MT388\", \"MT389\", \"MT390\", \"MT391\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==0)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "insert",
                        "loc": [
                            0,
                            0
                        ]
                    }
                ]
            }
        ],
        "12,0": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
            },
            {
                "type": "pauseBgm"
            },
            {
                "type": "setVolume",
                "value": 90,
                "time": 0
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "playBgm",
                "name": "GG3.mp3",
                "keep": true
            },
            "\t[梦]我的名字叫做“梦\"，或许有人会认为这是个很奇怪的名字。",
            "\t[梦]因为一般人们的名字都是由两个字或三个字甚至更多字来组成名字的。",
            "\t[梦]但是我的名字就只有一个，那就是“梦”。",
            "\t[梦]这个名字是当初魔王大人为我取的，我虽然不知道魔王大人给我取这个名字的意义，但是我隐隐的感觉这代表着一种蕴意…………。",
            "\t[梦]\\d…………是伊人之梦吗…………",
            "十七年前…………",
            {
                "type": "changeFloor",
                "floorId": "MT393",
                "loc": [
                    1421,
                    0
                ],
                "time": 500
            }
        ],
        "6,0": []
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0, 17,  0,  0,  0,  0, 17,  0,  0,  0,  0, 17,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1247,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,110104,  0,110106,  0,  0,  0,  0,  0],
    [  0,50040,50041,50041,50041,110112,110113,110114,110065,110065,110065,110066,  0],
    [240057,50040,50041,50041,50041,50080,  0,50082,50041,50041,50041,50042,240057],
    [240065,50040,50041,50041,50041,50080,  0,50082,50041,50041,50041,50042,240065],
    [240073,50040,50041,50041,50041,50080,  0,50082,50041,50041,50041,50042,240073],
    [240081,50040,50041,50041,50041,50080,670,50082,50041,50041,50041,50042,240081],
    [240089,50040,50041,50041,50041,50080, 88,50082,50041,50041,50041,50042,240089]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,110040,110041,110041,110041,110041,110041,110041,110041,110041,110041,110042,  0],
    [  0,110048,110000,110000,110000,110000,110000,110000,110000,110000,110000,110050,  0],
    [  0,110048,110000,110000,110000,110000,110000,110000,110000,110000,110000,110050,  0],
    [  0,110048,110000,110000,110000,110000,110000,110000,110000,110000,110000,110050,  0],
    [  0,110056,110057,110057,110057,110000,110105,110000,110057,110057,110057,110058,  0],
    [  0,  0,  0,  0,  0,110065,110113,110065,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,110065,110113,110065,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50041,110113,50041,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50041,110113,50041,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50041,110113,50041,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,50041,110113,50041,  0,  0,  0,  0,  0]
],
    "fg2map": [

]
}