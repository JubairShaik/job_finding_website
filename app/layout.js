import './globals.css'
import { Navbar } from '@/components/Navbar';
 
 
export const metadata = {
  title: 'Pedamelan',
  description: 'Build By Jubair Ahmed',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        {children}
        
        </body>
    </html>
  )
}
