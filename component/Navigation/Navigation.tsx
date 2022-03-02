import React from 'react'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import Icon from '@component/Icon'
import ShopContext from '@context/StoreContext'
import { IMenu } from '@lib/types'
import Menu from './Menu'

interface INavigation {
  menu: IMenu
}

const Navigation: React.FC<INavigation> = ({ menu }) => {
  const shopContext = React.useContext(ShopContext)
  const isCartHasItems: boolean = shopContext.checkout.lineItems.length > 0
  const toggleMenu = () => {
    document.body.classList.toggle('menu-is-open')
  }

  const closeMenu = () => document.body.classList.remove('menu-is-open')

  const [isScrollDown, setIsScrollDown] = React.useState(false)
  const handleScroll = () => {
    setIsScrollDown(window.scrollY >= 20)
  }
  const itemsQuantity = shopContext.checkout.lineItems
    .map((lineItem) => lineItem.quantity)
    .reduce((a, b) => a + b, 0)
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="mx-auto w-full border-b border-gray-300">
      <div
        className={`section-content-width flex flex-wrap items-center justify-between h-14 bg-white duration-200 ease-in-out ${
          isScrollDown ? 'md:h-16 lg:h-16 xl:h-16 fullhd:h-18' : 'md:h-20 lg:h-24 xl:h-32'
        }`}>
        <button className="burger order-first mr-1 md:hidden" type="button" onClick={toggleMenu}>
          <span />
        </button>
        <div className="flex z-50 md:w-36 md:-mr-12 ">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <a onClick={closeMenu}>
              <img
                src="/images/ovall-logo.png"
                width="110"
                height="74"
                alt="ovall logo"
                className="h-14 md:h-16 fullhd:h-18 w-auto py-3.5"
              />
            </a>
          </Link>
        </div>
        <Menu items={menu} />
        <button
          aria-label="Warenkorb"
          className="focus:outline-none md:order-last relative p-2"
          onClick={() => {
            shopContext.setShowCart(true)
          }}
          type="button">
          <Icon src="/images/cart.svg" className="h-8 w-8" />

          {isCartHasItems && (
            <div className="absolute top-1 right-0 block h-4 w-4 rounded-full bg-greenLink mb-0.5 mr-0.5 border-2 border-white">
              <div className="text-xxs">{itemsQuantity}</div>
            </div>
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navigation
