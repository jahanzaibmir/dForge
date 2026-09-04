# dForge 3D UI Prototype

This branch contains a lightweight React + Vite prototype demonstrating the white/beige, strong-3D UI direction for the dForge document verification product.

What's included
- Minimal Vite React app
- React Three Fiber scene with a floating 3D document card
- Design tokens and base styles

Run locally
1. git fetch && git checkout feat/3d-ui-prototype
2. npm install
3. npm run dev

Notes
- This is a prototype to explore visuals and interactions. It is not wired to any backend or blockchain logic yet.
- To reduce 3D intensity or disable WebGL, open src/components/Scene.jsx and replace the Canvas with a static image or CSS fallback.

Next steps I can take for you (pick one):
- Expand the prototype into full screens (dashboard, viewer, timeline) and integrate a simple mock verification API.
- Create a Figma file matching this style and export glTF examples for 3D assets.
- Open a PR with more UI components (buttons, inputs, modals) implemented and storybook.

