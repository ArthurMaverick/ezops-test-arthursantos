import React from 'react'
import { ContainerResponsive } from './styled'

interface ContainerProps {
  children: React.ReactNode
}
export const Container = ({children}: ContainerProps) => {
  return (
    <ContainerResponsive>
      {children}
    </ContainerResponsive>
  )
}
