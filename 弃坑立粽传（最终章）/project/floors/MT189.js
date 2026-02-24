main.floors.MT189=
{
    "floorId": "MT189",
    "title": "阴之坛五层",
    "name": "阴之坛五层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1000000,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "5,11": [
            {
                "type": "openShop",
                "id": "190Fshop",
                "open": true
            }
        ]
    },
    "changeFloor": {
        "9,1": {
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
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4],
    [  4,411,  4, 32,366, 32,  4, 32,  4, 88,  4, 29,  4],
    [  4, 81,  4,334,835,350,  4,833,352,  0,834, 27,  4],
    [  4, 33,385,  4, 81,  4,  4, 21,  4,833,  4, 28,  4],
    [  4,  4,848, 34,834,  4, 34,836,  4, 27,  0,  4,  4],
    [  4, 33,  4, 81, 32,  0,  4,  4,843,  0, 28,  0,  4],
    [  4, 34, 81,  4,  4,836, 32,843, 30,  4,  4, 81,  4],
    [  4,  4,  0,833, 27,  0,  4,  0,  4,  0,846, 33,  4],
    [  4, 31,  0, 28,  4, 28,  4, 27,836, 31,  4,384,  4],
    [  4,842,  4,839,  4, 86,  4, 81,  4,  0, 27,  4,  4],
    [  4,351,  4, 33,  4,835,  4,848, 22,  4,834, 28,  4],
    [  4,410, 21,  4,  7,131,  8,  4,386,  4, 21, 87,  4],
    [  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "bgm": "battle12.mp3"
}