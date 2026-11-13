import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import Badge from '../components/Badge.jsx'

/**
 * Sidebar + topbar frame used by every signed-in screen.
 * `active` is the id of the nav item to highlight (several items share a route).
 */
export default function AppShell({ nav, active, role, children }) {
  return (
    <div className="shell">
      <aside className="sidebar">
        <div>
          <div className="sidebar__brand"><Logo /></div>
          <div className="sidebar__label">MENU</div>
          <nav aria-label="Main">
            {nav.map((item) => (
              <Link
                key={item.id}
                to={item.to}
                className={`nav-link${item.id === active ? ' is-active' : ''}`}
                aria-current={item.id === active ? 'page' : undefined}
              >
                <span className="nav-link__dot" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="sidebar__foot"><Link to="/">Sign out</Link></div>
      </aside>

      <div className="main">
        <header className="topbar">
          <input className="search" aria-label="Search" placeholder="Search students or classes" />
          <div className="topbar__user">
            <Badge tone="indigo">{role}</Badge>
            <span className="avatar" aria-hidden="true">U</span>
          </div>
        </header>
        <div className="content">{children}</div>
      </div>
    </div>
  )
}
