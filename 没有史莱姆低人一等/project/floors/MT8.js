main.floors.MT8=
{
    "floorId": "MT8",
    "title": "主塔 8 层",
    "name": "8",
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
        "7,5": [
            {
                "type": "if",
                "condition": "(item:I1029>0)",
                "true": [
                    {
                        "type": "choices",
                        "text": "\t[同行,hero]你要用史莱姆王和黑史莱姆兑换吗？",
                        "choices": [
                            {
                                "text": "兑换",
                                "action": [
                                    {
                                        "type": "setValue",
                                        "name": "item:I1029",
                                        "operator": "-=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "setValue",
                                        "name": "item:I1028",
                                        "operator": "+=",
                                        "value": "1"
                                    },
                                    {
                                        "type": "hide",
                                        "remove": true
                                    }
                                ]
                            },
                            {
                                "text": "我就是来看看",
                                "action": []
                            }
                        ]
                    }
                ],
                "false": [
                    "\t[同行,N1020]\b[this,7,5]你好",
                    "\t[奕开,hero]\b[hero]什么事呀？",
                    "\t[同行,N1020]\b[this,7,5]我抓到了一只绿史莱姆，一只红史莱姆，两只只黑史莱姆。",
                    "\t[奕开,hero]\b[hero]哦哦",
                    "\t[同行,N1020]\b[this,7,5]要是有人有史莱姆王就好了，我可以用黑史莱姆跟他换，听说四种史莱姆凑齐了有额外效果",
                    "\t[奕开,hero]\b[hero]史莱姆王可比黑史莱姆厉害，用黑史莱姆换史莱姆王，你可真是会想呢"
                ]
            }
        ]
    },
    "changeFloor": {
        "6,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,217,  0,  1, 27, 87,547,  1,  0, 81, 31,  1],
    [  1, 81,  1,373,  1,  0, 31,  0, 81,205,  1,201,  1],
    [  1,205,  1,  0,202,  0,  0,  0,  1,  0,216,  0,  1],
    [  1, 31,  1,  1,  1,  1,203,  1,  1,  1,  1,203,  1],
    [  1,  0, 82,  0,  1, 21,  0,1020,  1,369,  1,  0,  1],
    [  1,210,  1,206,  1,  0, 88,  0,  1,217,  1, 31,  1],
    [  1, 81,  1,  0,  1, 22,  0, 21,  1,  0,602,  0,  1],
    [  1,548,  1, 21,  1,  1,  1,  1,  1, 31,  1,206,  1],
    [  1, 28,  1,  0, 27,  0,217,  0, 28,  0,  1, 81,  1],
    [  1, 29,  1,  1, 81,  1,  1,  1, 81,  1,  1, 30,  1],
    [  1, 32,  1, 21,209, 21,  1, 34,209, 34,  1, 31,  1],
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