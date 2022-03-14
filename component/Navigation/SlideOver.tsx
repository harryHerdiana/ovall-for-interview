import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import Button from '@component/Button'
import ShopContext from '@context/StoreContext'
import Cart from '@component/Cart'
import Icon from '@component/Icon'
import { toEuro } from '@lib/utils'
// import { useRouter } from 'next/router'

// import Button from '../../../../components/shared/Button'
// import ShopContext from '../../../../context/ShopContext'
// import ShoppingCart from '../ShoppingCart'
// import { shopifyToEuro } from '../../../../utils'
// import trackBeginCheckoutEvent from '../../../common/lib/tracking/trackBeginCheckoutEvent'

const SlideOver: React.FC = () => {
  const { checkout, showCart, setShowCart } = React.useContext(ShopContext)

  const handleCheckout = () => {
    // trackBeginCheckoutEvent(checkout.lineItems, cartProducts)
    window.location.href = checkout.webUrl
    // alert('handleCheckout')
  }

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
              <div className="w-screen max-w-sm">
                <div className="h-full flex flex-col bg-white overflow-y-scroll">
                  <div className="px-4 sm:px-6 sticky top-0 bg-white py-2 md:pt-6 md:pb-4 z-40 ">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="flex-grow-1 text-2xl font-titleFont text-gray-900">
                        Dein Warenkorb
                      </Dialog.Title>
                      <div className="h-7 flex flex-shrink-0 items-center">
                        <button
                          className="bg-white rounded-md focus:outline-none"
                          onClick={() => setShowCart(false)}
                          type="button">
                          <span className="sr-only">Warenkorb schließen</span>
                          <XIcon className="h-8 w-8" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="md:mt-6 relative">
                    <Cart />

                    <div className="bg-white bottom-0 sticky w-full  ">
                      <div className="flex flex-col flex-wrap justify-center items-center">
                        <div className="flex flex-wrap w-full justify-between items-center">
                          <div className="rounded px-4 font-titleFont text-2xl">Gesamt:</div>
                          <div className="rounded px-2 font-titleFont text-2xl">
                            {toEuro(checkout.totalPrice)}
                          </div>
                        </div>
                        <div className="text-sm self-end mb-3">
                          <p className="md:text-right sm:pb-0 px-4">inkl. 19% MwSt.</p>
                        </div>

                        <div className="w-full flex flex-col justify-center sm:justify-end px-4">
                          <Button
                            type="button"
                            buttonType="primary"
                            disabled={checkout.lineItems.length === 0}
                            onClick={handleCheckout}>
                            {/* <div className="inline-block mr-4">
                              <ShoppingBagIcon className="h-6 w-6" />
                            </div> */}
                            JETZT SICHER ZUR KASSE
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
