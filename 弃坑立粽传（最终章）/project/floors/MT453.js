main.floors.MT453=
{
    "floorId": "MT453",
    "title": "世界线的终焉",
    "name": "世界线的终焉",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
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
    [90007,90007,90007,90007, 28,90007, 88,90007,90007,335,367,351,90007],
    [ 34,1439, 81,  0,1426, 31, 81, 29,1426,90007,1425,90007,334],
    [90007,90007, 21,1436, 29,90007,1441,90007, 27, 32, 29,1431,366],
    [382,1441, 27,90007,90007,90007, 23,90007,1428,90007,1425,90007,350],
    [90007,90007,1433,90007,352, 81, 82,90007, 29,1425,367,1425,90007],
    [335,90007,  0, 28,1430,90007,385,90007,90007,351, 82,351,90007],
    [1439, 81,  0, 81, 31,90007,1438, 33,90007,1442,335,1442,90007],
    [351,90007,90007,90007,1428,90007, 81,90007, 22,90007,90007, 81,90007],
    [90007, 27,  0,1433, 21,1436,350,90007,90007,372,262, 21,1434],
    [ 21,90007, 29,90007, 27, 81, 22,90007,90007,90007,388,90007, 23],
    [ 21,90007,1435,90007,90007,90007,366,90007,352, 34,90007,90007, 82],
    [ 21,90007, 22,90007,1426, 81,1440, 81,1429,336, 81,1432,387],
    [1438, 82,370,90007, 34,90007, 87,90007,352, 34,90007,399,90007]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "universe.mp3"
}