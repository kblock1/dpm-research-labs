import type { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-southeast-2' })
const ses = new AWS.SES()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body
  await ses.sendEmail({
    Source: 'contact@dpmlabs.block.au',
    Destination: { ToAddresses: ['kieran@block.net.au'] },
    Message: {
      Subject: { Data: `Contact form: ${name}` },
      Body: { Text: { Data: `From: ${name} <${email}>\n\n${message}` } }
    }
  }).promise()
  res.status(200).end()
}
