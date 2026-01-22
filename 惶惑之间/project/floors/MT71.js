main.floors.MT71=
{
    "floorId": "MT71",
    "title": "塔A 10 层",
    "name": "塔A 10 层",
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
    "events": {
        "6,8": [
            "\t[hero]\b[hero]这是……之前那只合成兽？",
            "\t[怀特莉丝,N430]\b[hero]呵呵……看起来比你之前打的那只要更强哦。",
            "\t[怀特莉丝,N430]\b[hero]应该是又被加强过了吧。",
            "\t[hero]\b[hero]嘿……虽然之前那只也算是让我苦战了一番。",
            "\t[hero]\b[hero]而现在它还变得更强了。",
            "\t[hero]\b[hero]但我现在也算是士别三日了。",
            "\t[hero]\b[hero]正好测试一下现在的我能达到什么水平。",
            "\t[怀特莉丝,N430]\b[hero]解决不掉它的话可没资格再做我合作对象了哦。",
            "\t[hero]\b[hero]那就瞧好了吧您！",
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,1": [
            {
                "type": "setVolume",
                "value": 0,
                "time": 500
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
                "type": "changeFloor",
                "floorId": "MT92",
                "loc": [
                    6,
                    1
                ],
                "direction": "down"
            }
        ],
        "6,2": [
            {
                "type": "autoText",
                "text": "请注意：上楼后将无法返回。",
                "time": 3000
            },
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,7": [
            "\t[hero]\b[hero]好久没有这么畅快的手感了！",
            "\t[怀特莉丝,N430]\b[hero]前面就要遇到黑骑士了。",
            "\t[怀特莉丝,N430]\b[hero]我能感觉到……他就等在前方。",
            "\t[怀特莉丝,N430]\b[hero]你认为这只合成兽和之前的黑骑士比如何？",
            "\t[hero]\b[hero]老实说……如果是之前的我，很可能也不好解决它。",
            "\t[hero]\b[hero]但也仅仅是可能……",
            "\t[hero]\b[hero]而黑骑士在当时……是绝对解决不了……",
            "\t[怀特莉丝,N430]\b[hero]那么现在呢？",
            "\t[hero]\b[hero]还未见过黑骑士的极限……",
            "\t[hero]\b[hero]但如果我们三个人也无法解决的话……那也不用想着重来一次了。",
            "\t[hero]\b[hero]这次任务就是要么干掉他，要么被他干掉……",
            {
                "type": "hide",
                "loc": [
                    [
                        5,
                        7
                    ]
                ],
                "remove": true
            },
            {
                "type": "hide",
                "loc": [
                    [
                        7,
                        7
                    ]
                ],
                "remove": true
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,3": {
            "0": {
                "condition": "flags.huang19",
                "currentFloor": true,
                "priority": 0,
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
        "6,9": {
            "0": {
                "condition": "flags.huang20",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
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
    [10026,  0, 34,  0,  1,  0, 87,  0,  1,  0, 34,  0,10024],
    [10026, 32,  0, 32,  1,  0,  0,  0,  1, 32,  0, 32,10024],
    [10026,  1, 82,  1,  1,  1,513,  1,  1,  1, 82,  1,10024],
    [10026, 32, 32, 32,  1,  0,  0,  0,  1, 32, 32, 32,10024],
    [10026,  1, 81,  1,  1,  0,  0,  0,  1,  1, 81,  1,10024],
    [10026, 32, 32, 32,  1,  0,  0,  0,  1, 32, 32, 32,10024],
    [10026,  1, 81,  1,  1, 17,530, 17,  1,  1, 81,  1,10024],
    [10026, 32, 32, 32,  1,  0,  0,  0,  1, 32, 32, 32,10024],
    [10026,  1, 81,  1,  1,  1,513,  1,  1,  1, 81,  1,10024],
    [10026, 21, 21,356,  1,  0,  0,  0,  1,501, 21, 21,10024],
    [10026, 21,499,524, 81,  0, 88,  0, 81,524,500, 21,10024],
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