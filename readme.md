## GAS Companion Documentation

Using [eleventy](https://www.11ty.dev/) as a static site generator.

### Update documentation changelog

This section describes the internal workflow to adopt when working on a new release, mainly kept as a self reminder.

1. Ensure on `dev` branch
2. Switch to wsl
3. Run `npm run changelog`. Same rules apply regarding changelog-from-release and github token.
4. Run `npm run changelog-pr`. `$GITHUB_TOKEN` should be set as well as environment variable for script to run properly.
5. Check diff, `src/changelog/index.md` should have been updated, and any new PR generated under `src/changelog/pull/`
6. Run `npm run s` to check generated website locally.
7. Commit and push to repo.