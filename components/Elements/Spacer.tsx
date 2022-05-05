import * as React from 'react'

const sizes = {
  xs: 'h-2',
  sm: 'h-4',
  md: 'h-8',
  lg: 'h-16',
  xl: 'h-32',
}

export type SpacerProps = {
  size?: keyof typeof sizes
}

export const Spacer = ({ size = 'md' }: SpacerProps) => {
  return <div className={sizes[size]}></div>
}
