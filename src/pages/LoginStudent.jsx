import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Field from '../components/Field.jsx'
import Button from '../components/Button.jsx'

export default function LoginStudent() {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/student') // no real auth yet
  }

  return (
    <AuthLayout
      role="student"
      tag="Student portal"
      heading="Know where you stand, and ask for help early."
      bullets={[
        'See your own status in supportive, clear wording',
        'Keep track of upcoming deadlines with reminders',
        'Send a help request to a teacher or counselor',
      ]}
    >
      <form onSubmit={onSubmit}>
        <Field id="id" label="LRN or school email" type="text" autoComplete="username" />
        <Field id="pw" label="Password" type="password" autoComplete="current-password" />
        <div className="auth__row">
          <label><input type="checkbox" /> Keep me signed in</label>
          <Link to="#">Forgot password?</Link>
        </div>
        <Button className="auth__submit" block size="lg" type="submit">Sign in</Button>
      </form>
    </AuthLayout>
  )
}
