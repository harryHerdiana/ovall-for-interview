import React from 'react'
import { ITopMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'

type IHeader = {
  menu: ITopMenu
}

const Header: React.FC<IHeader> = ({ menu }) => (
  <header className="z-50 sticky top-0 bg-white">
    <Navigation menu={menu.items} />
    <SlideOver />
  </header>
)

export default Header
