main.floors.MT62=
{
    "floorId": "MT62",
    "title": "塔A 1 层",
    "name": "塔A 1 层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "loadBgm",
            "name": "3.mp3"
        },
        {
            "type": "function",
            "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT28: true, MT29: true, MT62: true }\n}"
        },
        {
            "type": "autoText",
            "text": "由于怀特莉丝的附身加持，现在约瑟战后只会扣除1点魔力值，鬼斩的消耗也降为了5点。\n并且魔力值降为0后不再会死亡，只是会陷入攻击防御降低10%的衰弱状态。",
            "time": 5000
        },
        {
            "type": "setValue",
            "name": "item:I518",
            "operator": "+=",
            "value": "1"
        },
        {
            "type": "autoText",
            "text": "现在获得切换三位角色的轮换道具了（快捷键4）\n过完本层剧情后将可自由使用。",
            "time": 3000
        },
        {
            "type": "playBgm",
            "name": "3.mp3",
            "keep": true
        }
    ],
    "eachArrive": [
        {
            "type": "if",
            "condition": "(flags.ts==1)",
            "true": [],
            "false": [
                {
                    "type": "if",
                    "condition": "(flags.jqjs==1)",
                    "true": [
                        {
                            "type": "autoText",
                            "text": "现在可以自由使用角色轮换了。\n操纵三名角色都到达顶层吧~\n注意其他两名角色也有自己的技能哦。",
                            "time": 3000
                        },
                        {
                            "type": "setValue",
                            "name": "flag:ts",
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    ],
    "parallelDo": "",
    "events": {
        "6,3": [
            {
                "type": "confirm",
                "text": "现在就要补充抑制器的魔力吗？",
                "yes": [
                    {
                        "type": "animate",
                        "name": "yongchang",
                        "loc": [
                            "hero.loc.x",
                            "hero.loc.y"
                        ]
                    },
                    {
                        "type": "playSound",
                        "name": "item.mp3"
                    },
                    {
                        "type": "tip",
                        "text": "吸收大块魔晶，魔力+50"
                    },
                    {
                        "type": "setValue",
                        "name": "status:mana",
                        "operator": "+=",
                        "value": "50"
                    },
                    {
                        "type": "hide",
                        "loc": [
                            [
                                6,
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
                                6,
                                3
                            ]
                        ],
                        "remove": true
                    },
                    {
                        "type": "waitAsync"
                    }
                ],
                "no": []
            }
        ],
        "4,6": [
            "\t[hero]\b[hero]这两个按钮……是做什么的？",
            "\t[怀特莉丝,N430]\b[hero]是什么隐藏机关吗？",
            "\t[hero]\b[hero]根据我的经验，这东西应该会在后面用上。",
            "\t[hero]\b[hero]魔塔的塔主们就喜欢搞这些弯弯绕绕的东西。",
            "\t[怀特莉丝,N430]\b[hero]那要先按按看吗？",
            "\t[hero]\b[hero]不……也不排除是陷阱的可能。",
            "\t[hero]\b[hero]总之先继续前进吧，看看后面有什么东西再做决定。",
            "\t[怀特莉丝,N430]\b[hero]你还挺谨慎的嘛。",
            "\t[hero]\b[hero]那不然我能活到现在吗？",
            "\t[怀特莉丝,N430]\b[hero]还不是差点就被那个黑骑士砍死了？",
            "\t[hero]\b[hero]唉……那他光追着我，也不去追伊杰明，我能有什么办法。",
            {
                "type": "moveHero",
                "time": 300,
                "steps": [
                    "right:2"
                ]
            },
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[hero]\b[hero]过不去了。",
            "\t[hero]\b[hero]这门的颜色是黄色……但我那两个按钮……",
            "\t[怀特莉丝,N430]\b[hero]红色和蓝色……会有作用吗？",
            "\t[hero]\b[hero]恐怕……这里的关键在于其他两人那里……",
            "\t[怀特莉丝,N430]\b[hero]意思是另外两个人那里才有打开这门的按钮？",
            "\t[hero]\b[hero]我这里的按钮是红色与蓝色。",
            "\t[hero]\b[hero]而门是黄色……我们又正好是三人。",
            "\t[hero]\b[hero]那伊杰明与赫那里应该分别是红黄和蓝黄……",
            "\t[怀特莉丝,N430]\b[hero]但就算你明白了这扇门的开启方式，也没办法传达给他们。",
            "\t[hero]\b[hero]呵……这么简单的道理……他们一定能理解的。",
            "\t[hero]\b[hero]都是身经百战的家伙。",
            {
                "type": "hide",
                "remove": true
            },
            {
                "type": "function",
                "function": "function(){\ncore.initHeros()\nif (hero.name == \"赫\") {\n\tflags.sk = core.getFlag('skill', 0)\n\tflags.skn = core.getFlag('skillName', '无')\n}\nif (hero.name == '约瑟' && core.getFlag('skill', 0) == 11) {\n\tflags.sr = 1;\n}\ncore.setFlag('skill', 0); // 关闭技能状态\ncore.setFlag('skillName', '无');\nflags.sc = \"#FFFFFF\";\nif (hero.name == \"伊杰明\") {\n\tcore.setFlag('skill', flags.sk || 0); // 关闭技能状态\n\tcore.setFlag('skillName', flags.skn || '无');\n}\nif (hero.name == \"赫\" && flags.sr == 1) {\n\tcore.setFlag('skill', 11);\n\tcore.setFlag('skillName', '衰弱');\n\tflags.sc = \"#800080\";\n}\nif (hero.name == \"约瑟\") flags.v1 = flags.__visited__\nif (hero.name == \"伊杰明\") flags.v2 = flags.__visited__\nif (hero.name == \"赫\") flags.v3 = flags.__visited__\nif (hero.name == \"赫\") flags.__visited__ = flags.v1\nif (hero.name == \"约瑟\") flags.__visited__ = flags.v2 || { MT72: true }\nif (hero.name == \"伊杰明\") flags.__visited__ = flags.v3 || { MT82: true }\ncore.changeHero();\n}"
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
    "afterOpenDoor": {
        "9,6": [
            {
                "type": "setValue",
                "name": "flag:lan1",
                "value": "1"
            }
        ],
        "3,6": [
            {
                "type": "setValue",
                "name": "flag:hong1",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "6,9": {
            "0": {
                "condition": "flags.huang1",
                "currentFloor": true,
                "priority": 1,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "6,7": {
            "0": {
                "condition": "flags.huang2",
                "currentFloor": true,
                "priority": 2,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            },
            "1": null
        },
        "1,11": {
            "0": {
                "condition": "flags.huang1==1&&flags.huang2==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": true,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]看来其他两人也成功打开按钮了。",
                    "\t[怀特莉丝,N430]\b[hero]嗯……看来你们这支队伍还是挺可靠的。",
                    "\t[怀特莉丝,N430]\b[hero]这能让我杀死塔主的几率大大提升。",
                    "\t[怀特莉丝,N430]\b[hero]很好。",
                    "\t[hero]\b[hero]比起天天惦记着这塔主的命。",
                    "\t[hero]\b[hero]嘿……先帮我处理掉那个麻烦的黑骑士吧！"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 24, 11, 11, 81,  0,  0,  0, 81, 11, 11, 24,10024],
    [10026,  1,  1,  1,  1,  0,101,  0,  1,  1,  1,  1,10024],
    [10026,  1,  1,  1,  1,  0,102,  0,  1,  1,  1,  1,10024],
    [10026, 24, 82, 81,  0,  0,  0,  0, 81, 81, 11, 24,10024],
    [10026,  1,  1,  1,162,  1,  1,  1,  1,  1,  1,  1,10024],
    [10026,  4,  1,507,  0,  0,  0,  0,  0,509,  1,  4,10024],
    [10026,  4,  1,  1,  1,  1,513,  1,  1,  1,  1,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,513,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1,  0,  1,  4,  4,  4,  4,10024],
    [10026,  4,  4,  4,  4,  1, 87,  1,  4,  4,  4,  4,10024],
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