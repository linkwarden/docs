import React from "react";

/**
 * A Bootstrap Icon rendered inline in prose, so the control a sentence points at
 * is recognizable without a screenshot. `name` is the icon's name without the
 * `bi-` prefix, and should be the icon the app itself renders for that control.
 *
 * Registered globally for MDX in src/theme/MDXComponents.tsx, so no import is
 * needed in a doc:
 *
 *     Click the <Icon name="pencil-fill" /> pencil icon above the list.
 *
 * The surrounding prose always names the icon, so the glyph itself is decorative.
 */
export default function Icon({ name }: { name: string }): JSX.Element {
  return <span className={`inline-icon bi bi-${name}`} aria-hidden="true" />;
}
