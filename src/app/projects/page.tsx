import { ProjectHero } from '@/src/components/ProjectHero'
import React from 'react'
import { DivideH } from '../../components/DivideH'
import { ProjectList } from '@/src/components/ProjectList'

export default function projects() {
  return (
    <div className="container pt-32">
      <ProjectHero />
      <DivideH />
      <ProjectList />
    </div>
  )
}
