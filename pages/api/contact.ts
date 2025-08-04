import type { NextApiRequest, NextApiResponse } from 'next'
import AWS from 'aws-sdk'

AWS.config.update({ region: 'ap-southeast-2' })
const sns = new AWS.SNS()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, email, message } = req.body
  const topicArn = process.env.SNS_TOPIC_ARN!
  const payload = JSON.stringify({ name, email, message })

  await sns
    .publish({
      TopicArn: topicArn,
      Subject: `Contact form: ${name}`,
      Message: payload,
    })
    .promise()

  res.status(200).json({ status: 'sent' })
}
