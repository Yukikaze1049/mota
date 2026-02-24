main.floors.MT534=
{
    "floorId": "MT534",
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
    [1533,90007,339,1539,355,90007, 88,90007,355,1539,339,90007,1533],
    [90007,90007,90007, 82,90007,90007,1534,90007,90007, 82,90007,90007,90007],
    [354,370,338,1541, 21,90007,  0,90007, 21,1541,338,370,354],
    [90007,90007,90007, 81,90007,90007,336,90007,90007, 81,90007,90007,90007],
    [354,370,338,1537, 21,90007,1535,90007, 21,1537,338,370,354],
    [90007,90007,90007, 81,90007,90007,353,90007,90007, 81,90007,90007,90007],
    [354,1536,401,  0,1538,353,667,353,1538,  0,401,1536,354],
    [90007,90007,90007, 81,90007,90007,353,90007,90007, 81,90007,90007,90007],
    [354,370,338,1537, 21,90007,1535,90007, 21,1537,338,370,354],
    [90007,90007,90007, 81,90007,90007,336,90007,90007, 81,90007,90007,90007],
    [354,370,338,1541, 21,90007,  0,90007, 21,1541,338,370,354],
    [90007,90007,90007, 82,90007,90007,1534,90007,90007, 82,90007,90007,90007],
    [1533,90007,339,1539,355,90007, 87,90007,355,1539,339,90007,1533]
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