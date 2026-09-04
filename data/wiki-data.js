window.BV_WIKI_DATA = {
  "meta": {
    "title": "Battle Valkyries Wiki",
    "source": "battle-valkyries source",
    "updatedAt": "2026-09-04",
    "sourceRevision": "0774faa7+working-tree",
    "valkyrieVersion": "2.0.0",
    "alchemyVersion": "1.0.1",
    "contentSource": [
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/lily_valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_catalog.nut",
      "src/battle-valkyries/battle-valkyries/config/lily_skill_catalog.nut",
      "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
      "src/alchemy-enchantment-system/alchemy-enchantment-system/equipment_data.nut",
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
      "MentalMorale": "Mental Morale",
      "ActionPoints": "Action Points",
      "Vision": "Vision"
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
      "MentalMorale": "精神士气抗性",
      "ActionPoints": "行动点",
      "Vision": "视野"
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
    ],
    "gacha": {
      "enabledByDefault": true,
      "progressMax": 4,
      "costSteps": [
        {
          "maxGuarantees": 0,
          "cost": 100
        },
        {
          "maxGuarantees": 1,
          "cost": 1200
        },
        {
          "maxGuarantees": 2,
          "cost": 3000
        },
        {
          "maxGuarantees": 3,
          "cost": 6000
        },
        {
          "maxGuarantees": 4,
          "cost": 8000
        },
        {
          "maxGuarantees": 999,
          "cost": 15000
        }
      ]
    }
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
        "id": "GachaMode",
        "type": "boolean",
        "default": true,
        "text": {
          "en": {
            "name": "Gacha Mode",
            "description": "When enabled, Valkyrie detail pages only select the guaranteed target. New Valkyries are recruited from the summon page's gacha pull button."
          },
          "zh": {
            "name": "抽卡模式",
            "description": "开启后，女武神详情页只能设置自选目标；新的女武神需要在召唤主界面通过抽卡按钮获得。"
          }
        }
      },
      {
        "id": "EnableValkyrieEnemyScaling",
        "type": "boolean",
        "default": true,
        "text": {
          "en": {
            "name": "Scale Enemy Difficulty for Valkyries",
            "description": "When enabled, newly generated enemy resources and champion chances scale with the number and level of summoned Valkyries. This setting affects future spawns immediately; parties already on the world map are not changed."
          },
          "zh": {
            "name": "启用女武神敌人难度适配",
            "description": "开启后，新生成敌人的资源预算和冠军概率会随已召唤女武神数量与等级提高。这个开关会立即影响之后生成的敌人；已经在世界地图上的队伍不会自动变化。"
          }
        }
      }
    ]
  },
  "systems": {
    "intro": {
      "en": "The current release is two cooperating mods: Battle Valkyries 2.0.0 and the optional Alchemy & Enchantment System 1.0.1.",
      "zh": "当前版本由两个可配合使用的模组组成：Battle Valkyries 2.0.0，以及可选的附魔炼金系统 1.0.1。"
    },
    "cards": [
      {
        "id": "hub_gacha",
        "title": {
          "en": "Hub & Gacha Summoning",
          "zh": "Hub 与抽卡召唤"
        },
        "body": {
          "en": "Ctrl + M opens five tabs for summoning, bounties, memory inscription, the memory shop, and archived biographies.",
          "zh": "按 Ctrl + M 打开 Hub，包含召唤、悬赏、记忆铭刻、记忆商店和忆海生平五个标签页。"
        },
        "bullets": {
          "en": [
            "Gacha mode is enabled by default.",
            "A selected target is guaranteed after four failed pulls; pull costs scale with completed guarantees."
          ],
          "zh": [
            "抽卡模式默认开启。",
            "连续 4 次未命中后可定向保底；完成的保底次数越多，后续抽取消耗越高。"
          ]
        },
        "sourceFiles": [
          "config/mod_settings.nut",
          "hooks/valkyrie_summon.nut",
          "ui/mods/battle-valkyries/valkyries_hub.js"
        ]
      },
      {
        "id": "skins",
        "title": {
          "en": "Skins & Fullscreen Profiles",
          "zh": "皮肤与全屏档案"
        },
        "body": {
          "en": "Identity flags restore skins and runtime skills after loading, entering combat, and equipment refreshes. Selected characters also have animated fullscreen dossier layouts.",
          "zh": "身份 flags 会在读档、进入战斗和装备刷新后恢复皮肤与运行期技能；部分角色已接入带动态背景的全屏档案页。"
        },
        "bullets": {
          "en": [
            "Multi-skin characters expose ordered skin tabs.",
            "A chosen Valkyrie skin can also become the world-map leader appearance."
          ],
          "zh": [
            "多皮肤角色会显示有序皮肤标签。",
            "已选择的女武神皮肤还可以设为世界地图领队外观。"
          ]
        },
        "sourceFiles": [
          "config/skin_data.nut",
          "hooks/skin_appearance.nut",
          "hooks/world_party_appearance.nut"
        ]
      },
      {
        "id": "bounties",
        "title": {
          "en": "Valkyrie Bounties",
          "zh": "女武神悬赏"
        },
        "body": {
          "en": "Every registered Valkyrie receives a bounty card. Difficulty scales from one to three stars by owned Valkyries, with 3,000 / 6,000 / 12,000 Crown rewards.",
          "zh": "每名已登记女武神都有对应悬赏卡。难度按已拥有角色数从一星成长到三星，奖励分别为 3,000 / 6,000 / 12,000 克朗。"
        },
        "bullets": {
          "en": [
            "Escort budget scales from 180 to 1,200.",
            "A completed bounty can leave the Valkyrie waiting to be recruited when the roster is full."
          ],
          "zh": [
            "护卫预算会从 180 平滑增长到 1,200。",
            "名册已满时，完成悬赏的女武神会保留为待招募状态。"
          ]
        },
        "sourceFiles": [
          "config/valkyrie_bounty_data.nut",
          "systems/valkyrie_bounty_service.nut"
        ]
      },
      {
        "id": "memory",
        "title": {
          "en": "Memory Archive & Shop",
          "zh": "记忆铭刻与商店"
        },
        "body": {
          "en": "Ordinary brothers can be archived into biographies and four memory currencies, then exchanged for ten permanent-growth keepsakes.",
          "zh": "普通战团成员可以被铭刻为生平记录与四类记忆资源，并在商店兑换 10 种永久成长信物。"
        },
        "bullets": {
          "en": [
            "Eight attributes use three achievement thresholds.",
            "Archive rank also reflects elite and legendary enemy victories."
          ],
          "zh": [
            "八项属性各有三档达成阈值。",
            "铭刻评价还会统计精英与传奇敌人的击杀记录。"
          ]
        },
        "sourceFiles": [
          "config/memory_archive_data.nut",
          "config/memory_shop_data.nut"
        ]
      },
      {
        "id": "bonds",
        "title": {
          "en": "Character Bond Campaigns",
          "zh": "角色羁绊战役"
        },
        "body": {
          "en": "Xilian, Firefly, Himeko, and Jeanne have dedicated bond systems with staged events, challenge camps, and character-specific rewards.",
          "zh": "昔涟、流萤、姬子与贞德拥有独立羁绊系统，包括阶段事件、挑战营地和角色专属奖励。"
        },
        "bullets": {
          "en": [
            "Bond stages use 20 / 40 / 60 / 80 / 100.",
            "Camp completion, not merely reading the event, authoritatively completes a stage."
          ],
          "zh": [
            "羁绊阶段统一为 20 / 40 / 60 / 80 / 100。",
            "阶段完成以击破对应营地为准，而不是仅阅读事件。"
          ]
        },
        "sourceFiles": [
          "hooks/bond_system.nut",
          "hooks/liuying_bond_system.nut",
          "hooks/himeko_bond_system.nut",
          "hooks/jeanne_bond_system.nut"
        ]
      },
      {
        "id": "lily",
        "title": {
          "en": "Lily Spirit Loadout",
          "zh": "莉莉灵魂编成"
        },
        "body": {
          "en": "Lily carries a dedicated blight resource and a six-slot spirit loadout drawn from 26 unlockable main and sub spirits.",
          "zh": "莉莉拥有独立的秽蚀资源，以及从 26 个可解锁主灵魂/副灵魂中配置的六槽灵魂编成。"
        },
        "bullets": {
          "en": [
            "Six spirits are available in the initial loadout.",
            "Spirit skills are transient runtime skills and are rebuilt by the skill service."
          ],
          "zh": [
            "初始编成直接提供 6 个灵魂。",
            "灵魂技能属于临时运行期技能，由技能服务统一重建。"
          ]
        },
        "sourceFiles": [
          "config/lily_spirit_data.nut",
          "systems/lily_spirit_service.nut"
        ]
      },
      {
        "id": "the_herta",
        "title": {
          "en": "The Herta Research",
          "zh": "大黑塔研究"
        },
        "body": {
          "en": "When both mods are enabled and The Herta is in the roster, her research tab can upgrade enchanted gear while either retaining or rerolling its affixes.",
          "zh": "同时启用两个模组并召唤大黑塔后，研究页可以为附魔装备升阶，并选择保留词条或全部重算。"
        },
        "bullets": {
          "en": [
            "Purple-to-red research gains one charge every 5 days, up to 3.",
            "Red-to-prismatic research gains one charge every 15 days, up to 1."
          ],
          "zh": [
            "紫升红研究每 5 天恢复 1 次，最多储存 3 次。",
            "红升彩研究每 15 天恢复 1 次，最多储存 1 次。"
          ]
        },
        "sourceFiles": [
          "systems/the_herta_research_service.nut",
          "alchemy-enchantment-system/the_herta_research_api.nut"
        ]
      }
    ],
    "equipment": {
      "title": {
        "en": "Alchemy & Enchantment System",
        "zh": "附魔炼金系统"
      },
      "version": "1.0.1",
      "enabledByDefault": false,
      "body": {
        "en": "This is an independent optional mod. When enabled for a new campaign, weapons, helmets, armor, and shields receive rarity, affixes, enchanting, reforging, locking, affix removal, and single or batch disassembly.",
        "zh": "这是独立的可选模组。新战役启用后，武器、头盔、铠甲和盾牌会获得品质、词条、附魔、重铸、锁定、词条移除以及单件/批量拆解功能。"
      },
      "rules": {
        "en": [
          "The equipment switch is off by default and is fixed when a campaign is created.",
          "Enchanting costs 100 Crowns and one stone of the chosen tier; a full item replaces its last affix.",
          "Removing an affix costs 100 Crowns and one removal stone.",
          "Locked items cannot be reforged or disassembled.",
          "Prismatic items always receive one mythic affix and can never hold more than one."
        ],
        "zh": [
          "装备系统默认关闭，并在创建战役时锁定开关状态。",
          "附魔消耗 100 克朗和 1 个所选等级附魔石；词条已满时替换最后一条。",
          "移除词条消耗 100 克朗和 1 个消除石。",
          "锁定装备不能重铸或拆解。",
          "彩色装备固定拥有 1 条神话词条，且同一件装备至多 1 条。"
        ]
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
          "kind": "basic",
          "effect": "weapon_damage_percent",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "weapon_min_damage_flat",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "armor_damage_percent",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "direct_damage_percent",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "hit_chance",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "head_chance",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "shield_damage_percent",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "stamina",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "durability_percent",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
          },
          "text": {
            "en": {
              "name": "Sturdy",
              "effect": "Weapon durability loss",
              "summary": "Weapon durability loss: Common Equipment +10%~+20% / Legendary Equipment +160%~+220%"
            },
            "zh": {
              "name": "坚固",
              "effect": "武器耐久损耗",
              "summary": "武器耐久损耗: 普通装备 +10%~+20% / 传奇装备 +160%~+220%"
            }
          }
        },
        {
          "id": "thick_cast",
          "kind": "basic",
          "effect": "armor_max_percent",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "armor_max_flat",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "stamina",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "armor_damage_received_percent",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "direct_damage_reduction_flat",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "fatigue_recovery",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "vision",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "head_damage_received_percent",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "hitpoints",
          "parts": [
            "armor"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "durability_flat",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "melee_defense",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "ranged_defense",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "stamina",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "shield_skill_fatigue_reduction",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "basic",
          "effect": "shieldwall_defense",
          "parts": [
            "shield"
          ],
          "minRarityRank": 1,
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
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Basic",
            "zh": "基础"
          },
          "unlockText": {
            "en": "Any rarity",
            "zh": "全部品质"
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
          "kind": "advanced",
          "effect": "hit_bleed",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": 35,
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
          "kind": "advanced",
          "effect": "hit_daze_stagger",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": 30,
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
          "kind": "advanced",
          "effect": "hit_debilitate",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": 35,
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
          "kind": "advanced",
          "effect": "hit_web",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": 25,
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
          "kind": "advanced",
          "effect": "hit_lifesteal_fatigue",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "hit_rotblood",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": 35,
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
          "kind": "legendary",
          "effect": "hit_stun",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": 25,
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
          "kind": "legendary",
          "effect": "hit_disarm",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": 30,
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
          "kind": "legendary",
          "effect": "hit_clear_fatigue",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "effect": "Recover 10 fatigue after hit",
              "summary": "Recover 10 fatigue after hit"
            },
            "zh": {
              "name": "澄息",
              "effect": "命中后恢复10疲劳",
              "summary": "命中后恢复10疲劳"
            }
          }
        },
        {
          "id": "sleeping",
          "kind": "legendary",
          "effect": "hit_sleep",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": 20,
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
          "kind": "legendary",
          "effect": "range_bonus",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": 1,
          "chance": null,
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
          "kind": "legendary",
          "effect": "action_points",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": 2,
          "chance": null,
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
              "summary": "Max AP +2"
            },
            "zh": {
              "name": "战律",
              "effect": "最大 AP",
              "summary": "最大 AP +2"
            }
          }
        },
        {
          "id": "slaughter_tide",
          "kind": "legendary",
          "effect": "legendary_slaughter_tide",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "name": "Slaughtertide",
              "effect": "First weapon kill each turn refunds that attack's AP (up to 4) and recovers 20 fatigue; later kills recover 5 fatigue",
              "summary": "First weapon kill each turn refunds that attack's AP (up to 4) and recovers 20 fatigue; later kills recover 5 fatigue"
            },
            "zh": {
              "name": "杀潮",
              "effect": "每回合首次武器击杀返还本次攻击消耗的行动点（最多4点）并恢复20疲劳；后续击杀恢复5疲劳",
              "summary": "每回合首次武器击杀返还本次攻击消耗的行动点（最多4点）并恢复20疲劳；后续击杀恢复5疲劳"
            }
          }
        },
        {
          "id": "relentless_assault",
          "kind": "legendary",
          "effect": "legendary_relentless_assault",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "name": "Relentless Assault",
              "effect": "First hit each turn recovers 2 AP/10 fatigue; hitting a different enemy again recovers another 2 AP",
              "summary": "First hit each turn recovers 2 AP/10 fatigue; hitting a different enemy again recovers another 2 AP"
            },
            "zh": {
              "name": "连战",
              "effect": "每回合首次命中恢复2行动点和10疲劳；再次命中另一名敌人再恢复2行动点",
              "summary": "每回合首次命中恢复2行动点和10疲劳；再次命中另一名敌人再恢复2行动点"
            }
          }
        },
        {
          "id": "sealed_blood",
          "kind": "advanced",
          "effect": "immune_bleeding",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "advanced",
          "effect": "bravery_on_morale_check",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": 15,
          "chance": null,
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
          "kind": "advanced",
          "effect": "armor_regen",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": 15,
          "chance": null,
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
          "kind": "legendary",
          "effect": "immune_stun_daze",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "immune_movement",
          "parts": [
            "armor"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "immune_headshot",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "damage_reflect",
          "parts": [
            "armor"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": 10,
          "chance": null,
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
          "kind": "legendary",
          "effect": "hitpoint_regen",
          "parts": [
            "armor"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": 5,
          "chance": null,
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
          "kind": "legendary",
          "effect": "immune_sleep_charm_horror",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "id": "adamant_guard",
          "kind": "legendary",
          "effect": "legendary_adamant_guard",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "name": "Adamant Guard",
              "effect": "First direct attack each turn deals 50% less damage and cannot inflict secondary effects; later attacks deal 10% less damage",
              "summary": "First direct attack each turn deals 50% less damage and cannot inflict secondary effects; later attacks deal 10% less damage"
            },
            "zh": {
              "name": "无懈",
              "effect": "每回合首次直接攻击伤害降低50%并阻止附带负面状态；之后伤害降低10%",
              "summary": "每回合首次直接攻击伤害降低50%并阻止附带负面状态；之后伤害降低10%"
            }
          }
        },
        {
          "id": "war_sight",
          "kind": "legendary",
          "effect": "legendary_war_sight",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "name": "War Sight",
              "effect": "First attack each turn gains +20 hit chance and ignores night penalties; a miss refunds all AP",
              "summary": "First attack each turn gains +20 hit chance and ignores night penalties; a miss refunds all AP"
            },
            "zh": {
              "name": "战识",
              "effect": "每回合首次攻击+20命中并忽略夜晚惩罚；若未命中则返还全部行动点",
              "summary": "每回合首次攻击+20命中并忽略夜晚惩罚；若未命中则返还全部行动点"
            }
          }
        },
        {
          "id": "arrow_meet",
          "kind": "advanced",
          "effect": "ranged_damage_reduction",
          "parts": [
            "shield"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": 15,
          "chance": null,
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
          "kind": "advanced",
          "effect": "shieldwall_shield_damage_reduction",
          "parts": [
            "shield"
          ],
          "minRarityRank": 4,
          "ranges": {},
          "value": 50,
          "chance": null,
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
          "kind": "legendary",
          "effect": "shieldwall_extra_turn",
          "parts": [
            "shield"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "shield_unbreakable",
          "parts": [
            "shield"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
          "kind": "legendary",
          "effect": "shield_hit_daze",
          "parts": [
            "shield"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": 35,
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
          "kind": "legendary",
          "effect": "shield_counter_guard",
          "parts": [
            "shield"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
        },
        {
          "id": "guardian_oath",
          "kind": "legendary",
          "effect": "legendary_guardian_oath",
          "parts": [
            "shield"
          ],
          "minRarityRank": 5,
          "ranges": {},
          "value": null,
          "chance": null,
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
              "name": "Guardian's Oath",
              "effect": "First Shieldwall each turn refunds all AP/50% fatigue; during Shieldwall take 25% less damage and adjacent allies take 10% less",
              "summary": "First Shieldwall each turn refunds all AP/50% fatigue; during Shieldwall take 25% less damage and adjacent allies take 10% less"
            },
            "zh": {
              "name": "守誓",
              "effect": "每回合首次盾墙返还全部行动点和50%疲劳；盾墙时自身减伤25%、相邻盟友减伤10%",
              "summary": "每回合首次盾墙返还全部行动点和50%疲劳；盾墙时自身减伤25%、相邻盟友减伤10%"
            }
          }
        },
        {
          "id": "heavenly_judgment",
          "kind": "mythic",
          "effect": "mythic_heavenly_judgment",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Heavenly Judgment",
              "effect": "First hit each turn deals 20-30 armor-ignoring damage to the target and up to 2 other enemies within 2 tiles",
              "summary": "First hit each turn deals 20-30 armor-ignoring damage to the target and up to 2 other enemies within 2 tiles"
            },
            "zh": {
              "name": "天谴",
              "effect": "每回合首次命中，对目标及2格内最多2名其他敌人造成20-30点无视护甲伤害",
              "summary": "每回合首次命中，对目标及2格内最多2名其他敌人造成20-30点无视护甲伤害"
            }
          }
        },
        {
          "id": "fate_reversal",
          "kind": "mythic",
          "effect": "mythic_fate_reversal",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Fate Reversal",
              "effect": "First miss each turn refunds all AP/50% fatigue; the next attack gains +20 hit chance",
              "summary": "First miss each turn refunds all AP/50% fatigue; the next attack gains +20 hit chance"
            },
            "zh": {
              "name": "逆命",
              "effect": "每回合首次未命中返还全部行动点和50%疲劳；下一次攻击+20命中",
              "summary": "每回合首次未命中返还全部行动点和50%疲劳；下一次攻击+20命中"
            }
          }
        },
        {
          "id": "soul_drinker",
          "kind": "mythic",
          "effect": "mythic_soul_drinker",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Soul Drinker",
              "effect": "First kill each turn recovers 4 AP/20 fatigue and grants +20% damage for the rest of the turn",
              "summary": "First kill each turn recovers 4 AP/20 fatigue and grants +20% damage for the rest of the turn"
            },
            "zh": {
              "name": "饮魂",
              "effect": "每回合首次击杀恢复4行动点和20疲劳，本回合剩余时间伤害+20%",
              "summary": "每回合首次击杀恢复4行动点和20疲劳，本回合剩余时间伤害+20%"
            }
          }
        },
        {
          "id": "boundary_breaker",
          "kind": "mythic",
          "effect": "mythic_boundary_breaker",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Boundary Breaker",
              "effect": "+25 percentage points of armor penetration; hits also destroy 10% of current armor on that body part, up to 40",
              "summary": "+25 percentage points of armor penetration; hits also destroy 10% of current armor on that body part, up to 40"
            },
            "zh": {
              "name": "破界",
              "effect": "穿甲比例+25个百分点；命中时额外摧毁当前部位10%护甲，最多40点",
              "summary": "穿甲比例+25个百分点；命中时额外摧毁当前部位10%护甲，最多40点"
            }
          }
        },
        {
          "id": "divine_stride",
          "kind": "mythic",
          "effect": "mythic_divine_stride",
          "parts": [
            "weapon"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Divine Stride",
              "effect": "After the first weapon attack each turn, refund 2 AP and 50% of its fatigue cost",
              "summary": "After the first weapon attack each turn, refund 2 AP and 50% of its fatigue cost"
            },
            "zh": {
              "name": "神行",
              "effect": "每回合第一次武器攻击后返还2行动点和50%疲劳消耗",
              "summary": "每回合第一次武器攻击后返还2行动点和50%疲劳消耗"
            }
          }
        },
        {
          "id": "destiny_guard",
          "kind": "mythic",
          "effect": "mythic_destiny_guard",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Destiny Guard",
              "effect": "The first direct attack against this body part each turn deals 50% less damage and cannot inflict secondary effects",
              "summary": "The first direct attack against this body part each turn deals 50% less damage and cannot inflict secondary effects"
            },
            "zh": {
              "name": "天命",
              "effect": "每回合该部位第一次受到直接攻击时伤害降低50%，并阻止附带负面状态",
              "summary": "每回合该部位第一次受到直接攻击时伤害降低50%，并阻止附带负面状态"
            }
          }
        },
        {
          "id": "nirvana",
          "kind": "mythic",
          "effect": "mythic_nirvana",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Nirvana",
              "effect": "The first fatal hit each battle leaves 1 HP, then restores 25% max HP and clears bleeding, poison, and acid",
              "summary": "The first fatal hit each battle leaves 1 HP, then restores 25% max HP and clears bleeding, poison, and acid"
            },
            "zh": {
              "name": "涅槃",
              "effect": "每场战斗首次受到致命伤害时保留1生命，随后恢复至25%最大生命并清除流血、中毒和酸蚀",
              "summary": "每场战斗首次受到致命伤害时保留1生命，随后恢复至25%最大生命并清除流血、中毒和酸蚀"
            }
          }
        },
        {
          "id": "divine_healing",
          "kind": "mythic",
          "effect": "mythic_divine_healing",
          "parts": [
            "helmet",
            "armor"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Divine Healing",
              "effect": "At turn start restore 8 HP/15 fatigue and 40 armor to this piece; HP/fatigue recovery does not stack between head and body",
              "summary": "At turn start restore 8 HP/15 fatigue and 40 armor to this piece; HP/fatigue recovery does not stack between head and body"
            },
            "zh": {
              "name": "神愈",
              "effect": "回合开始恢复8生命和15疲劳，并为该件装备恢复40护甲；生命与疲劳不会由头甲重复恢复",
              "summary": "回合开始恢复8生命和15疲劳，并为该件装备恢复40护甲；生命与疲劳不会由头甲重复恢复"
            }
          }
        },
        {
          "id": "spell_immunity",
          "kind": "mythic",
          "effect": "mythic_spell_immunity",
          "parts": [
            "helmet"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Spell Immunity",
              "effect": "Immune to stun, daze, sleep, charm, horror, and head hits; preventing one of these effects recovers 10 fatigue",
              "summary": "Immune to stun, daze, sleep, charm, horror, and head hits; preventing one of these effects recovers 10 fatigue"
            },
            "zh": {
              "name": "万法不侵",
              "effect": "免疫眩晕、恍惚、睡眠、魅惑、惊骇和爆头；阻止这些效果时恢复10疲劳",
              "summary": "免疫眩晕、恍惚、睡眠、魅惑、惊骇和爆头；阻止这些效果时恢复10疲劳"
            }
          }
        },
        {
          "id": "sacred_body",
          "kind": "mythic",
          "effect": "mythic_sacred_body",
          "parts": [
            "armor"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Sacred Body",
              "effect": "Convert 40% of direct HP damage into armor loss, up to 30 HP per turn",
              "summary": "Convert 40% of direct HP damage into armor loss, up to 30 HP per turn"
            },
            "zh": {
              "name": "圣躯",
              "effect": "将40%直接生命伤害转化为铠甲损失，每回合最多转化30点",
              "summary": "将40%直接生命伤害转化为铠甲损失，每回合最多转化30点"
            }
          }
        },
        {
          "id": "heaven_return",
          "kind": "mythic",
          "effect": "mythic_heaven_return",
          "parts": [
            "armor"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Heaven's Return",
              "effect": "After the first adjacent melee attack to deal HP damage each turn, immediately retaliate with a free basic attack",
              "summary": "After the first adjacent melee attack to deal HP damage each turn, immediately retaliate with a free basic attack"
            },
            "zh": {
              "name": "返天",
              "effect": "每回合首次承受相邻敌人的近战生命伤害后，立即以基础攻击免费反击",
              "summary": "每回合首次承受相邻敌人的近战生命伤害后，立即以基础攻击免费反击"
            }
          }
        },
        {
          "id": "divine_domain",
          "kind": "mythic",
          "effect": "mythic_divine_domain",
          "parts": [
            "shield"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Divine Domain",
              "effect": "During Shieldwall adjacent allies gain +15 defenses and 15% total damage reduction; multiple domains do not stack",
              "summary": "During Shieldwall adjacent allies gain +15 defenses and 15% total damage reduction; multiple domains do not stack"
            },
            "zh": {
              "name": "神域",
              "effect": "盾墙时相邻盟友+15近防/远防并获得15%总伤害减免；多个神域不叠加",
              "summary": "盾墙时相邻盟友+15近防/远防并获得15%总伤害减免；多个神域不叠加"
            }
          }
        },
        {
          "id": "heavenly_rejection",
          "kind": "mythic",
          "effect": "mythic_heavenly_rejection",
          "parts": [
            "shield"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Heavenly Rejection",
              "effect": "Completely negate the damage and secondary effects of the first direct attack each turn",
              "summary": "Completely negate the damage and secondary effects of the first direct attack each turn"
            },
            "zh": {
              "name": "天拒",
              "effect": "每回合第一次直接攻击造成的伤害和附带负面状态完全无效",
              "summary": "每回合第一次直接攻击造成的伤害和附带负面状态完全无效"
            }
          }
        },
        {
          "id": "counterstroke",
          "kind": "mythic",
          "effect": "mythic_counterstroke",
          "parts": [
            "shield"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Counterstroke",
              "effect": "After the first melee block each turn, immediately counterattack for free; if unable, daze the attacker for 1 turn",
              "summary": "After the first melee block each turn, immediately counterattack for free; if unable, daze the attacker for 1 turn"
            },
            "zh": {
              "name": "反戈",
              "effect": "每回合首次格挡近战后立即免费反击；无法反击时使攻击者恍惚1回合",
              "summary": "每回合首次格挡近战后立即免费反击；无法反击时使攻击者恍惚1回合"
            }
          }
        },
        {
          "id": "world_guard",
          "kind": "mythic",
          "effect": "mythic_world_guard",
          "parts": [
            "shield"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "World Guard",
              "effect": "Once each turn, absorb 50% of direct damage to an adjacent ally, up to 40, as equal shield durability loss",
              "summary": "Once each turn, absorb 50% of direct damage to an adjacent ally, up to 40, as equal shield durability loss"
            },
            "zh": {
              "name": "护世",
              "effect": "每回合相邻盟友首次受到直接伤害时，盾牌吸收其中50%，最多40点，并承受等量耐久损失",
              "summary": "每回合相邻盟友首次受到直接伤害时，盾牌吸收其中50%，最多40点，并承受等量耐久损失"
            }
          }
        },
        {
          "id": "eternal_bulwark",
          "kind": "mythic",
          "effect": "mythic_eternal_bulwark",
          "parts": [
            "shield"
          ],
          "minRarityRank": 6,
          "ranges": {},
          "value": null,
          "chance": null,
          "kindText": {
            "en": "Mythic",
            "zh": "神话"
          },
          "unlockText": {
            "en": "Legendary Equipment+",
            "zh": "传奇装备+"
          },
          "text": {
            "en": {
              "name": "Eternal Bulwark",
              "effect": "First Shieldwall each turn refunds all AP/50% fatigue and lasts 1 extra turn",
              "summary": "First Shieldwall each turn refunds all AP/50% fatigue and lasts 1 extra turn"
            },
            "zh": {
              "name": "永固",
              "effect": "每回合首次盾墙返还全部行动点和50%疲劳，并额外持续1回合",
              "summary": "每回合首次盾墙返还全部行动点和50%疲劳，并额外持续1回合"
            }
          }
        }
      ],
      "reforgeRules": [
        {
          "from": "white",
          "to": "green",
          "materialTier": "white",
          "materialCost": 3,
          "moneyCost": 200
        },
        {
          "from": "green",
          "to": "blue",
          "materialTier": "green",
          "materialCost": 4,
          "moneyCost": 500
        },
        {
          "from": "blue",
          "to": "purple",
          "materialTier": "blue",
          "materialCost": 5,
          "moneyCost": 1000
        }
      ],
      "disassembleRules": [
        {
          "rarity": "white",
          "moneyCost": 0,
          "stoneCountMin": 1,
          "stoneCountMax": 1,
          "extraStoneChance": 0,
          "removalStoneChance": 5
        },
        {
          "rarity": "green",
          "moneyCost": 0,
          "stoneCountMin": 1,
          "stoneCountMax": 1,
          "extraStoneChance": 0,
          "removalStoneChance": 8
        },
        {
          "rarity": "blue",
          "moneyCost": 100,
          "stoneCountMin": 1,
          "stoneCountMax": 2,
          "extraStoneChance": 30,
          "removalStoneChance": 12
        },
        {
          "rarity": "purple",
          "moneyCost": 100,
          "stoneCountMin": 2,
          "stoneCountMax": 2,
          "extraStoneChance": 0,
          "removalStoneChance": 18
        },
        {
          "rarity": "red",
          "moneyCost": 100,
          "stoneCountMin": 2,
          "stoneCountMax": 3,
          "extraStoneChance": 30,
          "removalStoneChance": 25
        },
        {
          "rarity": "prismatic",
          "moneyCost": 100,
          "stoneCountMin": 3,
          "stoneCountMax": 3,
          "extraStoneChance": 0,
          "removalStoneChance": 35
        }
      ]
    }
  },
  "valkyries": [
    {
      "id": "saber",
      "order": 1,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "classic",
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
        "Hitpoints": 20,
        "MeleeSkill": 15,
        "MeleeDefense": 10,
        "Bravery": 25
      },
      "images": {
        "card": "assets/valkyries/saber_card.png",
        "skin": "assets/valkyries/saber_skin_preview.png",
        "trait": "assets/traits/saber_trait_icon.png"
      },
      "skins": [
        {
          "id": "saber_skin",
          "images": {
            "portrait": "assets/valkyries/saber_card.png",
            "preview": "assets/valkyries/saber_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Saber Skin",
              "description": ""
            },
            "zh": {
              "name": "Saber 皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "saber_invisible_air",
          "icon": "saber_invisible_air",
          "image": "assets/skills/saber_invisible_air.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "HitChance": 10,
            "MaxMana": 4,
            "StartingMana": 1
          },
          "text": {
            "en": {
              "name": "Invisible Air",
              "description": "Compressed wind conceals Excalibur's reach while Saber gathers Mana through direct offense and defense.",
              "tooltip": [
                "Ordinary active melee weapon attacks gain +10 chance to hit. Their entire area ignores shield defense; Riposte and Attacks of Opportunity ignore shields without the +10 bonus.",
                "Strike Air and Excalibur use their own hit bonuses and still ignore shield defense.",
                "Starts battle with 1 Mana. Once per round, the first ordinary active melee weapon action to hit grants 1 Mana, and the first enemy direct attack to deal at least 1 HP or armor damage grants 1 Mana. Maximum 4."
              ]
            },
            "zh": {
              "name": "风王结界",
              "description": "压缩风隐藏 Excalibur 的长度与轨迹，Saber 则通过正面进攻与承伤积蓄魔力。",
              "tooltip": [
                "普通主动近战武器攻击命中 +10，范围内所有目标均无视盾牌防御；反击和借机攻击只无视盾牌，不获得 +10 命中。",
                "风王铁槌和胜利誓约之剑使用各自的命中加成，但同样无视盾牌防御。",
                "开战获得 1 点魔力。每轮第一次普通主动近战武器行动命中后获得 1 点，第一次被敌方直接攻击造成至少 1 点生命或护甲伤害后再获得 1 点；最多 4 点。"
              ]
            }
          }
        },
        {
          "key": "saber_strike_air",
          "icon": "saber_strike_air",
          "image": "assets/skills/saber_strike_air.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "MinRange": 1,
            "MaxRange": 4,
            "ManaCost": 2,
            "HitChance": 25,
            "WeaponDamageMult": 1,
            "ArmorDamageMult": 2,
            "PushDistance": 2,
            "DazeTurns": 1,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "Strike Air",
              "description": "Release Invisible Air as a crushing wind hammer through every enemy in a straight line.",
              "tooltip": [
                "Requires 2 Mana and a melee weapon. Select an enemy on a visible straight line at range 1-4; each enemy is attacked separately with +25 chance to hit, no distance penalty, and ignored shield defense.",
                "Deals 100% weapon damage and 200% armor damage to each enemy, resolving farthest to nearest.",
                "Each surviving hit target is pushed directly away from Saber by up to 2 tiles and Dazed for 1 turn. Failed or immune pushes still attempt Daze."
              ]
            },
            "zh": {
              "name": "风王铁槌",
              "description": "Saber 释放风王结界，将压缩风化为贯穿直线敌阵的铁槌。",
              "tooltip": [
                "需要 2 点魔力和近战武器。选择 1 至 4 格内直线上一名可见敌人；每名敌人独立判定，命中 +25，不受距离衰减并无视盾牌防御。",
                "对每名敌人造成 100% 武器伤害和 200% 护甲伤害，按距离由远到近结算。",
                "命中存活目标后，将其沿远离 Saber 的方向击退最多 2 格并施加 1 回合茫然；无法击退或免疫击退时仍尝试施加茫然。"
              ]
            }
          }
        },
        {
          "key": "saber_excalibur",
          "icon": "saber_excalibur",
          "image": "assets/skills/saber_excalibur.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 7,
            "FatigueCost": 40,
            "MinRange": 1,
            "MaxRange": 8,
            "ManaCost": 4,
            "PerBattleUses": 1,
            "BeamWidth": 1,
            "HitChance": 50,
            "WeaponDamageMult": 2,
            "ArmorDamageMult": 2,
            "DirectDamageAdd": 0.3,
            "FixedBase": 50,
            "BraveryMult": 0.25,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "Sword of Promised Victory",
              "description": "Spend full Mana to release Excalibur's true name as a once-per-battle wide beam of golden light.",
              "tooltip": [
                "Requires 4 Mana and a melee weapon. Select an enemy on a visible straight line at range 1-8; each target gains +50 chance to hit, no distance penalty, and ignored shield defense.",
                "Deals 200% weapon damage, 200% armor damage, and adds 30 percentage points of armor penetration.",
                "Each weapon-hit survivor takes fixed HP damage equal to 50 plus 25% of Saber's Resolve snapshot, rounded down. Weapon kills receive no fixed followup.",
                "Hits enemies on the center line and within 1 tile of it, only in front of Saber and no farther than the main target; snapshots targets and resolves nearest to farthest without harming allies."
              ]
            },
            "zh": {
              "name": "胜利誓约之剑",
              "description": "Saber 消耗满额魔力解放 Excalibur 真名，释放每场战斗一次的宽幅黄金光炮。",
              "tooltip": [
                "需要 4 点魔力和近战武器。选择 1 至 8 格内直线上一名可见敌人；每名目标命中 +50，不受距离衰减并无视盾牌防御。",
                "造成 200% 武器伤害、200% 护甲伤害，并在武器原有基础上额外增加 30 个百分点护甲穿透。",
                "每名被武器命中且仍存活的目标受到 50 加 Saber 施法时决心 25%（向下取整）的固定生命伤害；武器击杀不追加。",
                "影响中心线及距线 1 格内、位于 Saber 前方且不超过主目标距离的敌人；开始时锁定目标，去重后由近到远结算，不伤害友军。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Saber",
          "backgroundName": "Valkyrie Saber",
          "backgroundDescription": "Saber's true name is Artoria Pendragon, the legendary King of Knights who takes the field as a sword-bearing Heroic Spirit with Excalibur in hand. Calm, disciplined, and bound to her vows, she places the duty to protect her people above her own heart.",
          "traitName": "Saber Trait",
          "traitDescription": "The King of Knights brings a dragon's vitality, peerless swordsmanship, and unwavering royal authority to the front line.",
          "traitTooltip": [
            "Hitpoints +20, Melee Skill +15, Melee Defense +10, Resolve +25."
          ]
        },
        "zh": {
          "name": "Saber",
          "backgroundName": "女武神 Saber",
          "backgroundDescription": "Saber 真名为阿尔托莉雅 潘德拉贡，是传说中的骑士王，持圣剑 Excalibur 作为剑士英灵参战。她沉着克制、重视誓约与王道，在战场上总把个人情感压在守护人民的责任之后。",
          "traitName": "Saber 特性",
          "traitDescription": "骑士王以龙之炉心般的生命力、超凡剑术与坚定王道统率正面战场。",
          "traitTooltip": [
            "生命值 +20，近战技能 +15，近战防御 +10，决心 +25。"
          ]
        }
      }
    },
    {
      "id": "silver_wolf",
      "order": 2,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "hybrid_skirmisher",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "silver_wolf_skin",
          "images": {
            "portrait": "assets/valkyries/silver_wolf_card.png",
            "preview": "assets/valkyries/silver_wolf_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Silver Wolf Skin",
              "description": ""
            },
            "zh": {
              "name": "银狼皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "silver_wolf_aether_editing",
          "icon": "silver_wolf_weakness_implant",
          "image": "assets/skills/silver_wolf_weakness_implant.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Aether Editing",
              "description": "Silver Wolf rewrites one enemy combat rule at a time through aether editing.",
              "tooltip": [
                "Attack, Defense, and Speed Vulnerability share one successful rewrite each Silver Wolf turn. Persistent vulnerabilities are removed when she rewrites again, leaves combat, or combat ends."
              ]
            },
            "zh": {
              "name": "以太编辑",
              "description": "银狼通过以太编辑，每次改写一名敌人的一项战斗规则。",
              "tooltip": [
                "攻击、防御与速度漏洞共享银狼每个自身回合一次的成功改写。持续漏洞会在银狼再次改写、离场或战斗结束时移除。"
              ]
            }
          }
        },
        {
          "key": "silver_wolf_attack_vulnerability",
          "icon": "silver_wolf_attack_vulnerability",
          "image": "assets/skills/silver_wolf_attack_vulnerability.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Attack Vulnerability",
              "description": "Rewrite one visible enemy's attack routine, reducing its Melee Skill and Ranged Skill by 100.",
              "tooltip": [
                "Target Melee Skill -100 and Ranged Skill -100.",
                "Costs 3 AP and 10 Fatigue. Range 1-7. Persists until Silver Wolf rewrites again; not an attack.",
                "Silver Wolf has already rewritten one rule this turn."
              ]
            },
            "zh": {
              "name": "攻击漏洞",
              "description": "改写一名可见敌人的攻击逻辑，使其近战技能和远程技能各降低 100。",
              "tooltip": [
                "目标近战技能 -100，远程技能 -100。",
                "消耗 3 AP、增加 10 疲劳，距离 1-7。持续至银狼再次改写；不属于攻击。",
                "银狼本回合已经改写过一次规则。"
              ]
            }
          }
        },
        {
          "key": "silver_wolf_defense_vulnerability",
          "icon": "silver_wolf_defense_vulnerability",
          "image": "assets/skills/silver_wolf_defense_vulnerability.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Defense Vulnerability",
              "description": "Rewrite one visible enemy's defense routine, reducing its Melee Defense and Ranged Defense by 100.",
              "tooltip": [
                "Target Melee Defense -100 and Ranged Defense -100.",
                "Costs 3 AP and 10 Fatigue. Range 1-7. Persists until Silver Wolf rewrites again; not an attack."
              ]
            },
            "zh": {
              "name": "防御漏洞",
              "description": "改写一名可见敌人的防御逻辑，使其近战防御和远程防御各降低 100。",
              "tooltip": [
                "目标近战防御 -100，远程防御 -100。",
                "消耗 3 AP、增加 10 疲劳，距离 1-7。持续至银狼再次改写；不属于攻击。"
              ]
            }
          }
        },
        {
          "key": "silver_wolf_speed_vulnerability",
          "icon": "silver_wolf_speed_vulnerability",
          "image": "assets/skills/silver_wolf_speed_vulnerability.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Speed Vulnerability",
              "description": "Crash one visible enemy's action program and stun it for 1 turn.",
              "tooltip": [
                "Costs 3 AP and 10 Fatigue. Range 1-7. Clears Silver Wolf's persistent vulnerability and applies the vanilla 1-turn Stunned effect.",
                "Enemies immune to stun cannot be selected."
              ]
            },
            "zh": {
              "name": "速度漏洞",
              "description": "令一名可见敌人的行动程序崩溃，使其眩晕 1 回合。",
              "tooltip": [
                "消耗 3 AP、增加 10 疲劳，距离 1-7。清除银狼当前持续漏洞，并施加原版 1 回合眩晕。",
                "明确免疫眩晕的敌人不能成为目标。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Silver Wolf",
          "backgroundName": "Valkyrie Silver Wolf",
          "backgroundDescription": "Silver Wolf is a Stellaron Hunter and genius hacker who treats the universe like a game waiting to be cleared. Carefree and provocative on the surface, she can edit reality through aether hacking and still executes Elio's scripts with unnerving precision.",
          "traitName": "Silver Wolf Trait",
          "traitDescription": "Silver Wolf's aether editing increases Melee Skill by 15, Ranged Skill by 15, Initiative by 30, and maximum Action Points by 3.",
          "traitTooltip": [
            "Melee Skill +15.",
            "Ranged Skill +15.",
            "Initiative +30 and maximum AP +3."
          ]
        },
        "zh": {
          "name": "银狼",
          "backgroundName": "女武神银狼",
          "backgroundDescription": "银狼是星核猎手成员兼天才黑客，把宇宙视为一场可被通关的游戏。她擅长以以太编辑改写现实，性格散漫挑衅，却总能在关键任务中精准执行艾利欧的剧本。",
          "traitName": "银狼特性",
          "traitDescription": "银狼的以太编辑让她的近战技能提高 15，远程技能提高 15，主动值提高 30，最大行动点提高 3。",
          "traitTooltip": [
            "近战技能 +15。",
            "远程技能 +15。",
            "主动值 +30，最大 AP +3。"
          ]
        }
      }
    },
    {
      "id": "robin",
      "order": 3,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 82,
        "Bravery": 70,
        "Stamina": 140,
        "MeleeSkill": 45,
        "RangedSkill": 65,
        "MeleeDefense": 10,
        "RangedDefense": 25,
        "Initiative": 120
      },
      "talents": {
        "Hitpoints": 1,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 0,
        "RangedSkill": 2,
        "MeleeDefense": 1,
        "RangedDefense": 3,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/robin_card.png",
        "skin": "assets/valkyries/robin_skin_preview.png",
        "trait": "assets/traits/robin_trait_icon.png"
      },
      "skins": [
        {
          "id": "robin_skin",
          "images": {
            "portrait": "assets/valkyries/robin_card.png",
            "preview": "assets/valkyries/robin_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Robin: Sunny Song",
              "description": "Robin in her blue-and-white stage dress, carrying Harmony through wings and a stellar halo."
            },
            "zh": {
              "name": "知更鸟：晴歌",
              "description": "身着蓝白礼服、以羽翼与星环传递同谐歌声的知更鸟。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "robin_harmonic_resonance",
          "icon": "robin_harmonic_resonance",
          "image": "assets/skills/robin_harmonic_resonance.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxHarmony": 12
          },
          "text": {
            "en": {
              "name": "A Chorus of One Heart",
              "description": "Each roster ally's first direct attack in an action turn grants 1 Harmony whether it hits or misses, and their first kill grants another 1. Harmony caps at 12 and strengthens the whole company at 3/6/9/12. Follow-ups, fixed damage, damage over time, reflection, and scenery damage do not count.",
              "tooltip": [
                "Each ally's first direct attack and first kill per action turn grant 1 Harmony each, up to 12.",
                "At 3/6/9/12 Harmony, all allies gain +3/+6/+9/+12 Melee and Ranged Skill.",
                "At 3/6/9/12 Harmony, all allies deal +5%/+10%/+15%/+20% damage."
              ]
            },
            "zh": {
              "name": "万众一心的和声",
              "description": "编制内友军每个行动回合的首次直接攻击（无论命中）提供 1 点和声，首次击杀再提供 1 点。和声最多 12 点，并按 3/6/9/12 点强化全军。追击、固定伤害、持续伤害、反射与场景伤害不会触发。",
              "tooltip": [
                "友军每回合首次直接攻击与首次击杀分别积累 1 点和声，最多 12 点。",
                "和声达到 3/6/9/12 时，全军近战与远程技能分别 +3/+6/+9/+12。",
                "和声达到 3/6/9/12 时，全军常规伤害分别 +5%/+10%/+15%/+20%。"
              ]
            }
          }
        },
        {
          "key": "robin_winged_sunny_song",
          "icon": "robin_winged_sunny_song",
          "image": "assets/skills/robin_winged_sunny_song.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 20,
            "CooldownRounds": 3,
            "Heal": 15,
            "FatigueRecovery": 20
          },
          "text": {
            "en": {
              "name": "Winged Sunny Song",
              "description": "Support every roster ally with a bright song, immediately restoring health, Fatigue, and morale and granting a powerful offensive and defensive enhancement through the end of the next full round. 3-round cooldown.",
              "tooltip": [
                "All allies recover 15 Hitpoints and attempt to improve morale by one level.",
                "All allies recover 20 Fatigue.",
                "+15 Melee/Ranged Skill, +10 Melee/Ranged Defense, +20 Resolve, +20% damage, and -25% Fatigue generated.",
                "Lasts for the current round and the next full round; reapplying refreshes rather than stacks."
              ]
            },
            "zh": {
              "name": "振翅的晴歌",
              "description": "以晴朗歌声支援全体编制内友军，立刻恢复生命、疲劳与士气，并赋予持续至下一完整轮结束的强力攻防增益。冷却 3 轮。",
              "tooltip": [
                "全体友军恢复 15 点生命，并尝试提升一级士气。",
                "全体友军恢复 20 点疲劳。",
                "近战/远程技能 +15，近战/远程防御 +10，决心 +20，造成伤害 +20%，疲劳产生 -25%。",
                "持续当前轮与下一完整轮；再次施放只刷新，不叠加。"
              ]
            }
          }
        },
        {
          "key": "robin_encore_for_you",
          "icon": "robin_encore_for_you",
          "image": "assets/skills/robin_encore_for_you.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 15,
            "HarmonyCost": 3,
            "MinRange": 1,
            "MaxRange": 7,
            "APRecovery": 6,
            "HealPercent": 0.2
          },
          "text": {
            "en": {
              "name": "An Encore for You",
              "description": "Spend 3 Harmony to restore one other roster ally within 1–7 tiles. If that ally has already acted this round, they immediately gain another action. Once per round.",
              "tooltip": [
                "Restore 6 Action Points up to the normal maximum and let a target who already acted act again. Cooldowns, ammunition, and per-round resources are not refreshed.",
                "Restore 20% maximum Hitpoints and remove half of current Fatigue.",
                "Remove Dazed, Staggered, Distracted, and Disarmed, then improve morale by one level.",
                "The target deals +25% damage until the end of their next action.",
                "An Encore has already been given this round."
              ]
            },
            "zh": {
              "name": "献给你的安可",
              "description": "消耗 3 点和声，为 1–7 格内一名其他编制内友军恢复行动能力与状态。若其本轮已经行动，则立刻获得一次新的行动机会。每轮限用一次。",
              "tooltip": [
                "恢复 6 点行动点（不超过上限），并使本轮已行动目标再次行动。不会刷新技能冷却、弹药或每轮资源。",
                "恢复最大生命值的 20%，并将当前疲劳降低一半。",
                "解除茫然、踉跄、分心与缴械，并提升一级士气。",
                "目标在下一次行动结束前造成伤害 +25%。",
                "本轮已经献出安可。"
              ]
            }
          }
        },
        {
          "key": "robin_myriad_tones_starry_fugue",
          "icon": "robin_myriad_tones_starry_fugue",
          "image": "assets/skills/robin_myriad_tones_starry_fugue.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 9,
            "FatigueCost": 35,
            "HarmonyCost": 12,
            "APRecovery": 4,
            "FatigueRecovery": 20,
            "HealPercent": 0.2,
            "EchoDamage": 25,
            "EchoHeal": 15,
            "EchoFatigueRecovery": 10
          },
          "text": {
            "en": {
              "name": "A Myriad Tones, a Starry Fugue",
              "description": "Spend all 12 Harmony to perform the finale. Every roster ally except Robin restores health and Fatigue and gains 4 Action Points that may exceed the maximum. Allies who already acted act again immediately; allies yet to act retain the overflow for their upcoming normal action. Once per battle.",
              "tooltip": [
                "Every other ally gains 4 Action Points beyond the maximum. Allies yet to act also receive them and begin their normal action at maximum AP +4.",
                "Restore 20 Fatigue and 20% maximum Hitpoints. Robin ends her current action after casting but acts normally the next time her turn arrives.",
                "During the next action: +15 Melee/Ranged Skill, +10 Melee/Ranged Defense, +30% damage, and -1 AP per tile moved.",
                "The first direct damaging hit in that action makes Robin deal 25 fixed damage ignoring armor; the attacker recovers 15 Hitpoints and 10 Fatigue."
              ]
            },
            "zh": {
              "name": "千音迭奏，群星赋格",
              "description": "消耗全部 12 点和声奏响终曲。除知更鸟外，全体编制内友军恢复生命与疲劳并获得 4 点可超过上限的行动点；已行动者立刻再次行动，未行动者也会在即将到来的正常行动中保留这 4 点溢出行动点。每场战斗限用一次。",
              "tooltip": [
                "所有其他友军获得 4 点可超过上限的行动点；未行动友军同样获得，并在正常行动开始时保持为最大行动点 +4。",
                "恢复 20 点疲劳与最大生命值的 20%。知更鸟施放后结束当前行动，但下次轮到她时正常行动。",
                "下一次行动中：近战/远程技能 +15，近战/远程防御 +10，造成伤害 +30%，每格移动行动点消耗 -1。",
                "该行动中首次直接造成伤害时，知更鸟追加 25 点无视护甲的固定伤害；攻击者恢复 15 生命与 10 疲劳。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Robin",
          "backgroundName": "Valkyrie Robin",
          "backgroundDescription": "A singer from a stage among the stars. Robin does not claim the spotlight with a blade; she makes every ally the protagonist of the song, soothing exhaustion, restoring action, and building the whole company toward a battle-turning finale.",
          "traitName": "Singer of Clear Skies",
          "traitDescription": "Robin supports the formation from the back line through the wings of Harmony, regardless of her equipped weapon.",
          "traitTooltip": [
            "+3 maximum Action Points, +20 Resolve, +15 Initiative, +15 Ranged Defense, and +50% Fatigue recovery efficiency; morale checks cannot lower her morale."
          ]
        },
        "zh": {
          "name": "知更鸟",
          "backgroundName": "女武神知更鸟",
          "backgroundDescription": "来自群星舞台的歌者。知更鸟不以刀锋争夺聚光灯，而是让每一位同伴都成为乐章的主角；她的歌声能舒缓疲惫、重振行动，并在全军齐声时奏响足以扭转战局的终曲。",
          "traitName": "晴空歌者",
          "traitDescription": "知更鸟以同谐的羽翼守望后排，在任何武器配置下都能维持强大的全军支援。",
          "traitTooltip": [
            "最大行动点 +3，决心 +20，主动值 +15，远程防御 +15，疲劳恢复效率 +50%；不会因士气检定而降低士气。"
          ]
        }
      }
    },
    {
      "id": "jeanne",
      "order": 4,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_support",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 95,
        "Bravery": 70,
        "Stamina": 135,
        "MeleeSkill": 70,
        "RangedSkill": 45,
        "MeleeDefense": 20,
        "RangedDefense": 18,
        "Initiative": 110
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 3,
        "RangedSkill": 0,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 1
      },
      "traitBonuses": {
        "Bravery": 20,
        "MeleeSkill": 15,
        "MeleeDefense": 10,
        "RangedDefense": 10,
        "Stamina": 15,
        "MentalMorale": 25
      },
      "images": {
        "card": "assets/valkyries/jeanne_card.png",
        "skin": "assets/valkyries/jeanne_skin_preview.png",
        "trait": "assets/traits/jeanne_trait_icon.png"
      },
      "skins": [
        {
          "id": "jeanne_skin",
          "images": {
            "portrait": "assets/valkyries/jeanne_card.png",
            "preview": "assets/valkyries/jeanne_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jeanne d'Arc — Savior Saint",
              "description": "Jeanne d'Arc in silver armor, guarding the company beneath her sacred standard as a Ruler."
            },
            "zh": {
              "name": "贞德：救国圣女",
              "description": "身披银甲、手持圣旗，以 Ruler 之名守护战团的贞德。"
            }
          }
        },
        {
          "id": "jeanne_summer_skin",
          "images": {
            "portrait": "assets/valkyries/jeanne_summer_card.png",
            "preview": "assets/valkyries/jeanne_summer_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jeanne d'Arc — Summer Lifeguard",
              "description": "Jeanne trades her sacred armor for a white rescue jacket, black-rimmed glasses, and a lifeguard's whistle to watch over the company beneath the summer sun."
            },
            "zh": {
              "name": "贞德：盛夏救生员",
              "description": "褪下银甲，换上白色救生外套、黑框眼镜与救生口哨，在盛夏海风中守护战团的贞德。"
            }
          }
        },
        {
          "id": "jeanne_beach_skin",
          "images": {
            "portrait": "assets/valkyries/jeanne_beach_card.png",
            "preview": "assets/valkyries/jeanne_beach_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jeanne d'Arc — Azure Shore",
              "description": "Jeanne spends a bright day by the sea in a pale aqua hoodie and black swimsuit, carrying her striped rope-handled beach tote through the summer breeze."
            },
            "zh": {
              "name": "贞德：碧海假日",
              "description": "贞德换上浅蓝色连帽外套与黑色泳装，提着条纹绳柄沙滩包，在明亮海风中享受难得的夏日假期。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "jeanne_revelation_holy_banner",
          "icon": "jeanne_revelation_holy_banner",
          "image": "assets/skills/jeanne_revelation_holy_banner.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxRevelation": 4,
            "StartingRevelation": 2,
            "BaseAuraRange": 4,
            "TrueBannerRange": 5
          },
          "text": {
            "en": {
              "name": "Revelation — Holy Banner",
              "description": "With a legal banner or polearm, Jeanne maintains a permanent command aura and gathers renewable Revelation at the start of normal turns.",
              "tooltip": [
                "Allies inside the aura recover 5 Fatigue at the start of their normal turn, at most once per combat round.",
                "Jeanne's weapon attacks gain +25% weapon damage and +10 percentage points of armor penetration. Active weapon attacks also gain +10 hit chance; counters and attacks of opportunity do not gain the hit bonus.",
                "Bond upgrade: the first time each aura ally begins a normal turn below Steady morale in a battle, their morale rises by one level.",
                "No legal banner or polearm is equipped: the aura, banner combat bonuses, and both active skills are disabled. Existing Revelation is retained.",
                "A legal weapon enables a 4-tile holy-banner aura, or 5 with a true banner. Other roster allies gain +10 to all four combat skills and Resolve, plus 5 Fatigue recovery each round.",
                "Starts combat with 2/4 Revelation and gains 1 at each normal turn start; spend it repeatedly on judgment or the group Noble Phantasm."
              ]
            },
            "zh": {
              "name": "启示：圣旗",
              "description": "贞德以合法战旗或长柄武器维持常驻团队光环，并在正常行动回合开始时积累可循环使用的天启。",
              "tooltip": [
                "光环内友军每个战斗轮次在自身正常行动回合开始时降低 5 点疲劳。",
                "贞德的武器攻击获得武器伤害 +25% 和护甲穿透 +10 个百分点；主动武器攻击额外获得命中 +10。反击与借机攻击不获得命中加成。",
                "羁绊强化：每名光环友军每场战斗第一次在低于稳定士气时开始正常回合，士气提升一级。",
                "未装备合法战旗或长柄武器：光环、战旗格斗和两个主动技能均失效；已有天启仍保留。",
                "合法武器启用 4 格圣旗光环，真正战旗扩大至 5 格；其他编制内友军五项攻防/决心各 +10，并每轮减 5 疲劳。",
                "战斗开始获得 2/4 天启，每次正常行动回合开始 +1；天启用于重复发动裁决或群体宝具。"
              ]
            }
          }
        },
        {
          "key": "jeanne_true_name_divine_judgement",
          "icon": "jeanne_true_name_divine_judgement",
          "image": "assets/skills/jeanne_true_name_divine_judgement.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "RevelationCost": 2,
            "MinRange": 1,
            "MaxRange": 2,
            "HitChance": 25,
            "WeaponDamageMult": 1.3,
            "ArmorDamageMult": 1.5,
            "DirectDamageAdd": 0.15,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "True Name Discernment — Divine Judgment",
              "description": "Jeanne reads the enemy's identity and attack pattern, then delivers a precise mid-range judgment with her banner.",
              "tooltip": [
                "Range 1-2. Uses Melee Skill with +25 hit chance, ignores the range-2 penalty, and ignores shield defense.",
                "Deals 130% weapon damage, 150% armor damage, and +15 penetration points; it also receives Holy Banner's +25% weapon damage and +10 penetration points.",
                "A living target hit gains True Name Discernment for one complete turn: -20% regular damage, -10 to both defenses, -3 current AP, and an attempted 1-turn Dazed effect. Repeated hits only refresh it.",
                "Requires a legal banner or polearm.",
                "Bond upgrade: the first successful Divine Judgment hit in each normal turn refunds 1 Revelation."
              ]
            },
            "zh": {
              "name": "真名看破：神明裁决",
              "description": "贞德识破敌人的能力与攻击轨迹，以圣旗发动一次中距离裁决攻击。",
              "tooltip": [
                "距离 1-2；使用近战技能，命中 +25，不受第 2 格距离衰减，并无视盾牌防御。",
                "造成 130% 武器伤害、150% 护甲伤害与额外 15 个百分点护甲穿透；仍享受圣旗格斗的 +25% 武器伤害与 +10 穿透。",
                "命中且目标存活时施加 1 个完整行动回合的真名看破：常规伤害 -20%，双防 -10，当前 AP -3，并尝试施加 1 回合茫然。重复命中只刷新。",
                "需要装备合法战旗或长柄武器。",
                "羁绊强化：每个正常行动回合第一次成功命中神明裁决后返还 1 点天启。"
              ]
            }
          }
        },
        {
          "key": "jeanne_luminosite_eternelle",
          "icon": "jeanne_luminosite_eternelle",
          "image": "assets/skills/jeanne_luminosite_eternelle.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 6,
            "FatigueCost": 30,
            "RevelationCost": 4,
            "BaseRange": 4,
            "TrueBannerRange": 5,
            "ProtectionTurns": 2,
            "BlessingTurns": 2,
            "HealPerTurn": 10
          },
          "text": {
            "en": {
              "name": "Luminosité Eternelle — My God Is Here",
              "description": "Jeanne raises her sacred banner, cleansing herself and nearby roster allies and granting direct-attack invulnerability and a healing blessing for each recipient's next 2 normal turns.",
              "tooltip": [
                "Removes controlled temporary negative effects, then raises Fleeing or Breaking morale to Wavering and Wavering to Steady.",
                "Holy Flag Protection takes effect immediately and lasts until the end of each recipient's next 2 normal turns. It nullifies all direct enemy attacks and their on-hit effects without a hit limit. Damage over time, terrain, reflection, and scripts that bypass attack nullification are excluded.",
                "Holy Maiden's Blessing uses the same 2-normal-turn duration: +10 to both defenses and 10 Hitpoints restored at each normal turn start, twice in total. Extra, command, and restored turns neither heal nor shorten either buff. Recasting only refreshes them.",
                "After use Jeanne's current AP becomes 0 and she keeps the banner raised. Restored AP cannot enable attack skills before her next normal turn.",
                "Requires a legal banner or polearm.",
                "Maximum-bond upgrade: retains 1 Revelation after use, and Holy Maiden's Blessing heals 15 Hitpoints each time. Protection duration and attack-nullification rules are unchanged."
              ]
            },
            "zh": {
              "name": "吾神在此——Luminosité Eternelle",
              "description": "贞德举起圣旗，净化自身与附近编制内友军，并赋予持续各自 2 个正常行动回合的直接攻击无敌与恢复祝福。",
              "tooltip": [
                "清除受控白名单中的临时负面效果，并把逃跑/崩溃提高至动摇、动摇提高至稳定。",
                "圣旗庇护立即生效，持续至每名受术者接下来的第 2 个正常行动回合结束：期间所有敌方直接攻击及其命中附加效果无效，不限抵挡次数。持续伤害、地形伤害、反伤及绕过攻击无效的脚本伤害除外。",
                "圣女祝福采用相同的 2 个正常行动回合计时：双防 +10，每次正常回合开始恢复 10 生命，共 2 次。额外、王令、恢复行动不治疗，也不缩短庇护或祝福；重复施放只刷新。",
                "发动后贞德当前 AP 归零并保持举旗；到下一次正常行动回合前，任何 AP 返还都不能让她使用攻击技能。",
                "需要装备合法战旗或长柄武器。",
                "满羁绊强化：发动后保留 1 点天启，圣女祝福每次恢复 15 生命；庇护持续时间与攻击无效规则不变。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Jeanne d'Arc",
          "backgroundName": "Valkyrie Jeanne d'Arc",
          "backgroundDescription": "The savior saint of France, summoned in the Ruler class. She bears the sacred banner she carried in life, judges friend and foe amid the chaos of battle, inspires her companions, and turns steadfast faith into a light that shelters them from despair.",
          "traitName": "Ruler — Savior Saint",
          "traitDescription": "Jeanne holds the line through unwavering faith, Ruler resistance, and a lifetime of fighting beneath the sacred banner.",
          "traitTooltip": [
            "+20 Resolve, +15 Melee Skill, +10 Melee Defense, +10 Ranged Defense, and +15 maximum Fatigue. Mental fear checks gain another +25 Resolve."
          ]
        },
        "zh": {
          "name": "贞德",
          "backgroundName": "女武神贞德",
          "backgroundDescription": "以 Ruler 职阶现界的法国救国圣女。她以生前挥舞的圣旗为武装，在混乱的战场上裁定敌我、鼓舞同伴，并用坚定信仰将绝境化作守护众人的光。",
          "traitName": "Ruler：救国圣女",
          "traitDescription": "贞德以坚定信仰、Ruler 的抗性与长期挥舞圣旗的经验维持阵线。",
          "traitTooltip": [
            "决心 +20，近战技能 +15，近战防御 +10，远程防御 +10，最大疲劳 +15；面对精神恐惧类技能时，相关决心检定额外 +25。"
          ]
        }
      }
    },
    {
      "id": "sword_maiden",
      "order": 5,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 105,
        "Bravery": 80,
        "Stamina": 145,
        "MeleeSkill": 78,
        "RangedSkill": 45,
        "MeleeDefense": 22,
        "RangedDefense": 20,
        "Initiative": 120
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 3,
        "RangedSkill": 0,
        "MeleeDefense": 3,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/sword_maiden_card.png",
        "skin": "assets/valkyries/sword_maiden_skin_preview.png",
        "trait": "assets/traits/sword_maiden_trait_icon.png"
      },
      "skins": [
        {
          "id": "sword_maiden_skin",
          "images": {
            "portrait": "assets/valkyries/sword_maiden_card.png",
            "preview": "assets/valkyries/sword_maiden_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Sword Maiden",
              "description": "Her original platinum hair, black blindfold, blue-white vestments, and balance blade—the emblems of judgment tempered by mercy."
            },
            "zh": {
              "name": "剑之圣女",
              "description": "白金长发、黑色眼罩与蓝白神官礼装构成的原典外观，手持象征审判与慈悲的天秤剑。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "sword_maiden_unseeing_mind",
          "icon": "sword_maiden_unseeing_mind",
          "image": "assets/skills/sword_maiden_unseeing_mind.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "FirstHitChance": 20,
            "WeaponDamageMult": 1.2,
            "DirectDamageAdd": 0.15
          },
          "text": {
            "en": {
              "name": "Unseeing Mind's Eye",
              "description": "Though her eyes are covered, her mind senses killing intent before sight ever could.",
              "tooltip": [
                "The first direct melee attack each turn gains +20 chance to hit, +20% weapon damage, and +15 armor penetration points. A miss still consumes it.",
                "The first direct melee attack each turn gains major accuracy, damage, and penetration bonuses.",
                "The first-strike bonus is consumed even if the attack misses.",
                "All direct melee attacks ignore defense granted by shields."
              ]
            },
            "zh": {
              "name": "无明心眼",
              "description": "双眼虽被遮蔽，心眼却比任何视线都更早捕捉杀意。",
              "tooltip": [
                "每回合第一次直接近战攻击获得 +20 命中、+20% 武器伤害与 +15 点护甲穿透；即使命中失败也会消耗。",
                "每回合第一次直接近战攻击获得大幅命中、伤害与穿透强化。",
                "首次攻击未命中时也会消耗心眼强化。",
                "所有直接近战攻击无视盾牌提供的防御。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_balance_condemnation",
          "icon": "sword_maiden_balance_condemnation",
          "image": "assets/skills/sword_maiden_balance_condemnation.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 18,
            "MinRange": 1,
            "MaxRange": 2,
            "HitChance": 20,
            "WeaponDamageMult": 1.6,
            "GoblinDamageMult": 2.1,
            "ArmorDamageMult": 1.4,
            "DirectDamageAdd": 0.25
          },
          "text": {
            "en": {
              "name": "Balance Blade: Condemnation",
              "description": "Cross one tile with the balance blade and deliver an inescapable judgment, especially deadly to goblins.",
              "tooltip": [
                "Range 1–2, once per turn. Gain +20 chance to hit and ignore shield defense.",
                "Deal 160% weapon damage, 140% armor damage, and gain +25 armor penetration points.",
                "Against goblins, deal 210% weapon damage instead.",
                "Before Root Extermination unlocks, a kill refunds 3 Action Points and removes 10 Fatigue.",
                "Balance Blade: Condemnation has already been used this turn."
              ]
            },
            "zh": {
              "name": "天秤剑·断罪",
              "description": "以天秤剑跨越一步距离斩下不可回避的裁决，对哥布林尤为致命。",
              "tooltip": [
                "射程 1 至 2 格，每回合一次，命中 +20，并无视盾牌防御。",
                "造成 160% 武器伤害、140% 护甲伤害，并额外增加 25 点护甲穿透。",
                "对哥布林改为造成 210% 武器伤害。",
                "解锁祸根断绝前，击杀返还 3 行动点并消除 10 疲劳。",
                "本回合已经发动过天秤剑·断罪。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_goblin_codex",
          "icon": "sword_maiden_goblin_codex",
          "image": "assets/skills/sword_maiden_goblin_codex.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "RankStep": 25,
            "MaxRank": 12,
            "HitpointsPerRank": 2,
            "FatiguePerRank": 2,
            "MeleeSkillPerRank": 1,
            "MeleeDefensePerRank": 1,
            "DamagePerRank": 0.01
          },
          "text": {
            "en": {
              "name": "Sacred Hunt Codex",
              "description": "Every goblin cruelty and weakness is entered in the codex. Accumulated hunt points permanently strengthen Sword Maiden.",
              "tooltip": []
            },
            "zh": {
              "name": "讨伐圣典",
              "description": "哥布林的每一种恶行和弱点都被写入圣典，累积的讨伐点数会永久强化剑之圣女。",
              "tooltip": []
            }
          }
        },
        {
          "key": "sword_maiden_cave_survivor",
          "icon": "sword_maiden_cave_survivor",
          "image": "assets/skills/sword_maiden_cave_survivor.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "ActionPointRestore": 2,
            "ControlledDamageMult": 1.15
          },
          "text": {
            "en": {
              "name": "Cave Survivor",
              "description": "She returned from the deepest nest; nets, roots, and terror can no longer hold her.",
              "tooltip": [
                "At turn start, remove one Net, Web, or Root effect. If one is removed, recover 2 Action Points.",
                "Deal 15% more total damage against targets that are netted, rooted, stunned, or dazed."
              ]
            },
            "zh": {
              "name": "洞窟生还者",
              "description": "她已从最深的巢穴中归来；网索、根须和恐惧再也困不住她。",
              "tooltip": [
                "每回合开始时移除一个网缚、蛛网或定身效果；若成功，恢复 2 行动点。",
                "攻击被网缚、定身、眩晕或恍惚的目标时，总伤害提高 15%。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_holy_binding_judgment",
          "icon": "sword_maiden_holy_binding_judgment",
          "image": "assets/skills/sword_maiden_holy_binding_judgment.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 3,
            "FatigueCost": 15,
            "MaxRange": 4,
            "Cooldown": 2,
            "Duration": 2,
            "CombatStatPenalty": 15
          },
          "text": {
            "en": {
              "name": "Holy Binding Judgment",
              "description": "Call forth the scales' sacred chains to bind the guilty and record the judgment owed at the other end.",
              "tooltip": [
                "Range 1–4. For 2 turns, reduce Melee/Ranged Skill and Defense by 15 and block movement skills. Cooldown: 2 rounds.",
                "Goblins are also rooted and disarmed for 1 turn. Root-immune bosses ignore both root and disarm.",
                "If an ally kills the marked goblin, gain half its base points, rounded up."
              ]
            },
            "zh": {
              "name": "圣锁缚罪",
              "description": "召出天秤圣锁束缚罪人，并在锁链另一端记录应得的裁决。",
              "tooltip": [
                "射程 1 至 4 格，持续 2 回合：目标近战/远程技能与防御各降低 15，并封锁位移技能。冷却 2 回合。",
                "哥布林额外被定身并缴械 1 回合；免疫定身的首领不会受到定身与缴械。",
                "被标记的哥布林由盟友击杀时，获得其基础点数的一半，向上取整。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_root_extermination",
          "icon": "sword_maiden_root_extermination",
          "image": "assets/skills/sword_maiden_root_extermination.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "FirstKillActionPoints": 4,
            "FirstKillFatigue": 12,
            "GoblinTriggersPerTurn": 2
          },
          "text": {
            "en": {
              "name": "Root Extermination",
              "description": "Every death fuels the next judgment; against goblins, that power rises a second time.",
              "tooltip": [
                "The first personal kill each turn restores 4 Action Points, removes 12 Fatigue, and resets Condemnation once.",
                "If the first trigger came from a goblin, another goblin kill may trigger the Action Point and Fatigue recovery once more that turn."
              ]
            },
            "zh": {
              "name": "祸根断绝",
              "description": "每一次死亡都成为继续审判的力量；面对哥布林时，这股力量会再次涌现。",
              "tooltip": [
                "每回合首次亲手击杀恢复 4 行动点、消除 12 疲劳，并重置天秤剑·断罪一次。",
                "若首次触发来自哥布林，本回合还可因另一名哥布林击杀额外触发一次行动点与疲劳恢复。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_balance_final_judgment",
          "icon": "sword_maiden_balance_final_judgment",
          "image": "assets/skills/sword_maiden_balance_final_judgment.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 6,
            "FatigueCost": 30,
            "MaxRange": 4,
            "Radius": 2,
            "HitChance": 30,
            "WeaponDamageMult": 2.5,
            "ArmorDamageMult": 1.6,
            "DirectDamageAdd": 0.4,
            "AreaHitpointDamage": 60,
            "GoblinAreaHitpointDamage": 100
          },
          "text": {
            "en": {
              "name": "Balance Blade: Final Judgment",
              "description": "Place the battlefield upon the scales, deliver sword judgment to the main target, and settle every sinner nearby.",
              "tooltip": [
                "Range 1–4, once per battle. The main target suffers an attack at +30 to hit, 250% weapon damage, 160% armor damage, and +40 penetration points, ignoring shields.",
                "All enemies within 2 tiles additionally lose 60 Hitpoints; goblins lose 100. Allies are never harmed.",
                "If this skill kills any enemy, restore Action Points to maximum."
              ]
            },
            "zh": {
              "name": "天秤剑·终裁",
              "description": "将整片战场置于天秤之上，对主目标降下剑之裁决，并清算周围所有罪人。",
              "tooltip": [
                "射程 1 至 4 格，每场一次：主目标命中 +30，受到 250% 武器伤害、160% 护甲伤害与 +40 点护甲穿透，无视盾牌。",
                "目标周围 2 格内所有敌人额外失去 60 生命；哥布林失去 100 生命。不伤及盟友。",
                "若此技能击杀任一敌人，行动点恢复至最大值。"
              ]
            }
          }
        },
        {
          "key": "sword_maiden_light_in_darkness",
          "icon": "sword_maiden_light_in_darkness",
          "image": "assets/skills/sword_maiden_light_in_darkness.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "FirstCondemnationDamageMult": 1.3,
            "KillFollowupHitChance": 25,
            "KillFollowupDamageMult": 1.25
          },
          "text": {
            "en": {
              "name": "Light Seen in Darkness",
              "description": "The long darkness did not take her mercy; it showed her the light she must reach with her own hands.",
              "tooltip": [
                "The first Condemnation each turn costs no Action Points or Fatigue and deals 30% more total damage.",
                "After the first kill each turn, the next direct weapon attack gains +25 chance to hit and +25% total damage.",
                "The first personal goblin kill each turn restores Action Points to maximum."
              ]
            },
            "zh": {
              "name": "于黑暗中见光",
              "description": "漫长黑暗未曾夺走她的慈悲，反而让她看见了必须亲手抵达的光。",
              "tooltip": [
                "每回合第一次天秤剑·断罪不消耗行动点与疲劳，并额外提高 30% 总伤害。",
                "每回合首次击杀后，下一次直接武器攻击获得 +25 命中与 +25% 总伤害。",
                "每回合首次亲手击杀哥布林时，行动点恢复至最大值。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Sword Maiden",
          "backgroundName": "Valkyrie Sword Maiden",
          "backgroundDescription": "A blind high priestess and sword saint who judges evil with a balance-shaped blade. She survived the darkness of a goblin nest; now every hunt is written into her sacred codex, strengthening an already formidable executioner into the doom of goblinkind.",
          "traitName": "Blind Sword Saint",
          "traitDescription": "+2 maximum Action Points and no nighttime accuracy penalty. Melee attacks ignore shield defense. Against goblins, gain +15 chance to hit and deal 25% more total damage.",
          "traitTooltip": []
        },
        "zh": {
          "name": "剑之圣女",
          "backgroundName": "女武神剑之圣女",
          "backgroundDescription": "蒙眼的至高神官，也是以天秤剑裁决邪恶的剑圣。她从哥布林巢穴的黑暗中生还，此后每一次讨伐都会写入圣典，使她从本就强大的审判者成长为绿皮一族无法逃避的终焉。",
          "traitName": "盲眼剑圣",
          "traitDescription": "最大行动点 +2，不受夜间命中惩罚；近战攻击无视盾牌防御。攻击哥布林时命中 +15，并使总伤害提高 25%。",
          "traitTooltip": []
        }
      }
    },
    {
      "id": "jeanne_alter",
      "order": 6,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "jeanne_alter_skin",
          "images": {
            "portrait": "assets/valkyries/jeanne_alter_card.png",
            "preview": "assets/valkyries/jeanne_alter_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jeanne Alter Skin",
              "description": ""
            },
            "zh": {
              "name": "贞德 Alter 皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "jeanne_alter_dragon_witch",
          "icon": "jeanne_alter_dragon_witch",
          "image": "assets/skills/jeanne_alter_dragon_witch.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Dragon Witch",
              "description": "Jeanne Alter's successful melee weapon attacks inflict Black Flame and relentlessly hunt cursed enemies.",
              "tooltip": [
                "Against Black Flame targets, melee weapon attacks gain +15 chance to hit, +20% weapon damage, and +10 percentage points of armor penetration.",
                "A successful melee weapon hit applies or refreshes Black Flame."
              ]
            },
            "zh": {
              "name": "龙之魔女",
              "description": "贞德 Alter 的近战武器攻击命中会施加黑焰，并持续猎杀被诅咒的目标。",
              "tooltip": [
                "攻击黑焰目标时，近战武器攻击命中率 +15、武器伤害 +20%、无视护甲 +10 个百分点。",
                "近战武器攻击命中会施加或刷新黑焰诅咒。"
              ]
            }
          }
        },
        {
          "key": "jeanne_alter_la_grondement_du_haine",
          "icon": "jeanne_alter_la_grondement_du_haine",
          "image": "assets/skills/jeanne_alter_la_grondement_du_haine.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "La Grondement Du Haine",
              "description": "Once per battle, Jeanne Alter strikes a visible enemy 2 to 6 tiles away and every enemy adjacent to it with her melee weapon.",
              "tooltip": [
                "Costs 5 AP and 30 Fatigue. Each target takes a separate attack with +30 hit chance, 150% weapon damage, and 200% armor damage.",
                "Targets that were already cursed when the area was selected instead receive +45 hit chance, 180% weapon damage, +10 penetration points, and 40 fixed hitpoint damage on hit. Every living hit target loses registered temporary buffs, gains or refreshes Black Flame, then receives Strengthening Lockout."
              ]
            },
            "zh": {
              "name": "咆哮吧，吾之愤怒",
              "description": "每场战斗一次，贞德 Alter 以近战武器攻击 2 至 6 格内一名可见敌人及其相邻的所有敌人。",
              "tooltip": [
                "消耗 5 AP 和 30 疲劳。每个目标独立承受一次命中率 +30、150% 武器伤害、200% 护甲伤害的攻击。",
                "范围快照时已带黑焰的目标改为获得命中率 +45、180% 武器伤害、无视护甲 +10 个百分点，且命中后受到 40 点固定生命伤害。所有存活且命中的目标都会移除已登记临时强化、施加或刷新黑焰，再获得强化封锁。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Jeanne Alter",
          "backgroundName": "Valkyrie Jeanne Alter",
          "backgroundDescription": "Jeanne Alter is an Avenger shaped by the Holy Grail from the hatred imagined around Saint Jeanne's betrayal and execution. Once feared as the Dragon Witch of France, she is proud and cutting, yet her fury never stops searching for proof that she truly exists.",
          "traitName": "Jeanne Alter Trait",
          "traitDescription": "Jeanne Alter's Avenger nature raises Resolve by 20, Melee Skill by 10, Initiative by 15, and maximum Fatigue by 10.",
          "traitTooltip": [
            "Resolve +20.",
            "Melee Skill +10, Initiative +15, and maximum Fatigue +10."
          ]
        },
        "zh": {
          "name": "贞德 Alter",
          "backgroundName": "女武神贞德 Alter",
          "backgroundDescription": "贞德 Alter 是圣杯塑造出的复仇者，源自人们对圣女贞德被背叛与焚毁的怨念想象。她曾以龙之魔女之名向法兰西举起叛旗，傲慢尖刻，却始终在怒火中追问自己存在的意义。",
          "traitName": "贞德 Alter 特性",
          "traitDescription": "贞德 Alter 的复仇者本质使她的决心提高 20，近战技能提高 10，主动值提高 15，最大疲劳提高 10。",
          "traitTooltip": [
            "决心 +20。",
            "近战技能 +10，主动值 +15，最大疲劳 +10。"
          ]
        }
      }
    },
    {
      "id": "jingliu",
      "order": 7,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "jingliu_skin",
          "images": {
            "portrait": "assets/valkyries/jingliu_card.png",
            "preview": "assets/valkyries/jingliu_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jingliu Skin",
              "description": ""
            },
            "zh": {
              "name": "镜流皮肤",
              "description": ""
            }
          }
        },
        {
          "id": "jingliu_frostmoon_tide_skin",
          "images": {
            "portrait": "assets/valkyries/jingliu_frostmoon_tide_card.png",
            "preview": "assets/valkyries/jingliu_frostmoon_tide_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jingliu - Frostmoon Stilltide",
              "description": "This skin is sponsored by @雾子"
            },
            "zh": {
              "name": "镜流 霜月静潮",
              "description": "本皮肤由@雾子 赞助"
            }
          }
        },
        {
          "id": "jingliu_bride_skin",
          "images": {
            "portrait": "assets/valkyries/jingliu_bride_card.png",
            "preview": "assets/valkyries/jingliu_bride_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jingliu - Bride",
              "description": "This skin is sponsored by @雾子"
            },
            "zh": {
              "name": "镜流 花嫁",
              "description": "本皮肤由@雾子 赞助"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "jingliu_cold_moon_sword_heart",
          "icon": "jingliu_cold_moon_sword_heart",
          "image": "assets/skills/jingliu_cold_moon_sword_heart.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
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
        {
          "key": "jingliu_moonflower_birth_and_death",
          "icon": "jingliu_moonflower_birth_and_death",
          "image": "assets/skills/jingliu_moonflower_birth_and_death.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
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
      ],
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
      }
    },
    {
      "id": "skirk",
      "order": 8,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "skirk_skin",
          "images": {
            "portrait": "assets/valkyries/skirk_card.png",
            "preview": "assets/valkyries/skirk_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Skirk Skin",
              "description": ""
            },
            "zh": {
              "name": "丝柯克皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "skirk_serpents_subtlety",
          "icon": "skirk_abyss_swordsmanship",
          "image": "assets/skills/skirk_abyss_swordsmanship.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Serpent's Subtlety",
              "description": "Begin each battle with 2 Serpent's Subtlety, up to 6. Active melee weapon attacks that hit grant 1 point, at most twice per round.",
              "tooltip": [
                "Starts each battle with 2 Serpent's Subtlety and stores up to 6.",
                "A hit from an active melee weapon attack gains 1 point, up to 2 points each round. Counterattacks and follow-ups cannot gain it.",
                "All melee weapon attacks, counterattacks and attacks of opportunity ignore shield defense."
              ]
            },
            "zh": {
              "name": "蛇之狡谋",
              "description": "每场战斗开始时获得 2 点蛇之狡谋，最多储存 6 点。主动近战武器攻击命中后获得 1 点，每回合最多获得 2 点。",
              "tooltip": [
                "每场战斗开始时拥有 2 点蛇之狡谋，最多储存 6 点。",
                "主动近战武器攻击命中后获得 1 点，每回合最多 2 点；反击、借机攻击和追加攻击不能获得资源。",
                "所有近战武器攻击、反击和借机攻击均无视盾牌提供的防御加成。"
              ]
            }
          }
        },
        {
          "key": "skirk_havoc_warp",
          "icon": "skirk_abyssal_flash",
          "image": "assets/skills/skirk_abyssal_flash.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Havoc: Warp",
              "description": "Enter Seven-Phase Flash while holding at least 1 Serpent's Subtlety and a melee weapon.",
              "tooltip": [
                "Costs 2 AP and 10 Fatigue. The stance does not spend a resource itself; each empowered weapon attack spends 1.",
                "Requires a melee weapon, at least 1 Serpent's Subtlety, and no existing Seven-Phase Flash."
              ]
            },
            "zh": {
              "name": "极恶技 闪",
              "description": "装备近战武器且至少拥有 1 点蛇之狡谋时，进入七相一闪。",
              "tooltip": [
                "消耗 2 AP、增加 10 疲劳。进入姿态本身不消耗资源；每次强化武器攻击消耗 1 点。",
                "需要装备近战武器、至少拥有 1 点蛇之狡谋，且当前未处于七相一闪。"
              ]
            }
          }
        },
        {
          "key": "skirk_havoc_ruin",
          "icon": "skirk_havoc_ruin",
          "image": "assets/skills/skirk_havoc_ruin.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Havoc: Ruin",
              "description": "Spend all current Serpent's Subtlety to strike a target and all enemies around it with a snapshot of Abyssal power.",
              "tooltip": [
                "Targets 1-4 tiles away and their adjacent enemies. Deals 100% weapon damage plus 30% per stored point, with 150% armor damage and +30 chance to hit.",
                "Each spent point grants +5% armor penetration and 5 fixed hitpoint damage after a surviving target is hit. At 6 points: 280% weapon damage, +30% penetration and 30 fixed damage.",
                "Requires a melee weapon and at least 3 Serpent's Subtlety."
              ]
            },
            "zh": {
              "name": "极恶技 灭",
              "description": "消耗当前全部蛇之狡谋，对主目标及其周围敌人发动记录资源数量的深渊爆发。",
              "tooltip": [
                "指定 1-4 格内的主目标及其周围敌人。造成 100% 武器伤害，且每点资源额外 +30% 武器伤害；护甲伤害 150%，命中 +30。",
                "每消耗 1 点资源额外获得 +5% 护甲穿透；命中且目标存活后追加 5 点固定生命伤害。6 点资源时为 280% 武器伤害、+30% 穿透和 30 点固定伤害。",
                "需要装备近战武器且至少拥有 3 点蛇之狡谋。"
              ]
            }
          }
        }
      ],
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
      }
    },
    {
      "id": "jinhsi",
      "order": 9,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "Bravery": 20,
        "Stamina": 15,
        "RangedDefense": 10
      },
      "images": {
        "card": "assets/valkyries/jinhsi_card.png",
        "skin": "assets/valkyries/jinhsi_skin_preview.png",
        "trait": "assets/traits/jinhsi_trait_icon.png"
      },
      "skins": [
        {
          "id": "jinhsi_skin",
          "images": {
            "portrait": "assets/valkyries/jinhsi_card.png",
            "preview": "assets/valkyries/jinhsi_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Jinhsi Skin",
              "description": ""
            },
            "zh": {
              "name": "今汐皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "jinhsi_era_of_unity",
          "icon": "jinhsi_edict_guard",
          "image": "assets/skills/jinhsi_edict_guard.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Era of Unity",
              "description": "Jinhsi gathers Incandescence from her company's coordinated attacks, preparing Sentinel Jue's judgment.",
              "tooltip": [
                "Each other roster ally's first active attack in each combat round that damages hitpoints or armor grants 1 Incandescence.",
                "At most 3 Incandescence can be gained from allies per combat round; contributor records reset at the next round, and the maximum is 6."
              ]
            },
            "zh": {
              "name": "韶华共济",
              "description": "今汐从战团协同进攻中积累韶光，为岁主的裁决蓄力。",
              "tooltip": [
                "每名其他编制内友军每轮战斗第一次以主动攻击技能造成生命或护甲伤害时，提供 1 层韶光。",
                "每轮战斗最多从友军获得 3 层韶光；进入下一轮时重置友军记录，韶光上限为 6 层。"
              ]
            }
          }
        },
        {
          "key": "jinhsi_incarnation",
          "icon": "jinhsi_temporal_stasis",
          "image": "assets/skills/jinhsi_temporal_stasis.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Incarnation",
              "description": "Jinhsi rises with Jue's power to strike a distant enemy and draw forth Incandescence.",
              "tooltip": [
                "Uses Melee Skill with +20 chance to hit, no distance penalty, and ignores shield defense.",
                "Deals 100% weapon damage and 125% armor damage.",
                "After the attack resolves, gain 2 Incandescence whether it hits or misses. Can be used once during each of Jinhsi's turns."
              ]
            },
            "zh": {
              "name": "乘岁凌霄",
              "description": "今汐借岁主之力腾空，斩击远处敌人并主动引出韶光。",
              "tooltip": [
                "使用近战技能，命中 +20，无距离衰减且无视盾牌防御。",
                "造成 100% 武器伤害与 125% 护甲伤害。",
                "攻击结算后无论命中与否获得 2 层韶光。该技能每个今汐自身行动回合最多使用一次。"
              ]
            }
          }
        },
        {
          "key": "jinhsi_illuminous_epiphany",
          "icon": "jinhsi_illuminous_epiphany",
          "image": "assets/skills/jinhsi_illuminous_epiphany.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Illuminous Epiphany",
              "description": "At full Incandescence, Jinhsi calls Sentinel Jue to strike a distant target and nearby enemies.",
              "tooltip": [
                "Uses Melee Skill. The primary target gains +30 chance to hit; nearby targets gain +20. Ignores shield defense.",
                "Primary: 200% weapon and 150% armor damage. Nearby enemies: 120% weapon and 125% armor damage.",
                "The primary target gains +30 percentage points armor penetration and, if it survives a hit, takes 40 fixed Hitpoint damage.",
                "Nearby enemies gain +15 percentage points armor penetration. All 6 Incandescence are cleared after resolution."
              ]
            },
            "zh": {
              "name": "惊龙破空",
              "description": "满层韶光时，今汐召唤岁主轰击远处主目标及其周围敌人。",
              "tooltip": [
                "使用近战技能。主目标命中 +30，周围目标命中 +20，均无视盾牌防御。",
                "主目标造成 200% 武器伤害与 150% 护甲伤害；周围敌人造成 120% 武器伤害与 125% 护甲伤害。",
                "主目标额外获得 30 个百分点护甲穿透；命中后若仍存活，追加 40 点固定生命伤害。",
                "周围敌人额外获得 15 个百分点护甲穿透。全部结算后清空 6 层韶光。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Jinhsi",
          "backgroundName": "Valkyrie Jinhsi",
          "backgroundDescription": "Jinhsi is the Magistrate of Jinzhou and a Resonator bound to the Sentinel Jue. Gentle and composed in manner, she carries the fate of a city and the weight of time itself on shoulders far younger than her office suggests.",
          "traitName": "Jinhsi Trait",
          "traitDescription": "Jinhsi's resonance with Sentinel Jue grants Melee Skill +15, Resolve +20, maximum Fatigue +15, and Ranged Defense +10.",
          "traitTooltip": [
            "Melee Skill +15, Resolve +20, maximum Fatigue +15, Ranged Defense +10."
          ]
        },
        "zh": {
          "name": "今汐",
          "backgroundName": "女武神今汐",
          "backgroundDescription": "今汐是今州令尹，也是岁主角的共鸣者。她外表温和克制，却肩负守城与承接时间权能的命运，在危局中以年轻之身承担一城兴亡。",
          "traitName": "今汐特性",
          "traitDescription": "今汐与岁主角的共鸣使她获得近战技能 +15、决心 +20、最大疲劳 +15、远程防御 +10。",
          "traitTooltip": [
            "近战技能 +15，决心 +20，最大疲劳 +15，远程防御 +10。"
          ]
        }
      }
    },
    {
      "id": "nahida",
      "order": 10,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 75,
        "Bravery": 75,
        "Stamina": 120,
        "MeleeSkill": 45,
        "RangedSkill": 75,
        "MeleeDefense": 5,
        "RangedDefense": 20,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 1,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 0,
        "RangedSkill": 3,
        "MeleeDefense": 0,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "RangedSkill": 10,
        "RangedDefense": 10,
        "Initiative": 10
      },
      "images": {
        "card": "assets/valkyries/nahida_card.png",
        "skin": "assets/valkyries/nahida_skin_preview.png",
        "trait": "assets/traits/nahida_trait_icon.png"
      },
      "skins": [
        {
          "id": "nahida_skin",
          "images": {
            "portrait": "assets/valkyries/nahida_card.png",
            "preview": "assets/valkyries/nahida_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Nahida · Physic of Purity",
              "description": "The Dendro Archon's white, verdant, and gold leaf-patterned attire."
            },
            "zh": {
              "name": "纳西妲·白草净华",
              "description": "以白、翠绿与金色枝叶纹样为核心的草神外观。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "nahida_tri_karma_purification",
          "icon": "nahida_tri_karma_purification",
          "image": "assets/skills/nahida_tri_karma_purification.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "DamageMin": 45,
            "DamageMax": 60,
            "BaseDirectDamage": 0.25,
            "BaseTriggerCap": 2,
            "ShrineTriggerCap": 3,
            "ResolveFloor": 70,
            "ResolvePerStep": 5,
            "MaxResolveSteps": 10,
            "DamagePerStep": 2,
            "DirectPerStep": 0.015
          },
          "text": {
            "en": {
              "name": "Tri-Karma Purification",
              "description": "When an ally damages an enemy bearing a Seed of Skandha, strike every marked enemy in that network.",
              "tooltip": [
                "A direct attack or damage-over-time tick from a roster member against a Seed bearer triggers the network. Attacks of opportunity, counters, and follow-ups cannot trigger it.",
                "Deals 45–60 damage to every living enemy bearing Nahida's Seed, with 25% ignoring armor.",
                "For every full 5 Resolve above 70, gain +2 damage and +1.5% armor penetration, up to 10 steps.",
                "Each contributor may trigger once per round; the party may trigger twice per round in total.",
                "Shrine of Maya active: 3 party triggers per round and +20% Tri-Karma damage."
              ]
            },
            "zh": {
              "name": "灭净三业",
              "description": "当队友伤害带有蕴种印的敌人时，对同一网络内的全部印记目标发动草木联动。",
              "tooltip": [
                "编制内成员以直接攻击或持续伤害命中蕴种印目标时，触发一次网络联动。借机攻击、反击和追加攻击不能触发。",
                "对全部带有纳西妲蕴种印的存活敌人造成 45–60 点伤害，其中 25% 无视护甲。",
                "纳西妲的决心超过 70 后，每满 5 点使联动伤害 +2、无视护甲比例 +1.5%，最多计算 10 次。",
                "每名触发者每轮只能触发一次；全队每轮最多触发 2 次。",
                "摩耶之殿生效中：每轮上限提高到 3 次，灭净三业伤害提高 20%。"
              ]
            }
          }
        },
        {
          "key": "nahida_akara",
          "icon": "nahida_akara",
          "image": "assets/skills/nahida_akara.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 10,
            "MinRange": 1,
            "MaxRange": 6,
            "HitChance": 10,
            "DamageMin": 55,
            "DamageMax": 75,
            "DirectDamage": 0.2
          },
          "text": {
            "en": {
              "name": "Akara",
              "description": "Launch a Dendro-infused ranged attack independent of the equipped weapon.",
              "tooltip": [
                "+10 Ranged Skill, range 1–6 tiles.",
                "Deals 55–75 damage and 100% damage to armor.",
                "20% of damage ignores armor."
              ]
            },
            "zh": {
              "name": "行相",
              "description": "发射蕴含草木生机的远程攻击，不依赖当前武器。",
              "tooltip": [
                "远程命中 +10，射程 1–6 格。",
                "造成 55–75 点伤害，对护甲造成 100% 伤害。",
                "伤害的 20% 无视护甲。"
              ]
            }
          }
        },
        {
          "key": "nahida_all_schemes_to_know",
          "icon": "nahida_seed_of_skandha",
          "image": "assets/skills/nahida_seed_of_skandha.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 18,
            "MinRange": 2,
            "MaxRange": 7,
            "Radius": 2,
            "MaxTargets": 4,
            "Cooldown": 3,
            "MarkDuration": 3,
            "DamageMin": 40,
            "DamageMax": 60,
            "DirectDamage": 0.25
          },
          "text": {
            "en": {
              "name": "All Schemes to Know",
              "description": "Observe a target and nearby enemies, damage them once, and connect them with Seeds of Skandha.",
              "tooltip": [
                "Deals 40–60 damage, 25% ignoring armor, to the nearest 4 enemies within 2 tiles of the target.",
                "Survivors gain Seed of Skandha for 3 rounds and share Tri-Karma Purification triggers across their network.",
                "Recasting removes every Seed previously placed by Nahida and creates a new network. 3-round cooldown."
              ]
            },
            "zh": {
              "name": "所闻遍计",
              "description": "观察目标及其周围的敌人，造成一次伤害，并用蕴种印将他们连接起来。",
              "tooltip": [
                "对目标周围 2 格内最近的至多 4 名敌人造成 40–60 点伤害，其中 25% 无视护甲。",
                "存活目标获得持续 3 轮的蕴种印；有印记的敌人共享灭净三业联动。",
                "再次施放会移除纳西妲先前施加的全部蕴种印并建立新网络。冷却 3 轮。"
              ]
            }
          }
        },
        {
          "key": "nahida_illusory_heart",
          "icon": "nahida_shrine_of_maya",
          "image": "assets/skills/nahida_shrine_of_maya.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 25,
            "Radius": 4,
            "Duration": 3,
            "MarkExtension": 1,
            "SharedResolvePercent": 0.2,
            "SharedResolveCap": 20,
            "AllyDamagePercent": 0.5,
            "KarmaDamageMult": 1.2
          },
          "text": {
            "en": {
              "name": "Illusory Heart",
              "description": "Manifest the Shrine of Maya at Nahida's position, empowering allies and Seed reactions within it. Once per battle.",
              "tooltip": [
                "Creates a stationary radius-4 domain for 3 rounds and extends all current Seeds by 1 round.",
                "On cast, 20% of the roster's highest Resolve, up to 20, becomes bonus Resolve for allies inside.",
                "Allies inside gain bonus damage against Seed bearers equal to half the shared Resolve as a percentage, up to +10%.",
                "+20% Tri-Karma damage and increases the party trigger cap from 2 to 3 per round."
              ]
            },
            "zh": {
              "name": "心景幻成",
              "description": "以当前位置为中心展开摩耶之殿，强化领域内的队友与蕴种印联动。每场战斗限用一次。",
              "tooltip": [
                "建立半径 4 格、持续 3 轮的固定领域，并令现有蕴种印延长 1 轮。",
                "施放时读取编制内最高决心，其 20%（最多 20）成为领域内所有队友的决心加成。",
                "领域内队友攻击蕴种印目标时，造成伤害额外提高“共享决心”的一半百分比（最多 +10%）。",
                "灭净三业伤害 +20%，全队每轮触发上限由 2 提高到 3。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Nahida",
          "backgroundName": "Moon of the Sanctuary of Surasthana",
          "backgroundDescription": "Sumeru's God of Wisdom. Her perception branches through the thoughts of others like living roots, weaving isolated enemies into a network of shared consequence.",
          "traitName": "Physic of Purity",
          "traitDescription": "Nahida excels at observing, marking, and amplifying coordinated attacks.",
          "traitTooltip": [
            "+20 Resolve, +10 Ranged Skill, +10 Ranged Defense, and +10 Initiative."
          ]
        },
        "zh": {
          "name": "纳西妲",
          "backgroundName": "净善宫的月亮",
          "backgroundDescription": "来自须弥的智慧之神。她以草木般细密的感知连接众人的意识，在战场上把孤立的敌人编织成彼此呼应的因果网络。",
          "traitName": "摩诃善法大吉祥智慧主",
          "traitDescription": "纳西妲善于洞察、标记并放大队伍的协同攻击。",
          "traitTooltip": [
            "决心 +20，远程技能 +10，远程防御 +10，主动性 +10。"
          ]
        }
      }
    },
    {
      "id": "hakurei_reimu",
      "order": 11,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 82,
        "Bravery": 65,
        "Stamina": 125,
        "MeleeSkill": 45,
        "RangedSkill": 70,
        "MeleeDefense": 10,
        "RangedDefense": 20,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 1,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 0,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 15,
        "Bravery": 20,
        "Initiative": 15,
        "RangedDefense": 10
      },
      "images": {
        "card": "assets/valkyries/hakurei_reimu_card.png",
        "skin": "assets/valkyries/hakurei_reimu_skin_preview.png",
        "trait": "assets/traits/hakurei_reimu_trait_icon.png"
      },
      "skins": [
        {
          "id": "hakurei_reimu_skin",
          "images": {
            "portrait": "assets/valkyries/hakurei_reimu_card.png",
            "preview": "assets/valkyries/hakurei_reimu_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Hakurei Reimu: Shrine Maiden",
              "description": "Reimu's iconic red-and-white shrine maiden attire, great ribbon, detached sleeves, and sacred amulets."
            },
            "zh": {
              "name": "博丽灵梦：乐园的巫女",
              "description": "灵梦标志性的红白巫女服、巨大蝴蝶结、分离袖与退魔御札。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "hakurei_reimu_inborn_intuition",
          "icon": "hakurei_reimu_inborn_intuition",
          "image": "assets/skills/hakurei_reimu_inborn_intuition.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxSpiritPower": 4,
            "StartingSpiritPower": 1
          },
          "text": {
            "en": {
              "name": "Innate Intuition",
              "description": "Read the flow of battle and gather Spirit Power for Fantasy Seal.",
              "tooltip": [
                "The first direct active attack each round that deals Hitpoint or armor damage grants 1 Spirit Power. Counters, attacks of opportunity, follow-ups, damage over time, fixed bonus damage, and Fantasy Seal do not qualify.",
                "The first enemy direct attack each round that misses Reimu or an ally protected by her Duplex Barrier grants 1 Spirit Power.",
                "Begin each battle with 1 Spirit Power. Maximum 4; it does not decay. At 4, Spirit Sign: Fantasy Seal becomes available."
              ]
            },
            "zh": {
              "name": "天生的直感",
              "description": "洞察战场流向，积蓄用于梦想封印的灵力。",
              "tooltip": [
                "每轮首次以主动直接攻击造成生命或护甲伤害时，获得 1 点灵力。反击、借机攻击、追加攻击、持续伤害、固定追加伤害与梦想封印不能触发。",
                "每轮首次有敌方直接攻击未命中灵梦，或未命中受她的二重结界保护的友军时，获得 1 点灵力。",
                "每场战斗以 1 点灵力开始。灵力上限为 4 且不会衰减；达到 4 点后解锁灵符「梦想封印」。"
              ]
            }
          }
        },
        {
          "key": "hakurei_reimu_hakurei_amulet",
          "icon": "hakurei_reimu_hakurei_amulet",
          "image": "assets/skills/hakurei_reimu_hakurei_amulet.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 15,
            "MinRange": 2,
            "MaxRange": 6,
            "HitChance": 20,
            "DamageMin": 55,
            "DamageMax": 75,
            "ArmorDamageMult": 0.8,
            "DirectDamage": 0.35
          },
          "text": {
            "en": {
              "name": "Hakurei Amulet",
              "description": "Launch a paired homing amulet attack independent of the equipped weapon.",
              "tooltip": [
                "+20 Ranged Skill, range 2–6 tiles, with no distance penalty.",
                "Deals 55–75 damage and 80% damage to armor.",
                "35% of damage ignores armor.",
                "On hit, applies Sealing Charm until the end of the target's next turn. The two visible amulets form one attack and one damage instance."
              ]
            },
            "zh": {
              "name": "博丽御札",
              "description": "发射一组不依赖当前武器的追踪御札攻击。",
              "tooltip": [
                "远程命中 +20，射程 2–6 格，不受距离命中衰减。",
                "造成 55–75 点伤害，对护甲造成 80% 伤害。",
                "伤害的 35% 无视护甲。",
                "命中后施加封魔御札，持续至目标下一回合结束。画面中的两张御札只结算为一次攻击与一次伤害。"
              ]
            }
          }
        },
        {
          "key": "hakurei_reimu_duplex_barrier",
          "icon": "hakurei_reimu_duplex_barrier",
          "image": "assets/skills/hakurei_reimu_duplex_barrier.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "MaxRange": 4,
            "DefenseBonus": 20,
            "HitpointReduction": 25
          },
          "text": {
            "en": {
              "name": "Dream Sign: Duplex Barrier",
              "description": "Protect Reimu or one ally with two layers of sacred defense until Reimu's next turn begins.",
              "tooltip": [
                "Outer barrier: +20 Melee Defense and +20 Ranged Defense.",
                "Inner barrier: reduce the first incoming instance of Hitpoint damage by up to 25 without reducing armor damage, then the inner layer breaks.",
                "Range 0–4 tiles. Does not stack; recasting replaces the old barrier. Enemy misses against the protected target can grant Spirit Power.",
                "Duplex Barrier has already been cast this turn."
              ]
            },
            "zh": {
              "name": "梦符「二重结界」",
              "description": "为灵梦自己或一名友军展开两层神圣防护，持续至灵梦下一回合开始。",
              "tooltip": [
                "外层结界：近战防御 +20，远程防御 +20。",
                "内层结界：首次受到生命伤害时，最多降低 25 点生命伤害且不降低护甲伤害，随后内层破碎。",
                "射程 0–4 格。效果不叠加，再次施放会替换旧结界；敌人未命中受保护目标时可以提供灵力。",
                "本回合已经施放过二重结界。"
              ]
            }
          }
        },
        {
          "key": "hakurei_reimu_fantasy_seal",
          "icon": "hakurei_reimu_fantasy_seal",
          "image": "assets/skills/hakurei_reimu_fantasy_seal.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 30,
            "MinRange": 2,
            "MaxRange": 7,
            "SpiritPowerCost": 4,
            "PrimaryDamageMin": 150,
            "PrimaryDamageMax": 190,
            "PrimaryArmorDamageMult": 1.25,
            "PrimaryDirectDamage": 0.4,
            "AreaDamageMin": 80,
            "AreaDamageMax": 110,
            "AreaArmorDamageMult": 1,
            "AreaDirectDamage": 0.25,
            "MarkBonusDamage": 30
          },
          "text": {
            "en": {
              "name": "Spirit Sign: Fantasy Seal",
              "description": "Consume maximum Spirit Power to unleash an unavoidable sealing barrage on a target and nearby enemies.",
              "tooltip": [
                "Automatically hits the primary target for 150–190 damage, 125% armor damage, and 40% armor penetration.",
                "Automatically hits all other enemies within 1 tile for 80–110 damage, 100% armor damage, and 25% armor penetration. Allies are never hit.",
                "If the primary target has Sealing Charm, consume it after the base hit and deal 30 fixed Hitpoint damage ignoring armor if the target survives."
              ]
            },
            "zh": {
              "name": "灵符「梦想封印」",
              "description": "消耗满额灵力，以无法闪避的封印弹幕轰击目标及其周围敌人。",
              "tooltip": [
                "自动命中主目标，造成 150–190 点伤害、125% 护甲伤害，其中 40% 无视护甲。",
                "自动命中主目标周围 1 格内的其他敌人，造成 80–110 点伤害、100% 护甲伤害，其中 25% 无视护甲。不会伤害友军。",
                "若主目标带有封魔御札，则在基础伤害后消耗印记；目标仍存活时，追加 30 点无视护甲的固定生命伤害。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Hakurei Reimu",
          "backgroundName": "Shrine Maiden of Hakurei",
          "backgroundDescription": "The shrine maiden who guards the boundary of Gensokyo. Guided by effortless intuition, Reimu casts homing amulets, raises sacred barriers, and seals disturbances before they can upset the balance.",
          "traitName": "Hakurei Shrine Maiden",
          "traitDescription": "Reimu's spiritual discipline makes her a precise ranged exorcist and an unusually elusive guardian.",
          "traitTooltip": [
            "+15 Ranged Skill, +20 Resolve, +15 Initiative, and +10 Ranged Defense. Reimu's spell attacks are independent of weapons, ammunition, and durability."
          ]
        },
        "zh": {
          "name": "博丽灵梦",
          "backgroundName": "博丽神社的巫女",
          "backgroundDescription": "守护幻想乡结界的巫女。灵梦凭近乎随性的直觉洞察战局，以追踪御札、神圣结界与封印术，在异变破坏平衡之前将其解决。",
          "traitName": "博丽巫女",
          "traitDescription": "灵梦的灵力修行令她兼具精准的远程退治能力与不可思议的闪避直觉。",
          "traitTooltip": [
            "远程技能 +15，决心 +20，主动性 +15，远程防御 +10。灵梦的法术攻击不依赖武器、弹药或耐久。"
          ]
        }
      }
    },
    {
      "id": "yae_miko",
      "order": 12,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "yae_miko_skin",
          "images": {
            "portrait": "assets/valkyries/yae_miko_card.png",
            "preview": "assets/valkyries/yae_miko_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Yae Miko Skin",
              "description": ""
            },
            "zh": {
              "name": "八重神子皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "yae_miko_kitsune_thunder",
          "icon": "yae_miko_kitsune_thunder",
          "image": "assets/skills/yae_miko_kitsune_thunder.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Armor-Piercing Kitsune Thunder",
              "description": "Yae Miko empowers every direct attack with piercing kitsune thunder.",
              "tooltip": [
                "All direct attacks gain +15 chance to hit, including ripostes and attacks of opportunity.",
                "The weapon portion of direct attacks deals 20% more damage; fixed damage is not increased.",
                "After the original attack resolves, each surviving enemy hit takes 30 fixed Hitpoint damage once per action."
              ]
            },
            "zh": {
              "name": "穿甲狐雷",
              "description": "八重神子以穿甲狐雷强化每一次直接攻击。",
              "tooltip": [
                "所有直接攻击命中 +15，包括反击与借机攻击。",
                "直接攻击的武器伤害部分提高 20%；固定伤害不会被放大。",
                "原攻击结算后，每名被命中且存活的敌人每次行动至多受到一次 30 点固定生命伤害。"
              ]
            }
          }
        },
        {
          "key": "yae_miko_tenko_thunder_domain",
          "icon": "yae_miko_tenko_thunder_domain",
          "image": "assets/skills/yae_miko_tenko_thunder_domain.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 2,
            "MaxRange": 6,
            "HitChance": 25,
            "FixedDamage": 300,
            "DirectDamage": 0.25,
            "ArmorDamageMult": 1.25,
            "IsAttack": true
          },
          "text": {
            "en": {
              "name": "Tenko Thunder Domain",
              "description": "Yae Miko calls down a focused lightning strike against one enemy 2 to 6 tiles away.",
              "tooltip": [
                "Has +25 chance to hit.",
                "Deals 300 fixed damage, 25% ignoring armor, and 125% armor damage.",
                "With Kitsune Thunder this has +40 total chance to hit and deals 30 fixed Hitpoint damage if the target survives. A miss still spends its once-per-battle use."
              ]
            },
            "zh": {
              "name": "天狐雷域",
              "description": "八重神子对 2 到 6 格内一名敌人降下集中的天狐雷击。",
              "tooltip": [
                "命中 +25。",
                "造成 300 固定伤害，25% 无视护甲，造成 125% 护甲伤害。",
                "结合穿甲狐雷后总命中 +40；目标存活时追加 30 点固定生命伤害。未命中仍消耗每场一次的使用次数。"
              ]
            }
          }
        }
      ],
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
      }
    },
    {
      "id": "chisaki",
      "order": 13,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "chisaki_skin",
          "images": {
            "portrait": "assets/valkyries/chisaki_card.png",
            "preview": "assets/valkyries/chisaki_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Chisaki Skin",
              "description": ""
            },
            "zh": {
              "name": "千咲皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "chisaki_edge_followup",
          "icon": "chisaki_edge_followup",
          "image": "assets/skills/chisaki_edge_followup.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "Damage": 30,
            "Amount": 3
          },
          "text": {
            "en": {
              "name": "Edge Follow-up",
              "description": "Once each turn, Chisaki turns her first clean melee hit into a brutal extra cut.",
              "tooltip": [
                "The first melee hit each turn deals 30 extra direct hitpoint damage.",
                "Once each turn, killing an enemy with a melee attack restores 3 AP."
              ]
            },
            "zh": {
              "name": "凶刃追击",
              "description": "千咲每回合首次近战命中后，追加一次干脆的凶刃补刀。",
              "tooltip": [
                "每回合首次近战命中额外造成 30 点直接生命伤害。",
                "每回合一次，近战攻击击杀敌人后恢复 3 AP。"
              ]
            }
          }
        },
        {
          "key": "chisaki_blood_slash",
          "icon": "chisaki_blood_slash",
          "image": "assets/skills/chisaki_blood_slash.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 1,
            "MaxRange": 1,
            "HitChance": 30,
            "WeaponDamageMult": 2,
            "ArmorDamageMult": 2,
            "DirectDamageAdd": 0.2,
            "FatigueMultOnKill": 0.5,
            "IsAttack": true
          },
          "text": {
            "en": {
              "name": "Blood Slash",
              "description": "Chisaki commits to a decisive adjacent melee strike that cuts deep and vents her fatigue on a kill.",
              "tooltip": [
                "Has +30 chance to hit.",
                "Deals 200% weapon damage and 200% armor damage.",
                "Gains +20% armor penetration.",
                "If this attack kills the target, Chisaki halves her current fatigue. Blood Slash itself does not restore AP, but it can trigger Edge Follow-up's once-per-turn AP recovery on kill."
              ]
            },
            "zh": {
              "name": "血斩",
              "description": "千咲对相邻敌人发动决断斩击，以高伤斩杀换取疲劳重整。",
              "tooltip": [
                "命中 +30。",
                "造成 200% 武器伤害和 200% 护甲伤害。",
                "额外获得 +20% 护甲穿透。",
                "如果此攻击击杀目标，千咲当前疲劳值减少 50%；血斩本身不额外恢复 AP，但可触发「凶刃追击」每回合一次的击杀回 AP。"
              ]
            }
          }
        }
      ],
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
      }
    },
    {
      "id": "kafka",
      "order": 14,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "kafka_skin",
          "images": {
            "portrait": "assets/valkyries/kafka_card.png",
            "preview": "assets/valkyries/kafka_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Kafka Skin",
              "description": ""
            },
            "zh": {
              "name": "卡芙卡皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "kafka_script_direction",
          "icon": "kafka_spirit_whisper",
          "image": "assets/skills/kafka_spirit_whisper.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "SharedUsesPerRound": 1,
            "EchoAP": 2,
            "UniqueDirectiveSlots": 1
          },
          "text": {
            "en": {
              "name": "Script Direction",
              "description": "Kafka directs one battlefield protagonist at a time and rewards their first damaging performance each round.",
              "tooltip": [
                "Only one Kafka directive can exist at a time. A new ally or enemy directive safely removes the previous one first.",
                "The current directive target's first actual hitpoint or armor damage each round restores 2 AP to Kafka, up to her maximum AP.",
                "Your Turn and Listen to Me share one use each round. Extra turns and replacing or losing the target do not refresh it."
              ]
            },
            "zh": {
              "name": "剧本编排",
              "description": "卡芙卡同时只导演一名战场主角，并奖励其每轮第一次有效造成伤害的演出。",
              "tooltip": [
                "全场只能维持一个卡芙卡指令；向新友军或敌人下达指令时，会先安全移除上一道指令。",
                "当前剧本目标每轮第一次实际造成生命或护甲伤害后，卡芙卡恢复 2 AP，不能超过最大 AP。",
                "「该你出场了」与「听我说」每轮共享一次使用次数；额外回合、更换目标或目标提前离场都不会刷新。"
              ]
            }
          }
        },
        {
          "key": "kafka_your_turn",
          "icon": "kafka_your_turn",
          "image": "assets/skills/kafka_your_turn.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 15,
            "MinRange": 1,
            "MaxRange": 5,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "Your Turn",
              "description": "Kafka appoints an allied unit other than herself as the script's protagonist.",
              "tooltip": [
                "Grants +6 maximum AP without restoring current AP.",
                "Grants +10 maximum hitpoints, Resolve, maximum Fatigue, Melee Skill, Ranged Skill, Melee Defense, Ranged Defense, and Initiative without healing.",
                "Range 1-5. Costs 5 AP and 15 Fatigue. Lasts until replaced, the target or Kafka dies, or combat ends."
              ]
            },
            "zh": {
              "name": "该你出场了",
              "description": "卡芙卡指定一名除自己以外的友军成为当前剧本的主角。",
              "tooltip": [
                "最大 AP +6，但施加时不会恢复当前 AP。",
                "最大生命、决心、最大疲劳、近战技能、远程技能、近战防御、远程防御和主动值各 +10，但施加时不会治疗。",
                "射程 1-5，消耗 5 AP、增加 15 疲劳；持续至被替换、目标或卡芙卡死亡、或战斗结束。"
              ]
            }
          }
        },
        {
          "key": "kafka_listen_to_me",
          "icon": "kafka_listen_to_me",
          "image": "assets/skills/kafka_listen_to_me.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 15,
            "MinRange": 1,
            "MaxRange": 5,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "Listen to Me",
              "description": "Kafka takes direct command of one ordinary enemy and turns its current arsenal against its former allies.",
              "tooltip": [
                "Temporarily changes one legal enemy to the player faction while retaining its original AI. It acts automatically and cannot be controlled directly. No morale check is made, so ordinary morale-immune enemies remain valid.",
                "Acquiring and releasing control preserves hitpoints, armor, AP, Fatigue, position, equipment, ammunition, cooldowns, uses, and turn state. The enemy never joins the roster, cannot expose its character or inventory data, and is not included in player retreat handling.",
                "Multipart enemies, fixed objects, summon anchors, non-input entities, champions, and special scripted bosses are invalid. The last surviving enemy is released immediately and must still be defeated.",
                "Range 1-5. Costs 5 AP and 15 Fatigue. Lasts until replaced, either unit dies, the target becomes the last enemy, or combat ends."
              ]
            },
            "zh": {
              "name": "听我说",
              "description": "卡芙卡直接接管一名普通敌人，让它用现有武装对付昔日同伴。",
              "tooltip": [
                "把一名合法敌人临时转为我方阵营，但保留其原 AI 并由 AI 自动行动，玩家不能直接操作；无需士气检定，普通士气免疫敌人仍可成为目标。",
                "支配与解除均保留生命、护甲、AP、疲劳、位置、装备、弹药、冷却、使用次数和回合状态。敌人不会加入名册，角色页与物品栏不会暴露该敌人，也不会纳入玩家撤退角色。",
                "多部位敌人、固定物体、召唤锚、无法输入的实体、冠军和特殊剧情首领均为非法目标；目标成为最后一名敌人时会立即解除，仍需正常击败。",
                "射程 1-5，消耗 5 AP、增加 15 疲劳；持续至被替换、任一方死亡、目标成为最后一名敌人、或战斗结束。"
              ]
            }
          }
        }
      ],
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
      }
    },
    {
      "id": "ye_shunguang",
      "order": 15,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "MeleeDefense": 15,
        "Bravery": 20,
        "Initiative": 15
      },
      "images": {
        "card": "assets/valkyries/ye_shunguang_card.png",
        "skin": "assets/valkyries/ye_shunguang_skin_preview.png",
        "trait": "assets/traits/ye_shunguang_trait_icon.png"
      },
      "skins": [
        {
          "id": "ye_shunguang_skin",
          "images": {
            "portrait": "assets/valkyries/ye_shunguang_card.png",
            "preview": "assets/valkyries/ye_shunguang_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Ye Shunguang Skin",
              "description": ""
            },
            "zh": {
              "name": "叶瞬光皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "ye_shunguang_enlightened_clarity",
          "icon": "ye_shunguang_qingming_guard",
          "image": "assets/skills/ye_shunguang_qingming_guard.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Enlightened Clarity",
              "description": "Build Qingming Sword Stance through hits and evasion; in Enlightened State it becomes flowing-light economy and a block.",
              "tooltip": [
                "Each successful active melee weapon attack gains 2 Qingming Sword Stance, with no per-round gain limit.",
                "The first successful evasion of an enemy melee attack each round gains 1 Stance."
              ]
            },
            "zh": {
              "name": "明心见性",
              "description": "以命中与闪避积累青溟剑势；明心境中剑势会化作流光减耗与格挡。",
              "tooltip": [
                "每次主动近战武器攻击命中后获得 2 层青溟剑势；没有每回合获取上限。",
                "每轮第一次成功躲避敌方近战攻击时获得 1 层剑势。"
              ]
            }
          }
        },
        {
          "key": "ye_shunguang_reflection",
          "icon": "ye_shunguang_reflection",
          "image": "assets/skills/ye_shunguang_reflection.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 2,
            "FatigueCost": 10,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "Reflection",
              "description": "Strike adjacent enemies with sword light, then enter Enlightened State while retaining all Stance.",
              "tooltip": [
                "Has +20 chance to hit each adjacent enemy.",
                "Deals 80% weapon damage and 100% armor damage.",
                "Requires 6 Stance, a melee weapon, and no Enlightened State. Costs 2 AP and 10 Fatigue."
              ]
            },
            "zh": {
              "name": "照影",
              "description": "释放剑气攻击相邻敌人，随后进入保留全部剑势的明心境。",
              "tooltip": [
                "对每名相邻敌人命中 +20。",
                "造成 80% 武器伤害与 100% 护甲伤害。",
                "需要 6 层剑势、近战武器且未处于明心境；消耗 2 AP 和 10 疲劳。"
              ]
            }
          }
        },
        {
          "key": "ye_shunguang_return_to_dust",
          "icon": "ye_shunguang_cut_filth",
          "image": "assets/skills/ye_shunguang_cut_filth.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 25,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "Enlightened State: Return to Dust",
              "description": "Turn Stance spent in this Enlightened State into a sweeping sword light, then end the state.",
              "tooltip": [
                "Attacks all enemies within 2 tiles at +25 chance to hit and ignores shield defense."
              ]
            },
            "zh": {
              "name": "明心境 归尘",
              "description": "将本次明心境已消耗的剑势化作范围剑光，并结束明心境。",
              "tooltip": [
                "攻击 2 格内全部敌人，命中 +25 且无视盾牌防御。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Ye Shunguang",
          "backgroundName": "Valkyrie Ye Shunguang",
          "backgroundDescription": "Ye Shunguang is a disciple of Yunkui Summit and Ye Shiyuan's younger sister, bearer of the Qingming Sword that can sever filth at the cost of memory. After the battle with the Creator, she was named Void Hunter, carrying a gentle face and a will strong enough to forget herself for family.",
          "traitName": "Ye Shunguang Trait",
          "traitDescription": "Ye Shunguang's Qingming sword discipline grants Melee Skill +15, Melee Defense +15, Resolve +20, and Initiative +15.",
          "traitTooltip": [
            "Melee Skill +15, Melee Defense +15, Resolve +20, Initiative +15."
          ]
        },
        "zh": {
          "name": "叶瞬光",
          "backgroundName": "女武神叶瞬光",
          "backgroundDescription": "叶瞬光是云岿山成员、叶释渊的妹妹，执有能斩断秽息却会吞噬记忆的晴明剑。她在与造物主的战斗后获封虚狩，温顺外表下藏着宁愿遗忘自我也要守护亲人的决意。",
          "traitName": "叶瞬光特性",
          "traitDescription": "叶瞬光的晴明剑主修行使她获得近战技能 +15、近战防御 +15、决心 +20、主动值 +15。",
          "traitTooltip": [
            "近战技能 +15，近战防御 +15，决心 +20，主动值 +15。"
          ]
        }
      }
    },
    {
      "id": "himeko",
      "order": 16,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "hybrid_skirmisher",
      "detailLayout": "classic",
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
        "RangedSkill": 10,
        "Bravery": 15,
        "Initiative": 10,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/himeko_card.png",
        "skin": "assets/valkyries/himeko_skin_preview.png",
        "trait": "assets/traits/himeko_trait_icon.png"
      },
      "skins": [
        {
          "id": "himeko_skin",
          "images": {
            "portrait": "assets/valkyries/himeko_card.png",
            "preview": "assets/valkyries/himeko_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Himeko Skin",
              "description": ""
            },
            "zh": {
              "name": "姬子皮肤",
              "description": ""
            }
          }
        },
        {
          "id": "himeko_departure_skin",
          "images": {
            "portrait": "assets/valkyries/himeko_departure_card.png",
            "preview": "assets/valkyries/himeko_departure_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Himeko: Departure",
              "description": "Clad in a red-and-white astral uniform, Himeko raises her spear as a standard and rides the Express toward the next sea of stars.\nThis skin is sponsored by @雾子."
            },
            "zh": {
              "name": "姬子：启行",
              "description": "身披红白星轨礼装的姬子，以长枪为旗，随列车驶向下一片群星。\n本皮肤由@雾子赞助"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "himeko_victory_rush",
          "icon": "himeko_fire_support_calibration",
          "image": "assets/skills/himeko_fire_support_calibration.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Victory Rush",
              "description": "Himeko turns the enemy's first armor breaks into orbital fire support.",
              "tooltip": [
                "The first break of each enemy's head or body armor grants 1 Charge, and defeating that enemy grants 1 more; Charge has no maximum.",
                "At 3 Charge, snapshot the next allied direct attack's primary target. After it resolves, spend 3 Charge for one weapon follow-up within 7 tiles.",
                "A target killed, removed, out of range, or attacked by a follow-up is not pursued and does not spend Charge."
              ]
            },
            "zh": {
              "name": "乘胜追击",
              "description": "姬子将敌人的首次破甲转化为轨道火力协同。",
              "tooltip": [
                "每名敌人的头部或身体护甲首次破碎时获得 1 点充能；每击杀一名敌人再获得 1 点充能；充能没有上限。",
                "充能达到 3 点时，锁定下一次友军直接攻击的主目标；结算后消耗 3 点充能，对 7 格内目标发动一次武器追击。",
                "目标死亡、离场、超出射程或原攻击本身是追击时，不发动追击且不消耗充能。"
              ]
            }
          }
        },
        {
          "key": "himeko_heavenly_flare",
          "icon": "himeko_orbital_suppression",
          "image": "assets/skills/himeko_orbital_suppression.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Heavenly Flare",
              "description": "Call down orbital fire on an enemy and every enemy adjacent to it.",
              "tooltip": [
                "Automatically deals 80 fixed armor damage to each affected enemy.",
                "Then deals 25 fixed hitpoint damage that ignores armor to each affected enemy.",
                "Targets 2-7 tiles away, affects a radius of 1, costs 5 AP and 20 Fatigue, and can be used once per battle."
              ]
            },
            "zh": {
              "name": "天坠之火",
              "description": "呼叫轨道火力轰击一名敌人及其周围的所有敌人。",
              "tooltip": [
                "对每名受影响敌人自动造成 80 点固定护甲伤害。",
                "随后对每名受影响敌人造成 25 点无视护甲的固定生命伤害。",
                "施法距离 2-7 格，影响半径 1，消耗 5 AP 和 20 疲劳，每场战斗一次。"
              ]
            }
          }
        },
        {
          "key": "himeko_we_are_trailblaze",
          "icon": "himeko_astral_oath",
          "image": "assets/skills/himeko_astral_oath.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "We Are Trailblaze",
              "description": "Whenever a companion takes the next trailblazing step, Himeko's orbital fire follows.",
              "tooltip": [
                "After any allied unit makes an active direct attack, Himeko follows up once against that attack's primary target. Himeko's own active attacks also qualify.",
                "The follow-up costs no AP, Fatigue, ammunition, or durability; it deals 100% weapon damage, 150% armor damage, and gains +25 percentage points of armor penetration, with no range limit.",
                "The original attack resolves first. No follow-up is made if its primary target is dead or removed; counters, attacks of opportunity, and follow-ups cannot trigger it."
              ]
            },
            "zh": {
              "name": "我们即是开拓",
              "description": "当同伴踏出开拓的一步，姬子的轨道火力必将随后抵达。",
              "tooltip": [
                "任意我方单位主动直接攻击敌人后，姬子都会对该次攻击的主目标追击一次；姬子自己的主动攻击同样可以触发。",
                "追击不消耗 AP、疲劳、弹药或耐久，造成 100% 武器伤害、150% 护甲伤害，并额外获得 25 个百分点护甲穿透；没有距离限制。",
                "原攻击完全结算后才发动追击。主目标已经死亡或离场时不会追击；反击、借机攻击与追击本身不能触发。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Himeko",
          "backgroundName": "Valkyrie Himeko",
          "backgroundDescription": "Himeko is the navigator and owner of the Astral Express, the scientist who repaired the abandoned train and began a journey among the stars. Mature, dependable, and endlessly curious, she guides her companions with a scholar's calm and a traveler's romance.",
          "traitName": "Himeko Trait",
          "traitDescription": "Himeko's command of astral arms grants Melee Skill +10, Ranged Skill +10, Resolve +15, Initiative +10, and Ranged Defense +5.",
          "traitTooltip": [
            "Melee Skill +10, Ranged Skill +10, Resolve +15, Initiative +10, Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "姬子",
          "backgroundName": "女武神姬子",
          "backgroundDescription": "姬子是星穹列车的领航员兼所有者，曾修复遗落的列车并踏上开拓之旅。她成熟可靠、热爱探索，以科学家的冷静和旅人的浪漫把同伴带向群星。",
          "traitName": "姬子特性",
          "traitDescription": "姬子的星穹领航使她获得近战技能 +10、远程技能 +10、决心 +15、主动值 +10、远程防御 +5。",
          "traitTooltip": [
            "近战技能 +10，远程技能 +10，决心 +15，主动值 +10，远程防御 +5。"
          ]
        }
      }
    },
    {
      "id": "feixue",
      "order": 17,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "Initiative": 25,
        "MeleeSkill": 15,
        "MeleeDefense": 10,
        "Stamina": 15
      },
      "images": {
        "card": "assets/valkyries/feixue_card.png",
        "skin": "assets/valkyries/feixue_skin_preview.png",
        "trait": "assets/traits/feixue_trait_icon.png"
      },
      "skins": [
        {
          "id": "feixue_skin",
          "images": {
            "portrait": "assets/valkyries/feixue_card.png",
            "preview": "assets/valkyries/feixue_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Feixue Skin",
              "description": ""
            },
            "zh": {
              "name": "绯雪皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "feixue_everfrost_dominion",
          "icon": "feixue_snowstep",
          "image": "assets/skills/feixue_snowstep.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Everfrost Dominion",
              "description": "Accumulate Dedication in the present, then borrow Feixue's foreclaimed self for three Iai and a final Blade Liberation.",
              "tooltip": [
                "Combat starts with 1 Dedication. Successful active melee weapon actions gain 1, up to twice each round; 3 enters Foreclaimed Self.",
                "Foreclaimed Self grants 3 Frostharden Iai. Each Iai makes Snowforged Blade and Mushin; Blade Liberation consumes the form."
              ]
            },
            "zh": {
              "name": "万世霜天",
              "description": "在现世积累奉愿，进入预求身后以三次居合和刀解完成循环。",
              "tooltip": [
                "战斗开始时拥有 1 点奉愿；主动近战武器攻击命中后获得 1 点，每回合至多 2 点，达到 3 点进入预求身。",
                "预求身获得 3 点霜固居合；每次居合获得铸雪刃和无念，刀解会结束形态。"
              ]
            }
          }
        },
        {
          "key": "feixue_mushin_iai",
          "icon": "feixue_mushin_iai",
          "image": "assets/skills/feixue_mushin_iai.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 3,
            "FatigueCost": 15,
            "MinRange": 1,
            "MaxRange": 3
          },
          "text": {
            "en": {
              "name": "Mushin Iai",
              "description": "Strike an enemy up to 3 tiles away with Feixue's borrowed future, leaving behind a damage-nullifying afterimage.",
              "tooltip": [
                "Range 1-3, +25 hit chance, ignores shield defense and distance penalty.",
                "Deals 110% weapon damage, 125% armor damage and gains +20% armor penetration.",
                "Costs 1 Frostharden Iai. On resolution, gains 1 Snowforged Blade and 1 Mushin; hits apply Glacio Bite."
              ]
            },
            "zh": {
              "name": "无念居合",
              "description": "借未来身突进拔刀，留下可化解直接攻击的残影。",
              "tooltip": [
                "距离 1-3 格，命中 +25，无视盾牌防御和距离命中衰减。",
                "造成 110% 武器伤害、125% 护甲伤害，并额外增加 20 个百分点护甲穿透。",
                "消耗 1 点霜固居合；结算后获得 1 点铸雪刃和 1 层无念，命中施加霜噬。"
              ]
            }
          }
        },
        {
          "key": "feixue_blade_liberation",
          "icon": "feixue_blade_liberation",
          "image": "assets/skills/feixue_blade_liberation.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 30
          },
          "text": {
            "en": {
              "name": "Foreclaimed Self: Blade Liberation",
              "description": "Spend all Snowforged Blade to cut every enemy within 2 tiles, then return from Foreclaimed Self.",
              "tooltip": [
                "Each Snowforged Blade adds 50% weapon damage and 10% armor penetration; 3 blades deal 250% weapon damage.",
                "On hit, each Snowforged Blade adds 10 fixed hitpoint damage. Does not affect allies or apply Glacio Bite."
              ]
            },
            "zh": {
              "name": "预求我身 刀解",
              "description": "消耗全部铸雪刃，斩击 2 格内所有敌人后退出预求身。",
              "tooltip": [
                "每点铸雪刃使武器伤害 +50%、护甲穿透 +10 个百分点；3 点时造成 250% 武器伤害。",
                "命中后每点铸雪刃追加 10 点无视护甲的固定生命伤害；不伤害友军，也不会施加霜噬。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Feixue",
          "backgroundName": "Valkyrie Feixue",
          "backgroundDescription": "Feixue, also known as Hiyuki, is a Glacio sword Resonator from Ashihara whose white kagura-like robes and red cords hide a razor-cold edge. Bound by a long connection to the Threnodian, she is courteous and quiet until her blade falls like snow stained crimson.",
          "traitName": "Feixue Trait",
          "traitDescription": "Feixue's snow-swift blade grants Initiative +25, Melee Skill +15, Melee Defense +10, and maximum Fatigue +15.",
          "traitTooltip": [
            "Initiative +25, Melee Skill +15, Melee Defense +10, maximum Fatigue +15."
          ]
        },
        "zh": {
          "name": "绯雪",
          "backgroundName": "女武神绯雪",
          "backgroundDescription": "绯雪是来自苇原的冷凝迅刀共鸣者，神乐巫女般的白衣与红缎下藏着凛冽锋芒。她与鸣式有着漫长牵连，平日守礼寡言，出刀时却像雪落刹那间染上绯色。",
          "traitName": "绯雪特性",
          "traitDescription": "绯雪的迅刀步法使她获得主动值 +25、近战技能 +15、近战防御 +10、最大疲劳值 +15。",
          "traitTooltip": [
            "主动值 +25，近战技能 +15，近战防御 +10，最大疲劳值 +15。"
          ]
        }
      }
    },
    {
      "id": "feixiao",
      "order": 18,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "Bravery": 20,
        "Stamina": 15
      },
      "images": {
        "card": "assets/valkyries/feixiao_card.png",
        "skin": "assets/valkyries/feixiao_skin_preview.png",
        "trait": "assets/traits/feixiao_trait_icon.png"
      },
      "skins": [
        {
          "id": "feixiao_skin",
          "images": {
            "portrait": "assets/valkyries/feixiao_card.png",
            "preview": "assets/valkyries/feixiao_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Feixiao Skin",
              "description": ""
            },
            "zh": {
              "name": "飞霄皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "feixiao_thunderhunt",
          "icon": "feixiao_hunt_pressure",
          "image": "assets/skills/feixiao_hunt_pressure.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "StartingAureus": 3,
            "MaxAureus": 6,
            "AttacksPerAureus": 2,
            "MaxGainsPerRound": 2,
            "FollowupRange": 4,
            "FollowupHitChance": 20,
            "FollowupWeaponDamageMult": 0.6,
            "FollowupArmorDamageMult": 1
          },
          "text": {
            "en": {
              "name": "Thunderhunt",
              "description": "Feixiao gathers Flying Aureus from allied attacks and answers an ally's assault with one free pursuit each round.",
              "tooltip": [
                "Combat begins with 3 Flying Aureus. Every 2 qualifying attacks grant 1 stack, up to 2 stacks per round and 6 total.",
                "After another roster ally completes a direct attack, make one free Thunderhunt each round against its target or the nearest legal enemy within 4 tiles.",
                "Thunderhunt uses Melee Skill, gains +20 chance to hit, deals 60% weapon damage and 100% armor damage."
              ]
            },
            "zh": {
              "name": "雷狩",
              "description": "飞霄从友军攻势中积累飞黄，并在友军攻击后发动一次免费追击。",
              "tooltip": [
                "开战获得 3 层飞黄；每累计 2 次符合条件的攻击获得 1 层，每轮最多 2 层，最多 6 层。",
                "其他编制内友军完成一次直接攻击后，每轮可免费发动一次雷狩，攻击原目标或 4 格内最近的合法敌人。",
                "雷狩使用近战技能，命中 +20，造成 60% 武器伤害和 100% 护甲伤害。"
              ]
            }
          }
        },
        {
          "key": "feixiao_waraxe",
          "icon": "feixiao_waraxe",
          "image": "assets/skills/feixiao_waraxe.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "MinRange": 1,
            "MaxRange": 3,
            "UsesPerRound": 1,
            "HitChance": 20,
            "WeaponDamageMult": 1,
            "ArmorDamageMult": 1.25,
            "FollowupWeaponDamageMult": 0.6,
            "FollowupArmorDamageMult": 1
          },
          "text": {
            "en": {
              "name": "Waraxe",
              "description": "Strike one enemy at range, then immediately follow with an internal Thunderhunt that does not consume the passive's round use.",
              "tooltip": [
                "Both attacks use Melee Skill and gain +20 chance to hit without distance penalties.",
                "The main strike deals 100% weapon damage and 125% armor damage.",
                "The built-in Thunderhunt deals 60% weapon damage and 100% armor damage, and both attacks advance Flying Aureus. Waraxe can be used once per battle round; extra turns do not refresh it."
              ]
            },
            "zh": {
              "name": "钺贯",
              "description": "飞霄挥动战斧攻击远处敌人，随后立即发动一次不占用被动次数的内置雷狩。",
              "tooltip": [
                "两次攻击均使用近战技能，命中 +20，且不受距离命中衰减影响。",
                "主攻击造成 100% 武器伤害和 125% 护甲伤害。",
                "内置雷狩造成 60% 武器伤害和 100% 护甲伤害；两次攻击都会推进飞黄。钺贯每个战斗轮次最多使用一次；额外行动回合不会刷新。"
              ]
            }
          }
        },
        {
          "key": "feixiao_terraverge",
          "icon": "feixiao_terraverge",
          "image": "assets/skills/feixiao_terraverge.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 35,
            "MinRange": 1,
            "MaxRange": 4,
            "RequiredAureus": 6,
            "Strikes": 6,
            "HitChance": 30,
            "ArmorStrikeWeaponDamageMult": 0.3,
            "ArmorStrikeArmorDamageMult": 2.5,
            "ArmorStrikeDirectDamage": 0,
            "UnarmoredFixedDamage": 5,
            "FinisherWeaponDamageMult": 1,
            "FinisherArmorDamageMult": 1.5,
            "FinisherDirectDamageAdd": 0.3,
            "FinisherFixedDamage": 20
          },
          "text": {
            "en": {
              "name": "Terrasplit",
              "description": "Consume 6 Flying Aureus to deliver six adaptive strikes, then a final execution blow.",
              "tooltip": [
                "All seven attacks use Melee Skill, gain +30 chance to hit, ignore distance penalties and shield defense.",
                "While armor remains, each adaptive strike targets the more armored part for 30% weapon damage, 250% armor damage, and 0% penetration.",
                "Against unarmored targets each adaptive hit adds 5 fixed HP damage; the finisher deals 100% weapon damage, 150% armor damage, +30 penetration points, and 20 fixed HP damage."
              ]
            },
            "zh": {
              "name": "凿破大荒",
              "description": "消耗 6 层飞黄，对一名敌人发动六段自适应攻击，最后以处决一击收尾。",
              "tooltip": [
                "全部七次攻击均使用近战技能，命中 +30，忽略距离命中衰减与盾牌防御。",
                "目标仍有护甲时，每段攻击优先命中护甲较高的部位，造成 30% 武器伤害、250% 护甲伤害和 0% 护甲穿透。",
                "目标无护甲时，每段命中追加 5 点固定生命伤害；终结一击造成 100% 武器伤害、150% 护甲伤害、额外 30 点穿透，并追加 20 点固定生命伤害。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Feixiao",
          "backgroundName": "Valkyrie Feixiao",
          "backgroundDescription": "Feixiao is the Merlin's Claw of the Xianzhou Yaoqing, a general of the Arbiter-Generals with both foxian and borisin blood. Bold, decisive, and hungry for battle, she offers her sharpest edge to the Hunt even while haunted by Moon Rage.",
          "traitName": "Feixiao Trait",
          "traitDescription": "Feixiao's generalship of the Hunt grants Melee Skill +15, Initiative +20, Resolve +20, and maximum Fatigue +15.",
          "traitTooltip": [
            "Melee Skill +15, Initiative +20, Resolve +20, maximum Fatigue +15."
          ]
        },
        "zh": {
          "name": "飞霄",
          "backgroundName": "女武神飞霄",
          "backgroundDescription": "飞霄是仙舟曜青天击将军，狐人与步离人血脉交织，被称为帝弓七天将之一。她豪爽果决、渴望酣战，即便受月狂之症侵扰，也把自己的锋芒献给巡猎。",
          "traitName": "飞霄特性",
          "traitDescription": "飞霄的天击将军锋芒使她获得近战技能 +15、主动值 +20、决心 +20、最大疲劳值 +15。",
          "traitTooltip": [
            "近战技能 +15，主动值 +20，决心 +20，最大疲劳值 +15。"
          ]
        }
      }
    },
    {
      "id": "changli",
      "order": 19,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "MeleeDefense": 10,
        "Bravery": 15,
        "Initiative": 15
      },
      "images": {
        "card": "assets/valkyries/changli_card.png",
        "skin": "assets/valkyries/changli_skin_preview.png",
        "trait": "assets/traits/changli_trait_icon.png"
      },
      "skins": [
        {
          "id": "changli_skin",
          "images": {
            "portrait": "assets/valkyries/changli_card.png",
            "preview": "assets/valkyries/changli_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Changli Skin",
              "description": ""
            },
            "zh": {
              "name": "长离皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "changli_true_sight_enflamement",
          "icon": "changli_delayed_strategy",
          "image": "assets/skills/changli_delayed_strategy.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "True Sight: Enflamement",
              "description": "Each turn, Changli's first successful ordinary active melee weapon attack gains sharpened accuracy. Every qualifying action that hits also builds one Enflamement layer, up to four.",
              "tooltip": [
                "The first qualifying hit each turn gains +15 chance to hit; a miss does not consume this opportunity.",
                "Each qualifying action that hits builds at most 1 Enflamement layer. Attacks of Opportunity, Riposte, and dedicated follow-up attacks are excluded."
              ]
            },
            "zh": {
              "name": "真知：离火",
              "description": "每回合，长离第一次成功命中的普通主动近战武器攻击获得额外精准。每个符合条件且命中的行动还会获得 1 层离火，最多 4 层。",
              "tooltip": [
                "每回合第一次符合条件的命中获得命中 +15；未命中不会消耗本回合机会。",
                "每个符合条件且命中的行动最多获得 1 层离火；借机攻击、还击和专属追击不计入。"
              ]
            }
          }
        },
        {
          "key": "changli_radiance_of_fealty",
          "icon": "changli_inferno_seal",
          "image": "assets/skills/changli_inferno_seal.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "Radius": 2,
            "HitChance": 20,
            "WeaponDamageMult": 1,
            "ArmorDamageMult": 1.25,
            "ActionPointCost": 5,
            "FatigueCost": 20,
            "MaxUses": 1
          },
          "text": {
            "en": {
              "name": "Radiance of Fealty",
              "description": "Once per battle, Changli strikes every enemy within 2 tiles with an independent melee weapon attack, then raises Enflamement to four layers.",
              "tooltip": [
                "Each target is rolled independently with +20 chance to hit.",
                "Deals 100% weapon damage and 125% armor damage to each target.",
                "Current Enflamement bonuses apply to all attacks; after all targets resolve, Enflamement becomes 4 even if every attack misses."
              ]
            },
            "zh": {
              "name": "离火照丹心",
              "description": "每场战斗一次，长离对 2 格内所有敌人分别发动一次近战武器攻击，随后将离火提高至 4 层。",
              "tooltip": [
                "每名目标独立判定，命中 +20。",
                "对每名目标造成 100% 武器伤害和 125% 护甲伤害。",
                "释放前的离火加成应用于全部攻击；所有目标结算后离火变为 4 层，即使全部未命中。"
              ]
            }
          }
        },
        {
          "key": "changli_flaming_sacrifice",
          "icon": "changli_flaming_sacrifice",
          "image": "assets/skills/changli_flaming_sacrifice.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "Radius": 1,
            "HitChance": 25,
            "WeaponDamageMult": 1.6,
            "ArmorDamageMult": 1.5,
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "RequiredLayers": 4
          },
          "text": {
            "en": {
              "name": "Flaming Sacrifice",
              "description": "At four Enflamement layers, Changli unleashes a melee weapon attack against every adjacent enemy, then consumes all layers.",
              "tooltip": [
                "Each target is rolled independently with +25 chance to hit.",
                "Deals 160% weapon damage and 150% armor damage to every adjacent enemy.",
                "The full four-layer bonus applies to all attacks; all layers are cleared after resolution even if every attack misses.",
                "Requires exactly 4 Enflamement layers and an adjacent enemy."
              ]
            },
            "zh": {
              "name": "焚身以火",
              "description": "离火达到 4 层时，长离对所有相邻敌人发动一次近战武器攻击，随后消耗全部离火。",
              "tooltip": [
                "每名目标独立判定，命中 +25。",
                "对所有相邻敌人造成 160% 武器伤害和 150% 护甲伤害。",
                "全部攻击享受完整 4 层离火加成；结算后清空所有层数，即使全部未命中。",
                "需要正好 4 层离火，并且身旁存在敌人。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Changli",
          "backgroundName": "Valkyrie Changli",
          "backgroundDescription": "Changli is counselor and mentor to Jinzhou's Magistrate, wearing a relaxed smile over a mind built for strategy. She knows the cost of fire and of reading people's hearts, and is willing to make even herself a piece on the board for Jinzhou and Jinhsi.",
          "traitName": "Changli Trait",
          "traitDescription": "Changli's clear-sighted command grants Melee Skill +15, Melee Defense +10, Resolve +15, and Initiative +15.",
          "traitTooltip": [
            "Melee Skill +15, Melee Defense +10, Resolve +15, and Initiative +15."
          ]
        },
        "zh": {
          "name": "长离",
          "backgroundName": "女武神长离",
          "backgroundDescription": "长离是今州令尹的参事与导师，常以从容笑意隐藏缜密谋略。她熟知人心与火焰的代价，愿以自身为棋，为今州与今汐铺出胜局。",
          "traitName": "长离特性",
          "traitDescription": "长离洞察战局，获得近战技能 +15、近战防御 +10、决心 +15、主动值 +15。",
          "traitTooltip": [
            "近战技能 +15，近战防御 +10，决心 +15，主动值 +15。"
          ]
        }
      }
    },
    {
      "id": "raiden_shogun",
      "order": 20,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "raiden_shogun_skin",
          "images": {
            "portrait": "assets/valkyries/raiden_shogun_card.png",
            "preview": "assets/valkyries/raiden_shogun_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Raiden Shogun Skin",
              "description": ""
            },
            "zh": {
              "name": "雷电将军皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "raiden_shogun_eternal_authority",
          "icon": "raiden_shogun_eternal_authority",
          "image": "assets/skills/raiden_shogun_eternal_authority.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "HitChance": 10,
            "DamageMult": 1.1
          },
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
        {
          "key": "raiden_shogun_musou_no_hitotachi",
          "icon": "raiden_shogun_musou_no_hitotachi",
          "image": "assets/skills/raiden_shogun_musou_no_hitotachi.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 1,
            "MaxRange": 5,
            "HitChance": 30,
            "FixedDamage": 140,
            "DirectDamage": 0.3,
            "ArmorDamageMult": 1.5,
            "Turns": 1,
            "IsAttack": true
          },
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
      ],
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
      }
    },
    {
      "id": "yixuan",
      "order": 21,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "classic",
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
        "Hitpoints": 25,
        "MeleeSkill": 10,
        "MeleeDefense": 10,
        "Bravery": 15
      },
      "images": {
        "card": "assets/valkyries/yixuan_card.png",
        "skin": "assets/valkyries/yixuan_skin_preview.png",
        "trait": "assets/traits/yixuan_trait_icon.png"
      },
      "skins": [
        {
          "id": "yixuan_skin",
          "images": {
            "portrait": "assets/valkyries/yixuan_card.png",
            "preview": "assets/valkyries/yixuan_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Yixuan Skin",
              "description": ""
            },
            "zh": {
              "name": "仪玄皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "yixuan_arcane_mastery",
          "icon": "yixuan_preceptor_stance",
          "image": "assets/skills/yixuan_preceptor_stance.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Arcane Mastery",
              "description": "Yixuan converts her own maximum vitality into armor-ignoring Life Piercing damage and gathers Technique Points through successful followups.",
              "tooltip": [
                "After an ordinary active weapon attack hits its main target and leaves it alive, deal fixed HP damage equal to 15% of Yixuan's maximum HP, rounded down, up to 25.",
                "Each successfully applied Life Piercing grants 1 Technique Point, up to 3, even if the fixed damage kills the target.",
                "Each action can trigger once on its main target. Misses, weapon kills, counters, Attacks of Opportunity, followups, and Endless Talisman are excluded."
              ]
            },
            "zh": {
              "name": "术法宗师",
              "description": "仪玄将自身最大生命转化为无视护甲的生命贯穿伤害，并通过成功追加积累术法值。",
              "tooltip": [
                "普通主动武器攻击命中主目标且武器伤害后目标仍存活时，追加仪玄最大生命值 15% 的固定生命伤害，向下取整，最高 25 点。",
                "生命贯穿成功结算后获得 1 点术法值，最多 3 点；即使固定伤害击杀目标仍会获得。",
                "每次行动只对主目标触发一次；未命中、武器击杀、反击、借机攻击、追击和符法千重均不触发。"
              ]
            }
          }
        },
        {
          "key": "yixuan_auric_ink_shock",
          "icon": "yixuan_mountain_suppression",
          "image": "assets/skills/yixuan_mountain_suppression.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 1,
            "MaxRange": 3,
            "HitChance": 20,
            "WeaponDamageMult": 1.2,
            "ArmorDamageMult": 1.5,
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "PerTurnUses": 1,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "Auric Ink Shock",
              "description": "Once per turn, Yixuan channels auric ink through her melee weapon to strike one enemy at short range, then invokes Life Piercing if the target survives.",
              "tooltip": [
                "Targets one visible enemy at range 1-3 with +20 chance to hit, no distance penalty, and ignores shield defense.",
                "Deals 120% weapon damage and 150% armor damage.",
                "A weapon hit against a surviving target triggers Arcane Mastery's 15% Life Piercing and grants 1 Technique Point."
              ]
            },
            "zh": {
              "name": "玄墨震击",
              "description": "每回合一次，仪玄将玄墨注入近战武器，短距离震击一名敌人；目标存活时再触发生命贯穿。",
              "tooltip": [
                "选择 1 至 3 格内一名可见敌人，命中 +20，不受距离衰减并无视盾牌防御。",
                "造成 120% 武器伤害和 150% 护甲伤害。",
                "武器命中且目标存活时触发术法宗师的 15% 生命贯穿，并获得 1 点术法值。"
              ]
            }
          }
        },
        {
          "key": "yixuan_endless_talisman_suppression",
          "icon": "yixuan_endless_talisman_suppression",
          "image": "assets/skills/yixuan_endless_talisman_suppression.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 2,
            "MaxRange": 6,
            "Radius": 1,
            "HitChance": 30,
            "WeaponDamageMult": 1,
            "ArmorDamageMult": 1.5,
            "ActionPointCost": 6,
            "FatigueCost": 30,
            "RequiredPoints": 3,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "Endless Talisman Suppression",
              "description": "Yixuan spends all 3 Technique Points before raining talismans upon a distant enemy and every enemy adjacent to it.",
              "tooltip": [
                "Targets one visible enemy at range 2-6 and enemies within radius 1. Each attack has +30 chance to hit, no distance penalty, and ignores shield defense.",
                "Each target takes 100% weapon damage and 150% armor damage.",
                "Each weapon-hit surviving target takes fixed HP damage equal to 30% of Yixuan's maximum HP, rounded down, up to 50.",
                "Consumes all 3 Technique Points on formal use before the first attack. Misses never refund points, and this skill cannot generate points."
              ]
            },
            "zh": {
              "name": "符法千重",
              "description": "仪玄在第一击前消耗全部 3 点术法值，以万千符箓轰击远处主目标及其相邻敌人。",
              "tooltip": [
                "选择 2 至 6 格内一名可见敌人，并攻击其周围 1 格敌人；每次攻击命中 +30，不受距离衰减并无视盾牌防御。",
                "每名目标受到 100% 武器伤害和 150% 护甲伤害。",
                "每名被武器命中且仍存活的目标受到仪玄最大生命值 30% 的固定生命伤害，向下取整，最高 50 点。",
                "正式发动后、第一击前消耗全部 3 点术法值；全部未命中也不返还，且本技能不会获得术法值。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Yixuan",
          "backgroundName": "Valkyrie Yixuan",
          "backgroundDescription": "Yixuan is the thirteenth High Preceptor of Yunkui Summit, a hidden master of the Outer Ring and teacher to disciples such as Ju Fufu. Wise and steady, she once shielded civilians from Hollow disaster and still enters danger herself despite ether corruption gnawing at her body.",
          "traitName": "Yixuan Trait",
          "traitDescription": "Yixuan's mastery of Yunkui Mountain grants Hitpoints +25, Melee Skill +10, Melee Defense +10, and Resolve +15.",
          "traitTooltip": [
            "Hitpoints +25, Melee Skill +10, Melee Defense +10, and Resolve +15."
          ]
        },
        "zh": {
          "name": "仪玄",
          "backgroundName": "女武神仪玄",
          "backgroundDescription": "仪玄是云岿山第十三代高师，绝区零外环的隐世宗师，也是橘福福等人的师父。她睿智沉稳，曾在空洞灾厄中守护平民，即使身受以太侵蚀仍愿亲自踏入险地。",
          "traitName": "仪玄特性",
          "traitDescription": "仪玄身为云岿宗师，获得生命值 +25、近战技能 +10、近战防御 +10、决心 +15。",
          "traitTooltip": [
            "生命值 +25，近战技能 +10，近战防御 +10，决心 +15。"
          ]
        }
      }
    },
    {
      "id": "xilian",
      "order": 22,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "xilian_skin",
          "images": {
            "portrait": "assets/valkyries/xilian_card.png",
            "preview": "assets/valkyries/xilian_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Xilian Skin",
              "description": ""
            },
            "zh": {
              "name": "昔涟皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "xilian_memory_sanctuary",
          "icon": "xilian_memory_sanctuary",
          "image": "assets/skills/xilian_memory_sanctuary.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MeleeDefense": 10,
            "RangedDefense": 10
          },
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
        {
          "key": "xilian_beyond_closed_loop",
          "icon": "xilian_beyond_closed_loop",
          "image": "assets/skills/xilian_beyond_closed_loop.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 1,
            "MaxRange": 5,
            "IsAttack": false,
            "RestoreTargetVitals": true,
            "RestoreTargetInjuries": true
          },
          "text": {
            "en": {
              "name": "Beyond the Closed Loop",
              "description": "Xilian helps one ally within 5 tiles step beyond the current loop, restoring AP, hitpoints, and armor to maximum, and removing all temporary and permanent injuries.",
              "tooltip": [
                "Restores the selected ally's AP to maximum.",
                "Restores the selected ally's hitpoints to maximum.",
                "Restores the selected ally's head and body armor to maximum.",
                "Removes all temporary and permanent injuries from the selected ally.",
                "Targets one allied character within 5 tiles, excluding Xilian herself."
              ]
            },
            "zh": {
              "name": "闭环之外",
              "description": "昔涟让 5 格内一名友方短暂越过闭环，AP、生命值和护甲全部恢复到最大值，并移除所有临时伤势与永久伤残。",
              "tooltip": [
                "选中友方的 AP 恢复到最大值。",
                "选中友方的生命值恢复到最大值。",
                "选中友方的头部与身体护甲恢复到最大值。",
                "移除选中友方的所有临时伤势与永久伤残。",
                "选择 5 格内一名友方角色，不能选择昔涟自己。"
              ]
            }
          }
        }
      ],
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
      }
    },
    {
      "id": "liuying",
      "order": 23,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_frontline",
      "detailLayout": "classic",
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
      "skins": [
        {
          "id": "liuying_skin",
          "images": {
            "portrait": "assets/valkyries/liuying_card.png",
            "preview": "assets/valkyries/liuying_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Liuying Skin",
              "description": ""
            },
            "zh": {
              "name": "流萤皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "liuying_iron_cavalry_armor",
          "icon": "liuying_iron_cavalry_armor",
          "image": "assets/skills/liuying_iron_cavalry_armor.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "DamageReductionMult": 0.5
          },
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
        {
          "key": "liuying_sam_suppression_charge",
          "icon": "liuying_sam_suppression_charge",
          "image": "assets/skills/liuying_sam_suppression_charge.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 0,
            "MaxRange": 0,
            "IsAttack": false,
            "RestoreTargetVitals": true,
            "RestoreTargetInjuries": true
          },
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
      ],
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
      }
    },
    {
      "id": "cartethyia",
      "order": 24,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "Hitpoints": 20,
        "MeleeSkill": 10,
        "RangedSkill": 10,
        "Initiative": 20,
        "Bravery": 10
      },
      "images": {
        "card": "assets/valkyries/cartethyia_card.png",
        "skin": "assets/valkyries/cartethyia_skin_preview.png",
        "trait": "assets/traits/cartethyia_trait_icon.png"
      },
      "skins": [
        {
          "id": "cartethyia_skin",
          "images": {
            "portrait": "assets/valkyries/cartethyia_card.png",
            "preview": "assets/valkyries/cartethyia_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Cartethyia Skin",
              "description": ""
            },
            "zh": {
              "name": "卡提希娅皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "cartethyia_aero_erosion_web",
          "icon": "cartethyia_wind_net",
          "image": "assets/skills/cartethyia_wind_net.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Aero Erosion Web",
              "description": "Direct weapon hits bind foes in web and seed lasting Aero Erosion before manifestation.",
              "tooltip": [
                "Direct hits apply Web. In Cartethyia form, active weapon attacks also apply one permanent Aero Erosion."
              ]
            },
            "zh": {
              "name": "风蚀之网",
              "description": "直接武器命中会施加蛛网；显化前的主动武器攻击还会留下永久风蚀。",
              "tooltip": [
                "直接命中施加蛛网。卡提希娅形态的主动武器攻击施加一层永久风蚀。"
              ]
            }
          }
        },
        {
          "key": "cartethyia_sword_in_humanity_name",
          "icon": "cartethyia_storm_verdict",
          "image": "assets/skills/cartethyia_storm_verdict.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "This Sword, in Humanity's Name",
              "description": "Strike a target area with a sanctified gale.",
              "tooltip": [
                "4 AP, 20 Fatigue. Hit +15; 100% weapon and 125% armor damage in a one-tile target area. Can be used once per own turn."
              ]
            },
            "zh": {
              "name": "此剑以人之名",
              "description": "以祝圣风潮斩击目标区域。",
              "tooltip": [
                "消耗 4 AP、20 疲劳；命中 +15，对目标周围一格造成 100% 武器伤害与 125% 护甲伤害。每个自身行动回合最多使用一次。"
              ]
            }
          }
        },
        {
          "key": "cartethyia_knights_heartfelt_prayers",
          "icon": "cartethyia_knights_heartfelt_prayers",
          "image": "assets/skills/cartethyia_knights_heartfelt_prayers.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Knight's Heartfelt Prayers",
              "description": "Reduce yourself to half health and manifest Fleurdelys once per battle; automatically release the finale after 4 turns.",
              "tooltip": [
                "0 AP. Sets current health to 50% of maximum if higher, then manifests Fleurdelys once this battle. Manifestation lasts 4 of her turns, then automatically releases Blade of the Howling Squall."
              ]
            },
            "zh": {
              "name": "骑士心愿",
              "description": "将生命降至半血，每场战斗一次显化芙露德莉斯，持续 4 回合后自动释放终结技。",
              "tooltip": [
                "消耗 0 AP；若当前生命高于半血则降至最大生命的 50%，本场战斗一次显化芙露德莉斯。显化持续 4 个己方回合，届满自动释放呼啸风暴之刃。"
              ]
            }
          }
        },
        {
          "key": "cartethyia_tempest_break_tides",
          "icon": "cartethyia_tempest_break_tides",
          "image": "assets/skills/cartethyia_tempest_break_tides.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Tempest Break Tides",
              "description": "Fleurdelys sweeps a target area with her storm blade.",
              "tooltip": [
                "4 AP, 25 Fatigue. Hit +20; 120% weapon and 150% armor damage. The erosion-marked primary target takes 30 armor and 15 hitpoint fixed damage. Can be used once per own turn."
              ]
            },
            "zh": {
              "name": "凭风斩浪",
              "description": "芙露德莉斯以风暴之刃横扫目标区域。",
              "tooltip": [
                "消耗 4 AP、25 疲劳；命中 +20，造成 120% 武器伤害与 150% 护甲伤害。带风蚀主目标额外受 30 护甲与 15 生命固定伤害。每个自身行动回合最多使用一次。"
              ]
            }
          }
        },
        {
          "key": "cartethyia_blade_howling_squall",
          "icon": "cartethyia_blade_howling_squall",
          "image": "assets/skills/cartethyia_blade_howling_squall.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Blade of the Howling Squall",
              "description": "End manifestation in a distant storm, then recover half maximum health.",
              "tooltip": [
                "6 AP, 30 Fatigue. Hit +30 and ignores shields; clears all Aero Erosion, restores 50% maximum health, and ends manifestation."
              ]
            },
            "zh": {
              "name": "呼啸风暴之刃",
              "description": "以远处风暴结束显化，并恢复最大生命值的 50%。",
              "tooltip": [
                "消耗 6 AP、30 疲劳；命中 +30、无视盾牌，清除全部风蚀、恢复最大生命的 50%并结束显化。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Cartethyia",
          "backgroundName": "Valkyrie Cartethyia",
          "backgroundDescription": "Cartethyia is Rinascita's Blessed Maiden, a Resonator tied to the Sentinel Imperator, with another self connected to Fleurdelys. Gentle and sacred without being fragile, she answers heavier fate with the bearing of a gathering storm.",
          "traitName": "Cartethyia Trait",
          "traitDescription": "Cartethyia's blessed storm grants Hitpoints +20, Melee Skill +10, Ranged Skill +10, Initiative +20, and Resolve +10.",
          "traitTooltip": [
            "Hitpoints +20, Melee Skill +10, Ranged Skill +10, Initiative +20, Resolve +10."
          ]
        },
        "zh": {
          "name": "卡提希娅",
          "backgroundName": "女武神卡提希娅",
          "backgroundDescription": "卡提希娅是里纳西塔的祝圣少女，也是哨兵 Imperator 的共鸣者，另一面与 Fleurdelys 相连。她温柔圣洁却并非脆弱，命运越沉重，越会以风暴般的姿态回应。",
          "traitName": "卡提希娅特性",
          "traitDescription": "卡提希娅的祝圣风暴使她获得最大生命值 +20、近战技能 +10、远程技能 +10、主动值 +20 和决心 +10。",
          "traitTooltip": [
            "最大生命值 +20，近战技能 +10，远程技能 +10，主动值 +20，决心 +10。"
          ]
        }
      }
    },
    {
      "id": "castorice",
      "order": 25,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 55,
        "Stamina": 140,
        "MeleeSkill": 60,
        "RangedSkill": 70,
        "MeleeDefense": 12,
        "RangedDefense": 22,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 3,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 2,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {},
      "images": {
        "card": "assets/valkyries/castorice_card.png",
        "skin": "assets/valkyries/castorice_skin_preview.png",
        "trait": "assets/traits/castorice_trait_icon.png"
      },
      "skins": [
        {
          "id": "castorice_skin",
          "images": {
            "portrait": "assets/valkyries/castorice_card.png",
            "preview": "assets/valkyries/castorice_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Castorice Skin",
              "description": ""
            },
            "zh": {
              "name": "瑕蝶皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "castorice_newbud",
          "icon": "castorice_newbud",
          "image": "assets/skills/castorice_newbud.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Newbud",
              "description": "Castorice's life-and-death bloom. Cocoon Drain feeds Newbud, and full Newbud unlocks Netherwing Descent.",
              "tooltip": [
                "Hitpoints +48.",
                "At 100 Newbud, Netherwing Descent becomes usable and consumes all Newbud."
              ]
            },
            "zh": {
              "name": "新蕊",
              "description": "瑕蝶的生死花蕾。「冥茧汲取」会积攒新蕊，满额新蕊解锁「死龙降临」。",
              "tooltip": [
                "生命值 +48。",
                "新蕊达到 100 时，「死龙降临」可使用，并会消耗全部新蕊。"
              ]
            }
          }
        },
        {
          "key": "castorice_cocoon_drain",
          "icon": "castorice_cocoon_drain",
          "image": "assets/skills/castorice_cocoon_drain.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Cocoon Drain",
              "description": "Castorice drains one enemy within 6 tiles, dealing current weapon damage, 150% armor damage, and fixed hitpoint damage while gathering Newbud.",
              "tooltip": [
                "Costs 4 AP, builds 15 Fatigue, and consumes 10 hitpoints; Castorice must keep at least 1 hitpoint.",
                "Deals one roll of current weapon damage; armor damage is 150% of that roll.",
                "Additionally deals fixed 10 hitpoint damage that ignores armor.",
                "Grants 25 Newbud on use, plus another 25 if the target dies.",
                "Targets an enemy within 6 tiles and does not make a hit-chance roll.",
                "Not enough hitpoints. Castorice needs more than 10 hitpoints to use this skill."
              ]
            },
            "zh": {
              "name": "冥茧汲取",
              "description": "瑕蝶汲取 6 格内一名敌人，造成当前武器伤害、150% 护甲伤害和固定生命伤害，并积攒新蕊。",
              "tooltip": [
                "消耗 4 AP，增加 15 疲劳，并消耗 10 点生命值；瑕蝶必须保留至少 1 点生命值。",
                "造成一次当前武器伤害；护甲伤害为本次武器伤害的 150%。",
                "额外固定造成 10 点无视护甲的生命值伤害。",
                "使用后获得 25 新蕊；如果目标死亡，额外获得 25 新蕊。",
                "以 6 格内一名敌人为目标，无需命中判定。",
                "当前生命值不足，瑕蝶需要高于 10 点生命值才能使用。"
              ]
            }
          }
        },
        {
          "key": "castorice_netherwing_descent",
          "icon": "castorice_netherwing_descent",
          "image": "assets/skills/castorice_netherwing_descent.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Netherwing Descent",
              "description": "Castorice spends full Newbud to call the dead dragon onto one enemy and nearby foes while healing allies around her. Castorice cannot heal herself.",
              "tooltip": [
                "Costs 4 AP, builds 15 Fatigue, and consumes 100 Newbud.",
                "Main target: 300% current weapon damage, 200% armor damage, and fixed 50 hitpoint damage that ignores armor.",
                "Adjacent enemy targets: one roll of current weapon damage, 150% armor damage, and fixed 10 hitpoint damage that ignores armor.",
                "Armor damage is based on the weapon damage roll and no longer converts missing armor into extra hitpoint damage.",
                "After the strike, allied characters within 3 tiles recover 20 hitpoints. Castorice is excluded.",
                "Targets an enemy within 6 tiles and also strikes adjacent enemies.",
                "The main and secondary strikes do not make hit-chance rolls."
              ]
            },
            "zh": {
              "name": "死龙降临",
              "description": "瑕蝶消耗满额新蕊，让死龙袭向一名敌人与其相邻敌人，并治疗身边友军。瑕蝶不能治疗自己。",
              "tooltip": [
                "消耗 4 AP，增加 15 疲劳，并消耗 100 新蕊。",
                "主目标：造成 300% 当前武器伤害、200% 护甲伤害，并额外固定造成 50 点无视护甲的生命值伤害。",
                "相邻敌方副目标：造成一次当前武器伤害、150% 护甲伤害，并额外固定造成 10 点无视护甲的生命值伤害。",
                "护甲伤害按本次武器伤害倍率结算，不再把缺失护甲转化为额外生命伤害。",
                "攻击后，3 格内友方角色回复 20 点生命值。瑕蝶自己不会被治疗。",
                "以 6 格内一名敌人为主目标，并攻击其相邻敌人。",
                "主目标和副目标的攻击都无需命中判定。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Castorice",
          "backgroundName": "Valkyrie Castorice",
          "backgroundDescription": "Castorice walks at the edge of life and death, sending pale butterflies and a shadowed dragon to gather the final bloom from the battlefield.",
          "traitName": "Castorice Trait",
          "traitDescription": "Castorice's life-and-death mechanic is carried by her unique passive, Newbud: that passive grants Hitpoints +48 and collects Newbud through Cocoon Drain. At full Newbud, she can call Netherwing Descent.",
          "traitTooltip": [
            "The unique passive Newbud grants Hitpoints +48. Cocoon Drain grants Newbud; Netherwing Descent consumes full Newbud."
          ]
        },
        "zh": {
          "name": "瑕蝶",
          "backgroundName": "女武神瑕蝶",
          "backgroundDescription": "瑕蝶行走在生与死的边界，以苍白蝴蝶和幽暗死龙收集战场上的终末新蕊。",
          "traitName": "瑕蝶特性",
          "traitDescription": "瑕蝶的生死机制由专属被动「新蕊」承载：该被动提供生命值 +48，并通过「冥茧汲取」积攒新蕊。新蕊满时，可以呼唤「死龙降临」。",
          "traitTooltip": [
            "专属被动「新蕊」提供生命值 +48。「冥茧汲取」获得新蕊；「死龙降临」消耗满额新蕊。"
          ]
        }
      }
    },
    {
      "id": "changyeyue",
      "order": 26,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 105,
        "Bravery": 60,
        "Stamina": 135,
        "MeleeSkill": 60,
        "RangedSkill": 70,
        "MeleeDefense": 14,
        "RangedDefense": 25,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 3,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 2,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Hitpoints": 25,
        "Bravery": 20,
        "RangedDefense": 10,
        "MentalMorale": 20
      },
      "images": {
        "card": "assets/valkyries/changyeyue_card.png",
        "skin": "assets/valkyries/changyeyue_skin_preview.png",
        "trait": "assets/traits/changyeyue_trait_icon.png"
      },
      "skins": [
        {
          "id": "changyeyue_skin",
          "images": {
            "portrait": "assets/valkyries/changyeyue_card.png",
            "preview": "assets/valkyries/changyeyue_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Evernight Skin",
              "description": ""
            },
            "zh": {
              "name": "长夜月皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "changyeyue_long_night",
          "icon": "changyeyue_moonbound_crystal_thread",
          "image": "assets/skills/changyeyue_moonbound_crystal_thread.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Long Night",
              "description": "Evernight gathers Memory as she strikes enemies and protects nearby allies. At full Memory, Darkest Riddle becomes available.",
              "tooltip": [
                "Current Memory: ",
                "Successful hits grant 25 Memory; kills grant another 25. Once per round, when an ally within 4 tiles takes hitpoint damage, Evernight gains 15 Memory.",
                "Evernight gains +30 hit chance against Oblivion targets. Hitting an Oblivion target triggers 30 fixed hitpoint damage once per target each round."
              ]
            },
            "zh": {
              "name": "长夜",
              "description": "长夜月在攻击敌人与守护身边友军时积攒忆质。忆质满额后，可以释放「至暗之谜」。",
              "tooltip": [
                "当前忆质：",
                "成功命中获得 25 忆质；击杀额外获得 25 忆质。每轮一次，4 格内友军受到生命值伤害时，长夜月获得 15 忆质。",
                "长夜月攻击忘却目标时命中率 +30。命中忘却目标时追加 30 点固定生命值伤害，每名目标每轮最多触发一次。"
              ]
            }
          }
        },
        {
          "key": "changyeyue_darkest_riddle",
          "icon": "changyeyue_darkest_riddle",
          "image": "assets/skills/changyeyue_darkest_riddle.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Darkest Riddle",
              "description": "Evernight spends full Memory and part of her current life to unfold the shadow of Long Night over one enemy and nearby foes.",
              "tooltip": [
                "Costs 4 AP, builds 20 Fatigue, consumes 100 Memory, and spends 15% of Evernight's current hitpoints without reducing her below 1.",
                "Main target: 200% current weapon damage, 150% armor damage, and 20 fixed hitpoint damage that ignores armor.",
                "Adjacent enemies: 100% current weapon damage, 100% armor damage, and 10 fixed hitpoint damage that ignores armor.",
                "After the strike, enemy targets receive Oblivion for 3 turns. Evernight gains Darkest Riddle for 3 turns. Allies are ignored."
              ]
            },
            "zh": {
              "name": "至暗之谜",
              "description": "长夜月消耗满额忆质与部分当前生命，让「长夜」的影子覆盖一名敌人与周围敌人。",
              "tooltip": [
                "消耗 4 AP，增加 20 疲劳，消耗 100 忆质，并消耗长夜月当前生命值的 15%，不会使其低于 1 点生命值。",
                "主目标：造成 200% 当前武器伤害、150% 护甲伤害，并额外造成 20 点无视护甲的固定生命值伤害。",
                "相邻敌人：造成 100% 当前武器伤害、100% 护甲伤害，并额外造成 10 点无视护甲的固定生命值伤害。",
                "攻击后，敌方目标获得持续 3 回合的「忘却」。长夜月获得持续 3 回合的「至暗之谜」。友军会被忽略。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Evernight",
          "backgroundName": "Valkyrie Evernight",
          "backgroundDescription": "Evernight stands where memory thins into silence, guarding the company with moonlit ice and the shadow called Long Night.",
          "traitName": "Hidden Stranger",
          "traitDescription": "Evernight is a guardian born from memory, ice, and oblivion. She endures terror calmly, then erases the enemy's path forward.",
          "traitTooltip": [
            "Hitpoints +25, Resolve +20, Ranged Defense +10, and +20 Resolve against mental attacks."
          ]
        },
        "zh": {
          "name": "长夜月",
          "backgroundName": "女武神长夜月",
          "backgroundDescription": "长夜月立于记忆稀薄成寂静的边界，以月色寒冰和名为「长夜」的影子守护队伍。",
          "traitName": "隐密的陌客",
          "traitDescription": "长夜月诞生于记忆、冰与忘却。她平静承受恐惧，然后抹去敌人继续前行的道路。",
          "traitTooltip": [
            "生命值 +25，决心 +20，远程防御 +10，抵抗精神攻击时决心额外 +20。"
          ]
        }
      }
    },
    {
      "id": "hysilens",
      "order": 27,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "hybrid_skirmisher",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 55,
        "Stamina": 135,
        "MeleeSkill": 55,
        "RangedSkill": 75,
        "MeleeDefense": 12,
        "RangedDefense": 25,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 3,
        "Initiative": 2
      },
      "traitBonuses": {
        "MeleeSkill": 5,
        "RangedSkill": 5,
        "MeleeDefense": 5,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/hysilens_card.png",
        "skin": "assets/valkyries/hysilens_skin_preview.png",
        "trait": "assets/traits/hysilens_trait_icon.png"
      },
      "skins": [
        {
          "id": "hysilens_skin",
          "images": {
            "portrait": "assets/valkyries/hysilens_card.png",
            "preview": "assets/valkyries/hysilens_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Hysilens Skin",
              "description": ""
            },
            "zh": {
              "name": "海瑟音皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "hysilens_tidal_erosion",
          "icon": "hysilens_tidal_erosion",
          "image": "assets/skills/hysilens_tidal_erosion.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Tidal Erosion",
              "description": "Hysilens applies Tidal Erosion for 2 turns when her attacks hit an enemy.",
              "tooltip": [
                "Tidal Erosion reduces both defenses by 10, increases damage received by 15%, and deals 5 fixed hitpoint damage at turn end.",
                "Hysilens deals 20 extra fixed hitpoint damage to eroded targets. Other allies deal 10 extra fixed hitpoint damage to them."
              ]
            },
            "zh": {
              "name": "潮蚀",
              "description": "海瑟音的攻击命中敌人时，附加持续 2 回合的「潮蚀」。",
              "tooltip": [
                "「潮蚀」使目标近战防御和远程防御各降低 10，受到伤害提高 15%，并在回合结束时受到 5 点固定生命伤害。",
                "海瑟音攻击潮蚀目标时，额外造成 20 点固定生命伤害。其他友方攻击潮蚀目标时，额外造成 10 点固定生命伤害。"
              ]
            }
          }
        },
        {
          "key": "hysilens_crystal_tide",
          "icon": "hysilens_crystal_tide",
          "image": "assets/skills/hysilens_crystal_tide.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Crystal Tide",
              "description": "Once per battle, Hysilens floods one enemy and all adjacent enemies with Tidal Erosion for 2 turns.",
              "tooltip": [
                "Costs 0 AP and 0 Fatigue. Can be used once per battle.",
                "Targets one enemy within 6 tiles and every adjacent enemy. Allies are ignored."
              ]
            },
            "zh": {
              "name": "晶潮终涌",
              "description": "每场战斗一次，海瑟音让晶潮淹没一名敌人及其相邻敌人，附加持续 2 回合的「潮蚀」。",
              "tooltip": [
                "消耗 0 AP，增加 0 疲劳。每场战斗只能使用一次。",
                "指定 6 格内一名敌人，并影响其周围相邻 1 格内所有敌人。友方会被忽略。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Hysilens",
          "backgroundName": "Valkyrie Hysilens",
          "backgroundDescription": "Hysilens draws the tide into a cutting silence, eroding enemy footing before the company closes in.",
          "traitName": "Tide-Carved Singer",
          "traitDescription": "Hysilens fights by spreading Tidal Erosion, weakening marked enemies and turning every allied strike into a sharper wound.",
          "traitTooltip": [
            "Melee Skill +5, Ranged Skill +5, Melee Defense +5, and Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "海瑟音",
          "backgroundName": "女武神海瑟音",
          "backgroundDescription": "海瑟音将潮声压进刀锋般的静默，先腐蚀敌人的立足之处，再让整支队伍收束攻势。",
          "traitName": "潮刻歌者",
          "traitDescription": "海瑟音通过扩散「潮蚀」作战，削弱被标记的敌人，并让每一次友方追击都变成更深的裂口。",
          "traitTooltip": [
            "近战技能 +5，远程技能 +5，近战防御 +5，远程防御 +5。"
          ]
        }
      }
    },
    {
      "id": "tilixibiesi",
      "order": 28,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
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
        "Initiative": 40
      },
      "images": {
        "card": "assets/valkyries/tilixibiesi_card.png",
        "skin": "assets/valkyries/tilixibiesi_skin_preview.png",
        "trait": "assets/traits/tilixibiesi_trait_icon.png"
      },
      "skins": [
        {
          "id": "tilixibiesi_skin",
          "images": {
            "portrait": "assets/valkyries/tilixibiesi_card.png",
            "preview": "assets/valkyries/tilixibiesi_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Tilixibiesi Skin",
              "description": ""
            },
            "zh": {
              "name": "缇里西庇俄丝皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "tilixibiesi_underworld_coordinates",
          "icon": "tilixibiesi_underworld_coordinates",
          "image": "assets/skills/tilixibiesi_underworld_coordinates.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Underworld Coordinates",
              "description": "Tilixibiesi marks the battlefield with underworld coordinates, acting before the line can settle.",
              "tooltip": [
                "Initiative +40 is provided by the character trait; this passive icon explains the Underworld Coordinates mechanic and does not stack again."
              ]
            },
            "zh": {
              "name": "冥途坐标",
              "description": "缇里西庇俄丝在战场上标定冥途坐标，让自己总能先于阵线定型前行动。",
              "tooltip": [
                "主动值 +40 由人物特性提供；此被动图标用于说明冥途坐标机制，不额外叠加。"
              ]
            }
          }
        },
        {
          "key": "tilixibiesi_beyond_warp",
          "icon": "tilixibiesi_beyond_warp",
          "image": "assets/skills/tilixibiesi_beyond_warp.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Beyond Warp",
              "description": "Tilixibiesi locks on to any living combatant, then folds the battlefield to move that target to any legal empty tile.",
              "tooltip": [
                " AP and builds ",
                "The final warp consumes 5 hitpoints from Tilixibiesi and requires more than 5 current hitpoints.",
                "First use: choose any living allied or enemy combatant as the teleport target.",
                "Second use: choose any legal empty tile as the destination. There is no enemy-only restriction. A completed warp can be used once during each of Tilixibiesi's turns.",
                "Selected target: "
              ]
            },
            "zh": {
              "name": "彼岸折跃",
              "description": "缇里西庇俄丝先锁定任意存活战斗单位，再折叠战场，将该目标移动到任意合法空格。",
              "tooltip": [
                " AP，并增加 ",
                "最终折跃消耗缇里西庇俄丝 5 点生命值，且需要当前生命值大于 5。",
                "第一次使用：选择任意存活的我方或敌方战斗单位作为传送目标。",
                "第二次使用：选择任意合法空格作为目的地。没有敌人限制。完成折跃后，本技能在缇里西庇俄丝当前行动回合内不能再次使用；下个自身行动回合刷新。",
                "已锁定目标："
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Tilixibiesi",
          "backgroundName": "Valkyrie Tilixibiesi",
          "backgroundDescription": "Tilixibiesi carries a blue coordinate book said to map the shore between life and the far bank. On the battlefield she reads those sacred coordinates aloud, folding distance itself to place ally or enemy exactly where fate opens.",
          "traitName": "Underworld Coordinates",
          "traitDescription": "Tilixibiesi's Underworld Coordinates grant Initiative +40.",
          "traitTooltip": [
            "Initiative +40. No Melee Skill or Ranged Skill penalty."
          ]
        },
        "zh": {
          "name": "缇里西庇俄丝",
          "backgroundName": "女武神缇里西庇俄丝",
          "backgroundDescription": "缇里西庇俄丝携带一本蓝色坐标书，据说记录着生者之岸与彼岸之间的冥途。战场上，她会朗读这些神圣坐标，让距离本身折叠，把友军或敌人安放到命运开启的位置。",
          "traitName": "冥途坐标",
          "traitDescription": "缇里西庇俄丝的冥途坐标使她获得主动值 +40。",
          "traitTooltip": [
            "主动值 +40。不降低近战技能或远程技能。"
          ]
        }
      }
    },
    {
      "id": "cipher",
      "order": 29,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "hybrid_skirmisher",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 80,
        "Bravery": 50,
        "Stamina": 130,
        "MeleeSkill": 65,
        "RangedSkill": 70,
        "MeleeDefense": 18,
        "RangedDefense": 20,
        "Initiative": 140
      },
      "talents": {
        "Hitpoints": 1,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 3,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 3
      },
      "traitBonuses": {
        "Initiative": 15,
        "MeleeSkill": 8,
        "RangedSkill": 8,
        "MeleeDefense": 6,
        "ActionPoints": 1
      },
      "images": {
        "card": "assets/valkyries/cipher_card.png",
        "skin": "assets/valkyries/cipher_skin_preview.png",
        "trait": "assets/traits/cipher_trait_icon.png"
      },
      "skins": [
        {
          "id": "cipher_skin",
          "images": {
            "portrait": "assets/valkyries/cipher_card.png",
            "preview": "assets/valkyries/cipher_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Cipher Skin",
              "description": ""
            },
            "zh": {
              "name": "赛飞儿皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "cipher_old_patron",
          "icon": "cipher_lucky_paw",
          "image": "assets/skills/cipher_lucky_paw.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Old Patron",
              "description": "At the start of battle, Cipher marks the living enemy with the highest current hitpoints as her Old Patron.",
              "tooltip": [
                "At battle start, marks the living enemy with the highest current hitpoints. Ties choose the enemy closest to Cipher.",
                "When an allied character attacks the Old Patron, hit or miss, the Old Patron gains 1 Kickback, up to 3.",
                "When Cipher attacks the Old Patron, each Kickback adds 15 fixed hitpoint damage that ignores armor. This does not consume Kickback.",
                "If Cipher personally kills the Old Patron, she restores 2 AP and refreshes Moonlit Heist."
              ]
            },
            "zh": {
              "name": "老主顾",
              "description": "战斗开始时，赛飞儿将当前生命值最高的存活敌人标记为「老主顾」。",
              "tooltip": [
                "战斗开始时，标记当前生命值最高的存活敌人；若生命值相同，选择距离赛飞儿最近的目标。",
                "友方角色攻击老主顾时，无论命中或未命中，老主顾获得 1 层回扣，最多 3 层。",
                "赛飞儿攻击老主顾时，每层回扣额外造成 15 点无视护甲的固定生命伤害。该伤害不会消耗回扣。",
                "如果赛飞儿亲自击杀老主顾，她回复 2 AP，并刷新「月下窃行」。"
              ]
            }
          }
        },
        {
          "key": "cipher_name_your_price",
          "icon": "cipher_name_your_price",
          "image": "assets/skills/cipher_name_your_price.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Name Your Price",
              "description": "Cipher names any enemy on the battlefield as her new Old Patron, clearing the previous mark and its Kickback.",
              "tooltip": [
                "Costs 2 AP and builds 10 Fatigue.",
                "Can target any living enemy on the battlefield, with no range limit.",
                "No Old Patron is currently marked."
              ]
            },
            "zh": {
              "name": "自报身价",
              "description": "赛飞儿将战场上任意一名敌人指定为新的老主顾，移除旧标记并清空旧回扣。",
              "tooltip": [
                "消耗 2 AP，并增加 10 疲劳。",
                "可以指定战场上任意存活敌人，没有距离限制。",
                "当前没有老主顾。"
              ]
            }
          }
        },
        {
          "key": "cipher_moonlit_heist",
          "icon": "cipher_moonlit_heist",
          "image": "assets/skills/cipher_moonlit_heist.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Moonlit Heist",
              "description": "Cipher blinks to an empty tile within 6 tiles. Killing her Old Patron refreshes this skill for the current turn.",
              "tooltip": [
                "Costs 2 AP and builds 10 Fatigue. Can be used once during each of Cipher's turns; killing her Old Patron refreshes it during that turn.",
                "Teleports Cipher to an empty tile within 6 tiles."
              ]
            },
            "zh": {
              "name": "月下窃行",
              "description": "赛飞儿瞬移到 6 格内一个空地格。击杀老主顾会刷新本回合的该技能。",
              "tooltip": [
                "消耗 2 AP，并增加 10 疲劳。每个自身行动回合可使用一次；击杀老主顾会在当前行动回合刷新。",
                "将赛飞儿瞬移到 6 格内一个空地格。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Cipher",
          "backgroundName": "Valkyrie Cipher",
          "backgroundDescription": "Cipher slips through the fight like a smiling thief under moonlight, turning every marked enemy into a ledger entry waiting to be collected.",
          "traitName": "Fleet-Footed Heist",
          "traitDescription": "Cipher fights by marking an Old Patron, building Kickback from allied attacks, and blinking across the field to collect the final debt.",
          "traitTooltip": [
            "Initiative +15, Melee Skill +8, Ranged Skill +8, Melee Defense +6, Action Points +1."
          ]
        },
        "zh": {
          "name": "赛飞儿",
          "backgroundName": "女武神赛飞儿",
          "backgroundDescription": "赛飞儿像月光下带笑的飞贼一样穿过战场，把每一个被她盯上的敌人都变成等待结账的老主顾。",
          "traitName": "捷足的窃星客",
          "traitDescription": "赛飞儿通过标记「老主顾」作战：友军攻击老主顾会积攒回扣，而她会瞬移进场收走最后一笔账。",
          "traitTooltip": [
            "主动值 +15，近战技能 +8，远程技能 +8，近战防御 +6，行动点 +1。"
          ]
        }
      }
    },
    {
      "id": "cerydra",
      "order": 30,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 85,
        "Bravery": 65,
        "Stamina": 135,
        "MeleeSkill": 60,
        "RangedSkill": 60,
        "MeleeDefense": 18,
        "RangedDefense": 22,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 3,
        "MeleeSkill": 1,
        "RangedSkill": 1,
        "MeleeDefense": 2,
        "RangedDefense": 3,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "Initiative": 10,
        "Stamina": 10,
        "MeleeDefense": 5,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/cerydra_card.png",
        "skin": "assets/valkyries/cerydra_skin_preview.png",
        "trait": "assets/traits/cerydra_trait_icon.png"
      },
      "skins": [
        {
          "id": "cerydra_skin",
          "images": {
            "portrait": "assets/valkyries/cerydra_card.png",
            "preview": "assets/valkyries/cerydra_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Cerydra Skin",
              "description": ""
            },
            "zh": {
              "name": "刻律德拉皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "cerydra_war_banner",
          "icon": "cerydra_royal_edict",
          "image": "assets/skills/cerydra_royal_edict.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "War Banner of Law",
              "description": "Cerydra projects a command aura and gathers Edicts through the ally marked with Military Merit. At 4 Edicts, that ally is promoted to Peerage.",
              "tooltip": [
                "The Military Merit target grants 1 Edict whenever they use an attack skill, hit or miss, once per skill use."
              ]
            },
            "zh": {
              "name": "法度军旗",
              "description": "刻律德拉展开指挥光环，并通过被标记为军功的友军积攒诏令。诏令达到 4 枚时，该友军晋升为爵位。",
              "tooltip": [
                "军功目标每次使用攻击技能时，无论命中或未命中，刻律德拉获得 1 枚诏令；每次技能使用只计算一次。"
              ]
            }
          }
        },
        {
          "key": "cerydra_promote_pawn",
          "icon": "cerydra_promote_pawn",
          "image": "assets/skills/cerydra_promote_pawn.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Promote Pawn",
              "description": "Cerydra marks one allied character within 6 tiles with Military Merit, clearing her previous Merit or Peerage target and gaining 1 Edict.",
              "tooltip": [
                "Targets one allied character within 6 tiles. Cerydra cannot target herself.",
                "Military Merit grants +10 attack and defense skills, Resolve +10, and +10% damage. Its attacks build Edicts even when they miss.",
                "Switching the decorated ally resets existing Edicts to 0, then grants 1 Edict."
              ]
            },
            "zh": {
              "name": "兵卒升变",
              "description": "刻律德拉将 6 格内一名友军标记为军功，清除旧的军功或爵位目标，并获得 1 枚诏令。",
              "tooltip": [
                "指定 6 格内一名友军。刻律德拉不能指定自己。",
                "军功提供攻防技能 +10、决心 +10、伤害 +10%。军功目标攻击时即使命中失败也会积攒诏令。",
                "更换受勋友军会先把已有诏令重置为 0，再获得 1 枚诏令。"
              ]
            }
          }
        },
        {
          "key": "cerydra_checkmate_command",
          "icon": "cerydra_checkmate_command",
          "image": "assets/skills/cerydra_checkmate_command.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Royal Edict: Next Move",
              "description": "Cerydra spends 4 Edicts to command her current Peerage target into a Royal Command activation followed immediately by a normal turn, then downgrades them back to Military Merit.",
              "tooltip": [
                "Costs 5 AP and builds 25 Fatigue. The Peerage target acts next, then immediately receives their restored normal turn; Peerage is downgraded only after that normal turn ends. Royal Edict can be used once per battle round; extra turns do not refresh it.",
                "At the start of the commanded action, the target refills AP, reduces Fatigue by 15, and deals +15% damage for that action.",
                "The current Peerage target must be within 6 tiles.",
                "Requires a current Peerage target.",
                "Requires 4 Edicts.",
                "The current Peerage target is outside the 6-tile command range.",
                "Cerydra has already used this command this round."
              ]
            },
            "zh": {
              "name": "王令：再下一着",
              "description": "刻律德拉消耗 4 枚诏令，命令当前爵位目标连续获得一次王令行动和一次正常行动，然后将其降回军功。",
              "tooltip": [
                "消耗 5 AP，并增加 25 疲劳。爵位目标先执行王令行动，随后立刻恢复正常行动；只有该正常行动结束后，爵位才会降为军功。每个战斗轮次最多使用一次；额外行动回合不会刷新。",
                "王令行动开始时，目标 AP 回满、疲劳降低 15，并在该行动期间伤害 +15%。",
                "当前爵位目标必须位于 6 格内。",
                "需要当前存在爵位目标。",
                "需要 4 枚诏令。",
                "当前爵位目标不在 6 格王令范围内。",
                "刻律德拉本轮已经使用过该王令。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Cerydra",
          "backgroundName": "Valkyrie Cerydra",
          "backgroundDescription": "Cerydra carries the law of a fallen court into battle, turning one chosen ally from decorated soldier into titled blade.",
          "traitName": "Sovereign of the Board",
          "traitDescription": "Cerydra commands through banners, military merit, and royal edicts. Her chosen piece can be promoted, cleansed, and ordered to act again.",
          "traitTooltip": [
            "Resolve +20, Initiative +10, Fatigue +10, Melee Defense +5, and Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "刻律德拉",
          "backgroundName": "女武神刻律德拉",
          "backgroundDescription": "刻律德拉把旧日王庭的法度带上战场，让一名被选中的友军从受勋士兵升变为执剑爵位。",
          "traitName": "执棋的君主",
          "traitDescription": "刻律德拉以军旗、军功和王令指挥战场。她选中的棋子可以受勋、晋爵、净化负面状态，并被命令再次行动。",
          "traitTooltip": [
            "决心 +20，主动值 +10，疲劳上限 +10，近战防御 +5，远程防御 +5。"
          ]
        }
      }
    },
    {
      "id": "fengjin",
      "order": 31,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
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
        "card": "assets/valkyries/fengjin_card.png",
        "skin": "assets/valkyries/fengjin_skin_preview.png",
        "trait": "assets/traits/fengjin_trait_icon.png"
      },
      "skins": [
        {
          "id": "fengjin_skin",
          "images": {
            "portrait": "assets/valkyries/fengjin_card.png",
            "preview": "assets/valkyries/fengjin_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Fengjin Skin",
              "description": ""
            },
            "zh": {
              "name": "风堇皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "fengjin_tailwind_rhythm",
          "icon": "fengjin_healing_breeze",
          "image": "assets/skills/fengjin_healing_breeze.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "Initiative": 40
          },
          "text": {
            "en": {
              "name": "Tailwind Rhythm",
              "description": "Fengjin reads the battlefield on a gentle tailwind, acting before danger settles.",
              "tooltip": [
                "Initiative +40."
              ]
            },
            "zh": {
              "name": "顺风节律",
              "description": "风堇借着轻柔的顺风读懂战场，在危险落定之前先一步行动。",
              "tooltip": [
                "主动值 +40。"
              ]
            }
          }
        },
        {
          "key": "fengjin_feather_rescue",
          "icon": "fengjin_feather_rescue",
          "image": "assets/skills/fengjin_feather_rescue.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Feather Rescue",
              "description": "Fengjin wraps one allied character within 6 tiles in feathered wind, restoring 20 hitpoints and clearing temporary negative status effects.",
              "tooltip": [
                "Costs 4 AP and builds 15 Fatigue.",
                "Restores 20 hitpoints, up to the target's maximum hitpoints.",
                "Removes temporary negative status effects such as Stunned, Dazed, Staggered, Disarmed, Poisoned, Bleeding, Webbed, Rooted, Sleeping, Horrified, Nightmare, Distracted, and Withered."
              ]
            },
            "zh": {
              "name": "羽风救护",
              "description": "风堇以羽风包裹 6 格内一名友方角色，回复 20 点生命值并清除临时负面状态。",
              "tooltip": [
                "消耗 4 AP，并增加 15 疲劳。",
                "回复 20 点生命值，不超过目标最大生命值。",
                "清除眩晕、茫然、踉跄、缴械、中毒、流血、蛛网、定身、睡眠、惊骇、梦魇、分心、枯萎等临时负面状态。"
              ]
            }
          }
        },
        {
          "key": "fengjin_icarus_impact",
          "icon": "fengjin_skyward_companion",
          "image": "assets/skills/fengjin_skyward_companion.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Little Icarus Impact",
              "description": "Little Icarus crashes into one enemy within 6 tiles, dealing 80% current weapon damage and armor damage equal to 100% of that roll.",
              "tooltip": [
                "Costs 6 AP and builds 20 Fatigue.",
                "Deals 80% current weapon damage; armor damage is 100% of the current weapon damage roll.",
                "Deals no additional fixed hitpoint damage."
              ]
            },
            "zh": {
              "name": "小伊卡撞击",
              "description": "小伊卡撞向 6 格内一名敌人，造成当前武器伤害的 80%，并以当前武器伤害的 100% 冲击护甲。",
              "tooltip": [
                "消耗 6 AP，并增加 20 疲劳。",
                "造成当前武器伤害的 80%；护甲伤害为当前武器伤害的 100%。",
                "不造成额外固定生命值伤害。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Fengjin",
          "backgroundName": "Valkyrie Fengjin",
          "backgroundDescription": "Fengjin moves through the edge of battle with Little Icarus at her side, carrying warm feathers, quick wind, and a habit of reaching allies before the line breaks.",
          "traitName": "Fengjin Trait",
          "traitDescription": "Fengjin's presence is light and quick; her combat rhythm is carried by Tailwind Rhythm.",
          "traitTooltip": [
            "Fengjin's passive skill grants Initiative +40."
          ]
        },
        "zh": {
          "name": "风堇",
          "backgroundName": "女武神风堇",
          "backgroundDescription": "风堇带着小伊卡穿行在战场边缘，用轻盈的风、温暖的羽翼和刚好的速度照看每一个即将倒下的人。",
          "traitName": "风堇特性",
          "traitDescription": "风堇的步调轻快而稳定，她真正的战斗节奏来自被动技能「顺风节律」。",
          "traitTooltip": [
            "风堇的被动技能提供主动值 +40。"
          ]
        }
      }
    },
    {
      "id": "yuno",
      "order": 32,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
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
        "ActionPoints": 3,
        "Bravery": 15,
        "Initiative": 15,
        "RangedDefense": 10
      },
      "images": {
        "card": "assets/valkyries/yuno_card.png",
        "skin": "assets/valkyries/yuno_skin_preview.png",
        "trait": "assets/traits/yuno_trait_icon.png"
      },
      "skins": [
        {
          "id": "yuno_skin",
          "images": {
            "portrait": "assets/valkyries/yuno_card.png",
            "preview": "assets/valkyries/yuno_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Yuno Skin",
              "description": ""
            },
            "zh": {
              "name": "尤诺皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "yuno_destined_hunt",
          "icon": "yuno_oracle_guard",
          "image": "assets/skills/yuno_oracle_guard.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "HitChanceBonus": 15,
            "DamageMultiplier": 1.2
          },
          "text": {
            "en": {
              "name": "Destined Hunt",
              "description": "If a Death Omen resolves without killing its target, Yuno turns that foretold ending into a company-wide pursuit until the round ends.",
              "tooltip": [
                "Later allied attacks against the hunted target gain +15 chance to hit.",
                "Later regular weapon and armor damage, including Yuno's weapon followup, is multiplied by 1.20. Fixed damage remains unchanged.",
                "The effect does not strengthen the attack that consumed Death Omen. It does not stack, refreshes within the current round, and ends at the next round boundary or on death."
              ]
            },
            "zh": {
              "name": "命定追猎",
              "description": "死兆完成结算后若目标仍然存活，尤诺会把已预见的结局化为持续至本轮结束的全队追猎。",
              "tooltip": [
                "后续友方攻击命定追猎目标时，命中 +15。",
                "后续常规武器与护甲伤害（包括尤诺的武器追加伤害）乘以 1.20；固定伤害保持原值。",
                "不会强化消耗死兆的第一次攻击。效果不可叠加，只刷新至本轮结束，并在下一轮开始或目标死亡时移除。"
              ]
            }
          }
        },
        {
          "key": "yuno_death_omen",
          "icon": "yuno_fate_rewrite",
          "image": "assets/skills/yuno_fate_rewrite.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 1,
            "MaxRange": 6,
            "APPerUse": 6,
            "HitChanceBonus": 35,
            "FixedDamage": 20,
            "WeaponDamageMult": 1,
            "APReduction": 4,
            "KillRefund": 4,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "Death Omen",
              "description": "Mark one enemy within 6 tiles until the round ends. The next allied attack consumes the omen after resolving and forces fate toward execution.",
              "tooltip": [
                "The consuming allied attack gains +35 chance to hit and ignores only defense supplied by the target's shield. Hit or miss, the omen is consumed once.",
                "On hit, after the original attack: deal 20 fixed hitpoint damage, then one automatic 100% attack using Yuno's current main-hand weapon without resource, durability, ammunition, or weapon-skill effects. A survivor loses 4 current AP (minimum 0), becomes Dazed for 1 turn, then gains Destined Hunt.",
                "If the original attack, fixed damage, or Yuno's weapon followup kills the target, the attacker and Yuno each recover 4 AP, capped by their maximum. If Yuno is the attacker, both refunds apply for 8 AP total.",
                "Costs 0/6/12/18... AP for successive successful casts during Yuno's own turn. The count resets only when Yuno's next turn starts; kills do not reset it. Different targets may be marked, but one target cannot hold two omens."
              ]
            },
            "zh": {
              "name": "死兆预言",
              "description": "标记 6 格内一名敌人，持续至本轮结束。下一次友方攻击在完成结算后消耗死兆，并把命运推向处决。",
              "tooltip": [
                "消耗死兆的友方攻击命中 +35，并且只忽略目标盾牌提供的防御。无论命中或未命中，死兆都只结算并消耗一次。",
                "命中后依次结算：原攻击、20 点固定生命伤害、尤诺当前主手武器 100% 自动命中伤害。武器追加不消耗资源、耐久或弹药，也不触发武器技能特效。若目标仍存活，则当前 AP -4（最低 0）、茫然 1 回合，随后获得命定追猎。",
                "若目标死于原攻击、固定伤害或尤诺武器追加，攻击者与尤诺各恢复 4 AP，且不超过各自上限。尤诺亲自触发击杀时两项分别结算，共恢复 8 AP。",
                "尤诺同一行动回合内成功施放的消耗依次为 0/6/12/18…… AP，只在尤诺下个行动回合开始时重置；击杀不会重置。可同时标记不同敌人，但同一目标不能重复拥有死兆。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Yuno",
          "backgroundName": "Valkyrie Yuno",
          "backgroundDescription": "Yuno is the priestess of the Tetragon Temple in Septimont, charged with delivering prophecies to the people. Elegant and mysterious, she seems able to see endings others have not yet reached through the mist of fate.",
          "traitName": "Moon Oracle Priestess",
          "traitDescription": "Yuno plans each action through prophecy, gaining +3 maximum Action Points, +15 Resolve, +15 Initiative, and +10 Ranged Defense.",
          "traitTooltip": [
            "Maximum Action Points +3, Resolve +15, Initiative +15, Ranged Defense +10."
          ]
        },
        "zh": {
          "name": "尤诺",
          "backgroundName": "女武神尤诺",
          "backgroundDescription": "尤诺是七丘地区四方神殿的女祭司，负责向人民传达预言。她优雅而神秘，似乎总能在命运的雾气中看见旁人尚未抵达的结局。",
          "traitName": "月谕祭司",
          "traitDescription": "尤诺借助预言规划每一步行动，使最大行动点 +3、决心 +15、主动值 +15、远程防御 +10。",
          "traitTooltip": [
            "最大行动点 +3，决心 +15，主动值 +15，远程防御 +10。"
          ]
        }
      }
    },
    {
      "id": "phoebe",
      "order": 33,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 60,
        "RangedSkill": 65,
        "MeleeDefense": 12,
        "RangedDefense": 20,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 3,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 10,
        "Bravery": 15,
        "Stamina": 10,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/phoebe_card.png",
        "skin": "assets/valkyries/phoebe_skin_preview.png",
        "trait": "assets/traits/phoebe_trait_icon.png"
      },
      "skins": [
        {
          "id": "phoebe_skin",
          "images": {
            "portrait": "assets/valkyries/phoebe_card.png",
            "preview": "assets/valkyries/phoebe_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Phoebe Skin",
              "description": ""
            },
            "zh": {
              "name": "菲比皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "phoebe_absolution_litany",
          "icon": "phoebe_absolution_litany",
          "image": "assets/skills/phoebe_absolution_litany.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "HitChanceBonus": 10,
            "DamageMultiplier": 1.25,
            "DirectDamageAdd": 0.3
          },
          "text": {
            "en": {
              "name": "Absolution Litany",
              "description": "Phoebe recites a litany before every direct attack, exposing enemies already Dazed or Staggered to the light.",
              "tooltip": [
                "All direct attacks gain +10% chance to hit.",
                "Against a Dazed or Staggered enemy, weapon damage is increased by 25% and armor penetration by 30 percentage points.",
                "Only direct attacks are enhanced. The target's status is checked when the attack begins; this adds no new status or separate damage."
              ]
            },
            "zh": {
              "name": "赦罪祷词",
              "description": "菲比在每次直接攻击前吟诵赦罪祷词；已陷入茫然或踉跄的敌人会在光中暴露弱点。",
              "tooltip": [
                "所有直接攻击的命中率 +10%。",
                "攻击处于茫然或踉跄状态的敌人时，武器伤害 +25%，穿甲提高 30 个百分点。",
                "只强化直接攻击；目标状态在攻击开始时判定，不会附加新的状态或额外伤害。"
              ]
            }
          }
        },
        {
          "key": "phoebe_to_where_light_shines",
          "icon": "phoebe_to_where_light_shines",
          "image": "assets/skills/phoebe_to_where_light_shines.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "MinRange": 2,
            "MaxRange": 6,
            "ActionPointCost": 2,
            "FatigueCost": 30,
            "Radius": 1,
            "DazedTurns": 1,
            "StaggeredTurns": 1,
            "IsAttack": false
          },
          "text": {
            "en": {
              "name": "To Where Light Shines",
              "description": "Phoebe casts refracted light over a distant foe, dazzling the center and throwing nearby enemies off balance.",
              "tooltip": [
                "Costs 2 AP and builds 30 Fatigue. Targets one visible enemy 2 to 6 tiles away.",
                "The primary enemy is Dazed for 1 turn.",
                "Every enemy adjacent to the primary target is Staggered for 1 turn. Allies are ignored.",
                "Makes no hit roll and deals no damage. A target immune to Daze is not Dazed. It can be reused whenever AP and Fatigue allow."
              ]
            },
            "zh": {
              "name": "光明所至",
              "description": "菲比将衍射之光投向远处，使中心敌人目眩，并让周围敌人在突如其来的光辉中失去平衡。",
              "tooltip": [
                "消耗 2 AP并积累 30 疲劳；指定 2 至 6 格内的一名可见敌人。",
                "中心敌人获得 1 回合眩晕。",
                "与中心相邻的所有敌人获得 1 回合踉跄；友军不受影响。",
                "不进行命中判定且不造成伤害；目标免疫眩晕时不会获得眩晕。只要 AP 与疲劳允许即可重复使用。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Phoebe",
          "backgroundName": "Acolyte of the Order of the Deep",
          "backgroundDescription": "Phoebe guides the light through gentle and devout prayer. Even among the company, she keeps her acolyte's vows, refracting radiance over the wayward and revealing a path through the enemy line.",
          "traitName": "Devout Luminescence",
          "traitDescription": "Phoebe's faith, discipline, and affinity for light let her guide a battle steadily from afar.",
          "traitTooltip": [
            "Ranged Skill +10, Resolve +15, Fatigue +10, and Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "菲比",
          "backgroundName": "深海教团侍祭",
          "backgroundDescription": "菲比以虔诚而温柔的祷告引导光明。来到战团后，她仍遵循教团侍祭的职责，以衍射之光赦免迷途者，并为同伴指出击穿敌阵的道路。",
          "traitName": "虔光侍祭",
          "traitDescription": "菲比的信仰、礼仪与对光的感知，使她能从远处稳定地引导战局。",
          "traitTooltip": [
            "远程技能 +10，决心 +15，疲劳值 +10，远程防御 +5。"
          ]
        }
      }
    },
    {
      "id": "wisadel",
      "order": 34,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 60,
        "Stamina": 135,
        "MeleeSkill": 60,
        "RangedSkill": 75,
        "MeleeDefense": 12,
        "RangedDefense": 25,
        "Initiative": 130
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "RangedSkill": 15,
        "Bravery": 20,
        "Initiative": 15,
        "RangedDefense": 5
      },
      "images": {
        "card": "assets/valkyries/wisadel_card.png",
        "skin": "assets/valkyries/wisadel_skin_preview.png",
        "trait": "assets/traits/wisadel_trait_icon.png"
      },
      "skins": [
        {
          "id": "wisadel_skin",
          "images": {
            "portrait": "assets/valkyries/wisadel_card.png",
            "preview": "assets/valkyries/wisadel_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Wiš'adel Skin",
              "description": ""
            },
            "zh": {
              "name": "维什戴尔皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "wisadel_souvenir",
          "icon": "wisadel_souvenir",
          "image": "assets/skills/wisadel_souvenir.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "DamageMult": 1.15,
            "Turns": 1
          },
          "text": {
            "en": {
              "name": "Souvenir",
              "description": "Wiš'adel treats every shot as a souvenir left for the enemy, tearing open the line with heavier fire and upsetting their footing with the first blast.",
              "tooltip": [
                "All ranged attacks deal 15% more damage.",
                "The first successful ranged hit each turn applies Staggered for 1 turn."
              ]
            },
            "zh": {
              "name": "纪念品",
              "description": "维什戴尔把每次射击都当作留给敌人的纪念品，以更凶猛的火力撕开阵线，并用第一声爆炸打乱敌人的脚步。",
              "tooltip": [
                "所有远程攻击造成的伤害提高 15%。",
                "每回合第一次成功命中的远程攻击使目标获得 1 回合踉跄。"
              ]
            }
          }
        },
        {
          "key": "wisadel_explosive_dawn",
          "icon": "wisadel_explosive_dawn",
          "image": "assets/skills/wisadel_explosive_dawn.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 7,
            "FatigueCost": 30,
            "MinRange": 2,
            "MaxRange": 7,
            "Radius": 1,
            "HitChance": 25,
            "WeaponDamageMult": 1.5,
            "ArmorDamageMult": 1.5,
            "DazedTurns": 1,
            "IgnoreDistance": true,
            "IgnoreShield": true
          },
          "text": {
            "en": {
              "name": "Explosive Dawn",
              "description": "Wiš'adel fires an overloaded round into the enemy line, engulfing the target and its surroundings in a blast like dawn breaking over Kazdel.",
              "tooltip": [
                "Costs 7 AP and builds 30 Fatigue. Requires a ranged weapon and targets one visible enemy 2 to 7 tiles away. It can be reused whenever AP and Fatigue allow.",
                "Each attack gains +25% chance to hit, ignores shield obstruction, and ignores distance-based hit chance and damage modifiers.",
                "Deals 150% of current weapon damage and 150% armor damage to each target.",
                "Separately attacks the primary target and every adjacent enemy. Allies are ignored.",
                "Each surviving enemy hit becomes Dazed for 1 turn.",
                "Requires a ranged weapon in the main hand."
              ]
            },
            "zh": {
              "name": "爆裂黎明",
              "description": "维什戴尔向敌阵射出过载弹药，让爆炸如卡兹戴尔破晓时的火光般吞没目标及其周围。",
              "tooltip": [
                "消耗 7 AP并积累 30 疲劳；需要装备远程武器，可指定 2 至 7 格内的一名可见敌人。只要 AP 与疲劳允许即可重复使用。",
                "每次攻击命中率 +25%，无视盾牌提供的命中阻挡，并忽略距离造成的命中和伤害修正。",
                "对每个目标造成当前武器伤害的 150%，并造成 150% 护甲伤害。",
                "分别攻击中心目标和与其相邻的所有敌人；不会攻击友军。",
                "每个被命中的存活目标获得 1 回合茫然。",
                "需要在主手装备远程武器。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Wiš'adel",
          "backgroundName": "Sarkaz Mercenary",
          "backgroundDescription": "A Sarkaz mercenary from Kazdel, she crosses battlefields under the name W and a dangerous smile. Her mastery of explosives and ranged firepower turns even the most chaotic position into her favored ground.",
          "traitName": "The Most Dangerous Codename",
          "traitDescription": "Wiš'adel judges explosives, trajectories, and dangerous distances almost by instinct. The more chaotic the battlefield becomes, the more comfortably she fights.",
          "traitTooltip": [
            "Ranged Skill +15, Resolve +20, Initiative +15, and Ranged Defense +5."
          ]
        },
        "zh": {
          "name": "维什戴尔",
          "backgroundName": "萨卡兹佣兵",
          "backgroundDescription": "来自卡兹戴尔的萨卡兹佣兵，以 W 的代号和危险的笑容穿行于战火。她擅长操纵爆炸物与远程火力，总能把最混乱的阵地变成自己的主场。",
          "traitName": "最危险的代号",
          "traitDescription": "维什戴尔对爆炸、弹道和危险距离有近乎本能的判断，越混乱的战场越能让她发挥实力。",
          "traitTooltip": [
            "远程技能 +15，决心 +20，主动值 +15，远程防御 +5。"
          ]
        }
      }
    },
    {
      "id": "aglaea",
      "order": 35,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 60,
        "Stamina": 130,
        "MeleeSkill": 70,
        "RangedSkill": 50,
        "MeleeDefense": 20,
        "RangedDefense": 15,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 3,
        "RangedSkill": 1,
        "MeleeDefense": 2,
        "RangedDefense": 1,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 15,
        "MeleeSkill": 10,
        "MeleeDefense": 5,
        "Initiative": 15
      },
      "images": {
        "card": "assets/valkyries/aglaea_card.png",
        "skin": "assets/valkyries/aglaea_skin_preview.png",
        "trait": "assets/traits/aglaea_trait_icon.png"
      },
      "skins": [
        {
          "id": "aglaea_skin",
          "images": {
            "portrait": "assets/valkyries/aglaea_card.png",
            "preview": "assets/valkyries/aglaea_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Aglaea Skin",
              "description": ""
            },
            "zh": {
              "name": "阿格莱雅皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "aglaea_seam_stitch",
          "icon": "aglaea_seam_stitch",
          "image": "assets/skills/aglaea_seam_stitch.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Seam Stitch",
              "description": "Aglaea's attacks weave golden seams into enemies. Attacking an unmarked enemy applies Seam Stitch; attacking a marked enemy deals extra life damage and restores AP.",
              "tooltip": [
                "When Aglaea attacks an enemy without Seam Stitch, she applies Seam Stitch. There is no target limit, and Seam Stitch is not removed by attacking it.",
                "Successfully attacking a Seam Stitch target deals 30 additional hitpoint damage that ignores armor.",
                "Successfully attacking a Seam Stitch target restores 2 AP.",
                "If the attack kills the target by any part of its damage sequence, Aglaea also recovers 10 Fatigue. The AP recovery happens once for that attack.",
                "During Supreme Stance, attacks against Seam Stitch targets deal 20 more additional hitpoint damage."
              ]
            },
            "zh": {
              "name": "衣匠的缝痕",
              "description": "阿格莱雅的攻击会将金线缝入敌人。攻击没有缝痕的敌人时施加缝痕；攻击已有缝痕的敌人时造成额外生命伤害并回复 AP。",
              "tooltip": [
                "阿格莱雅攻击没有缝痕的敌人时会施加缝痕。缝痕没有数量限制，且不会因被攻击而自动取消。",
                "成功攻击缝痕目标时，额外造成 30 点无视护甲的生命伤害。",
                "成功攻击缝痕目标时，阿格莱雅回复 2 AP。",
                "如果这次攻击的任意伤害环节击杀目标，阿格莱雅额外恢复 10 疲劳；该次攻击的 AP 回复只结算一次。",
                "至尊姿态期间，攻击缝痕目标时额外生命伤害再增加 20 点。"
              ]
            }
          }
        },
        {
          "key": "aglaea_destined_weaving_dance",
          "icon": "aglaea_destined_weaving_dance",
          "image": "assets/skills/aglaea_destined_weaving_dance.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Destined Weaving Dance",
              "description": "Aglaea unfurls the golden thread of fate, applying Seam Stitch to one enemy and adjacent enemies while entering Supreme Stance. This skill has no friendly fire.",
              "tooltip": [
                "Can be used once per battle and costs no AP or Fatigue.",
                "Applies Seam Stitch to the main enemy target.",
                "Also applies Seam Stitch to adjacent enemies.",
                "Adjacent allies are ignored; this skill has no friendly fire.",
                "Aglaea enters Supreme Stance, causing Seam Stitch attacks to deal 20 more additional hitpoint damage."
              ]
            },
            "zh": {
              "name": "命定织舞",
              "description": "阿格莱雅展开命运金线，使一名敌人和相邻敌人进入缝痕状态，并让自己进入至尊姿态。该技能没有友伤。",
              "tooltip": [
                "每场战斗可使用一次，不消耗 AP 和疲劳。",
                "使主目标敌人进入缝痕状态。",
                "同时使相邻敌人进入缝痕状态。",
                "相邻友军会被忽略；该技能没有友伤。",
                "阿格莱雅进入至尊姿态，攻击缝痕目标时额外生命伤害再增加 20 点。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Aglaea",
          "backgroundName": "Valkyrie Aglaea",
          "backgroundDescription": "Aglaea, the Goldweaver, enters battle with golden thread and a quiet command over fate. Her strikes leave Seam Stitches that turn every follow-up into a cutting thread of life damage.",
          "traitName": "Goldweaver",
          "traitDescription": "Aglaea uses Seam Stitch to mark enemies and punish marked targets. Her Destined Weaving Dance spreads Seam Stitch and opens Supreme Stance.",
          "traitTooltip": [
            "Resolve +15, Melee Skill +10, Melee Defense +5, Initiative +15."
          ]
        },
        "zh": {
          "name": "阿格莱雅",
          "backgroundName": "女武神阿格莱雅",
          "backgroundDescription": "黄金织者阿格莱雅以金线与命运入战。她的攻击会留下缝痕，让后续每一次追击都化为切开生命的丝线。",
          "traitName": "黄金织者",
          "traitDescription": "阿格莱雅通过缝痕标记敌人，并惩罚带有缝痕的目标。命定织舞可以扩散缝痕并进入至尊姿态。",
          "traitTooltip": [
            "决心 +15，近战技能 +10，近战防御 +5，主动值 +15。"
          ]
        }
      }
    },
    {
      "id": "mai_shiranui",
      "order": 36,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "hybrid_skirmisher",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 50,
        "Stamina": 140,
        "MeleeSkill": 65,
        "RangedSkill": 65,
        "MeleeDefense": 15,
        "RangedDefense": 20,
        "Initiative": 140
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 3,
        "MeleeDefense": 2,
        "RangedDefense": 2,
        "Initiative": 3
      },
      "traitBonuses": {
        "MeleeSkill": 10,
        "RangedSkill": 10,
        "Initiative": 20,
        "Stamina": 10
      },
      "images": {
        "card": "assets/valkyries/mai_shiranui_card.png",
        "skin": "assets/valkyries/mai_shiranui_skin_preview.png",
        "trait": "assets/traits/mai_shiranui_trait_icon.png"
      },
      "skins": [
        {
          "id": "mai_shiranui_skin",
          "images": {
            "portrait": "assets/valkyries/mai_shiranui_card.png",
            "preview": "assets/valkyries/mai_shiranui_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Mai Shiranui Skin",
              "description": ""
            },
            "zh": {
              "name": "不知火舞皮肤",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "mai_shiranui_kachosen",
          "icon": "mai_shiranui_kachosen",
          "image": "assets/skills/mai_shiranui_kachosen.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Kachousen: Armorbreak",
              "description": "Mai turns every thrown weapon into an armor-rending Kachousen, opening the guard before striking a vital point with precise force.",
              "tooltip": [
                "Thrown weapon attacks gain 25 percentage points of armor penetration. This stacks with Duelist.",
                "The first thrown weapon hit of each of Mai's turns adds 10 fixed hitpoint damage that ignores armor.",
                "Only throwing axes, javelins, throwing spears, bolas, and sling stones qualify. Bows, crossbows, nets, bombs, and indirect damage do not."
              ]
            },
            "zh": {
              "name": "花蝶扇 破铠",
              "description": "不知火舞将投掷武器化作花蝶扇般的破甲暗器，先撕开护甲，再以精准劲力击中要害。",
              "tooltip": [
                "投掷武器攻击的护甲穿透提高 25 个百分点；可以与决斗者叠加。",
                "每个自身回合第一次投掷武器命中，追加 10 点无视护甲的固定生命伤害。",
                "只对飞斧、标枪、投矛、流星锤和投石索等投掷武器攻击生效；弓弩、投网、炸弹与间接伤害不触发。"
              ]
            }
          }
        },
        {
          "key": "mai_shiranui_chou_hissatsu_shinobi_bachi",
          "icon": "mai_shiranui_chou_hissatsu_shinobi_bachi",
          "image": "assets/skills/mai_shiranui_chou_hissatsu_shinobi_bachi.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Chou Hissatsu Shinobi Bachi: Flame Dance",
              "description": "Mai cuts into the enemy line with a flame-swift Shinobi Bachi, leaving the momentum of the charge to burn as a short and violent Flame Dance.",
              "tooltip": [
                "Costs 6 AP and builds 30 Fatigue. Targets one visible enemy 2 to 6 tiles away, once per battle.",
                "Charges to an adjacent tile, then deals 100% current melee weapon damage with +10% chance to hit.",
                "On hit, has an 80% chance to Stun the target for 1 turn. Enemies immune to Stun are unaffected.",
                "After reaching the destination, gains Flame Dance for the rest of this turn and the next two of Mai's turns: +10 defenses, -2 AP for melee and thrown weapon attacks (minimum 2), and doubled Fatigue recovery.",
                "Requires a melee weapon and a clear straight route without units, walls, impassable terrain, or enemy Zones of Control. The final tile may enter the target's Zone of Control.",
                "Requires a melee weapon in the main hand.",
                "Cannot be used while rooted.",
                "Cannot be used while in an enemy Zone of Control."
              ]
            },
            "zh": {
              "name": "超必杀忍蜂 炎舞",
              "description": "不知火舞沿火焰般的直线身法切入敌阵，以忍蜂突袭目标，并让余势化作短暂而猛烈的炎舞。",
              "tooltip": [
                "消耗 6 AP并积累 30 疲劳；指定 2 至 6 格内的一名可见敌人，每场战斗一次。",
                "突进到目标相邻空格后，以当前近战武器造成 100% 武器伤害，命中率 +10%。",
                "突进攻击命中后有 80% 概率使目标眩晕 1 回合；不能影响免疫眩晕的目标。",
                "成功到达后获得炎舞：当前回合剩余时间及随后两个自身回合内双防 +10，近战与投掷武器攻击 AP -2（最低 2），疲劳恢复翻倍。",
                "需要主手近战武器和一条无单位、墙体、不可通行地形及敌方控制区的合法直线路线；最终落点可以进入目标控制区。",
                "需要在主手装备近战武器。",
                "被定身时不能发动。",
                "处于敌方控制区时不能发动。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Mai Shiranui",
          "backgroundName": "Shiranui-ryu Kunoichi",
          "backgroundDescription": "A kunoichi of Shiranui-ryu, renowned for folding-fan techniques, martial arts, and movement as swift as flame. Among the company, Mai opens armor with thrown weapons before seizing a gap, closing to melee, and ending the fight in one flowing blaze.",
          "traitName": "Shiranui-ryu Ninjutsu",
          "traitDescription": "Thrown weapons, martial arts, and weightless footwork flow together, letting her change between ranged and close combat at a moment's notice.",
          "traitTooltip": [
            "Melee Skill +10, Ranged Skill +10, Initiative +20, and Fatigue +10."
          ]
        },
        "zh": {
          "name": "不知火舞",
          "backgroundName": "不知火流女忍",
          "backgroundDescription": "继承不知火流忍术的女忍者，以折扇、体术和火焰般迅疾的身法闻名。加入战团后，不知火舞习惯先用投掷武器撕开护甲，再抓住破绽突入近身，以连贯而炽烈的攻势结束战斗。",
          "traitName": "不知火流忍术",
          "traitDescription": "投掷、体术与轻灵步法在她身上融为一体，使她可以随时在远近两种战法之间切换。",
          "traitTooltip": [
            "近战技能 +10，远程技能 +10，主动值 +20，疲劳值 +10。"
          ]
        }
      }
    },
    {
      "id": "scarlet_shadow",
      "order": 37,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "classic",
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
        "MeleeDefense": 5,
        "Initiative": 20,
        "Stamina": 10
      },
      "images": {
        "card": "assets/valkyries/scarlet_shadow_kimono_card.png",
        "skin": "assets/valkyries/scarlet_shadow_skin_preview.png",
        "trait": "assets/traits/scarlet_shadow_trait_icon.png"
      },
      "skins": [
        {
          "id": "scarlet_shadow_kimono_skin",
          "images": {
            "portrait": "assets/valkyries/scarlet_shadow_kimono_card.png",
            "preview": "assets/valkyries/scarlet_shadow_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Scarlet Shadow Kimono",
              "description": ""
            },
            "zh": {
              "name": "暗影红莲和服",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "scarlet_shadow_flyflower",
          "icon": "scarlet_shadow_flyflower",
          "image": "assets/skills/scarlet_shadow_flyflower.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Flyflower Fading",
              "description": "After Scarlet Shadow completes an ordinary melee attack, she gains 1 Flyflower layer, up to 6. At 2-3 layers she can release stage 2, at 4-5 layers stage 4, and at 6 layers stage 6; releasing any stage clears Flyflower.",
              "tooltip": [
                "Ordinary melee attacks completed by Scarlet Shadow grant 1 Flyflower layer.",
                "At 2-3 / 4-5 / 6 layers, Flower Shadow Trinity changes form. Releasing any stage clears Flyflower."
              ]
            },
            "zh": {
              "name": "飞花渐逝",
              "description": "暗影红莲完成普通近战攻击后获得 1 层飞花，最多 6 层。2-3 层可释放第二阶段，4-5 层可释放第四阶段，6 层可释放第六阶段；任意阶段释放后清空飞花。",
              "tooltip": [
                "暗影红莲完成普通近战攻击后获得 1 层飞花。",
                "飞花在 2-3 / 4-5 / 6 层时，「花影三绝」切换形态。释放任意阶段后清空飞花。"
              ]
            }
          }
        },
        {
          "key": "scarlet_shadow_flower_shadow_trinity",
          "icon": "scarlet_shadow_flower_shadow_trinity",
          "image": "assets/skills/scarlet_shadow_flower_shadow_trinity.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Flower Shadow Trinity",
              "description": "Release the current Flyflower stage. Stage 2 is a close single-target slash, stage 4 is a long-range sword wave, and stage 6 hits the primary target and four forward tiles.",
              "tooltip": [
                "Costs 0 AP and 0 Fatigue. 2-3 layers release stage 2, 4-5 layers release stage 4, and 6 layers release stage 6; release clears Flyflower.",
                "2-3 layers - Broken Bud: range 1, +25 hit chance, 200% weapon damage, 200% armor damage, +20% armor penetration, applies Dazed.",
                "4-5 layers - Moon Crossing: range 99, +30 hit chance, 230% weapon damage, 200% armor damage, +25% armor penetration, kill restores 3 AP.",
                "6 layers - Flower Burial: range 99, hits the primary target and four forward tiles, +20 hit chance, 165% weapon damage, 165% armor damage, +15% armor penetration, applies Staggered."
              ]
            },
            "zh": {
              "name": "花影三绝",
              "description": "释放当前飞花阶段。第 2 阶段为近距单体斩，第 4 阶段为远距剑气，第 6 阶段攻击主目标与目标前方四格。",
              "tooltip": [
                "消耗 0 AP 和 0 疲劳。2-3 层释放第二阶段，4-5 层释放第四阶段，6 层释放第六阶段；释放后清空飞花。",
                "2-3 层 - 断蕊：范围 1，命中 +25，200% 武器伤害，200% 护甲伤害，+20% 无视护甲，施加茫然。",
                "4-5 层 - 月渡：范围 99，命中 +30，230% 武器伤害，200% 护甲伤害，+25% 无视护甲，击杀回复 3 AP。",
                "6 层 - 葬花：范围 99，攻击主目标与目标前方四格，命中 +20，165% 武器伤害，165% 护甲伤害，+15% 无视护甲，施加踉跄。"
              ]
            }
          }
        },
        {
          "key": "scarlet_shadow_fading_blossom",
          "icon": "scarlet_shadow_fading_blossom",
          "image": "assets/skills/scarlet_shadow_fading_blossom.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "No-Light Flyflower",
              "description": "Scarlet Shadow pours every remaining action into one decisive cut, then forces Flyflower to the sixth stage for an immediate Flower Burial follow-up.",
              "tooltip": [
                "Requires at least 4 AP. Consumes all current AP and 25 Fatigue.",
                "+35 hit chance, 260% weapon damage, 240% armor damage, +30% armor penetration."
              ]
            },
            "zh": {
              "name": "无明飞花",
              "description": "暗影红莲将剩余行动尽数压入一记决绝斩击，并将飞花强行推进到第 6 阶段，用于衔接「葬花」。",
              "tooltip": [
                "至少需要 4 AP。消耗当前全部 AP 和 25 疲劳。",
                "命中 +35，260% 武器伤害，240% 护甲伤害，+30% 无视护甲。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Scarlet Shadow",
          "backgroundName": "Scarlet Shadow",
          "backgroundDescription": "A pale swordswoman in a white-and-crimson kimono, Scarlet Shadow counts each cut as a falling petal. Her sword art blooms at the second, fourth, and sixth strokes.",
          "traitName": "Rose-Shadow Sword Heart",
          "traitDescription": "Scarlet Shadow fights by collecting Flyflower layers through ordinary melee attacks, then spending the second, fourth, or sixth stage on a free sword art.",
          "traitTooltip": [
            "Melee Skill +10, Melee Defense +5, Initiative +20, Fatigue +10."
          ]
        },
        "zh": {
          "name": "暗影红莲",
          "backgroundName": "暗影红莲",
          "backgroundDescription": "身着白红和服的苍白剑士。暗影红莲将每一次斩击都数作落花，第二、第四与第六瓣花落时，她的剑术才真正绽放。",
          "traitName": "恋花剑心",
          "traitDescription": "暗影红莲通过普通近战攻击积攒飞花层数，并在第二、第四或第六阶段释放免费的剑技。",
          "traitTooltip": [
            "近战技能 +10，近战防御 +5，主动值 +20，疲劳值 +10。"
          ]
        }
      }
    },
    {
      "id": "texas_omertosa",
      "order": 38,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "melee_mobile",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 90,
        "Bravery": 55,
        "Stamina": 135,
        "MeleeSkill": 70,
        "RangedSkill": 40,
        "MeleeDefense": 18,
        "RangedDefense": 15,
        "Initiative": 140
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 3,
        "RangedSkill": 0,
        "MeleeDefense": 3,
        "RangedDefense": 1,
        "Initiative": 3
      },
      "traitBonuses": {
        "MeleeSkill": 15,
        "MeleeDefense": 10,
        "Initiative": 25,
        "ActionPoints": 1
      },
      "images": {
        "card": "assets/valkyries/texas_omertosa_card.png",
        "skin": "assets/valkyries/texas_omertosa_skin_preview.png",
        "trait": "assets/traits/texas_omertosa_trait_icon.png"
      },
      "skins": [
        {
          "id": "texas_omertosa_skin",
          "images": {
            "portrait": "assets/valkyries/texas_omertosa_card.png",
            "preview": "assets/valkyries/texas_omertosa_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Texas the Omertosa: Extermination",
              "description": "Texas the Omertosa in black-and-white tactical dress, wielding twin blades through cobalt sword rain."
            },
            "zh": {
              "name": "缄默德克萨斯：斩灭",
              "description": "身披黑白战术长衣、手执双剑，以钴蓝剑雨完成处决的缄默德克萨斯。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "texas_omertosa_tradition",
          "icon": "texas_omertosa_tradition",
          "image": "assets/skills/texas_omertosa_tradition.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "DamageReductionMult": 0.75,
            "ModeDamageMult": 1.2,
            "Duration": 2,
            "CutInCooldownTurns": 2,
            "FirstKillOnce": true
          },
          "text": {
            "en": {
              "name": "Texas Tradition",
              "description": "An execution loop built around rapid redeployment. A cut-in sustains two turns of sword rain, while her first personal kill fully restores her and makes the active rain fall again.",
              "tooltip": [
                "Cut-in begins ready. Either unique active consumes it to teleport beside a target within 5 tiles, ignoring zones of control and attacks of opportunity; it remains unavailable for the next two complete personal turns.",
                "Downpour or Sword Rain lasts through the current and next personal turn. During it, all direct weapon attacks deal 20% more regular and armor damage.",
                "Until her first personal kill, incoming Hitpoint and armor damage is reduced by 25%.",
                "First personal kill each battle: fully restore Hitpoints. If a rain mode remains active, replay its entry effect for free after the current action, refresh it to two turns, and restart cut-in recovery; otherwise cut-in becomes ready immediately. Does not repair armor or resurrect."
              ]
            },
            "zh": {
              "name": "德克萨斯传统",
              "description": "以快速再部署为核心的处决循环。切入后维持两回合剑雨状态；首次亲手击杀会完全恢复生命并让当前剑雨重新降临。",
              "tooltip": [
                "开战时切入就绪。任一专属主动技能会消耗切入，瞬移至 5 格内目标身旁，忽略控制区与借机攻击；此后两个完整自身回合不可再次切入。",
                "阵雨或剑雨状态持续当前回合与下一个自身回合；期间所有直接武器攻击的常规伤害与护甲伤害提高 20%。",
                "首次亲手击杀前，受到的生命与护甲伤害降低 25%。",
                "每场战斗首次亲手击杀：生命完全恢复。若剑雨状态仍在，当前行动结算后免费重演该技能入场效果、刷新至两回合并重启切入充能；否则立刻令切入就绪。不会修复护甲或复活。"
              ]
            }
          }
        },
        {
          "key": "texas_omertosa_unrelenting_downpour",
          "icon": "texas_omertosa_unrelenting_downpour",
          "image": "assets/skills/texas_omertosa_unrelenting_downpour.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "MinRange": 1,
            "MaxRange": 5,
            "EntryWeaponDamageMult": 1.2,
            "EntryArmorDamageMult": 1.5,
            "EntryDirectDamageAdd": 0.3,
            "EntryHitChance": 25,
            "FollowupCount": 3,
            "FollowupWeaponDamageMult": 0.6,
            "FollowupHitChance": 20
          },
          "text": {
            "en": {
              "name": "Unrelenting Downpour",
              "description": "Cut in beside the target, sweep nearby enemies with high-penetration twin blades, then chain execution slashes after subsequent attacks.",
              "tooltip": [
                "Range 1–5. Teleport to the nearest legal empty tile adjacent to the target; remain in place if already adjacent.",
                "On entry, attack every enemy within 1 tile: +25 chance to hit, 120% weapon damage, 150% armor damage, and +30 armor penetration points.",
                "Survivors gain Rain Erosion for 2 turns. Texas gains another +30 armor penetration points against them.",
                "For two turns, the next 3 active melee weapon attacks are followed by a free strike against the original target: +20 chance to hit, 60% weapon damage, and 100% armor damage."
              ]
            },
            "zh": {
              "name": "阵雨连绵",
              "description": "切入目标身旁，以高穿透双剑横扫近邻，并在接下来的攻击后连续追加处决斩击。",
              "tooltip": [
                "射程 1 至 5 格；传送到目标相邻的最近合法空格。若已经相邻则留在原地。",
                "入场时攻击自身周围 1 格内所有敌人：命中 +25，造成 120% 武器伤害、150% 护甲伤害，额外增加 30 点护甲穿透。",
                "幸存目标获得 2 回合雨蚀；德克萨斯攻击该目标时额外增加 30 点护甲穿透。",
                "两回合内，接下来 3 次主动近战武器攻击结算后，对原目标免费追击：命中 +20，造成 60% 武器伤害与 100% 护甲伤害。"
              ]
            }
          }
        },
        {
          "key": "texas_omertosa_torrential_sword_rain",
          "icon": "texas_omertosa_torrential_sword_rain",
          "image": "assets/skills/texas_omertosa_torrential_sword_rain.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 25,
            "MinRange": 1,
            "MaxRange": 5,
            "EntryStrikeCount": 2,
            "WeaponDamageMult": 0.7,
            "ArmorDamageMult": 1,
            "DirectDamageAdd": 0.2,
            "HitChance": 30,
            "EndTurnTargets": 3,
            "EndTurnRange": 4
          },
          "text": {
            "en": {
              "name": "Torrential Sword Rain",
              "description": "Cut into the enemy formation and suppress nearby foes with two waves of blades, then automatically hunt high-priority enemies at each turn's end.",
              "tooltip": [
                "Range 1–5. Teleport to the nearest legal empty tile adjacent to the target; remain in place if already adjacent.",
                "On entry, attack each enemy within 1 tile twice. Each strike gains +30 chance to hit, deals 70% weapon damage and 100% armor damage, with +20 armor penetration points.",
                "If either strike hits, stun for 1 turn; stun-immune targets are Dazed instead.",
                "For two turns, automatically attack up to 3 different enemies within 4 tiles at each personal turn's end, prioritizing unacted enemies with higher Initiative. Each gains +30 chance to hit, deals 70% weapon damage with +20 penetration points, and inflicts Dazed."
              ]
            },
            "zh": {
              "name": "剑雨滂沱",
              "description": "切入敌阵，以两轮剑雨压制近邻；随后在每个回合结束时自动追猎尚未行动的高威胁目标。",
              "tooltip": [
                "射程 1 至 5 格；传送到目标相邻的最近合法空格。若已经相邻则留在原地。",
                "入场时对自身周围 1 格内每名敌人连续攻击 2 次；每次命中 +30，造成 70% 武器伤害、100% 护甲伤害，额外增加 20 点护甲穿透。",
                "任意一击命中后眩晕 1 回合；免疫眩晕的目标改为恍惚。",
                "两回合内，每个自身回合结束时自动攻击 4 格内至多 3 名不同敌人，优先尚未行动且主动值更高者；命中 +30，造成 70% 武器伤害与 20 点额外穿透，并施加恍惚。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Texas the Omertosa",
          "backgroundName": "Valkyrie Texas the Omertosa",
          "backgroundDescription": "A silent executor from the wolf packs of Siracusa. Her twin blades cut through disorder as she appears at the enemy formation's fatal point; the first foe to fall awakens the Texas tradition and calls down a sword rain that should already have ended.",
          "traitName": "Silent Executor",
          "traitDescription": "Texas enters the enemy formation with a wolf's composure and an executor's speed. Her unique active skills require a melee weapon.",
          "traitTooltip": [
            "+1 maximum Action Point, +15 Melee Skill, +10 Melee Defense, and +25 Initiative. Unique active skills require a melee weapon."
          ]
        },
        "zh": {
          "name": "缄默德克萨斯",
          "backgroundName": "女武神缄默德克萨斯",
          "backgroundDescription": "来自叙拉古狼群的沉默处决者。她以双剑切开混乱，在敌阵最致命的位置骤然现身；第一名倒下的敌人会唤醒德克萨斯传统，让本已结束的剑雨再度降临。",
          "traitName": "缄默处决者",
          "traitDescription": "德克萨斯以狼群的冷静和处决者的速度切入敌阵，必须装备近战武器才能发动专属主动技能。",
          "traitTooltip": [
            "最大行动点 +1，近战技能 +15，近战防御 +10，主动值 +25。专属主动技能需要近战武器。"
          ]
        }
      }
    },
    {
      "id": "sparxie",
      "order": 39,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "classic",
      "baseAttributes": {
        "Hitpoints": 85,
        "Bravery": 55,
        "Stamina": 135,
        "MeleeSkill": 55,
        "RangedSkill": 70,
        "MeleeDefense": 12,
        "RangedDefense": 22,
        "Initiative": 135
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 1,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 3
      },
      "traitBonuses": {
        "ActionPoints": 3,
        "RangedSkill": 15,
        "Initiative": 20,
        "Bravery": 10
      },
      "images": {
        "card": "assets/valkyries/sparxie_card.png",
        "skin": "assets/valkyries/sparxie_skin_preview.png",
        "trait": "assets/traits/sparxie_trait_icon.png"
      },
      "skins": [
        {
          "id": "sparxie_skin",
          "images": {
            "portrait": "assets/valkyries/sparxie_card.png",
            "preview": "assets/valkyries/sparxie_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "Sparkle",
              "description": ""
            },
            "zh": {
              "name": "火花",
              "description": ""
            }
          }
        }
      ],
      "skills": [
        {
          "key": "sparxie_backstage_trick",
          "icon": "sparxie_backstage_trick",
          "image": "assets/skills/sparxie_backstage_trick.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxSmile": 6,
            "TeamDamagePerSmile": 0.02,
            "ExclusiveDamagePerSmile": 0.04,
            "GuestGiftCount": 3,
            "GiftWeaponDamageMult": 0.3,
            "GiftArmorDamageMult": 1
          },
          "text": {
            "en": {
              "name": "Backstage Sleight",
              "description": "When a player-roster unit actively hits the Live Guest, Sparkle sends one gift after that action fully resolves and gains Smile. Smile increases direct weapon attack damage for the roster and further empowers Sparkle's signature attacks.",
              "tooltip": [
                "A Live Guest can receive up to 3 gifts per broadcast. One attack action can trigger only once, regardless of hit count.",
                "Each Smile increases eligible direct weapon attack damage for player-roster units by 2%, up to 12%.",
                "Sparkle's Connection, Audience Gift, and Carnival attacks gain a total of 4% per Smile and do not also receive the roster bonus.",
                "%; Sparkle signature attacks +",
                "Smile is capped at 6. Carnival of Me, Keep the Camera Rolling consumes all Smile after resolution."
              ]
            },
            "zh": {
              "name": "幕后花手",
              "description": "玩家名册中的单位主动命中直播嘉宾后，火花在行动完整结算时送出一次礼物并获得笑点。笑点提高全队直接武器攻击伤害，也会进一步强化火花的专属攻击。",
              "tooltip": [
                "直播嘉宾每次直播最多送出 3 份礼物；同一个攻击行动无论命中多少次都只触发一次。",
                "每点笑点使玩家名册单位的合格直接武器攻击伤害提高 2%，最多 12%。",
                "火花的连线攻击、观众礼物和狂欢攻击每点笑点总计提高 4%，不会重复叠加团队加成。",
                "%；火花专属攻击 +",
                "笑点上限为 6；「万我狂欢，镜头不要停」结算后消耗全部笑点。"
              ]
            }
          }
        },
        {
          "key": "sparxie_live_connection",
          "icon": "sparxie_live_connection",
          "image": "assets/skills/sparxie_live_connection.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 15,
            "MinRange": 2,
            "MaxRange": 6,
            "HitChance": 20,
            "WeaponDamageMult": 1,
            "ArmorDamageMult": 1
          },
          "text": {
            "en": {
              "name": "Scream! Sparkle Is Live",
              "description": "Open a live connection with one enemy. After the attack fully resolves, a surviving target becomes the Live Guest.",
              "tooltip": [
                "Requires a ranged weapon. Attacks at 2–6 tiles for 100% weapon damage, 100% armor damage, and +20 chance to hit.",
                "A surviving target becomes the Live Guest for the current round and the following full round, with up to 3 Audience Gifts.",
                "Only active direct weapon hits by player-roster units trigger a gift, at most once per action.",
                "Requires a ranged weapon."
              ]
            },
            "zh": {
              "name": "尖叫！火花花连线中",
              "description": "向一名敌人发起直播连线。攻击完整结算后，若目标仍存活，则将其设为直播嘉宾。",
              "tooltip": [
                "需要远程武器；攻击 2–6 格内目标，造成 100% 武器伤害、100% 护甲伤害并获得 +20 命中。",
                "目标存活时成为直播嘉宾，持续当前回合和随后一个完整回合，最多触发 3 份观众礼物。",
                "只有玩家名册单位主动直接武器攻击命中嘉宾才会触发；每个行动最多一次。",
                "需要装备远程武器。"
              ]
            }
          }
        },
        {
          "key": "sparxie_carnival_live",
          "icon": "sparxie_carnival_live",
          "image": "assets/skills/sparxie_carnival_live.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 30,
            "Radius": 6,
            "HitChance": 30,
            "WeaponDamageMult": 0.8,
            "ArmorDamageMult": 1.25,
            "FollowupWeaponDamageMult": 0.25,
            "FollowupArmorDamageMult": 0.5
          },
          "text": {
            "en": {
              "name": "Carnival of Me, Keep the Camera Rolling",
              "description": "Sweep the camera across the battlefield, attacking every visible nearby enemy with a ranged weapon before launching random follow-ups based on Smile at cast time.",
              "tooltip": [
                "Attacks every visible enemy within 6 tiles for 80% weapon damage and 125% armor damage.",
                "The base area attacks gain +30 chance to hit and roll independently for each target.",
                "Each Smile at cast time adds one auto-hit random strike for 25% weapon damage and 50% armor damage. Every strike rebuilds the list of living targets.",
                "Usable once per battle. Once formally started, it consumes all Smile. Carnival attacks cannot trigger Audience Gifts.",
                "Requires a ranged weapon."
              ]
            },
            "zh": {
              "name": "万我狂欢，镜头不要停",
              "description": "让镜头扫过整片战场，以远程武器攻击附近所有可见敌人，并按施放时的笑点发动随机追击。",
              "tooltip": [
                "攻击 6 格内全部可见敌人，每个目标受到 80% 武器伤害和 125% 护甲伤害。",
                "基础范围攻击获得 +30 命中，每个目标独立判定。",
                "施放时每点笑点追加 1 次自动命中的随机攻击：25% 武器伤害、50% 护甲伤害；每一击都会重新选择仍然存活的敌人。",
                "每场战斗限用一次。技能正式发动后会消耗全部笑点，狂欢攻击不会触发观众礼物。",
                "需要装备远程武器。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Sparkle",
          "backgroundName": "Masked Fool: Sparkle",
          "backgroundDescription": "A Masked Fool from beyond this tavern world. She treats every mercenary clash as a carefully staged broadcast, and as long as the audience keeps screaming, she can keep the absurd script rolling.",
          "traitName": "Kaleidoscope Persona",
          "traitDescription": "Sparkle changes expressions, identities, and stage rhythm at will, leaving her enemies unable to predict the next scene behind the camera.",
          "traitTooltip": [
            "+3 maximum Action Points, +15 Ranged Skill, +20 Initiative, and +10 Resolve."
          ]
        },
        "zh": {
          "name": "火花",
          "backgroundName": "假面愚者：火花",
          "backgroundDescription": "来自酒馆世界之外的假面愚者。她把佣兵团的每一场厮杀都当作精心编排的直播，只要观众还在尖叫，她就能让荒唐的剧本继续上演。",
          "traitName": "人设万花筒",
          "traitDescription": "火花随时切换表情、身份与舞台节奏，让敌人永远猜不到镜头后的下一幕。",
          "traitTooltip": [
            "最大行动点 +3，远程技能 +15，主动值 +20，决心 +10。"
          ]
        }
      }
    },
    {
      "id": "the_herta",
      "order": 40,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_damage",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 85,
        "Bravery": 65,
        "Stamina": 125,
        "MeleeSkill": 45,
        "RangedSkill": 75,
        "MeleeDefense": 8,
        "RangedDefense": 22,
        "Initiative": 135
      },
      "talents": {
        "Hitpoints": 1,
        "Bravery": 2,
        "Stamina": 2,
        "MeleeSkill": 0,
        "RangedSkill": 3,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 3
      },
      "traitBonuses": {
        "RangedSkill": 20,
        "Initiative": 30,
        "Stamina": 15,
        "Vision": 1
      },
      "images": {
        "card": "assets/valkyries/the_herta_card.png",
        "skin": "assets/valkyries/the_herta_skin_preview.png",
        "trait": "assets/traits/the_herta_trait_icon.png"
      },
      "skins": [
        {
          "id": "the_herta_skin",
          "images": {
            "portrait": "assets/valkyries/the_herta_card.png",
            "preview": "assets/valkyries/the_herta_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "The Herta: Original",
              "description": "Her elegant original design: violet-black witch attire, broad hat, and the unmistakable poise of the Genius Society."
            },
            "zh": {
              "name": "大黑塔·原典",
              "description": "紫黑魔女礼装、宽檐礼帽与天才俱乐部的优雅原型。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "the_herta_optimal_solution",
          "icon": "the_herta_optimal_solution",
          "image": "assets/skills/the_herta_optimal_solution.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxInspiration": 4,
            "StartingInspiration": 2
          },
          "text": {
            "en": {
              "name": "Optimal Solution",
              "description": "The Herta compresses the battlefield into an equation she may revise at leisure. At 4 Inspiration, the answer is ready.",
              "tooltip": [
                "Starts each battle with 2 Inspiration, maximum 4. Gain 1 when the first ordinary weapon attack each turn hits; False Premise always grants 2.",
                "Her special damaging attacks choose the currently less-armored body part (Body on a tie) and roll weapon damage twice, keeping the higher roll."
              ]
            },
            "zh": {
              "name": "最优解",
              "description": "大黑塔把战场压缩成可以随手改写的算式。灵感达到4点后，她便能给出早已写好的答案。",
              "tooltip": [
                "每场战斗以2点灵感开始，上限4点。每回合第一次普通武器攻击命中时获得1点；演算·错误前提固定获得2点。",
                "大黑塔的特殊伤害攻击自动打击当前护甲更低的部位（相同则身体），武器伤害掷两次并取较高值。"
              ]
            }
          }
        },
        {
          "key": "the_herta_false_premise",
          "icon": "the_herta_false_premise",
          "image": "assets/skills/the_herta_false_premise.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "MinRange": 1,
            "MaxRange": 6,
            "Radius": 1,
            "InspirationGain": 2,
            "InitiativePenalty": 30,
            "ActionPointPenalty": 2
          },
          "text": {
            "en": {
              "name": "Calculation: False Premise",
              "description": "Insert a false premise into the enemy's action model and contaminate the conclusion of their next turn.",
              "tooltip": [
                "Range 1–6. The target and enemies within 1 tile lose 30 Initiative and 2 maximum Action Points for their next action, to a minimum of 6; current Action Points are reduced immediately.",
                "Makes no hit roll and deals no damage. Gain 2 Inspiration after use. Once per own turn."
              ]
            },
            "zh": {
              "name": "演算·错误前提",
              "description": "向敌人的行动模型中植入一个足以污染整轮推理的错误前提。",
              "tooltip": [
                "射程1至6格。目标及周围1格敌人的主动值降低30，下一次行动的最大行动点降低2（最低6）；立即扣减当前行动点。效果在完成下一次行动后移除。",
                "命中检定与伤害均不会发生；使用后获得2点灵感。每个自己的回合限用一次。"
              ]
            }
          }
        },
        {
          "key": "the_herta_answer_written",
          "icon": "the_herta_answer_written",
          "image": "assets/skills/the_herta_answer_written.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 5,
            "FatigueCost": 30,
            "MinRange": 1,
            "MaxRange": 7,
            "Radius": 2,
            "InspirationCost": 4,
            "MainHitChance": 35,
            "MainWeaponDamageMult": 1.8,
            "MainArmorDamageMult": 2,
            "MainDirectDamageAdd": 0.3,
            "MainFixedHP": 40,
            "AreaHitChance": 25,
            "AreaWeaponDamageMult": 1.3,
            "AreaArmorDamageMult": 1.5,
            "AreaDirectDamageAdd": 0.15,
            "AreaFixedHP": 15
          },
          "text": {
            "en": {
              "name": "Proof: The Answer Was Written",
              "description": "The answer was never waiting at the end of battle. The Herta merely lets everyone else see it later.",
              "tooltip": [
                "Spend 4 Inspiration, range 1–7. Main target: +35 to hit, 180% weapon damage, 200% armor damage, +30 penetration points; on a surviving hit, deal 40 fixed Hitpoint damage.",
                "All enemies within 2 tiles: +25 to hit, 130% weapon damage, 150% armor damage, +15 penetration points; on a surviving hit, deal 15 fixed Hitpoint damage. Ignores distance and shields; never harms allies.",
                "Each target independently selects its less-armored body part and rolls weapon damage twice, keeping the higher result. Inspiration is cleared after all targets resolve, even if every attack misses."
              ]
            },
            "zh": {
              "name": "证明·答案早已写好",
              "description": "答案从来不在战场的终点。大黑塔只是允许所有人晚一点看见它。",
              "tooltip": [
                "消耗4点灵感，射程1至7格。主目标：命中+35，180%武器伤害、200%护甲伤害、+30点穿甲；命中且存活后额外失去40生命。",
                "目标周围2格所有敌人：命中+25，130%武器伤害、150%护甲伤害、+15点穿甲；命中且存活后额外失去15生命。无视距离惩罚、盾牌，不伤盟友。",
                "每个目标独立选择护甲更低的部位，武器伤害掷两次取高。所有目标结算后清空灵感；即使全部未命中也会消耗。"
              ]
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "The Herta",
          "backgroundName": "Genius Before Nous",
          "backgroundDescription": "Member 83 of the Genius Society: human, female, young, beautiful, and adorable. She does not chase answers; answers are merely annotations left behind by her calculations.",
          "traitName": "Genius Society No. 83",
          "traitDescription": "The Herta thinks fast enough to move before the battlefield. Gains +20 Ranged Skill, +30 Initiative, +15 Fatigue, and +1 Vision.",
          "traitTooltip": [
            "+20 Ranged Skill, +30 Initiative, +15 Fatigue, and +1 Vision."
          ]
        },
        "zh": {
          "name": "大黑塔",
          "backgroundName": "博识尊前的天才",
          "backgroundDescription": "天才俱乐部第83席，人类、女性、年轻、漂亮、可爱。她并不追逐答案——答案只是她演算过程里顺手留下的注脚。",
          "traitName": "天才俱乐部第83席",
          "traitDescription": "大黑塔以压倒性的思考速度先于战场行动。远程技能提高20，主动值提高30，疲劳上限提高15，视野提高1。",
          "traitTooltip": [
            "远程技能 +20，主动值 +30，疲劳上限 +15，视野 +1。"
          ]
        }
      }
    },
    {
      "id": "lily",
      "order": 41,
      "level": 1,
      "dailyWage": 1,
      "legendsPerkProfile": "ranged_support",
      "detailLayout": "fullscreen_v1",
      "baseAttributes": {
        "Hitpoints": 78,
        "Bravery": 75,
        "Stamina": 120,
        "MeleeSkill": 70,
        "RangedSkill": 70,
        "MeleeDefense": 12,
        "RangedDefense": 18,
        "Initiative": 125
      },
      "talents": {
        "Hitpoints": 2,
        "Bravery": 3,
        "Stamina": 2,
        "MeleeSkill": 2,
        "RangedSkill": 2,
        "MeleeDefense": 1,
        "RangedDefense": 2,
        "Initiative": 2
      },
      "traitBonuses": {
        "Bravery": 20,
        "Stamina": 10,
        "RangedDefense": 10
      },
      "images": {
        "card": "assets/valkyries/lily_card.png",
        "skin": "assets/valkyries/lily_skin_preview.png",
        "trait": "assets/traits/lily_trait_icon.png"
      },
      "skins": [
        {
          "id": "lily_skin",
          "images": {
            "portrait": "assets/valkyries/lily_card.png",
            "preview": "assets/valkyries/lily_skin_preview.png"
          },
          "text": {
            "en": {
              "name": "White Priestess Lily",
              "description": "Lily's white ceremonial dress, teal amulet, and lily ornaments."
            },
            "zh": {
              "name": "白巫女莉莉",
              "description": "纯白礼裙、青绿护符与百合花饰构成的白巫女原貌。"
            }
          }
        }
      ],
      "skills": [
        {
          "key": "lily_blight_controller",
          "icon": "lily_blight_controller",
          "image": "assets/skills/lily_blight_controller.png",
          "kind": "passive",
          "lifetime": "persistent",
          "spec": {
            "MaxBlight": 6,
            "BlightedTurns": 3
          },
          "text": {
            "en": {
              "name": "The Cost of Purification",
              "description": "Spirit attacks, control, purified deaths, and effective prayer build Blight. At 3 Lily may accept it; at 6 she transforms automatically and recovers 3 AP. The Blighted form lasts three of Lily's turns before Final Purification.",
              "tooltip": [
                "Current Blight: ",
                "Spirit Power is 60–80 and gains 2 at each level from 2 through 11."
              ]
            },
            "zh": {
              "name": "净化的代价",
              "description": "灵魂攻击、控制、净化死亡与有效祈祷积累污秽。3点后可接纳污秽，6点时自动变身并返还3行动点。污秽形态持续莉莉的3个回合，随后必须完成最终净化。",
              "tooltip": [
                "当前污秽：",
                "灵魂之力为60–80，并在2至11级每级提高2点。"
              ]
            }
          }
        },
        {
          "key": "lily_prayer",
          "icon": "lily_prayer",
          "image": "assets/skills/lily_prayer.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "ActionPointCost": 4,
            "FatigueCost": 20,
            "Radius": 2,
            "Uses": 3
          },
          "text": {
            "en": {
              "name": "Lily's Prayer",
              "description": "Heals all allies within 2 tiles for 15 plus 15% maximum HP and removes bleeding and poison. Three uses per battle; healing is 25% stronger while Blighted.",
              "tooltip": [
                "The first effective prayer each turn grants 1 Blight."
              ]
            },
            "zh": {
              "name": "莉莉的祈祷",
              "description": "治疗2格内所有友军15点加其最大生命的15%，移除流血与中毒。每场3次；污秽形态下治疗量提高25%。",
              "tooltip": [
                "有效治疗会在本回合首次触发时获得1点污秽。"
              ]
            }
          }
        },
        {
          "key": "lily_accept_blight",
          "icon": "lily_accept_blight",
          "image": "assets/skills/lily_accept_blight.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {},
          "text": {
            "en": {
              "name": "Accept the Blight",
              "description": "At 3 Blight, freely enter Blighted form for three own turns: +15 accuracy, +30% final damage, and +20% armor penetration. Once per battle.",
              "tooltip": []
            },
            "zh": {
              "name": "接纳污秽",
              "description": "污秽达到3点后，免费进入持续3个自身回合的污秽形态：命中+15，最终伤害+30%，穿甲+20%。每场只能变身一次。",
              "tooltip": []
            }
          }
        },
        {
          "key": "lily_final_purification",
          "icon": "lily_final_purification",
          "image": "assets/skills/lily_final_purification.png",
          "kind": "active",
          "lifetime": "persistent",
          "spec": {
            "Radius": 2
          },
          "text": {
            "en": {
              "name": "Final Purification",
              "description": "Enemies within 2 tiles take 100% Spirit Power, 200% armor damage, 50% penetration, and Stagger. Allies heal 15% maximum HP, Lily 25%, and lose bleeding and poison. Lily then returns to normal.",
              "tooltip": []
            },
            "zh": {
              "name": "最终净化",
              "description": "对2格内敌人造成100%灵魂之力伤害、200%破甲与50%穿甲并施加踉跄；友军恢复15%最大生命，莉莉恢复25%，并移除流血与中毒。随后恢复白巫女形态。",
              "tooltip": []
            }
          }
        }
      ],
      "text": {
        "en": {
          "name": "Lily",
          "backgroundName": "White Priestess",
          "backgroundDescription": "The last White Priestess of Land's End. She bears the Blight through prayer while twenty-six purified spirits wield their strength in her stead.",
          "traitName": "Ender Lily",
          "traitDescription": "Lily cannot equip main-hand or off-hand weapons and never makes ordinary unarmed attacks. Six equipped spirits fight with Spirit Power that grows with her level, and accumulated Blight can awaken her briefly.",
          "traitTooltip": [
            "+20 Resolve, +10 Fatigue, +10 Ranged Defense. Hands are locked; damage comes from Spirit Power."
          ]
        },
        "zh": {
          "name": "莉莉",
          "backgroundName": "白巫女",
          "backgroundDescription": "边陲之国最后的白巫女。她以祈祷承受亡者的污秽，让二十六位得到净化的灵魂代替自己挥剑。",
          "traitName": "终焉的百合花",
          "traitDescription": "莉莉不能装备主手或副手武器，也不进行普通徒手攻击。她以随等级成长的灵魂之力驱使六个已装填灵魂，并可在污秽中短暂觉醒。",
          "traitTooltip": [
            "意志+20，疲劳值+10，远程防御+10。主副手锁定，伤害来自灵魂之力。"
          ]
        }
      }
    }
  ]
};
