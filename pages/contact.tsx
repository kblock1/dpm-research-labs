import { useState } from 'react'
import Layout from '../components/Layout'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ name: e.target.name.value, email: e.target.email.value, message: e.target.message.value })
    })
    if (res.ok) setStatus('sent')
  }

  return (
    <Layout title="Contact">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>Name<input name="name" required /></label>
        <label>Email<input type="email" name="email" required /></label>
        <label>Message<textarea name="message" required /></label>
        <button type="submit">{status === 'sending' ? 'Sending…' : 'Send'}</button>
      </form>
      {status === 'sent' && <p>Thanks—we’ll reply shortly.</p>}
    </Layout>
  )
}
