import React from 'react'
import { Disclosure } from '@headlessui/react'

import classNames from 'classnames'

import Icon from '@component/Icon'

type IIngredientAccordionProps = {
  items: {
    id: string
    text: string
    body?: string
    promise?: {
      icon: string
      id: string
      text: string
    }[]
  }[]
}

const IngredientAccordion: React.FC<IIngredientAccordionProps> = ({ items }) => (
  <>
    <div className="max-w-content-sm w-full">
      {items.map((item, index) => (
        <Disclosure key={item.text} defaultOpen={index === 0}>
          {({ open }) => (
            <>
              {index !== 0 && <hr className="border-black" />}
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-tiny font-medium text-left rounded-lg  ">
                <h3 className="w-full md:w-3/4 my-3px">{item.text}</h3>
                <Icon
                  src="/images/arrow-big.svg"
                  className={classNames({ 'transform rotate-180': open }, 'ml-4 w-8 h-8 ')}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pt-0 pb-5 text-tiny font-textFont text-left">
                {item.body}
                {item.promise && (
                  <div className="columns-2">
                    {item.promise.map((item2) => (
                      <div key={item2.id} className="flex items-center my-1">
                        <Icon src={`/images/${item2.icon}.svg`} className="h-9 w-9" />
                        <p>{item2.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  </>
)

export default IngredientAccordion
