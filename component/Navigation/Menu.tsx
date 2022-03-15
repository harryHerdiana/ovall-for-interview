import React from 'react'
import Link from 'next/link'
import { IMenu } from '@lib/types'

type IMenuProps = {
  items: IMenu
  onClick: () => void
}

const Menu: React.FC<IMenuProps> = ({ items, onClick }) => (
  <div className="-mx-4 w-screen md:w-1/2 lg:w-2/5 relative order-last md:order-2 flex flex-col overflow-y-auto p-3 pb-16 menu-height bg-white md:mt-0 md:flex-row justify-evenly md:h-auto md:w-auto md:overflow-y-visible md:p-0 md:ml-0">
    {items.map((menuItem) => (
      <button
        key={menuItem.id}
        onClick={onClick}
        className="whitespace-nowrap md:first:flex-grow md:last:flex-grow md:first:text-right md:last:text-left cursor-pointer uppercase font-subtitleFont">
        <Link href={menuItem.path} prefetch={false}>
          <span>{menuItem.label}</span>
        </Link>
      </button>
    ))}
  </div>
)

export default Menu
