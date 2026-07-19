# Responsive Design QA

- Source visual truth: user-provided mobile and tablet screenshots in the conversation (July 20, 2026); no local attachment path was exposed.
- Implementation screenshot: unavailable because the browser runtime exposed no usable browser.
- Target viewports: 320, 360, 390, 430, 768, 820, 1024, 1280, and 1440 CSS pixels.
- States: alternating content/image sections; closed mobile navigation; Services, Slab Leak Guide, and Service Areas submenus expanded.

**Full-view comparison evidence**

The source screenshots show squeezed tablet columns, excessive empty section space, image-only portions on narrow screens, incomplete mobile submenu contents, and raw plus/minus text controls. The implementation could not be captured at matching viewports, so a valid side-by-side visual comparison is blocked.

**Focused region comparison evidence**

The implementation could not be rendered in the browser, so focused comparisons of navigation controls, text wrapping, image crop, spacing, and submenu scroll behavior are blocked.

**Findings**

- [P1] Browser-rendered responsive verification is unavailable.
  - Location: shared header and zigzag sections across service and guide routes.
  - Evidence: the production build and static export pass, but there is no post-fix browser screenshot to compare with the supplied references.
  - Impact: exact visual behavior, touch interaction, and device-specific browser chrome effects cannot be certified from build output alone.
  - Fix: capture the revised implementation at the target widths, open all three mobile submenus, check console errors, and compare those captures with the supplied screenshots.

**Required fidelity surfaces**

- Fonts and typography: Montserrat, responsive heading clamps, paragraph sizing, and wrap-safe navigation labels are implemented; visual confirmation is blocked.
- Spacing and layout rhythm: tablet sections now stack at 1024px and below with reduced padding and bounded content width; visual confirmation is blocked.
- Colors and visual tokens: the existing charcoal, red, white, and gray system is preserved; visual confirmation is blocked.
- Image quality and asset fidelity: existing source images are retained and placed in responsive 4:3 or 16:10 containers with `object-fit: cover`; crop confirmation is blocked.
- Copy and content: page copy is unchanged; mobile navigation now derives from the complete desktop link set.
- Icons and interactions: raw plus/minus glyphs were replaced with Lucide chevrons; menu, close, keyboard Escape, resize cleanup, focus, and scroll behavior are implemented; browser interaction testing is blocked.

**Comparison history**

1. Source-only review identified tablet column compression, excessive whitespace, incomplete mobile navigation, and weak toggle affordances.
2. Shared navigation and zigzag components were revised, lint passed, all 70 routes built, and the Cloudflare static export validator passed.
3. Post-fix screenshot comparison could not be performed because no browser was available.

**Implementation checklist**

- Capture desktop, tablet, and mobile routes in a browser.
- Expand and scroll each mobile submenu.
- Confirm no horizontal page overflow at 320px.
- Confirm image focal points at 390px, 820px, and 1024px.
- Check the browser console for runtime errors.

final result: blocked
