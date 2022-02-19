import React from 'react'
import Link from 'next/link'

const Menu: React.FC<any> = ({ items }) => (
  <ul className="-mx-4 w-screen relative order-last md:order-2 flex flex-col overflow-y-auto p-3 pb-16 menu-height bg-white md:mt-0 md:flex-row md:justify-center md:h-auto md:w-auto md:overflow-y-visible md:p-0 md:ml-0 border-t md:border-t-0 border-gray-300">
    {items.map((menuItem) => (
      <li
        key={menuItem.id}
        className="whitespace-nowrap md:first:flex-grow md:last:flex-grow md:first:text-right md:last:text-left">
        <Link href={menuItem.path} prefetch={false}>
          <span>{menuItem.label}</span>
        </Link>
      </li>
    ))}
  </ul>
)

export default Menu
