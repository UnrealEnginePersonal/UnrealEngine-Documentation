---
title: "Pull Request #56"
description: "Include automated tests in main plugin "
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_56
  title: "5.3.0 - PR #56"
  excerpt: "Include automated tests in main plugin "
layout: layouts/markdown
---

*[on August 6th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/56)*

## Include automated tests in main plugin 

Goal is to have automated tests within the main plugin itself, moving code from separate GASCompanionTests plugin here as an `UncookedOnly` module.

Will have to take care of:

*   [x] Fixture files (Move fixtures into plugin Content/ folder in Before hooks, Remove on TearDown)
    *   No fixture files anymore (for now). Ability Input Binding is creating an InputAction at runtime, not even needed to be present in content browser to test functionality
    *   Functional Tests now managed via `UGASCompanionTestsSettings::bSetupFunctionalTests` (default false). They're gonna be copied from `Resources/AutomationTests/Tests/FunctionalTests` to `Content/Tests/FunctionalTests` on editor startup if `bSetupFunctionalTests` is set to true.
    *   See Resources/AutomationTests/readme.md
*   [x] Native Tags
    *   Only required for functional tests, and only added if `bSetupFunctionalTests` is set to true

`FGASCompanionTestsUtils` is an added class in `GASCompanionTests` module providing a set of test helpers for Setup / Teardowns, or general utility.

Ideally, fixture files would be present but hidden from end-users so as to not clutter project with GAs, GEs, etc. when Show Plugin Content option is enabled.

