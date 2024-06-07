---
title: "Pull Request #59"
description: "Rework repository to include GASCompanion (main plugin) and GASCompanionTests"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_59
  title: "5.3.0 - PR #59"
  excerpt: "Rework repository to include GASCompanion (main plugin) and GASCompanionTests"
layout: layouts/markdown
---

*[on August 16th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/59)*

## Rework repository to include GASCompanion (main plugin) and GASCompanionTests

Structural change to the repo structure:

*   `GASCompanion/` - Main plugin distrubuted on the marketplace
*   `GASCompanionTests/` - Plugin that holds unit / functional tests for GASCompanion
*   `Scripts/` - Helper node or bash scripts to help in development

So:

Config -> GASCompanion/Config
Content-> GASCompanion/Content
Resources-> GASCompanion/Resources
Source ->GASCompanion/Source
Templates ->GASCompanion/Templates
GASCompanion.uplugin -> GASCompanion/GASCompanion.uplugin

This is so that this repository can manage multiple plugins from within a single repository. `GASCompanion/` is the main plugin distributed on the marketplace, others are supporting plugin not part of main GASCompanion plugin (such as the Tests plugin, which would include any functional or unit tests that needs fixtures .uasset)

