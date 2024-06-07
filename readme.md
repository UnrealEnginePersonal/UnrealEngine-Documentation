## GAS Companion Documentation

Using [eleventy](https://www.11ty.dev/) as a static site generator.

### Update documentation changelog

This section describes the internal workflow to adopt when working on a new release, mainly kept as a self reminder.

1. Ensure on `dev` branch
2. Run `npm run changelog`. `GITHUB_TOKEN` environment should be set and matching [a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) with repo scope.
3. Check diff, `src/changelog/index.md` should have been updated, and any new PR generated under `src/changelog/pull/`
4. Run `npm run s` to check generated website locally.
5. Commit and push to repo.