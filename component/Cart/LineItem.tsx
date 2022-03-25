import { Listbox, Transition } from '@headlessui/react'
import React, { useContext, Fragment } from 'react'
import { Image } from 'react-datocms'
import GradientSquare from '@component/GradientSquare'
import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { toEuro } from '@lib/utils'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { DeleteIcon } from '@component/Icon/Delete'
import Spinner from '@component/Spinner'
import { DownArrow } from '../Icon/DownArrow'

interface IShoppingCartItem {
  lineItem: IShopifyLineItem
  image: DatoCMSResponsiveImage
}

const LineItem: React.FC<IShoppingCartItem> = ({ lineItem, image }) => {
  const [loading, setLoading] = React.useState(false)
  const { updateLineItem, removeLineItem } = useContext(ShopContext)
  const option = [1, 2, 3, 4, 5, 6]

  const updateItem = async (value) => {
    setLoading(true)
    await updateLineItem(lineItem, value)
    setLoading(false)
  }
  const handleQuantityChange = (value) => {
    if (value !== '' && Number(value) < 1) {
      return
    }

    if (Number(value) >= 1) {
      updateItem(value)
    }
  }

  const handleRemove = async () => {
    setLoading(true)
    await removeLineItem(lineItem)
    setLoading(false)
  }

  return (
    <div className="relative px-5">
      {loading && (
        <div className="absolute inset-x-1/2 inset-y-1/4">
          <Spinner />
        </div>
      )}

      <div
        className={`mt-2 transition duration-300 transition-opacity ${loading ? 'opacity-30' : ''
          } `}>
        <div className="grid gap-2 grid-cols-4 text-black">
          <div className="flex items-start">
            {lineItem.variant.image && (
              <GradientSquare variantGradient={lineItem.variant.sku} className="h-18 w-18">
                <Image data={image} lazyLoad={false} />
              </GradientSquare>
            )}
          </div>

          <div className="col-span-2 font-bold text-tiny md:text-base text-left ml-1">
            <div className="flex items-center uppercase font-textFont gap-4">
              {lineItem.title}
              <div className={` w-4 h-4 rounded-full bg-${lineItem.variant.sku}-500`} />
            </div>
            <div className="block text-tiny text-black">
              <div className="flex items-center gap-2">
                <div className="py-2 md:py-1  flex items-center justify-between my-3">
                  <Listbox value={lineItem.quantity} onChange={(e) => handleQuantityChange(e)}>
                    <div className="relative w-24">
                      <Listbox.Button className="relative w-full py-1 pl-3 pr-10 text-left bg-white border border-black cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                        <span className="block truncate">{lineItem.quantity}</span>
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
                                `cursor-default select-none relative py-2 pl-10 pr-4 ${active ? 'text-gray-600 bg-gray-200' : 'text-gray-900'
                                }`
                              }
                              value={v}>
                              {v}
                            </Listbox.Option>
                          ))}
                        </Listbox.Options>
                      </Transition>
                    </div>
                  </Listbox>
                </div>
                <button
                  className="bg-white focus:outline-none text-black p-2 hover:bg-black rounded-full hover:text-white"
                  onClick={handleRemove}
                  type="button">
                  <span className="sr-only">Artikel entfernen</span>
                  <DeleteIcon className="h-7 w-7" />
                </button>
              </div>
            </div>
          </div>
          <div className="font-textFont text-tiny md:text-base text-right">
            {toEuro(parseFloat(lineItem.variant.priceV2.amount))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineItem
