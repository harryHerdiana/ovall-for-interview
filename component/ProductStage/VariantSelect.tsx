import React, { useEffect, useState } from 'react'
import { IShopifyProductVariant } from '@modules/shopify/types'
import Icon from '@component/Icon'
import ShopContext from '@context/StoreContext'
import { VariantContext } from '@context/VariantContext'
import AddToCartButton from './AddToCartButton'

interface IVariantSelect {
  setVariantSku: (arg0: string) => void
  variant: IShopifyProductVariant
  variants: IShopifyProductVariant[]
  quantityCaption: string
  colorCaption: string
  addToCartLabel: string
}

interface IActiveButton {
  buttonActivated: number
}

const VariantSelect: React.FC<IVariantSelect> = ({
  setVariantSku,
  variant,
  variants,
  quantityCaption,
  colorCaption,
  addToCartLabel
}) => {
  const variantContext = React.useContext(VariantContext)
  const shopContext = React.useContext(ShopContext)

  const option = [1, 2, 3, 4, 5, 6, 7]
  const [currentQuantity, setQuantity] = useState<number>(1)

  const increase = () => {
    setQuantity(currentQuantity + 1)
  }
  const decrease = () => {
    setQuantity(currentQuantity - 1)
  }
  const handleAddToCartClick = () => {
    shopContext.addVariantToCart(variant, currentQuantity)
    shopContext.setShowCart(true)
  }
  const [activebutton, setActiveButton] = useState<IActiveButton>({
    buttonActivated: 0
  })
  useEffect(() => {
    if (variant.currentlyNotInStock === false) {
      setQuantity(0)
    }
  }, [variant.currentlyNotInStock])
  return (
    <>
      <div className="flex flex-row gap-2 my-4 justify-between h-17">
        <div className="flex flex-col justify-between h-max">
          <h3 className="justify-self-start text-left mb-5 ">{colorCaption}</h3>
          <div className="flex flex-row gap-2 ml-1 mb-3">
            {variants.map((vari, index) => (
              <button
                key={vari.id}
                className={`${
                  activebutton.buttonActivated === index && 'ring-1 ring-offset-2 ring-black'
                } md:w-4 md:h-4 w-5 h-5 rounded-full bg-${vari.sku}-500`}
                type="button"
                value={vari.sku}
                onClick={() => {
                  variantContext.setSelected()
                  setVariantSku(vari.sku)
                  setActiveButton({
                    buttonActivated: index
                  })
                }}
                aria-hidden="true"
              />
            ))}
          </div>
        </div>
        <div
          className={`${
            variant.currentlyNotInStock === false && 'hidden'
          } flex flex-col justify-between`}>
          <h3 className=" items-center text-right mb-3">{quantityCaption.toUpperCase()}</h3>
          <div className="flex md:hidden">
            <select
              value={currentQuantity}
              onChange={(e) => setQuantity(+e.target.value)}
              className=" w-24">
              {option.map((v) => (
                <option key={v} value={v}>
                  {v}
                </option>
              ))}
            </select>
          </div>
          <div className="hidden md:flex border border-black flex items-center">
            <button disabled={currentQuantity === 1} type="button" onClick={decrease}>
              <Icon src="/images/minus.svg" className="h-7 w-7" />
            </button>
            <h4 className="w-10 text-center">{currentQuantity}</h4>
            <button
              disabled={variant.currentlyNotInStock === false}
              type="button"
              onClick={increase}>
              <Icon src="/images/plus.svg" className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-2">
        {!variant.currentlyNotInStock ? (
          <AddToCartButton disabled buttonType="disabled" onClick={handleAddToCartClick}>
            <span>LEIDER AUSVERKAUFT</span>
          </AddToCartButton>
        ) : (
          <AddToCartButton buttonType="primary" onClick={handleAddToCartClick}>
            {addToCartLabel}
          </AddToCartButton>
        )}
      </div>
    </>
  )
}

export default VariantSelect
