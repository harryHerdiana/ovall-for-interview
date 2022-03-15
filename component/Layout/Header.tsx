import React from 'react'
import { ICartText, ITopMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'
import TopNotification from '@component/Navigation/TopNotification'

type IHeader = {
  menu: ITopMenu
  cart: ICartText
}

const Header: React.FC<IHeader> = ({ menu, cart }) => {
  console.log(menu)
  return (
    <header className="z-50 sticky top-0 bg-white">
      <TopNotification notification={menu.notification} />
      <Navigation menu={menu.items} />
      <SlideOver {...cart} />
    </header>
  )
}

export default Header
