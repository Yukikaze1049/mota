main.floors.SL10=
{
    "floorId": "SL10",
    "title": "魔塔 10 层",
    "name": "魔塔10",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "ybmmdfh.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "11,11": {
            "trigger": null,
            "enable": false,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "changeFloor",
                    "floorId": "SL11",
                    "loc": [
                        11,
                        11
                    ]
                }
            ]
        }
    },
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,3": [
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        8,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        7,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I443A",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I443A",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I443A",
                "loc": [
                    [
                        5,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        4,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        5,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "redGem",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        8,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        7,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "blueGem",
                "loc": [
                    [
                        7,
                        4
                    ]
                ]
            },
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
                "type": "hide",
                "loc": [
                    [
                        12,
                        4
                    ]
                ],
                "floorId": "SL2",
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "upFloor",
                "loc": [
                    [
                        11,
                        11
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        11,
                        11
                    ]
                ]
            },
            {
                "type": "changePos",
                "loc": [
                    6,
                    4
                ],
                "direction": "up"
            },
            {
                "type": "comment",
                "text": "新添加内容↓"
            },
            {
                "type": "setBlock",
                "number": "E1232",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "setBgFgBlock",
                "name": "bg",
                "number": "X10056",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 650,
                "keep": true,
                "steps": [
                    "up:1"
                ]
            },
            "\t[骷髅队长,E1232]\b[this,6,2]我..我败了，没想到啊，一个史莱姆居然会如此强大...",
            "\t[阿史,hero]\b[hero]你走吧，我不杀你。",
            "\t[骷髅队长,E1232]\b[this,6,2]你...你不杀我？你为什么放我走？你不怕养虎为患吗？",
            "\t[阿史,hero]\b[hero]我说过了，我不想再自相残杀了。在魔王还没发布通缉令的时候，史莱姆一族和骷髅一族何时这样兵戎相见过？",
            "\t[阿史,hero]\b[hero]就因为一张通缉令，砍断了两族过往的交情，骷髅队长，你难道不觉得荒谬吗？",
            "\t[阿史,hero]\b[hero]身为一方首领，你难道真的不懂唇亡齿寒的道理吗？还是说常年的酒肉已经让你丧失了思考的能力？魔塔最底层的怪物，除了史莱姆，便是骷髅了。",
            "\t[阿史,hero]\b[hero]如果我们彻底被赶尽杀绝了，那通缉令上贴着的，会不会就是你的大头照？",
            "\t[骷髅队长,E1232]\b[this,6,2]......",
            "\t[阿史,hero]\b[hero]我早在一开始就说过了，你低估了魔王的手段和野心，一颗萝卜加一根大棒就能让你们骷髅一族服服帖帖的为其弯腰擦鞋，而你，还在为其感到自豪。",
            "\t[阿史,hero]\b[hero]多么愚昧啊？你以为你是强大的骑士族还是站在顶峰魔导师族？嗯？",
            "\t[骷髅队长,E1232]\b[this,6,2]我...明白了，是我错了。谢谢你的不杀之恩，骷髅族，不会再阻拦你了。",
            {
                "type": "comment",
                "text": "新添加内容↑"
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    10
                ]
            },
            {
                "type": "setBlock",
                "number": "redKing",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            "\t[阿史,hero]\b[hero]魔王！",
            "\t[魔王,redKing]\b[this,6,10]哼！",
            "\t[阿史,hero]\b[hero]魔王！真没想到，你竟然跑到一区来抓我，为了一个小小的史莱姆，能惊动一个魔王，我的面子不小呀。",
            "\t[魔王,redKing]\b[this,6,10]哼！你短短的几天便有了挑战骷髅队长的实力，这样惊人的速度，本座可不是傻子！",
            "\t[魔王,redKing]\b[this,6,10]要知道，很多强者失败，都是因为给它们的对手太多的机会了，像很多故事里面的魔王一样，派个喽啰去消灭勇者，喽啰又派喽啰……最后勇者变强灭了魔王，所以本座这就亲手掐灭你这团微弱的烛火。本座愿意让勇者变强是因为本座需要他毁灭神圣剑，但本座不会让你变强！",
            {
                "type": "comment",
                "text": "新添加内容↓"
            },
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "backward:1"
                ]
            },
            "\t[阿史,hero]\b[hero]啧...事情有些棘手了啊...",
            "\t[魔王,redKing]\b[this,6,10]哼，想逃？这里的出口只有这一个，你想往哪走呢？",
            {
                "type": "move",
                "loc": [
                    6,
                    2
                ],
                "time": 400,
                "keep": true,
                "steps": [
                    "down:2"
                ]
            },
            "\t[骷髅队长,E1232]\b[this,6,3]我来吧，一会我纠缠住魔王，你趁机逃跑。",
            "\t[阿史,hero]\b[hero]你...",
            "\t[骷髅队长,E1232]\b[this,6,3]我看见了你身上的勇气和智慧，能走到这里的你不该埋没在魔王的手中。",
            "\t[骷髅队长,E1232]\b[this,6,3]更何况，我屠戮的史莱姆也并不少，这次...就当赎罪吧。",
            "\t[魔王,redKing]\b[this,6,10]哟哟哟，好动人的感情啊...骷髅队长，没想到你一个骷髅架子还包含着如此炽热的野心呢~",
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 500,
                "keep": true,
                "async": true,
                "steps": [
                    "up:3"
                ]
            },
            {
                "type": "sleep",
                "time": 500
            },
            {
                "type": "animate",
                "name": "bigExplosion",
                "loc": [
                    3,
                    4
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "bigExplosion",
                "loc": [
                    9,
                    4
                ],
                "async": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        3
                    ],
                    [
                        2,
                        4
                    ],
                    [
                        3,
                        5
                    ],
                    [
                        4,
                        4
                    ],
                    [
                        3,
                        4
                    ],
                    [
                        3,
                        3
                    ],
                    [
                        1,
                        4
                    ],
                    [
                        9,
                        4
                    ],
                    [
                        8,
                        4
                    ],
                    [
                        9,
                        3
                    ],
                    [
                        10,
                        4
                    ],
                    [
                        10,
                        2
                    ],
                    [
                        10,
                        3
                    ],
                    [
                        11,
                        3
                    ]
                ],
                "remove": true,
                "time": 200
            },
            {
                "type": "waitAsync"
            },
            "\t[魔王,redKing]\b[this,6,7]怎么？！现在什么阿猫阿狗都敢背叛我了吗？！小子，你在玩火，知道吗？！",
            "\t[骷髅队长,E1232]\b[this,6,3]那又怎......",
            {
                "type": "setValue",
                "name": "flag:碎裂动画",
                "value": "1"
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "name": "hp",
                "value": "1",
                "norefresh": true
            },
            {
                "type": "setEnemyOnPoint",
                "loc": [
                    [
                        6,
                        4
                    ]
                ],
                "name": "money",
                "value": "0",
                "norefresh": true
            },
            {
                "type": "battle",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "setValue",
                "name": "flag:碎裂动画",
                "value": "0"
            },
            {
                "type": "sleep",
                "time": 2000,
                "noSkip": true
            },
            "\t[阿史,hero]\b[hero]骷髅队长！",
            "\t[魔王,redKing]\b[this,6,7]我让你说话了吗？死人，就应该把嘴闭上！",
            "\t[魔王,redKing]\b[this,6,7]下一位，轮到史莱姆小朋友了~",
            {
                "type": "comment",
                "text": "新添加内容↑"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    1
                ]
            },
            {
                "type": "setBlock",
                "number": "N1216",
                "loc": [
                    [
                        6,
                        1
                    ]
                ]
            },
            "\t[黄金史莱姆,N1216]\b[this,6,1]住手！",
            "\t[魔王,redKing]\b[this,6,7]哦？想不到，还有更强的史莱姆存在于魔塔。",
            "\t[黄金史莱姆,N1216]\b[this,6,1]魔王，你杀死的史莱姆太多，这笔账，我一定要与你算一算的！",
            "\t[魔王,redKing]\b[this,6,7]就凭你？",
            "\t[黄金史莱姆,N1216]\b[this,6,1]你放在魔塔0层的幸运金币不见了吧！",
            "魔王感应了一下……",
            "\t[魔王,redKing]\b[this,6,7]你把幸运金币藏哪里了！",
            "\t[黄金史莱姆,N1216]\b[this,6,1]哼，想知道，就来呀！",
            {
                "type": "jump",
                "from": [
                    6,
                    1
                ],
                "to": [
                    1,
                    11
                ],
                "time": 500
            },
            "\t[魔王,redKing]\b[this,6,7]找死！",
            {
                "type": "jump",
                "from": [
                    6,
                    7
                ],
                "to": [
                    1,
                    11
                ],
                "time": 500
            },
            "\t[阿史,hero]\b[hero]黄金前辈！不！",
            {
                "type": "openShop",
                "id": "shop1"
            }
        ],
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,8": [
            {
                "type": "setValue",
                "name": "flag:door_SL10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,8": [
            {
                "type": "setValue",
                "name": "flag:door_SL10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:door_SL10_6_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,9": [
            {
                "type": "playBgm",
                "name": "Breaking.mp3"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    8
                ],
                "time": 500
            },
            "\t[骷髅队长,E1232]\b[this,6,3]小子，你竟然脱离了骷髅族的大牢！",
            "\t[阿史,hero]\b[hero]是的，骷髅队长，我们都是魔塔最底层的怪物，就不要自相残杀让魔王渔翁得利了吧！",
            "\t[骷髅队长,E1232]\b[this,6,3]哈哈哈哈哈！可笑啊可笑，谁跟你是魔塔最底层了！兄弟们，上，抓住它，交给大王！",
            {
                "type": "disableShop",
                "id": "shop1"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            }
        ]
    },
    "autoEvent": {
        "6,6": {
            "0": {
                "condition": "flag:door_SL10_6_6==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    "\t[骷髅队长,E1232]\b[this,6,3]竟然杀出了重围！来吧！",
                    {
                        "type": "setValue",
                        "name": "flag:door_SL10_6_6",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {
        "2,2": [
            "up",
            "down",
            "left",
            "right"
        ],
        "3,3": [
            "up",
            "down",
            "left",
            "right"
        ],
        "4,4": [
            "up",
            "down",
            "left",
            "right"
        ],
        "5,5": [
            "up",
            "down",
            "left",
            "right"
        ],
        "7,5": [
            "up",
            "down",
            "left",
            "right"
        ],
        "8,4": [
            "up",
            "down",
            "left",
            "right"
        ],
        "9,3": [
            "up",
            "down",
            "left",
            "right"
        ],
        "10,2": [
            "up",
            "down",
            "left",
            "right"
        ]
    },
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  0,  0,  0,  0,  0,  0,  0,  1,  1,  1],
    [  1,  1,  1,  1,  0,  0,1232,  0,  0,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  0,  0,  0,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1, 27,  0,443,  1,  1, 85,  1,  1,443,  0, 28,  1],
    [  1,  0, 21,  0,  1,597,  0,597,  1,  0, 21,  0,  1],
    [  1,1228,  1,1224,  1,1226,  0,1226,  1,1228,  1,1224,  1],
    [  1,  0,  1,  0,  1,  1, 83,  1,  1,  0,  1,  0,  1],
    [  1,  0, 81,442,  1, 29,  0, 29,  1,442, 81,443,  1],
    [  1, 88,  1,  0,212,  0,  0,  0,212,  0,  1,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1232,  0,  0,  0,  0,  0,  0],
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
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        1,
        11
    ]
}