import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../layouts/AppShell.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import { staffNav } from '../data/nav.js'
import { stats, flaggedStudents, indicatorCounts, quickActions } from '../data/sample.js'

const filters = [
  { id: 'all', label: 'All 18' },
  { id: 'needs', label: 'Needs intervention 11' },
  { id: 'followup', label: 'Awaiting follow-up 7' },
]

export default function TeacherDashboard() {
  const [filter, setFilter] = useState('all')
  const rows = filter === 'all' ? flaggedStudents : flaggedStudents.filter((s) => s.group === filter)

  return (
    <AppShell nav={staffNav} active="dashboard" role="Staff">
      <h1 className="page-title">Good day, [Staff name]</h1>
      <p className="page-sub">Here is how your classes are doing. Sample data.</p>

      <div className="stats">
        {stats.map((s) => (
          <Card key={s.label} className="stat" style={{ borderTopColor: s.color }}>
            <div className="stat__label">{s.label}</div>
            <div className="stat__value">{s.value}</div>
            <div className="stat__hint">{s.hint}</div>
          </Card>
        ))}
      </div>

      <div className="row">
        <Card style={{ flex: '3 1 560px', minWidth: 0 }}>
          <div className="card-head">
            <h2>Flagged students</h2>
            <Link to="/flags/learner-01">View all 18 →</Link>
          </div>
          <div className="chips" role="group" aria-label="Filter flagged students">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`chip${filter === f.id ? ' is-active' : ''}`}
                aria-pressed={filter === f.id}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>Student</th><th>Flag</th><th>Triggering data</th><th>Status</th><th aria-label="Actions" />
                </tr>
              </thead>
              <tbody>
                {rows.map((s) => (
                  <tr key={s.n}>
                    <td>
                      <div className="who">
                        <span className="who__avatar">{s.n}</span>
                        <span><strong>Learner {s.n}</strong><small>{s.section}</small></span>
                      </div>
                    </td>
                    <td><Badge tone={s.flagTone}>{s.flag}</Badge></td>
                    <td>{s.data}</td>
                    <td><Badge tone={s.statusTone}>{s.status}</Badge></td>
                    <td><Link to="/flags/learner-01" style={{ fontWeight: 700 }}>Review →</Link></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="col" style={{ flex: '1 1 280px' }}>
          <Card>
            <h2 style={{ marginBottom: 18 }}>Flags by indicator</h2>
            {indicatorCounts.map((m, i) => (
              <div className="meter" key={m.label}>
                <div className="meter__top"><span>{m.label}</span><span>{m.count}</span></div>
                <div className="meter__track">
                  <div className={`meter__fill${i === 0 ? ' meter__fill--top' : ''}`} style={{ width: `${m.pct}%` }} />
                </div>
              </div>
            ))}
          </Card>

          <Card>
            <h2>Quick actions</h2>
            <div className="actions">
              {quickActions.map((a) => (
                <Link key={a} to="/dashboard" className="action"><i />{a}</Link>
              ))}
            </div>
            <p className="small-note">Works offline. Entries sync when the connection returns.</p>
          </Card>
        </div>
      </div>
    </AppShell>
  )
}
