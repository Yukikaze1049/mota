main.floors.SL46=
{
    "floorId": "SL46",
    "title": "魔塔 46 层",
    "name": "魔塔46",
    "width": 13,
    "height": 13,
    "canFlyTo": true,
    "canFlyFrom": true,
    "canUseQuickShop": true,
    "cannotViewMap": false,
    "images": [],
    "ratio": 1,
    "defaultGround": "ground",
    "bgm": "jindi.mp3",
    "firstArrive": [],
    "eachArrive": [],
    "parallelDo": "",
    "events": {
        "1,10": {
            "trigger": null,
            "enable": false,
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
                "\t[勇者,N1299]\b[this]你来了。",
                "\t[阿史,hero]\b[hero]是的，我来了",
                "\t[勇者,N1299]\b[this]很高兴你能选择我，我们也没啥好说的，这把神圣剑借给你了，去杀掉魔王吧！",
                {
                    "type": "setValue",
                    "name": "status:atk",
                    "operator": "+=",
                    "value": "120"
                },
                "\t[阿史,hero]\b[hero]嗯 多谢你了。",
                {
                    "type": "hide",
                    "remove": true
                }
            ]
        }
    },
    "changeFloor": {
        "1,6": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,6": {
            "floorId": ":next",
            "stair": "downFloor"
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
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1],
    [  1,  0,447,  0,1289,  0,1290,380,446, 82,447,382,  1],
    [  1,1289,  1,  1,  1,  0,  1, 81,  1,  1,  1,1289,  1],
    [  1,  0,444, 81,  0,381,  1, 21,  0,1285,  0,  0,  1],
    [  1,379,  0,  1,444,  0,1285,  0,446,  1,  1,  1,  1],
    [  1,  1,  1,  1, 81,  1,  1,  1,1284,  1,446,  0,  1],
    [  1, 88,  0,1284,  0,444,  0,1287,  0, 81,1289, 87,  1],
    [  1,  1,  1,  1,1285,  1,  1,  1,  0,  1,380,  0,  1],
    [  1,446,446, 81,  0,  1,379,  1,444,  1,  1, 82,  1],
    [  1,  1, 81,  1,  0,  1,447,1290,  0,1284,  0, 21,  1],
    [  1,1299,  0,  1, 21,  1, 81,  1,  1,  1,  1, 81,  1],
    [  1,  0,  0,1291,  0,1284,  0,444,  0,1290,444,380,  1],
    [  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1,  1]
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
        1,
        6
    ]
}