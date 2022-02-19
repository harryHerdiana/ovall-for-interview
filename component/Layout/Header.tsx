import React from 'react'
import { Menu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'

type IHeader = {
  menu: Menu
}

const Header: React.FC<IHeader> = ({ menu }) => (
  <header className="z-50 sticky top-0 bg-white">
    <Navigation menu={menu} />
    <SlideOver />
  </header>
)

export default Header
