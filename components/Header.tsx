import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <img src="/img/logo.svg" alt="DPM Labs" />
      <nav>
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </header>
  )
}
