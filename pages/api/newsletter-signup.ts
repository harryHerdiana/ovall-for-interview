import { NextApiRequest, NextApiResponse } from 'next'
import Klaviyo from 'node-klaviyo'

const KlaviyoClient = new Klaviyo({
  publicToken: 'SPcSPY',
  privateToken: 'myPrivateToken'
})

const handler = async (req: NextApiRequest, res: NextApiResponse): Promise<void> => { }

export default handler
