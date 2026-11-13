// tone: 'amber' | 'indigo' | 'red' | 'green'
export default function Badge({ tone = 'indigo', children }) {
  return <span className={`badge badge--${tone}`}>{children}</span>
}
