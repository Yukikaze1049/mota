main.floors.MT39=
{
    "floorId": "MT39",
    "title": "主塔 39 层",
    "name": "39",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "heiansenlin.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,11": {
            "floorId": ":next",
            "stair": "downFloor"
        },
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        }
    },
    "beforeBattle": {
        "6,10": [
            "\t[奕开,hero]\b[hero]也不知道立天和樱姝到哪里去了，你给我让开!"
        ]
    },
    "afterBattle": {
        "6,10": [
            {
                "type": "setValue",
                "name": "item:I1105",
                "operator": "+=",
                "value": "1"
            },
            {
                "type": "playSound",
                "name": "炸弹"
            },
            {
                "type": "vibrate",
                "direction": "diagonal1",
                "time": 2000,
                "speed": 10,
                "power": 10
            },
            "\t[奕开,hero]\b[hero]糟了，这么大的振动，不会是立天和樱姝吧，我得去救他们。"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20, 21, 22, 21, 83,  0, 88,  0, 83, 21, 22, 21, 20],
    [ 20,445,444,445, 20,  0,235,  0, 20,375,378,376, 20],
    [ 20, 20, 20, 20, 20, 20, 81, 20, 20, 20, 20, 20, 20],
    [ 20,367,369,  0, 81,227,  0,226, 81,  0,369,368, 20],
    [ 20, 20,279, 20, 20, 20, 20, 20, 20, 20,225, 20, 20],
    [ 20, 20,  0, 82,544,374, 20, 21,445, 20,  0, 20, 20],
    [ 20, 20,445, 20,377, 21, 20,445,544, 82,445, 20, 20],
    [ 20, 20, 81, 20, 20, 20, 20, 20, 20, 20, 81, 20, 20],
    [ 20, 20,232,  0, 81,228,  0,234, 81,  0,224, 20, 20],
    [ 20, 20, 21, 20, 20, 20,247, 20, 20, 20,377, 20, 20],
    [ 20, 20, 21, 20,497,549, 87,386,490, 20,377, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        6,
        1
    ]
}