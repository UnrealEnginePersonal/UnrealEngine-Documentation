---
title: "Pull Request #53"
description: "fix: Make sure parent class of the created BP is the correct one"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_53
  title: "5.2.3 - PR #53"
  excerpt: "fix: Make sure parent class of the created BP is the correct one"
layout: layouts/markdown
---

*[on July 13th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/53)*

## fix: Make sure parent class of the created BP is the correct one

*   [fix: Make sure parent class of the created BP is the correct one](https://github.com/GASCompanion/GASCompanion-Plugin/commit/4dbca5df8baca0af50087619ba24a118383c0caa)
    *   The fix for osx support introduced a regression here.
    *   Init with w/e the item parent class is (can be either an UGameplayAbility or a Template GameplayEffectDefinition). If we're dealing with Template GameplayEffectDefinition, make sure Parent class is set to UGameplayEffect.

*   Setup test spec for GSCCreationMenu
    *   Checking `FGSCMenuItem::CreateBlueprintAction` is creating correct Blueprint, testing for one definition for now. Checks against asset data path, generated class, native parent class, blueprint path.

