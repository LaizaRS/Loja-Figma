import { cva, type VariantProps } from 'class-variance-authority'
import React from 'react'

export const iconeVariants = cva('', {
  variants: {
    animate: {
      false: '',
      true: 'animate-spin',
    },
  },
  defaultVariants: {
    animate: false,
  },
})

interface IconeProps
  extends React.ComponentProps<'svg'>, VariantProps<typeof iconeVariants> {
  svg: React.FC<React.ComponentProps<'svg'>>
}

export default function Icone({
  svg: SvgComponent,
  animate,
  className,
  ...props
}: IconeProps) {
  return (
    <SvgComponent className={iconeVariants({ animate, className })} {...props} />
  )
}
