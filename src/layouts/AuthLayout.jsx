import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
      <circle cx="10" cy="10" r="10" fill="#fcb316" />
      <path d="M5.5 10.5l3 3 6-6.5" stroke="#1a1851" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}

/** Split sign-in layout. `role` is 'staff' or 'student' (controls the active tab). */
export default function AuthLayout({ role, tag, heading, bullets, children }) {
  return (
    <div className="auth">
      <div className="auth__aside">
        <Logo light />
        <div>
          <div className="auth__tag">{tag}</div>
          <h1>{heading}</h1>
          <ul className="auth__list">
            {bullets.map((b) => (
              <li key={b}><Check />{b}</li>
            ))}
          </ul>
        </div>
        <div className="auth__org">College of Information Technology and Computing · USTP Cagayan de Oro</div>
      </div>

      <div className="auth__main">
        <Link to="/" className="auth__back">← Back to home</Link>
        <div className="auth__form">
          <div className="tabs">
            <Link to="/login/staff" className={role === 'staff' ? 'is-active' : ''}>Staff</Link>
            <Link to="/login/student" className={role === 'student' ? 'is-active' : ''}>Student</Link>
          </div>
          <h2>Welcome back</h2>
          <p className="auth__lead">Sign in with the account issued by your school.</p>
          {children}
          <p className="auth__legal">
            Student records are protected under the Data Privacy Act of 2012 (RA 10173). Access is limited to the student, their teachers and authorized staff.
          </p>
        </div>
      </div>
    </div>
  )
}
