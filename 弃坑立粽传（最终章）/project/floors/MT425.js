main.floors.MT425=
{
    "floorId": "MT425",
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
        },
        "\t[小粽,hero]\b[hero]………………",
        "\t[星钰,N1196]\b[hero,1]哼！自以为是？我看说这句话的那个家伙才是的吧！",
        "\t[星钰,N1196]\b[hero,1]明明那个青年为他们付出那么多，他们却还反咬他一口，真是一头喂不饱的狼！",
        "\t[君无天,N1195]\b[hero,2]......继续前进吧。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT425\", ]);\n}"
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
            "时间回到之前的记忆片段的末尾......",
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
                "floorId": "MT426",
                "loc": [
                    1,
                    3
                ],
                "direction": "down",
                "time": 500
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 17, 17, 17, 17, 17, 17,1373, 17, 17, 17, 17, 17, 17],
    [ 17,240007,240007,240007,240007,240007,670,240007,240007,240007,240007,240007, 17],
    [ 17,240007,1372,334,  0,382,1356,1275,240007,1356,382,240007, 17],
    [ 17,240007,334,240007,1372,  0,367,240007,240007,1274,240007,240007, 17],
    [ 17,240007,1274,1356,  0,240007,1356,367,  0,1372,350,240007, 17],
    [ 17,240007,1274,240007,350,240007,350,240007,240007,382,240007,240007, 17],
    [ 17,240007,240007,334,1356,1274,1372,1274,1356,334,1372,240007, 17],
    [ 17,240007,382,1356,240007,240007,350,240007, 21,240007,1275,240007, 17],
    [ 17,240007,240007,366,1372,366,1356,366,1372,366,240007,240007, 17],
    [ 17,240007,1274,240007,334,240007, 21,240007,334,240007,1274,240007, 17],
    [ 17,240007, 81,1274, 81,1275,  0,1275, 81,1274, 81,240007, 17],
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