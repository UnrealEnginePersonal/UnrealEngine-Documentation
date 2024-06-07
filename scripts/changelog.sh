
# Insert header
cat <<-EOS > src/changelog/index.md
---
title: Changelog
description: GAS Companion Changelog
eleventyNavigation:
  parent: More
  key: Changelog
layout: layouts/markdown
---

EOS

changelog-from-release -l 2 -r "https://github.com/GASCompanion/GASCompanion-Plugin.git" \
  | sed -r 's/^<!--.+$//g' \
  | sed -r 's/^<a name.+$//g' \
  | sed -r "s/## What's Changed/**What's Changed**/g" \
  | sed -r 's/### Other Changes/\\n*Other Changes*/g' \
  | sed -r 's/### Bug Fixes/\\n*Bug Fixes*/g' \
  | sed -r 's/^\\[Changes\\].+$//g' \
  | sed 's/by \[@mklabs\](https:\/\/github\.com\/mklabs)/ /g' >> src/changelog/index.md

# Insert footer
cat <<-EOS >> src/changelog/index.md

---

Updated on $(date +"%Y-%m-%d")

EOS
