---
title: "Pull Request #90"
description: "Fixed Health, MaxHealth (and stamina / mana) getters, UGSCUserWidget::GetAttributeValue() usage with invalid attribute and comment"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_90
  title: "6.1.0 - PR #90"
  excerpt: "Fixed Health, MaxHealth (and stamina / mana) getters, UGSCUserWidget::GetAttributeValue() usage with invalid attribute and comment"
layout: layouts/markdown
---

*[on June 26th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/90)*

## Fixed Health, MaxHealth (and stamina / mana) getters, UGSCUserWidget::GetAttributeValue() usage with invalid attribute and comment

*   [Fixed GetHealth() / GetMaxHealth() (and stamina / mana) to use current (final) value](https://github.com/GASCompanion/GASCompanion-Plugin/commit/3eb7f32b3267c1981d031448b6c4632865dadbb7)
*   [Fixing a crash with UGSCUserWidget::GetAttributeValue()](https://github.com/GASCompanion/GASCompanion-Plugin/commit/25602364395e080ce13e30914973da74c71ba047)
    *   when called with invalid attribute (None). Also adjusted `UGSCCoreComponent::GetAttributeValue()` to display a log error if called with invalid attribute.
*   [Fix comment of UGSCUserWidget::GetAttributeValue()](https://github.com/GASCompanion/GASCompanion-Plugin/commit/501ea8dfeb96e317f984672247d17e52b882ffed)

Thanks to tranvv on discord for all those feedbacks.

