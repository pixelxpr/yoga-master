import Nav from './Nav'
import Meta from './Meta'
import styles from '../styles/Layout.module.css'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          {children}
        </main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
