main.floors.MT33=
{
    "floorId": "MT33",
    "title": "主塔 33 层",
    "name": "33",
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
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "11,10": [
            {
                "type": "setValue",
                "name": "item:I1108",
                "operator": "+=",
                "value": "1"
            }
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,371,373,225, 81,  0, 87,  0,215, 21,379, 21, 20],
    [ 20,372,374,  0, 20,445,  0,  0,  0, 20, 20, 20, 20],
    [ 20, 20, 20, 20, 20, 20, 82, 20, 20, 20,552,  0, 20],
    [ 20,450,381,  0, 20, 21,  0,233,  0, 20,  0,226, 20],
    [ 20,450,381,228, 81,  0, 21, 20,445, 20, 20, 81, 20],
    [ 20,450,381,  0, 20, 21,  0, 20,  0,227,  0,373, 20],
    [ 20, 20, 20, 20, 20,224, 20, 20, 20, 20, 20,372, 20],
    [ 20, 21, 21, 21, 82,  0,445, 20,  0,279,  0,373, 20],
    [ 20, 20, 20, 20, 20,228, 20, 20,445, 20, 20, 81, 20],
    [ 20,  0,377,  0, 20,  0,  0, 20,  0, 20,  0,232, 20],
    [ 20,375,  0,279, 81,  0, 88, 81,233, 20,444,  0, 20],
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
        11
    ]
}