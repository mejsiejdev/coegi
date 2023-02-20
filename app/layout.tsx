import '../styles/globals.css'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}

export default RootLayout
