'use client'

import { LanguageProvider } from './providers/language-provider'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      {children}
    </LanguageProvider>
  )
}