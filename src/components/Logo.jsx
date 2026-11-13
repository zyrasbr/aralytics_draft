import { Link } from 'react-router-dom'

export function LogoMark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 30 30" aria-hidden="true">
      <rect width="30" height="30" rx="8" fill="#fcb316" />
      <path d="M7 21l5-6 4 3 7-9" stroke="#1a1851" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Logo({ light = false }) {
  return (
    <Link to="/" className={`logo${light ? ' logo--light' : ''}`}>
      <LogoMark />
      AraLytics
    </Link>
  )
}
