import React, { ComponentProps } from 'react'
import NextLink from 'next/link'

type LinkProps = ComponentProps<typeof NextLink>

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <NextLink
      className={`
    flex items-center gap-2 text-zinc-300 text-sm hover:text-emerald-500 transition-colors
    ${className}
  `}
      {...props}
    >
      {children}
    </NextLink>
  )
}
