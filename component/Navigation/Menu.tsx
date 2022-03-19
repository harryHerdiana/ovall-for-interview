import React from 'react'
import Link from 'next/link'
import { IMenu, MenuItem } from '@lib/types'
import { useRouter } from 'next/router'

type IMenuProps = {
  items: IMenu
  onClick: () => void
}

const isItemActive = (pathname: string, menuItem: MenuItem): boolean =>
  pathname === menuItem.path || pathname.includes(menuItem.title)

const Menu: React.FC<IMenuProps> = ({ items, onClick }) => {
  const { pathname } = useRouter()

  return (
    <ul className="-mx-4 w-screen md:w-1/2 lg:w-2/5 relative order-last md:order-2 flex flex-col overflow-y-auto p-3 pb-16 menu-height bg-white md:mt-6 md:flex-row md:justify-between md:h-auto items-start  md:p-0">
      {items.map((menuItem) => (
        <li
          key={menuItem.id}
          className="menu-item whitespace-nowrap cursor-pointer uppercase font-subtitleFont my-2">
          <Link href={menuItem.path} prefetch={menuItem.label === 'Shop'}>
            <a
              className="text-black no-underline no-hover hover:text-black"
              href={menuItem.path}
              onClick={onClick}>
              <span>{menuItem.label}</span>
              <hr
                className={`border border-white ${isItemActive(pathname, menuItem) ? 'border-greenLink' : ''
                  }`}
              />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default Menu
