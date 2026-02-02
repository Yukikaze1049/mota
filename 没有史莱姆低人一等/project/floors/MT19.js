main.floors.MT19=
{
    "floorId": "MT19",
    "title": "主塔 19 层",
    "name": "19",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "sanbu.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "12,0": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "6,1": [
            {
                "type": "setValue",
                "name": "item:I1118",
                "operator": "+=",
                "value": "1"
            },
            "\t[奕开,hero]\b[hero]还不错"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 87],
    [ 20,219,367,368, 20,  0,214,373,373,373,443, 20,  0],
    [ 20, 81, 20, 20, 20, 20, 82, 20, 20, 20, 20, 20, 81],
    [ 20, 33,  0,252,  0, 21,  0, 27,  0, 20,443, 20,255],
    [ 20, 20, 20, 20, 20,255, 20, 20,220, 20,443, 20,  0],
    [ 20,368,  0, 20, 33,  0, 29, 20,  0, 20, 82, 20,442],
    [ 20,  0,222, 81,  0, 20,214, 81,  0,212,  0,253,  0],
    [ 20,442,  0, 20, 21,  0, 20, 20, 82, 20, 20, 81, 20],
    [ 20, 20, 20, 20, 20,253, 20, 20, 21,442, 20, 81, 20],
    [ 20,373,253,545, 20,  0, 20, 20, 29,370, 20,369, 20],
    [ 20, 20, 81, 20, 20, 29, 20, 20,219, 20, 20, 33, 20],
    [ 20, 88,  0,255,442,  0, 81, 81,  0,213,  0, 21, 20],
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
        1,
        11
    ]
}