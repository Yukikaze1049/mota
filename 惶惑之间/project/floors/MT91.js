main.floors.MT91=
{
    "floorId": "MT91",
    "title": "塔C 10 层",
    "name": "塔C 10 层",
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
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,7": [
            {
                "type": "setValue",
                "name": "flag:zh",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.checkAutoEvents();\n}"
            }
        ],
        "7,7": [
            {
                "type": "setValue",
                "name": "flag:zh",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "function",
                "function": "function(){\ncore.checkAutoEvents();\n}"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,9": [
            {
                "type": "setValue",
                "name": "flag:huang20",
                "value": "1"
            }
        ],
        "6,5": [
            "\t[hero]\b[hero]哦……",
            "\t[hero]\b[hero]弓手一名……战士一名……法师一名……",
            "\t[hero]\b[hero]这个组合还不错。",
            "\t[hero]\b[hero]这个模样……是被做成了傀儡的人啊……",
            "\t[hero]\b[hero]来自多久之前了？",
            "\t[hero]\b[hero]真是恶趣味的家伙……将活人制为战斗傀儡……",
            "\t[hero]\b[hero]我会帮你们解脱的。"
        ]
    },
    "autoEvent": {
        "6,8": {
            "0": {
                "condition": "flags.zh==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]如果我们死在这塔里……",
                    "\t[hero]\b[hero]也会被做成这种傀儡吗？",
                    "\t[hero]\b[hero]这座塔太过危险了。",
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "changePos",
                        "direction": "down"
                    },
                    "\t[hero]\b[hero]只有一个开关？",
                    "\t[hero]\b[hero]那只能等其他人对上黑骑士后使用护符才能汇合了。",
                    "\t[hero]\b[hero]从他们两人的话来看……他们当时还未逼出黑骑士的全力。",
                    "\t[hero]\b[hero]他到底会有多强？",
                    "\t[hero]\b[hero]让我见识见识吧……"
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 34,  1, 34,  1, 34,  1, 32,  1, 32,  1, 88,10024],
    [10026, 34,  1, 34,  1, 34,  1, 32,  1, 32,  1,  0,10024],
    [10026, 82,  1, 82,  1, 82,  1, 81,  1, 81,  1, 81,10024],
    [10026,  0,  0,  0,524,  0,  0,  0,524,  0,  0,  0,10024],
    [10026,  1, 81,  1,  1,  1, 81,  1,  1,  1, 81,  1,10024],
    [10026,  0,227,  0,  1,  0,539,  0,  1,  0,227,  0,10024],
    [10026,501,  0,500,  1,538,  0,540,  1,499,  0, 21,10024],
    [10026,  0, 34,  0,  1,  1, 85,  1,  1,  0, 34,  0,10024],
    [10026,  1,  1,  1,  1,  1,510,  1,  1,  1,  1,  1,10024],
    [10026,  4,  4,  4,  4,  1,  1,  1,  4,  4,  4,  4,10024],
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