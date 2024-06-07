---
title: "Pull Request #47"
description: "5.2.1"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_47
  title: "5.2.1 - PR #47"
  excerpt: "5.2.1"
layout: layouts/markdown
---

*[on June 4th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/47)*

## 5.2.1

##### Bug Fixes

*   **Effect Templates:**  Ensure FInheritedTagContainer (containers with Combined Tags) are properly updated when templates are edited ([7e97c2e9](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7e97c2e9e31ba37def17bb334f7f7672f872fde7))

This will make sure GE created from a templates have the Combined Tags container properly initialized.

Also includes slight refactoring to use `UEngine::CopyPropertiesForUnrelatedObjects` instead of manually copy each and every prop.

