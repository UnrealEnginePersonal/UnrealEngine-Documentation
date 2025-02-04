---
title: Melee Base Ability
description: Learn how to use the Melee Base ability with combo capabilities GAS Companion provides
eleventyNavigation:
    parent: Abilities (Doc)
    key: Melee Base Ability
    excerpt: Learn how to use the Melee Base ability with combo capabilities GAS Companion provides
layout: layouts/markdown
---

Introduced in 2.0.0 version of the plugin, `GSCGameplayAbility_MeleeBase` is a GameplayAbility c++ class you can subclass and quickly create melee combo for your characters.

Creating a new melee combo ability requires the following steps:

- Create a new GameplayAbility child blueprint from `GSCGameplayAbility_MeleeBase` and edit parameters
- Grant the ability for the Character(s) you wish to activate it for
- Add the combo notifiers in your animation montages
- Add `GSCComboManager` component to your Pawn Blueprints
- Add `GSCCore` component to your Pawn Blueprints
- Activate the ability in your character blueprint via {{ "GSCComboManagerComponent#ActivateComboAbility" | api }} method on the Combo Manager Component

**Quick demo**

![](combo.gif)

## Create Melee Ability

Right click in the Content Browser, and create a new `Gameplay > Gameplay Ability Blueprint`.

![](new_ga.png)

Choose `GSCGameplayAbility_MeleeBase` as your parent class

![](melee_parent_ga.png)

Alternately, you can use the custom context menu GAS Companion adds with [Gameplay Ability Definitions]({{ "/config/ga-definitions" | url }}).

![](new_ga_contextmenu.png)

Name it with something that suits you, in this example it is going to be `GA_Melee_Example`.

`GSCGameplayAbility_MeleeBase` child blueprint are meant to be data only blueprint, the ActivateAbility implementation is handled by the parent class.

You can then open the blueprint to see the parameters exposed. Since it is a data only blueprint, you can close and reopen it to get the Class Defaults panel maximized.

![](melee_blueprint_window.png)

The parameters you want to tweak are below the "Animations" category at the top.

- Montages: List of animation montages you want to cycle through when activating this ability
- Rate: Change to play the montage faster or slower
- WaitForEventTags: Any gameplay events matching this tag will activate the EventReceived callback and apply the gameplay effect containers for this ability

![](countess_melee_example.png)

## Adding Animation Notifiers to Montages

The combo system relies on two Animation Notifiers:

- `GSCComboWindowNotifyState` Opens the combo window during which players can register the activation of the next part of the combo
- `GSCTriggerComboNotify` This is the point where if you have queued another input, the notify tells it to switch to the next combo
Montage

In Persona, the animation editor with your montage opened, right click within one of your notify track and add a `GSCComboWindowNotifyState` Notify State

![](persona_add_combo_window.png)

Adjust the start and end frame of the notify by dragging the handles around, where you want to allow player to activate and register combo input.

![](persona_combo_window_state.png)

This notify state exposes a single parameter `End Combo` which must be turned on for the last montages of the combo chain. It tells the system to reset the combo component state when the montage ends.

![](combo_window_param.png)

Then you want to place a single `GSCTriggerComboNotify` notify at the exact time you want to trigger the next combo if the player queues an input anywhere within the Combo Window.

![](add_trigger_combo_notify.png)

Make sure that both notifiers overlap, the trigger notify **needs** to be within the Combo Window. The trigger combo won't activate the ability only when the combo window is opened.

The end result should look like

![](trigger_combo_notify.png)

Don't forget to "end" the combo in your last montages by turning on the Combo Window Notify State parameter `End Combo` in the details panel (when the notify state is selected in Persona)

![](persona_end_combo_window.png)

## Activate Combo Ability

We're almost done. The last step is to actually activate the ability from your Character Blueprints.

This must be done via the Combo Manager Component {{ "GSCComboManagerComponent#ActivateComboAbility" | api }} method.

![](activate_combo_ability.png)

You can right click in your Blueprint graph and search for "combo ability"

![](context_menu_activate_combo_ability.png)

## Debug Combo Widget

The combo system comes in with a simple "Debug" widget, similar to the ability queue debug widget.

![](combo.gif)

You can show / hide it with `GASCompanion.Debug.Combo` command

![](debug_widget_command_v3.png)

## Multiplayer

The melee combo ability is working in a networked environment and is resilient to network lag up until something like 200-250 ping.

![](Melee_Combo_Ability_network_test.gif)

