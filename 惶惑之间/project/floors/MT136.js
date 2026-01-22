main.floors.MT136=
{
    "floorId": "MT136",
    "title": "最终之塔1层",
    "name": "最终之塔1层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 0,
    "defaultGround": "ground",
    "firstArrive": [
        "\t[hero]\b[hero]接下来的这些应该就是塔主最后的魔物了吧。",
        "\t[伊杰明,N416]\b[hero]嗯……感觉有股微妙的魔法波动。",
        {
            "type": "switch",
            "condition": "flags.hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "观剧模式下的补给，额外获得7黄钥匙2蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "7"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "2"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "正常模式下的补给，额外获得3黄钥匙1蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "3"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,8": [
            "\t[伊杰明,N416]\b[hero,1]小心点，这里的魔物好像被套上了一层强化魔法。",
            "\t[伊杰明,N416]\b[hero,1]他们的战力大幅度上升了。",
            "\t[赫,N426]\b[hero,2]若是单人行动的话确实棘手。",
            "\t[赫,N426]\b[hero,2]但目前三人合作倒是还能应付。"
        ],
        "6,6": [
            "\t[hero]\b[hero]刚刚那只释放了火焰魔法……",
            "\t[伊杰明,N416]\b[hero,1]这附近充斥着火焰，冰冻，雷电魔法的气息……",
            "\t[伊杰明,N416]\b[hero,1]看来这里的魔物都会释放其中一种魔法。",
            "\t[hero]\b[hero]这不是你最擅长的三个魔法吗？",
            "\t[伊杰明,N416]\b[hero,1]嗯……因为这三系魔法是最常用的攻击魔法。",
            "\t[伊杰明,N416]\b[hero,1]从几百年前开始，基本上每一个入门的魔法师都会选择其一进行研习。",
            "\t[伊杰明,N416]\b[hero,1]上手很容易，但精通不简单。",
            "\t[hero]\b[hero]不过这里的感觉让我想起了之前的三色塔。",
            "\t[hero]\b[hero]这么看来这一层应该会有一只怨灵来维持魔物的魔力供给。"
        ],
        "3,1": [
            "\t[伊杰明,N416]\b[hero,1]三系魔法的感觉确实消失了。",
            "\t[赫,N426]\b[hero,2]看来和约瑟说的一样。",
            "\t[hero]\b[hero]如果和那三座塔一样的话……这里的BOSS是那个魔法师的傀儡么……"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 87,  0,668,  0, 81,  0, 82,499,500,501, 33,10024],
    [10026,  2,  2,  2,  2,  2,246,  2,  2,  2,  2,  2,10024],
    [10026, 22, 21, 21, 21, 84,  0, 84, 21, 21, 21, 22,10024],
    [10026,  2,  2,  2,  2,  2,219,  2,  2,  2,  2,  2,10024],
    [10026, 33, 33, 33, 33, 84,  0, 84, 33, 33, 33, 33,10024],
    [10026,  2,  2,  2,  2,  2,246,  2,  2,  2,  2,  2,10024],
    [10026, 33, 33, 33, 33, 84,  0, 84, 33, 33, 33, 33,10024],
    [10026,  2,  2,  2,  2,  2,219,  2,  2,  2,  2,  2,10024],
    [10026, 33, 33, 33, 33, 84,  0, 84, 33, 33, 33, 33,10024],
    [10026,  2,  2,  2,  2,  2,  0,  2,  2,  2,  2,  2,10024],
    [10026,  4,  4,  4,  4,  2, 88,  2,  4,  4,  4,  4,10024],
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