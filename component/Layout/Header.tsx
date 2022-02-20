import React from 'react'
import { IMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'

type IHeader = {
  menu: IMenu
}

const Header: React.FC<IHeader> = ({ menu }) => (
  <header className="z-50 sticky top-0 bg-white">
    <Navigation menu={menu} />
    <SlideOver />
  </header>
)

export default Header
