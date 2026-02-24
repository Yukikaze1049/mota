main.floors.MT452=
{
    "floorId": "MT452",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
    "firstArrive": [
        {
            "type": "setValue",
            "name": "status:name",
            "value": "'小粽'"
        },
        {
            "type": "setCurtain",
            "time": 500
        },
        {
            "type": "playBgm",
            "name": "universe.mp3",
            "keep": true
        },
        "\t[小粽,hero]\b[hero]这里就是世界线的夹域地带吗？",
        "\t[小粽,hero]\b[hero]嘶......果然与前辈说的一样，半神级别的生物到处都是，甚至我还隐隐约约的感受到了真正神灵的气息。",
        "\t[小粽,hero]\b[hero]不过，这并不能阻止我继续前行！"
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
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 2000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 10000
        }
    ],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,0": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        },
        "6,11": {
            "floorId": "MT452",
            "loc": [
                6,
                11
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
    [  0,90007,90007,90007,90007,90007, 87,90007,90007,90007,90007,90007,  0],
    [  0,90007, 21, 23,90007, 27,  0, 28,90007, 23, 21,90007,  0],
    [  0,90007,262, 21,90007,1425, 31,1425,90007, 21,262,90007,  0],
    [  0,90007, 81,90007,90007,90007, 82,90007,90007,90007, 81,90007,  0],
    [  0,90007, 33,90007,1426, 81, 29, 81,1426,90007, 33,90007,  0],
    [  0,90007,1427, 81, 21,90007, 22,90007, 21, 81,1427,90007,  0],
    [  0,90007,90007,90007,90007,90007, 29,90007,90007,90007,90007,90007,  0],
    [  0,90007, 32, 81, 32, 81, 21, 82, 33, 82, 33,90007,  0],
    [  0,90007,90007,90007,90007,90007, 50,90007,90007,90007,90007,90007,  0],
    [  0,90007, 21, 23, 21, 24, 29, 24, 33, 22, 33,90007,  0],
    [  0,90007,90007,90007,90007,90007, 21,90007,90007,90007,90007,90007,  0],
    [  0,90007,353,354,353, 24, 88, 24,337,338,337,90007,  0],
    [  0,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,  0]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "universe.mp3"
}