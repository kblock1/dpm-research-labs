import { useState } from 'react'
import Layout from '../components/Layout'
import type { FormEvent } from 'react'

export default function Contact() {
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ 
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value
      })
    })
    if (res.ok) setStatus('sent')
  }

  return (
    <Layout title="Contact">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Message
          <textarea name="message" required />
        </label>
        <button type="submit">
          {status === 'sending' ? 'Sending…' : 'Send'}
        </button>
      </form>
      {status === 'sent' && <p>Thanks—we'll reply shortly.</p>}
    </Layout>
  )
}
