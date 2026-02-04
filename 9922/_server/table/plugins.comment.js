/*
 * 表格配置项。
 * 在这里可以对表格中的各项显示进行配置，包括表格项、提示内容等内容。具体写法照葫芦画瓢即可。
 * 本配置项包括：插件编写。
 * 相关文档 _docs/editor.md ~ http://127.0.0.1:1055/_docs/#/editor?id=修改表格
 */

var plugins_comment_c456ea59_6018_45ef_8bcc_211a24c627dc = {
	"_type": "object",
	"_data": function (key) {
		var obj = {
			"init": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string'",
				"_data": "自定义插件"
			},
			"shop": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string'",
				"_data": "全局商店"
			},
			"drawLight": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "灯光效果"
			},
			"removeMap": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "砍层插件"
			},
			"fiveLayers": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "五图层(背景前景2)"
			},
			"itemShop": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "道具商店"
			},
			"enemyLevel": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "手册显示怪物境界"
			},
			"dynamicHp": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "动态血量变化"
			},
			"multiHeros": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "多角色"
			},
			"itemCategory": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "物品4分类"
			},
			"moreLight": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "灯光效果2&移动残影"
			},
			"bookColor": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "手册修改"
			},
			"sunlight": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "天下之大NB"
			},
			"checkEnemy": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "漏怪检测"
			},
			"itemCategory2": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "物品3分类"
			},
			"popSkillDamage": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "龙塔NB"
			},
			"DANGER": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "LHJNB"
			},
			"spriteFlasher": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "LHJyyds"
			},
			"talentTree": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "毒星NB，LHJNB"
			},
			"talentTree2": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "第四章天赋"
			},
			"checkBlock": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "checkBlock 相关"
			},
			"talentTree3": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "第四章天赋2"
			},
			"displayDamage": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "怪物显伤"
			},
			"autoGetItem": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "自动拾取"
			},
			"enemyOnPoint": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "定点敌人显示生命"
			},
			"itemDetail": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "物品显伤"
			},
			"autoBattle": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "自动杀0伤怪"
			},
			"bugfix": {
				"_leaf": true,
				"_type": "textarea",
				"_range": "typeof(thiseval)=='string' || thiseval==null",
				"_data": "feature"
			},
		}
		if (obj[key]) return obj[key];
		return {
			"_leaf": true,
			"_type": "textarea",
			"_range": "typeof(thiseval)=='string' || thiseval==null",
			"_template": "function () {\\n\\t// 在此增加新插件\\n\\t\\n}",
			"_data": "自定义插件"
		}
	}
}