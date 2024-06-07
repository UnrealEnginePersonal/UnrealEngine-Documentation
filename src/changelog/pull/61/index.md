---
title: "Pull Request #61"
description: "Fix InitializationData RequiredAssetDataTags for 5.1"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_61
  title: "5.3.2 - PR #61"
  excerpt: "Fix InitializationData RequiredAssetDataTags for 5.1"
layout: layouts/markdown
---

*[on November 27th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/61)*

## Fix InitializationData RequiredAssetDataTags for 5.1

This was preventing selection of a new datatable for attributes initialization.

RequiredAssetDataTags metadata specifier needs to use the long form script name in 5.1, eg.

![image](https://user-images.githubusercontent.com/113832/204157316-669eabff-d142-4a8a-8e9d-784466ece0fe.png)

Also added the filter in GameFeature action (was not an issue, but wasn't filtering datatables on AttributeMetaData row structure)

#### 5.3.2 (2022-11-27)

##### Continuous Integration

*   Release, disable matrix strategy ([dedc5b9e](https://github.com/GASCompanion/GASCompanion-Plugin/commit/dedc5b9ea3c9b547bc324e4fccc3ea863839361a))

##### New Features

*   Filter initialization Datatable in GameFeature Action to only display AttributeMetaData ([90ccfce7](https://github.com/GASCompanion/GASCompanion-Plugin/commit/90ccfce7bc4fb94381fc80efc9b98237a4e715ab))

##### Bug Fixes

*   Adjust RequiredAssetDataTags Rowstructure for 5.1 ([fc6358be](https://github.com/GASCompanion/GASCompanion-Plugin/commit/fc6358becc83bace9b1c2e01e227e0b7e336c601))

