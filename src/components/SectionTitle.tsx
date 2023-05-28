'use client'

import { motion } from 'framer-motion'
import { exit, title } from 'process'
import React from 'react'

interface SectionTitleProps {
  title: string
  subtitle: string
  className?: string
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  const animateProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  }
  return (
    <div
      className={`
    flex flex-col gap-4
    ${className}
  `}
    >
      <motion.span
        {...animateProps}
        transition={{ duration: 0.5 }}
        className="font-mono text-sm text-emerald-400"
      >{`.../${subtitle}`}</motion.span>
      <motion.h3
        {...animateProps}
        transition={{ duration: 1 }}
        className="text-3xl font-medium"
      >
        {title}
      </motion.h3>
    </div>
  )
}
