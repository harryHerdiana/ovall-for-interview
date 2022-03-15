import Cors from 'cors'
import { NextApiRequest, NextApiResponse } from 'next'
import { appUrl } from '@lib/utils'

function initMiddleware(middleware) {
  return (req: NextApiRequest, res: NextApiResponse) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result)
        }
        return resolve(result)
      })
    })
}

const cors = initMiddleware(
  Cors({
    methods: ['GET', 'POST'],
    origin: appUrl(),
    optionsSuccessStatus: 200
  })
)

export default cors
