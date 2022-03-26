import React, { useContext } from 'react'
import { Image } from 'react-datocms'
import GradientSquare from '@component/GradientSquare'
import { IShopifyLineItem } from '@modules/shopify/types'
import ShopContext from '@context/StoreContext'
import { toEuro } from '@lib/utils'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { DeleteIcon } from '@component/Icon/Delete'
import Spinner from '@component/Spinner'
import QuantitySelect from './QuantitySelect'

interface IShoppingCartItem {
  lineItem: IShopifyLineItem
  image: DatoCMSResponsiveImage
}

const LineItem: React.FC<IShoppingCartItem> = ({ lineItem, image }) => {
  const [loading, setLoading] = React.useState(false)
  const { updateLineItem, removeLineItem } = useContext(ShopContext)

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
    <div className="relative px-4 md:px-5">
      {loading && (
        <div className="absolute inset-x-1/2 inset-y-1/4">
          <Spinner />
        </div>
      )}

      <div
        className={`mt-4 transition duration-300 transition-opacity ${
          loading ? 'opacity-30' : ''
        } `}>
        <div className="grid gap-2 grid-cols-4 text-black">
          <div className="flex items-start">
            {lineItem.variant.image && (
              <GradientSquare variantGradient={lineItem.variant.sku} className="h-20 w-20">
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
                  <QuantitySelect onchange={handleQuantityChange} lineItem={lineItem} />
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
