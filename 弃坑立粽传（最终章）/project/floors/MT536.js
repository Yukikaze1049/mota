main.floors.MT536=
{
    "floorId": "MT536",
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
        "6,0": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "12,7": {
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
    [1533,90007,370,90007,666, 81, 88,90007,355,371,355,90007,1533],
    [90007,354,  0,90007,354,90007,  0,90007,371,355,371,90007,90007],
    [90007,  0,90007,90007,1537,90007,  0,90007,371,355,371,90007, 21],
    [90007,1539,  0,  0,336,1541,  0,90007,355,371,355,90007,1541],
    [90007,335,90007,90007,90007,367,1541,90007,90007,1534,90007,90007,337],
    [90007,90007,90007,90007,90007,  0,367,1538,666,  0,90007,1534,337],
    [351,90007,351,  0,90007,90007,1537,90007,90007,1541,90007,1534,90007],
    [351,1534,  0,351,90007,335,  0,90007,  0,666,1541,  0, 87],
    [335,90007,1538,90007,90007,351,336,90007,1539,90007,90007,335,90007],
    [90007,  0,351,90007,90007,90007,1538,90007,335,1535,350,  0,90007],
    [335,1539,90007,354,  0,669,  0,90007,90007,350,90007,1536,90007],
    [90007,  0,354,  0,90007,1534,90007,90007,90007,1541,90007,351,90007],
    [1533,90007,90007,90007,351,335,351, 81,335,351,351,90007,1533]
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