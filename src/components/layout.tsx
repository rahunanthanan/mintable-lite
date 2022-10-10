import Navbar from './navbar'
import Footer from './footer'

interface Props{
    children: React.ReactElement
}

function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout