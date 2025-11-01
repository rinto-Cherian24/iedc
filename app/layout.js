import './globals.css'

export const metadata = {
  title: 'IEDC BOOTCAMP CEC',
  description: 'Innovation and Entrepreneurship Development Cell - College of Engineering Chengannur',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
