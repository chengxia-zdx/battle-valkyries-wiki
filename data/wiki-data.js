window.BV_WIKI_DATA = {
  "meta": {
    "title": "Battle Valkyries Wiki",
    "source": "battle-valkyries mod",
    "updatedAt": "2026-07-04",
    "sourceDocument": "文档/游戏mod内容介绍/index.md",
    "contentSource": [
      "文档/游戏mod内容介绍/index.md",
      "文档/装备词条系统设计.md",
      "src/battle-valkyries/battle-valkyries/load.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_data.nut",
      "src/battle-valkyries/battle-valkyries/config/mod_settings.nut",
      "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
      "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
      "src/battle-valkyries/battle-valkyries/hooks/bond_system.nut",
      "src/battle-valkyries/battle-valkyries/hooks/tactical_enemy_tooltip.nut",
      "src/battle-valkyries/battle-valkyries/hooks/test_origin.nut",
      "src/battle-valkyries/battle-valkyries/equipment/equipment_data.nut",
      "src/battle-valkyries/battle-valkyries/equipment/equipment_system.nut",
      "i18n/en.json",
      "i18n/zh_CN.json"
    ]
  },
  "statKeys": [
    "Hitpoints",
    "Bravery",
    "Stamina",
    "MeleeSkill",
    "RangedSkill",
    "MeleeDefense",
    "RangedDefense",
    "Initiative"
  ],
  "statLabels": {
    "en": {
      "Hitpoints": "Hitpoints",
      "Bravery": "Resolve",
      "Stamina": "Fatigue",
      "MeleeSkill": "Melee Skill",
      "RangedSkill": "Ranged Skill",
      "MeleeDefense": "Melee Defense",
      "RangedDefense": "Ranged Defense",
      "Initiative": "Initiative",
      "MentalMorale": "Mental Morale"
    },
    "zh": {
      "Hitpoints": "生命值",
      "Bravery": "决心",
      "Stamina": "疲劳值",
      "MeleeSkill": "近战技能",
      "RangedSkill": "远程技能",
      "MeleeDefense": "近战防御",
      "RangedDefense": "远程防御",
      "Initiative": "主动值",
      "MentalMorale": "精神士气抗性"
    }
  },
  "summon": {
    "rosterMax": 20,
    "formationSlots": 27,
    "combatSlots": 18,
    "costSteps": [
      {
        "max": 1,
        "cost": 1000
      },
      {
        "max": 2,
        "cost": 3000
      },
      {
        "max": 3,
        "cost": 6000
      },
      {
        "max": 6,
        "cost": 10000
      },
      {
        "max": 10,
        "cost": 18000
      },
      {
        "max": 15,
        "cost": 28000
      },
      {
        "max": 20,
        "cost": 44800
      }
    ]
  },
  "settings": {
    "modName": {
      "en": "Battle Valkyries",
      "zh": "战斗女武神"
    },
    "pageTitle": {
      "en": "Valkyries",
      "zh": "女武神"
    },
    "sectionTitle": {
      "en": "Summon System",
      "zh": "召唤系统"
    },
    "screenshot": "assets/ui/mod-settings.jpg",
    "options": [
      {
        "id": "HideWeapons",
        "type": "boolean",
        "default": true,
        "text": {
          "en": {
            "name": "Hide Weapons",
            "description": "Hide the equipped weapon and shield sprites while a summoned Valkyrie skin is active."
          },
          "zh": {
            "name": "隐藏武器",
            "description": "召唤女武神外观生效时隐藏已装备的武器和盾牌贴图。"
          }
        }
      },
      {
        "id": "EnableEquipmentSystem",
        "type": "boolean",
        "default": true,
        "text": {
          "en": {
            "name": "Enable Equipment System",
            "description": "Read only once when a new campaign is created. When enabled, ordinary equipment, named items, legendary items, enemy gear, and alchemy enchanting enter the Battle Valkyries equipment system; after campaign creation this state is locked into the save."
          },
          "zh": {
            "name": "启用装备系统",
            "description": "只在新开战役时读取一次。开启后普通装备、Named 装备、Legendary 装备、敌人装备和炼金附魔会进入 Battle Valkyries 装备系统；战役创建后此开关状态会锁定到存档。"
          }
        }
      }
    ]
  },
  "systems": {
    "intro": {
      "en": "Current content goes beyond the 20-character roster: it includes the Valkyrie hub, identity-driven skins, Xilian's bond events, enemy tooltip upgrades, a test origin, save recovery helpers, and an optional equipment system.",
      "zh": "当前内容不止 20 名女武神名册：还包括女武神 Hub、身份驱动皮肤、昔涟羁绊事件、敌人 tooltip 增强、测试开局、存档恢复辅助，以及一个可选装备系统。"
    },
    "baselineNote": {
      "en": "The current gameplay and future design baseline does not assume the optional equipment system unless the player or maintainer explicitly enables or extends it.",
      "zh": "当前游玩和后续设计默认不以可选装备系统为前提；只有玩家或维护者明确启用、维护或扩展它时才纳入考虑。"
    },
    "cards": [
      {
        "id": "hub",
        "title": {
          "en": "Valkyrie Hub",
          "zh": "女武神 Hub"
        },
        "body": {
          "en": "Ctrl + M opens the main interface for summoning, character details, skin item grants, tasks, and the optional alchemy tab.",
          "zh": "按 Ctrl + M 打开主界面，用于召唤、查看角色详情、授予皮肤物品、承载任务页，以及进入可选炼金页。"
        },
        "bullets": {
          "en": [
            "Tabs: Summon, Tasks, Alchemy.",
            "The summon detail view shows portrait art, skin preview, background, trait, passive skill, active skill, and the current price."
          ],
          "zh": [
            "顶部标签：召唤、任务、炼金。",
            "召唤详情会展示立绘、皮肤预览、背景、人物特性、被动技能、主动技能和当前价格。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/hub_backend.nut",
          "src/battle-valkyries/ui/mods/battle-valkyries/valkyries_hub.js"
        ]
      },
      {
        "id": "skins",
        "title": {
          "en": "Identity-driven Skins",
          "zh": "身份驱动皮肤"
        },
        "body": {
          "en": "Each summoned Valkyrie stores identity and skin IDs on actor flags. Appearance is reapplied after summon, load, combat entry, world refresh, and equipment changes.",
          "zh": "每名召唤女武神都会把身份和皮肤 ID 写入 actor flags。召唤、读档、进入战斗、回到大地图和装备变化后都会重新应用外观。"
        },
        "bullets": {
          "en": [
            "Whole-bust skins hide the original body, head, hair, helmet, armor, quiver, injuries, and related layers.",
            "Dedicated death brushes keep Valkyries from falling back to vanilla corpse visuals."
          ],
          "zh": [
            "整张 bust 皮肤会隐藏原版身体、头、头发、头盔、盔甲、箭袋、伤痕等图层。",
            "专属死亡 brush 会避免女武神死亡后退回原版尸体外观。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
          "src/battle-valkyries/battle-valkyries/hooks/skin_appearance.nut",
          "src/battle-valkyries/battle-valkyries/hooks/death_state_fix.nut"
        ]
      },
      {
        "id": "voice",
        "title": {
          "en": "Selective Voice Replacement",
          "zh": "选择性语音替换"
        },
        "body": {
          "en": "Voice hooks replace hurt, death, fatigue, and flee sounds only for actors carrying a supported Valkyrie skin.",
          "zh": "语音 hook 只会替换拥有对应女武神皮肤角色的受击、死亡、疲劳和逃跑音效。"
        },
        "bullets": {
          "en": [
            "Supported skins: Chisaki, Changli, Jinhsi, Yuno, Feixue, Cartethyia."
          ],
          "zh": [
            "已接入皮肤：千咲、长离、今汐、尤诺、绯雪、卡提希娅。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/valkyrie_voice_sounds.nut"
        ]
      },
      {
        "id": "bond",
        "title": {
          "en": "Xilian Bond",
          "zh": "昔涟羁绊"
        },
        "body": {
          "en": "Xilian has the first implemented character growth track: battle progress, a bond item, and five world-event milestones.",
          "zh": "昔涟拥有第一套已落地的角色养成线：战斗进度、羁绊道具和五段世界事件。"
        },
        "bullets": {
          "en": [
            "Surviving a battle grants +2 bond.",
            "Xilian Memory Shards grant +20 bond when a valid Xilian is in the roster.",
            "The bond cap is 100."
          ],
          "zh": [
            "昔涟参战并存活后羁绊 +2。",
            "队伍中有有效昔涟时，昔涟记忆碎晶提供 +20 羁绊。",
            "羁绊上限为 100。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/bond_system.nut",
          "src/battle-valkyries/scripts/events/events/battle_valkyries_xilian_bond_event.nut",
          "src/battle-valkyries/scripts/items/misc/xilian_bond_crystal_item.nut"
        ]
      },
      {
        "id": "enemy_tooltip",
        "title": {
          "en": "Enemy Tooltip Upgrade",
          "zh": "敌人信息增强"
        },
        "body": {
          "en": "Enemy tactical tooltips show concrete head armor, body armor, hitpoint, fatigue, and equipment values.",
          "zh": "战斗中的敌人 tooltip 会显示头部护甲、身体护甲、生命、疲劳和装备的具体数值。"
        },
        "bullets": {
          "en": [
            "If the equipment system is enabled, equipment names are colored by rarity."
          ],
          "zh": [
            "如果装备系统开启，装备名称会按稀有度颜色显示。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/tactical_enemy_tooltip.nut"
        ]
      },
      {
        "id": "test_origin",
        "title": {
          "en": "Test Origin",
          "zh": "测试开局"
        },
        "body": {
          "en": "The Battle Valkyries test company exists for rapid validation of summons, equipment, strong enemies, and Xilian bond items.",
          "zh": "战斗女武神测试战团用于快速验证召唤、装备、强敌和昔涟羁绊物品。"
        },
        "bullets": {
          "en": [
            "Starts with three basic brothers, 3,000,000 Crowns, food, fixed legendary equipment, and 10 Xilian Memory Shards.",
            "Spawns five legendary locations plus nearby strong beast, orc, and mercenary parties that actively chase the player."
          ],
          "zh": [
            "开局提供 3 名基础队员、3,000,000 克朗、粮食、固定传奇装备和 10 个昔涟记忆碎晶。",
            "会在附近生成 5 个传奇地点，以及主动追击玩家的野兽、兽人和雇佣兵强队。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/test_origin.nut",
          "src/battle-valkyries/scripts/scenarios/world/battle_valkyries_test_company_scenario.nut"
        ]
      },
      {
        "id": "save_compat",
        "title": {
          "en": "Save Recovery",
          "zh": "存档兼容"
        },
        "body": {
          "en": "Template skills are restored from Valkyrie identity rather than serialized as permanent custom skill state.",
          "zh": "模板技能通过女武神身份恢复，而不是作为长期自定义 skill 状态写入存档。"
        },
        "bullets": {
          "en": [
            "Key helpers sync identity, restore template skills, refresh roster state, and protect death-state edge cases."
          ],
          "zh": [
            "关键 helper 会同步身份、补回模板技能、刷新名册状态，并兜底死亡状态异常。"
          ]
        },
        "sourceFiles": [
          "src/battle-valkyries/battle-valkyries/hooks/skill_msu_compat.nut",
          "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
          "src/battle-valkyries/battle-valkyries/hooks/death_state_fix.nut"
        ]
      }
    ],
    "bond": {
      "title": {
        "en": "Xilian Bond Stages",
        "zh": "昔涟羁绊阶段"
      },
      "item": {
        "en": "Xilian Memory Shard",
        "zh": "昔涟记忆碎晶"
      },
      "gainPerBattle": 2,
      "itemGain": 20,
      "max": 100,
      "stages": [
        {
          "value": 20,
          "rewardMoney": 100,
          "rewardPerkPoints": 1,
          "text": {
            "en": {
              "stage": "First Hearttrace",
              "eventTitle": "Shard of Light"
            },
            "zh": {
              "stage": "心痕初现",
              "eventTitle": "碎光入账"
            }
          }
        },
        {
          "value": 40,
          "rewardMoney": 100,
          "rewardPerkPoints": 1,
          "text": {
            "en": {
              "stage": "Shared Memory",
              "eventTitle": "Old Shadows by the Fire"
            },
            "zh": {
              "stage": "同行之忆",
              "eventTitle": "营火里的旧影"
            }
          }
        },
        {
          "value": 60,
          "rewardMoney": 100,
          "rewardPerkPoints": 1,
          "text": {
            "en": {
              "stage": "Memory Shelter",
              "eventTitle": "White Flower in Rain"
            },
            "zh": {
              "stage": "记忆庇护",
              "eventTitle": "雨中的白花"
            }
          }
        },
        {
          "value": 80,
          "rewardMoney": 100,
          "rewardPerkPoints": 1,
          "text": {
            "en": {
              "stage": "Beyond the Loop",
              "eventTitle": "A Night That Will Not Repeat"
            },
            "zh": {
              "stage": "闭环之外",
              "eventTitle": "不再重来的夜"
            }
          }
        },
        {
          "value": 100,
          "rewardMoney": 100,
          "rewardPerkPoints": 2,
          "text": {
            "en": {
              "stage": "Eternal Echo",
              "eventTitle": "The First Page of Tomorrow"
            },
            "zh": {
              "stage": "永恒回声",
              "eventTitle": "明日的第一页"
            }
          }
        }
      ]
    },
    "equipment": {
      "title": {
        "en": "Optional Equipment System",
        "zh": "可选装备系统"
      },
      "body": {
        "en": "When enabled for a new campaign, eligible weapons, helmets, armor, and shields gain rarity, affix slots, alchemy enchanting, removal stones, disassembly rewards, and enemy gear generation.",
        "zh": "新战役启用后，符合条件的武器、头盔、盔甲和盾牌会获得稀有度、词条槽、炼金附魔、消除石、拆解奖励和敌人装备生成。"
      },
      "rules": {
        "en": [
          "Named items migrate to red rarity and legendary items migrate to prismatic rarity.",
          "Basic affixes can roll on any rarity; advanced affixes unlock from purple rarity, and legendary affixes unlock from red rarity.",
          "Enchanting adds a non-duplicate affix while slots remain; once full, it replaces the last affix.",
          "Weapon on-hit affixes only trigger from weapon attack skills and still respect target immunities.",
          "Disassemble, enchant, and remove-affix actions each cost 100 Crowns before material costs."
        ],
        "zh": [
          "原版 Named 装备迁移为红装，Legendary 装备迁移为彩装。",
          "基础词条可出现在全部稀有度；进阶词条从紫装开始，传奇词条从红装开始。",
          "附魔在词条未满时新增不重复词条；词条满后会替换最后一条。",
          "武器命中触发类词条只由武器攻击技能触发，并仍会遵守目标免疫。",
          "拆解、附魔、删除词条都会先消耗 100 克朗，再计算材料消耗。"
        ]
      },
      "affixIntro": {
        "en": "The table below is generated from the current equipment affix definitions. Basic affixes show the lowest and highest possible tier ranges; special affixes show fixed values or trigger chances.",
        "zh": "下表由当前装备词条定义生成。基础词条展示最低与最高词条等级的数值区间；特殊词条展示固定数值或触发概率。"
      },
      "rarities": [
        {
          "id": "white",
          "rank": 1,
          "affixCount": 1,
          "color": "#d8d0bd",
          "text": {
            "en": {
              "name": "Common Equipment"
            },
            "zh": {
              "name": "普通装备"
            }
          }
        },
        {
          "id": "green",
          "rank": 2,
          "affixCount": 2,
          "color": "#6fd27d",
          "text": {
            "en": {
              "name": "Fine Equipment"
            },
            "zh": {
              "name": "优良装备"
            }
          }
        },
        {
          "id": "blue",
          "rank": 3,
          "affixCount": 3,
          "color": "#74b7ff",
          "text": {
            "en": {
              "name": "Superior Equipment"
            },
            "zh": {
              "name": "精良装备"
            }
          }
        },
        {
          "id": "purple",
          "rank": 4,
          "affixCount": 4,
          "color": "#9b4dff",
          "text": {
            "en": {
              "name": "Rare Equipment"
            },
            "zh": {
              "name": "珍稀装备"
            }
          }
        },
        {
          "id": "red",
          "rank": 5,
          "affixCount": 4,
          "color": "#ff6b5f",
          "text": {
            "en": {
              "name": "Named Equipment"
            },
            "zh": {
              "name": "名品装备"
            }
          }
        },
        {
          "id": "prismatic",
          "rank": 6,
          "affixCount": 5,
          "color": "#ffd36f",
          "text": {
            "en": {
              "name": "Legendary Equipment"
            },
            "zh": {
              "name": "传奇装备"
            }
          }
        }
      ],
      "affixes": [
        {
          "id": "sharp",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "weapon_damage_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              3,
              5
            ],
            "green": [
              6,
              9
            ],
            "blue": [
              10,
              14
            ],
            "purple": [
              15,
              20
            ],
            "red": [
              21,
              27
            ],
            "prismatic": [
              28,
              35
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Sharp",
              "effect": "Damage",
              "summary": "Damage: Common Equipment +3%~+5% / Legendary Equipment +28%~+35%"
            },
            "zh": {
              "name": "锋利",
              "effect": "伤害",
              "summary": "伤害: 普通装备 +3%~+5% / 传奇装备 +28%~+35%"
            }
          }
        },
        {
          "id": "steady_edge",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "weapon_min_damage_flat",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              7
            ],
            "purple": [
              8,
              10
            ],
            "red": [
              11,
              14
            ],
            "prismatic": [
              15,
              20
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Steady Edge",
              "effect": "Minimum damage",
              "summary": "Minimum damage: Common Equipment +1~+2 / Legendary Equipment +15~+20"
            },
            "zh": {
              "name": "稳刃",
              "effect": "最小伤害",
              "summary": "最小伤害: 普通装备 +1~+2 / 传奇装备 +15~+20"
            }
          }
        },
        {
          "id": "armor_breaker",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "armor_damage_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              6,
              10
            ],
            "green": [
              12,
              16
            ],
            "blue": [
              18,
              23
            ],
            "purple": [
              24,
              30
            ],
            "red": [
              31,
              38
            ],
            "prismatic": [
              40,
              48
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Armor Breaker",
              "effect": "Armor damage",
              "summary": "Armor damage: Common Equipment +6%~+10% / Legendary Equipment +40%~+48%"
            },
            "zh": {
              "name": "破甲",
              "effect": "破甲",
              "summary": "破甲: 普通装备 +6%~+10% / 传奇装备 +40%~+48%"
            }
          }
        },
        {
          "id": "piercing",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "direct_damage_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              2,
              3
            ],
            "green": [
              4,
              5
            ],
            "blue": [
              6,
              8
            ],
            "purple": [
              9,
              11
            ],
            "red": [
              12,
              15
            ],
            "prismatic": [
              16,
              20
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Piercing",
              "effect": "Ignore armor",
              "summary": "Ignore armor: Common Equipment +2%~+3% / Legendary Equipment +16%~+20%"
            },
            "zh": {
              "name": "穿刺",
              "effect": "无视护甲",
              "summary": "无视护甲: 普通装备 +2%~+3% / 传奇装备 +16%~+20%"
            }
          }
        },
        {
          "id": "precise",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "hit_chance",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              6
            ],
            "purple": [
              7,
              8
            ],
            "red": [
              9,
              11
            ],
            "prismatic": [
              12,
              14
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Precise",
              "effect": "Hit chance",
              "summary": "Hit chance: Common Equipment +1~+2 / Legendary Equipment +12~+14"
            },
            "zh": {
              "name": "精准",
              "effect": "命中",
              "summary": "命中: 普通装备 +1~+2 / 传奇装备 +12~+14"
            }
          }
        },
        {
          "id": "headhunter",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "head_chance",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              3,
              4
            ],
            "green": [
              5,
              7
            ],
            "blue": [
              8,
              10
            ],
            "purple": [
              11,
              13
            ],
            "red": [
              14,
              17
            ],
            "prismatic": [
              18,
              21
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Headhunter",
              "effect": "Head hit chance",
              "summary": "Head hit chance: Common Equipment +3~+4 / Legendary Equipment +18~+21"
            },
            "zh": {
              "name": "猎首",
              "effect": "爆头",
              "summary": "爆头: 普通装备 +3~+4 / 传奇装备 +18~+21"
            }
          }
        },
        {
          "id": "shield_smasher",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "shield_damage_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              15,
              25
            ],
            "green": [
              30,
              45
            ],
            "blue": [
              50,
              70
            ],
            "purple": [
              75,
              100
            ],
            "red": [
              110,
              145
            ],
            "prismatic": [
              160,
              200
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Shield Smasher",
              "effect": "Shield damage",
              "summary": "Shield damage: Common Equipment +15%~+25% / Legendary Equipment +160%~+200%"
            },
            "zh": {
              "name": "碎盾",
              "effect": "盾伤",
              "summary": "盾伤: 普通装备 +15%~+25% / 传奇装备 +160%~+200%"
            }
          }
        },
        {
          "id": "light",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "stamina",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              6
            ],
            "purple": [
              7,
              8
            ],
            "red": [
              9,
              11
            ],
            "prismatic": [
              12,
              14
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Light",
              "effect": "Max fatigue",
              "summary": "Max fatigue: Common Equipment +1~+2 / Legendary Equipment +12~+14"
            },
            "zh": {
              "name": "轻盈",
              "effect": "最大疲劳",
              "summary": "最大疲劳: 普通装备 +1~+2 / 传奇装备 +12~+14"
            }
          }
        },
        {
          "id": "sturdy",
          "parts": [
            "weapon"
          ],
          "kind": "basic",
          "effect": "durability_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              10,
              20
            ],
            "green": [
              25,
              40
            ],
            "blue": [
              45,
              65
            ],
            "purple": [
              70,
              100
            ],
            "red": [
              110,
              150
            ],
            "prismatic": [
              160,
              220
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Sturdy",
              "effect": "Durability",
              "summary": "Durability: Common Equipment +10%~+20% / Legendary Equipment +160%~+220%"
            },
            "zh": {
              "name": "坚固",
              "effect": "耐久",
              "summary": "耐久: 普通装备 +10%~+20% / 传奇装备 +160%~+220%"
            }
          }
        },
        {
          "id": "thick_cast",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "armor_max_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              5,
              8
            ],
            "green": [
              10,
              14
            ],
            "blue": [
              16,
              22
            ],
            "purple": [
              24,
              30
            ],
            "red": [
              32,
              40
            ],
            "prismatic": [
              42,
              52
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Thick-Cast",
              "effect": "Armor max",
              "summary": "Armor max: Common Equipment +5%~+8% / Legendary Equipment +42%~+52%"
            },
            "zh": {
              "name": "厚铸",
              "effect": "护甲上限",
              "summary": "护甲上限: 普通装备 +5%~+8% / 传奇装备 +42%~+52%"
            }
          }
        },
        {
          "id": "hard_plate",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "armor_max_flat",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              5,
              10
            ],
            "green": [
              12,
              20
            ],
            "blue": [
              24,
              36
            ],
            "purple": [
              40,
              55
            ],
            "red": [
              60,
              85
            ],
            "prismatic": [
              100,
              100
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Hard Plate",
              "effect": "Armor",
              "summary": "Armor: Common Equipment +5~+10 / Legendary Equipment +100"
            },
            "zh": {
              "name": "坚甲",
              "effect": "护甲",
              "summary": "护甲: 普通装备 +5~+10 / 传奇装备 +100"
            }
          }
        },
        {
          "id": "light_armor",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "stamina",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              6
            ],
            "purple": [
              7,
              8
            ],
            "red": [
              9,
              11
            ],
            "prismatic": [
              12,
              14
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Light Armor",
              "effect": "Max fatigue",
              "summary": "Max fatigue: Common Equipment +1~+2 / Legendary Equipment +12~+14"
            },
            "zh": {
              "name": "轻装",
              "effect": "最大疲劳",
              "summary": "最大疲劳: 普通装备 +1~+2 / 传奇装备 +12~+14"
            }
          }
        },
        {
          "id": "tempered",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "armor_damage_received_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              3,
              4
            ],
            "green": [
              5,
              7
            ],
            "blue": [
              8,
              11
            ],
            "purple": [
              12,
              16
            ],
            "red": [
              17,
              22
            ],
            "prismatic": [
              23,
              28
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Tempered",
              "effect": "Armor damage taken",
              "summary": "Armor damage taken: Common Equipment -3%~-4% / Legendary Equipment -23%~-28%"
            },
            "zh": {
              "name": "韧化",
              "effect": "护甲伤害",
              "summary": "护甲伤害: 普通装备 -3%~-4% / 传奇装备 -23%~-28%"
            }
          }
        },
        {
          "id": "cushioned",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "direct_damage_reduction_flat",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              2,
              2
            ],
            "blue": [
              3,
              4
            ],
            "purple": [
              5,
              6
            ],
            "red": [
              7,
              8
            ],
            "prismatic": [
              9,
              11
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Cushioned",
              "effect": "Direct HP damage",
              "summary": "Direct HP damage: Common Equipment -1 / Legendary Equipment -9~-11"
            },
            "zh": {
              "name": "缓冲",
              "effect": "穿透生命伤害",
              "summary": "穿透生命伤害: 普通装备 -1 / 传奇装备 -9~-11"
            }
          }
        },
        {
          "id": "vented",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "basic",
          "effect": "fatigue_recovery",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              1,
              2
            ],
            "blue": [
              2,
              3
            ],
            "purple": [
              3,
              4
            ],
            "red": [
              4,
              5
            ],
            "prismatic": [
              6,
              6
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Vented",
              "effect": "Fatigue recovery per turn",
              "summary": "Fatigue recovery per turn: Common Equipment +1 / Legendary Equipment +6"
            },
            "zh": {
              "name": "通气",
              "effect": "每回合疲劳恢复",
              "summary": "每回合疲劳恢复: 普通装备 +1 / 传奇装备 +6"
            }
          }
        },
        {
          "id": "clear_sight",
          "parts": [
            "helmet"
          ],
          "kind": "basic",
          "effect": "vision",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              1,
              1
            ],
            "blue": [
              1,
              2
            ],
            "purple": [
              2,
              2
            ],
            "red": [
              2,
              3
            ],
            "prismatic": [
              3,
              3
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Clear Sight",
              "effect": "Vision",
              "summary": "Vision: Common Equipment +1 / Legendary Equipment +3"
            },
            "zh": {
              "name": "明视",
              "effect": "视野",
              "summary": "视野: 普通装备 +1 / 传奇装备 +3"
            }
          }
        },
        {
          "id": "skull_guard",
          "parts": [
            "helmet"
          ],
          "kind": "basic",
          "effect": "head_damage_received_percent",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              3,
              4
            ],
            "green": [
              5,
              7
            ],
            "blue": [
              8,
              11
            ],
            "purple": [
              12,
              16
            ],
            "red": [
              17,
              22
            ],
            "prismatic": [
              23,
              28
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Skull Guard",
              "effect": "Head HP damage",
              "summary": "Head HP damage: Common Equipment -3%~-4% / Legendary Equipment -23%~-28%"
            },
            "zh": {
              "name": "护颅",
              "effect": "头部生命伤害",
              "summary": "头部生命伤害: 普通装备 -3%~-4% / 传奇装备 -23%~-28%"
            }
          }
        },
        {
          "id": "life_lined",
          "parts": [
            "armor"
          ],
          "kind": "basic",
          "effect": "hitpoints",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              2,
              3
            ],
            "green": [
              4,
              5
            ],
            "blue": [
              6,
              8
            ],
            "purple": [
              9,
              11
            ],
            "red": [
              12,
              15
            ],
            "prismatic": [
              16,
              20
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Life-Lined",
              "effect": "Hitpoints",
              "summary": "Hitpoints: Common Equipment +2~+3 / Legendary Equipment +16~+20"
            },
            "zh": {
              "name": "衬命",
              "effect": "生命",
              "summary": "生命: 普通装备 +2~+3 / 传奇装备 +16~+20"
            }
          }
        },
        {
          "id": "iron_face",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "durability_flat",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              4,
              6
            ],
            "green": [
              8,
              12
            ],
            "blue": [
              14,
              20
            ],
            "purple": [
              22,
              30
            ],
            "red": [
              35,
              45
            ],
            "prismatic": [
              60,
              60
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Iron Face",
              "effect": "Durability",
              "summary": "Durability: Common Equipment +4~+6 / Legendary Equipment +60"
            },
            "zh": {
              "name": "铁面",
              "effect": "耐久",
              "summary": "耐久: 普通装备 +4~+6 / 传奇装备 +60"
            }
          }
        },
        {
          "id": "guard_stance",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "melee_defense",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              6
            ],
            "purple": [
              7,
              9
            ],
            "red": [
              10,
              12
            ],
            "prismatic": [
              14,
              16
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Guard Stance",
              "effect": "Melee defense",
              "summary": "Melee defense: Common Equipment +1~+2 / Legendary Equipment +14~+16"
            },
            "zh": {
              "name": "守势",
              "effect": "近防",
              "summary": "近防: 普通装备 +1~+2 / 传奇装备 +14~+16"
            }
          }
        },
        {
          "id": "arrow_cover",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "ranged_defense",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              2,
              3
            ],
            "blue": [
              4,
              5
            ],
            "purple": [
              6,
              7
            ],
            "red": [
              8,
              10
            ],
            "prismatic": [
              11,
              13
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Arrow Cover",
              "effect": "Ranged defense",
              "summary": "Ranged defense: Common Equipment +1 / Legendary Equipment +11~+13"
            },
            "zh": {
              "name": "遮矢",
              "effect": "远防",
              "summary": "远防: 普通装备 +1 / 传奇装备 +11~+13"
            }
          }
        },
        {
          "id": "light_grip",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "stamina",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              2
            ],
            "green": [
              3,
              4
            ],
            "blue": [
              5,
              6
            ],
            "purple": [
              7,
              8
            ],
            "red": [
              9,
              11
            ],
            "prismatic": [
              12,
              14
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Light Grip",
              "effect": "Max fatigue",
              "summary": "Max fatigue: Common Equipment +1~+2 / Legendary Equipment +12~+14"
            },
            "zh": {
              "name": "轻执",
              "effect": "最大疲劳",
              "summary": "最大疲劳: 普通装备 +1~+2 / 传奇装备 +12~+14"
            }
          }
        },
        {
          "id": "shield_saver",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "shield_skill_fatigue_reduction",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              1,
              1
            ],
            "blue": [
              1,
              2
            ],
            "purple": [
              2,
              3
            ],
            "red": [
              3,
              4
            ],
            "prismatic": [
              4,
              5
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Shield Saver",
              "effect": "Shield skill fatigue",
              "summary": "Shield skill fatigue: Common Equipment -1 / Legendary Equipment -4~-5"
            },
            "zh": {
              "name": "省盾",
              "effect": "盾牌技能疲劳",
              "summary": "盾牌技能疲劳: 普通装备 -1 / 传奇装备 -4~-5"
            }
          }
        },
        {
          "id": "wallfast",
          "parts": [
            "shield"
          ],
          "kind": "basic",
          "effect": "shieldwall_defense",
          "minRarityRank": 1,
          "value": null,
          "chance": null,
          "ranges": {
            "white": [
              1,
              1
            ],
            "green": [
              2,
              2
            ],
            "blue": [
              3,
              3
            ],
            "purple": [
              4,
              4
            ],
            "red": [
              5,
              5
            ],
            "prismatic": [
              7,
              7
            ]
          },
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部稀有度"
          },
          "text": {
            "en": {
              "name": "Wallfast",
              "effect": "Shieldwall defense",
              "summary": "Shieldwall defense: Common Equipment +1 / Legendary Equipment +7"
            },
            "zh": {
              "name": "固壁",
              "effect": "盾墙防御",
              "summary": "盾墙防御: 普通装备 +1 / 传奇装备 +7"
            }
          }
        },
        {
          "id": "bleeding_edge",
          "parts": [
            "weapon"
          ],
          "kind": "advanced",
          "effect": "hit_bleed",
          "minRarityRank": 4,
          "value": null,
          "chance": 35,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Bleeding Edge",
              "effect": "Bleed on hit for 2 turns",
              "summary": "Bleed on hit for 2 turns (35%)"
            },
            "zh": {
              "name": "裂脉",
              "effect": "命中流血2回合",
              "summary": "命中流血2回合 (35%)"
            }
          }
        },
        {
          "id": "heavy_shock",
          "parts": [
            "weapon"
          ],
          "kind": "advanced",
          "effect": "hit_daze_stagger",
          "minRarityRank": 4,
          "value": null,
          "chance": 30,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Heavy Shock",
              "effect": "Daze and stagger on hit",
              "summary": "Daze and stagger on hit (30%)"
            },
            "zh": {
              "name": "重震",
              "effect": "命中恍惚+踉跄",
              "summary": "命中恍惚+踉跄 (30%)"
            }
          }
        },
        {
          "id": "breaking_force",
          "parts": [
            "weapon"
          ],
          "kind": "advanced",
          "effect": "hit_debilitate",
          "minRarityRank": 4,
          "value": null,
          "chance": 35,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Breaking Force",
              "effect": "Debilitate on hit",
              "summary": "Debilitate on hit (35%)"
            },
            "zh": {
              "name": "断势",
              "effect": "命中虚弱",
              "summary": "命中虚弱 (35%)"
            }
          }
        },
        {
          "id": "spider_bind",
          "parts": [
            "weapon"
          ],
          "kind": "advanced",
          "effect": "hit_web",
          "minRarityRank": 4,
          "value": null,
          "chance": 25,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Spider Bind",
              "effect": "Web on hit",
              "summary": "Web on hit (25%)"
            },
            "zh": {
              "name": "缚蛛",
              "effect": "命中蛛网",
              "summary": "命中蛛网 (25%)"
            }
          }
        },
        {
          "id": "blood_surge",
          "parts": [
            "weapon"
          ],
          "kind": "advanced",
          "effect": "hit_lifesteal_fatigue",
          "minRarityRank": 4,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Blood Surge",
              "effect": "10% HP damage as healing, recover 5 fatigue on hit",
              "summary": "10% HP damage as healing, recover 5 fatigue on hit"
            },
            "zh": {
              "name": "血涌",
              "effect": "生命伤害10%治疗，命中回5疲劳",
              "summary": "生命伤害10%治疗，命中回5疲劳"
            }
          }
        },
        {
          "id": "rotblood",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "hit_rotblood",
          "minRarityRank": 5,
          "value": null,
          "chance": 35,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Rotblood",
              "effect": "Bleed, poisons, and acid on hit",
              "summary": "Bleed, poisons, and acid on hit (35%)"
            },
            "zh": {
              "name": "腐血",
              "effect": "命中流血+双毒+酸蚀",
              "summary": "命中流血+双毒+酸蚀 (35%)"
            }
          }
        },
        {
          "id": "soul_still",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "hit_stun",
          "minRarityRank": 5,
          "value": null,
          "chance": 25,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Soul-Still",
              "effect": "Stun on hit",
              "summary": "Stun on hit (25%)"
            },
            "zh": {
              "name": "镇魂",
              "effect": "命中眩晕",
              "summary": "命中眩晕 (25%)"
            }
          }
        },
        {
          "id": "disarming",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "hit_disarm",
          "minRarityRank": 5,
          "value": null,
          "chance": 30,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Disarming",
              "effect": "Disarm on hit",
              "summary": "Disarm on hit (30%)"
            },
            "zh": {
              "name": "夺械",
              "effect": "命中缴械",
              "summary": "命中缴械 (30%)"
            }
          }
        },
        {
          "id": "clear_breath",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "hit_clear_fatigue",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Clear Breath",
              "effect": "Recover 30 fatigue after hit",
              "summary": "Recover 30 fatigue after hit"
            },
            "zh": {
              "name": "澄息",
              "effect": "命中后恢复30疲劳",
              "summary": "命中后恢复30疲劳"
            }
          }
        },
        {
          "id": "sleeping",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "hit_sleep",
          "minRarityRank": 5,
          "value": null,
          "chance": 20,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Sleepbound",
              "effect": "Sleep on hit",
              "summary": "Sleep on hit (20%)"
            },
            "zh": {
              "name": "安眠",
              "effect": "命中睡眠",
              "summary": "命中睡眠 (20%)"
            }
          }
        },
        {
          "id": "reach",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "range_bonus",
          "minRarityRank": 5,
          "value": 1,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Reach",
              "effect": "Attack range",
              "summary": "Attack range +1"
            },
            "zh": {
              "name": "延锋",
              "effect": "攻击距离",
              "summary": "攻击距离 +1"
            }
          }
        },
        {
          "id": "battle_rhythm",
          "parts": [
            "weapon"
          ],
          "kind": "legendary",
          "effect": "action_points",
          "minRarityRank": 5,
          "value": 5,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Battle Rhythm",
              "effect": "Max AP",
              "summary": "Max AP +5"
            },
            "zh": {
              "name": "战律",
              "effect": "最大 AP",
              "summary": "最大 AP +5"
            }
          }
        },
        {
          "id": "sealed_blood",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "advanced",
          "effect": "immune_bleeding",
          "minRarityRank": 4,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Sealed Blood",
              "effect": "Immune to bleeding",
              "summary": "Immune to bleeding"
            },
            "zh": {
              "name": "封血",
              "effect": "免疫流血",
              "summary": "免疫流血"
            }
          }
        },
        {
          "id": "war_rune",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "advanced",
          "effect": "bravery_on_morale_check",
          "minRarityRank": 4,
          "value": 15,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "War Rune",
              "effect": "Resolve on morale checks",
              "summary": "Resolve on morale checks +15"
            },
            "zh": {
              "name": "战纹",
              "effect": "士气检查决心",
              "summary": "士气检查决心 +15"
            }
          }
        },
        {
          "id": "living_plate",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "advanced",
          "effect": "armor_regen",
          "minRarityRank": 4,
          "value": 15,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Living Plate",
              "effect": "Armor restored per turn",
              "summary": "Armor restored per turn +15"
            },
            "zh": {
              "name": "活甲",
              "effect": "每回合恢复护甲",
              "summary": "每回合恢复护甲 +15"
            }
          }
        },
        {
          "id": "holy_wall",
          "parts": [
            "helmet",
            "armor"
          ],
          "kind": "legendary",
          "effect": "immune_stun_daze",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Holy Wall",
              "effect": "Immune to stun and daze",
              "summary": "Immune to stun and daze"
            },
            "zh": {
              "name": "圣壁",
              "effect": "免疫眩晕和恍惚",
              "summary": "免疫眩晕和恍惚"
            }
          }
        },
        {
          "id": "immovable",
          "parts": [
            "armor"
          ],
          "kind": "legendary",
          "effect": "immune_movement",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Immovable",
              "effect": "Immune to knockback, pulls, and roots",
              "summary": "Immune to knockback, pulls, and roots"
            },
            "zh": {
              "name": "不动",
              "effect": "免疫击退/拉拽/定身",
              "summary": "免疫击退/拉拽/定身"
            }
          }
        },
        {
          "id": "iron_brow",
          "parts": [
            "helmet"
          ],
          "kind": "legendary",
          "effect": "immune_headshot",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Iron Brow",
              "effect": "Immune to head hits",
              "summary": "Immune to head hits"
            },
            "zh": {
              "name": "铁额",
              "effect": "免疫爆头",
              "summary": "免疫爆头"
            }
          }
        },
        {
          "id": "blade_return",
          "parts": [
            "armor"
          ],
          "kind": "legendary",
          "effect": "damage_reflect",
          "minRarityRank": 5,
          "value": 10,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Blade Return",
              "effect": "Damage reflected",
              "summary": "Damage reflected +10"
            },
            "zh": {
              "name": "返刃",
              "effect": "反弹伤害",
              "summary": "反弹伤害 +10"
            }
          }
        },
        {
          "id": "regeneration",
          "parts": [
            "armor"
          ],
          "kind": "legendary",
          "effect": "hitpoint_regen",
          "minRarityRank": 5,
          "value": 5,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Regeneration",
              "effect": "Hitpoints per turn",
              "summary": "Hitpoints per turn +5"
            },
            "zh": {
              "name": "再生",
              "effect": "每回合生命",
              "summary": "每回合生命 +5"
            }
          }
        },
        {
          "id": "quiet_dream",
          "parts": [
            "helmet"
          ],
          "kind": "legendary",
          "effect": "immune_sleep_charm_horror",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Quiet Dream",
              "effect": "Immune to sleep, charm, and horror",
              "summary": "Immune to sleep, charm, and horror"
            },
            "zh": {
              "name": "静梦",
              "effect": "免疫睡眠/魅惑/惊骇",
              "summary": "免疫睡眠/魅惑/惊骇"
            }
          }
        },
        {
          "id": "arrow_meet",
          "parts": [
            "shield"
          ],
          "kind": "advanced",
          "effect": "ranged_damage_reduction",
          "minRarityRank": 4,
          "value": 15,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Arrow Meet",
              "effect": "Ranged damage",
              "summary": "Ranged damage -15%"
            },
            "zh": {
              "name": "迎矢",
              "effect": "远程伤害",
              "summary": "远程伤害 -15%"
            }
          }
        },
        {
          "id": "holdfast",
          "parts": [
            "shield"
          ],
          "kind": "advanced",
          "effect": "shieldwall_shield_damage_reduction",
          "minRarityRank": 4,
          "value": 50,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Advanced",
            "zh": "进阶"
          },
          "unlockText": {
            "en": "Rare Equipment+",
            "zh": "珍稀装备+"
          },
          "text": {
            "en": {
              "name": "Holdfast",
              "effect": "Shield damage during Shieldwall",
              "summary": "Shield damage during Shieldwall -50%"
            },
            "zh": {
              "name": "固守",
              "effect": "盾墙时盾伤",
              "summary": "盾墙时盾伤 -50%"
            }
          }
        },
        {
          "id": "golden_wall",
          "parts": [
            "shield"
          ],
          "kind": "legendary",
          "effect": "shieldwall_extra_turn",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Golden Wall",
              "effect": "Shieldwall +1 turn",
              "summary": "Shieldwall +1 turn"
            },
            "zh": {
              "name": "金城",
              "effect": "盾墙+1回合",
              "summary": "盾墙+1回合"
            }
          }
        },
        {
          "id": "unbroken",
          "parts": [
            "shield"
          ],
          "kind": "legendary",
          "effect": "shield_unbreakable",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Unbroken",
              "effect": "Shield cannot break",
              "summary": "Shield cannot break"
            },
            "zh": {
              "name": "不碎",
              "effect": "盾牌不破",
              "summary": "盾牌不破"
            }
          }
        },
        {
          "id": "shock_aegis",
          "parts": [
            "shield"
          ],
          "kind": "legendary",
          "effect": "shield_hit_daze",
          "minRarityRank": 5,
          "value": null,
          "chance": 35,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Shock Aegis",
              "effect": "Daze attacker when blocking melee",
              "summary": "Daze attacker when blocking melee (35%)"
            },
            "zh": {
              "name": "震慑",
              "effect": "格挡近战使攻击者恍惚",
              "summary": "格挡近战使攻击者恍惚 (35%)"
            }
          }
        },
        {
          "id": "counter_guard",
          "parts": [
            "shield"
          ],
          "kind": "legendary",
          "effect": "shield_counter_guard",
          "minRarityRank": 5,
          "value": null,
          "chance": null,
          "ranges": {},
          "kindText": {
            "en": "Legendary",
            "zh": "传奇"
          },
          "unlockText": {
            "en": "Named Equipment+",
            "zh": "名品装备+"
          },
          "text": {
            "en": {
              "name": "Counter Guard",
              "effect": "First block each turn restores 2 AP/10 fatigue",
              "summary": "First block each turn restores 2 AP/10 fatigue"
            },
            "zh": {
              "name": "反制",
              "effect": "每回合首次格挡回2AP/10疲劳",
              "summary": "每回合首次格挡回2AP/10疲劳"
            }
          }
        }
      ]
    }
  },
  "valkyries": [
    {
      "id": "saber",
      "order": 1,
      "skinId": "saber_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/saber_card.png",
        "skin": "assets/valkyries/saber_skin_preview.png",
        "trait": "assets/traits/saber_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Saber",
          "backgroundName": "Valkyrie Saber",
          "backgroundDescription": "Saber's true name is Artoria Pendragon, the legendary King of Knights who takes the field as a sword-bearing Heroic Spirit with Excalibur in hand. Calm, disciplined, and bound to her vows, she places the duty to protect her people above her own heart.",
          "traitName": "Saber Trait",
          "traitDescription": "Saber's kingly resolve increases her Resolve by 20.",
          "traitTooltip": [
            "Resolve +20."
          ]
        },
        "zh": {
          "name": "Saber",
          "backgroundName": "女武神 Saber",
          "backgroundDescription": "Saber 真名为阿尔托莉雅·潘德拉贡，是传说中的骑士王，持圣剑 Excalibur 作为剑士英灵参战。她沉着克制、重视誓约与王道，在战场上总把个人情感压在守护人民的责任之后。",
          "traitName": "Saber 特性",
          "traitDescription": "Saber 的骑士王气魄使她的决心提高 20。",
          "traitTooltip": [
            "决心 +20。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "saber_invisible_air",
          "icon": "saber_invisible_air",
          "image": "assets/skills/saber_invisible_air.png",
          "text": {
            "en": {
              "name": "Invisible Air",
              "description": "Saber veils Excalibur in compressed wind, hiding the sword's reach and angle from her enemies.",
              "tooltip": [
                "All attacks ignore the defense bonus granted by shields."
              ]
            },
            "zh": {
              "name": "风王结界",
              "description": "Saber 以压缩风缠绕圣剑，隐藏剑身长度与轨迹，使敌人难以凭盾牌判断格挡角度。",
              "tooltip": [
                "所有攻击都会无视盾牌提供的防御加成。"
              ]
            }
          }
        },
        "active": {
          "key": "saber_excalibur",
          "icon": "saber_excalibur",
          "image": "assets/skills/saber_excalibur.png",
          "text": {
            "en": {
              "name": "Sword of Promised Victory",
              "description": "Release Excalibur's true name and fire a holy beam in a straight line. Can be used once per battle, costs no AP or Fatigue, and deals fixed damage equal to 100 plus 50% of Resolve.",
              "tooltip": [
                "Has +20% chance to hit.",
                "Costs no AP or Fatigue. Affects enemies in a straight line up to 64 tiles and can be used once per battle."
              ]
            },
            "zh": {
              "name": "胜利誓约之剑",
              "description": "解放 Excalibur 的真名，沿直线释放圣剑光束。每场战斗只能使用一次，不消耗 AP 和疲劳，造成固定伤害：100 加上决心的 50%。",
              "tooltip": [
                "命中率 +20%。",
                "不消耗 AP 和疲劳。影响最多 64 格直线上的敌人，每场战斗只能使用一次。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "silver_wolf",
      "order": 2,
      "skinId": "silver_wolf_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/silver_wolf_card.png",
        "skin": "assets/valkyries/silver_wolf_skin_preview.png",
        "trait": "assets/traits/silver_wolf_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Silver Wolf",
          "backgroundName": "Valkyrie Silver Wolf",
          "backgroundDescription": "Silver Wolf is a Stellaron Hunter and genius hacker who treats the universe like a game waiting to be cleared. Carefree and provocative on the surface, she can edit reality through aether hacking and still executes Elio's scripts with unnerving precision.",
          "traitName": "Silver Wolf Trait",
          "traitDescription": "Silver Wolf's aether editing increases Melee Skill by 15, Ranged Skill by 15, Initiative by 30, and maximum Action Points by 6.",
          "traitTooltip": [
            "Melee Skill +15.",
            "Ranged Skill +15.",
            "Initiative +30 and maximum AP +6."
          ]
        },
        "zh": {
          "name": "银狼",
          "backgroundName": "女武神银狼",
          "backgroundDescription": "银狼是星核猎手成员兼天才黑客，把宇宙视为一场可被通关的游戏。她擅长以以太编辑改写现实，性格散漫挑衅，却总能在关键任务中精准执行艾利欧的剧本。",
          "traitName": "银狼特性",
          "traitDescription": "银狼的以太编辑让她的近战技能提高 15，远程技能提高 15，主动值提高 30，最大行动点提高 6。",
          "traitTooltip": [
            "近战技能 +15。",
            "远程技能 +15。",
            "主动值 +30，最大 AP +6。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "silver_wolf_weakness_implant",
          "icon": "silver_wolf_weakness_implant",
          "image": "assets/skills/silver_wolf_weakness_implant.png",
          "text": {
            "en": {
              "name": "Weakness Implant",
              "description": "Silver Wolf tags every enemy she hits with an exploitable weakness in their defenses and combat routines.",
              "tooltip": [
                "On hit against an enemy, applies a stacking one-turn debuff: -10 Melee Skill, -10 Ranged Skill, -10 Melee Defense, -10 Ranged Defense, and +10% damage received per stack."
              ]
            },
            "zh": {
              "name": "漏洞植入",
              "description": "银狼在每次命中敌人时植入可被利用的漏洞，削弱敌人的攻防逻辑。",
              "tooltip": [
                "命中敌人时施加可叠加、持续 1 回合的减益：每层 -10 近战技能、-10 远程技能、-10 近战防御、-10 远程防御，并使目标受到的所有伤害 +10%。"
              ]
            }
          }
        },
        "active": {
          "key": "silver_wolf_system_crash",
          "icon": "silver_wolf_system_crash",
          "image": "assets/skills/silver_wolf_system_crash.png",
          "text": {
            "en": {
              "name": "System Crash",
              "description": "Silver Wolf overloads one enemy within 5 tiles with a focused hack. Can be used once per battle, costs no AP or Fatigue, stuns the target, and strikes 5 times for fixed low damage. Each hit can trigger Weakness Implant.",
              "tooltip": [
                "Each strike has +100 chance to hit.",
                "Performs 5 strikes, each dealing fixed 10 damage before the target's implanted weakness modifiers.",
                "Can be used once per battle, costs no AP or Fatigue, stuns the selected enemy, and each successful strike can apply Weakness Implant."
              ]
            },
            "zh": {
              "name": "系统崩溃",
              "description": "银狼对 5 格内的一名敌人发动集中骇入。每场战斗只能使用一次，不消耗 AP 和疲劳，眩晕目标，并进行 5 次低伤害固定攻击。每次命中都可以触发漏洞植入。",
              "tooltip": [
                "每次攻击命中率 +100。",
                "进行 5 次攻击，每次造成 10 点固定伤害，随后会受到目标身上漏洞层数的伤害修正。",
                "每场战斗只能使用一次，不消耗 AP 和疲劳，眩晕选中的敌人，并且每次命中都可以施加漏洞植入。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "jeanne_alter",
      "order": 3,
      "skinId": "jeanne_alter_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/jeanne_alter_card.png",
        "skin": "assets/valkyries/jeanne_alter_skin_preview.png",
        "trait": "assets/traits/jeanne_alter_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Jeanne Alter",
          "backgroundName": "Valkyrie Jeanne Alter",
          "backgroundDescription": "Jeanne Alter is an Avenger shaped by the Holy Grail from the hatred imagined around Saint Jeanne's betrayal and execution. Once feared as the Dragon Witch of France, she is proud and cutting, yet her fury never stops searching for proof that she truly exists.",
          "traitName": "Jeanne Alter Trait",
          "traitDescription": "Jeanne Alter's Avenger nature increases Resolve by 15, Melee Skill by 5, and Initiative by 10.",
          "traitTooltip": [
            "Resolve +15.",
            "Melee Skill +5 and Initiative +10."
          ]
        },
        "zh": {
          "name": "贞德 Alter",
          "backgroundName": "女武神贞德 Alter",
          "backgroundDescription": "贞德 Alter 是圣杯塑造出的复仇者，源自人们对圣女贞德被背叛与焚毁的怨念想象。她曾以龙之魔女之名向法兰西举起叛旗，傲慢尖刻，却始终在怒火中追问自己存在的意义。",
          "traitName": "贞德 Alter 特性",
          "traitDescription": "贞德 Alter 的复仇者本质使她的决心提高 15，近战技能提高 5，主动值提高 10。",
          "traitTooltip": [
            "决心 +15。",
            "近战技能 +5，主动值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "jeanne_alter_dragon_witch",
          "icon": "jeanne_alter_dragon_witch",
          "image": "assets/skills/jeanne_alter_dragon_witch.png",
          "text": {
            "en": {
              "name": "Dragon Witch",
              "description": "Jeanne Alter twists fear into a weapon. Her attacks are more accurate and more punishing against enemies whose morale is already wavering, breaking, or fleeing, and damaging attacks force an additional mental morale check.",
              "tooltip": [
                "Attacks against wavering, breaking, or fleeing enemies gain +10 chance to hit.",
                "Attacks against wavering, breaking, or fleeing enemies deal +15% damage.",
                "Damaging attacks force one additional mental morale check with a -10 penalty."
              ]
            },
            "zh": {
              "name": "龙之魔女",
              "description": "贞德 Alter 将恐惧化为武器。攻击士气已经动摇、崩溃或逃跑的敌人时更加精准也更加残酷，并且造成伤害的攻击会额外迫使目标进行一次精神士气检定。",
              "tooltip": [
                "攻击动摇、崩溃或逃跑的敌人时命中率 +10。",
                "攻击动摇、崩溃或逃跑的敌人时造成 +15% 伤害。",
                "造成伤害的攻击会额外触发一次精神士气检定，并给予 -10 惩罚。"
              ]
            }
          }
        },
        "active": {
          "key": "jeanne_alter_la_grondement_du_haine",
          "icon": "jeanne_alter_la_grondement_du_haine",
          "image": "assets/skills/jeanne_alter_la_grondement_du_haine.png",
          "text": {
            "en": {
              "name": "La Grondement Du Haine",
              "description": "Jeanne Alter releases a wave of blackened hatred. Can be used once per battle, costs no AP or Fatigue, deals no damage, and forces enemies within 4 tiles to make 3 mental morale checks with a fixed penalty.",
              "tooltip": [
                "Affects enemies within 4 tiles. Allies are not affected.",
                "Each enemy makes 3 mental morale checks with a -20 penalty.",
                "Deals no damage and costs no AP or Fatigue."
              ]
            },
            "zh": {
              "name": "咆哮吧，吾之愤怒",
              "description": "贞德 Alter 释放漆黑怨火。每场战斗只能使用一次，不消耗 AP 和疲劳，不造成伤害，并迫使 4 格内敌人进行 3 次带固定惩罚的精神士气检定。",
              "tooltip": [
                "影响 4 格内的敌人，不会影响友方。",
                "每名敌人连续进行 3 次精神士气检定，并受到 -20 惩罚。",
                "不造成伤害，也不消耗 AP 和疲劳。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "jingliu",
      "order": 4,
      "skinId": "jingliu_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/jingliu_card.png",
        "skin": "assets/valkyries/jingliu_skin_preview.png",
        "trait": "assets/traits/jingliu_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Jingliu",
          "backgroundName": "Valkyrie Jingliu",
          "backgroundDescription": "Jingliu was once the sword champion of the Xianzhou Luofu, one of the High-Cloud Quintet, and Jing Yuan's master. After falling to mara, she veils her eyes to restrain herself and brings a moon-cold sword intent burdened by centuries of guilt.",
          "traitName": "Jingliu Trait",
          "traitDescription": "Jingliu's stainless sword heart increases Resolve by 10, Melee Skill by 5, Melee Defense by 5, and Initiative by 10.",
          "traitTooltip": [
            "Resolve +10.",
            "Melee Skill +5.",
            "Melee Defense +5 and Initiative +10."
          ]
        },
        "zh": {
          "name": "镜流",
          "backgroundName": "女武神镜流",
          "backgroundDescription": "镜流曾是仙舟罗浮剑首、云上五骁之一，也是景元的师父。堕入魔阴后她以黑纱遮目压制失控，将寒月般的剑意与千年罪咎一同带上战场。",
          "traitName": "镜流特性",
          "traitDescription": "镜流的澄澈剑心使她的决心提高 10，近战技能提高 5，近战防御提高 5，主动值提高 10。",
          "traitTooltip": [
            "决心 +10。",
            "近战技能 +5。",
            "近战防御 +5，主动值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "jingliu_cold_moon_sword_heart",
          "icon": "jingliu_cold_moon_sword_heart",
          "image": "assets/skills/jingliu_cold_moon_sword_heart.png",
          "text": {
            "en": {
              "name": "Cold Moon Sword Heart",
              "description": "Jingliu's sword intent gathers moonlight with every clean strike. Each successful attack grants one stack of Moonlight, up to 3 stacks.",
              "tooltip": [
                "Each hit on an enemy grants 1 stack of Moonlight, up to 3 stacks. Each stack grants +5% damage and +5% melee armor penetration.",
                "At 3 stacks, Jingliu gains +10 chance to hit and restores 4 AP whenever she kills an enemy."
              ]
            },
            "zh": {
              "name": "寒月剑心",
              "description": "镜流的剑意会在每一次精准斩击中凝成月华。每次攻击命中敌人时，获得 1 层月华，最多 3 层。",
              "tooltip": [
                "每次命中敌人获得 1 层月华，最多 3 层。每层月华提供 +5% 伤害和 +5% 近战护甲穿透。",
                "月华达到 3 层时，镜流获得 +10 命中率，并且每次击杀敌人后回复 4 AP。"
              ]
            }
          }
        },
        "active": {
          "key": "jingliu_moonflower_birth_and_death",
          "icon": "jingliu_moonflower_birth_and_death",
          "image": "assets/skills/jingliu_moonflower_birth_and_death.png",
          "text": {
            "en": {
              "name": "Moonflower Birth and Death",
              "description": "Jingliu releases a moon-cold finishing slash. This attack can be used once per battle, costs no AP or Fatigue, deals 200% weapon damage, and restores AP to maximum if it kills the target.",
              "tooltip": [
                "Can be used once per battle and costs no AP or Fatigue.",
                "Has +25 chance to hit.",
                "Deals 200% weapon damage.",
                "Adds +25% melee armor penetration.",
                "If this attack kills the target, Jingliu's AP is restored to maximum."
              ]
            },
            "zh": {
              "name": "昙华生灭",
              "description": "镜流释放寒月般的终结斩击。该攻击每场战斗只能使用一次，不消耗 AP 和疲劳，造成 200% 武器伤害，若击杀目标则将 AP 恢复到最大值。",
              "tooltip": [
                "每场战斗只能使用一次，不消耗 AP 和疲劳。",
                "命中率 +25。",
                "造成 200% 武器伤害。",
                "额外获得 +25% 近战护甲穿透。",
                "如果该攻击击杀目标，镜流的 AP 恢复到最大值。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "skirk",
      "order": 5,
      "skinId": "skirk_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/skirk_card.png",
        "skin": "assets/valkyries/skirk_skin_preview.png",
        "trait": "assets/traits/skirk_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Skirk",
          "backgroundName": "Valkyrie Skirk",
          "backgroundDescription": "Skirk is a mysterious swordswoman from the edge of the Abyss who trained Tartaglia after he fell into its depths. Laconic and severe, she respects only strength capable of crossing the borders between life, death, and worlds.",
          "traitName": "Skirk Trait",
          "traitDescription": "Skirk's abyssal discipline increases Melee Skill by 15, Melee Defense by 10, Initiative by 20, and Resolve by 15. She is effectively immune to mental fear attacks.",
          "traitTooltip": [
            "Melee Skill +15.",
            "Melee Defense +10.",
            "Initiative +20 and Resolve +15.",
            "Effectively immune to mental fear attacks."
          ]
        },
        "zh": {
          "name": "丝柯克",
          "backgroundName": "女武神丝柯克",
          "backgroundDescription": "丝柯克是来自深渊边界的神秘剑士，曾在达达利亚坠入深渊时收他为徒。她寡言冷峻，只尊重足以跨越生死与世界边界的力量。",
          "traitName": "丝柯克特性",
          "traitDescription": "丝柯克的深渊剑师修行使她的近战技能提高 15，近战防御提高 10，主动值提高 20，决心提高 15，并近乎免疫精神恐惧攻击。",
          "traitTooltip": [
            "近战技能 +15。",
            "近战防御 +10。",
            "主动值 +20，决心 +15。",
            "近乎免疫精神恐惧攻击。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "skirk_abyss_swordsmanship",
          "icon": "skirk_abyss_swordsmanship",
          "image": "assets/skills/skirk_abyss_swordsmanship.png",
          "text": {
            "en": {
              "name": "Abyss Swordsmanship",
              "description": "Skirk's swordplay ignores ordinary defensive habits and cuts directly at an enemy's ability to keep fighting.",
              "tooltip": [
                "Melee weapon attacks ignore the defense bonus granted by shields.",
                "Melee weapon hits disarm the target for 1 turn."
              ]
            },
            "zh": {
              "name": "深渊剑术",
              "description": "丝柯克的剑术无视常规防御习惯，直接斩向敌人继续战斗的能力。",
              "tooltip": [
                "近战武器攻击无视盾牌提供的防御加成。",
                "近战武器攻击命中后，使目标缴械 1 回合。"
              ]
            }
          }
        },
        "active": {
          "key": "skirk_abyssal_flash",
          "icon": "skirk_abyssal_flash",
          "image": "assets/skills/skirk_abyssal_flash.png",
          "text": {
            "en": {
              "name": "Abyssal Flash",
              "description": "Skirk tears open a short-lived abyssal edge and strikes one enemy within 5 tiles. Costs no AP or Fatigue, can be used once per battle, deals fixed damage, and stuns the target on a hit.",
              "tooltip": [
                "Deals 120 fixed damage, with 30% ignoring armor and 150% armor damage.",
                "Has +50 chance to hit.",
                "Costs no AP or Fatigue. On a hit, stuns the target for 1 turn."
              ]
            },
            "zh": {
              "name": "深渊一闪",
              "description": "丝柯克撕开短暂的深渊剑痕，攻击 5 格内的一名敌人。不消耗 AP 和疲劳，每场战斗只能使用一次，造成固定伤害，并在命中时眩晕目标。",
              "tooltip": [
                "造成 120 点固定伤害，其中 30% 无视护甲，并造成 150% 护甲伤害。",
                "命中率 +50。",
                "不消耗 AP 和疲劳。命中后眩晕目标 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "jinhsi",
      "order": 6,
      "skinId": "jinhsi_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "RangedDefense": 5,
        "MeleeDefense": 5,
        "Initiative": 10
      },
      "images": {
        "card": "assets/valkyries/jinhsi_card.png",
        "skin": "assets/valkyries/jinhsi_skin_preview.png",
        "trait": "assets/traits/jinhsi_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Jinhsi",
          "backgroundName": "Valkyrie Jinhsi",
          "backgroundDescription": "Jinhsi is the Magistrate of Jinzhou and a Resonator bound to the Sentinel Jue. Gentle and composed in manner, she carries the fate of a city and the weight of time itself on shoulders far younger than her office suggests.",
          "traitName": "Jinhsi Trait",
          "traitDescription": "Jinhsi's authority as Magistrate grants Resolve +20, Ranged Defense +5, Melee Defense +5, and Initiative +10.",
          "traitTooltip": [
            "Resolve +20, Ranged Defense +5, Melee Defense +5, Initiative +10."
          ]
        },
        "zh": {
          "name": "今汐",
          "backgroundName": "女武神今汐",
          "backgroundDescription": "今汐是今州令尹，也是岁主角的共鸣者。她外表温和克制，却肩负守城与承接时间权能的命运，在危局中以年轻之身承担一城兴亡。",
          "traitName": "今汐特性",
          "traitDescription": "今汐身为令尹的守城意志使她获得决心 +20、远程防御 +5、近战防御 +5、主动值 +10。",
          "traitTooltip": [
            "决心 +20，远程防御 +5，近战防御 +5，主动值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "jinhsi_edict_guard",
          "icon": "jinhsi_edict_guard",
          "image": "assets/skills/jinhsi_edict_guard.png",
          "text": {
            "en": {
              "name": "Edict Guard",
              "description": "Jinhsi holds the line with calm authority, gaining fixed defenses and unconditional Resolve.",
              "tooltip": [
                "Melee Defense +10 and Ranged Defense +10.",
                "Resolve +20."
              ]
            },
            "zh": {
              "name": "守城令",
              "description": "今汐以令尹的沉着稳住战线，获得固定双防，并无条件提高决心。",
              "tooltip": [
                "近战防御 +10，远程防御 +10。",
                "决心 +20。"
              ]
            }
          }
        },
        "active": {
          "key": "jinhsi_temporal_stasis",
          "icon": "jinhsi_temporal_stasis",
          "image": "assets/skills/jinhsi_temporal_stasis.png",
          "text": {
            "en": {
              "name": "Temporal Stasis",
              "description": "Jinhsi condenses the flow of time around one enemy within 5 tiles. The target takes no damage, but loses all AP and is Dazed for 1 turn.",
              "tooltip": [
                "Sets the target's AP to 0.",
                "Applies Dazed for 1 turn and deals no damage."
              ]
            },
            "zh": {
              "name": "岁时凝滞",
              "description": "今汐凝滞 5 格内一名敌人的岁时流转。目标不受伤害，但 AP 立即变为 0，并茫然 1 回合。",
              "tooltip": [
                "目标 AP 立即变为 0。",
                "施加茫然 1 回合，不造成伤害。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "yae_miko",
      "order": 7,
      "skinId": "yae_miko_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 5,
        "Initiative": 20,
        "Bravery": 10,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/yae_miko_card.png",
        "skin": "assets/valkyries/yae_miko_skin_preview.png",
        "trait": "assets/traits/yae_miko_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Yae Miko",
          "backgroundName": "Valkyrie Yae Miko",
          "backgroundDescription": "Yae Miko is the Guuji of the Grand Narukami Shrine, familiar of the Electro Archon, and editor-in-chief of Yae Publishing House. Clever, playful, and fond of schemes, she hides a kitsune's thousand-year insight behind teasing smiles.",
          "traitName": "Yae Miko Trait",
          "traitDescription": "Yae Miko's kitsune wit grants Ranged Skill +5, Initiative +20, Resolve +10, and Ranged Defense +5.",
          "traitTooltip": [
            "Ranged Skill +5, Initiative +20, Resolve +10, Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "八重神子",
          "backgroundName": "女武神八重神子",
          "backgroundDescription": "八重神子是鸣神大社宫司、雷神眷属，也是八重堂的主编。她聪慧狡黠、善于布局，常以玩笑和轻慢掩住千年狐族的洞察。",
          "traitName": "八重神子特性",
          "traitDescription": "八重神子的鸣神狐智使她获得远程技能 +5、主动值 +20、决心 +10、远程防御 +5。",
          "traitTooltip": [
            "远程技能 +5，主动值 +20，决心 +10，远程防御 +5。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "yae_miko_kitsune_thunder",
          "icon": "yae_miko_kitsune_thunder",
          "image": "assets/skills/yae_miko_kitsune_thunder.png",
          "text": {
            "en": {
              "name": "Kitsune Thunder",
              "description": "Yae Miko threads lightning through her ranged attacks, then calls down extra thunder on hit.",
              "tooltip": [
                "Ranged attacks gain +10 chance to hit.",
                "Ranged attacks deal +10% damage.",
                "On hit, deals 30 extra fixed damage that ignores armor."
              ]
            },
            "zh": {
              "name": "狐雷",
              "description": "八重神子将狐雷缠入远程攻击，并在命中后引落额外雷伤。",
              "tooltip": [
                "远程攻击命中 +10。",
                "远程攻击伤害 +10%。",
                "命中敌人后额外造成 30 点无视护甲的固定伤害。"
              ]
            }
          }
        },
        "active": {
          "key": "yae_miko_tenko_thunder_domain",
          "icon": "yae_miko_tenko_thunder_domain",
          "image": "assets/skills/yae_miko_tenko_thunder_domain.png",
          "text": {
            "en": {
              "name": "Tenko Thunder Domain",
              "description": "Yae Miko calls down a focused lightning strike against one enemy 2 to 6 tiles away.",
              "tooltip": [
                "Has +25 chance to hit.",
                "Deals 300 fixed damage, 25% ignoring armor, and 125% armor damage.",
                "No longer applies Dazed."
              ]
            },
            "zh": {
              "name": "天狐雷域",
              "description": "八重神子对 2 到 6 格内一名敌人降下集中的天狐雷击。",
              "tooltip": [
                "命中 +25。",
                "造成 300 固定伤害，25% 无视护甲，造成 125% 护甲伤害。",
                "不再施加茫然。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "chisaki",
      "order": 8,
      "skinId": "chisaki_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 15,
        "Initiative": 20,
        "Stamina": 10,
        "Bravery": 10
      },
      "images": {
        "card": "assets/valkyries/chisaki_card.png",
        "skin": "assets/valkyries/chisaki_skin_preview.png",
        "trait": "assets/traits/chisaki_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Chisaki",
          "backgroundName": "Valkyrie Chisaki",
          "backgroundDescription": "Chisaki, born Kuchiba Chisaki, is a composed Ashihara student of the Stellareum Academy who was once rescued by the Rover from Honami City. Her ties to the Black Shores and the late flower-bearer Sumika leave quiet memories of loss and responsibility beneath her calm.",
          "traitName": "Chisaki Trait",
          "traitDescription": "Chisaki's black-shore edge grants Melee Skill +15, Initiative +20, Fatigue +10, and Resolve +10.",
          "traitTooltip": [
            "Melee Skill +15, Initiative +20, Fatigue +10, Resolve +10."
          ]
        },
        "zh": {
          "name": "千咲",
          "backgroundName": "女武神千咲",
          "backgroundDescription": "千咲，本名朽叶千咲，是出身苇原、就读星炬学院的冷静学生，曾被漂泊者从穗波市救出。她与黑海岸和已故执花菫香有牵连，沉稳外表下藏着对失去与责任的记忆。",
          "traitName": "千咲特性",
          "traitDescription": "千咲的黑岸凶刃使她获得近战技能 +15、主动值 +20、疲劳值 +10、决心 +10。",
          "traitTooltip": [
            "近战技能 +15，主动值 +20，疲劳值 +10，决心 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "chisaki_edge_followup",
          "icon": "chisaki_edge_followup",
          "image": "assets/skills/chisaki_edge_followup.png",
          "text": {
            "en": {
              "name": "Edge Follow-up",
              "description": "Chisaki follows every clean melee hit with a brutal extra cut.",
              "tooltip": [
                "Every melee hit deals 30 extra direct hitpoint damage, or 50 if the target is below 50% hitpoints.",
                "Killing an enemy with a melee attack restores 4 AP."
              ]
            },
            "zh": {
              "name": "凶刃追击",
              "description": "千咲每次近战命中后，都会追加一次干脆的凶刃补刀。",
              "tooltip": [
                "每次近战命中额外造成 30 点直接生命伤害；若目标生命低于 50%，提高到 50。",
                "近战攻击击杀敌人后恢复 4 AP。"
              ]
            }
          }
        },
        "active": {
          "key": "chisaki_blood_slash",
          "icon": "chisaki_blood_slash",
          "image": "assets/skills/chisaki_blood_slash.png",
          "text": {
            "en": {
              "name": "Blood Slash",
              "description": "Chisaki commits to a decisive adjacent melee strike, seeking a single clean kill.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 220% weapon damage.",
                "Gains +25% armor penetration.",
                "If this attack kills the target, AP is restored to maximum."
              ]
            },
            "zh": {
              "name": "血斩",
              "description": "千咲对相邻敌人发动决断斩击，追求一次干净的斩杀。",
              "tooltip": [
                "命中 +30。",
                "造成 220% 武器伤害。",
                "额外获得 +25% 护甲穿透。",
                "如果击杀目标，AP 恢复到最大值。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "kafka",
      "order": 9,
      "skinId": "kafka_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "RangedSkill": 10,
        "Initiative": 10,
        "MentalMorale": 20
      },
      "images": {
        "card": "assets/valkyries/kafka_card.png",
        "skin": "assets/valkyries/kafka_skin_preview.png",
        "trait": "assets/traits/kafka_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Kafka",
          "backgroundName": "Valkyrie Kafka",
          "backgroundDescription": "Kafka is a core member of the Stellaron Hunters, skilled in Spirit Whisper and mental control, and one of the first hands to set the Trailblazer's fate in motion. Elegant, fearless, and unhurried, she often delivers the most dangerous scripts in the gentlest voice.",
          "traitName": "Kafka Trait",
          "traitDescription": "Kafka's Spirit Whisper grants Resolve +20, Ranged Skill +10, Initiative +10, and +20 resistance to mental morale checks.",
          "traitTooltip": [
            "Resolve +20, Ranged Skill +10, Initiative +10, +20 resistance to mental morale checks."
          ]
        },
        "zh": {
          "name": "卡芙卡",
          "backgroundName": "女武神卡芙卡",
          "backgroundDescription": "卡芙卡是星核猎手的核心成员，擅长灵言与精神操控，是开拓者命运开端的引线之一。她优雅从容、几乎不知恐惧，常以温柔口吻推动最危险的剧本。",
          "traitName": "卡芙卡特性",
          "traitDescription": "卡芙卡的灵言猎手本能使她获得决心 +20、远程技能 +10、主动值 +10，并提高精神士气检定抗性 20。",
          "traitTooltip": [
            "决心 +20，远程技能 +10，主动值 +10，精神士气检定抗性 +20。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "kafka_spirit_whisper",
          "icon": "kafka_spirit_whisper",
          "image": "assets/skills/kafka_spirit_whisper.png",
          "text": {
            "en": {
              "name": "Spirit Whisper",
              "description": "Kafka plants a quiet command in the mind of every enemy she hits.",
              "tooltip": [
                "Every hit forces one mental morale check with a -15 penalty, unless the target is immune."
              ]
            },
            "zh": {
              "name": "温柔暗示",
              "description": "卡芙卡在被命中的敌人意识中植入温柔暗示。",
              "tooltip": [
                "每次命中敌人都会让目标进行一次 -15 精神士气检定；免疫士气者不受影响。"
              ]
            }
          }
        },
        "active": {
          "key": "kafka_listen_to_me",
          "icon": "kafka_listen_to_me",
          "image": "assets/skills/kafka_listen_to_me.png",
          "text": {
            "en": {
              "name": "Listen to Me",
              "description": "Kafka gives one enemy within 5 tiles five mental commands too soft to ignore.",
              "tooltip": [
                "The target makes 5 consecutive mental morale checks with a -25 penalty."
              ]
            },
            "zh": {
              "name": "听我说",
              "description": "卡芙卡对 5 格内一名敌人连续发出五次难以抗拒的精神命令。",
              "tooltip": [
                "目标连续进行 5 次 -25 精神士气检定。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "ye_shunguang",
      "order": 10,
      "skinId": "ye_shunguang_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 5,
        "MeleeDefense": 5,
        "Bravery": 15,
        "Initiative": 10
      },
      "images": {
        "card": "assets/valkyries/ye_shunguang_card.png",
        "skin": "assets/valkyries/ye_shunguang_skin_preview.png",
        "trait": "assets/traits/ye_shunguang_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Ye Shunguang",
          "backgroundName": "Valkyrie Ye Shunguang",
          "backgroundDescription": "Ye Shunguang is a disciple of Yunkui Summit and Ye Shiyuan's younger sister, bearer of the Qingming Sword that can sever filth at the cost of memory. After the battle with the Creator, she was named Void Hunter, carrying a gentle face and a will strong enough to forget herself for family.",
          "traitName": "Ye Shunguang Trait",
          "traitDescription": "Ye Shunguang's Qingming sword discipline grants Melee Skill +5, Melee Defense +5, Resolve +15, and Initiative +10.",
          "traitTooltip": [
            "Melee Skill +5, Melee Defense +5, Resolve +15, Initiative +10."
          ]
        },
        "zh": {
          "name": "叶舜光",
          "backgroundName": "女武神叶舜光",
          "backgroundDescription": "叶舜光是云岿山成员、叶释渊的妹妹，执有能斩断秽息却会吞噬记忆的晴明剑。她在与造物主的战斗后获封虚狩，温顺外表下藏着宁愿遗忘自我也要守护亲人的决意。",
          "traitName": "叶舜光特性",
          "traitDescription": "叶舜光的晴明剑主修行使她获得近战技能 +5、近战防御 +5、决心 +15、主动值 +10。",
          "traitTooltip": [
            "近战技能 +5，近战防御 +5，决心 +15，主动值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "ye_shunguang_qingming_guard",
          "icon": "ye_shunguang_qingming_guard",
          "image": "assets/skills/ye_shunguang_qingming_guard.png",
          "text": {
            "en": {
              "name": "Qingming Guard",
              "description": "Ye Shunguang keeps her stance clear and guarded.",
              "tooltip": [
                "Melee Defense +10 and Ranged Defense +10.",
                "Resolve +10."
              ]
            },
            "zh": {
              "name": "晴明护身",
              "description": "叶舜光以晴明剑势护住自身。",
              "tooltip": [
                "近战防御 +10，远程防御 +10。",
                "决心 +10。"
              ]
            }
          }
        },
        "active": {
          "key": "ye_shunguang_cut_filth",
          "icon": "ye_shunguang_cut_filth",
          "image": "assets/skills/ye_shunguang_cut_filth.png",
          "text": {
            "en": {
              "name": "Cut Filth",
              "description": "Ye Shunguang severs the enemy's ability to fight with a precise adjacent slash.",
              "tooltip": [
                "Has +25 chance to hit.",
                "Deals 300% weapon damage.",
                "On hit, disarms the target for 1 turn.",
                "After use, restores AP to maximum without needing to kill the target."
              ]
            },
            "zh": {
              "name": "断秽",
              "description": "叶舜光以精准近身斩击切断敌人继续战斗的能力。",
              "tooltip": [
                "命中 +25。",
                "造成 300% 武器伤害。",
                "命中后缴械目标 1 回合。",
                "使用后 AP 恢复到最大值，不需要击杀目标。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "himeko",
      "order": 11,
      "skinId": "himeko_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 15,
        "Bravery": 15,
        "Initiative": 10,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/himeko_card.png",
        "skin": "assets/valkyries/himeko_skin_preview.png",
        "trait": "assets/traits/himeko_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Himeko",
          "backgroundName": "Valkyrie Himeko",
          "backgroundDescription": "Himeko is the navigator and owner of the Astral Express, the scientist who repaired the abandoned train and began a journey among the stars. Mature, dependable, and endlessly curious, she guides her companions with a scholar's calm and a traveler's romance.",
          "traitName": "Himeko Trait",
          "traitDescription": "Himeko's command of heavy fire support grants Ranged Skill +15, Resolve +15, Initiative +10, and Ranged Defense +5.",
          "traitTooltip": [
            "Ranged Skill +15, Resolve +15, Initiative +10, Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "姬子",
          "backgroundName": "女武神姬子",
          "backgroundDescription": "姬子是星穹列车的领航员兼所有者，曾修复遗落的列车并踏上开拓之旅。她成熟可靠、热爱探索，以科学家的冷静和旅人的浪漫把同伴带向群星。",
          "traitName": "姬子特性",
          "traitDescription": "姬子的星穹领航使她获得远程技能 +15、决心 +15、主动值 +10、远程防御 +5。",
          "traitTooltip": [
            "远程技能 +15，决心 +15，主动值 +10，远程防御 +5。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "himeko_fire_support_calibration",
          "icon": "himeko_fire_support_calibration",
          "image": "assets/skills/himeko_fire_support_calibration.png",
          "text": {
            "en": {
              "name": "Fire Support Calibration",
              "description": "Himeko calibrates every ranged shot with Astral Express precision.",
              "tooltip": [
                "Ranged attacks gain +20 chance to hit.",
                "Ranged attacks deal +20% damage."
              ]
            },
            "zh": {
              "name": "火力校准",
              "description": "姬子以星穹列车的精度校准每一次远程火力。",
              "tooltip": [
                "远程攻击命中 +20。",
                "远程攻击伤害 +20%。"
              ]
            }
          }
        },
        "active": {
          "key": "himeko_orbital_suppression",
          "icon": "himeko_orbital_suppression",
          "image": "assets/skills/himeko_orbital_suppression.png",
          "text": {
            "en": {
              "name": "Orbital Suppression",
              "description": "Himeko drops a focused beam on one enemy 2 to 7 tiles away, leaving them dazed and stunned.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 80 fixed damage.",
                "Deals 140 armor damage.",
                "On hit, applies Dazed and Stunned for 1 turn."
              ]
            },
            "zh": {
              "name": "轨道压制",
              "description": "姬子对 2 到 7 格内一名敌人降下集中的轨道火力，使其茫然并眩晕。",
              "tooltip": [
                "命中 +30。",
                "造成 80 固定生命伤害。",
                "造成约 140 护甲伤害。",
                "命中后施加茫然与眩晕 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "feixue",
      "order": 12,
      "skinId": "feixue_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Initiative": 30,
        "MeleeSkill": 10,
        "MeleeDefense": 10,
        "Stamina": 10
      },
      "images": {
        "card": "assets/valkyries/feixue_card.png",
        "skin": "assets/valkyries/feixue_skin_preview.png",
        "trait": "assets/traits/feixue_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Feixue",
          "backgroundName": "Valkyrie Feixue",
          "backgroundDescription": "Feixue, also known as Hiyuki, is a Glacio sword Resonator from Ashihara whose white kagura-like robes and red cords hide a razor-cold edge. Bound by a long connection to the Threnodian, she is courteous and quiet until her blade falls like snow stained crimson.",
          "traitName": "Feixue Trait",
          "traitDescription": "Feixue's snow-swift blade grants Initiative +30, Melee Skill +10, Melee Defense +10, and Fatigue +10.",
          "traitTooltip": [
            "Initiative +30, Melee Skill +10, Melee Defense +10, Fatigue +10."
          ]
        },
        "zh": {
          "name": "绯雪",
          "backgroundName": "女武神绯雪",
          "backgroundDescription": "绯雪是来自苇原的冷凝迅刀共鸣者，神乐巫女般的白衣与红缎下藏着凛冽锋芒。她与鸣式有着漫长牵连，平日守礼寡言，出刀时却像雪落刹那间染上绯色。",
          "traitName": "绯雪特性",
          "traitDescription": "绯雪的迅刀步法使她获得主动值 +30、近战技能 +10、近战防御 +10、疲劳值 +10。",
          "traitTooltip": [
            "主动值 +30，近战技能 +10，近战防御 +10，疲劳值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "feixue_snowstep",
          "icon": "feixue_snowstep",
          "image": "assets/skills/feixue_snowstep.png",
          "text": {
            "en": {
              "name": "Snowstep",
              "description": "Feixue pressures enemies with swift melee strikes and binds them in webbing on hit.",
              "tooltip": [
                "Melee attacks gain +10 chance to hit.",
                "Melee hits apply Web to the target."
              ]
            },
            "zh": {
              "name": "雪步",
              "description": "绯雪以迅捷近战压迫敌人，并在命中后以蛛网束缚目标。",
              "tooltip": [
                "近战攻击命中 +10。",
                "近战命中后对目标施加蛛网。"
              ]
            }
          }
        },
        "active": {
          "key": "feixue_frost_seal_slash",
          "icon": "feixue_frost_seal_slash",
          "image": "assets/skills/feixue_frost_seal_slash.png",
          "text": {
            "en": {
              "name": "Frost Seal Slash",
              "description": "Feixue delivers a cold adjacent cut that slows, dazes, and stuns the target.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 180% weapon damage.",
                "On hit, applies Staggered, Dazed, and Stunned for 1 turn."
              ]
            },
            "zh": {
              "name": "霜封斩",
              "description": "绯雪对相邻敌人斩出寒霜封锁的一刀，使目标迟缓、恍惚并眩晕。",
              "tooltip": [
                "命中 +30。",
                "造成 180% 武器伤害。",
                "命中后施加踉跄、茫然与眩晕 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "feixiao",
      "order": 13,
      "skinId": "feixiao_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 10,
        "Initiative": 15,
        "Bravery": 20,
        "Stamina": 10
      },
      "images": {
        "card": "assets/valkyries/feixiao_card.png",
        "skin": "assets/valkyries/feixiao_skin_preview.png",
        "trait": "assets/traits/feixiao_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Feixiao",
          "backgroundName": "Valkyrie Feixiao",
          "backgroundDescription": "Feixiao is the Merlin's Claw of the Xianzhou Yaoqing, a general of the Arbiter-Generals with both foxian and borisin blood. Bold, decisive, and hungry for battle, she offers her sharpest edge to the Hunt even while haunted by Moon Rage.",
          "traitName": "Feixiao Trait",
          "traitDescription": "Feixiao's generalship of the Hunt grants Melee Skill +10, Initiative +15, Resolve +20, and Fatigue +10.",
          "traitTooltip": [
            "Melee Skill +10, Initiative +15, Resolve +20, Fatigue +10."
          ]
        },
        "zh": {
          "name": "飞霄",
          "backgroundName": "女武神飞霄",
          "backgroundDescription": "飞霄是仙舟曜青天击将军，狐人与步离人血脉交织，被称为帝弓七天将之一。她豪爽果决、渴望酣战，即便受月狂之症侵扰，也把自己的锋芒献给巡猎。",
          "traitName": "飞霄特性",
          "traitDescription": "飞霄的天击将军锋芒使她获得近战技能 +10、主动值 +15、决心 +20、疲劳值 +10。",
          "traitTooltip": [
            "近战技能 +10，主动值 +15，决心 +20，疲劳值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "feixiao_hunt_pressure",
          "icon": "feixiao_hunt_pressure",
          "image": "assets/skills/feixiao_hunt_pressure.png",
          "text": {
            "en": {
              "name": "Hunt Pressure",
              "description": "Feixiao's hits carry the pressure of a general on the hunt.",
              "tooltip": [
                "On hit, applies Hunt Pressure for 1 turn: -10 Melee Skill, -10 Ranged Skill, -10 Melee Defense, -10 Ranged Defense, and -10 Resolve."
              ]
            },
            "zh": {
              "name": "巡猎威压",
              "description": "飞霄的每一次命中都带着巡猎将军的压迫感。",
              "tooltip": [
                "命中后施加 1 回合巡猎威压：近战技能 -10、远程技能 -10、近战防御 -10、远程防御 -10、决心 -10。"
              ]
            }
          }
        },
        "active": {
          "key": "feixiao_skybreak_assault",
          "icon": "feixiao_skybreak_assault",
          "image": "assets/skills/feixiao_skybreak_assault.png",
          "text": {
            "en": {
              "name": "Skybreak Assault",
              "description": "Feixiao breaks one enemy within 4 tiles with a decisive assault.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 170% weapon damage.",
                "On hit, stuns the target for 1 turn.",
                "If this attack kills the target, AP is restored to maximum."
              ]
            },
            "zh": {
              "name": "天击破阵",
              "description": "飞霄对 4 格内一名敌人发动破阵突击。",
              "tooltip": [
                "命中 +30。",
                "造成 170% 武器伤害。",
                "命中后眩晕目标 1 回合。",
                "若击杀目标，AP 恢复到最大值。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "changli",
      "order": 14,
      "skinId": "changli_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 15,
        "RangedDefense": 10,
        "Initiative": 15,
        "MeleeDefense": 5
      },
      "images": {
        "card": "assets/valkyries/changli_card.png",
        "skin": "assets/valkyries/changli_skin_preview.png",
        "trait": "assets/traits/changli_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Changli",
          "backgroundName": "Valkyrie Changli",
          "backgroundDescription": "Changli is counselor and mentor to Jinzhou's Magistrate, wearing a relaxed smile over a mind built for strategy. She knows the cost of fire and of reading people's hearts, and is willing to make even herself a piece on the board for Jinzhou and Jinhsi.",
          "traitName": "Changli Trait",
          "traitDescription": "Changli's strategic poise grants Resolve +15, Ranged Defense +10, Initiative +15, and Melee Defense +5.",
          "traitTooltip": [
            "Resolve +15, Ranged Defense +10, Initiative +15, Melee Defense +5."
          ]
        },
        "zh": {
          "name": "长离",
          "backgroundName": "女武神长离",
          "backgroundDescription": "长离是今州令尹的参事与导师，常以从容笑意隐藏缜密谋略。她熟知人心与火焰的代价，愿以自身为棋，为今州与今汐铺出胜局。",
          "traitName": "长离特性",
          "traitDescription": "长离的离火谋士心性使她获得决心 +15、远程防御 +10、主动值 +15、近战防御 +5。",
          "traitTooltip": [
            "决心 +15，远程防御 +10，主动值 +15，近战防御 +5。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "changli_delayed_strategy",
          "icon": "changli_delayed_strategy",
          "image": "assets/skills/changli_delayed_strategy.png",
          "text": {
            "en": {
              "name": "Delayed Strategy",
              "description": "Changli waits for the right line of fire, then leaves poison in the opening.",
              "tooltip": [
                "Ranged attacks gain +10 chance to hit.",
                "Ranged hits poison the target for 2 turns."
              ]
            },
            "zh": {
              "name": "谋定后动",
              "description": "长离等待最合适的火线，并在命中后留下毒性破绽。",
              "tooltip": [
                "远程攻击命中 +10。",
                "远程命中后使目标中毒 2 回合。"
              ]
            }
          }
        },
        "active": {
          "key": "changli_inferno_seal",
          "icon": "changli_inferno_seal",
          "image": "assets/skills/changli_inferno_seal.png",
          "text": {
            "en": {
              "name": "Inferno Seal",
              "description": "Changli seals one enemy 2 to 6 tiles away in a focused flame formation, stunning the target on hit.",
              "tooltip": [
                "Has +25 chance to hit.",
                "Deals 200 fixed damage, 25% ignoring armor, and 125% armor damage.",
                "On hit, applies Dazed and Stunned for 1 turn."
              ]
            },
            "zh": {
              "name": "离火封阵",
              "description": "长离以离火封锁 2 到 6 格内一名敌人，并在命中时眩晕目标。",
              "tooltip": [
                "命中 +25。",
                "造成 200 固定伤害，25% 无视护甲，造成 125% 护甲伤害。",
                "命中后施加茫然与眩晕 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "raiden_shogun",
      "order": 15,
      "skinId": "raiden_shogun_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 10,
        "Bravery": 20,
        "MeleeDefense": 10,
        "Initiative": 5
      },
      "images": {
        "card": "assets/valkyries/raiden_shogun_card.png",
        "skin": "assets/valkyries/raiden_shogun_skin_preview.png",
        "trait": "assets/traits/raiden_shogun_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Raiden Shogun",
          "backgroundName": "Valkyrie Raiden Shogun",
          "backgroundDescription": "The Raiden Shogun is Inazuma's Electro Archon, born from both Raiden Ei and the puppet ruler she created. She once sealed her nation in the name of eternity, but through loss and reflection learned again what it means to protect her people.",
          "traitName": "Raiden Shogun Trait",
          "traitDescription": "The Raiden Shogun's eternal thunder grants Melee Skill +10, Resolve +20, Melee Defense +10, and Initiative +5.",
          "traitTooltip": [
            "Melee Skill +10, Resolve +20, Melee Defense +10, Initiative +5."
          ]
        },
        "zh": {
          "name": "雷电将军",
          "backgroundName": "女武神雷电将军",
          "backgroundDescription": "雷电将军是稻妻的雷之神，由雷电影与她制造的人偶将军共同构成。她曾以永恒之名封闭国度，如今在失去与反省中重新学习如何守护臣民。",
          "traitName": "雷电将军特性",
          "traitDescription": "雷电将军的永恒雷心使她获得近战技能 +10、决心 +20、近战防御 +10、主动值 +5。",
          "traitTooltip": [
            "近战技能 +10，决心 +20，近战防御 +10，主动值 +5。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "raiden_shogun_eternal_authority",
          "icon": "raiden_shogun_eternal_authority",
          "image": "assets/skills/raiden_shogun_eternal_authority.png",
          "text": {
            "en": {
              "name": "Eternal Authority",
              "description": "The Raiden Shogun's melee attacks carry thunderous authority, and all attacks pierce armor.",
              "tooltip": [
                "Melee attacks gain +10 chance to hit.",
                "Melee attacks deal +10% damage.",
                "All attacks ignore armor."
              ]
            },
            "zh": {
              "name": "永恒威仪",
              "description": "雷电将军的近战攻击带着永恒威仪的雷霆压迫，所有攻击都会贯穿护甲。",
              "tooltip": [
                "近战攻击命中 +10。",
                "近战攻击伤害 +10%。",
                "所有攻击无视护甲。"
              ]
            }
          }
        },
        "active": {
          "key": "raiden_shogun_musou_no_hitotachi",
          "icon": "raiden_shogun_musou_no_hitotachi",
          "image": "assets/skills/raiden_shogun_musou_no_hitotachi.png",
          "text": {
            "en": {
              "name": "Musou no Hitotachi",
              "description": "The Raiden Shogun cuts one enemy within 5 tiles with a single stroke of thunder.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 140 fixed damage, 30% ignoring armor, and 150% armor damage.",
                "On hit, stuns the target for 1 turn."
              ]
            },
            "zh": {
              "name": "无想一刀",
              "description": "雷电将军以无想一刀斩向 5 格内一名敌人。",
              "tooltip": [
                "命中 +30。",
                "造成 140 固定伤害，30% 无视护甲，造成 150% 护甲伤害。",
                "命中后眩晕目标 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "yixuan",
      "order": 16,
      "skinId": "yixuan_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 5,
        "MeleeDefense": 10,
        "Stamina": 15,
        "Bravery": 10
      },
      "images": {
        "card": "assets/valkyries/yixuan_card.png",
        "skin": "assets/valkyries/yixuan_skin_preview.png",
        "trait": "assets/traits/yixuan_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Yixuan",
          "backgroundName": "Valkyrie Yixuan",
          "backgroundDescription": "Yixuan is the thirteenth High Preceptor of Yunkui Summit, a hidden master of the Outer Ring and teacher to disciples such as Ju Fufu. Wise and steady, she once shielded civilians from Hollow disaster and still enters danger herself despite ether corruption gnawing at her body.",
          "traitName": "Yixuan Trait",
          "traitDescription": "Yixuan's preceptor stance grants Melee Skill +5, Melee Defense +10, Fatigue +15, and Resolve +10.",
          "traitTooltip": [
            "Melee Skill +5, Melee Defense +10, Fatigue +15, Resolve +10."
          ]
        },
        "zh": {
          "name": "仪玄",
          "backgroundName": "女武神仪玄",
          "backgroundDescription": "仪玄是云岿山第十三代高师，绝区零外环的隐世宗师，也是橘福福等人的师父。她睿智沉稳，曾在空洞灾厄中守护平民，即使身受以太侵蚀仍愿亲自踏入险地。",
          "traitName": "仪玄特性",
          "traitDescription": "仪玄的云岿宗师架势使她获得近战技能 +5、近战防御 +10、疲劳值 +15、决心 +10。",
          "traitTooltip": [
            "近战技能 +5，近战防御 +10，疲劳值 +15，决心 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "yixuan_preceptor_stance",
          "icon": "yixuan_preceptor_stance",
          "image": "assets/skills/yixuan_preceptor_stance.png",
          "text": {
            "en": {
              "name": "Preceptor Stance",
              "description": "Yixuan's grounded stance reinforces her close-combat defense.",
              "tooltip": [
                "Melee Defense +20.",
                "Fatigue +10."
              ]
            },
            "zh": {
              "name": "宗师架势",
              "description": "仪玄以宗师架势稳住近身防线。",
              "tooltip": [
                "近战防御 +20。",
                "疲劳值 +10。"
              ]
            }
          }
        },
        "active": {
          "key": "yixuan_mountain_suppression",
          "icon": "yixuan_mountain_suppression",
          "image": "assets/skills/yixuan_mountain_suppression.png",
          "text": {
            "en": {
              "name": "Mountain Suppression",
              "description": "Yixuan suppresses an adjacent enemy with mountain-like force without dealing damage.",
              "tooltip": [
                "Applies Stunned for 1 turn to an adjacent enemy. Can be used 3 times per battle."
              ]
            },
            "zh": {
              "name": "镇山掌",
              "description": "仪玄以镇山之势压制相邻敌人，不造成伤害。",
              "tooltip": [
                "可对相邻敌人施加眩晕 1 回合，每场战斗可使用 3 次。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "xilian",
      "order": 17,
      "skinId": "xilian_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "Hitpoints": 10,
        "RangedDefense": 10,
        "Initiative": 10
      },
      "images": {
        "card": "assets/valkyries/xilian_card.png",
        "skin": "assets/valkyries/xilian_skin_preview.png",
        "trait": "assets/traits/xilian_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Xilian",
          "backgroundName": "Valkyrie Xilian",
          "backgroundDescription": "Xilian is a central figure of the Amphoreus tale, once accompanying the Trailblazer as the memosprite Mem and preserving the world's memories through countless cycles. Gentle yet unbreakable, she turns love and remembrance into the force that can break a closed loop.",
          "traitName": "Xilian Trait",
          "traitDescription": "Xilian's watch over memory grants Resolve +20, Hitpoints +10, Ranged Defense +10, and Initiative +10.",
          "traitTooltip": [
            "Resolve +20, Hitpoints +10, Ranged Defense +10, Initiative +10."
          ]
        },
        "zh": {
          "name": "昔涟",
          "backgroundName": "女武神昔涟",
          "backgroundDescription": "昔涟是翁法罗斯篇的核心存在，曾以忆灵 Mem 陪伴开拓者，在无数轮回中保存世界的记忆。她温柔而坚韧，将爱与记忆化作打破闭环的力量。",
          "traitName": "昔涟特性",
          "traitDescription": "昔涟的忆海守望使她获得决心 +20、生命值 +10、远程防御 +10、主动值 +10。",
          "traitTooltip": [
            "决心 +20，生命值 +10，远程防御 +10，主动值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "xilian_memory_sanctuary",
          "icon": "xilian_memory_sanctuary",
          "image": "assets/skills/xilian_memory_sanctuary.png",
          "text": {
            "en": {
              "name": "Memory Sanctuary",
              "description": "Xilian shelters herself in preserved memories, steadying both melee and ranged defenses.",
              "tooltip": [
                "Melee Defense +10.",
                "Ranged Defense +10."
              ]
            },
            "zh": {
              "name": "记忆庇护",
              "description": "昔涟以被保存的记忆庇护自身，稳住近战与远程防线。",
              "tooltip": [
                "近战防御 +10。",
                "远程防御 +10。"
              ]
            }
          }
        },
        "active": {
          "key": "xilian_beyond_closed_loop",
          "icon": "xilian_beyond_closed_loop",
          "image": "assets/skills/xilian_beyond_closed_loop.png",
          "text": {
            "en": {
              "name": "Beyond the Closed Loop",
              "description": "Xilian helps one ally within 5 tiles step beyond the current loop, restoring AP, hitpoints, and armor to maximum, and removing all temporary and permanent injuries.",
              "tooltip": [
                "Restores the selected ally's AP to maximum.",
                "Restores the selected ally's hitpoints to maximum.",
                "Restores the selected ally's head and body armor to maximum.",
                "Removes all temporary and permanent injuries from the selected ally."
              ]
            },
            "zh": {
              "name": "闭环之外",
              "description": "昔涟让 5 格内一名友方短暂越过闭环，AP、生命值和护甲全部恢复到最大值，并移除所有临时伤势与永久伤残。",
              "tooltip": [
                "选中友方的 AP 恢复到最大值。",
                "选中友方的生命值恢复到最大值。",
                "选中友方的头部与身体护甲恢复到最大值。",
                "移除选中友方的所有临时伤势与永久伤残。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "liuying",
      "order": 18,
      "skinId": "liuying_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Hitpoints": 15,
        "Stamina": 20,
        "MeleeSkill": 10,
        "MeleeDefense": 10
      },
      "images": {
        "card": "assets/valkyries/liuying_card.png",
        "skin": "assets/valkyries/liuying_skin_preview.png",
        "trait": "assets/traits/liuying_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Liuying",
          "backgroundName": "Valkyrie Liuying",
          "backgroundDescription": "Liuying, known as Firefly, is a Stellaron Hunter and the surviving Glamoth Iron Cavalry pilot behind the SAM armor. Soft-spoken on the outside, she carries entropy loss syndrome and a life forged as a weapon, yet still searches fiercely for what it means to live.",
          "traitName": "Liuying Trait",
          "traitDescription": "Liuying's Glamoth armor discipline grants Hitpoints +15, Fatigue +20, Melee Skill +10, and Melee Defense +10.",
          "traitTooltip": [
            "Hitpoints +15, Fatigue +20, Melee Skill +10, Melee Defense +10."
          ]
        },
        "zh": {
          "name": "流萤",
          "backgroundName": "女武神流萤",
          "backgroundDescription": "流萤是星核猎手成员，真实身份是驾驶萨姆装甲的格拉默铁骑幸存者。她外表柔和，却背负熵失症与被制造为兵器的命运，仍执着寻找自己活着的意义。",
          "traitName": "流萤特性",
          "traitDescription": "流萤的格拉默铁骑本能使她获得生命值 +15、疲劳值 +20、近战技能 +10、近战防御 +10。",
          "traitTooltip": [
            "生命值 +15，疲劳值 +20，近战技能 +10，近战防御 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "liuying_iron_cavalry_armor",
          "icon": "liuying_iron_cavalry_armor",
          "image": "assets/skills/liuying_iron_cavalry_armor.png",
          "text": {
            "en": {
              "name": "Iron Cavalry Armor",
              "description": "Liuying keeps her Iron Cavalry armor protocol active at all times.",
              "tooltip": [
                "Damage received is reduced by 50%."
              ]
            },
            "zh": {
              "name": "铁骑护甲",
              "description": "流萤常时启动铁骑护甲的保护协议。",
              "tooltip": [
                "受到的所有伤害降低 50%。"
              ]
            }
          }
        },
        "active": {
          "key": "liuying_sam_suppression_charge",
          "icon": "liuying_sam_suppression_charge",
          "image": "assets/skills/liuying_sam_suppression_charge.png",
          "text": {
            "en": {
              "name": "Complete Combustion",
              "description": "Liuying activates SAM's Complete Combustion protocol and restores herself to peak condition.",
              "tooltip": [
                "Restores her AP to maximum.",
                "Restores her hitpoints to maximum.",
                "Restores her head and body armor to maximum.",
                "Removes all temporary and permanent injuries from herself."
              ]
            },
            "zh": {
              "name": "完全燃烧",
              "description": "流萤启动萨姆装甲的完全燃烧协议，将自身状态重置到巅峰。",
              "tooltip": [
                "自身 AP 恢复到最大值。",
                "自身生命值恢复到最大值。",
                "自身头盔与盔甲护甲值恢复到最大值。",
                "移除自身所有临时伤势与永久伤残。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "cartethyia",
      "order": 19,
      "skinId": "cartethyia_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 10,
        "Initiative": 20,
        "RangedDefense": 10,
        "Bravery": 10
      },
      "images": {
        "card": "assets/valkyries/cartethyia_card.png",
        "skin": "assets/valkyries/cartethyia_skin_preview.png",
        "trait": "assets/traits/cartethyia_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Cartethyia",
          "backgroundName": "Valkyrie Cartethyia",
          "backgroundDescription": "Cartethyia is Rinascita's Blessed Maiden, a Resonator tied to the Sentinel Imperator, with another self connected to Fleurdelys. Gentle and sacred without being fragile, she answers heavier fate with the bearing of a gathering storm.",
          "traitName": "Cartethyia Trait",
          "traitDescription": "Cartethyia's blessed storm grants Ranged Skill +10, Initiative +20, Ranged Defense +10, and Resolve +10.",
          "traitTooltip": [
            "Ranged Skill +10, Initiative +20, Ranged Defense +10, Resolve +10."
          ]
        },
        "zh": {
          "name": "卡提希娅",
          "backgroundName": "女武神卡提希娅",
          "backgroundDescription": "卡提希娅是里纳西塔的祝圣少女，也是哨兵 Imperator 的共鸣者，另一面与 Fleurdelys 相连。她温柔圣洁却并非脆弱，命运越沉重，越会以风暴般的姿态回应。",
          "traitName": "卡提希娅特性",
          "traitDescription": "卡提希娅的祝圣风暴使她获得远程技能 +10、主动值 +20、远程防御 +10、决心 +10。",
          "traitTooltip": [
            "远程技能 +10，主动值 +20，远程防御 +10，决心 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "cartethyia_wind_net",
          "icon": "cartethyia_wind_net",
          "image": "assets/skills/cartethyia_wind_net.png",
          "text": {
            "en": {
              "name": "Wind Net",
              "description": "Cartethyia catches every enemy she hits in a sudden wind net.",
              "tooltip": [
                "On hit, applies Web to the target."
              ]
            },
            "zh": {
              "name": "风网",
              "description": "卡提希娅以风网缠住每一个被她命中的敌人。",
              "tooltip": [
                "命中后对目标施加蛛网。"
              ]
            }
          }
        },
        "active": {
          "key": "cartethyia_storm_verdict",
          "icon": "cartethyia_storm_verdict",
          "image": "assets/skills/cartethyia_storm_verdict.png",
          "text": {
            "en": {
              "name": "Storm Verdict",
              "description": "Cartethyia judges one enemy 2 to 6 tiles away with a condensed storm that locks down their movement.",
              "tooltip": [
                "Has +25 chance to hit.",
                "Deals 100 fixed damage, 25% ignoring armor, and 125% armor damage.",
                "On hit, applies Staggered, Dazed, and Stunned for 1 turn."
              ]
            },
            "zh": {
              "name": "风暴裁决",
              "description": "卡提希娅以凝聚风暴裁决 2 到 6 格内一名敌人，并以风暴压制其行动。",
              "tooltip": [
                "命中 +25。",
                "造成 100 固定伤害，25% 无视护甲，造成 125% 护甲伤害。",
                "命中后施加踉跄、茫然与眩晕 1 回合。"
              ]
            }
          }
        }
      }
    },
    {
      "id": "yuno",
      "order": 20,
      "skinId": "yuno_skin",
      "level": 1,
      "dailyWage": 1,
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 15,
        "Initiative": 15,
        "RangedDefense": 10,
        "Hitpoints": 10
      },
      "images": {
        "card": "assets/valkyries/yuno_card.png",
        "skin": "assets/valkyries/yuno_skin_preview.png",
        "trait": "assets/traits/yuno_trait_icon.png"
      },
      "text": {
        "en": {
          "name": "Yuno",
          "backgroundName": "Valkyrie Yuno",
          "backgroundDescription": "Yuno is the priestess of the Tetragon Temple in Septimont, charged with delivering prophecies to the people. Elegant and mysterious, she seems able to see endings others have not yet reached through the mist of fate.",
          "traitName": "Yuno Trait",
          "traitDescription": "Yuno's oracle bearing grants Resolve +15, Initiative +15, Ranged Defense +10, and Hitpoints +10.",
          "traitTooltip": [
            "Resolve +15, Initiative +15, Ranged Defense +10, Hitpoints +10."
          ]
        },
        "zh": {
          "name": "尤诺",
          "backgroundName": "女武神尤诺",
          "backgroundDescription": "尤诺是七丘地区四方神殿的女祭司，负责向人民传达预言。她优雅而神秘，似乎总能在命运的雾气中看见旁人尚未抵达的结局。",
          "traitName": "尤诺特性",
          "traitDescription": "尤诺的神谕女祭司气质使她获得决心 +15、主动值 +15、远程防御 +10、生命值 +10。",
          "traitTooltip": [
            "决心 +15，主动值 +15，远程防御 +10，生命值 +10。"
          ]
        }
      },
      "skills": {
        "passive": {
          "key": "yuno_oracle_guard",
          "icon": "yuno_oracle_guard",
          "image": "assets/skills/yuno_oracle_guard.png",
          "text": {
            "en": {
              "name": "Oracle Guard",
              "description": "Yuno's divination steadies her guard before danger arrives.",
              "tooltip": [
                "Melee Defense +10 and Ranged Defense +10.",
                "Resolve +10."
              ]
            },
            "zh": {
              "name": "神谕守心",
              "description": "尤诺以神谕预见危险，提前稳住防线。",
              "tooltip": [
                "近战防御 +10，远程防御 +10。",
                "决心 +10。"
              ]
            }
          }
        },
        "active": {
          "key": "yuno_fate_rewrite",
          "icon": "yuno_fate_rewrite",
          "image": "assets/skills/yuno_fate_rewrite.png",
          "text": {
            "en": {
              "name": "Fate Rewrite",
              "description": "Yuno bends the next moment around one enemy within 6 tiles, leaving them stunned, dazed, staggered, and shaken.",
              "tooltip": [
                "Applies Stunned, Dazed, and Staggered for 1 turn.",
                "The target makes one mental morale check with a -15 penalty."
              ]
            },
            "zh": {
              "name": "命运改写",
              "description": "尤诺改写 6 格内一名敌人的下一瞬命运，使其眩晕、茫然、迟缓并动摇。",
              "tooltip": [
                "施加眩晕、茫然与踉跄 1 回合。",
                "目标额外进行一次 -15 精神士气检定。"
              ]
            }
          }
        }
      }
    }
  ]
};
