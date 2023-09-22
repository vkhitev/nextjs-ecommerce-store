import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'w-auto rounded-full bg-black border-transparent px-5 py-3 disabled:cursor-not-allowed disabled:opacity-50 text-white font-semibold hover:opacity-75 transition',
          className,
        )}
        disabled={disabled}
        type={type}
        {...rest}
      >
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
