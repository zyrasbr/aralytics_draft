import { useState } from 'react'
import { Link } from 'react-router-dom'
import AppShell from '../layouts/AppShell.jsx'
import Card from '../components/Card.jsx'
import Badge from '../components/Badge.jsx'
import Button from '../components/Button.jsx'
import Field from '../components/Field.jsx'
import { staffNav } from '../data/nav.js'
import { interventions, indicatorsChecked, followUp } from '../data/sample.js'

const metrics = [
  ['Current grade', '78', 'Still passing'],
  ['Change', '−12 pts', 'Since Period 1'],
  ['Per period', '−6, −6', 'Two straight drops'],
  ['Rule threshold', '5+ pts', 'Same for all Grade 8'],
]

function TrendChart() {
  const gridY = [[20, '100'], [70, '90'], [120, '80'], [170, '70'], [220, '60']]
  const pts = [
    { x: 110, y: 70, v: 90, label: 'Period 1' },
    { x: 290, y: 100, v: 84, label: 'Period 2' },
    { x: 470, y: 130, v: 78, label: 'Period 3', last: true },
  ]
  return (
    <svg
      className="chart"
      viewBox="0 0 560 260"
      role="img"
      aria-label="Grades fell from 90 to 84 to 78 across three grading periods. Passing grade is 75."
    >
      {gridY.map(([y, t]) => (
        <g key={y}>
          <line x1="60" x2="540" y1={y} y2={y} stroke="#eceef5" />
          <text x="48" y={y + 4} textAnchor="end" fontSize="11" fill="#5b5d7a">{t}</text>
        </g>
      ))}
      <line x1="60" x2="540" y1="145" y2="145" stroke="#fcb316" strokeWidth="2" strokeDasharray="6 5" />
      <text x="540" y="161" textAnchor="end" fontSize="11" fontWeight="600" fill="#6b4700">Passing grade 75</text>
      <polyline points="110,70 290,100 470,130" fill="none" stroke="#1a1851" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      {[[170, 83, 200, 99], [350, 113, 380, 129]].map(([rx, ry, tx, ty]) => (
        <g key={rx}>
          <rect x={rx} y={ry} width="60" height="24" rx="12" fill="#fff4dc" />
          <text x={tx} y={ty} textAnchor="middle" fontSize="12" fontWeight="700" fill="#6b4700">−6 pts</text>
        </g>
      ))}
      {pts.map((p) => (
        <g key={p.label}>
          <circle cx={p.x} cy={p.y} r="7" fill={p.last ? '#fcb316' : '#fff'} stroke="#1a1851" strokeWidth="3" />
          <text x={p.x} y={p.y - 16} textAnchor="middle" fontSize="14" fontWeight="700" fill="#1a1851">{p.v}</text>
          <text x={p.x} y="245" textAnchor="middle" fontSize="12" fill="#5b5d7a">{p.label}</text>
        </g>
      ))}
    </svg>
  )
}

export default function FlagDetail() {
  const [choice, setChoice] = useState('remedial')

  return (
    <AppShell nav={staffNav} active="flags" role="Subject Teacher">
      <h1 className="page-title">Risk flag review</h1>
      <p className="page-sub">Sample data. One flagged learner.</p>

      <div className="crumbs">
        <Link to="/dashboard">Risk flags</Link>
        <span aria-hidden="true">/</span>
        <strong>Learner 01</strong>
      </div>

      <div className="col">
        <Card className="profile">
          <div className="profile__top">
            <div className="profile__id">
              <div className="profile__avatar">L1</div>
              <div>
                <div className="profile__name">Learner 01</div>
                <div className="profile__meta">Grade 8 · 8-Rizal · Mathematics</div>
              </div>
            </div>
            <div className="badges">
              <Badge tone="amber">Declining performance</Badge>
              <Badge tone="red">Needs intervention</Badge>
            </div>
          </div>
          <div className="metrics">
            {metrics.map(([label, value, hint]) => (
              <div className="metric" key={label}>
                <div className="metric__label">{label}</div>
                <div className="metric__value">{value}</div>
                <div className="metric__hint">{hint}</div>
              </div>
            ))}
          </div>
        </Card>

        <div className="row" style={{ marginTop: 0 }}>
          <div className="col" style={{ flex: '1 1 520px', minWidth: 0 }}>
            <Card>
              <h2>Why this was flagged</h2>
              <p className="card__sub" style={{ marginBottom: 18 }}>Grade trend across the grading periods</p>
              <TrendChart />
              <div className="callout">
                <strong>Rule met:</strong> a drop of 5+ points between grading periods, even when still passing. The same rule is applied to every Grade 8 student.
              </div>
            </Card>

            <Card>
              <h2 style={{ marginBottom: 8 }}>Indicators checked</h2>
              {indicatorsChecked.map((i) => (
                <div className="indicator" key={i.title}>
                  <div>
                    <strong>{i.title}</strong>
                    <span className="hint">{i.hint}</span>
                  </div>
                  <Badge tone={i.triggered ? 'amber' : 'green'}>{i.triggered ? 'Triggered' : 'Not triggered'}</Badge>
                </div>
              ))}
            </Card>
          </div>

          <div className="col" style={{ flex: '1 1 340px', maxWidth: '100%' }}>
            <Card>
              <h2>Log an intervention</h2>
              <p className="card__sub">Suggestions based on the indicator that triggered this flag.</p>
              {interventions.map((o) => (
                <label key={o.id} className={`option${choice === o.id ? ' is-selected' : ''}`}>
                  <input type="radio" name="iv" checked={choice === o.id} onChange={() => setChoice(o.id)} />
                  <span><strong>{o.title}</strong><small>{o.hint}</small></span>
                </label>
              ))}
              <Field id="dt" label="Date given" type="date" style={{ marginTop: 6 }} />
              <Field id="nt" label="Note (optional)" as="textarea" rows={3} style={{ minHeight: 80 }} />
              <Button block style={{ marginTop: 20 }}>Log intervention</Button>
              <div className="btn-pair">
                <Button variant="outline">Add note</Button>
                <Button variant="outline">Dismiss flag</Button>
              </div>
            </Card>

            <Card>
              <h2 style={{ marginBottom: 18 }}>Follow-up status</h2>
              <ol className="timeline" style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {followUp.map((s, i) => (
                  <li className="timeline__item" key={s.title}>
                    <div className="timeline__rail">
                      <div className={`timeline__dot${s.done ? ' is-done' : ''}`}>
                        {s.done && (
                          <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                            <path d="M2.5 6.5l2.5 2.5 4.5-5" stroke="#fcb316" strokeWidth="2" fill="none" strokeLinecap="round" />
                          </svg>
                        )}
                      </div>
                      {i < followUp.length - 1 && <div className="timeline__line" />}
                    </div>
                    <div className="timeline__body"><strong>{s.title}</strong><span>{s.hint}</span></div>
                  </li>
                ))}
              </ol>
            </Card>

            <p className="advisory">Advisory only. Flags support teacher judgment and never make final decisions about students.</p>
          </div>
        </div>
      </div>
    </AppShell>
  )
}
