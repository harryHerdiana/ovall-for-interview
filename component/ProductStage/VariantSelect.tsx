import React, { useState } from 'react'
import { IShopifyProductVariant } from '@modules/shopify/types'

interface IVariantSelect {
  setVariantSku: (arg0: string) => void

  variants: IShopifyProductVariant[]
  quantityCaption: string
  colorCaption: string
}

const VariantSelect: React.FC<IVariantSelect> = ({
  setVariantSku,
  variants,
  quantityCaption,
  colorCaption
}) => {
  const option = [1, 2, 3, 4, 5, 6, 7]
  const [options, setOptions] = useState<string>('')

  return (
    <>
      <div className="flex flex-row gap-2 mb-4 justify-between">
        <div className="flex flex-col justify-center">
          <span className="text-sm items-center font-bold my-2 text-left">
            {colorCaption.toUpperCase()}
          </span>
          <div className="flex flex-row gap-2">
            {variants.map((variant) => (
              <button
                className={`focus:ring-1 focus:ring-offset-2 focus:ring-black w-4 h-4 rounded-full bg-${variant.sku}-500`}
                type="button"
                key={variant.id}
                value={variant.sku}
                onClick={() => setVariantSku(variant.sku)}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-sm items-center font-bold my-2 text-left">
            {quantityCaption.toUpperCase()}
          </span>
          <select value={options} onChange={(e) => setOptions(e.target.value)}>
            {option.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default VariantSelect
