import './globals.css'
import { Be_Vietnam_Pro } from 'next/font/google'

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ['latin'],
  weight: ["400", "500", "700"],
})

export const metadata = {
  title: 'Ejemplo de Landing Page',
  description: 'Landing Page Base',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={beVietnamPro.className}>{children}</body>
    </html>
  )
}
