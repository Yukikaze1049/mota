main.floors.SL2=
{
    "floorId": "SL2",
    "title": "魔塔 2 层",
    "name": "魔塔2",
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
        "3,11": [
            "\t[矿工史莱姆,N1214]\b[this]呀，小不点，你也被关进来啦！",
            "\t[阿史,hero]\b[hero]呜呜呜，我还要为是史莱姆一族的兄弟姐妹们报仇，没想到，竟然连几个骷髅都打不过……",
            "\t[矿工史莱姆,N1214]\b[this]呀呀呀，不要哭嘛。你哭得我都难受了。史莱姆一族反叛魔王，现在所有的史莱姆都被通缉，连我都没法逃脱……",
            "\t[阿史,hero]\b[hero]什么叫史莱姆一族反叛魔王？没有压迫，哪来的反抗？大叔，你到底是不是史莱姆一族的！",
            "\t[矿工史莱姆,N1214]\b[this]不要难过嘛，我在这里一直挖密道，咱正好可以出去呢。",
            {
                "type": "playSound",
                "name": "破墙镐"
            },
            {
                "type": "hide",
                "loc": [
                    [
                        2,
                        11
                    ]
                ],
                "remove": true
            },
            "\t[矿工史莱姆,N1214]\b[this]你如果想买钥匙，可以找我哦",
            {
                "type": "openShop",
                "id": "shop0",
                "open": true
            },
            "\t[矿工史莱姆,N1214]\b[this]我先走一步啦！",
            {
                "type": "jump",
                "from": [
                    3,
                    11
                ],
                "to": [
                    1,
                    11
                ],
                "time": 500
            }
        ]
    },
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {
        "12,4": [
            "\t[？？,skeletonKing]\b[this]什么东西，竟敢打扰本座，找死！",
            {
                "type": "if",
                "condition": "(item:coin===1)",
                "true": [
                    "\t[阿史,hero]\b[hero]等一下！请问您是骷髅族的族老吗？",
                    "\t[？？,skeletonKing]\b[this]呵，本座便是骷髅族的族老，你临死前还有什么话可说？",
                    "\t[阿史,hero]\b[hero]我们史莱姆一族的前辈请您出山帮助我们。",
                    "\t[？？,skeletonKing]\b[this]哈哈哈哈哈！",
                    {
                        "type": "vibrate",
                        "direction": "diagonal1",
                        "time": 2000,
                        "speed": 10,
                        "power": 10
                    },
                    "\t[？？,skeletonKing]\b[this]真是太可笑了，史莱姆一族得罪了魔王，被魔王发布追杀令，本座不屑于对付你这小小的史莱姆，你反倒让本座去对付魔王？本座凭什么对付魔王？",
                    "\t[阿史,hero]\b[hero]就凭这个。",
                    {
                        "type": "setValue",
                        "name": "item:coin",
                        "operator": "-=",
                        "value": "1"
                    },
                    "\t[？？,skeletonKing]\b[this]幸运金币？",
                    "\t[阿史,hero]\b[hero]黄金史莱姆前辈曾说过，数百年前，史莱姆一族与骷髅族都是魔塔最底层的怪物，骷髅族虽强，却只能镇守在魔塔的最底层，而史莱姆一族还能有史莱姆王在五区。",
                    "\t[阿史,hero]\b[hero]同为魔塔最低层的两族，曾经并肩作战，留下的血凝聚成这枚幸运金币，被魔王放在最底层——0层，镇压着两族的命运。",
                    "\t[阿史,hero]\b[hero]如今，史莱姆已经沦为魔塔中最最底层的部落，谁都可以消灭的绿史莱姆、红史莱姆，被魔王布置在最前方抵抗勇者的入侵……",
                    "\t[阿史,hero]\b[hero]我王英明，率领史莱姆一族奋力抵抗，却惨遭魔王灭族。骷髅族同为魔塔最底层的怪物，本该与史莱姆一族同仇敌忾，却为何要听命于魔王，对更弱小的史莱姆一族下手！",
                    "\t[阿史,hero]\b[hero]这枚金币，代表着史莱姆一族与骷髅一族的鲜血，族老，您还要眼睁睁地看着魔王对史莱姆一族赶尽杀绝吗？史莱姆一族灭亡后，就该轮到骷髅们上战场了！",
                    "\t[？？,skeletonKing]\b[this]……",
                    "\t[？？,skeletonKing]\b[this]可是魔王如此强大……",
                    "\t[阿史,hero]\b[hero]在这邪恶之地，恐惧是你们最大的敌人。勇气将让你们的灵魂比千颗太阳还要明亮。敌人会在你们面前溃不成军，正义的光芒将彻底摧毁他们。",
                    "\t[阿史,hero]\b[hero]所谓觉悟，就是在黑暗的荒野中开辟一条应当前行的道路，这觉悟，会比冉冉升起的朝阳还要耀眼，照耀这条光辉之路",
                    "\t[？？,skeletonKing]\b[this]史莱姆一族的后辈啊，你的嘴真是厉害，我会支持你的，如果其他三族愿意一起的话，我们会帮助你对抗魔王的。",
                    "\t[阿史,hero]\b[hero]多谢族老，愿史莱姆与骷髅的友谊长存。",
                    "\t[？？,skeletonKing]\b[this]不要高兴的太早了，你现在还很弱小，想办法变强吧，到时候我们会帮助你的！",
                    {
                        "type": "setValue",
                        "name": "flag:youyi",
                        "operator": "+=",
                        "value": "1"
                    },
                    {
                        "type": "hide",
                        "remove": true
                    }
                ],
                "false": [
                    {
                        "type": "battle",
                        "id": "skeletonKing"
                    }
                ]
            }
        ]
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 88,  1,  0,1223,442,  1, 28,  1,443, 30,443,  1],
    [  1,  0,  1,443,  1, 81,  1,  0, 82,  0,442,  0,  1],
    [  1,  0,  1,  0,  1,210,  1,212,  1,  1,1226,  1,  1],
    [  1,  0,  1, 27,  1,  0, 21,  0,  0, 29,  0,442,238],
    [  1,  0,  1,  1,  1,209,  1,211,  1,  1,  1,  1,  1],
    [  1,  0,596,  0, 83,  0,  1,  0, 29,  0,  1, 23,  1],
    [  1,  0,  1,444,  1,  1,  1, 81,  1,1222,  1,442,  1],
    [  1,  0,  1, 86,  1,  0, 81,  0, 81,  0,  1,369,  1],
    [  1,  0,  1,  0,  1, 27,  1, 28,  1,442,  1, 21,  1],
    [  1,  0,  1,  0,  1,442,  1,442,  1,  0,  1,  0,  1],
    [  1, 87,  1,1214,  1,  0,1228,  0,1229,  0,1231,  0,  1],
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
        1,
        1
    ]
}