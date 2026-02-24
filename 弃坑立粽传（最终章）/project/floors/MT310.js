main.floors.MT310=
{
    "floorId": "MT310",
    "title": "未知空间(回忆）",
    "name": "未知空间(回忆）",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": true,
    "cannotMoveDirectly": false,
    "images": [
        {
            "name": "universe1.jpg",
            "canvas": "bg",
            "x": 0,
            "y": 0
        }
    ],
    "defaultGround": "ground",
    "firstArrive": [
        "\t[？？？,N679]真的要这么做吗？",
        {
            "type": "turnBlock",
            "direction": "down",
            "loc": [
                [
                    6,
                    2
                ]
            ]
        },
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": [
                6,
                10
            ]
        },
        {
            "type": "sleep",
            "time": 200
        },
        "\t[仙琳,fairy]\b[this,6,10]小粽？！！！",
        "\t[？？？,N676]\b[this,6,2]我并不是你认识的那个人，你可以称我为——\\d守望者！",
        "\t[仙琳,fairy]\b[this,6,10]守望者？",
        "\t[？？？,N676]\b[this,6,2]不过与其在意我的身份，你现在倒不如关心一下你刚才的决定吧！",
        "\t[仙琳,fairy]\b[this,6,10].................",
        "\t[？？？,N676]\b[this,6,2]我问你一个问题:你真的打算这么做吗？\n你可要想清楚这样做的代价！\n而且对于你做出的决定...........你无悔吗？！",
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
        {
            "type": "sleep",
            "time": 500
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        "\t[？？？,N676]\b[this,6,2]为了保护自己最珍视的事物吗..............",
        "\t[？？？,N676]\b[this,6,2]原来如此，看来情感果然是个有趣的事物！\n它可以让人们将心链接在一起，\n从而迸发出令人叹为观止的火花！",
        "\t[？？？,N676]\b[this,6,2]你的故事，我已经了解了，\n既然你一心要这么做的话，\n我也不会阻拦你",
        "\t[？？？,N676]\b[this,6,2]我即将把你带离这个空间，\n\\d就让我看看你体内蕴含的情感究竟有多强烈！！！",
        {
            "type": "changeFloor",
            "floorId": ":before",
            "loc": [
                111,
                11
            ],
            "time": 500
        },
        {
            "type": "insert",
            "loc": [
                6,
                2
            ],
            "floorId": "MT309"
        }
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,679,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,124,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0]
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