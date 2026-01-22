main.floors.MT73=
{
    "floorId": "MT73",
    "title": "塔B 2 层",
    "name": "塔B 2 层",
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
        "11,4": [
            "伊杰明的技能机制说明：\n消耗10魔力可以释放三个技能其中任意一个。\n它们有不同的效果并能赋予不同的永久属性提升，具体说明请在背包里查看。\n在背包里使用或者按下快捷键1/2/3就能释放它们。\n如果你是手机端，可以点击右下角的（'观剧'，'正常'）切换为有快捷键123的界面\n需要查看怪物手册时再点击相同位置即可切换回来。"
        ]
    },
    "changeFloor": {
        "11,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "1,11": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "1,5": [
            {
                "type": "setValue",
                "name": "flag:b2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "flags.b2==2",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ]
            }
        ],
        "3,5": [
            {
                "type": "setValue",
                "name": "flag:b2",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "if",
                "condition": "(flags.b2==2)",
                "true": [
                    {
                        "type": "openDoor",
                        "loc": [
                            2,
                            4
                        ]
                    }
                ]
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {
        "6,11": [
            {
                "type": "setValue",
                "name": "flag:hong4",
                "value": "1"
            }
        ],
        "2,2": [
            {
                "type": "setValue",
                "name": "flag:huang3",
                "value": "1"
            }
        ]
    },
    "autoEvent": {
        "11,11": {
            "0": {
                "condition": "flags.lan3",
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
        "1,9": {
            "0": {
                "condition": "flags.lan4",
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
    [10026,500,  0,501,  1,  0,  0, 81,  0,  1, 21, 22,10024],
    [10026,  0,510,  0,  1, 21, 21,  1,  0,  1, 21, 21,10024],
    [10026, 21,  0, 21,  1, 32, 32,  1,522,  1, 21, 21,10024],
    [10026,  1, 85,  1,  1,356,356,  1,  0,  1,  0,  1,10024],
    [10026,225,  0,225,  1,  1,  1,  1,224,  1,  0,  0,10024],
    [10026,  0,  0,  0, 81,  0,  0,  0,  0, 81,  0, 88,10024],
    [10026,  1,  1,  1,  1,224,224,  1,225,  1,  0,  0,10024],
    [10026,  0,  0,225,  0,  0,  0,  1,  0,  1,  1,  1,10024],
    [10026,512,  1,  1, 81,  1,226,  1,  0,224,  0,  0,10024],
    [10026,  0,  0,  1,  0,  1,  0,  1,  1,  1,  1, 81,10024],
    [10026, 87,  0,222,  0,  1,507,  1, 32,499, 21,512,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
],
    "bgmap": [

],
    "fgmap": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,129,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}