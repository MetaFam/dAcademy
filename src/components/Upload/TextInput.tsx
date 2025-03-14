import { cn } from '@/lib/utils'
import { InputHTMLAttributes } from 'react'

export const TextInput = (
  { className, ...props }:
  { className?: string } & InputHTMLAttributes<HTMLInputElement>
) => (
  <input
    className={cn(
      'max-w-xs my-4 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
      className
    )}
    {...props}
  />
)

export default TextInput