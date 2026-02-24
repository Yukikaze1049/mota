main.floors.MT545=
{
    "floorId": "MT545",
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
    "bgm": null,
    "firstArrive": [
        {
            "type": "playBgm",
            "name": "hope1.mp3",
            "keep": true
        },
        "\t[小粽,hero]\b[hero]是你？邪神·谶！",
        "\t[邪神·谶,E1544]\b[this,6,1]..................",
        {
            "type": "callBook"
        },
        "\t[小粽,hero]\b[hero]（.....看来我已经赢了，不愧是守望者前辈，没想到居然真的能够对付邪神·谶！）",
        "\t[小粽,hero]\b[hero]邪神·谶！准备好遗言了吗？！",
        "\t[邪神·谶,E1544]\b[this,6,1]..................",
        "\t[小粽,hero]\b[hero]你应该知道现在我已经足以碾压你了！！",
        "\t[邪神·谶,E1544]\b[this,6,1].........................嗯。",
        {
            "type": "playSound",
            "name": "jump.mp3"
        },
        {
            "type": "animate",
            "name": "unknown",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]嗯是什么意思？？",
        {
            "type": "animate",
            "name": "emmslow",
            "loc": [
                6,
                1
            ]
        },
        "\t[邪神·谶,E1544]\b[this,6,1].........................的确，现在你已经足以碾压我了，这次是你赢了，年轻人。",
        "\t[小粽,hero]\b[hero]是吗！那你就去死吧！",
        {
            "type": "jumpHero",
            "loc": [
                6,
                3
            ],
            "time": 500
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "playSound",
            "name": "stop1.wav"
        },
        {
            "type": "showImage",
            "code": 1,
            "image": "stop9.jpg",
            "loc": [
                0,
                0
            ],
            "opacity": 1,
            "time": 0
        },
        "\t[邪神·谶]之前是你赢了....只可惜现在是我赢了！",
        {
            "type": "playSound",
            "name": "stop1.wav"
        },
        {
            "type": "hideImage",
            "code": 1,
            "time": 0
        },
        {
            "type": "playSound",
            "name": "050-Explosion03.ogg"
        },
        {
            "type": "animate",
            "name": "attack11",
            "loc": "hero"
        },
        {
            "type": "playBgm",
            "name": "disorder10.mp3",
            "keep": true
        },
        {
            "type": "moveHero",
            "time": 1,
            "steps": [
                "backward",
                "backward",
                "backward",
                "backward",
                "backward",
                "backward",
                "backward",
                "backward",
                "backward"
            ]
        },
        {
            "type": "vibrate",
            "time": 500
        },
        {
            "type": "screenFlash",
            "color": [
                255,
                0,
                0,
                1
            ],
            "time": 500,
            "times": 1
        },
        "\t[小粽,hero]\b[hero]\r[red]呃！！",
        "\t[小粽,hero]\b[hero]\r[red]怎么可能！",
        "\t[小粽,hero]\b[hero]\r[red]为什么！我的力量明明足以碾压你了才对！为什么会这样！",
        "\t[邪神·谶,E1544]\b[this,6,1]是吗？",
        {
            "type": "setValue",
            "name": "status:atk",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:def",
            "value": "0"
        },
        {
            "type": "setValue",
            "name": "status:mdef",
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
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]我的能力！怎么会！！",
        "\t[邪神·谶,E1544]\b[this,6,1]你想知道为什么吗？",
        "\t[邪神·谶,E1544]\b[this,6,1]那是因为从一开始拿起功法的时候就已经被我的力量同化了！",
        {
            "type": "playSound",
            "name": "cgefc01.wav"
        },
        {
            "type": "animate",
            "name": "unexpected1",
            "loc": "hero"
        },
        "\t[小粽,hero]\b[hero]什么？！！",
        "\t[邪神·谶,E1544]\b[this,6,1]因为在第十重门口与你见面的守望者就是我假冒的！",
        "\t[邪神·谶,E1544]\b[this,6,1]而你之所以看到你的力量突飞猛进是因为这些都是你臆想出来的而已！",
        "\t[小粽,hero]\b[hero]这.......这！",
        "\t[邪神·谶,E1544]\b[this,6,1]你的使命，结束了！",
        {
            "type": "hideStatusBar"
        },
        {
            "type": "setVolume",
            "value": 0,
            "time": 500
        },
        {
            "type": "pauseBgm"
        },
        {
            "type": "setVolume",
            "value": 90,
            "time": 0
        },
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
            "type": "playSound",
            "name": "049-Explosion02.ogg"
        },
        {
            "type": "insert",
            "loc": [
                6,
                0
            ],
            "floorId": "MT567"
        }
    ],
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
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 1145140
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 19198100
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,1544,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4],
    [  4,  4,  4,  4,  4,  4,  0,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0],
    [  0,  0,  0,  0,  0,  0,1158,  0,  0,  0,  0,  0,  0]
],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

]
}