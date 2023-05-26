import React from 'react'

interface DivideHProps {
  className?: string
}

export function DivideH({ className }: DivideHProps) {
  return (
    <div
      className={`
        w-full border-b border-zinc-800 my-8
        ${className}
    `}
    />
  )
}
