import { NextApiRequest, NextApiResponse } from 'next'
import { serialize, CookieSerializeOptions } from 'cookie'
import cors from '@lib/server/cors'

export const setCookie = (res: NextApiResponse, name: string, value: unknown): void => {
  const stringValue = typeof value === 'object' ? `j:${JSON.stringify(value)}` : String(value)
  const options: CookieSerializeOptions = {
    expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
    secure: true,
    path: '/'
  }

  res.setHeader('Set-Cookie', serialize(name, String(stringValue), options))
}

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => {
  await cors(req, res)
  setCookie(res, '_ovallskincare', 'opted-in')
  res.end(res.getHeader('Set-Cookie'))
}

export default handler
