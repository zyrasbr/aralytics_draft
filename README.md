# AraLytics Web

React + Vite front end for AraLytics (student vulnerability analytics for Cagayan de Oro public high schools), built from the "AraLytics Web Design" canvas. All data is sample data.

## Run

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Routes

| Path                 | Screen                         |
| -------------------- | ------------------------------ |
| `/`                  | Landing                        |
| `/login/staff`       | Staff sign-in                  |
| `/login/student`     | Student sign-in                |
| `/dashboard`         | Staff dashboard                |
| `/flags/learner-01`  | Risk flag detail               |
| `/settings/thresholds` | Admin thresholds             |
| `/student`           | Student home                   |

Sign-in buttons just navigate (no real auth yet).

## Structure

- `src/styles/` – design tokens (`tokens.css`) and component/page styles (`app.css`)
- `src/components/` – Logo, Button, Badge, Card, Field
- `src/layouts/` – `AppShell` (sidebar + topbar) and `AuthLayout` (split login)
- `src/pages/` – one file per screen
- `src/data/` – sample data and nav config
