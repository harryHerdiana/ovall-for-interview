import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'
import { URLSearchParams } from 'url'

const LIST_ID = 'VqvzGe'
const idUrl = 'https://a.klaviyo.com/api/identify'
const subscribeUrl = `https://a.klaviyo.com/api/v2/list/${LIST_ID}/subscribe?api_key=${process.env.KLAVIYO_API_KEY}`

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  const { email } = req.body
  const encodedParams = new URLSearchParams()
  encodedParams.set(
    'data',
    `{"token": ${process.env.NEXT_PUBLIC_KLAVIYO_PUBLIC_TOKEN},"properties": {"$email": ${email} }}`
  )

  const options = {
    method: 'POST',
    headers: { Accept: 'text/html', 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encodedParams
  }

  try {
    const response = await fetch(idUrl, options)
    const json = await response.json()

    const response2 = await fetch(subscribeUrl, {
      method: 'POST',
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        profiles: [{ email }]
      })
    })

    const json2 = await response2.json()

    return res.status(200).json([json, json2])
  } catch (e) {
    console.log('e', e.message)
    return res.status(500).json({ message: e.message })
  }
}

export default handler
