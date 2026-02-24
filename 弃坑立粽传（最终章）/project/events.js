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
								"value": "status:atk+1*flag:arg1"
							}
						]
					},
					{
						"text": "防御+${1*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:def",
								"value": "status:def+1*flag:arg1"
							}
						]
					},
					{
						"text": "护盾+${75*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:mdef",
								"value": "status:mdef+75*flag:arg1"
							}
						]
					},
					{
						"text": "生命+${500*flag:arg1}",
						"action": [
							{
								"type": "setValue",
								"name": "status:hp",
								"value": "status:hp+500*flag:arg1"
							}
						]
					}
				]
			}
		],
		"毒衰咒处理": [
			{
				"type": "comment",
				"text": "获得毒衰咒效果，flag:arg1 为要获得的类型"
			},
			{
				"type": "switch",
				"condition": "flag:arg1",
				"caseList": [
					{
						"case": "0",
						"action": [
							{
								"type": "comment",
								"text": "获得毒效果"
							},
							{
								"type": "if",
								"condition": "!flag:poison",
								"true": [
									{
										"type": "setValue",
										"name": "flag:poison",
										"value": "true"
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "1",
						"action": [
							{
								"type": "comment",
								"text": "获得衰效果"
							},
							{
								"type": "if",
								"condition": "!flag:weak",
								"true": [
									{
										"type": "setValue",
										"name": "flag:weak",
										"value": "true"
									},
									{
										"type": "if",
										"condition": "core.values.weakValue>=1",
										"true": [
											{
												"type": "comment",
												"text": ">=1：直接扣数值"
											},
											{
												"type": "addValue",
												"name": "status:atk",
												"value": "-core.values.weakValue"
											},
											{
												"type": "addValue",
												"name": "status:def",
												"value": "-core.values.weakValue"
											}
										],
										"false": [
											{
												"type": "comment",
												"text": "<1：扣比例"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('atk', -core.values.weakValue);\n}"
											},
											{
												"type": "function",
												"function": "function(){\ncore.addBuff('def', -core.values.weakValue);\n}"
											}
										]
									}
								],
								"false": []
							}
						]
					},
					{
						"case": "2",
						"action": [
							{
								"type": "comment",
								"text": "获得咒效果"
							},
							{
								"type": "if",
								"condition": "!flag:curse",
								"true": [
									{
										"type": "setValue",
										"name": "flag:curse",
										"value": "true"
									}
								],
								"false": []
							}
						]
					}
				]
			}
		],
		"滑冰事件": [
			{
				"type": "comment",
				"text": "公共事件：滑冰事件"
			},
			{
				"type": "if",
				"condition": "core.canMoveHero()",
				"true": [
					{
						"type": "comment",
						"text": "检测下一个点是否可通行"
					},
					{
						"type": "setValue",
						"name": "flag:nx",
						"value": "core.nextX()"
					},
					{
						"type": "setValue",
						"name": "flag:ny",
						"value": "core.nextY()"
					},
					{
						"type": "if",
						"condition": "core.noPass(flag:nx, flag:ny)",
						"true": [
							{
								"type": "comment",
								"text": "不可通行，触发下一个点的事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							}
						],
						"false": [
							{
								"type": "comment",
								"text": "可通行，先移动到下个点，然后检查阻激夹域，并尝试触发该点事件"
							},
							{
								"type": "moveHero",
								"time": 80,
								"steps": [
									"forward"
								]
							},
							{
								"type": "function",
								"function": "function(){\ncore.checkBlock();\n}"
							},
							{
								"type": "comment",
								"text": "【触发事件】如果该点存在事件则会立刻结束当前事件"
							},
							{
								"type": "trigger",
								"loc": [
									"flag:nx",
									"flag:ny"
								]
							},
							{
								"type": "comment",
								"text": "如果该点不存在事件，则继续检测该点是否是滑冰点"
							},
							{
								"type": "if",
								"condition": "core.getBgNumber() == 167",
								"true": [
									{
										"type": "function",
										"function": "function(){\ncore.insertAction(\"滑冰事件\",null,null,null,true)\n}"
									}
								],
								"false": []
							}
						]
					}
				],
				"false": []
			}
		],
		"回收钥匙商店": [
			{
				"type": "comment",
				"text": "此事件在全局商店中被引用了(全局商店keyShop1)"
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
						"text": "\t[商人,woman]你有多余的钥匙想要出售吗？",
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
												"type": "addValue",
												"name": "item:yellowKey",
												"value": "-1"
											},
											{
												"type": "addValue",
												"name": "status:money",
												"value": "10"
											}
										],
										"false": [
											"\t[商人,woman]你没有黄钥匙！"
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
												"type": "addValue",
												"name": "item:blueKey",
												"value": "-1"
											},
											{
												"type": "addValue",
												"name": "status:money",
												"value": "50"
											}
										],
										"false": [
											"\t[商人,woman]你没有蓝钥匙！"
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
		"贪婪之神": [
			{
				"type": "while",
				"condition": "1",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以.....",
						"choices": [
							{
								"text": "血量+5000（${flag:shop_times*10}金币）",
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "-20-flag:shop_times*10"
											},
											{
												"type": "addValue",
												"name": "status:hp",
												"value": "5000"
											}
										],
										"false": [
											"没钱是想死吗？",
											{
												"type": "revisit"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+50（${flag:shop_times*10}金币）",
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "-20-flag:shop_times*10"
											},
											{
												"type": "addValue",
												"name": "status:atk",
												"value": "50"
											}
										],
										"false": [
											"没钱是想死吗？",
											{
												"type": "revisit"
											}
										]
									}
								]
							},
							{
								"text": "防御力+50（${flag:shop_times*10}金币）",
								"condition": "EvalString_default",
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "addValue",
												"name": "status:money",
												"value": "-20-flag:shop_times*10"
											},
											{
												"type": "addValue",
												"name": "status:def",
												"value": "50"
											}
										],
										"false": [
											"没钱是想死吗？",
											{
												"type": "revisit"
											}
										]
									}
								]
							}
						]
					},
					{
						"type": "addValue",
						"name": "flag:shop_times",
						"value": "1"
					},
					{
						"type": "exit"
					}
				]
			}
		],
		"51FShop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+12500（${20+flag:shop_times*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times*10"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "12500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+50（${20+flag:shop_times*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times*10"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+50（${20+flag:shop_times*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times*10"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "50"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"71Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+62500（${40+flag:shop_times*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times*20"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "62500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+250（${40+flag:shop_times*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times*20"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+250（${40+flag:shop_times*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times*20"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"85Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+312500（${80+flag:shop_times*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times*40"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "312500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+1250（${80+flag:shop_times*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times*40"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "1250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+1250（${80+flag:shop_times*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times*40"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "1250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"116Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+1562500（${160+flag:shop_times*80}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times*80)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times*80"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "1562500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+6250（${160+flag:shop_times*80}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times*80)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times*80"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "6250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+6250（${160+flag:shop_times*80}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times*80)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times*80"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "6250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"141Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+7812500（${320+flag:shop_times*160}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times*160)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times*160"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "7812500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+31250（${320+flag:shop_times*160}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times*160)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times*160"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "31250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+31250（${320+flag:shop_times*160}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times*160)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times*160"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "31250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"161Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+39062500（${640+flag:shop_times*320}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=640+flag:shop_times*320)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "640+flag:shop_times*320"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "39062500"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+156250（${640+flag:shop_times*320}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=640+flag:shop_times*320)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "640+flag:shop_times*320"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "156250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+156250（${640+flag:shop_times*320}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=640+flag:shop_times*320)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "640+flag:shop_times*320"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "156250"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"190Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+1250000000（${20+flag:shop_times1*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times1*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times1*5"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "1250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+5000000（${20+flag:shop_times1*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times1*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times1*5"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "5000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+5000000（${20+flag:shop_times1*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times1*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times1*5"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "5000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times1",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"203Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+6250000000（${40+flag:shop_times1*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times1*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times1*10"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "6250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+25000000（${40+flag:shop_times1*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times1*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times1*10"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "25000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+25000000（${40+flag:shop_times1*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times1*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times1*10"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "25000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times1",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"213Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+6250000000（${10+flag:shop_times2*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=10+flag:shop_times2*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "10+flag:shop_times2*3"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "6250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+50000000（${10+flag:shop_times2*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=10+flag:shop_times2*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "10+flag:shop_times2*3"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "50000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+50000000（${10+flag:shop_times2*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=10+flag:shop_times2*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "10+flag:shop_times2*3"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "50000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times2",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"222Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+31250000000（${20+flag:shop_times2*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times2*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times2*6"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "31250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+250000000（${20+flag:shop_times2*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times2*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times2*6"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+250000000（${20+flag:shop_times2*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times2*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times2*6"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "250000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times2",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"249Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+500亿（${20+flag:shop_times3*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times3*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times3*5"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "50000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+5亿（${20+flag:shop_times3*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times3*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times3*5"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "500000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+5亿（${20+flag:shop_times3*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times3*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times3*5"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "500000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times3",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"258Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+4500亿（${20+flag:shop_times4*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times4*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times4*5"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "450000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+150亿（${20+flag:shop_times4*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times4*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times4*5"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "15000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+150亿（${20+flag:shop_times4*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times4*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times4*5"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "15000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times4",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"276Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+50000亿（${20+flag:shop_times5*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times5*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times5*3"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "5000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+500亿（${20+flag:shop_times5*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times5*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times5*3"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "50000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+500亿（${20+flag:shop_times5*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times5*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times5*3"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "50000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times5",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"296Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+500000亿（${20+flag:shop_times6*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times6*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times6*3"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "50000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+5000亿（${20+flag:shop_times6*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times6*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times6*3"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "500000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+5000亿（${20+flag:shop_times6*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times6*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times6*3"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "500000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times6",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"332Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+800兆（${20+flag:shop_times7*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times7*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times7*5"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "800000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+30000亿（${20+flag:shop_times7*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times7*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times7*5"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "3000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+30000亿（${20+flag:shop_times7*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times7*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times7*5"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "3000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times7",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"351Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+4000兆（${40+flag:shop_times7*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times7*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times7*10"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "4000000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+150000亿（${40+flag:shop_times7*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times7*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times7*10"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "15000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+150000亿（${40+flag:shop_times7*10}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times7*10)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times7*10"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "15000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times7",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"382Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+20000兆（${80+flag:shop_times7*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times7*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times7*20"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "2000000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+750000亿（${80+flag:shop_times7*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times7*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times7*20"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "75000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+750000亿（${80+flag:shop_times7*20}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times7*20)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times7*20"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "75000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times7",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"399Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+100000兆（${160+flag:shop_times7*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times7*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times7*40"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "10000000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+375兆（${160+flag:shop_times7*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times7*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times7*40"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "375000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+375兆（${160+flag:shop_times7*40}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times7*40)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times7*40"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "375000000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times7",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"454Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+25000000（${20+flag:shop_times8*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times8*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times8*3"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "25000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+5000（${20+flag:shop_times8*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times8*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times8*3"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "5000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+5000（${20+flag:shop_times8*3}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times8*3)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times8*3"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "5000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times8",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"459Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+125000000（${40+flag:shop_times8*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times8*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times8*6"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "125000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+25000（${40+flag:shop_times8*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times8*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times8*6"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "25000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+25000（${40+flag:shop_times8*6}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=40+flag:shop_times8*6)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "40+flag:shop_times8*6"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "25000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times8",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"472Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+625000000（${80+flag:shop_times8*12}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times8*12)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times8*12"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "625000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+125000（${80+flag:shop_times8*12}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times8*12)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times8*12"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "125000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+125000（${80+flag:shop_times8*12}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=80+flag:shop_times8*12)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "80+flag:shop_times8*12"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "125000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times8",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"493Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+3125000000（${160+flag:shop_times8*24}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times8*24)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times8*24"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "3125000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+625000（${160+flag:shop_times8*24}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times8*24)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times8*24"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "625000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+625000（${160+flag:shop_times8*24}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=160+flag:shop_times8*24)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "160+flag:shop_times8*24"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "625000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times8",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"508Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+15625000000（${320+flag:shop_times8*48}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times8*48)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times8*48"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "15625000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+3125000（${320+flag:shop_times8*48}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times8*48)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times8*48"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "3125000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+3125000（${320+flag:shop_times8*48}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=320+flag:shop_times8*48)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "320+flag:shop_times8*48"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "3125000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times8",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		],
		"521Fshop": [
			{
				"type": "while",
				"condition": "true",
				"data": [
					{
						"type": "choices",
						"text": "\t[贪婪之神,blueShop]你可以....",
						"choices": [
							{
								"text": "生命+25000000000（${20+flag:shop_times9*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times9*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times9*5"
											},
											{
												"type": "setValue",
												"name": "status:hp",
												"operator": "+=",
												"value": "25000000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "攻击力+5000000（${20+flag:shop_times9*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times9*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times9*5"
											},
											{
												"type": "setValue",
												"name": "status:atk",
												"operator": "+=",
												"value": "5000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "防御力+5000000（${20+flag:shop_times9*5}金币）",
								"color": [
									255,
									255,
									255,
									1
								],
								"action": [
									{
										"type": "if",
										"condition": "(status:money>=20+flag:shop_times9*5)",
										"true": [
											{
												"type": "setValue",
												"name": "status:money",
												"operator": "-=",
												"value": "20+flag:shop_times9*5"
											},
											{
												"type": "setValue",
												"name": "status:def",
												"operator": "+=",
												"value": "5000000"
											}
										],
										"false": [
											"\t[贪婪之神,blueShop]没钱是想死吗？",
											{
												"type": "continue"
											}
										]
									}
								]
							},
							{
								"text": "离开",
								"action": [
									{
										"type": "break"
									}
								]
							}
						]
					},
					{
						"type": "setValue",
						"name": "flag:shop_times9",
						"operator": "+=",
						"value": "1"
					}
				]
			}
		]
	}
}