main.floors.MT10=
{
    "floorId": "MT10",
    "title": "主塔 10 层",
    "name": "10",
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
        "3,1": [
            "\t[金若美,N555]\b[this,3,1]击败史莱姆王基本可以百分百收服史莱姆王，如果可以，尽量把所有的史莱姆王收服了，离开这里可就很难遇到史莱姆王了哦",
            {
                "type": "hide",
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
    "afterBattle": {
        "5,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ],
        "7,5": [
            {
                "type": "setValue",
                "name": "flag:door_MT10_6_4",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,4": {
            "0": {
                "condition": "flag:door_MT10_6_4==2",
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
                        "name": "flag:door_MT10_6_4",
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 87,  0,555,  1,369,  0, 32,  1, 32,  1, 32,  1],
    [  1, 31,  0,  0,  1,  0, 23,  0,  1,369,  1,369,  1],
    [  1,  1, 81,  1,  1, 31,  0,547,  1,602,  1,602,  1],
    [  1,205,  0, 27,  1,  1, 85,  1,  1, 81,  1, 81,  1],
    [  1,217,  1, 81,  1,210,  0,210,  0,  0,209,  0,  1],
    [  1,  0,  0,203,  0,  0, 31,  0, 28,  1,  0, 88,  1],
    [  1, 81,  1,  1, 81,  1,  1,205,  1,  1, 82,  1,  1],
    [  1,209,  1,  0,217,  0,  1, 21,  0,203,  0,206,  1],
    [  1,  0,  1, 27,  0, 31,  1,  1,210,  1,  1, 21,  1],
    [  1, 28,  1,  1,  1,  1,  1, 31, 31, 31,  1, 21,  1],
    [  1, 34,  0,207, 21, 30,  1, 31, 31, 31,  1, 21,  1],
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