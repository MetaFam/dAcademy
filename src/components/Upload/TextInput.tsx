import clsx from 'clsx'
import { AllHTMLAttributes } from 'react'

export const TextInput = (
  { className, ...props }:
  { className?: string } & AllHTMLAttributes<HTMLInputElement>
) => (
  <input
    className={clsx(
      'max-w-xs my-4 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    )}
    {...props}
  />
)

export default TextInput