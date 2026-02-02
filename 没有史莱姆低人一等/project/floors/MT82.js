main.floors.MT82=
{
    "floorId": "MT82",
    "title": "主塔 82 层",
    "name": "82",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "jindi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "8,11": {
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
        "9,3": [
            {
                "type": "setValue",
                "name": "item:I1095",
                "operator": "+=",
                "value": "1"
            }
        ],
        "6,9": [
            {
                "type": "setValue",
                "name": "item:I1049",
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
    [ 20, 21,  0,453, 20,  0, 87,  0, 20,453, 81,790, 20],
    [ 20,  0,891,  0, 20, 21,  0, 21, 20,  0, 20,394, 20],
    [ 20, 20, 81, 20, 20, 20,251, 20, 20,904, 20,394, 20],
    [ 20,452,  0,  0,795,  0,452, 21,  0,  0, 20,394, 20],
    [ 20, 20,796, 20, 20, 20, 20, 20,789, 20, 20, 20, 20],
    [ 20,  0,  0,892, 21,435,392, 20,393,452,  0,788, 20],
    [ 20, 82, 20, 20, 20, 20, 20, 20, 20, 20, 20, 81, 20],
    [ 20,  0,795,  0,452, 21,  0,904,  0,  0,789,  0,452],
    [ 20,892, 20, 20, 20, 20,789, 20,795, 20, 20, 81, 20],
    [ 20,388, 20,393,393, 20,  0, 20,  0, 20,  0,742,  0],
    [ 20,454, 20,393,790, 81,452, 20, 88, 20,395,  0,396],
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
        8,
        11
    ]
}