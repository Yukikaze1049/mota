main.floors.MT537=
{
    "floorId": "MT537",
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
        "12,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,6": {
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
    [1533,90007,367,90007,335,90007,90007,90007,  0,1536,383,90007,1533],
    [90007,90007,1536,  0,1538,383,  0,1538,383,90007,90007,90007,90007],
    [351,90007,  0,90007,  0,90007,1539,90007,1535,  0,1538,  0,335],
    [  0, 81,669,  0,90007,90007, 81,669,90007,90007,  0, 81,90007],
    [367,1538,90007,335,  0,  0,1541,383,  0,383, 81,1539,  0],
    [ 81,90007,90007,1538,90007, 81, 82,90007,90007,90007,351,90007,  0],
    [1535,351,90007,90007,367,1534, 87,667,90007,  0,1534,90007,1537],
    [351,669,90007,351,  0,90007,335,367,90007,335,90007,  0, 88],
    [90007,90007,335,1538,90007,667,1541,90007,90007,1538,  0,669,  0],
    [  0,669, 81,90007,  0,1537,  0,  0,90007,  0,90007,90007,1537],
    [335,1538,335,  0,367,90007,335,  0,1539,667,335,90007,351],
    [90007,90007,90007,90007,  0, 81, 81,1534,90007,90007,1538,667,90007],
    [1533,90007,  0,669,90007,90007,335,  0,90007,335,  0,90007,1533]
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