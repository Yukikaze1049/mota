main.floors.MT532=
{
    "floorId": "MT532",
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
        "11,11": {
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
    [1533,90007,1538,  0,368,1537, 88,368,  0,1538,384,90007,1533],
    [90007,  0,352,90007,1536,401, 81,1535,  0,368,90007,401,90007],
    [352,90007,1534, 81,384,  0, 82,368,90007,352,90007,1536,384],
    [1538,90007,401,90007,  0,352,90007,352,90007,90007,90007,90007,  0],
    [368,352,368, 81,1534,90007, 81, 81,1534,401,90007,401,352],
    [ 82,1534,90007, 81,  0,352,90007, 82,90007,352,90007,90007,1536],
    [401,  0,352,90007,1535,  0, 81,384,90007,  0,1536,  0,401],
    [  0,384,1534, 82,384,401,1535,401,352,1537,90007,352,1541],
    [352,90007,90007, 82,90007,  0,90007,  0,90007,368,90007,368,352],
    [1537,90007,401,336,1534,384,90007,1538,90007,90007, 81,90007,1538],
    [  0,336, 81,90007,90007,368, 81,401,  0,336, 81,1539,352],
    [90007,401,336,  0, 81,1537, 81,  0,1537,384, 83, 87,90007],
    [1533,90007,1537,90007,90007,368,90007,336,  0,401,90007,90007,1533]
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