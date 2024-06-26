---
title: "Pull Request #87"
description: "Adding failsafe checks on effect delegates before registering listeners"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_87
  title: "6.1.0 - PR #87"
  excerpt: "Adding failsafe checks on effect delegates before registering listeners"
layout: layouts/markdown
---

*[on June 25th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/87)*

## Adding failsafe checks on effect delegates before registering listeners

Can't be sure ASC OnGameplayEffectStackChangeDelegate() and OnGameplayEffectTimeChangeDelegate() to be always valid.

Crash might happen in scenarios where ASC has been disposed of during respawns or switching possessions.

