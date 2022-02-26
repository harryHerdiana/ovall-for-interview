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
        {items.map((item) => (
          <Disclosure key={item.text}>
            {({ open }) => (
              <>
                <hr />
                <Disclosure.Button className="flex justify-between items-center w-full px-5 py-2 text-tiny font-medium text-left rounded-lg  ">
                  <span className="font-subtitleFont uppercase text-base w-full md:w-3/4">
                    {item.text}
                  </span>
                  <Icon
                    src="/images/arrow-big.svg"
                    className={`${open ? 'transform rotate-180' : ''}  w-8 h-8 `}
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
