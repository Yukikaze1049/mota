main.floors.MT194=
{
    "floorId": "MT194",
    "title": "阴之坛十层",
    "name": "阴之坛十层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1000000,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "6,0": [],
        "6,1": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "data": [
                "\t[圣护之卫,E855]\b[this,6,1]嗯？什么人！难道不知道前面就是圣羽洛斯大人的分部实验室吗？！",
                "\t[堇,hero]\b[hero]死！！",
                {
                    "type": "battle",
                    "id": "E855"
                },
                "\t[堇,hero]\b[hero]这家伙体内居然有魔塔高层所布置的禁制！！",
                "\t[圣护之卫,E855]\b[this,6,1]你死定了....呃啊啊啊啊！！！",
                "\t[堇,hero]\b[hero]该死！这家伙居然可以把我的位置传达到阴阳圣坛的核心处了。",
                "\t[圣护之卫,E855]\b[this,6,1]呃啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊！！！！",
                {
                    "type": "setBlock",
                    "number": "ground"
                },
                "\t[堇,hero]\b[hero]这家伙已经死了...",
                "\t[堇,hero]\b[hero]接下来应该会有大量高手前来围剿我。",
                "\t[堇,hero]\b[hero]我得尽量拖延他们，为仙琳妹妹她们争取时间！",
                "\t[堇,hero]\b[hero]不过......我体内的黑暗之力又要有涌动的倾向.....",
                "\t[堇,hero]\b[hero]没错了，圣羽洛斯的分部实验室就是我要找的地方！",
                "\t[堇,hero]\b[hero]继续前进吧。",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "loc": [
                1,
                6
            ],
            "direction": "right"
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [ 33, 33, 81,402, 33,  4, 91,  4,401,666, 82,402,402],
    [  4,400,  4,  4,  4,  4,855,  4,  4,  4,  4,402,  4],
    [  4, 81,  4,  4,  4,  4,  0,  4,  4,  4,  4, 82,  4],
    [  4, 33,  4,  4,  4,  4,  0,  4,  4,  4,  4,402,  4],
    [  4, 34,  4,  4,  4,  4,  0,  4,  4,  4,  4,400,  4],
    [  4,400,  4,  4,  4,  4,  0,  4,  4,  4,  4,400,  4],
    [  4, 81,  4,  4,  4,  4,  0,  4,  4,  4,  4,400,  4],
    [  4, 33,  4,  4,  4,  4,  0,  4,  4,  4,  4, 82,  4],
    [  4,400,  4,  4,  4,  4,  0,  4,  4,  4,  4,400,  4],
    [  4, 81,  4,  4,  4,  4,  0,  4,  4,  4,  4,402,  4],
    [  4, 34,400, 81,400, 81,  0, 82,400,402, 82,400,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "battle12.mp3"
}