import React from 'react'
import { ICartText, IProductVariantImage, ITopMenu } from '@lib/types'
import Navigation from '@component/Navigation'
import SlideOver from '@component/Navigation/SlideOver'

type IHeader = {
  menu: ITopMenu
  cart: ICartText
  variantImages: IProductVariantImage[]
}

const Header: React.FC<IHeader> = ({ menu, cart, variantImages }) => {
  const [isScrollDown, setIsScrollDown] = React.useState(false)
  const handleScroll = () => {
    setIsScrollDown(window.scrollY >= 20)
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [isScrollDown])
  return (
    <header
      className={`transition transform ease-in-out delay-150 z-50 sticky top-0 bg-white mb-2 lg:mb-10 h-12 xl:h-full ${
        isScrollDown && 'sm:-translate-y-10 -translate-y-7'
      } `}>
      <Navigation menu={menu.items} notification={menu.notification} />
      <SlideOver {...cart} variantImages={variantImages} />
    </header>
  )
}

export default Header
