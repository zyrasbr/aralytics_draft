import { Link } from 'react-router-dom'
import Logo from '../components/Logo.jsx'
import Button from '../components/Button.jsx'
import Badge from '../components/Badge.jsx'
import Card from '../components/Card.jsx'
import { features, steps } from '../data/sample.js'

const periods = [
  { label: 'Period 1 · 90', height: 100, color: '#c9cae3' },
  { label: 'Period 2 · 84', height: 92, color: '#8e8fc0' },
  { label: 'Period 3 · 78', height: 84, color: '#1a1851' },
]

export default function Landing() {
  return (
    <>
      <header className="nav">
        <Logo />
        <nav className="nav__links" aria-label="Primary">
          <a href="#features">Features</a>
          <a href="#how">How it works</a>
          <a href="#roles">Sign in</a>
          <Button to="/login/staff" size="nav">Get started</Button>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__inner">
          <div className="hero__copy">
            <span className="pill">For public high schools in Cagayan de Oro</span>
            <h1>Catch decline early. Support every learner.</h1>
            <p className="hero__lead">
              AraLytics helps teachers spot struggling students before they fail, log interventions, and see what actually works.
            </p>
            <div className="hero__actions">
              <Button href="#roles">Sign in</Button>
              <Button href="#how" variant="outline">See how it works</Button>
            </div>
          </div>

          <Card className="hero__card">
            <div className="hero__card-head">
              <strong>Learner 01 · 8-Rizal</strong>
              <Badge tone="amber">Declining performance</Badge>
            </div>
            <div className="bars" aria-hidden="true">
              {periods.map((p) => (
                <div key={p.label} className="bars__bar" style={{ height: p.height, background: p.color }} />
              ))}
            </div>
            <div className="bars__labels">
              {periods.map((p) => <span key={p.label}>{p.label}</span>)}
            </div>
            <p className="hero__why">
              <strong>Why flagged:</strong> drop of 5+ points between grading periods, even though still passing. Same rule for all Grade 8 learners.
            </p>
            <p className="hero__note">Sample illustration</p>
          </Card>
        </div>
      </section>

      <section id="features" className="section section--tint">
        <div className="section__inner">
          <h2>Built for classrooms with big caseloads</h2>
          <p className="section__sub">Responsive for caseloads of 200 to 280 students, usable on entry-level Android phones.</p>
          <div className="cards">
            {features.map(([title, body]) => (
              <Card key={title} className="feature">
                <div className="feature__bar" />
                <h3>{title}</h3>
                <p>{body}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how" className="section section--navy">
        <div className="section__inner">
          <h2 style={{ color: '#fff', marginBottom: 36 }}>From record to result in four steps</h2>
          <div className="steps">
            {steps.map(([title, body], i) => (
              <div key={title} className="step">
                <div className="step__num">{i + 1}</div>
                <h3>{title}</h3>
                <p>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="roles" className="section">
        <div className="section__inner">
          <h2>Choose how you sign in</h2>
          <p className="section__sub">Staff and students each have their own sign-in.</p>
          <div className="cards">
            <Card as={Link} to="/login/staff" className="role">
              <h3>School Staff</h3>
              <p>One sign-in for teachers, class advisers and administrators. Record data, review flags, log interventions, run reports and manage settings.</p>
              <span className="role__cta">Sign in as school staff →</span>
            </Card>
            <Card as={Link} to="/login/student" className="role">
              <h3>Student</h3>
              <p>View your own status, supportive alerts and deadlines, and send a help request to a teacher or counselor.</p>
              <span className="role__cta">Sign in as student →</span>
            </Card>
          </div>
        </div>
      </section>

      <footer className="footer">
        <Logo />
        <p>
          AraLytics is an advisory tool. Risk flags support teacher judgment and never make final decisions about students. Team NEO · USTP Cagayan de Oro · Data handled under RA 10173.
        </p>
      </footer>
    </>
  )
}
