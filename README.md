# 21TechSpace

Rebuild of the 21TechSpace Wix mockup as a working React/Vite site — blueprint/schematic
design direction (navy + cyan grid, "spec sheet" sections) tying into the "BUILD. SCALE."
copy.

## Run it

```
npm install
npm run dev
```

## Before deploying

In `src/components/ContactPanel.jsx`, replace:
- `WHATSAPP_NUMBER` with your real WhatsApp number (country code, digits only, e.g. `2348012345678`)
- `CONTACT_EMAIL` with your real inbox

## What's functional right now

- Sticky nav with smooth-scroll links + mobile menu
- Service cards expand/collapse on "Learn More"
- "Start a Project" form validates input, then opens a pre-filled email (mailto) or WhatsApp chat
- Subscribe form validates email and confirms on submit

## Not yet wired

- Subscribe and project-form submissions aren't sent to a database — the email/WhatsApp
  actions work immediately, but there's no backend collecting subscribers. Wire that to
  your API the same way you did for Vendly's endpoints if you want persistence.
- Portfolio/Landing Page nav items point back to the original Wix pages — swap in your own
  routes once you build those out.
