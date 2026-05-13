# TODO

## Plan (approved)
1. Fix dashboard pages showing marketing Header/Footer due to RootLayout.
2. Ensure dashboard uses dashboard-specific CSS and does not get overridden by global marketing styles.
3. Validate by checking dashboard route renders only Sidebar + Topbar + page content.

## Steps
- [ ] Update `src/app/layout.js` to conditionally render Header/Footer only for non-dashboard routes.
- [ ] (If needed) Apply `mudra-dashboard.css` scoping so dashboard styles don’t conflict with home page styles.
- [ ] Run app / quick build check.

