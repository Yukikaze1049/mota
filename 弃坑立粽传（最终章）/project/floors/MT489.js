main.floors.MT489=
{
    "floorId": "MT489",
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
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "blueGem",
            "value": 50000
        },
        {
            "type": "setGlobalValue",
            "name": "greenGem",
            "value": 250000
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
    [ 81,400,399, 81,400,90007, 87,90007,402,401, 82,402,402],
    [ 33,90007,90007,90007,399,90007,  0,90007, 82,90007,90007,90007, 82],
    [400,90007,402,90007, 81,90007, 22,90007,401,90007,401,90007,402],
    [ 81,90007, 81,400,399,90007,386,90007,402, 82,401,90007,402],
    [ 33,90007,90007,90007,90007,90007, 22,90007,90007,90007,90007,90007, 82],
    [400, 81,400, 81,400, 81,386, 82,400,402, 82,400,402],
    [90007,90007,90007,90007,90007,90007, 21,90007,90007,90007,90007,90007,90007],
    [ 21, 22, 50, 22, 21, 24,386, 24,401,666,667,666,401],
    [90007,90007,90007,90007,90007,90007, 21,90007,90007,90007,90007,90007,90007],
    [ 22, 22, 23, 22, 22, 24,386, 24, 21, 21,667, 21, 21],
    [90007,90007,90007,90007,90007,90007, 21,90007,90007,90007,90007,90007,90007],
    [380,380,380,380,380, 24,  0, 24,364,396,348,396,364],
    [90007,90007,90007,90007,90007,90007, 88,90007,90007,90007,90007,90007,90007]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "universe2.mp3"
}