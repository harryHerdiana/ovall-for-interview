import React from 'react'
import { IShopifyProductVariant } from '@modules/shopify/types'

interface IVariantSelect {
  setVariantSku: (string) => void
  variantSku: string
  variants: IShopifyProductVariant[]
}

const VariantSelect: React.FC<IVariantSelect> = ({ setVariantSku, variantSku, variants }) => {
  const handleChange = (e) => {
    setVariantSku(e.target.value)
  }

  return (
    <form className="mx-auto md:mx-0 md:text-left mt-6 order-1 md:order-2 w-full">
      <label className="flex flex-col w-min mx-auto md:mx-0 ">
        <span className="text-xxs font-medium pb-2"> {'Variante:'.toUpperCase()}</span>

        <select value={variantSku} onChange={handleChange} className="border-2 rounded text-sm">
          {variants.map((variant) => (
            <option key={variant.sku} value={variant.sku}>
              {variant.title}
            </option>
          ))}
        </select>
      </label>
    </form>
  )
}

export default VariantSelect
