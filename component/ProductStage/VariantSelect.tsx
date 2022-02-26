import React, { useState } from 'react'
import { IShopifyProductVariant } from '@modules/shopify/types'
import Icon from '@component/Icon'
import Button from '@component/Button'
import ShopContext from '@context/StoreContext'
import AddToCartButton from './AddToCartButton'

interface IVariantSelect {
  setVariantSku: (arg0: string) => void
  variant: IShopifyProductVariant
  variants: IShopifyProductVariant[]
  quantityCaption: string
  colorCaption: string
  addToCartLabel: string
}

const VariantSelect: React.FC<IVariantSelect> = ({
  setVariantSku,
  variant,
  variants,
  quantityCaption,
  colorCaption,
  addToCartLabel
}) => {
  const shopContext = React.useContext(ShopContext)

  const option = [1, 2, 3, 4, 5, 6, 7]
  let [options, setOptions] = useState<number>(1)
  const increase = () => {
    setOptions((options += 1))
  }
  const decrease = () => {
    setOptions((options -= 1))
  }
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, options)
    shopContext.setShowCart(true)
  }
  return (
    <>
      <div className="flex flex-row gap-2 mb-4 justify-between">
        <div className="flex flex-col justify-center">
          <h6 className="text-tiny items-center my-2 text-left font-tagFont">
            {colorCaption.toUpperCase()}
          </h6>
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
          <h6 className="text-tiny items-center my-2 text-left md:text-right font-tagFont">
            {quantityCaption.toUpperCase()}
          </h6>
          <div className="block md:hidden">
            <select value={options} onChange={(e) => setOptions(+e.target.value)}>
              {option.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex border-2 border-black">
            <button disabled={options === 1} type="button" onClick={decrease}>
              <Icon src="/images/minus.svg" className="h-7 w-7" />
            </button>

            <div className="w-10 text-center font-bold text-base">{options}</div>
            <button type="button" onClick={increase}>
              <Icon src="/images/plus.svg" className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      <AddToCartButton onClick={handleAddToCartClick}>{addToCartLabel}</AddToCartButton>
    </>
  )
}

export default VariantSelect
