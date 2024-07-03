import { FC } from 'react'

interface InputNumberInterface {
  id?: string
  dir?: 'ltr' | 'rtl'
  size?: 'xs' | 'sm' | 'md' | 'lg'
  className?: string
  min?: number
  value?: number
  disabled?: boolean
  update?: (v: string) => void
}

const InputNumber: FC<InputNumberInterface> = ({
  id,
  dir = 'ltr',
  size = 'md',
  className,
  min = 1,
  value,
  disabled = false,
  update
}) => {
  return (
    <input
      dir={dir}
      type="number"
      className={`input input-${size} ${className}`}
      step="0.01"
      value={value}
      onChange={({ target }) => {
        const val = parseFloat(target.value) || 0
        target.value = String(val)
        update?.(String(val))
      }}
      onFocus={({ target }) => target.select()}
      onWheel={({ target }) => (target as HTMLInputElement).blur()}
      id={id}
      min={min}
      disabled={disabled}
    />
  )
}

export default InputNumber
