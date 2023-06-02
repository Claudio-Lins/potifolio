import React, { ReactNode } from 'react'
import { RichText } from './Richtext'

interface ModalProps {
  children: ReactNode
}

export function Modal({ children }: ModalProps) {
  return (
    <div
      className="
      fixed
      inset-0
      z-50
      flex
      items-center
      justify-center
      bg-zinc-600/50  
      backdrop-filter
      backdrop-blur-sm
      overflow-y-auto
      transition-all
      duration-300
      ease-in-out
    "
    >
      {children}
    </div>
  )
}
