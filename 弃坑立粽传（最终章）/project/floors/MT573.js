main.floors.MT573=
{
    "floorId": "MT573",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe2.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "firstArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 100
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 200
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 500
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 1000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 1
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 1
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 5
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "function",
            "function": "function(){\ncore.removeMaps(\"MT0\", \"MT572\")\n}"
        },
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'小粽'"
        },
        {
            "type": "setValue",
            "name": "status:hp",
            "value": "100"
        },
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "1"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:money",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:yellowKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:blueKey",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "item:redKey",
            "value": "0"
        },
        {
            "type": "disableShop",
            "id": "521Fshop"
        },
        {
            "type": "showStatusBar"
        },
        {
            "type": "playBgm",
            "name": "disorder14.mp3",
            "keep": true
        },
        "恭喜你来到最坏的结局，不过这个结局由于内容太过庞大于是这次更新就没做，如果想玩其他结局就离开这里吧，这个结局都是刀。",
        "多拿五把绿钥匙即可换取混元烤貂法",
        {
            "type": "choices",
            "text": "是否换取？",
            "choices": [
                {
                    "text": "换！",
                    "action": [
                        {
                            "type": "addValue",
                            "name": "item:greenKey",
                            "value": "5"
                        },
                        {
                            "type": "setBlock",
                            "number": "I1592",
                            "loc": [
                                [
                                    6,
                                    11
                                ]
                            ]
                        }
                    ]
                },
                {
                    "text": "算了......",
                    "action": []
                }
            ]
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,12": [
            "从现在开始宝石的等级加成属性为指数增长。"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,12": {
            "floorId": "MT573",
            "loc": [
                6,
                12
            ],
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  1, 87,  1,  0,  0,  0,  0,  0],
    [  0,  1,  1,  1,  1,  1,  0,  1,  1,  1,  1,  1,  0],
    [  0,  1,1615,1603,  1,1616,1595,1617,  1, 32, 28,  1,  0],
    [  0,  1,  1,  0,  1,  1, 83,  1,  1, 27,1607,  1,  0],
    [  0,  1,366,1603,  0,1594, 31,1599,  0,  1, 81,  1,  0],
    [  0,  1,1138,1138, 81,1138,1593,  1, 32,1594, 23,  1,  0],
    [  0,  1, 21,  1,  0,1599,  0,  1,  1,  1,  1,  1,  0],
    [  0,  1, 22,1600, 50,  1,1553,  0,1596,1138,1614,  1,  0],
    [  0,  1,  1,  1,  1,  1, 22,  1,  0,1594,  0,  1,  0],
    [  0,  1,1553,  0,1553,  0,1553,  1,  1, 81,  1,  1,  0],
    [  0,  1, 29,  1,  1,  1, 32,1138, 31,1597, 31,  1,  0],
    [  0,  1,1593, 31,1599,  1,  0,  1, 31, 31, 31,  1,  0],
    [  0,  1,  1,  1, 27,129, 88,  1,  1,  1,  1,  1,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,300,  0,  0,  0,  0,  0,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0],
    [  0,300,300,300,300,300,300,300,300,300,300,300,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "ratio": 1
}