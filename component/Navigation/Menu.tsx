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
    <div className="-mx-4 w-screen md:w-1/2 lg:w-2/5 relative order-last md:order-2 flex flex-col overflow-y-auto p-3 pb-16 menu-height bg-white md:mt-5 md:flex-row md:justify-between md:h-auto items-start  md:p-0">
      {items.map((menuItem) => (
        <button
          key={menuItem.id}
          onClick={onClick}
          className="whitespace-nowrap md:first:flex-grow md:last:flex-grow md:first:text-right md:last:text-left cursor-pointer uppercase font-subtitleFont my-2">
          <Link href={menuItem.path} prefetch={false}>
            <div>
              <span>{menuItem.label}</span>
              <hr
                className={`border border-white ${isItemActive(pathname, menuItem) ? 'border-greenLink' : ''
                  }`}
              />
            </div>
          </Link>
        </button>
      ))}
    </div>
  )
}

export default Menu
