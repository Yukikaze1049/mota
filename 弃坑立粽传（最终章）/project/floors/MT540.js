main.floors.MT540=
{
    "floorId": "MT540",
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
    "bgm": "universe6.mp3",
    "firstArrive": [],
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
    "changeFloor": {
        "4,3": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "6,12": {
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
    [1533,90007,  0, 81,367,669,367,90007,666,90007,666,90007,1533],
    [90007,90007,1535,90007,90007,1537,90007,90007, 81,  0, 81,367,90007],
    [335,  0,351,90007,90007,  0,382,  0,90007,383,90007,1535,90007],
    [90007,1536,90007,  0, 88,350,90007,90007,  0,1534,  0,351,90007],
    [  0,383,90007,1536,90007,1541,  0, 21,1541,  0,335, 81,1534],
    [90007,90007,335,  0, 81,351,90007,1539,90007,367,  0,90007,353],
    [90007,335,1534,  0,1541, 21, 81,350,90007,90007, 81,90007,90007],
    [367,  0,90007,383,90007,1538,382,  0,90007,  0,1535, 21,351],
    [90007,1535,383,90007,90007,  0,90007,90007,90007,669,90007,90007,90007],
    [90007, 81,90007,90007,1539,382,  0,1538,351,1538,90007,335,666],
    [352,  0,336,90007, 21,90007, 81,90007,  0,367, 81,1535,351],
    [90007,90007,1536,90007,352,90007,1541,385,90007, 81,90007,90007,90007],
    [1533,90007,  0,336,90007,90007, 87,90007,335,1537,351,90007,1533]
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