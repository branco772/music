import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './context/AuthContext'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'MUSIC',
  description: 'Compra musica',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
            <body className={inter.className}><Provider>{children}</Provider></body>

    </html>
  )
}
