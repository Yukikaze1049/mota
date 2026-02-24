main.floors.MT11=
{
    "floorId": "MT11",
    "title": "主塔 7 层",
    "name": "7",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "item_ratio": 1,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,0": [
            "这个机关门打败左边两个骷髅战士就可以开启。"
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "11,7": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "1,1": [
            {
                "type": "addValue",
                "name": "flag:door_MT11_10_2",
                "value": "1"
            }
        ],
        "1,2": [
            {
                "type": "addValue",
                "name": "flag:door_MT11_10_2",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,2": {
            "0": {
                "condition": "flag:door_MT11_10_2==2",
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
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,129,  1,  1,  1,  1,  1],
    [  1,225,  1, 32, 34, 81, 88,  0,  4,411, 36,387,  1],
    [  1,225,  1,  1,  1,  1,  1,410,  1,  1, 85,  1,  1],
    [  1, 82,  1, 27,  1,410,216,  0,  1,222,  0,222,  1],
    [  1,  0,  0,219,  0,  1,  0,  0,  0, 81,  0,  1,  1],
    [  1, 32,  1, 31,  0, 81,366,  1,  0,  1,215,410,  1],
    [  1,  1,  1,  1,  0,  1,  0,444,  0, 82,  0,  1,  1],
    [  1,  0, 21,  0, 29,211, 21,  1,366,226, 32, 87,  1],
    [  1, 32,  1,  1,219,  1,  0,  0, 34,  1, 81,  1,  1],
    [  1,  0,  0, 21,  0, 30,  1, 81,  1,  0, 22,  0,  1],
    [  1, 81,  1,  1,  1, 81, 34,255,  0, 21,  1,225,  1],
    [  1,224,334,  1,350,224,  1,382,  1,366, 81,385,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
],
    "bgmap": [

],
    "fgmap": [

],
    "bgm": "firststep.mp3",
    "bg2map": [

],
    "fg2map": [

]
}