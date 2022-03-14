/* eslint-disable @typescript-eslint/no-shadow */
import React, { useContext, useState, Fragment } from 'react'
import debounce from 'lodash.debounce'
import { Image } from 'react-datocms'
import { TrashIcon } from '@heroicons/react/outline'
import GradientSquare from '@component/GradientSquare'
import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { toEuro } from '@lib/utils'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
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

  const DownArrow = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: 'GrayText' }}
      width="32"
      height="32"
      fill="currentColor"
      stroke="currentColor"
      viewBox="0 0 70 70">
      <path d="M59.84,21.3a1.66,1.66,0,0,0-2.35,0L35.05,43.74,12.51,21.21a1.66,1.66,0,0,0-2.35,2.34L35.05,48.44,59.84,23.65A1.66,1.66,0,0,0,59.84,21.3Z" />
    </svg>
  )

  return (
    <div className="mt-2">
      <div className="grid gap-2 grid-cols-4 text-black px-4">
        <div className="flex items-start">
          {lineItem.variant.image && (
            <GradientSquare variantGradient={lineItem.variant.sku} className="h-20 w-full">
              <Image data={{ ...lineItem.variant.image, aspectRatio: null }} lazyLoad={false} />
            </GradientSquare>
          )}
        </div>

        <div className="col-span-2 font-bold text-tiny md:text-base text-left">
          <div className="flex items-center uppercase font-textFont gap-8">
            {lineItem.title}
            <div className={` w-4 h-4 rounded-full bg-${lineItem.variant.sku}-500`} />
          </div>
          <div className="block text-tiny text-black">
            <div className="flex items-center">
              <div className="py-2 md:py-1  flex items-center justify-between my-3">
                <Listbox value={quantity} onChange={(e) => handleQuantityChange(e)}>
                  <div className="relative w-24 mt-1">
                    <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border-2 border-grayLine cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                      <span className="block truncate">{quantity}</span>
                      <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <DownArrow />
                      </span>
                    </Listbox.Button>
                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0">
                      <Listbox.Options className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {option.map((v) => (
                          <Listbox.Option
                            key={v}
                            className={({ active }) =>
                              `cursor-default select-none relative py-2 pl-10 pr-4 ${
                                active ? 'text-gray-600 bg-gray-200' : 'text-gray-900'
                              }`
                            }
                            value={v}>
                            {({ selected }) => (
                              <>
                                <span
                                  className={`block truncate ${
                                    selected ? 'font-medium' : 'font-normal'
                                  }`}>
                                  {v}
                                </span>
                                {selected ? (
                                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                    <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
              <button
                className="bg-white focus:outline-none text-black p-2 hover:bg-gray-900 rounded-full hover:text-white"
                onClick={handleRemove}
                type="button">
                <span className="sr-only">Artikel entfernen</span>
                <TrashIcon className="h-7 w-7" aria-hidden="true" />
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
