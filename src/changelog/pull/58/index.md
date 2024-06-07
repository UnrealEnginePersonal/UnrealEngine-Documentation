---
title: "Pull Request #58"
description: "Game Feature - Adding Effects and Player State input binding fix"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_58
  title: "5.3.0 - PR #58"
  excerpt: "Game Feature - Adding Effects and Player State input binding fix"
layout: layouts/markdown
---

*[on August 13th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/58)*

## Game Feature - Adding Effects and Player State input binding fix

##### New Features

*   Add ability to grant GameplayEffects from Game Features ([89610a3c](https://github.com/GASCompanion/GASCompanion-Plugin/commit/89610a3c165ae1df712608aa5c3c8412dc60f21e))

##### Bug Fixes

*   Ensure Game Feature Action ability input binding works across respawns for Player State ASC ([7a0e543b](https://github.com/GASCompanion/GASCompanion-Plugin/commit/7a0e543bf74d57a6e4ad5d8adf8a45e7121fad71))

While a game feature is active, it is now possible to respawn actors and have ability activation via bound input still functioning. Previously, it was OK only for ASC on Pawns.

Also includes slight changes to allow Game Feature Action to operate the same for Player State setup, with Actor Target being either the Avatar Actor (GSCModularPlayerStateCharacter) or the Owner Actor (GSCModularPlayerState)

Functional Tests have coverage to check this behavior in standalone / server.

Testing for clients still requires manual testing, but was checked as 👌 for Server / Client with Actor Target being either GSCModularPlayerStateCharacter or GSCModularPlayerState

*   Ensure InputBindingComponent is added to Pawn Avatar in Game Feature Action ([110f2042](https://github.com/GASCompanion/GASCompanion-Plugin/commit/110f2042ffb9c080d9229d4443f848e202c58cd1))

InputBindingComponent / PlayerControlsComponent can only be added to Pawns, and relies on them having a PlayerController.

The Game Feature AddAbilities action was trying to Add a Component Request to PlayerState if the Game Feature Data Asset was using PlayerState as a Target Actor class. This could result in ensure errors in the PlayerControlsComponent  on registration, and a Pawn Checked crash on End Pie.

This fix ensures the component request is made on the Pawn (the Avatar Actor as returned by the ASC if properly initialized via AbilityActorInfo). Also adds a fail safe check in ReleaseInputComponent > GetEnhancedInputSubsystem for PlayerControlsComponent  to ensure it doesn't hard crash anymore.

##### Refactors

*   Add `HasAbility` helper to UGSCGameFeatureAction\_AddAbilities ([66575104](https://github.com/GASCompanion/GASCompanion-Plugin/commit/66575104505373519d5d56ebbf78fe181083041b))
*   Add note on requirement AGSCModularPlayerController for Game Feature AddInputMappingContext action ([e3d783fe](https://github.com/GASCompanion/GASCompanion-Plugin/commit/e3d783fe24ba892b3e0f44961ff579d97263ef79))

