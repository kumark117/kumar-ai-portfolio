import "./globals.css"

export const metadata = {
  title: "Kumar Krishnamoorthy | AI Engineer",
  description: "AI portfolio including PromptBridge AI and Code Repo RAG."
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-green-100 text-gray-900 antialiased min-h-screen">
        {children}
      </body>
    </html>
  )
}
