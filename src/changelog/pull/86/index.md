---
title: "Pull Request #86"
description: "Fix ability sets input binding for PlayerState owned ASC in case of respawns or possession switch"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_86
  title: "6.1.0 - PR #86"
  excerpt: "Fix ability sets input binding for PlayerState owned ASC in case of respawns or possession switch"
layout: layouts/markdown
---

*[on June 25th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/86)*

## Fix ability sets input binding for PlayerState owned ASC in case of respawns or possession switch

Forcefully re-grant ability sets in case owner is PlayerState. This is to ensure input binding still works after a respawn, or possession switch.

ASC living on Pawns don't have this problem.

