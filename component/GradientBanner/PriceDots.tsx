import React from 'react'
import { IShopifyProduct } from '@modules/shopify/types'
import { toEuro } from '@lib/utils'

type IPriceDotsProps = {
  product: IShopifyProduct
  selfTitle: string
}

export const getCheapestVariantPrice = (product: IShopifyProduct) => {
  const cheapest = product.variants.sort((a: any, b: any) => a.priceV2.amount - b.priceV2.amount)[0]

  const afterPrice = cheapest.priceV2.amount
  const beforePrice = cheapest.compareAtPriceV2.amount
  return { price: afterPrice, before: beforePrice }
}

const PriceDots: React.FC<IPriceDotsProps> = ({ product, selfTitle }) => {
  const x = 12
  console.log(getCheapestVariantPrice(product))
  return (
    <div className=" flex flex-col ">
      <h2 className="self-center lg:self-start mb-8">{selfTitle}</h2>
      <span className="self-center lg:self-start font-subtitleFont font-semibold text-2xl">
        {toEuro(getCheapestVariantPrice(product).price)}
      </span>
      <div className="self-center lg:self-start">
        <span className="line-through font-bold font-subtitleFont">
          {toEuro(getCheapestVariantPrice(product).before)}
        </span>
      </div>
      <div className="my-8 flex justify-center lg:justify-start">
        <ul className="flex gap-2">
          {product.variants.map((vari, index) => (
            <li
              key={vari.id}
              className={`md:w-6 md:h-6 w-5 h-5 list-none rounded-full bg-${vari.sku}-500`}
              value={vari.sku}
              aria-hidden="true"
            />
          ))}
        </ul>
      </div>
    </div>
  )
}
export default PriceDots
