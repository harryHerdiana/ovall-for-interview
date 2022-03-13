import React, { useContext, useState } from 'react'
import debounce from 'lodash.debounce'
import { Image } from 'react-datocms'
import { TrashIcon } from '@heroicons/react/outline'
import GradientSquare from '@component/GradientSquare'
import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { toEuro } from '@lib/utils'

interface IShoppingCartItem {
  lineItem: IShopifyLineItem
}

const LineItem: React.FC<IShoppingCartItem> = ({ lineItem }) => {
  const [quantity, setQuantity] = useState(lineItem.quantity)
  const { updateLineItem, removeLineItem } = useContext(ShopContext)
  const updateItem = debounce((value) => updateLineItem(lineItem, value), 300)
  const debouncedLineItemUpdate = React.useCallback((value) => updateItem(value), [])
  const option = [1, 2, 3, 4, 5, 6, 7]
  const handleQuantityChange = (value) => {
    if (value !== '' && Number(value) < 1) {
      return
    }

    setQuantity(value)

    if (Number(value) >= 1) {
      debouncedLineItemUpdate(value)
    }
  }

  const handleRemove = () => {
    removeLineItem(lineItem)
  }

  return (
    <div className="">
      <div className="grid gap-2 grid-cols-4 text-black px-4">
        <div className="flex items-center">
          {lineItem.variant.image && (
            <GradientSquare variantGradient={lineItem.variant.sku} className="h-20 w-full">
              <Image data={{ ...lineItem.variant.image, aspectRatio: null }} lazyLoad={false} />
            </GradientSquare>
          )}
        </div>

        <div className="col-span-2 font-bold text-tiny md:text-base text-left">
          <div className="flex items-center uppercase font-textFont gap-3">
            {lineItem.title}
            <div className={` w-4 h-4 rounded-full bg-${lineItem.variant.sku}-500`} />
          </div>
          <div className="block text-tiny text-black">
            <div className="flex items-center">
              <div className="border border-gray-300 rounded-full py-2 md:py-1 px-2 md:px-3 flex items-center justify-between my-3">
                <select
                  value={quantity}
                  onChange={(e) => handleQuantityChange(+e.target.value)}
                  className="w-20 lg:w-24">
                  {option.map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
              </div>

              <button
                className="bg-white focus:outline-none text-black p-2 hover:bg-gray-900 rounded-full hover:text-white"
                onClick={handleRemove}
                type="button">
                <span className="sr-only">Artikel entfernen</span>
                <TrashIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
        <div className="font-textFont text-tiny md:text-base text-right pr-4">
          {toEuro(parseFloat(lineItem.variant.priceV2.amount))}
        </div>
      </div>
      {lineItem.hasPreviousPage === false && <hr className="border-grayLine w-full" />}
    </div>
  )
}

export default LineItem
