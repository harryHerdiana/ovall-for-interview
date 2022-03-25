import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import Button from '@component/Button'
import ShopContext from '@context/StoreContext'
import Cart from '@component/Cart'
import Icon from '@component/Icon'
import { toEuro, toEuroNS, hasGenericDiscount } from '@lib/utils'
import { ICartText, IProductVariantImage } from '@lib/types'
import { trackBeginCheckoutEvent } from '@modules/tracking/events/trackBeginCheckoutEvent'
import Subtotal from '@component/Cart/Subtotal'
import ShippingCost from '@component/Cart/ShippingCost'
import Discount from '@component/Cart/Discount'

interface IProps extends ICartText {
  variantImages: IProductVariantImage[]
}
const SlideOver: React.FC<IProps> = (props) => {
  const { checkout, showCart, setShowCart } = React.useContext(ShopContext)
  const handleCheckout = () => {
    trackBeginCheckoutEvent(checkout.lineItems)
    window.location.href = checkout.webUrl
  }

  const hasDiscount = hasGenericDiscount(checkout) && checkout.lineItems.length > 0

  return (
    <Transition.Root show={showCart} as={Fragment}>
      <Dialog
        as="div"
        static
        className="fixed inset-0 overflow-hidden z-50"
        open={showCart}
        onClose={setShowCart}>
        <div className="absolute inset-0 overflow-hidden bg-gray-700-75">
          <Dialog.Overlay className="absolute inset-0" />

          <div className="fixed inset-y-0 right-0 max-w-full flex ">
            <Transition.Child
              as={Fragment}
              enter="transform transition ease-in-out duration-500 sm:duration-700"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transform transition ease-in-out duration-500 sm:duration-700"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full">
              <div className="w-screen max-w-[22rem]">
                <div className="h-full flex flex-col bg-white overflow-y-scroll">
                  <div className="px-4 sm:px-6 sticky top-0 bg-white py-2 md:pt-6 md:pb-4 z-40 ">
                    <div className="flex items-center justify-between">
                      <Dialog.Title className="my-2 lg:-ml-2 ">
                        <div className="font-subtitleFont text-2xl font-normal">
                          {props.cartName}
                        </div>
                      </Dialog.Title>
                      <div className="h-7 flex flex-shrink-0 items-center">
                        <button
                          className="close-cart bg-white rounded-md focus:outline-none"
                          onClick={() => setShowCart(false)}
                          type="button">
                          <span className="sr-only">Warenkorb schließen</span>
                          <XIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="md:mt-0 relative">
                    <Cart {...props} />

                    <div className="bg-white bottom-0 sticky w-full  ">
                      <div className="flex flex-col flex-wrap justify-center items-center px-5">
                        <div className="flex w-full font-subtitleFont">
                          <Subtotal checkout={checkout} label={props.subtotalLabel || 'Subtotal'} />
                        </div>

                        {hasDiscount && (
                          <Discount checkout={checkout} label={props.discountLabel} />
                        )}

                        <ShippingCost
                          label={props.shippingCostLabel}
                          value={props.shippingCostValue}
                        />

                        <div className="flex flex-wrap w-full justify-between items-center font-subtitleFont font-bold text-2xl mt-10">
                          <div>{props.total}:</div>
                          <div>{toEuroNS(checkout.totalPrice)}</div>
                        </div>
                        <div className="text-sm self-end mb-3">
                          <p className="md:text-right sm:pb-0">{props.taxInfo}</p>
                        </div>

                        <div className="w-full flex flex-col justify-center sm:justify-end">
                          <Button
                            type="button"
                            buttonType="primary"
                            disabled={checkout.lineItems.length === 0}
                            onClick={handleCheckout}>
                            {/* <div className="inline-block mr-4">
                              <ShoppingBagIcon className="h-6 w-6" />
                            </div> */}
                            {props.buttonText}
                          </Button>
                          <div className="flex justify-between w-full mt-2">
                            <Icon src="/images/pay-paypal.svg" className="w-12 h-12" />
                            <Icon src="/images/pay-amex.svg" className="w-12 h-12" />
                            <Icon src="/images/pay-klarna-rechnung.svg" className="w-12 h-12" />
                            <Icon src="/images/pay-klarna-sofort.svg" className="w-12 h-12" />
                            <Icon src="/images/pay-mastercard.svg" className="w-12 h-12" />
                            <Icon src="/images/pay-visa.svg" className="w-12 h-12" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default SlideOver
