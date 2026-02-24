main.floors.MT517=
{
    "floorId": "MT517",
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
    "ratio": 1,
    "defaultGround": "T1158",
    "bgm": "universe4.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 50000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 100000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 200000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 200000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 1000000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT493\", \"MT494\", \"MT495\", \"MT496\", \"MT497\", \"MT498\", \"MT499\", \"MT500\", \"MT501\", \"MT502\", \"MT503\", \"MT504\", \"MT505\", \"MT506\", \"MT507\", \"MT508\", \"MT509\", \"MT510\", \"MT511\", \"MT512\", \"MT513\", \"MT514\", \"MT515\", \"MT516\", \"MT517\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==100)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "hide",
                        "remove": true
                    }
                ]
            }
        ],
        "6,0": [
            {
                "type": "setCurtain",
                "color": [
                    0,
                    0,
                    0,
                    1
                ],
                "time": 500,
                "keep": true
            },
            "就在小粽准备进入第七重的时候，守望者那边也在寻找能够击败邪神·谶的办法。",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "setHeroIcon",
                "name": "hero4.png"
            },
            {
                "type": "setValue",
                "name": "status:name",
                "value": "'仙琳'"
            },
            {
                "type": "changeFloor",
                "floorId": "MT518",
                "loc": [
                    6,
                    145
                ],
                "direction": "down",
                "time": 0
            }
        ]
    },
    "changeFloor": {
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        }
    },
    "afterBattle": {
        "6,6": [
            {
                "type": "setValue",
                "name": "flag:door_MT517_6_2",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "6,2": {
            "0": {
                "condition": "flag:door_MT517_6_2==1",
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
    [1513,90007,  0,90007,90007, 85, 87, 85,90007,90007,  0,90007,1513],
    [90007,669,1273,669,90007, 85,670, 85,90007,669,1273,669,90007],
    [90007,90007,90007,90007,90007,348, 85,348,90007,90007,90007,90007,90007],
    [90007,90007,90007,380,396,705,667,705,396,380,90007,90007,90007],
    [364,396,348,364,348,667,705,667,348,364,348,396,364],
    [90007,90007,90007,380,396,348,667,348,396,380,90007,90007,90007],
    [90007,90007,90007,90007,90007,90007,1518,90007,90007,90007,90007,90007,90007],
    [90007,668,668,90007,90007,90007, 81,90007,90007,90007,668,668,90007],
    [90007,668,668,90007,  0, 21,  0, 21,  0,90007,668,668,90007],
    [90007,668,668,90007, 21,  0, 22,  0, 21,90007,668,668,90007],
    [90007,667,667, 83,  0, 21,  0, 21,  0, 83,667,667,90007],
    [90007,90007,90007,90007,  0,  0,  0,  0,  0,90007,90007,90007,90007],
    [1513,90007,  0,  0,  0,  0, 88,  0,  0,  0,  0,90007,1513]
],
    "bgmap": [

],
    "fgmap": [
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [ 17,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17],
    [  0, 17,  0,  0,  0,  0,  0,  0,  0,  0,  0, 17,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}