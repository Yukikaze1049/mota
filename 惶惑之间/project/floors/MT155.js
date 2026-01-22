main.floors.MT155=
{
    "floorId": "MT155",
    "title": "最终之塔20层",
    "name": "最终之塔20层",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 9,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[惶惑卿,N430]\b[this,6,4]哼……你果然没让我失望。",
        "\t[惶惑卿,N430]\b[this,6,4]约瑟·弗里克，来吧！我就是你最后的对手！",
        "\t[hero]\b[hero]怀特莉丝……一定要以这作为结局吗？",
        "\t[惶惑卿,N430]\b[this,6,4]从找回记忆的那一刻我就已经决定了。",
        "\t[惶惑卿,N430]\b[this,6,4]我们魔族与人类的仇恨是不会终止的。",
        "\t[惶惑卿,N430]\b[this,6,4]既然如此，不妨就让我们顺从这世界的规则。",
        "\t[惶惑卿,N430]\b[this,6,4]不死不休……",
        "\t[hero]\b[hero]我明白了……既然这是你的决定……",
        "\t[hero]\b[hero]那便让我们在这里给这横跨数百年的惶惑之间划上最后的休止符吧！",
        {
            "type": "setVolume",
            "value": 0,
            "time": 1500,
            "async": true
        },
        {
            "type": "moveHero",
            "time": 50,
            "async": true,
            "steps": [
                "up:4"
            ]
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
            "moveMode": "easeOut",
            "keep": true
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "animate",
            "name": "jianji2",
            "loc": [
                5,
                4
            ]
        },
        {
            "type": "setHeroOpacity",
            "opacity": 0,
            "time": 1
        },
        {
            "type": "changeFloor",
            "floorId": "MT172",
            "loc": [
                3,
                12
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.fz==1)",
            "true": [
                "\t[惶惑卿,N430]\b[this,6,4]怎么了？",
                "\t[惶惑卿,N430]\b[this,6,4]为什么不下手？",
                "\t[惶惑卿,N430]\b[this,6,4]杀了我……这个魔塔就能结束了！",
                "\t[惶惑卿,N430]\b[this,6,4]而你……将成为英雄。",
                "\t[hero]\b[hero]你知道的……我一向对英雄这种虚名没兴趣。",
                "\t[hero]\b[hero]你刚才为什么不反击？",
                "\t[hero]\b[hero]故意让我杀了你，好让我成为杀死始祖的塔之英雄？",
                "\t[惶惑卿,N430]\b[this,6,4]为什么……不下手……你知道的……我根本就已经不想活着了。",
                "\t[惶惑卿,N430]\b[this,6,4]从找回记忆那时起……我就明白了，作为塔主终究只有被人类讨伐这一结局。",
                "\t[惶惑卿,N430]\b[this,6,4]既然如此……那未来也就没什么值得期待了……",
                "\t[惶惑卿,N430]\b[this,6,4]你是我认可的人类……与其死在其他人手上……不如由你来为我践行……",
                "\t[惶惑卿,N430]\b[this,6,4]你也能够作为英雄回去……",
                "\t[hero]\b[hero]……",
                {
                    "type": "function",
                    "function": "function(){\ncore.unloadEquip(0)\n}"
                },
                {
                    "type": "playSound",
                    "name": "item.mp3"
                },
                {
                    "type": "setBlock",
                    "number": "I699",
                    "loc": [
                        [
                            7,
                            5
                        ]
                    ]
                },
                "\t[hero]\b[hero]好了！这样我算是打败了你了！",
                "\t[hero]\b[hero]作为塔之始祖的惶惑卿已经死了！",
                "\t[hero]\b[hero]这里只有一个叫做怀特莉丝的少女！",
                "\t[怀特莉丝,N430]\b[this,6,4]约瑟……你……",
                "\t[hero]\b[hero]我是不懂什么人类与塔主那不可理清的血仇。",
                "\t[hero]\b[hero]我只知道……你并没有害过人……",
                "\t[hero]\b[hero]这世界上有杀人的塔主，也有不杀人的塔主。",
                "\t[hero]\b[hero]而人类中也有杀人的人和不杀人的人！",
                "\t[hero]\b[hero]要是用一个无辜的生命来成为我当英雄的台阶……",
                "\t[hero]\b[hero]那我宁可转头就走！",
                "\t[hero]\b[hero]你不是曾经说过想与我一同去旅行……看看这个世界？",
                "\t[hero]\b[hero]我当时也答应过你，结束一切后就带你去旅行！",
                "\t[hero]\b[hero]所以……我们的契约结束了……但约定还没结束！",
                "\t[hero]\b[hero]现在就来履行我们的约定吧！",
                "\t[怀特莉丝,N430]\b[this,6,4]……",
                "\t[怀特莉丝,N430]\b[this,6,4]哈哈哈哈！真是服了你了！约瑟！",
                "\t[hero]\b[hero]嘿……我就说你笑起来更好看些。",
                "\t[怀特莉丝,N430]\b[this,6,4]那你可要好好履行这个约定哦。",
                "\t[hero]\b[hero]包在我身上吧！",
                {
                    "type": "setValue",
                    "name": "flag:fz",
                    "value": "2"
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT172",
                    "loc": [
                        3,
                        11
                    ],
                    "direction": "right"
                }
            ]
        }
    ],
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
    [10026,  4,  1,  0,  0,  0,  0,  0,  0,  0,  1,  4,10024],
    [10026,  4,  1,  1,  0,  0,  0,  0,  0,  1,  1,  4,10024],
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