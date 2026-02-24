main.floors.MT382=
{
    "floorId": "MT382",
    "title": "终焉之城·魔殿第四十层",
    "name": "终焉之城·魔殿第四十层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": true,
    "images": [
        {
            "name": "holy3.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle22.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
        },
        {
            "type": "setGlobalValue",
            "name": "redGem",
            "value": 10000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 10000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 50000
        }
    ],
    "parallelDo": "",
    "events": {
        "6,4": [
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero",
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    3
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    2
                ],
                "async": true
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": [
                    6,
                    1
                ]
            },
            "\t[小粽,hero]\b[hero]完全没有实体的灵魂体？你是谁，为什么要驻守在这里。",
            "\t[ ？？？,E1232]\b[this,6,7]这算是第一次正式见面吧，小粽。",
            {
                "type": "playSound",
                "name": "cgefc01.wav"
            },
            {
                "type": "animate",
                "name": "unexpected1",
                "loc": "hero",
                "async": true
            },
            "\t[小粽,hero]\b[hero]你之前见过我？",
            "\t[ ？？？,E1232]\b[this,6,7]嗯，从某种角度来说我是见过你的。",
            "\t[ ？？？,E1232]\b[this,6,7]你们不用紧张，我对你们并无恶意，我只是想看看你们现在是否拥有继续前进的资格而已。",
            "\t[ ？？？,E1232]\b[this,6,7]而且你们也不用猜测我的身份，这对现在的你们来说并无益处。",
            "\t[小粽,hero]\b[hero]............你想要怎么证明？",
            "\t[ ？？？,E1232]\b[this,6,7]打败我即可，放心，我是不会致死你们的。",
            "\t[小粽,hero]\b[this,6,7]............虽然不知道是怎么一回事....但是只要击败你就足够了吧！",
            "\t[ ？？？,E1232]\b[this,6,7]嗯，就是这样，非常简单。",
            "\t[小粽,hero]\b[hero]那就来吧！",
            {
                "type": "waitAsync"
            },
            {
                "type": "hide",
                "remove": true
            }
        ],
        "6,7": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "battle",
                    "id": "E1232"
                },
                "\t[？？？,E1232]\b[this,6,7]非常好！你们有继续前进的资格了。",
                "\t[？？？,E1232]\b[this,6,7]不过小粽，你要一定要记住你现在旅途本身的意义。",
                "\t[？？？,E1232]\b[this,6,7]而且旅途的终点并不意味着一切，在抵达终点之前，用你自己的双眼，好好记住这一切吧！",
                "\t[？？？,E1232]\b[this,6,7]还有——一定要守住本心，不要因为一时的血气冲动而做出错误的选择，从而导致你一辈子都后悔莫及的事情！",
                "\t[？？？,E1232]\b[this,6,7]我们还会再见的。",
                {
                    "type": "openDoor",
                    "loc": [
                        6,
                        11
                    ]
                },
                {
                    "type": "hide",
                    "remove": true,
                    "time": 500
                },
                {
                    "type": "insert",
                    "loc": [
                        0,
                        0
                    ]
                }
            ]
        },
        "0,0": [
            "\t[小粽,hero]\b[hero]......................",
            "\t[小粽,hero]\b[hero].............................",
            "\t[小粽,hero]\b[hero]....................................",
            "\t[小粽,hero]\b[hero]....................................我一定会记住你所说的一切的。",
            "\t[小粽,hero]\b[hero]继续前进吧。"
        ]
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0, 17,  0,  0,  0,240092, 88,240092,  0,  0,  0,  0,  0],
    [ 17,  0,  0,  0,  0,240092,  0,240092,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,240092,  0,240092,  0,  0,  0,  0,  0],
    [  0,240092,240092,240092,240092,240092,  0,240092,240092,240092,240092,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,1232,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0,  0,  0,  0,  0,  0,  0,240092,  0],
    [  0,240092,  0,  0,  0, 17, 85, 17,  0,  0,  0,240092,  0],
    [  0,240092,240092,240092,240092,240092, 87,240092,240092,240092,240092,240092,  0]
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
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0, 17,  0, 17,  0,  0,  0,  0,  0]
],
    "bg2map": [

],
    "fg2map": [

]
}