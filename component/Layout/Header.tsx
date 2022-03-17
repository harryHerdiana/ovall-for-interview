import React from 'react'
import { ICartText, IProductVariantImage, ITopMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'
import TopNotification from '@component/Navigation/TopNotification'

type IHeader = {
  menu: ITopMenu
  cart: ICartText
  variantImages: IProductVariantImage[]
}

const Header: React.FC<IHeader> = ({ menu, cart, variantImages }) => (
  <header className="z-50 sticky top-0 bg-white">
    <TopNotification notification={menu.notification} />
    <Navigation menu={menu.items} />
    <SlideOver {...cart} variantImages={variantImages} />
  </header>
)

export default Header
