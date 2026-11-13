import { useState } from 'react'
import AppShell from '../layouts/AppShell.jsx'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import { staffNav } from '../data/nav.js'
import { thresholds as initial } from '../data/sample.js'

export default function AdminSettings() {
  const [rows, setRows] = useState(initial)
  const [saved, setSaved] = useState(false)

  const update = (i, value) => {
    setSaved(false)
    setRows((r) => r.map((row, idx) => (idx === i ? { ...row, threshold: value } : row)))
  }

  return (
    <AppShell nav={staffNav} active="thresholds" role="Staff">
      <h1 className="page-title">Risk indicators and thresholds</h1>
      <p className="page-sub">Changes apply to future analyses. No code changes needed.</p>

      <Card>
        <div className="table-wrap">
          <table>
            <thead>
              <tr><th>Indicator</th><th>Threshold</th><th>Flag</th><th>Suggested intervention</th></tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={r.indicator}>
                  <td>{r.indicator}</td>
                  <td>
                    <input
                      className="input table-input"
                      aria-label={`Threshold for ${r.indicator}`}
                      value={r.threshold}
                      onChange={(e) => update(i, e.target.value)}
                    />
                  </td>
                  <td>{r.flag}</td>
                  <td>{r.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="save-row">
          <Button onClick={() => setSaved(true)}>Save changes</Button>
          <span>
            {saved
              ? 'Saved locally for this session (no backend yet).'
              : 'Sample values. Validate against DepEd policy and your school practices before use.'}
          </span>
        </div>
      </Card>
    </AppShell>
  )
}
