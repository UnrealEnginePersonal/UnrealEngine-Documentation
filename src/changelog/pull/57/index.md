---
title: "Pull Request #57"
description: "HUD Lazy ASC init and Addition of OnInitAbilityActorInfo event on ASC & Core Component"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_57
  title: "5.3.0 - PR #57"
  excerpt: "HUD Lazy ASC init and Addition of OnInitAbilityActorInfo event on ASC & Core Component"
layout: layouts/markdown
---

*[on August 9th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/57)*

## HUD Lazy ASC init and Addition of OnInitAbilityActorInfo event on ASC & Core Component

## Description

### HUD Lazy Init

Added a safety net measure in hud for "lazy initialization of ASC". It's now detecting construct is called too early if it wasn't able to get a ref to the ASC, and will check every frame until it can find one. When it does, it's gonna kick in the init logic.

When using ASC on PlayerState, it may happen that `CharacterRestarted` or `BeginPlay` event happen too early, before ASC had a chance to replicate. If HUD is created at that time, widget construct trying to setup the ASC delagates and init the progress bar might fail, resulting in HUD with invalid state.

This result in HUD able to initialize itself whenever the ASC is ready, regardless of when the widget was first constructed. It can result with HUD starting with empty bars but most of the time it's barely noticeable.

### Addition of `OnInitAbilityActorInfo` event for both ASC and Core Component

This event is called just after InitAbilityActorInfo, once abilities and attributes have been granted.

This will happen multiple times for both client / server:

*   Once for Server after component initialization
*   Once for Server after replication of owning actor (Possessed by for Player State)
*   Once for Client after component initialization
*   Once for Client after replication of owning actor (Once more for Player State OnRep\_PlayerState)

Also depends on whether ASC lives on Pawns or Player States.

Could use that event to kick in logic that requires ASC to be fully loaded and available (like setting up HUD)

### Bug Fixes

#### fix: Make sure to register delegates only once for Core Component

Also included a little fix to make sure Core Component delegate are not registered multiple times, by clearing previously registered delegates if `RegisterAbilitySystemDelegates()` is called more than once (likely the case from InitAbilityActorInfo)

Previously, OnAttributeChange and other delegates could be triggered more than once.

#### fix: Fixed FGSCGameplayEffectExecuteData default value for DeltaValue / ClampMinimumValue

This gets rid of log warnings on editor startup

#### fix: Fixed fwd declare in GSCConsoleManagerSubsystem and osx / linux build

## Screenshots

<https://user-images.githubusercontent.com/113832/183726762-ef89ce4f-1629-455e-9b55-cf9f56201173.mp4>

Both ASC and Core Component have a new event:

<img width="561" alt="image" src="https://user-images.githubusercontent.com/113832/183726786-a236fe5c-67b8-40ef-9b85-78221ddc2818.png">

which can be used to kick in logic that requires ASC loaded, like creating the HUD. Could use that event to kick in the HUD init with something like, from Pawn's Core Component:

<img width="1066" alt="image" src="https://user-images.githubusercontent.com/113832/183726806-7da0a8ed-1a49-403a-903a-f4056f31025c.png">

Same from PlayerState:

<img width="1134" alt="image" src="https://user-images.githubusercontent.com/113832/183726873-b2af1523-522f-44b7-ae69-531baca24a7c.png">

