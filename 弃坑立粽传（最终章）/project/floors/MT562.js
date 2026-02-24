main.floors.MT562=
{
    "floorId": "MT562",
    "title": "魔塔之巅",
    "name": "魔塔之巅",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "holy3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "blockWall",
    "firstArrive": [
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]这里是！",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                2
            ]
        },
        "\t[邪神·谶,E1544]\b[this,6,2].......看来....我的确有些小瞧你了，居然能够打破我设置的空间。",
        "\t[邪神·谶,E1544]\b[this,6,2]不过我不知道当小粽看到杀妻仇人就在他眼前的时候会是怎么的表情呢？",
        "\t[弃坑立粽,E1555]\b[this,6,6]当初那个被我杀死的仙雅并不是现在的仙琳，那个仙雅只是被你操作的傀儡！",
        "\t[弃坑立粽,E1555]\b[this,6,6]我之所以要杀死她是因为我从她身上发现了有关你操作的痕迹，所以我才杀死了她。",
        "\t[弃坑立粽,E1555]\b[this,6,6]而且你这个家伙当初居然取了与她一样的名字，真是有够恶趣的！",
        "\t[邪神·谶,E1544]\b[this,6,2]恶趣？我并不这样认为呀。",
        "\t[邪神·谶,E1544]\b[this,6,2]而且仙琳的就是仙雅的善意人格也可以说是未来身，你当年的那种行为不就是杀死了仙琳吗？",
        "\t[弃坑立粽,E1555]\b[this,6,6]完全不一样！我们都是旧时代的人，与新时代的人之间应当是毫无瓜葛了！",
        "\t[小粽,hero]\b[hero].....守望者前辈，已经不重要了。",
        "\t[弃坑立粽,E1555]\b[this,6,6]小粽......你。",
        "\t[小粽,hero]\b[hero]无论仙琳是什么身份，都不影响我爱她。",
        "\t[小粽,hero]\b[hero]无论前辈之前做过什么，但现在的前辈不是不惜巨大代价复活了仙琳吗？",
        "\t[弃坑立粽,E1555]\b[this,6,6]...........",
        "\t[小粽,hero]\b[hero]我只用记住前辈的大恩大德便足以。",
        "\t[小粽,hero]\b[hero]而你！邪神·谶！将会对你的所作所为付出代价！！",
        "\t[邪神·谶,E1544]\b[this,6,1]哦？就凭你们两个吗？难！",
        "\t[弃坑立粽,E1555]\b[this,6,6]你认为我这次只是一个人吗？！",
        "\t[弃坑立粽,E1555]\b[this,6,6]两位已故之人，就请你们最后一次，为我助力！！",
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                5,
                7
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                7,
                7
            ]
        },
        {
            "type": "setBlock",
            "number": "E1556",
            "loc": [
                [
                    5,
                    7
                ]
            ]
        },
        {
            "type": "setBlock",
            "number": "E1557",
            "loc": [
                [
                    7,
                    7
                ]
            ]
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
            "loc": "hero",
            "async": true
        },
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unexpected2",
            "loc": [
                6,
                2
            ]
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "callBook"
        },
        "\t[林无尘,E1556]\b[this,5,7]哈哈哈哈哈哈哈哈！！没想到我们居然能够以这种方式再度见面呢！",
        "\t[云梦溪,E1557]\b[this,7,7]啧，无尘，你明明都已经死了，怎么还是这么吵闹，真是......。",
        "\t[林无尘,E1556]\b[this,5,7]哈哈哈！！梦溪，在这个时候就不要太过矜持了，而且你再怎么装温柔比得过当初的仙雅吗？",
        "\t[云梦溪,E1557]\b[this,7,7]哼！要你管？！",
        "\t[弃坑立粽,E1555]\b[this,6,6]咳咳，两位这个时候就不要再拿我说笑了，我们还有正事。",
        "\t[邪神·谶,E1544]\b[this,6,2]哦？林无尘和云梦溪，没想到当初的已故之人居然能够被你暂时招魂过来，有趣！",
        "\t[邪神·谶,E1544]\b[this,6,2]看来应该是借助了观测者之声的缘故吧。",
        "\t[邪神·谶,E1544]\b[this,6,2]那么本座就.......",
        "\t[林无尘,E1556]\b[this,5,7]你废话太多了！剑心·决！",
        {
            "type": "playSound",
            "name": "Annihilation2.wav"
        },
        {
            "type": "animate",
            "name": "attack16",
            "loc": [
                6,
                2
            ]
        },
        "\t[邪神·谶,E1544]\b[this,6,2]嗯？你的力量.....有点不对劲.......怎么回事，明明你死前没有伤害到本座的能力才对。",
        "\t[邪神·谶,E1544]\b[this,6,2]原来如此.........看来你们这七天的确做出了让我惊艳的能为。",
        "\t[邪神·谶,E1544]\b[this,6,2]不过还是不够啊！",
        "\t[邪神·谶,E1544]\b[this,6,2]星辰爆！",
        {
            "type": "move",
            "loc": [
                6,
                6
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "down"
            ]
        },
        {
            "type": "move",
            "loc": [
                5,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "down"
            ]
        },
        {
            "type": "move",
            "loc": [
                7,
                7
            ],
            "time": 500,
            "keep": true,
            "async": true,
            "steps": [
                "down"
            ]
        },
        {
            "type": "animate",
            "name": "attack23",
            "loc": [
                6,
                6
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
        "\t[林无尘,E1556]\b[this,5,8]嘶.....没想到这个家伙的力量与当年相比又强大了不少。",
        "\t[云梦溪,E1557]\b[this,7,8]怎么无尘，你怕了吗？",
        "\t[林无尘,E1556]\b[this,5,8]哈哈哈哈哈哈哈哈！我林无尘最喜欢的就是对战强者！",
        "\t[邪神·谶,E1544]\b[this,6,2]哦？两位手下败将，你们说完了吗？是不是该去死了呢。",
        "\t[弃坑立粽,E1555]\b[this,6,7]没错，是该去死了，只不过是你！",
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
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                7,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                5,
                10
            ]
        },
        {
            "type": "setBlock",
            "number": "E1558",
            "loc": [
                [
                    6,
                    9
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "E1559",
            "loc": [
                [
                    5,
                    10
                ]
            ],
            "time": 0
        },
        {
            "type": "setBlock",
            "number": "E1560",
            "loc": [
                [
                    7,
                    10
                ]
            ],
            "time": 0
        },
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "callBook"
        },
        "\t[君无天,E1559]\b[this,5,10]作为一切罪恶的源头，你的一生！就此结束！！",
        "\t[星钰,E1560]\b[this,7,10]小粽，你没事吧。",
        "\t[小粽,hero]\b[hero]我没事，只是....有些震惊...。",
        "\t[记录者,E1558]\b[this,6,9]邪神·谶！你已经输了！！",
        "\t[邪神·谶,E1544]\b[this,6,2]输了？多了你们三位蝼蚁就想与本座抗衡吗。",
        "\t[记录者,E1558]\b[this,6,9]是吗？！",
        {
            "type": "animate",
            "name": "deep1",
            "loc": [
                6,
                2
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
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unexpected2",
            "loc": [
                6,
                2
            ],
            "async": true
        },
        "\t[邪神·谶,E1544]\b[this,6,2]这是什么？........居然可以暂时压制我的部分力量。",
        "\t[记录者,E1558]\b[this,6,9]这就是我们在这七天之内寻找杀死你的办法，运用每个人体内的情感之力来对你进行压制。",
        "\t[邪神·谶,E1544]\b[this,6,2]...........的确有趣，只可惜还是不够啊！",
        "\t[？？]那再加上我们呢？！",
        {
            "type": "animate",
            "name": "attack9",
            "loc": [
                6,
                2
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
                2
            ]
        },
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]噗！！",
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                6,
                1
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "E1561",
            "loc": [
                [
                    6,
                    1
                ]
            ],
            "time": 0
        },
        "\t[邪神·谶,E1544]\b[this,6,2]是你？！",
        "\t[魔王,E1561]\b[this,6,2]邪神·谶，被人背刺的滋味如何呢！",
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]怎么可能！就凭你这条虫子也能伤到我？！",
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                9,
                2
            ],
            "async": true
        },
        {
            "type": "setBlock",
            "number": "E1562",
            "loc": [
                [
                    9,
                    2
                ]
            ],
            "time": 0
        },
        "\t[仙梦,E1562]\b[this,9,2]怎么样哥哥，都说了梦儿能帮你的忙的~",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                2
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                8
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                8
            ]
        },
        "\t[林无尘/云梦溪]仙雅？！！！",
        "\t[云梦溪,E1557]\b[this,7,8]不，不对，仙雅早就已经去世了。",
        "\t[林无尘,E1556]\b[this,5,8]...........真的是太像了，与当初的仙雅一模一样.....就像是.........",
        "\t[林无尘/云梦溪]\r[aqua]转世身！！！",
        "\t[邪神·谶,E1544]\b[this,6,2].........哈哈哈！很好！非常好！！你们已经给予了一份非常完美的答卷了，那么现在就！",
        "\t[？？]喂，我说邪神·谶，你是不是年龄过大脑子不太好使了，是不是忘了我呀。",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
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
            "loc": "hero",
            "async": true
        },
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                6,
                10
            ]
        },
        {
            "type": "setBlock",
            "number": "E1452",
            "loc": [
                [
                    6,
                    10
                ]
            ],
            "time": 0,
            "async": true
        },
        "\t[小粽,hero]\b[hero]！！！",
        "\t[邪神·谶,E1544]\b[this,6,2].................观测者既定之人——仙琳。还有........",
        "\t[仙琳,E1452]\b[this,6,10]行了，你这个糟老头子，我知道你接下来想说什么，你不就是想说我是魔塔世界第一位神灵仙雅的未来身吗？",
        "\t[邪神·谶,E1544]\b[this,6,2]..................",
        "\t[仙琳,E1452]\b[this,6,10]不过你真的认为这个身份会影响现在的我吗？她会影响我爱小粽吗？当然不会。对吧，小粽。",
        "\t[小粽,hero]\b[hero].......嗯！",
        "\t[仙琳,E1452]\b[this,6,10]你看，无论我的身份是仙琳还是仙雅，也并不影响小粽爱我，便足够了！懂了吗？臭老头！！",
        "\t[邪神·谶,E1544]\b[this,6,2]..................是吗，观测者，\r[red]你想把我囚禁在玻璃槽之中吗？！！",
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]就像写出来的故事一样！！我把归于虚构吗？！！",
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]我不认可！我决不认可！！",
        {
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        {
            "type": "vibrate",
            "time": 500
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
        "\t[记录者,E1558]\b[this,6,9]呃，好强大的力量，没想到我们这么多人加在一起的情感之力竟然都无法完全束缚他！",
        "\t[弃坑立粽,E1555]\b[this,6,6]记录者，还差多少情感之力才能够杀死他！",
        "\t[记录者,E1558]\b[this,6,9]还差三位！只不过我们现在只有这么多人了，如果想要消灭他得花巨大代价！",
        "\t[弃坑立粽,E1555]\b[this,6,6]....现在只能这样了！",
        "\t[？？]不，不用了，剩下的就交给我们吧。",
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
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                10
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
                7
            ],
            "async": true
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
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                2
            ]
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                9,
                2
            ]
        },
        {
            "type": "playSound",
            "name": "116-Raise02.ogg"
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                7,
                5
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "aid3",
            "loc": [
                5,
                5
            ]
        },
        {
            "type": "setBlock",
            "number": "E1563",
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
            "number": "E1564",
            "loc": [
                [
                    7,
                    5
                ]
            ],
            "time": 0
        },
        "\t[君无天,E1559]\b[this,5,10]仙月前辈？！",
        "\t[魔王,E1561]\b[this,6,2]..............",
        "\t[仙梦,E1562]\b[this,9,2]妈妈！！",
        "\t[星钰/小粽/仙琳]仙月奶奶！/外婆！还有.....",
        "\t[星钰/仙琳/小粽]堇姐姐/小姐！",
        "\t[邪神·谶,E1544]\b[this,6,2]哈哈哈哈哈哈哈哈！一个连半神之躯都没到的老不死，一个废脉凡躯，也想终结我？！",
        "\t[堇,E1564]\b[this,7,5]不要相信你的眼睛，眼睛会说谎。",
        "随着堇话语的下落，堇身上的气息突然暴涨！",
        "\t[邪神·谶,E1544]\b[this,6,2]什么？这是什么.............。",
        "\t[堇？,E1564]\b[this,7,5]因为现在暂时操作这个躯体的不再是名为堇的女孩了，而是我！",
        {
            "type": "playSound",
            "name": "Ice7.ogg"
        },
        {
            "type": "animate",
            "name": "light2",
            "loc": "hero",
            "async": true
        },
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
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                5,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                7,
                10
            ]
        },
        "\t[小粽,hero]\b[hero]！！！母亲的项链！！再一次发光了？！！",
        "\t[堇？,E1564]\b[this,7,5]好久不见，我的孩子。",
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
        "\t[小粽,hero]\b[hero]？！！！！！",
        "\t[堇？,E1564]\b[this,7,5]啊....说起来可能有些复杂，我就简单点说吧。",
        "\t[堇？,E1564]\b[this,7,5]在堇这个身躯之中其实用的是双重灵魂，一个是你们最为熟悉的真正的“堇”，另一个则是“我”了。也就是小粽的“母亲”！",
        "\t[小粽,hero]\b[hero]什么？！！！",
        "\t[仙琳,E1452]\b[this,6,10]这....这是怎么做到的.....",
        "\t[堇？,E1564]\b[this,7,5]等我们先把眼前的事情做完我再慢慢告诉你们吧，你们只用知道占据主导的是你们熟悉的那位“堇”就足以。",
        "\t[弃坑立粽,E1555]\b[this,6,6]记录者，现在够了吧！！",
        "\t[记录者,E1558]\b[this,6,9]仙月...以及一体双魂的堇和母亲....够了！！",
        "\t[弃坑立粽,E1555]\b[this,6,6]那好！大家！将所有的情感之力集聚我手，让我来帮助你们刺破被暗夜吞噬的黑幕！！",
        "\t[林无尘,E1556]\b[this,5,8]哈哈哈哈哈哈哈哈！！如你所愿！！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                5,
                8
            ]
        },
        "\t[云梦溪,E1557]\b[this,7,8]哼，立粽，我帮了你这么多，记得事后要好好补偿一下人家哟，还有必须是我提！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                7,
                8
            ]
        },
        "\t[魔王,E1561]\b[this,6,2]..............曾经，我犯下过无数的错误，无数的罪孽，但现在我终于做了一件正确的事了！",
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
        "\t[仙梦,E1562]\b[this,9,2]哎呀，哥哥你不要自责呀，梦儿现在不就在你身边吗，还有我们的宝贝女儿呢。",
        "\t[仙梦,E1562]\b[this,9,2]就让梦儿跟哥哥一起结束这一切吧！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                9,
                2
            ]
        },
        "\t[记录者,E1558]\b[this,6,9]这一次的战斗....将会结束两条世界线之间发生的悲剧.....我记下了！！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                6,
                9
            ]
        },
        "\t[君无天,E1559]\b[this,5,10]......剑祖师父，星天...你们看到了吗，我已经成功抵达了你们所说的剑之巅了！",
        "\t[君无天,E1559]\b[this,5,10]就让我....带着你们的故事...你们的情感....结束这一切吧！！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                5,
                10
            ]
        },
        "\t[星钰,E1560]\b[this,7,10]父亲大人...爸爸...以及我最珍视的伙伴们...谢谢你们，让星钰成长到现在这个高度。谢谢.....",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                7,
                10
            ]
        },
        "\t[仙月,E1563]\b[this,5,5].....是吗，剑祖你这个家伙.....哎....算了....生老病死...我早就看淡了。",
        "\t[仙月,E1563]\b[this,5,5]不过...新时代初生发芽的种子们....应该不会再重演我们老一辈的悲剧了吧。",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                5,
                5
            ]
        },
        "\t[堇,E1564]\b[this,7,5]星钰妹妹，仙琳妹妹，以及小粽，我就不多说什么，就交给小粽的母亲来说吧。",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                7,
                5
            ]
        },
        "\t[母亲,E1564]\b[this,7,5]孩子，我之所以变成现在这样是因为圣羽洛斯。",
        "\t[小粽,hero]\b[hero]圣羽洛斯？？",
        "\t[母亲,E1564]\b[this,7,5]是他把我的灵魂灌输到了堇的身躯里，为了创造第三代试验体。",
        "\t[母亲,E1564]\b[this,7,5]只不过是因为他的技术失误才并没有完全将我的意识彻底抹去。只是进行了封印。",
        "\t[小粽,hero]\b[hero]......虽然不是很明白，但是那个畜生也算是无意为我做了一件唯一的好事了。",
        "\t[母亲,E1564]\b[this,7,5]呵呵呵.....你是这么认为的，算了，毕竟小粽你已经长大了有了自己的主见了，我也就不再多说了。",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                7,
                5
            ]
        },
        "\t[仙琳,E1452]\b[this,6,10]小粽？",
        "仙琳直接拉起了小粽的左手",
        "\t[仙琳,E1452]\b[this,6,10]我们走吧，结束这一切！",
        "\t[小粽,hero]\b[hero]嗯！",
        {
            "type": "playSound",
            "name": "087-Action02.ogg"
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                6,
                10
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "buff1",
            "loc": [
                6,
                11
            ]
        },
        "\t[弃坑立粽,E1555]\b[this,6,6]算上我一共十三位不同信念之人的情感之力！将会彻底粉碎你的阴谋！！邪神·谶！！",
        {
            "type": "hide",
            "loc": [
                [
                    6,
                    7
                ]
            ],
            "remove": true,
            "time": 0
        },
        {
            "type": "changePos",
            "loc": [
                6,
                7
            ],
            "direction": "up"
        },
        {
            "type": "setBlock",
            "number": "N1398",
            "loc": [
                [
                    6,
                    11
                ]
            ],
            "time": 0
        },
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'弃坑立粽'"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "*=",
            "value": "12"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "operator": "*=",
            "value": "12"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "operator": "*=",
            "value": "12"
        },
        "弃坑立粽汇集了其他十二位不同信念之人的情感之力，全属性提升原来的十二倍！！！",
        {
            "type": "callBook"
        },
        "\t[邪神·谶,E1544]\b[this,6,2]什么？！！！这！！这究竟什么力量！！怎么可能！！",
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]怎么可能！！！",
        "\t[弃坑立粽,E1555]\b[this,6,6]邪神·谶，一切都结束了！！",
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
            "type": "battle",
            "id": "E1544"
        },
        "\t[邪神·谶,E1544]\b[this,6,2]\r[red]不可能！这不可能！！我是无敌的！！我怎么可能会败给你们！！",
        {
            "type": "hideStatusBar"
        },
        {
            "type": "playSound",
            "name": "051-Explosion04.ogg"
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
            "name": "051-Explosion04.ogg"
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
            "name": "051-Explosion04.ogg"
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
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
        {
            "type": "setHeroIcon",
            "name": "hero2.png"
        },
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'小粽'"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "operator": "/=",
            "value": "11"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "operator": "/=",
            "value": "11"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "operator": "/=",
            "value": "11"
        },
        {
            "type": "changeFloor",
            "floorId": "MT563",
            "loc": [
                5,
                8
            ],
            "direction": "up"
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
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,1544, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,312,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,312,1555,312, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,312,  0,  0,  0,312, 17, 17, 17, 17],
    [ 17, 17, 17,312,312,312,  0,  0,312,312, 17, 17, 17],
    [ 17, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17, 17],
    [ 17,312,312,312,312,  0,  0,  0,  0,  0,312,312, 17],
    [312,312,312,312,312,312,  0,312,312,312,312,312,312],
    [312,312,312,312,312,312,  0,312,312,312,312,312,312]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,312,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,312,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,312,  0,312,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,312,312,  0,  0,312,  0,  0,  0,  0],
    [  0,  0,  0,312,312,  0,312,  0,312,312,  0,  0,  0],
    [  0,  0,312,312,312,312,  0,312,312,312,312,  0,  0],
    [  0,312,312,312,312,312,312,312,312,312,312,312,  0],
    [312,312,312,312,312,312,312,312,312,312,312,312,312],
    [312,312,312,312,312,312,312,312,312,312,312,312,312]
],
    "fg2map": [

]
}