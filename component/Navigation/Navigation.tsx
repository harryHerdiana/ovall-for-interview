import React from 'react'

import Link from 'next/link'
import { ShoppingBagIcon } from '@heroicons/react/outline'
import ShopContext from '@context/StoreContext'
import Menu from './Menu'

interface INavigation {
  menu: any[]
}

const Navigation: React.FC<INavigation> = ({ menu }) => {
  const shopContext = React.useContext(ShopContext)
  console.log('TSET', shopContext.checkout.lineItems)
  const isCartHasItems: boolean = shopContext.checkout.lineItems.length > 0

  const toggleMenu = () => {
    document.body.classList.toggle('menu-is-open')
  }

  const closeMenu = () => document.body.classList.remove('menu-is-open')

  const [isScrollDown, setIsScrollDown] = React.useState(false)
  const handleScroll = () => {
    setIsScrollDown(window.scrollY >= 20)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="mx-auto w-full border-b border-gray-300">
      <div
        className={`section-content-width flex flex-wrap items-center justify-between h-14 bg-white duration-200 ease-in-out ${isScrollDown ? 'md:h-16 lg:h-16 xl:h-16 fullhd:h-18' : 'md:h-20 lg:h-24 xl:h-32'
          }`}>
        <div className="flex z-50 order-first md:w-36 md:-mr-12">
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid,jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
            <a onClick={closeMenu}>
              <img
                src="/images/logo/ovall-logo.svg"
                width="110"
                height="74"
                alt="ovall logo"
                className="h-14 md:h-16 fullhd:h-18 w-auto py-3.5"
              />
            </a>
          </Link>
        </div>

        <Menu items={menu} closeMenu={closeMenu} />

        <div className="flex order-2 md:order-last justify-end w-[100px]">
          <button className="burger mr-1 md:hidden" type="button" onClick={toggleMenu}>
            <span />
          </button>

          <button
            aria-label="Warenkorb"
            className="focus:outline-none relative p-2"
            onClick={() => {
              shopContext.setShowCart(true)
            }}
            type="button">
            <ShoppingBagIcon className="h-6 w-6" />

            {isCartHasItems && (
              <div className="absolute bottom-0 right-0 block h-4 w-4 rounded-full bg-green-600 mb-0.5 mr-0.5 border-2 border-white" />
            )}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
