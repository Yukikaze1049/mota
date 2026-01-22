main.floors.MT61=
{
    "floorId": "MT61",
    "title": "地下 1 层",
    "name": "地下 1 层",
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
            "name": "b.mp3"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[hero]\b[hero]什么？为什么没有把我直接传送到面前？",
        "\t[hero]\b[hero]我还得重新打下去才行么……",
        "\t[hero]\b[hero]唉，估计另外两个永远都不会知道我工作量要比他们多出多少。",
        {
            "type": "function",
            "function": "function(){\nflags.__visited__ = { MT1: true, MT2: true, MT3: true, MT4: true, MT5: true, MT6: true, MT7: true, MT8: true, MT9: true, MT10: true, MT11: true, MT12: true, MT13: true, MT14: true, MT15: true, MT16: true, MT28: true, MT29: true, MT61: true }\n}"
        },
        {
            "type": "changePos",
            "direction": "right"
        },
        "\t[hero]\b[hero]这个法阵是……",
        "\t[hero]\b[hero]该死，似乎是限制我的魔化能力的法阵……到底是谁设下的？",
        {
            "type": "autoText",
            "text": "鬼斩技能的主动伤害降低为100%攻击力，失去破甲效果。",
            "time": 3000
        },
        {
            "type": "setValue",
            "name": "flag:gz",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "flag:pmf",
            "value": "0"
        },
        {
            "type": "switch",
            "condition": "flags.hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "观剧模式下的补给，额外获得5黄钥匙1蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "5"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "正常模式下的补给，额外获得3黄钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "3"
                        }
                    ]
                }
            ]
        },
        {
            "type": "playBgm",
            "name": "b.mp3",
            "keep": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,4": [
            "不知何人刻下的抑制约瑟魔化能力的法阵。"
        ],
        "6,10": {
            "trigger": "action",
            "enable": true,
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
                    "type": "confirm",
                    "text": "开启此门后将禁用快捷商店\n请确认后前进。",
                    "yes": [
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                10
                            ]
                        },
                        {
                            "type": "disableShop",
                            "id": "wqsd"
                        },
                        {
                            "type": "disableShop",
                            "id": "wqsd2"
                        },
                        {
                            "type": "disableShop",
                            "id": "djsd"
                        },
                        {
                            "type": "disableShop",
                            "id": "djsd2"
                        },
                        {
                            "type": "hide",
                            "remove": true
                        }
                    ],
                    "no": []
                }
            ]
        },
        "6,3": [
            "本区域的攻略思路：\n1.优先前往地下6层拿到宝石，另外技能鬼斩对抗石头人的效果很好。\n2.饰品中的墨皮靴在对抗拥有特殊属性“强击”的敌人时是特别高效的饰品，建议至少购入用于备用。",
            "3.切装操作。现在你的饰品应该已经超出了你饰品栏的数量。在面对不同的敌人时，不同的饰品组合能达到更好的减伤效果，这个时候你可以在装备界面用Alt+数字键保存装备方案，在地图界面用Alt+数字键切换对应的装备方案。手机玩家的操作方式是点击难度的位置（观剧、正常）切换到数字键界面。该界面下先按Alt键后，就能直接按数字来切换装备方案。再次按下Alt键后，数字的功能就变回了技能的快捷键。再次点击难度的位置就能换回初始界面啦。\n此外，本游戏还提供了自动切装功能，使用虚拟键盘按下Y，再点击对应怪物，就能将你的装备方案切换为对抗点击的怪物时的最优方案。"
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,2": [
            {
                "type": "setValue",
                "name": "flag:bb10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb10==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ]
            }
        ],
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:bb10",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.bb10==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            3
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  0,  0,  0, 86,  0, 88,  0,  1,  0,  0,356,10024],
    [10026,207,  0,207,  1,  0,  0,  0,212,  0,  0,  0,10024],
    [10026,  1, 85,  1,  1,  1,  1,  1,  1, 86,  1,  1,10024],
    [10026, 21,  0, 21,  1, 89,  0,468,  1,  0,  1, 33,10024],
    [10026,  0,499,  0,  1,  0, 21,  0,  1,  0,  1,  0,10024],
    [10026, 32,  0, 32,  1, 21,  0, 21,  1,204,  1,267,10024],
    [10026,  1,  1,  1,  1,  0, 22,  0,  1,  0,  0,  0,10024],
    [10026, 21,500, 32,  1, 21,  0, 21,  1,  0,  0,  0,10024],
    [10026,  0, 34,501,  1,  1, 86,  1,  1,  1,  1,216,10024],
    [10026, 81,  1,  1,  1,  1, 86,  1,  1, 21,  0,  0,10024],
    [10026,216,253,216, 81,  0,  0,  0,204,  0,  0,  0,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,129,  0,  0,  0,  0,  0,  0],
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
    "bg2map": [

],
    "fg2map": [

],
    "underGround": true
}