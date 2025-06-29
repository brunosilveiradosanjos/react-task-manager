import React from 'react'
import { cx } from 'class-variance-authority'

interface MainProps extends React.ComponentProps<'main'> {}
export default function Main({ children, className, ...props }: MainProps) {
  return (
    <main className={cx('mt-4 md:mt-8', className)} {...props}>
      {children}
    </main>
  )
}
