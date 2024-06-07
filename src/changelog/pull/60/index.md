---
title: "Pull Request #60"
description: "Fix compilation errors / warnings for 5.1"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_60
  title: "5.3.1 - PR #60"
  excerpt: "Fix compilation errors / warnings for 5.1"
layout: layouts/markdown
---

*[on October 23rd, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/60)*

## Fix compilation errors / warnings for 5.1

Fixed compilation errors / warnings.

Still have to fix tests, specs related to GE creation from context menu and enhanced input are failing.

CI to fix as well (docker image 5.1 for linux)

***

#### 5.3.1 (2022-11-17)

##### Continuous Integration

*   Linux, switch image to dev-slim-5.1 ([5fbea8fd](https://github.com/GASCompanion/GASCompanion-Plugin/commit/5fbea8fdc71587ad9b9e067654dc64c0932f5fed))
*   Release, disable osx / linux build ([e87593c4](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e87593c427a440017141fbfce26fbacc2a7ad6f6))

##### Other Changes

*   Resave functional tests / levels under 5.0.3 ([f10b3a8b](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f10b3a8bc56eeb0bbdb7990c314a473b447b6f19))
*   Fix `Editor.GSCCreationMenu` functional tests ([6b532152](https://github.com/GASCompanion/GASCompanion-Plugin/commit/6b5321520f4ab435624a77e403a200d99122bbe9))
*   Fix `GameFeature` functional tests ([f0c3667c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/f0c3667c22a48a5db1bde6c143e6890522b8d1f1))
*   Fix `Ability Input Binding` spec ([7f973a92](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7f973a92630e68b3ec7e13c502664d629247f1f5))

