import type { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-southeast-2' })
const ses = new AWS.SES()

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).end()
  const { name, email, message } = req.body
  await ses.sendEmail({
    Source: 'contact@dpm-research-labs.com',
    Destination: { ToAddresses: ['you@yourdomain.com'] },
    Message: {
      Subject: { Data: `Contact form: ${name}` },
      Body: { Text: { Data: `From: ${name} <${email}>\n\n${message}` } }
    }
  }).promise()
  res.status(200).end()
}
