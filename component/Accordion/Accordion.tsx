import React from 'react'
import Icon from '@component/Icon'
import Button from '@component/Button'
import { IDatoAccordionItem } from '@modules/datocms/types'
import { Disclosure } from '@headlessui/react'

type IAccordionProps = {
  buttonText: string
  items: IDatoAccordionItem[]
}

const Accordion: React.FC<IAccordionProps> = ({ buttonText, items }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  return (
    <>
      <div className="my-10">
        <Disclosure defaultOpen>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-tiny font-medium text-left rounded-lg  ">
                <div className="w-full md:w-3/4 text-base font-subtitleFont uppercase">
                  {items[0].text}
                </div>
                <Icon
                  src="/images/arrow-big.svg"
                  className={`${open ? 'transform rotate-180' : ''} ml-4 w-8 h-8 `}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-5 pt-4 pb-2 text-tiny font-textFont text-left">
                {items[0].body}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        {items.slice(1).map((item) => (
          <Disclosure key={item.text}>
            {({ open }) => (
              <>
                <hr />
                <Disclosure.Button className="flex justify-between items-center w-full px-4 py-2 text-tiny font-medium text-left rounded-lg  ">
                  <h3 className="w-full md:w-3/4">{item.text}</h3>
                  <Icon
                    src="/images/arrow-big.svg"
                    className={`${open ? 'transform rotate-180' : ''} ml-4 w-8 h-8 `}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-5 pt-4 pb-2 text-tiny font-textFont text-left">
                  {item.body}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
      </div>
      <div className="w-full md:w-1/2 m-auto  px-5 md:px-0">
        <Button onClick={scrollToTop} buttonType="primary" type="button">
          {buttonText}
        </Button>
      </div>
    </>
  )
}

export default Accordion
