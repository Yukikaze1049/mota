var events_c12a15a8_c380_4b28_8144_256cba95f760 = 
{
	"commonEvent": {
		"加点事件": [
			{
				"type": "comment",
				"text": "通过传参，flag:arg1 表示当前应该的加点数值"
			},
			{
				"type": "choices",
				"choices": [
					{
						"text": "攻击+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:atk",
								"operator": "+=",
								"value": "1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${2*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"operator": "+=",
								"value": "2*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${200*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "+=",
								"value": "200*flag:arg1"
							}
						]
					}
				]
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop)"
			},
			{
				"type": "comment",
				"text": "解除引用前勿删除此事件"
			},
			{
				"type": "comment",
				"text": "玩家在快捷列表（V键）中可以使用本公共事件"
			},
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[商人,trader]你有多余的钥匙想要出售吗？",
						"choices": [
							{
								"text": "黄钥匙（10金币）",
								"color": [
									255,
									255,
									0,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:yellowKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:yellowKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,trader]你没有黄钥匙！"
										]
									}
								]
							},
							{
								"text": "蓝钥匙（50金币）",
								"color": [
									0,
									0,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "item:blueKey >= 1",
										"true": [
											{
												"type": "setValue",
												"name": "item:blueKey",
												"operator": "-=",
												"value": "1"
											},
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,trader]你没有蓝钥匙！"
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "exit"
									}
								]
							}
						]
					}
				]
			}
		],
		"射击": [
			{
				"type": "if",
				"condition": "(flags.scsj==1)",
				"true": [
					{
						"type": "animate",
						"name": "skill3",
						"loc": [
							"hero.loc.x",
							"hero.loc.y"
						],
						"async": true
					},
					{
						"type": "tip",
						"text": "受到射击伤害200点"
					},
					{
						"type": "setValue",
						"name": "status:hp",
						"operator": "-=",
						"value": "200"
					},
					{
						"type": "setValue",
						"name": "flag:scsj",
						"value": "2"
					},
					"\t[hero]\b[hero]可恶……还是没能察觉到方向。",
					{
						"type": "setHeroIcon",
						"name": "o.png"
					},
					"\t[怀特莉丝,N430]\b[hero]似乎对方在每次射击后，会在之后第三只魔物的位置进行狙击。",
					"\t[怀特莉丝,N430]\b[hero]恐怕这就是对方与这座魔塔定下的法则。",
					"\t[怀特莉丝,N430]\b[hero]每次射击后，第三只魔物的位置就会成为其锁定的靶子。",
					{
						"type": "setHeroIcon",
						"name": "hero.png"
					},
					"\t[hero]\b[hero]啧……没办法绕开那个位置前进啊……",
					"\t[hero]\b[hero]也许可以想办法让靶子的位置位于一个很少经过的路径……",
					"\t[hero]\b[hero]不然就得被射成马蜂窝了……"
				],
				"false": [
					{
						"type": "if",
						"condition": "(flags.scsj==2)",
						"true": [
							{
								"type": "animate",
								"name": "skill3",
								"loc": [
									"hero.loc.x",
									"hero.loc.y"
								],
								"async": true
							},
							{
								"type": "tip",
								"text": "受到射击伤害200点"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "-=",
								"value": "200"
							},
							{
								"type": "sleep",
								"time": 200
							}
						],
						"false": [
							{
								"type": "animate",
								"name": "skill3",
								"loc": [
									"hero.loc.x",
									"hero.loc.y"
								],
								"async": true
							},
							{
								"type": "tip",
								"text": "受到射击伤害200点"
							},
							{
								"type": "setValue",
								"name": "status:hp",
								"operator": "-=",
								"value": "200"
							},
							{
								"type": "setValue",
								"name": "flag:scsj",
								"value": "1"
							},
							"\t[hero]\b[hero]呼……好厉害的冲击力……",
							"\t[hero]\b[hero]尽管挡了下来……但手臂还是被震的隐隐作痛……",
							"\t[hero]\b[hero]有谁……躲在暗处攻击我们……",
							{
								"type": "setHeroIcon",
								"name": "o.png"
							},
							"\t[怀特莉丝,N430]\b[hero]察觉不到气息……",
							"\t[怀特莉丝,N430]\b[hero]看来对方的隐匿能力很厉害啊。",
							{
								"type": "setHeroIcon",
								"name": "hero.png"
							},
							"\t[hero]\b[hero]果然这塔是一个比一个麻烦……"
						]
					}
				]
			},
			{
				"type": "hideImage",
				"code": 1,
				"time": 0
			}
		],
		"冲锋": [
			{
				"type": "if",
				"condition": "(flags.scsj2==1)",
				"true": [
					{
						"type": "setValue",
						"name": "flag:scsj2",
						"value": "2"
					},
					"\t[hero]\b[hero]居然吃了这一招没死……",
					"\t[hero]\b[hero]真是够硬的！",
					{
						"type": "setHeroIcon",
						"name": "o.png"
					},
					"\t[怀特莉丝,N430]\b[hero]在你杀死前两只后，这只魔物的防御力明显变得更强了。",
					"\t[怀特莉丝,N430]\b[hero]恐怕这也是塔中的机制。",
					{
						"type": "setHeroIcon",
						"name": "hero.png"
					},
					"\t[hero]\b[hero]也就是……杀死两只相同的魔物后，第三只攻击就会提升。",
					"\t[hero]\b[hero]杀死两只不一样的魔物后，第三只的防御就会提升。",
					"\t[hero]\b[hero]这就是这座塔的规则……",
					{
						"type": "setHeroIcon",
						"name": "o.png"
					},
					"\t[怀特莉丝,N430]\b[hero]看来是这样的。",
					"\t[怀特莉丝,N430]\b[hero]而且我能感知到……这层同样存在一只提供魔力维持这个机制的怨灵。",
					"\t[怀特莉丝,N430]\b[hero]干掉它，应该就能和之前的绿塔一样，破坏掉这个效果了。",
					{
						"type": "setHeroIcon",
						"name": "hero.png"
					}
				],
				"false": [
					{
						"type": "if",
						"condition": "(flags.scsj2==2)",
						"true": [],
						"false": [
							{
								"type": "setValue",
								"name": "flag:scsj2",
								"value": "1"
							},
							"\t[hero]\b[hero]唔……这一只怎么感觉攻击力这么强？",
							"\t[hero]\b[hero]前两只与这只根本不是一个水平啊……",
							{
								"type": "setHeroIcon",
								"name": "o.png"
							},
							"\t[怀特莉丝,N430]\b[hero]在你杀死前面两只后，这一只的魔力就突然上升了很多。",
							"\t[怀特莉丝,N430]\b[hero]或许……这就是这座塔的规则。",
							{
								"type": "setHeroIcon",
								"name": "hero.png"
							},
							"\t[hero]\b[hero]和绿塔一样，将机制设置在第三只魔物上么……"
						]
					}
				]
			}
		],
		"复生": [
			{
				"type": "if",
				"condition": "(core.status.floorId!==\"MT117\")",
				"true": [
					{
						"type": "sleep",
						"time": 200,
						"noSkip": true
					}
				],
				"false": [
					{
						"type": "setValue",
						"name": "flag:scsj3",
						"value": "1"
					},
					"\t[hero]\b[hero]这家伙怎么复活过来了？",
					{
						"type": "setHeroIcon",
						"name": "o.png"
					},
					"\t[怀特莉丝,N430]\b[hero]看来这一次的法则是第三只怪物被打败后会复活。",
					{
						"type": "setHeroIcon",
						"name": "hero.png"
					},
					"\t[hero]\b[hero]那么……这里有个也会有提供魔力的怨灵在吧。",
					"\t[hero]\b[hero]嘿……对他们这一套系统已经是轻车熟路了！",
					{
						"type": "setHeroIcon",
						"name": "o.png"
					},
					"\t[怀特莉丝,N430]\b[hero]有复活魔物的能力的话……",
					"\t[怀特莉丝,N430]\b[hero]这里应该是那个叫佛修斯的神官了。",
					{
						"type": "setHeroIcon",
						"name": "hero.png"
					},
					"\t[hero]\b[hero]不过，那个叫闻斯莫提的法师在哪里呢……"
				]
			}
		]
	}
}