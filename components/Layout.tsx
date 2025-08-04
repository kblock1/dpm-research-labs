import Header from './Header'
import Head from 'next/head'

export default function Layout({ children, title = 'DPM Research Labs' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <Header />
      <main>{children}</main>
      <footer>© 2025 DPM Research Labs</footer>
    </>
  )
}
