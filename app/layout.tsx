import './globals.css'
import Nav from './components/Nav';
import Footer from './components/Footer';
import { Roboto } from "@next/font/google";
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className={`${roboto.variable} font-sans bg-slate-100 selection:bg-fuchsia-300 selection:text-fuchsia-900`}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  )
}
