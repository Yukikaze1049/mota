main.floors.MT146=
{
    "floorId": "MT146",
    "title": "最终之塔11层",
    "name": "最终之塔11层",
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
        {
            "type": "loadBgm",
            "name": "jw.mp3"
        },
        "\t[hero]\b[hero]什么？这里怎么又是魔物层？",
        "\t[hero]\b[hero]紫之宝石呢？",
        {
            "type": "setHeroIcon",
            "name": "o.png"
        },
        "\t[怀特莉丝,N430]\b[hero]或许那个闻斯莫提有问题……",
        "\t[怀特莉丝,N430]\b[hero]之前的三个傀儡被打败后尸体并不会直接消失。",
        "\t[怀特莉丝,N430]\b[hero]而刚才的闻斯莫提却消失了。",
        {
            "type": "setHeroIcon",
            "name": "hero.png"
        },
        "\t[hero]\b[hero]这一点我倒是也注意到了。",
        "\t[hero]\b[hero]莫非这家伙生前会使用替身术一类的能力么？",
        {
            "type": "setHeroIcon",
            "name": "o.png"
        },
        "\t[怀特莉丝,N430]\b[hero]但这里……给我的感觉既熟悉……又难受……",
        "\t[怀特莉丝,N430]\b[hero]塔主应该就在不远处了。",
        "\t[怀特莉丝,N430]\b[hero]一定要找回我的记忆……",
        {
            "type": "setHeroIcon",
            "name": "hero.png"
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setVolume",
            "value": 100,
            "time": 1
        },
        {
            "type": "autoText",
            "text": "现在可以使用三人轮换了。\n与上次不同，这次三人的闯关是完全独立的，完全可以打完一座再换另一个角色。\n只需要保证三人都打过各自关卡的头目即可。",
            "time": 5000
        },
        {
            "type": "setBlock",
            "number": "specialDoor",
            "loc": [
                [
                    3,
                    3
                ]
            ],
            "floorId": "MT145"
        },
        {
            "type": "setBlock",
            "number": "specialDoor",
            "loc": [
                [
                    9,
                    3
                ]
            ],
            "floorId": "MT145"
        },
        {
            "type": "function",
            "function": "function(){\nflags.jqjs = 1;\nflags.qh = 1;\nvar hero1 = {\n\t\"floorId\": \"MT156\", // 该角色初始楼层ID；如果共用楼层可以注释此项\n\t\"image\": \"yjm.png\", // 角色的行走图名称；此项必填不然会报错\n\t\"name\": \"伊杰明\",\n\t\"hp\": 5000, // 如果HP共用可注释此项\n\t'manamax': 200,\n\t'mana': 200,\n\t\"atk\": 700,\n\t\"def\": 700,\n\t\"mdef\": 2000,\n\t// \"money\": 0, // 如果要不共用金币则取消此项注释\n\t// \"exp\": 0, // 如果要不共用经验则取消此项注释\n\t\"loc\": { \"x\": 1, \"y\": 1, \"direction\": \"down\" }, // 该角色初始位置；如果共用位置可注释此项\n\t\"items\": {\n\t\t\"tools\": {}, // 如果共用消耗道具（含钥匙）则可注释此项\n\t\t\"constants\": { 'book': 1, 'fly': 1, 'I345': 1, 'I346': 1, 'I517': 1, 'I518': 1 }, // 如果不共用永久道具（如手册）可取消注释此项\n\t\t\"equips\": {}, // 如果共用在背包的装备可注释此项\n\t},\n\t\"equipment\": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题\n};\n// 也可以类似新增其他角色\n// 新增的角色，各项属性共用与不共用的选择必须和上面完全相同，否则可能出现问题。\nvar hero2 = {\n\t\"floorId\": \"MT163\", // 该角色初始楼层ID；如果共用楼层可以注释此项\n\t\"image\": \"h.png\", // 角色的行走图名称；此项必填不然会报错\n\t\"name\": \"赫\",\n\t\"hp\": 5000, // 如果HP共用可注释此项\n\t'manamax': 3,\n\t'mana': 3,\n\t\"atk\": 720,\n\t\"def\": 640,\n\t\"mdef\": 1500,\n\t// \"money\": 0, // 如果要不共用金币则取消此项注释\n\t// \"exp\": 0, // 如果要不共用经验则取消此项注释\n\t\"loc\": { \"x\": 11, \"y\": 1, \"direction\": \"down\" }, // 该角色初始位置；如果共用位置可注释此项\n\t\"items\": {\n\t\t\"tools\": {}, // 如果共用消耗道具（含钥匙）则可注释此项\n\t\t\"constants\": { 'book': 1, 'fly': 1, 'I519': 1, 'I520': 1, 'I521': 1, 'I518': 1 }, // 如果不共用永久道具（如手册）可取消注释此项\n\t\t\"equips\": {}, // 如果共用在背包的装备可注释此项\n\t},\n\t\"equipment\": [], // 如果共用装备可注释此项；此项和上面的「共用在背包的装备」需要拥有相同状态，不然可能出现问题\n};\n\n\ncore.setFlag(\"hero1\", core.clone(hero1)); // 将属性值存到变量中\ncore.setFlag(\"hero2\", core.clone(hero2)); // 更多的角色也存入变量中；每个定义的角色都需要新增一行\n}"
        },
        {
            "type": "playBgm",
            "name": "jw0.mp3",
            "keep": true
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before"
        },
        "11,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 32, 31, 32, 81,  0, 88,  0, 81, 32, 31, 32,10024],
    [10026,  2,  2,  2,  2,  0,  0,  0,  2,  2,  2,  2,10024],
    [10026, 31,  0,  0,  2,  2, 82,  2,  2,  0,  0, 31,10024],
    [10026,  0,  0,228, 81,  0,  0,  0, 81,228,  0,  0,10024],
    [10026,  0,  0,  0,  2,  2, 81,  2,  2,  2,  2, 81,10024],
    [10026, 81,  2,  2,  2, 31,  0, 31,  2,  0,  0,  0,10024],
    [10026,676,  0, 21,  2,  0, 32,  0,  2,676,  2,  2,10024],
    [10026,  0,501, 32,  2, 31,  0, 31,  2,  0,  0,  0,10024],
    [10026, 81,  2,  2,  2,  2,  2,  2,  2,  2,  2, 81,10024],
    [10026,677,  0, 21,  2, 32,499,  0,  2,  0,  0,  0,10024],
    [10026,  0,500, 32,  2, 21,  0,674, 81,  0,  0, 87,10024],
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