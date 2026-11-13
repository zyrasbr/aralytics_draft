import { Link, useNavigate } from 'react-router-dom'
import AuthLayout from '../layouts/AuthLayout.jsx'
import Field from '../components/Field.jsx'
import Button from '../components/Button.jsx'

export default function LoginStaff() {
  const navigate = useNavigate()
  const onSubmit = (e) => {
    e.preventDefault()
    navigate('/dashboard') // no real auth yet
  }

  return (
    <AuthLayout
      role="staff"
      tag="School Staff portal"
      heading="One sign-in for everyone who supports learners."
      bullets={[
        'Record scores, attendance and reading levels in one place',
        'Review flags and follow every intervention across subjects',
        'Configure thresholds, accounts and form templates',
      ]}
    >
      <form onSubmit={onSubmit}>
        <Field id="id" label="Employee ID or school email" type="text" autoComplete="username" />
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
