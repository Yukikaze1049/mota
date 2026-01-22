main.floors.MT63=
{
    "floorId": "MT63",
    "title": "塔A 2 层",
    "name": "塔A 2 层",
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
    "firstArrive": [
        {
            "type": "switch",
            "condition": "flags.hard",
            "caseList": [
                {
                    "case": "1",
                    "action": [
                        "观剧模式下的补给，额外获得5黄钥匙1蓝钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "5"
                        },
                        {
                            "type": "setValue",
                            "name": "item:blueKey",
                            "operator": "+=",
                            "value": "1"
                        }
                    ]
                },
                {
                    "case": "2",
                    "action": [
                        "正常模式下的补给，额外获得3黄钥匙",
                        {
                            "type": "setValue",
                            "name": "item:yellowKey",
                            "operator": "+=",
                            "value": "3"
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
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {
        "1,6": [
            {
                "type": "setValue",
                "name": "flag:hong3",
                "value": "1"
            }
        ],
        "11,11": [
            {
                "type": "setValue",
                "name": "flag:lan3",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,8": {
            "0": {
                "condition": "flags.huang4",
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
        "2,2": {
            "0": {
                "condition": "flags.huang3",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026, 87,  1,  0, 81,225,224,225,  1, 21,499, 21,10024],
    [10026,  0,513,  0,  1,  1,  1, 81,  1,  0,  1,  0,10024],
    [10026, 31,  1,  0,  1,500, 21, 21,  1,224,  0,224,10024],
    [10026,  0,522,  0,  1, 32,356, 21,  1,  1, 81,  1,10024],
    [10026,  1,  1,  0,  1,  1,  1,  1,  1,  0,  0,  0,10024],
    [10026,507,  1,  0,  1, 21, 22, 21,  1,523,  1,225,10024],
    [10026,  0,226,  0,  1, 34, 21, 34,  1,  0,  1,  0,10024],
    [10026,  1,  1,  0,  1, 21, 33, 21,  1, 81,  1,513,10024],
    [10026, 32,  1,225,  1,  1,  0,  1,  1,  0,  0,  0,10024],
    [10026,501,  1,  0,  1,  0,  0,  0,  1,  0,  1,522,10024],
    [10026,224, 81,  0, 81,  0, 88,  0,224,  0,  1,509,10024],
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