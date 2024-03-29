import { PropsWithChildren } from 'react'
import { GlobalStyles } from '@/styles'

export function Providers({ children }: PropsWithChildren) {
  return (
    <>
      <GlobalStyles />
      {children}
    </>
  )
}
