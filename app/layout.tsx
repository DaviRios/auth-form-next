import './global.css'
import { Providers } from '@/app/_lib/context'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <Providers>
      <body>
        {children}
      </body>
      </Providers>
    </html>
  )
} 
