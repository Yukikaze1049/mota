main.floors.MT335=
{
    "floorId": "MT335",
    "title": "终焉之城·魔殿第四层",
    "name": "终焉之城·魔殿第四层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 500000000,
    "defaultGround": "T1158",
    "bgm": "battle23.mp3",
    "firstArrive": [],
    "eachArrive": [
        {
            "type": "setGlobalValue",
            "name": "redPotion",
            "value": 2000000
        },
        {
            "type": "setGlobalValue",
            "name": "bluePotion",
            "value": 4000000
        },
        {
            "type": "setGlobalValue",
            "name": "yellowPotion",
            "value": 10000000
        },
        {
            "type": "setGlobalValue",
            "name": "greenPotion",
            "value": 20000000
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
        "1,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,8": {
            "floorId": ":next",
            "stair": "downFloor",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092,240092],
    [240092, 31, 23, 82,410,240030,  0,240030, 34, 81,240092,353,240092],
    [240092,240092,240092,240092,1156,240030,228,240030,240092, 81,240092,385,240092],
    [240092,  0,1155,  0,334,240030, 31,240030,  0, 29,1157,337,240092],
    [240092,350, 81,240030, 82,240030,1151,240030, 28,1155,240092,240030,240092],
    [240092,1155, 32,240030, 21,240030, 32,240030,240030, 81,240092, 31,240092],
    [240092,  0, 81,240030, 82,240029,383,240029, 21,1152, 32,410,240092],
    [240092,1152,  0,1150, 27,240037,249,240037,240092, 81, 82,240030,240092],
    [240092, 21,240030, 28,240030,240045, 87,240045, 32,1150, 21,367,240092],
    [240092,240030,1154, 81,240030,240053, 24,240053,240092, 81,240092,240092,240092],
    [240092, 23,  0, 27,  0, 28,  0, 29,  0, 31,1155, 22,240092],
    [240092, 88,1154,240092, 81,240092, 83,240092, 81,240092,240092, 82,240092],
    [240092,240092,240092,240092, 32,240092, 47,240092, 32,240092,240092, 33,240092]
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