---
title: "Pull Request #89"
description: "Adding ObjectInitializer default value for all gameplay actors"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_89
  title: "6.1.0 - PR #89"
  excerpt: "Adding ObjectInitializer default value for all gameplay actors"
layout: layouts/markdown
---

*[on June 25th, 2024](https://github.com/GASCompanion/GASCompanion-Plugin/pull/89)*

## Adding ObjectInitializer default value for all gameplay actors

to all modular gameplay actors constructor

This is mostly to avoid compilation issues on subclasses in projects when using constructor without FObjectInitializer.

