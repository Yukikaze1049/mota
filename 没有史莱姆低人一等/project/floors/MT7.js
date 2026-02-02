main.floors.MT7=
{
    "floorId": "MT7",
    "title": "主塔 7 层",
    "name": "7",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canFlyFrom": false,
    "canUseQuickShop": false,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "saber.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,6": [
            "\t[奕开,hero]\b[hero]学姐。",
            "\t[金若美,N555]\b[this,5,6]真不错，你是第一个到达这里的。",
            "\t[奕开,hero]\b[hero]不过，这个开学测试，灵兽军事学院就让一个学姐管理吗？不派个老师什么的吗……",
            "\t[金若美,N555]\b[this,5,6]哈哈，这么多人参加入学测试，十几个老师都忙不过来",
            "\t[奕开,hero]\b[hero]十几个老师忙不过来，那你一个人能忙过来？",
            "\t[金若美,N555]\b[this,5,6]那是自然，我的实力与他们不可同日而语。",
            "\t[奕开,hero]\b[hero](真会吹牛皮)",
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
        },
        "6,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "3,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT7_4_3",
                "operator": "+=",
                "value": "1"
            }
        ],
        "5,2": [
            {
                "type": "setValue",
                "name": "flag:door_MT7_4_3",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {
        "4,4": [
            "\t[奕开,hero]\b[hero]又捕获一只灵兽，不过我才训练师1级，只能携带一只灵兽。有机会得去提升训练师等级才行。"
        ]
    },
    "afterOpenDoor": {},
    "autoEvent": {
        "4,3": {
            "0": {
                "condition": "flag:door_MT7_4_3==2",
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
                        "name": "flag:door_MT7_4_3",
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
    [  1,  0,209,  0, 31,  0,548,  0,217,  0, 81,  0,  1],
    [  1, 31,  1,202,  0,202,  1,204,  1, 29,  1,216,  1],
    [  1,  0,  1,  1, 85,  1,  1, 21,  1,  0,  1, 21,  1],
    [  1, 81,  1, 21,1027, 21,  1,442,  1,205,  1,367,  1],
    [  1,203,  1,  1,  1,  1,  1,  1,  1,  0,  1, 21,  1],
    [  1,  0, 27,  0,  1,555, 87, 32,  1, 21,  1,  1,  1],
    [  1,  1,  1,206,  1,  0, 21,  0,  1,  0,206,  0,  1],
    [  1, 31,  0,  0,  1, 81,  1,217,  1, 34,  1, 21,  1],
    [  1,  1,210,  1,203,  0, 27,  0,201,  0,  1, 29,  1],
    [  1, 22,  0,  1, 29,  1,  0,  1,  0,  1,  1,  1,  1],
    [  1, 32, 30,  1, 31,  1, 88,  1,210, 82,368,442,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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