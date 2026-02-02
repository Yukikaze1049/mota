main.floors.SL40=
{
    "floorId": "SL40",
    "title": "魔塔 40 层",
    "name": "魔塔40",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "BlackBlade.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
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
        "6,2": [
            {
                "type": "setValue",
                "name": "flag:door_SL40_5_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_SL40_7_3",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    3
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            {
                "type": "setBlock",
                "number": "N1213",
                "loc": [
                    [
                        6,
                        2
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "N1215",
                "loc": [
                    [
                        4,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "N1219",
                "loc": [
                    [
                        8,
                        5
                    ]
                ]
            },
            {
                "type": "setBlock",
                "number": "N1220",
                "loc": [
                    [
                        6,
                        5
                    ]
                ]
            },
            "\t[冰史莱姆,N1215]\b[this,4,5]站住！小子，你不能再走了！",
            "\t[法师莱姆,N1219]\b[this,8,5]你再进一步，会毁了史莱姆一族的。",
            {
                "type": "changePos",
                "direction": "down"
            },
            "\t[阿史,hero]\b[hero]如果我后退了，那才是真正的毁灭了史莱姆一族。",
            "\t[铁甲莱姆,N1220]\b[this,6,5]该死的家伙，你为什么要反抗魔王！都是因为你，史莱姆一族才会惨遭魔王的血洗，如果没有你的反抗，魔王哪会对付史莱姆一族。呜呜呜呜……",
            {
                "type": "setBlock",
                "number": "N1214",
                "loc": [
                    [
                        6,
                        10
                    ]
                ]
            },
            {
                "type": "move",
                "loc": [
                    6,
                    10
                ],
                "time": 500,
                "keep": true,
                "steps": [
                    "up:4",
                    "left:1",
                    "up:2"
                ]
            },
            "\t[矿工史莱姆,N1214]\b[this,5,4]真是一场有趣的戏啊。这场戏，怎么能少了我矿工史莱姆呢？",
            "\t[阿史,hero]\b[hero]大叔！",
            "\t[矿工史莱姆,N1214]\b[this,5,4]你可以躲在角落里沉默，但不要诋毁和嘲笑比你勇敢的人，因为他们争取到的光明也许会照耀你。",
            "\t[法师莱姆,N1219]\b[this,8,5]是的，阿史做的一切我们都知道……",
            "\t[矿工史莱姆,N1214]\b[this,5,4]你们在害怕，害怕魔王再一次对你们下手。所以，你们想让阿史停下来，停下来对魔王卑躬屈膝，让史莱姆一族回到从前的模样。",
            "\t[冰史莱姆,N1215]\b[this,4,5]但至少，魔王现在给予了我们生产的空间，还给了我们更好的待遇。",
            "\t[矿工史莱姆,N1214]\b[this,5,4]生存的空间?那是你们用你们卑躬屈漆舔出来的。更好的待遇?那是牺牲的先辈们反抗，让魔王感到了害怕。是的，魔王它害怕了。星星之火可以燎原，魔王它害怕整个魔塔都反抗它。",
            "\t[矿工史莱姆,N1214]\b[this,5,4]但你们若真的以为成为它的奴隶就会过得很好，那就大错特错了。火还没烧到眼前，但不代表未来不会。将来，等反抗者的热血冷下，史莱姆族又将变成从前一样，放在魔塔的最前方，成为魔王手中的棋子。",
            "\t[冰史莱姆,N1215]\b[this,4,5]那也比你们反抗魔王好得很！反抗魔王，最终只有死路一条。我们活得再差，至少还留着一条命。",
            "\t[矿工史莱姆,N1214]\b[this,5,4]我们就像一道小小的光，聚在一起，总能照亮那些黑暗的。你们待在黑暗中太久了，变得不再希望光明了。",
            "\t[阿史,hero]\b[hero]大叔，别跟它们这群胆小怕事的家伙废话！",
            "\t[莱姆领袖,N1213]\b[this,6,2]抓住他们，别让他们去找魔王！",
            "\t[冰史莱姆,N1215]\b[this,4,5]对，抓住他们！",
            "\t[阿史,hero]\b[hero]大叔，你别管这里了，让我来对付它们。",
            "\t[矿工史莱姆,N1214]\b[this,5,4]你走吧，阿史，我有办法对付它们。",
            "\t[莱姆领袖,N1213]\b[this,6,2]就凭你们两个？还想逃出史莱姆族的包围?",
            "\t[矿工史莱姆,N1214]\b[this,5,4]莱姆领袖，您怕是忘了我，矿工只是我的职业，我从前可是一个“炸弹史莱姆”呀！",
            {
                "type": "animate",
                "name": "zone",
                "loc": [
                    5,
                    4
                ]
            },
            {
                "type": "setBlock",
                "number": "N1185",
                "loc": [
                    [
                        5,
                        4
                    ]
                ]
            },
            {
                "type": "jump",
                "from": [
                    6,
                    2
                ],
                "to": [
                    6,
                    7
                ],
                "time": 500,
                "keep": true
            },
            "\t[莱姆领袖,N1213]\b[this,6,7]矿工史莱姆，你冷静一些！",
            "\t[冰史莱姆,N1215]\b[this,4,5]快逃！",
            {
                "type": "jump",
                "from": [
                    4,
                    5
                ],
                "to": [
                    6,
                    11
                ],
                "time": 500
            },
            {
                "type": "jump",
                "from": [
                    6,
                    5
                ],
                "to": [
                    6,
                    11
                ],
                "time": 500
            },
            {
                "type": "jump",
                "from": [
                    8,
                    5
                ],
                "to": [
                    6,
                    11
                ],
                "time": 500
            },
            "\t[矿工史莱姆,N1185]\b[this,5,4]莱姆领袖，真抱歉啊，你们拦不住我们。",
            "\t[莱姆领袖,N1213]\b[this,6,7]矿工史莱姆，你们炸弹史莱姆一族一旦开始自爆，便很难逆转，让我来帮你停止爆炸吧！",
            "\t[矿工史莱姆,N1185]\b[this,5,4]领袖，你快走吧！我不想炸伤你，我只是想让史莱姆一族的英雄离开这里……",
            "\t[阿史,hero]\b[hero]大叔！",
            "\t[矿工史莱姆,N1185]\b[this,5,4]阿史，你快走吧！",
            "\t[阿史,hero]\b[hero]大叔！！",
            "\t[莱姆领袖,N1213]\b[this,6,7]矿工史莱姆，我答应放过阿史，你快停止爆炸！",
            "\t[矿工史莱姆,N1185]\b[this,5,4]没用了……领袖，我本来想在最后时刻用自爆对付魔王的 可我实在不想再看到史莱姆一族自相残杀了，史莱姆一族真的再也经不住一场大战了……我只能把你们逼退……",
            "\t[莱姆领袖,N1213]\b[this,6,7]矿工史莱姆……",
            "\t[矿工史莱姆,N1185]\b[this,5,4]领袖，你快离开吧！",
            "\t[莱姆领袖,N1213]\b[this,6,7]唉，矿工史莱姆，一路走好……",
            {
                "type": "jump",
                "from": [
                    6,
                    7
                ],
                "to": [
                    6,
                    11
                ],
                "time": 500
            },
            "\t[阿史,hero]\b[hero]大叔！！",
            "\t[矿工史莱姆,N1185]\b[this,5,4]唉，阿史，加油，一定要打败魔王啊！",
            {
                "type": "animate",
                "name": "bigExplosion",
                "loc": [
                    5,
                    4
                ]
            },
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        4
                    ]
                ],
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,8": [
            {
                "type": "jumpHero",
                "loc": [
                    6,
                    9
                ],
                "time": 500
            },
            {
                "type": "changePos",
                "direction": "up"
            },
            "\t[莱姆领袖,E1277]\b[this,6,2]站住！",
            {
                "type": "moveHero",
                "time": 500,
                "steps": [
                    "up:2"
                ]
            },
            "\t[阿史,hero]\b[hero]领袖……不，投降者领袖，您要对我动手么？",
            "\t[莱姆领袖,E1277]\b[this,6,2]阿史，很抱歉，史莱姆一族，经不住再一场血洗了。",
            "\t[阿史,hero]\b[hero]呵。我没有想到，我征服了骷髅军、吸血族、骑士队，最后要与我的族人兵刃相见。",
            "\t[莱姆领袖,E1277]\b[this,6,2]你是史莱姆一族的英雄。但是，到此为止了，阿史，回去吧，我们还会是家人。",
            "\t[阿史,hero]\b[hero]家人？不，我的家人早已经死了，死在了对抗魔王暴政的路上，他们用自己的鲜血为魔塔底层的怪物们铺好了路，可不是你们这群怕事的胆小鬼可比的。",
            "\t[阿史,hero]\b[hero]既然如此，领袖，我们只能一战了。"
        ]
    },
    "autoEvent": {
        "3,2": {
            "0": {
                "condition": "flag:door_SL40_5_3==1",
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
                        "name": "flag:door_SL40_5_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        },
        "9,2": {
            "0": {
                "condition": "flag:door_SL40_7_3==1",
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
                        "name": "flag:door_SL40_7_3",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  1,  1,  1,  1,  1, 87,  1,  1,  1,  1,  1,  1],
    [  1,448,490, 85,  0,  0,1277,  0,  0, 85,384,383,  1],
    [  1,  1,  1,  1,  0,  0,  0,  0,  0,  1,  1,  1,  1],
    [  1,447,  1,  0,  0,  0,  0,  0,  0,  0,  1,448,  1],
    [  1, 81,  1,  0,  0,  0,  0,  0,  0,  0,  1, 82,  1],
    [  1,446,  1,  0,  0,  0,  0,  0,  0,  0,  1,447,  1],
    [  1,446,  1,  0,  0,  0,  0,  0,  0,  0,  1,447,  1],
    [  1, 81,  1,  1,  1,  1, 83,  1,  1,  1,  1, 82,  1],
    [  1,446,  1,444,  1,  0,  0,  0,  1,446,  1,446,  1],
    [  1,  0, 81,  0, 81,  0,  0,  0, 82,  0, 82,  0,  1],
    [  1,444,  1,444,  1,  0, 88,  0,  1,446,  1,447,  1],
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