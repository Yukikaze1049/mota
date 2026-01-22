main.floors.MT145=
{
    "floorId": "MT145",
    "title": "最终之塔10层",
    "name": "最终之塔10层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 9,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,7": {
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
            "data": []
        },
        "7,7": {
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
            "data": []
        },
        "6,8": {
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
                    "type": "if",
                    "condition": "(core.itemCount('I670')==3)",
                    "true": [
                        {
                            "type": "openDoor",
                            "loc": [
                                6,
                                8
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I670",
                            "value": "0"
                        }
                    ],
                    "false": [
                        {
                            "type": "playSound",
                            "name": "error.mp3"
                        },
                        "此门需要3个蓝宝石碎片才能开启。目前数量：${core.itemCount('I670')}个"
                    ]
                }
            ]
        }
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
        "6,7": [
            {
                "type": "moveHero",
                "time": 1,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "setVolume",
                "value": 0,
                "time": 1500,
                "async": true
            },
            "\t[伊杰明,N416]\b[hero,1]接下来能见识见识他的记忆了吗？",
            "\t[伊杰明,N416]\b[hero,1]嘿……在下还没体验过第一视角观看别人生前记忆的经历呢。",
            "\t[赫,N426]\b[hero]恐怕不行了。",
            "\t[伊杰明,N416]\b[hero,1]怎么了？",
            "\t[赫,N426]\b[hero]你看前面……又是三个通道。",
            "\t[伊杰明,N416]\b[hero,1]唔……这意思是又得强行分散了！？",
            "\t[伊杰明,N416]\b[hero,1]老规矩，若是遇到强敌就召唤其他两人。",
            {
                "type": "setValue",
                "name": "item:I351",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "item:I669",
                "value": "0"
            },
            "\t[hero]\b[hero]那么前面这道看起来是通往主干楼层的通道还是交给我吧。",
            "\t[hero]\b[hero]毕竟我比你们相对来说更熟悉这塔。",
            "\t[伊杰明,N416]\b[hero,1]哦？在我这个魔塔学者面前还真敢说啊。",
            "\t[伊杰明,N416]\b[hero,1]不过综合考虑你确实是这里最适合的人选。",
            "\t[伊杰明,N416]\b[hero,1]那么，赫小姐？你有什么想法吗？",
            "\t[赫,N426]\b[hero]我没意见。",
            {
                "type": "unfollow",
                "name": "yjm.png"
            },
            {
                "type": "unfollow",
                "name": "h.png"
            },
            {
                "type": "show",
                "loc": [
                    [
                        5,
                        7
                    ]
                ]
            },
            {
                "type": "show",
                "loc": [
                    [
                        7,
                        7
                    ]
                ]
            },
            "\t[赫,N426]\b[this,7,7]都小心些……在这最后关头。",
            "\t[伊杰明,N416]\b[this,5,7]嗯，尤其是担当重任的约瑟你。",
            "\t[hero]\b[hero]哈哈，没准我一个人就解决掉塔主了。",
            {
                "type": "move",
                "loc": [
                    5,
                    7
                ],
                "time": 150,
                "async": true,
                "steps": [
                    "up:3",
                    "left:2",
                    "up:3",
                    "left:2"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    7
                ],
                "time": 150,
                "async": true,
                "steps": [
                    "up:3",
                    "right:2",
                    "up:3",
                    "right:2"
                ]
            },
            {
                "type": "moveHero",
                "time": 250,
                "steps": [
                    "up:6"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "changeFloor",
                "floorId": "MT146",
                "loc": [
                    6,
                    1
                ],
                "direction": "down"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,8": [
            "\t[闻斯莫提,E673]\b[this,6,7]……",
            "\t[伊杰明,N416]\b[hero,1]约瑟先生，你看这是你在前三位的记忆中见到的那个魔法师吗？",
            "\t[hero]\b[hero]残魂没看太真切，不过面前的这位和那个魔法师一模一样。",
            "\t[赫,N426]\b[hero]确实魔力很强……但没有到黑骑士那个程度。",
            "\t[伊杰明,N416]\b[hero,1]那就为这四位先驱者们划上最后的句号吧。"
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 87,  0,  0,  2,  0, 87,  0,  2,  0,  0, 87,10024],
    [10026,  0,  0,  0,  2,  0,  0,  0,  2,  0,  0,  0,10024],
    [10026,  2,  2,  0,  2,  2,  0,  2,  2,  0,  2,  2,10024],
    [10026, 33,  2,  0,  0,  0,  0,  0,  0,  0,  2, 33,10024],
    [10026,501,  2,  0,  0,  0,  0,  0,  0,  0,  2,356,10024],
    [10026,228,  2,  2,  0,  0,  0,  0,  0,  2,  2,228,10024],
    [10026,  0,  0,  2,  0,419,673,429,  0,  2,  0,  0,10024],
    [10026,  2, 81,  2,  2,  2, 85,  2,  2,  2, 81,  2,10024],
    [10026, 34,  0,  2,  0, 81, 30, 81,  0,  2,  0, 34,10024],
    [10026,  0,500,  2, 34,  2,  0,  2, 34,  2,499,  0,10024],
    [10026, 34,  0,247,  0,  2, 88,  2,  0,247,  0, 34,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "upFloor": [
        6,
        1
    ]
}