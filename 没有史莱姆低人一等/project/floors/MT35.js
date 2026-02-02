main.floors.MT35=
{
    "floorId": "MT35",
    "title": "主塔 35 层",
    "name": "35",
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
        "1,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,1": [
            {
                "type": "setValue",
                "name": "item:I1119",
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
    [ 20, 87,445,  0, 20,379,  0,381, 20,215,445,445, 20],
    [ 20,  0,  0,227, 20,  0,228,  0, 20, 81, 20, 20, 20],
    [ 20, 20, 20, 81, 20, 20, 81, 20, 20,  0, 20, 21, 20],
    [ 20,226,  0,  0,234,  0,445,  0,235,  0, 20,444, 20],
    [ 20, 82, 20, 20, 20, 20, 20, 20, 20,374, 20, 21, 20],
    [ 20,  0, 20, 21, 20, 21,376,553, 20,  0, 81,227, 20],
    [ 20,445, 20, 21, 20,  0,228,  0, 20,225, 20, 20, 20],
    [ 20,  0, 20, 21, 20, 20, 82, 20, 20,  0, 20,387, 20],
    [ 20,232, 20,  0,224,  0,  0,279,  0,445, 20,388, 20],
    [ 20, 81, 20, 20, 20, 20,233, 20, 20, 20, 20,389, 20],
    [ 20,  0,445,  0,235,  0, 88,  0,233,  0, 84,390, 20],
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