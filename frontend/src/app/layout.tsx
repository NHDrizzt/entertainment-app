import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header";
import UserContextProvider from "@/context/UserContextProvider";
import SearchBar from "@/components/SearchBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <UserContextProvider>
              <div className="flex flex-col h-screen xl:flex-row">
                  <Header />
                  <SearchBar />
                  {children}
              </div>
          </UserContextProvider>
      </body>
    </html>
  )
}
