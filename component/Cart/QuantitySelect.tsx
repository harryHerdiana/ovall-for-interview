import { Listbox, Transition } from '@headlessui/react'
import React, { Fragment } from 'react'
import { IShopifyLineItem } from '@modules/shopify/types'
import { DownArrow } from '@component/Icon/DownArrow'

type IQuantitySelectProps = {
  onchange: (e: any) => void
  lineItem: IShopifyLineItem
}

const QuantitySelect: React.FC<IQuantitySelectProps> = ({ onchange, lineItem }) => {
  const option = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <Listbox value={lineItem.quantity} onChange={onchange}>
        <div className="relative w-24 mt-1">
          <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white border border-black cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
            <span className="block truncate">{lineItem.quantity}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <DownArrow />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0">
            <Listbox.Options className="z-50 absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {option.map((v) => (
                <Listbox.Option
                  key={v}
                  className={({ active }) =>
                    `cursor-default select-none relative py-2 pl-10 pr-4 ${
                      active ? 'text-gray-600 bg-gray-200' : 'text-gray-900'
                    }`
                  }
                  value={v}>
                  {v}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  )
}

export default QuantitySelect
