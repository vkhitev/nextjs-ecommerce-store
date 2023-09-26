import { forwardRef } from 'react'

import { cn } from '@/lib/utils'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = 'button', ...rest }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'w-auto rounded-full border-transparent bg-black px-5 py-3 font-semibold text-white transition hover:opacity-75 disabled:cursor-not-allowed disabled:opacity-50',
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
