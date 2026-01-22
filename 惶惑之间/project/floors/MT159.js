main.floors.MT159=
{
    "floorId": "MT159",
    "title": "最终之塔A4层",
    "name": "最终之塔A4层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 13,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "8,11": [
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    3,
                    1
                ]
            },
            {
                "type": "closeDoor",
                "id": "specialDoor",
                "loc": [
                    9,
                    11
                ]
            },
            {
                "type": "setValue",
                "name": "flag:ltf",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:jqjs",
                "value": "0"
            },
            "\t[hero]\b[hero]啧……看来这里是个精心布置的陷阱房啊。",
            {
                "type": "changePos",
                "direction": "right"
            },
            "\t[hero]\b[hero]……",
            "\t[hero]\b[hero]没有钥匙孔。",
            "\t[hero]\b[hero]那么，确定了出去的关键就只在内部区域里了。",
            {
                "type": "changePos",
                "direction": "left"
            },
            "\t[hero]\b[hero]这些十字军……应该不需要全部消灭吧？",
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        11
                    ]
                ],
                "remove": true
            }
        ],
        "7,11": [
            "\t[hero]\b[hero]移过去了。",
            "\t[hero]\b[hero]还好这东西不会主动进攻，不然在这种封闭空间内同时面对这么多敌人……",
            "\t[hero]\b[hero]就算是我也吃不消啊。",
            "\t[hero]\b[hero]看来就是得想办法通过这些傀儡的移动来创造出一条路了。",
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        11
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        10
                    ]
                ],
                "remove": true
            }
        ],
        "8,10": [
            "\t[hero]\b[hero]移过去了。",
            "\t[hero]\b[hero]还好这东西不会主动进攻，不然在这种封闭空间内同时面对这么多敌人……",
            "\t[hero]\b[hero]就算是我也吃不消啊。",
            "\t[hero]\b[hero]看来就是得想办法通过这些傀儡的移动来创造出一条路了。",
            {
                "type": "hide",
                "loc": [
                    [
                        8,
                        10
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        11
                    ]
                ],
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "3,1": {
            "0": {
                "condition": "flags.cd==2",
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
        "9,11": {
            "0": {
                "condition": "flags.cd==2",
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
        "3,11": {
            "0": {
                "condition": "flags.cd==1",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]看来还有一个对应的灯需要启动。"
                ]
            },
            "1": null
        },
        "3,10": {
            "0": {
                "condition": "flags.cd==2",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    "\t[hero]\b[hero]这下就大功告成了。",
                    "\t[hero]\b[hero]哎呀呀……不得不说我还挺喜欢这类机关的。",
                    "\t[hero]\b[hero]不过这个机关……果然是那家伙布置的陷阱吧。",
                    "\t[hero]\b[hero]这种类型的魔塔机关最早的记录在二十五年前。",
                    "\t[hero]\b[hero]从这座塔的年份来看，应该不会是塔主所为。",
                    "\t[hero]\b[hero]是塔主给他的改造楼层的权限？",
                    "\t[hero]\b[hero]真有意思……没想到居然非塔主也可以做到塔主才能做到的事情。",
                    "\t[hero]\b[hero]究竟是怎么做到的？",
                    "\t[hero]\b[hero]要不是亲自经历，还真想不到会有这种事情。",
                    "\t[hero]\b[hero]魔塔果然还有更多值得挖掘的东西啊。",
                    "\t[hero]\b[hero]不过眼下嘛……还是先肃清了你这危险分子吧。",
                    {
                        "type": "setValue",
                        "name": "flag:ltf",
                        "value": "0"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:jqjs",
                        "value": "1"
                    }
                ]
            },
            "1": null
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 87,  0,  0,  0,  0,682,  0,165,  3, 32,  0,10024],
    [10026,  0,  0,  3,  0,682,  0,682,  0,  3,  0,501,10024],
    [10026,679,  3,  3,682,  0,  0,  0,682,  3, 32,  0,10024],
    [10026,  0, 21,  3,  0,682,  0,682,  0,  3,  3,677,10024],
    [10026, 32,  0,  3,  0,  0,682,  0,  0,  3,  0,  0,10024],
    [10026,  3,674,  3,682,682,  0,682,682,  3,  0, 88,10024],
    [10026,500,  0,  3,  0,  0,682,  0,  0,  3,  0,  0,10024],
    [10026,  0, 33,  3,  0,682,  0,682,  0,  3,  3,676,10024],
    [10026,677,  3,  3,682,  0,  0,  0,682,  3, 32,  0,10024],
    [10026,  0,499,  3,  0,682,  0,682,  0,  3,  0,  0,10024],
    [10026, 33,  0,  3,165,  0,682,  0,  0,  0,  0,  0,10024],
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