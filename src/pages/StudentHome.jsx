import { useState } from 'react'
import AppShell from '../layouts/AppShell.jsx'
import Card from '../components/Card.jsx'
import Button from '../components/Button.jsx'
import Field from '../components/Field.jsx'
import { studentNav } from '../data/nav.js'
import { deadlines } from '../data/sample.js'

export default function StudentHome() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
  }

  return (
    <AppShell nav={studentNav} active="home" role="Student">
      <h1 className="page-title">Hi there</h1>
      <p className="page-sub">Here is where you stand today. Sample data.</p>

      <div className="row" style={{ marginTop: 0 }}>
        <div className="col" style={{ flex: '2 1 420px' }}>
          <div className="status">
            <h2>Your status</h2>
            <p>You are doing well in most subjects. Math could use some extra support, and your teacher is ready to help whenever you are.</p>
          </div>

          <Card>
            <h2 style={{ marginBottom: 8 }}>Upcoming deadlines</h2>
            {deadlines.map(([task, due]) => (
              <div className="deadline" key={task}><span>{task}</span><strong>{due}</strong></div>
            ))}
            <Button variant="outline" size="sm" style={{ marginTop: 16 }}>Set a reminder</Button>
          </Card>
        </div>

        <Card style={{ flex: '1 1 300px' }}>
          <h2>Ask for help</h2>
          <p className="help__lead">Reaching out early is a good thing.</p>
          <form onSubmit={onSubmit}>
            <Field id="to" label="Send to" as="select" defaultValue="teacher">
              <option value="teacher">A teacher</option>
              <option value="counselor">The counselor</option>
            </Field>
            <Field id="ms" label="Your message" as="textarea" rows={4} style={{ minHeight: 110 }} onChange={() => setSent(false)} />
            <Button type="submit" block style={{ marginTop: 20 }}>Send request</Button>
          </form>
          {sent && <p className="toast" role="status">Your request was sent (demo only, nothing is stored).</p>}
        </Card>
      </div>
    </AppShell>
  )
}
