import React from 'react'
import { ICartText, ITopMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'

type IHeader = {
  menu: ITopMenu
  cart: ICartText
}

const Header: React.FC<IHeader> = ({ menu, cart }) => (
  <header className="z-50 sticky top-0 bg-white">
    <Navigation menu={menu.items} />
    <SlideOver {...cart} />
  </header>
)

export default Header
