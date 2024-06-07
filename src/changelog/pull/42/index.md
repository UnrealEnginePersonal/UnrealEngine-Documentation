---
title: "Pull Request #42"
description: "feat(Animations): Add Gameplay Tag Blueprint Property Mapping support…"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_42
  title: "5.2.0 - PR #42"
  excerpt: "feat(Animations): Add Gameplay Tag Blueprint Property Mapping support…"
layout: layouts/markdown
---

*[on April 27th, 2022](https://github.com/GASCompanion/GASCompanion-Plugin/pull/42)*

## feat(Animations): Add Gameplay Tag Blueprint Property Mapping support…

…. Added UGSCNativeAnimInstance and IGSCNativeAnimInstanceInterface.

`UGSCNativeAnimInstance` can be used as is as a drop-in replacement for UAnimInstance (implements `IGSCNativeAnimInstanceInterface`)

`IGSCNativeAnimInstanceInterface` can be added to any native Anim Instance (most likely a project specific subclass, child of UAnimInstance or from another plugin / marketplace asset - ALS, AGR, KLS, MoveIt, etc.)

A single override to do, which can be as simple as the following in the header file:

```cpp
        // Gameplay tags that can be mapped to blueprint variables. The variables will automatically update as the tags are added or removed.
	// These should be used instead of manually querying for the gameplay tags.
	UPROPERTY(EditDefaultsOnly, Category = "GameplayTags")
	FGameplayTagBlueprintPropertyMap GameplayTagPropertyMap;

	virtual void InitializeWithAbilitySystem(UAbilitySystemComponent* ASC) override
	{
		GameplayTagPropertyMap.Initialize(this, ASC);
	}
```

## How to Use

Either use `UGSCNativeAnimInstance` directly for Anim Bluepints or follow these steps to integrate with any native Anim Instance classes (thinking about integration with other plugins / marketplace assets)

**Step 1**

Add the interface to the anim instance, or a project specific subclass:

```cpp
// Replace UAnimInstance with w/e native Anim Instance you're already using (ALSAnimInstance, AGRCoreAnimInstance, MIAnimInstance, WhaterAnimInstance, etc.)
class UMyAnimInstance : public UAnimInstance, public IGSCNativeAnimInstanceInterface
```

**Step 2**

Copy and paste this code in the header file:

```cpp
/**
* Gameplay tags that can be mapped to blueprint variables. The variables will automatically update as the tags are added or removed.
*
* These should be used instead of manually querying for the gameplay tags.
*/
UPROPERTY(EditDefaultsOnly, Category = "GameplayTags")
FGameplayTagBlueprintPropertyMap GameplayTagPropertyMap;

virtual void InitializeWithAbilitySystem(UAbilitySystemComponent* ASC) override
{
    GameplayTagPropertyMap.Initialize(this, ASC);
}
```

GSCAbilitySystemComponent will call this method via an interface call when InitAbilityActorInfo happens. The same pattern is used in both Lyra and the Ancient Demo, only difference here is that we rely on an interface to be able to operate with other plugins / assets.

**Step 3**

Reparent anim bp to use your new `UMyAnimInstance`

**Step 4**

Open the class defaults for the Anim BP, and setup the Gameplay Tags property mapping to your liking, ex:

![image](https://user-images.githubusercontent.com/113832/165401865-3b01c725-b0c6-4ab4-905c-09441757a49c.png)

Properties can be bools or integers. Case of integers, the property will match the tag count. Case of bools, the property will turn true / false whether the ASC has this tag (Owned Tags in Abilities, Effects etc.)

**End Result**

<https://user-images.githubusercontent.com/113832/165402251-403f3577-9de1-49b1-8280-b181e5807601.mp4>

