main.floors.MT535=
{
    "floorId": "MT535",
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
        "6,12": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
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
    [1533,90007,368,666, 21,90007, 87, 81,  0,1539,336,90007,1533],
    [90007,90007,1535,90007,90007,90007,1538,90007,352,90007,  0,90007,90007],
    [336,1534,  0,666,1536,  0,352,1534,  0,90007,336,667,336],
    [352,90007,90007,90007,90007,1537,90007,90007,90007,90007,90007,90007, 81],
    [336,90007,1534,  0,336,368,1539,  0,336,90007,352,368,352],
    [ 82,90007, 21,90007,90007,  0,90007,336,368,90007,  0,401,  0],
    [401,90007, 81,  0,401,352,90007, 81,90007,90007,90007,1534,90007],
    [1537,90007,90007,1535,90007,90007,1535,  0,336,336,1536,  0,401],
    [  0,1541,336,352,  0,1536,401,90007,90007, 81,90007,90007,90007],
    [ 81,90007,90007, 81,90007,90007,  0,1537,  0,336,368,  0, 81],
    [667,90007,1538,  0,1538,90007,1536,90007,90007,90007,1541,90007,667],
    [90007,90007,336,1539,352,90007,  0,90007,336,368,  0,90007,90007],
    [1533,90007,368,401,368,90007, 88,90007,368,336,  0,90007,1533]
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