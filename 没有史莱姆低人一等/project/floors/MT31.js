main.floors.MT31=
{
    "floorId": "MT31",
    "title": "主塔 31 层",
    "name": "31",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "grass",
    "bgm": "heiansenlin.mp3",
    "firstArrive": [
        "\t[奕开,hero]\b[hero]可恶的紫骷髅，我一定要你付出血的代价!"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "11,11": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,1": {
            "floorId": ":next",
            "stair": "downFloor"
        }
    },
    "beforeBattle": {},
    "afterBattle": {
        "9,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,7": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "9,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,8": [
            {
                "type": "setValue",
                "name": "flag:door_MT31_10_6",
                "operator": "+=",
                "value": "1"
            }
        ],
        "11,3": [
            "\t[奕开,hero]\b[hero]这只紫骷髅不是我要找的……"
        ],
        "9,2": [
            {
                "type": "setValue",
                "name": "item:I1111",
                "operator": "+=",
                "value": "1"
            },
            "\t[奕开,hero]\b[hero]意外的收获"
        ]
    },
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {
        "10,6": {
            "0": {
                "condition": "flag:door_MT31_10_6==4",
                "currentFloor": true,
                "priority": 0,
                "delayExecute": false,
                "multiExecute": false,
                "data": [
                    {
                        "type": "openDoor"
                    },
                    {
                        "type": "setValue",
                        "name": "flag:door_MT31_10_6",
                        "operator": "=",
                        "value": "null"
                    }
                ]
            }
        }
    },
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,444,  0,  0, 82,226,  0, 20,446,  0, 20, 87, 20],
    [ 20,  0,383,  0, 20,  0,370, 20,  0,224, 20,551, 20],
    [ 20,  0,227,  0, 20,445,  0, 20, 20, 81, 20,234, 20],
    [ 20, 20, 81, 20, 20, 20,  0, 20,378,  0, 20,  0, 20],
    [ 20,445,  0,  0,  0, 20,228, 81,  0, 21,233,  0, 20],
    [ 20, 20, 20, 20,235, 20, 20, 20, 20, 20, 85, 20, 20],
    [ 20,  0,380, 20,  0, 20,381,381, 20,235,  0,235, 20],
    [ 20, 21,  0, 81,  0, 81,225,381, 20,235,  0,235, 20],
    [ 20, 20,279, 20, 20, 20, 20, 20, 20, 20, 83, 20, 20],
    [ 20,  0,372,  0,226,  0,445,  0, 20,  0,  0,  0, 20],
    [ 20,373,  0,445, 20, 21,  0,545, 81,233,  0, 88, 20],
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20]
],
    "bgmap": [

],
    "fgmap": [

],
    "bg2map": [

],
    "fg2map": [

],
    "flyPoint": [
        11,
        11
    ]
}