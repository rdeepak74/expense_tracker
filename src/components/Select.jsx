import React from 'react'

export default function Select({
  label,
  id,
  name,
  value,
  onChange,
  options,
  error,
  defaultOptions,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        // ref={categoryRef}
      >
        {defaultOptions && (
          <option value="" hidden>
            {defaultOptions}
          </option>
        )}
        {/* <option value="" hidden>
          {defaultOptions}
        </option> */}
        {options.map((option, i) => (
          <option key={i} value={option}>
            {option}
          </option>
        ))}
      </select>
      <p className="error">{error}</p>
    </div>
  )
}
