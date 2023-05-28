'use client'
import Link from 'next/link'
import React from 'react'
import { NavLink } from './NavLink'
import { motion } from 'framer-motion'

const navLink = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/projects',
    label: 'Projetos',
  },
]

export function Header() {
  return (
    <motion.header
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
      className="h-24 fixed z-10 flex items-center justify-between w-full bg-[#000203]"
    >
      <div className="flex justify-between items-center container">
        <Link href="/">
          <span className="font-black text-emerald-400 text-4xl tracking-tighter md:hidden">
            C
          </span>
          <span className="font-black text-4xl tracking-tighter hidden md:inline-block">
            Claudio
          </span>
          <span className="font-thin text-4xl">Lins</span>
        </Link>
        <nav className="flex items-center md:gap-10 gap-4">
          {navLink.map((link, i) => (
            <NavLink key={i} {...link} />
          ))}
        </nav>
      </div>
    </motion.header>
  )
}
