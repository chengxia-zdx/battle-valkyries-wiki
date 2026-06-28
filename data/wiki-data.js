window.BV_WIKI_DATA = {
  "meta": {
    "title": "Battle Valkyries Wiki",
    "source": "battle-valkyries mod",
    "contentSource": [
      "src/battle-valkyries/battle-valkyries/config/valkyrie_data.nut",
      "src/battle-valkyries/battle-valkyries/config/valkyrie_skill_data.nut",
      "src/battle-valkyries/battle-valkyries/config/mod_settings.nut",
      "src/battle-valkyries/battle-valkyries/config/skin_data.nut",
      "src/battle-valkyries/battle-valkyries/hooks/valkyrie_summon.nut",
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
        "cost": 5000
      },
      {
        "max": 3,
        "cost": 10000
      },
      {
        "max": 6,
        "cost": 20000
      },
      {
        "max": 10,
        "cost": 30000
      },
      {
        "max": 15,
        "cost": 50000
      },
      {
        "max": 20,
        "cost": 80000
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
      }
    ]
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
          "traitDescription": "Silver Wolf's aether editing increases Melee Skill by 15, Ranged Skill by 15, Initiative by 30, and maximum Action Points by 6, but her own damage is reduced by 50%.",
          "traitTooltip": [
            "Melee Skill +15.",
            "Ranged Skill +15.",
            "Initiative +30 and maximum AP +6.",
            "Damage dealt -50%."
          ]
        },
        "zh": {
          "name": "银狼",
          "backgroundName": "女武神银狼",
          "backgroundDescription": "银狼是星核猎手成员兼天才黑客，把宇宙视为一场可被通关的游戏。她擅长以以太编辑改写现实，性格散漫挑衅，却总能在关键任务中精准执行艾利欧的剧本。",
          "traitName": "银狼特性",
          "traitDescription": "银狼的以太编辑让她的近战技能提高 15，远程技能提高 15，主动值提高 30，最大行动点提高 6，但她自身造成的伤害降低 50%。",
          "traitTooltip": [
            "近战技能 +15。",
            "远程技能 +15。",
            "主动值 +30，最大 AP +6。",
            "自身造成的伤害 -50%。"
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
