import React from 'react'

import Link from 'next/link'
import Icon from '@component/Icon'
import ShopContext from '@context/StoreContext'
import { IMenu } from '@lib/types'
import Menu from './Menu'
import TopNotification from './TopNotification'

interface INavigation {
  menu: IMenu
  notification: string
}

const Navigation: React.FC<INavigation> = ({ menu, notification }) => {
  const shopContext = React.useContext(ShopContext)
  const isCartHasItems: boolean = shopContext.checkout.lineItems.length > 0
  const toggleMenu = () => {
    document.body.classList.toggle('menu-is-open')
  }

  const closeMenu = () => document.body.classList.remove('menu-is-open')

  const itemsQuantity = shopContext.checkout.lineItems
    .map((lineItem) => lineItem.quantity)
    .reduce((a, b) => a + b, 0)

  return (
    <>
      <nav className="mx-auto w-full">
        <TopNotification notification={notification} />
        <div className="section-content-width flex md:px-8 flex-wrap items-center justify-between h-18 bg-white md:h-100px ">
          <button className="burger order-first mr-1 md:hidden" type="button" onClick={toggleMenu}>
            <span />
          </button>
          <div className="flex z-50 md:w-max ">
            <Link href="/">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
              <a onClick={closeMenu}>
                <Icon src="/images/ovall-logo.png" className="h-6 md:h-8 mx-auto md:mx-0" />
              </a>
            </Link>
          </div>
          <Menu items={menu} onClick={closeMenu} />
          <button
            aria-label="Warenkorb"
            className="focus:outline-none md:order-last relative p-2"
            onClick={() => {
              shopContext.setShowCart(true)
            }}
            type="button">
            <Icon src="/images/cart.svg" className="h-8 w-8 mt-3" />

            {isCartHasItems && (
              <div className="absolute top-1 right-0 block h-4 w-4 rounded-full bg-greenLink mb-0.5 mr-0.5 border-2 border-white">
                <div className="text-xxs">{itemsQuantity}</div>
              </div>
            )}
          </button>
        </div>
      </nav>
    </>
  )
}

export default Navigation
