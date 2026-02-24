main.floors.MT538=
{
    "floorId": "MT538",
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
        "6,6": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,11": {
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
    [1533,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,1533],
    [90007,90007,  0,666,  0,666,90007,666,  0,666,  0,90007,90007],
    [90007,  0,90007,  0,667,  0,90007,  0,667,  0,90007,  0,90007],
    [90007,350,  0,90007,  0,666,90007,666,  0,90007,367,  0,90007],
    [90007,  0,350,  0,90007,1541,90007,1541,90007,382,  0,382,90007],
    [90007,  0,  0, 21,1537,90007,90007,90007,1535,  0, 21,  0,90007],
    [90007,90007,90007,90007,90007,90007, 88,90007,90007,90007,90007,90007,90007],
    [90007,  0,  0, 21,1537,90007,90007,90007,1535,  0, 21,  0,90007],
    [90007,  0,350,  0,90007,1536,90007,1536,90007,382,  0,382,90007],
    [90007,350,  0,90007,  0,369,90007,369,  0,90007,367,  0,90007],
    [90007,  0,90007,  0,353,  0,90007,  0,353,  0,90007,  0,90007],
    [90007,90007, 21,337, 21,1534, 87,1534, 21,337, 21,90007,90007],
    [1533,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,90007,1533]
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