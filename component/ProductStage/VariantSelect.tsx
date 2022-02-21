import React from 'react'
import { IShopifyProductVariant } from '@modules/shopify/types'

interface IVariantSelect {
  setVariantSku: (string) => void
  variantSku: string
  variants: IShopifyProductVariant[]
  quantityCaption: string
}

const VariantSelect: React.FC<IVariantSelect> = ({
  setVariantSku,
  variantSku,
  variants,
  quantityCaption
}) => (
  <>
    <div className="flex flex-row gap-2 mb-4 justify-between">
      <div className="flex flex-col justify-center">
        {' '}
        <span className="text-sm items-center font-bold my-2 text-left">
          {' '}
          {'FARBE WÄHLEN:'.toUpperCase()}
        </span>
        <div className="flex flex-row gap-2">
          {variants.map((variant) => (
            <button
              className={`focus:ring-1 focus:ring-offset-2 focus:ring-black w-4 h-4 rounded-full bg-${variant.sku}-500`}
              type="button"
              key={variant.sku}
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
        <select>
          <option value="1">1</option>
        </select>
      </div>
    </div>
  </>
)

export default VariantSelect
