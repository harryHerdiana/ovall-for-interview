import React from 'react'
import { Disclosure } from '@headlessui/react'

import ResponsiveImage from '@component/ResponsiveImage'
import Icon from '@component/Icon'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

interface IProductAccordionProps {
  items: {
    text: string
    subItems: { heading: string; body: string }[]
    image?: DatoCMSResponsiveImage
  }[]
}

const ProducStageAccordion: React.FC<IProductAccordionProps> = ({ items }) => (
  <div className="max-w-content-sm md:pl-10">
    {items.map((item, index) => (
      <Disclosure key={item.text} defaultOpen={index === 0}>
        {({ open }) => (
          <>
            {index !== 0 && <hr className="border-grayLine" />}
            <Disclosure.Button className="flex justify-between items-center w-full  md:px-4 py-3 text-tiny font-medium text-left rounded-lg  ">
              <h3 className="w-full md:w-3/4 my-3px">{item.text}</h3>
              <Icon
                src="/images/arrow-big.svg"
                className={`${open ? 'transform rotate-180' : ''} ml-4 w-8 h-8 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" md:px-4 pt-0 pb-5 text-tiny font-textFont text-left flex md:flex-row flex-col">
              <div className="">
                {item.subItems.map((subItem) => (
                  <div key={subItem.heading} className="mb-4">
                    <h4 className="font-bold mb-1">{subItem.heading}</h4>
                    <p>{subItem.body}</p>
                  </div>
                ))}
              </div>
              {item.image && <ResponsiveImage image={item.image} className="drop-shadow-2xl" />}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
)

export default ProducStageAccordion
