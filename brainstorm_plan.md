# Brainstorm Plan: Remove marketing Header/Footer from dashboard + keep dashboard CSS

## Problem observed
- `src/app/layout.js` (root layout) always renders `<Header />` and `<Footer />` around all routes.
- Dashboard is under `src/app/dashboard/*` and already has its own `layout.jsx` that renders `SidebarNav` + `Topbar`.
- Result: Marketing Header/Footer appear inside dashboard; CSS conflicts because global styles affect dashboard.

## Solution approach
### A) Prevent marketing Header/Footer from rendering on dashboard routes
- Modify `src/app/layout.js` to detect current pathname.
- If pathname starts with `/dashboard`, render only `{children}` (no marketing Header/Footer).

Implementation options:
1. Create a tiny client wrapper component (e.g. `RouteChrome`) that uses `usePathname()` from `next/navigation`.
2. Keep `layout.js` mostly server-safe and delegate chrome logic to client component.

### B) Keep dashboard CSS isolated
- The dashboard already imports `../dashboard/mudra-dashboard.css` in `dashboard/home/page.jsx`.
- Ensure no marketing CSS is forcibly imported in dashboard.
- If global `globals.css`/`style.css` causes conflicts, scope dashboard CSS using a dashboard root selector (e.g. `#mudra-dashboard-root-react ...`).
- If needed: wrap dashboard pages in a root div and add `#mudra-dashboard-root-react` prefix to dashboard CSS rules.

## Files to change
- `src/app/layout.js` (conditional chrome)
- Possibly add new component: `src/app/RouteChrome.jsx`
- If CSS conflict persists: edit `src/app/dashboard/mudra-dashboard.css` (prefix with dashboard root selector)

## Verification
- Visit `/dashboard/home` (or `/dashboard`) and confirm only `SidebarNav` + `Topbar` + page content.
- Visit `/` and confirm marketing Header/Footer still show.

