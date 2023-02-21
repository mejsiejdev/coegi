import '../styles/globals.css'
import Header from './Header'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className="flex h-full flex-col items-center bg-neutral-800 text-white antialiased"
    >
      <body className="container flex h-full w-full flex-col items-center">
        <Header />
        {children}
      </body>
    </html>
  )
}

export default RootLayout
