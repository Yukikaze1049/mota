main.floors.MT67=
{
    "floorId": "MT67",
    "title": "登天之路（上三）",
    "name": "登天之路（上三）",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "sky2.png",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "item_ratio": 30,
    "defaultGround": "grass",
    "bgm": "battle4.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,3": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\\d前面一位少女，二十年华，碧绿的翠烟衫，散花水雾绿草百褶裙，肩若削成腰若约素，肌若凝脂气若幽兰。娇媚无骨入艳三分",
                "\\d三千紫丝仅用一支雕工细致的梅簪绾起，淡上铅华。黛眉开娇横远岫，绿鬓淳浓染春烟，有一股巫山云雾般的灵气，也含有一丝清冷。",
                "\\d淡绿色的身影如同雏燕般的轻盈，伴随着萧瑟的风声，玉手抻出剑鞘里的青剑，手腕轻轻旋转，青剑也如同闪电般快速闪动，剑光闪闪，却与少女那抹淡绿色柔弱的身影相融合",
                "\\d青色的剑光在空中画成一弧，女子的腰肢随机顺着剑光倒去，如天仙般的环绕在青色的剑光中，只在一瞬，瞅准早已固定在土壤中的剑鞘，作一飞仙之状",
                "\\d随即把手中的青剑甩出，正中剑鞘。",
                "\t[小粽,hero]\b[hero]（好！好高超的技法，不愧是剑之巅的传人）",
                "\t[小粽,hero]\b[hero]您好，您就是被人们尊称——剑神星尊 · 堇吗？",
                "\t[堇,E575]\b[this,6,3]汝就是人类的勇者？",
                "\t[堇,E575]\b[this,6,3]让我领略一下汝之剑道",
                "\t[小粽,hero]\b[hero]好！",
                {
                    "type": "animate",
                    "name": "attack5",
                    "loc": "hero",
                    "async": true
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 150
                },
                {
                    "type": "playSound",
                    "name": "Attack04.ogg"
                },
                {
                    "type": "sleep",
                    "time": 200
                },
                {
                    "type": "playSound",
                    "name": "skill16.ogg"
                },
                {
                    "type": "animate",
                    "name": "attack4",
                    "loc": [
                        6,
                        3
                    ]
                },
                {
                    "type": "sleep",
                    "time": 200
                },
                {
                    "type": "playSound",
                    "name": "Thunder03.ogg"
                },
                {
                    "type": "animate",
                    "name": "attack6",
                    "loc": [
                        6,
                        3
                    ]
                },
                {
                    "type": "sleep",
                    "time": 200
                },
                {
                    "type": "playSound",
                    "name": "skill01.ogg"
                },
                {
                    "type": "animate",
                    "name": "attack7",
                    "loc": "hero"
                },
                {
                    "type": "sleep",
                    "time": 50
                },
                {
                    "type": "battle",
                    "id": "E671"
                },
                {
                    "type": "moveHero",
                    "time": 500,
                    "steps": [
                        "backward",
                        "backward"
                    ]
                },
                "\t[小粽,hero]\b[hero]......",
                "\t[堇,E575]\b[this,6,3]......",
                "\t[堇,E575]\b[this,6,3]汝之道，不错，我期待与你的真正一战！",
                {
                    "type": "openDoor",
                    "loc": [
                        4,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        8,
                        3
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        3,
                        1
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        3,
                        2
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        1
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        9,
                        2
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        5,
                        0
                    ]
                },
                {
                    "type": "openDoor",
                    "loc": [
                        7,
                        0
                    ]
                },
                {
                    "type": "hide",
                    "time": 500
                },
                {
                    "type": "insert",
                    "loc": [
                        6,
                        1
                    ]
                }
            ]
        },
        "6,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                {
                    "type": "sleep",
                    "time": 500
                },
                "\t[小粽,hero]\b[hero]........刚才那个堇真的好强！仅仅只是一道投影就差一点将我重创！",
                "\t[小粽,hero]\b[hero]马上就要到下一个区域了，先向前去休息一下。",
                {
                    "type": "setCurtain",
                    "color": [
                        0,
                        0,
                        0,
                        1
                    ],
                    "time": 500
                },
                {
                    "type": "changeFloor",
                    "floorId": "MT68",
                    "loc": [
                        468,
                        666
                    ],
                    "time": 0
                },
                {
                    "type": "hide",
                    "loc": [
                        [
                            6,
                            1
                        ]
                    ],
                    "time": 500
                }
            ]
        },
        "7,0": [],
        "5,0": []
    },
    "changeFloor": {
        "4,12": {
            "floorId": "MT66",
            "loc": [
                4,
                0
            ],
            "time": 0
        },
        "6,0": {
            "floorId": "MT69",
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
    [  0,  0,  0,  0,  0,  0, 91,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,110040,377,361,  0,345,377,110042,  0,  0,  0],
    [  0,  0,  0, 85, 22,345,430,361, 22, 85,  0,  0,  0],
    [  0,  0,  0,110056, 85, 85,671, 85, 85,110058,  0,  0,  0],
    [  0,  0,  0,110064,110056,110051,301,110052,110058,110066,  0,  0,  0],
    [  0,  0,  0,110064,110064,110048, 22,110050,110066,110066,  0,  0,  0],
    [  0,  0,  0,110064,110040,110043,110052,110058,110066,110066,  0,  0,  0],
    [  0,  0,  0,110064,110048,110052,110058,110066,110066,110066,  0,  0,  0],
    [  0,  0,  0,110040,352,110050,110066,110066,110066,110066,  0,  0,  0],
    [  0,  0,  0,110048, 33,110050,110066,110066,110066,110066,  0,  0,  0],
    [  0,  0,  0,110048,352,110050,110066,110066,110066,110066,  0,  0,  0],
    [  0,  0,  0,110048, 33,110050,110066,110066,110066,110066,  0,  0,  0],
    [  0,  0,  0,110048, 93,110050,110066,110066,110066,110066,  0,  0,  0]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,110048,110000,110050,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110041,110043,110000,110044,110041,  0,  0,  0,  0],
    [  0,  0,  0,110048,110000,110000,110000,110000,110000,110050,  0,  0,  0],
    [  0,  0,  0,110056,110051,110000,110000,110000,110052,110058,  0,  0,  0],
    [  0,  0,  0,  0,110056,  0,  0,  0,110058,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,110000,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110064,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,110064,110043,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110000,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110000,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110000,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,110000,  0,  0,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,  0,  0,  0,  0,  0, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0,  0,  0,  0,  0, 17, 17, 17],
    [ 17, 17, 17, 17,  0,  0,  0,  0,  0, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17, 17,  0,  0, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17],
    [ 17, 17, 17,  0,  0,  0, 17, 17, 17, 17, 17, 17, 17]
],
    "bg2map": [

],
    "fg2map": [

]
}