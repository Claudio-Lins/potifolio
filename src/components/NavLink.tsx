'use client'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'

interface NavLinkProps {
  href: string
  label: string
}

export function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link href={href}>
      <span className={`font-semibold text-emerald-400 mr-2 text-lg`}>#</span>
      <span
        className={`
        font-semibold text-zinc-100
        ${isActive && 'text-green-500'}
      `}
      >
        {label}
      </span>
    </Link>
  )
}
