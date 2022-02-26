import React, { useContext, useState } from 'react'
import debounce from 'lodash.debounce'
import { Image } from 'react-datocms'
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline'

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

  function doIncrement() {
    handleQuantityChange(Number(quantity || 0) + 1)
  }

  function doDecrement() {
    handleQuantityChange(Number(quantity || 0) - 1)
  }

  return (
    <div className="grid gap-4 grid-cols-4 text-black py-6">
      <div className="pt-1.5">
        {lineItem.variant.image && (
          <Image data={{ ...lineItem.variant.image, aspectRatio: null }} lazyLoad={false} />
        )}
      </div>

      <div className="col-span-2 font-bold text-tiny md:text-base text-left">
        {lineItem.title}

        <div className="block text-tiny text-black">
          <div className="flex items-center">
            <div className="border border-gray-300 rounded-full py-2 md:py-1 px-2 md:px-3 flex items-center justify-between my-3">
              <button
                className="focus:outline-none hover:bg-gray-900 rounded-full md:p-2 hover:text-white"
                onClick={doDecrement}
                type="button"
                aria-label="reduzieren">
                <MinusIcon className="h-5 w-5" />
              </button>

              <p className="text-center w-24 md:w-32 text-tiny" aria-label="Menge">
                {lineItem.quantity}
              </p>
              <button
                className="focus:outline-none hover:bg-gray-900 rounded-full md:p-2 hover:text-white"
                onClick={doIncrement}
                type="button"
                aria-label="addieren">
                <PlusIcon className="h-5 w-6" />
              </button>
            </div>

            <button
              className="bg-white focus:outline-none text-black p-2 hover:bg-gray-900 rounded-full hover:text-white md:mt-1 ml-1 md:ml-4"
              onClick={handleRemove}
              type="button">
              <span className="sr-only">Artikel entfernen</span>

              <TrashIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <div className="font-medium text-tiny md:text-base text-right pr-4">
        {toEuro(parseFloat(lineItem.variant.priceV2.amount))}
      </div>
    </div>
  )
}

export default LineItem
