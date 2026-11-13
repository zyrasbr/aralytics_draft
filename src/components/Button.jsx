import { Link } from 'react-router-dom'

// variant: 'primary' | 'outline'; size: 'md' | 'sm' | 'lg' | 'nav'
// Renders a router Link when `to` is given, an <a> when `href` is given, otherwise a <button>.
export default function Button({ variant = 'primary', size = 'md', block = false, to, href, className = '', children, ...rest }) {
  const cls = ['btn', `btn--${variant}`, size !== 'md' && `btn--${size}`, block && 'btn--block', className]
    .filter(Boolean)
    .join(' ')
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>
  return <button type="button" className={cls} {...rest}>{children}</button>
}
