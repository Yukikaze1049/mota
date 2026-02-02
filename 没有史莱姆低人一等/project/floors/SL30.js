main.floors.SL30=
{
    "floorId": "SL30",
    "title": "魔塔 30 层",
    "name": "魔塔30",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "huiyi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,5": [
            "\t[骑士队长,E1258]\b[this,6,2]可怜的史莱姆，你竟然能走到这一步，真是令我感动啊",
            "\t[阿史,hero]\b[hero]骑士队长，我无意针对骑士队。魔王逼史莱姆族太甚，史莱姆族也是不得已反抗。",
            "\t[骑士队长,E1258]\b[this,6,2]闭嘴，大王岂是你一个小小的史莱姆能说的！",
            "\t[骑士队长,E1258]\b[this,6,2]史莱姆背叛魔塔，我骑士队长第一个不同意，今天我就要替大王，替魔塔清理了你这个叛徒！兄弟们，上！",
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "disableShop",
                "id": "shop1"
            },
            {
                "type": "disableShop",
                "id": "shop2"
            },
            {
                "type": "disableShop",
                "id": "shop3"
            },
            {
                "type": "setBlock",
                "number": "specialDoor",
                "loc": [
                    [
                        6,
                        3
                    ]
                ]
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "2,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "4,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "8,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "10,3": [
            {
                "type": "setValue",
                "name": "flag:door_SL30_6_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,2": [
            {
                "type": "if",
                "condition": "(item:I504===1)",
                "true": [
                    {
                        "type": "setValue",
                        "name": "item:I504",
                        "operator": "-=",
                        "value": "1"
                    },
                    {
                        "type": "animate",
                        "name": "light2",
                        "loc": [
                            6,
                            2
                        ]
                    },
                    {
                        "type": "animate",
                        "name": "light3",
                        "loc": [
                            6,
                            2
                        ]
                    },
                    {
                        "type": "setBlock",
                        "number": "N1004",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ]
                    },
                    "\t[正义骑士队长,N1004]\b[this,6,2]啊，我这是怎么了……",
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
                    "那一年，魔王率领着魔塔的怪物们倾巢而出，血流成河，一具又一具尸体倒在血泊之中……",
                    "\t[悲伤的父亲,man]啊，我的女儿啊！魔王啊，为何要夺走的最亲爱的女儿啊，为何要让我如此痛苦不堪，独留我一人在世。",
                    "\t[哭泣的少女,N1005]爸爸！妈妈！境哥哥！魔王啊，你看看你手上沾满的鲜血吧！那都是我亲人的鲜血啊！我痛恨你，为何让我孤苦伶仃！",
                    "\t[受伤的孩子,N1160]啊，我的手好痛啊，妈妈！妈妈，你为何不理我呀，呜呜呜……",
                    "\t[正义骑士队长,N1004]\b[this,6,2]这是……我的记忆……",
                    "\t[正义骑士队长,N1004]乡亲们……我一定为你们讨伐魔王，为你们讨回公道！",
                    "\t[悲伤的父亲,man]正义的骑士队长啊，你是我们的希望，愿你使用骑士剑，将魔王的头颅斩下！",
                    "\t[正义骑士队长,N1004]魔王，我会让你知道的，大家所失去的，我都将从你身上讨回！",
                    "魔塔内",
                    "\t[正义骑士队长,N1004]魔王，受死吧！",
                    "\t[魔王,redKing]太慢了！",
                    "\t[正义骑士队长,N1004]啊啊啊啊啊！",
                    "\t[魔王,redKing]哈哈哈哈哈哈，不自量力的小子，感觉怎么样呀？",
                    "\t[正义骑士队长,N1004]成王败寇，魔王，你杀了我吧！",
                    "\t[魔王,redKing]不不不，我想到一个更令人兴奋的方式来对付你。像你这样正义的骑士队长，如果我把你变成我的奴隶，然后让你去杀死你所守护的乡亲父老，想必他们的眼中一定会充满绝望吧！",
                    "\t[正义骑士队长,N1004]魔王，你休想！",
                    "\t[魔王,redKing]哈哈哈哈哈哈！本座现在就将你的心挖出来，让你变成一个胆小的忠心的走狗！",
                    "\t[正义骑士队长,N1004]不，不要！啊啊啊啊啊！",
                    "\t[哭泣的少女,N1005]骑士队长大人，您回来了……啊！",
                    "\t[骑士队长,E1258]哈哈哈哈哈！这几个弱小的人类，竟然不怕我，看来真是愚蠢啊！",
                    "\t[哭泣的少女,N1005]骑士队长大人，您为什么……",
                    "\t[悲伤的父亲,man]骑士队长大人……",
                    "\t[骑士队长,E1258]受死吧，愚蠢的人类！",
                    "\t[悲伤的父亲,man]啊！骑士队长大人，是我啊……",
                    "\t[受伤的孩子,N1160]骑士队长大人，不要杀我，不要杀我！我一定好好听话……啊！",
                    "鲜血染红了落日，骑士队长亲手将自己守护的百姓杀死，成为了魔王最忠实的部下……",
                    {
                        "type": "setCurtain",
                        "time": 500
                    },
                    "\t[正义骑士队长,N1004]\b[this,6,2]啊啊啊啊啊！我的头好痛！我是一个沾满鲜血的怪物，我亲手将我守护的一切毁灭了……啊啊啊啊啊！我的心好痛……",
                    "\t[阿史,hero]\b[hero]骑士队长！",
                    "\t[正义骑士队长,N1004]\b[this,6,2]啊，我不是骑士队长，我不是，我只是一个沾满鲜血的刽子手！不！",
                    "\t[阿史,hero]\b[hero]骑士队长，杀死无辜百姓的是控制你的魔王，那绝不是你的错！",
                    "\t[正义骑士队长,N1004]\b[this,6,2]谢谢你，阿史，让我恢复了本心！",
                    "\t[正义骑士队长,N1004]\b[this,6,2]我这些年，竟然成为了魔王的刀，伸向了无数无辜之人，我不能原谅自己。",
                    "\t[阿史,hero]\b[hero]错已铸成，我们要做的，是要弥补自己的错误。骑士队长，你能让骑士队一起反抗魔王吗？",
                    "\t[正义骑士队长,N1004]\b[this,6,2]嗯，阿史，我可以。对不起，阿史，我之前让骑士队杀害了那么多史莱姆的族人，如果你挑战魔王，我会尽力帮你的。",
                    {
                        "type": "setValue",
                        "name": "flag:youyi",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
                                2
                            ]
                        ],
                        "remove": true
                    }
                ],
                "false": [
                    "\t[骑士队长,E1258]你以为你很厉害了吗？嘿嘿，只是我今天状态不佳罢了，下次见面，我会让你知道厉害的！",
                    "骑士队长逃跑了！",
                    "\t[魔王,redKing]\b[this,6,1]你竟敢临阵脱逃！",
                    "\t[骑士队长,E1258]\b[this,6,1]大王，我打不过这只史莱姆，它太厉害了，饶了我吧？",
                    "\t[魔王,redKing]\b[this,6,1]作为一区的头目，你擅自逃离自己的区域，还敢求饶，魔塔不需要你这样的废物！",
                    "\t[骑士队长,E1258]\b[this,6,1]啊，大王饶命啊！啊！",
                    "骑士队长被魔卫们杀死了……",
                    "\t[阿史,hero]\b[hero]可怜的骑士队长……"
                ]
            },
            {
                "type": "setBlock",
                "number": "I371",
                "loc": [
                    [
                        8,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I371",
                "loc": [
                    [
                        9,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I371",
                "loc": [
                    [
                        10,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I372",
                "loc": [
                    [
                        4,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I372",
                "loc": [
                    [
                        3,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I372",
                "loc": [
                    [
                        2,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I444A",
                "loc": [
                    [
                        4,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I444A",
                "loc": [
                    [
                        3,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "I444A",
                "loc": [
                    [
                        2,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        8,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        9,
                        3
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "yellowKey",
                "loc": [
                    [
                        10,
                        3
                    ]
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        6
                    ]
                ],
                "remove": true
            },
            {
                "type": "openShop",
                "id": "shop1"
            },
            {
                "type": "openShop",
                "id": "shop2"
            },
            {
                "type": "openShop",
                "id": "shop3"
            }
        ]
    },
    "afterGetItem": {
        "6,2": []
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flag:door_SL30_6_3==12",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_SL30_6_3",
                        "value": "null"
                    },
                    "\t[骑士队长,E1258]\b[this,6,2]你竟然打败了我所有的手下，我不会饶恕你的，来吧！"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,  0,  0,  0,  1, 87,  1,  0,  0,  0,  0,  1],
    [  1,  0,1254,1254,1254,  1,1258,  1,1260,1260,1260,  0,  1],
    [  1,  0,1256,1256,1256,  1,  0,  1,1257,1257,1257,  0,  1],
    [  1,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1],
    [  1,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  1],
    [  1, 81,373,444,445,  1, 83,  1,445,444,373, 81,  1],
    [  1,373,  1,  1, 82,  1,  0,  1, 82,  1,  1,373,  1],
    [  1,445,  1,373,446,  1,  0,  1,446,373,  1,445,  1],
    [  1,445,  1,444,373,  1,  0,  1, 29,444,  1,445,  1],
    [  1, 81,  1,  1,  1,  1,  0,  1,  1,  1,  1, 81,  1],
    [  1,445, 81,369,443, 81, 88, 81,443,369, 81,445,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

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