main.floors.MT154=
{
    "floorId": "MT154",
    "title": "最终之塔19层",
    "name": "最终之塔19层",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "cannotMoveDirectly": false,
    "images": [],
    "ratio": 1,
    "sj": 8,
    "defaultGround": "ground",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "7,10": {
            "trigger": "action",
            "enable": true,
            "noPass": null,
            "displayDamage": true,
            "opacity": 1,
            "filter": {
                "blur": 0,
                "hue": 0,
                "grayscale": 0,
                "invert": false,
                "shadow": 0
            },
            "data": [
                {
                    "type": "confirm",
                    "text": "要用紫之宝石打开门吗?",
                    "yes": [
                        {
                            "type": "openDoor",
                            "loc": [
                                7,
                                10
                            ]
                        },
                        {
                            "type": "setValue",
                            "name": "item:I671",
                            "operator": "-=",
                            "value": "1"
                        }
                    ],
                    "no": []
                }
            ]
        }
    },
    "changeFloor": {
        "6,9": {
            "floorId": ":next"
        }
    },
    "beforeBattle": {},
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "cannotMoveIn": {},
    "map": [
    [10028,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10033,10027],
    [10026,  4,  0,  0,  0,681,  0,  0,  0,680,  0,  4,10024],
    [10026,  4,  0,  4,  4,  4,  4,  4,  4,  4,  0,  4,10024],
    [10026,  4,680,  4, 33,356,356,356, 33,  4,  0,  4,10024],
    [10026,  4,  0,  4,  4,  4, 84,  4,  4,  4,681,  4,10024],
    [10026,  4,  0,  4,  0,681,  0,  4,  0,  0,  0,  4,10024],
    [10026,  4,  0,  4,  0,  4,  0,  4,  0,  4,  4,  4,10024],
    [10026,  4,  0,  4,  0,  4,  0,  4,  0,680,  0,  4,10024],
    [10026,  4,681,  4,  0,  4,  4,  4,  4,  4,  0,  4,10024],
    [10026,  4,  0,  4,680,  4, 87,  4,  4,  4,  0,  4,10024],
    [10026,  4,  0,  0,  0,  4,  0,672,  0,681,  0,  4,10024],
    [10026,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,  4,10024],
    [10020,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10017,10019]
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