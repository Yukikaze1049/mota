main.floors.MT9=
{
    "floorId": "MT9",
    "title": "主塔 9 层",
    "name": "9",
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
        "2,11": [
            {
                "type": "choices",
                "text": "\t[奇怪的人,man]给我500血，这只史莱姆就归你",
                "choices": [
                    {
                        "text": "给",
                        "action": [
                            {
                                "type": "setValue",
                                "name": "status:hp",
                                "operator": "-=",
                                "value": "500"
                            },
                            {
                                "type": "hide",
                                "remove": true
                            }
                        ]
                    },
                    {
                        "text": "不给",
                        "action": []
                    }
                ]
            }
        ],
        "4,7": [
            "\t[金若美,N555]\b[this,4,7]有一些怪物被打败之后，也许会臣服于你，成为你的灵兽。比如这一区就有一只。",
            {
                "type": "hide",
                "remove": true
            }
        ]
    },
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,1": [
            {
                "type": "setValue",
                "name": "item:I1113",
                "operator": "+=",
                "value": "1"
            },
            "\t[奕开,hero]\b[hero]哇，意外的收获"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1, 34,  1,  0,206,  0, 88,  0, 81,205, 29,  0,  1],
    [  1, 27,  1, 31,  1,  1,  1,  1,  1,  1,  1, 31,  1],
    [  1, 21,  1,  0,  1,368,  0,  1,  0,442,  1,  0,  1],
    [  1,210,  1,205,  1,  0,217,  1,602,  0,  1,203,  1],
    [  1,206, 82,  0,  1,  1, 81,  1, 81,  1,  1, 81,  1],
    [  1,210,  1,  0,202,  0, 31,209,  0,  0,203, 87,  1],
    [  1, 21, 29,  1,555,548,  0,  1, 21,  0,  1, 32,  1],
    [  1, 28,  1,  1,  1,  1, 81,  1,  1, 81,  1,  1,  1],
    [  1, 34,  1, 31,370,204,  0,  1,  0,206, 31, 31,  1],
    [  1,  1,  1,  1,  1,  1,210,  1, 81,  1,  1,  1,  1],
    [  1,201,121,373, 21,217,  0,  1,209, 22, 29, 31,  1],
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