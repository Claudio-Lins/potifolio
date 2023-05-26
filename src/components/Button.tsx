import React, { ButtonHTMLAttributes, ReactNode } from 'react'

// interface ButtonHTMLAttibutes<HTMLButtonElements>
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={`
      bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex justify-center items-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50
    ${className}
    `}
    >
      {children}
    </button>
  )
}
