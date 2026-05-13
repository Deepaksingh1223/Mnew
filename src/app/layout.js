 
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer' 
 
export const metadata = {
  title: 'Rayo Template',
  description: 'Converted to Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <link rel="stylesheet" href="/style.css" />
              <link rel="stylesheet" href="/style2.css" />
<link rel="stylesheet" href="/style3.css" /> 
        <link rel="stylesheet" href="/phosphor-icons.css" />
 
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/regular/style.css"></link>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/bold/style.css"></link>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@phosphor-icons/web@2.1.2/src/fill/style.css"></link>

      </head>
      <body>
        <Header />
        {children}
        <Footer />

      </body>
    </html>
  )
}