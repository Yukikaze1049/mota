main.floors.MT170=
{
    "floorId": "MT170",
    "title": "塔顶",
    "name": "塔顶",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": -1,
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "changePos",
            "loc": [
                6,
                8
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "setVolume",
            "value": 100,
            "time": 1
        },
        {
            "type": "playBgm",
            "name": "bz.mp3",
            "keep": true
        },
        "\t[惶惑卿,hhq2.png]\b[this,6,4]佩服……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]你是有史以来第一个来到我面前的勇者。",
        "\t[黑骑士,hero]\b[hero]你的魔塔究竟吞噬了多少人类的生命？",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]啧……还不够啊……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]至今为止的生命力还不足以令我维持这座魔塔……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]让我真正成为这座塔的主人。",
        "\t[黑骑士,hero]\b[hero]你的罪行到此为止了。",
        "\t[黑骑士,hero]\b[hero]由我将你讨伐！",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]呵呵……克洛德……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]这就是你当初所说的……我终有一日会被新的勇者前来讨伐么……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]也罢，就让我来看看你是否有足够的力量来践行你的正义吧！",
        {
            "type": "moveHero",
            "time": 1,
            "steps": [
                "up:3"
            ]
        },
        {
            "type": "animate",
            "name": "omnislash",
            "loc": [
                6,
                4
            ],
            "async": true
        },
        {
            "type": "animate",
            "name": "领域",
            "loc": [
                6,
                5
            ]
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "moveHero",
            "time": 500,
            "steps": [
                "backward:2"
            ]
        },
        "\t[黑骑士,hero]\b[hero]咳！",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]漆黑之刃？",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]原来如此……夜之铠与漆黑之刃……",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]几百年前的那一件禁忌套装吗？",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]如果我记得没错的话……你这套装备会不断侵蚀使用者的意识和生命力吧？",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]若是没有那名为天使之泪的护身符配套来压制这装备的邪性……那就和自杀无异。",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]而你身上似乎没有那块护身符。",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]不惜做到这种地步……你究竟是怎么想的？",
        "\t[黑骑士,hero]\b[hero]唔……看来我已经……",
        "\t[黑骑士,hero]\b[hero]呵呵……反正我的生命也已经所剩无几……有没有那护身符都没有区别了。",
        "\t[黑骑士,hero]\b[hero]我并没有打算活着回去。",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]什么？",
        "\t[惶惑卿,hhq2.png]\b[this,6,4]你究竟想……",
        "\t[黑骑士,hero]\b[hero]魔塔的塔主啊……我们人类很弱小……远不能与你们这样的存在相提并论。",
        "\t[黑骑士,hero]\b[hero]正因如此……我们才需要寻找各种手段才能接近你们！",
        "\t[黑骑士,hero]\b[hero]但是天生就作为强者的你们……恐怕永远也无法理解弱者为了能够触碰到你们……会抱有多么强烈的意志吧？",
        "\t[黑骑士,hero]\b[hero]为了家人，为了国家，为了亲友……",
        "\t[黑骑士,hero]\b[hero]归根到底……我们就是为了反抗你们的暴行！",
        "\t[黑骑士,hero]\b[hero]信念与情感……化为驱动力……这就是我们这种身为弱者的人类为了打倒你们而必不可少的因素！",
        "\t[黑骑士,hero]\b[hero]就让你见识一下……我们人类能够做到的极限吧！",
        {
            "type": "animate",
            "name": "buff",
            "loc": [
                6,
                7
            ]
        },
        "\t[惶惑卿,hhq2.png]\b[this,6,4]可恶！你这疯子！？",
        {
            "type": "moveHero",
            "time": 1,
            "steps": [
                "up:2"
            ]
        },
        {
            "type": "animate",
            "name": "ydld",
            "loc": [
                6,
                4
            ]
        },
        {
            "type": "move",
            "loc": [
                6,
                4
            ],
            "time": 1,
            "keep": true,
            "steps": [
                "backward:1"
            ]
        },
        {
            "type": "moveHero",
            "time": 1,
            "async": true,
            "steps": [
                "backward:4"
            ]
        },
        {
            "type": "waitAsync"
        },
        "\t[惶惑卿,hhq2.png]\b[this,6,3]咳咳！该死……",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]啊……我的身体……用了全部的魔力……还是被砍了这么深的伤口么……",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]哈哈哈！你可真是厉害啊！",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]不过真是遗憾啊！我接下来只要暂时封印起这个塔……等待时机慢慢恢复力量……就能再次归来！",
        "\t[黑骑士,hero]\b[hero]……",
        "\t[黑骑士,hero]\b[hero]咳……看来……我……已经到此为止了……",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]呵呵……虽然我不得不让这座魔塔消失一段时间。",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]但你知道吗？身为始祖的我，能力是可以将亡者生前的力量变成战斗傀儡重现！",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]你不但没能彻底杀死我……还会成为这座魔塔的一部分力量！",
        "\t[黑骑士,hero]\b[hero]……呵",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]你笑什么？",
        "\t[黑骑士,hero]\b[hero]在我之前……你没有想过会有人把你逼到这种地步吧？",
        "\t[黑骑士,hero]\b[hero]既然我能做到……那么之后也会有人做到。",
        "\t[黑骑士,hero]\b[hero]能够超越我的后来者迟早会出现。",
        "\t[黑骑士,hero]\b[hero]魔塔的塔主，你给我记好了……",
        "\t[黑骑士,hero]\b[hero]人类对抗你们的唯一手段……就是生生不息的意志传承。",
        "\t[黑骑士,hero]\b[hero]继承我们的意志的后来者，终将粉碎你的野心的！",
        {
            "type": "setVolume",
            "value": 0,
            "time": 1500,
            "async": true
        },
        {
            "type": "setHeroOpacity",
            "opacity": 0,
            "time": 500
        },
        "\t[惶惑卿,hhq2.png]\b[this,6,3]啧……死了还一副自以为是的样子……令人不快……",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]不论如何……只有活着……唯有活着！",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]活着才是一切！这才是这个世界的唯一真理！",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]来多少后继者也好……我始终会活下去！",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]咳咳！受的伤居然这么严重……",
        "\t[惶惑卿,hhq2.png]\b[this,6,3]看来不得不休息一阵了……",
        {
            "type": "setBlock",
            "number": "crystalUp",
            "loc": [
                [
                    6,
                    3
                ]
            ],
            "time": 500,
            "async": true
        },
        {
            "type": "setBlock",
            "number": "crystalBottom",
            "loc": [
                [
                    6,
                    4
                ]
            ],
            "time": 500
        },
        {
            "type": "waitAsync"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setCurtain",
            "color": [
                0,
                0,
                0,
                1
            ],
            "time": 1000,
            "keep": true
        },
        {
            "type": "setHeroOpacity",
            "opacity": 1
        },
        {
            "type": "setHeroIcon",
            "name": "h.png"
        },
        {
            "type": "setValue",
            "name": "flag:hqshy",
            "value": "1"
        },
        {
            "type": "changeFloor",
            "floorId": "MT169",
            "loc": [
                6,
                3
            ],
            "direction": "up"
        }
    ],
    "eachArrive": [],
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
    [10026,  4,  1,  0,  0,  0,694,  0,  0,  0,  1,  4,10024],
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