main.floors.MT427=
{
    "floorId": "MT427",
    "title": "未有之地",
    "name": "未有之地",
    "width": 13,
    "height": 13,
    "canFlyTo": false,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "firstArrive": [
        {
            "type": "showStatusBar"
        },
        {
            "type": "moveHero",
            "time": 0,
            "steps": [
                "up",
                "up"
            ]
        },
        {
            "type": "setCurtain",
            "time": 500
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT427\", ]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==1)",
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
        ]
    },
    "changeFloor": {},
    "afterBattle": {
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
            "时间回到十七年前",
            {
                "type": "hideStatusBar"
            },
            {
                "type": "setHeroIcon",
                "name": "hero2.png"
            },
            {
                "type": "unfollow",
                "name": "xy.png"
            },
            {
                "type": "unfollow",
                "name": "jwt.png"
            },
            {
                "type": "changeFloor",
                "floorId": "MT428",
                "loc": [
                    6,
                    12
                ],
                "direction": "up",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17,1374, 17, 17, 17, 17, 17, 17],
    [ 17,240007,240007,240007,240007,240007,670,240007,240007,240007,240007,240007, 17],
    [ 17,240007,669, 21,334,1373,1274,1373,350, 21,669,240007, 17],
    [ 17,240007,240007,240007,240007,240007,367,240007,240007,240007,240007,240007, 17],
    [ 17,240007,669, 21,334,1373,1274,1373,350, 21,669,240007, 17],
    [ 17,240007,240007,240007,240007,240007,367,240007,240007,240007,240007,240007, 17],
    [ 17,240007,669, 21,334,1373, 22,1373,350, 21,669,240007, 17],
    [ 17,240007,240007,240007,240007,240007,367,240007,240007,240007,240007,240007, 17],
    [ 17,240007,669, 21,334,1373, 22,1373,350, 21,669,240007, 17],
    [ 17,240007,240007,240007,240007,240007,367,240007,240007,240007,240007,240007, 17],
    [ 17,240007,669, 21,334,1373,  0,1373,350, 21,669,240007, 17],
    [ 17,240007,240007,240007,240007,240007,  0,240007,240007,240007,240007,240007, 17],
    [ 17, 17, 17, 17, 17, 17,  0, 17, 17, 17, 17, 17, 17]
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