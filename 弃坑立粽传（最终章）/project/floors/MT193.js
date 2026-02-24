main.floors.MT193=
{
    "floorId": "MT193",
    "title": "阴之坛九层",
    "name": "阴之坛九层",
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
        "6,1": [
            "这里是漏怪检测装置。正在检测是否有剩余怪物。",
            {
                "type": "function",
                "function": "function(){\ncore.checkMonster([\"MT185\", \"MT186\", \"MT187\", \"MT188\", \"MT189\", \"MT190\", \"MT191\", \"MT192\", \"MT193\"]);\n}"
            },
            {
                "type": "if",
                "condition": "(flag:remainMonsterCount!==0)",
                "true": [
                    "共有${flag:remainMonsterCount}只怪物未清除。",
                    "剩余enemy:${flag:remainMonsterInfo}"
                ],
                "false": [
                    "怪物已清完！继续前进吧！",
                    "\t[系统提示]继续前进将无法再返回此区域，请及时清理地上的资源。",
                    {
                        "type": "hide",
                        "time": 0
                    }
                ]
            }
        ]
    },
    "changeFloor": {
        "6,11": {
            "floorId": ":before",
            "stair": "upFloor",
            "time": 0
        },
        "6,0": {
            "floorId": ":next",
            "loc": [
                6,
                11
            ],
            "direction": "up",
            "time": 0
        }
    },
    "afterBattle": {},
    "afterGetItem": {},
    "afterOpenDoor": {},
    "autoEvent": {},
    "cannotMove": {},
    "map": [
    [  4,  4,  4,  4,  4,  4, 87,  4,  4,  4,  4,  4,  4],
    [  4,402, 81, 81, 81,  4,670,  4,410,  4, 21, 21,  4],
    [  4,  4,  4,  4,351, 33,850,  0,846,  0,  4, 21,  4],
    [  4,402,  4, 21,837,  4,  4,  4,  0, 21,848, 82,  4],
    [  4, 82,410,350,  4,  4,  4,366,837,  4,336,  4,  4],
    [  4, 33,846,  4,  4,  4,334, 22,  4,  0,  0,  4,  4],
    [  4,  4, 33,  4,  4,  0,846,350,  4,368,850,335,  4],
    [  4,351, 33,383,850, 21,  4, 81,848,  4,  0,  4,  4],
    [  4,848,  4,  4,  4,  4,399,  4, 21, 33,848, 33,  4],
    [  4, 33,383,  4,410,846,352,  0,837,  0,  4,335,  4],
    [  4,  4,850,  4,  4,  4,336,  4,  4,848,  4, 81,  4],
    [  4,336,352,368,399,  4, 88,  4,335,367,351, 33,  4],
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