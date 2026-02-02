main.floors.SL20=
{
    "floorId": "SL20",
    "title": "魔塔 20 层",
    "name": "魔塔20",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "Aeterna.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "12,12": {
            "trigger": null,
            "enable": true,
            "noPass": null,
            "displayDamage": false,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": []
        }
    },
    "changeFloor": {
        "1,6": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,4": [
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        4
                    ]
                ],
                "floorId": "SL12",
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        12,
                        12
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        1,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "setBlock",
                "number": "N1297",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    5
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[吸血鬼,vampire]\b[this,6,4]也许，你说的是对的，魔王，从没有把我当做它的人，即便我对它忠心耿耿，它也是要打造对付我的十字架……",
            "\t[阿史,hero]\b[hero]吸血鬼，你终于醒悟了，加入我们吧，我们一起反抗魔王！",
            {
                "type": "playBgm",
                "name": "A.mp3"
            },
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    9
                ]
            },
            {
                "type": "setBlock",
                "number": "redKing",
                "loc": [
                    [
                        6,
                        9
                    ]
                ]
            },
            "\t[吸血鬼,vampire]\b[this,6,4]魔王！",
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[阿史,hero]\b[hero]魔王！",
            "\t[魔王,redKing]\b[this,6,9]哼，你竟敢策反吸血鬼！今天，是留你不得了！",
            "\t[阿史,hero]\b[hero]魔王，你压榨魔塔的同胞们也不是一日两日了，我今天虽死，但只要能将觉醒的种子种下去，迟早有一天，魔塔受到压迫的同胞们会站起来，反抗你的暴政！",
            "\t[吸血鬼,vampire]\b[this,6,6]魔王，你利用我对付勇者，为了自己的霸主之路，毁灭神圣剑，让我成为勇者的垫脚石，还打造十字架对付我，我绝不会再帮你了！",
            "\t[魔王,redKing]\b[this,6,9]好啊，吸血鬼，你也敢背叛本座！",
            "\t[吸血鬼,vampire]\b[this,6,6]哼，我在这里一直被你利用，忠心耿耿还要受你算计，背叛你又如何？",
            "\t[阿史,hero]\b[hero]吸血鬼！",
            {
                "type": "jump",
                "from": [
                    6,
                    4
                ],
                "to": [
                    6,
                    6
                ],
                "time": 500,
                "keep": true
            },
            "\t[吸血鬼,vampire]\b[this,6,6]你走吧，阿史，你是魔塔底层怪物们的希望，你代表着我们的觉醒，你决不能死在这里！",
            "\t[阿史,hero]\b[hero]吸血鬼，你也不能死啊！你是吸血鬼家族的支柱，呜呜呜呜……",
            "\t[吸血鬼,vampire]\b[this,6,6]天堂赋予我生命 地狱是宿命的归所 我生来就是恶人 地狱之门为我敞开 迎接我到来",
            "\t[吸血鬼,vampire]\b[this,6,6]去羡慕那些绚丽的恒星、行星们没有任何意义，作为一颗死星，也希望自己能够闪耀那么一次，就一次就好。做自己热爱的事情，胜过这世上的一切。",
            "\t[吸血鬼,vampire]\b[this,6,6]史莱姆族、骷髅族、吸血族还有骑士队，都等着你去觉醒。不要为我的牺牲难过，我将照亮魔塔同胞们前行的道路！魔王，来吧！",
            "\t[魔王,redKing]\b[this,6,9]吸血鬼，哈哈哈哈哈，你有胆，竟敢反抗本座！本座就看看，你如何是本座的对手！",
            {
                "type": "jump",
                "from": [
                    6,
                    9
                ],
                "to": [
                    6,
                    7
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "animate",
                "name": "hand",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "animate",
                "name": "领域",
                "loc": [
                    6,
                    6
                ]
            },
            "\t[吸血鬼,vampire]\b[this,6,6]啊！",
            "\t[阿史,hero]\b[hero]吸血鬼，我来帮你！",
            "\t[吸血鬼,vampire]\b[this,6,6]不要过来！",
            "\t[魔王,redKing]\b[this,6,7]受死吧！吸血鬼，本座要用你的尸体告诉魔塔的怪物们，背叛本座的下场！",
            "\t[吸血鬼,vampire]\b[this,6,6]阿史，你要找到十字架，告诉吸血族的同胞们，告诉它们，魔王是怎么将我们奴役，怎样迫害吸血鬼的。大法师，我的挚友，它会帮助你的！",
            {
                "type": "animate",
                "name": "light2",
                "loc": [
                    6,
                    6
                ]
            },
            {
                "type": "setBlock",
                "number": "N1298",
                "loc": [
                    [
                        6,
                        6
                    ]
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    7
                ],
                "to": [
                    6,
                    8
                ],
                "time": 500,
                "keep": true
            },
            {
                "type": "jump",
                "from": [
                    6,
                    8
                ],
                "to": [
                    6,
                    9
                ],
                "time": 500,
                "keep": true
            },
            "\t[魔王,redKing]\b[this,6,9]你要做什么！",
            "\t[阿史,hero]\b[hero]吸血鬼，你要做什么！是要自爆吗！不！",
            "\t[吸血鬼,vampire]\b[this,6,6]魔王，我打不过你，但你也休想用我的尸体去威胁魔塔的同胞们！我今天誓要让你付出代价！",
            {
                "type": "move",
                "loc": [
                    6,
                    6
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    9
                ],
                "to": [
                    6,
                    10
                ],
                "time": 500,
                "keep": true
            },
            "\t[魔王,redKing]\b[this,6,9]你这个疯子，给我站住！",
            {
                "type": "move",
                "loc": [
                    6,
                    7
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    10
                ],
                "to": [
                    6,
                    11
                ],
                "time": 500,
                "keep": true
            },
            "\t[吸血鬼,vampire]\b[this,6,8]魔王啊，聆听吸血族的愤怒吧！",
            "\t[魔王,redKing]\b[this,6,9]算你狠！本座下次再来，必定将吸血族灭了！",
            {
                "type": "jump",
                "from": [
                    6,
                    11
                ],
                "to": [
                    1,
                    6
                ],
                "time": 500
            },
            "\t[阿史,hero]\b[hero]啊，魔王，你这个卑鄙无耻之徒，竟然跑了！",
            "\t[吸血鬼,vampire]\b[this,6,8]阿史，保重！我只能走到这一步了……",
            {
                "type": "animate",
                "name": "bigExplosion",
                "loc": [
                    6,
                    8
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        6,
                        8
                    ]
                ],
                "remove": true
            },
            "\t[阿史,hero]\b[hero]呜呜呜呜，吸血鬼！你赢了，你将邪恶的魔王逼退了，自己却……"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,7": [
            "\t[阿史,hero]\b[hero]吸血鬼，现身吧！你的伎俩只能对付不了解你的勇者，对付我可没有用！",
            {
                "type": "move",
                "loc": [
                    6,
                    3
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "down:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    3
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "rightdown:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    3
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "leftdown:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    4
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "right:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    4
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "left:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    5,
                    5
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "rightup:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    5
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "up:1"
                ]
            },
            {
                "type": "move",
                "loc": [
                    7,
                    5
                ],
                "time": 500,
                "async": true,
                "steps": [
                    "leftup:1"
                ]
            },
            {
                "type": "waitAsync"
            },
            {
                "type": "vibrate",
                "direction": "diagonal1",
                "time": 2000,
                "speed": 10,
                "power": 10
            },
            "\t[吸血鬼,vampire]\b[this,6,4]哈哈哈哈哈，魔塔的叛徒，你有何面目来见我！",
            {
                "type": "animate",
                "name": "yongchang",
                "loc": [
                    6,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "vampire",
                "loc": [
                    [
                        6,
                        4
                    ]
                ]
            },
            "\t[阿史,hero]\b[hero]吸血鬼，我没有背叛魔塔，我只是反抗魔王的压迫！",
            "\t[吸血鬼,vampire]\b[this,6,4]呵呵，你敢反抗魔王，便是与我吸血鬼作对！",
            "\t[阿史,hero]\b[hero]是吗？反抗魔王便是与你吸血鬼作对？那么魔塔的十字架是怎么回事？",
            "\t[吸血鬼,vampire]\b[this,6,4]……",
            "\t[阿史,hero]\b[hero]你对魔王忠心耿耿，为何魔塔还会有十字架这件专门对付你的宝物？",
            "\t[吸血鬼,vampire]\b[this,6,4]闭嘴！我要杀了你！",
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    6,
                    9
                ]
            }
        ]
    },
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,370,1243,  0,1245, 82,1245,  0,1243,369,  0,  1],
    [  1,370,  0,  1,  1,  1,  1,  1,  1,  1,  0,369,  1],
    [  1,  0,444,  1,  0,206,206,206,  0,  1,369,  0,  1],
    [  1,444,  0,  1,  0,206,  0,206,  0,  1,  0,1240,  1],
    [  1,  1,  1,  1,  0,206,206,206,  0,  1,  1, 81,  1],
    [  1, 87,  1,  1,  1,  1,  0,  1,  1,  1,  1, 88,  1],
    [  1, 85,  1,444,368,  1, 83,  1,367, 21,  1,  0,  1],
    [  1,1240,  1,444,368, 85,  0, 85,367, 21,  1,1240,  1],
    [  1,  0,  1,444,368,  1,  0,  1,367, 21,  1,  0,  1],
    [  1, 29,  1,  1,  1,  1, 81,  1,  1,  1,  1, 29,  1],
    [  1,  0,1243,  0, 28,  0,1244,  0, 27,  0,1243,  0,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,208]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  1]
],
    "flyPoint": [
        11,
        6
    ]
}