main.floors.MT485=
{
    "floorId": "MT485",
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
        "5,7": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "12,0": {
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
    [384,384,402,1480,  0,1480,  0,1480,402,384,384,90007, 87],
    [90007,90007,90007,90007,1485,430,1485,90007,90007,90007,90007,90007,402],
    [90007,90007,  0,348,90007,372,90007,348,  0,90007,90007,90007,1480],
    [90007,90007,348,  0,90007,430,90007,  0,348,90007,90007,90007,369],
    [90007,90007,  0,348, 83,372, 83,348,  0,90007,90007,90007,385],
    [90007,90007,348,  0,90007,430,90007,  0,348,90007,90007,90007,1480],
    [90007,90007,  0,364,90007,372,90007,364,  0,90007,90007,90007,369],
    [90007,90007,364,  0,90007, 88,90007,  0,364,90007,90007,90007,385],
    [90007,90007,  0,364,90007,1479,90007,364,  0,90007,90007,90007,1480],
    [90007,90007,364,  0,90007,386,90007,  0,364,90007,90007,90007,400],
    [90007,90007,  0,380,90007,370,90007,380,  0,90007,90007,90007,385],
    [90007,90007,380,  0,90007,370,90007,  0,380,90007,90007,90007,1480],
    [90007,90007,  0,380,90007,370,90007,380,  0,90007,90007,90007,  0]
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