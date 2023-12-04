import Header from '@/components/ui/header'
import { AuthProvider } from '@/providers/auth'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Full Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={inter.className} lang="pt-br">
      <body className="antialiased">
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
