import { NextApiRequest, NextApiResponse } from 'next'

const productPath = '/products/ovall-ultraschall-gesichtsreiniger'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.redirect(`${productPath}?discount=${req.query.discountCode}`)
}
