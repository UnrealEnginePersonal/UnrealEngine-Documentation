---
title: "Pull Request #82"
description: "Ensure enhanced input ability binds are cleared on repossession"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_82
  title: "6.0.2 - PR #82"
  excerpt: "Ensure enhanced input ability binds are cleared on repossession"
layout: layouts/markdown
---

*[on June 7th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/82)*

## Ensure enhanced input ability binds are cleared on repossession

when the input component is released.

This is to fix an issue that might arise with only clients, and in case of repossessing a character. When the input component is released, and bindings are reset, bound actions in `SetupPlayerControls_Implementation` didn't have their handles stored, to be able to properly clear them when input component is released, resulting in multiple invocations of OnAbilityInputPressed.

While the code path with `SetInputBinding()` / `TryBindAbilityInput()` was properly storing the handle and clearing, the code path for `SetupPlayerControls()` was not.

Thanks to [**@Jwkellenberger**](https://github.com/Jwkellenberger) for the report and feedback.

