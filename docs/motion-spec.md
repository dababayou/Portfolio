# MOTION SPECIFICATION — Restore Interactive Experience

## Objective

The current portfolio has become overly static after the previous redesign. Restore a polished, expressive motion system that complements the creative developer identity.

Motion is a core part of the experience, not an optional decorative enhancement.

Use the existing Framer Motion dependency and CSS transitions where appropriate. Do not add a new animation library unless technically justified.

## 1. Motion Design Language

Animations should feel:
- Smooth and responsive
- Subtle but noticeable
- Technically refined
- Consistent across components
- Purposeful rather than random

Use consistent motion tokens:

| Interaction | Recommended duration |
|---|---|
| Hover and press feedback | 120–220ms |
| Buttons and icon transitions | 150–250ms |
| Content reveal | 350–650ms |
| Section transitions | 400–700ms |
| Hero entrance sequence | 600–1000ms total |

Use natural easing, preferably custom cubic-bezier curves or carefully tuned springs.

Avoid excessive delays, bouncy movement, and long animations that obstruct content.

## 2. Hero Animations

The hero must feel visually alive.

Implement:
- A coordinated headline entrance using subtle opacity and vertical movement.
- Staggered supporting text and CTA reveals.
- An interactive hero visual responding to pointer movement or interaction, if appropriate.
- Subtle hover feedback for primary actions.

Do not animate every individual letter unless the resulting effect is genuinely polished.

Animations must not cause layout shifts.

## 3. Navigation

Add:
- Smooth hover and focus feedback.
- An animated active navigation indicator when relevant.
- Refined menu open/close transitions on mobile.
- Clear visual feedback for language and resume controls.

Keep navigation responsive and accessible.

## 4. Projects Section

Make browsing projects feel engaging.

Implement:
- Viewport-triggered project reveals.
- Subtle project imagery movement or scaling on hover.
- Smooth transitions for project metadata or supporting actions.
- Clear hover and focus states on project links.

Animate each project when it first enters the viewport rather than repeatedly whenever the user scrolls.

Do not hide essential content behind hover interactions.

## 5. Section Transitions

Introduce restrained scroll-based reveals to create visual rhythm.

Use combinations of:
- Opacity changes
- Small vertical translations
- Controlled stagger
- Subtle dividers or line reveals

Do not animate every paragraph, badge, or small element independently.

Avoid excessive scroll hijacking and heavy parallax.

## 6. Microinteractions

Ensure important interactive controls respond immediately.

Examples:
- Buttons gently change visual state on hover and press.
- Icons transition when actions change state.
- Links use refined underline or directional-arrow animations.
- Interactive cards provide subtle pointer feedback.
- Download and external-link actions provide clear feedback where appropriate.

Avoid artificial loading indicators for instantaneous actions.

## 7. Technical Requirements

- Use Framer Motion or lightweight CSS transitions.
- Prefer `transform` and `opacity`.
- Avoid animating expensive layout properties unnecessarily.
- Prevent layout shifts.
- Support keyboard focus.
- Respect `prefers-reduced-motion`.
- Avoid continuous background animation that consumes significant CPU or GPU resources.
- Ensure all content remains visible if JavaScript or animation initialization fails.
- Verify animation behavior on desktop and mobile.

## 8. Required Motion Coverage

The final implementation must include meaningful motion in at least these areas:

1. Hero introduction.
2. Primary CTA interactions.
3. Navigation hover and active states.
4. Project reveal and hover interactions.
5. Selected section transitions.
6. Mobile navigation opening and closing, if applicable.

These are minimum interaction requirements, not permission to animate every component.

## 9. Validation

After implementation:

- Verify animations actually execute in the browser.
- Check desktop and mobile behavior.
- Confirm reduced-motion accessibility.
- Ensure no important content stays invisible.
- Check that scrolling and interactions remain responsive.
- Run the production build.

Do not claim animations are working solely because motion components appear in the source code.

## Final Direction

The target is a **living, interactive portfolio with restrained creative motion**.

Avoid both extremes:

- An entirely static editorial résumé.
- A chaotic website filled with unnecessary animation.

The experience should communicate attention to detail and frontend engineering skill through polished, intentional interactions.