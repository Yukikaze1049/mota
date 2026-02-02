main.floors.MT30=
{
    "floorId": "MT30",
    "title": "主塔 30 层",
    "name": "30",
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
        {
            "type": "if",
            "condition": "(flag:hard===0)",
            "true": [
                "获得黄钥匙*10，蓝钥匙*5，破墙镐*1(建议破除35层绿门的墙体)\n推荐套装：双紫幻灭或者骷髅套装",
                {
                    "type": "setValue",
                    "name": "item:yellowKey",
                    "operator": "+=",
                    "value": "10"
                },
                {
                    "type": "setValue",
                    "name": "item:blueKey",
                    "operator": "+=",
                    "value": "5"
                },
                {
                    "type": "setValue",
                    "name": "item:pickaxe",
                    "operator": "+=",
                    "value": "1"
                }
            ],
            "false": []
        },
        "\t[奕开,hero]\b[hero]这金史莱姆虽然可以提升攻防，但是会减少大量护盾，我一定要避开",
        "温馨提示：本区boss具有逆转攻防的特殊属性，建议玩家防御力达到300以上。"
    ],
    "eachArrive": [],
    "parallelDo": "",
    "events": {},
    "changeFloor": {
        "6,1": {
            "floorId": ":before",
            "stair": "upFloor"
        },
        "11,11": {
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
    [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20],
    [ 20,379,445, 20, 20,445, 88,445, 20, 20,445,380, 20],
    [ 20,381,490, 20, 20, 26,  0, 26, 20, 20,490,381, 20],
    [ 20,  0,279, 81, 81,  0,  0,  0, 81, 81,232,  0, 20],
    [ 20, 20, 20, 20, 20, 20,233, 20, 20, 20, 20, 81, 20],
    [ 20,374,  0,  0, 20, 20, 82, 20, 20,545,  0,226, 20],
    [ 20,  0,445,224, 81, 81,  0, 81, 81,  0,445,  0, 20],
    [ 20,373,  0,  0, 20, 20,  0, 20, 20,545,  0,545, 20],
    [ 20, 20, 20, 20, 20,  0,227,  0, 20, 20, 81, 20, 20],
    [ 20, 21, 21,  0, 20,375,  0,445, 20,  0,235,  0, 20],
    [ 20, 21, 22,228, 81,  0,377,225, 81,  0,545,  0, 20],
    [ 20, 21, 21,  0, 20,376,  0,445, 20,445,  0, 87, 20],
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
        6,
        1
    ]
}