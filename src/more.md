---
title: More
description: More
eleventyNavigation:
  parent: Home
  key: More
  order: 7
layout: layouts/markdown_home
---

# {{ title }}

{{ collections.all | eleventyNavigation(eleventyNavigation.key) | eleventyNavigationToMarkdown({ showExcerpt: true }) | safe  }}