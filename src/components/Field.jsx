// Labelled input / select / textarea. `as` picks the control.
export default function Field({ id, label, as: Control = 'input', className = '', children, ...rest }) {
  return (
    <>
      <label htmlFor={id} className="field-label">{label}</label>
      <Control id={id} className={`input ${className}`.trim()} {...rest}>{children}</Control>
    </>
  )
}
