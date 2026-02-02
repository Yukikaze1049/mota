main.floors.MT26=
{
    "floorId": "MT26",
    "title": "主塔 26 层",
    "name": "26",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "sanbu.mp3",
    "firstArrive": [
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    1,
                    3
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    3,
                    3
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    1,
                    5
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    3,
                    5
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    9,
                    3
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    11,
                    3
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    9,
                    5
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        {
            "type": "setEnemyOnPoint",
            "loc": [
                [
                    11,
                    5
                ]
            ],
            "name": "hp",
            "operator": "+=",
            "value": "200"
        },
        "两张特殊门都需要打八个巫师!本层巫师属性提升!"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "5,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_6_5",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,3": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT26_2_6",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "setValue",
                "name": "flag:door_MT26_10_6",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,5": {
            "0": {
                "condition": "flag:door_MT26_6_5==2",
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
                        "name": "flag:door_MT26_6_5",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "2,6": {
            "0": {
                "condition": "flag:door_MT26_2_6==8",
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
                        "name": "flag:door_MT26_2_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        },
        "10,6": {
            "0": {
                "condition": "flag:door_MT26_10_6==8",
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
                        "name": "flag:door_MT26_10_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 88,  0,  0,213,  0,443,  0,214,  0,  0, 87, 20],
    [ 20, 20, 82, 20, 20, 20, 20, 20, 20, 20, 82, 20, 20],
    [ 20,219,  0,219, 20,  4,  4,  4, 20,219,  0,219, 20],
    [ 20,  0,  0,  0, 20,  4,1064,  4, 20,  0,  0,  0, 20],
    [ 20,220,  0,220, 20,  4, 85,  4, 20,220,  0,220, 20],
    [ 20, 20, 85, 20, 20,245,  0,245, 20, 20, 85, 20, 20],
    [ 20, 21, 21, 21, 20,  0,  0,  0, 20, 31, 31, 31, 20],
    [ 20, 21, 21, 21, 20, 20, 84, 20, 20, 31, 31, 31, 20],
    [ 20, 21, 21, 21, 82,  0,  0,  0, 82, 31, 31, 31, 20],
    [ 20, 20, 20, 20, 20, 20,1061, 20, 20, 20, 20, 20, 20],
    [ 20, 20,20233,20234, 20,384,383,385, 20, 20,20237,20238, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,20200,20201,20202,20203,  0,  0,  0,  0,20204,20205,20206,20207],
    [  0,20208,20209,20210,20211,  0,  0,  0,  0,20212,20213,20214,20215],
    [  0,20216,20217,20218,20219,  0,  0,  0,  0,20220,20221,20222,20223],
    [  0,20224,20225,20226,20227,  0,  0,  0,  0,20228,20229,20230,20231],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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