import React, { Fragment } from 'react'

import { Dialog, Transition } from '@headlessui/react'
import { ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import Button from '@component/Button'
import ShopContext from '@context/StoreContext'
import Cart from '@component/Cart'
// import { useRouter } from 'next/router'

// import Button from '../../../../components/shared/Button'
// import ShopContext from '../../../../context/ShopContext'
// import ShoppingCart from '../ShoppingCart'
// import { shopifyToEuro } from '../../../../utils'
// import trackBeginCheckoutEvent from '../../../common/lib/tracking/trackBeginCheckoutEvent'

const SlideOver: React.FC = () => {
  const { checkout, loading, showCart, setShowCart } = React.useContext(ShopContext)

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
              <div className="w-screen max-w-2xl">
                <div className="h-full flex flex-col bg-white shadow-bottom overflow-y-scroll">
                  <div className="px-4 sm:px-6 sticky top-0 bg-white py-2 md:pt-6 md:pb-4 z-40 shadow-bottom">
                    <div className="flex items-start justify-between">
                      <div className="h-7 flex flex-shrink-0 items-center">
                        <button
                          className="bg-white rounded-md focus:outline-none"
                          onClick={() => setShowCart(false)}
                          type="button">
                          <span className="sr-only">Warenkorb schließen</span>

                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>

                      <Dialog.Title className="flex-grow-1 text-base md:text-xl font-extrabold text-gray-900">
                        Warenkorb
                      </Dialog.Title>

                      <div className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="md:mt-6 relative flex-1">
                    <Cart />

                    <div className="bg-white bottom-0 sticky pt-6 pb-8 w-full shadow-top">
                      <div className="flex flex-wrap justify-center px-4 items-center">
                        <div className="flex flex-wrap w-full sm:w-1/2 justify-center sm:justify-start items-center">
                          <div className="rounded px-4 font-bold text-base">Gesamtsumme:</div>
                          <div className="rounded px-2 font-bold text-base">
                            {checkout.totalPrice}
                          </div>
                          <p className="w-full text-sm text-gray-400 text-center md:text-left pt-2 pb-4 sm:pb-0 px-4">
                            Preisangaben inkl. gesetzl. MwSt., versandkostenfrei
                          </p>
                        </div>

                        <div className="w-full sm:w-1/2 flex justify-center sm:justify-end sm:pr-4">
                          <Button
                            backgroundColor={`${checkout.lineItems.length === 0 && 'opacity-25'
                              } bg-black hover:bg-pine-green-500 hover:shadow-lg flex items-center px-8 md:py-4 py-3`}
                            disabled={checkout.lineItems.length === 0}
                            onClick={handleCheckout}
                            textColor="text-white">
                            <div className="inline-block mr-4">
                              <ShoppingBagIcon className="h-6 w-6" />
                            </div>
                            Zur Kasse
                          </Button>
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
