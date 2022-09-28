import React from 'react'
import Icon from '@component/Icon'
import Button from '@component/Button'
import { IDatoAccordionItem } from '@modules/datocms/types'
import { Disclosure } from '@headlessui/react'
import { PRODUCT_PATH } from '@lib/constants'
import { useRouter } from 'next/router'
import classNames from 'classnames'

type IAccordionProps = {
  buttonText?: string
  items: IDatoAccordionItem[]
  buttonAction?: 'scroll' | 'link'
  blackLine?: boolean
}

const Accordion: React.FC<IAccordionProps> = ({
  buttonText,
  blackLine,
  items,
  buttonAction = 'link'
}) => {
  const router = useRouter()
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const linkToProductPage = () => {
    router.push(PRODUCT_PATH)
  }
  return (
    <>
      <div className="max-w-content-sm w-full">
        {items.map((item, index) => (
          <Disclosure key={item.text} defaultOpen={index === 0}>
            {({ open }) => (
              <>
                {index !== 0 && <hr className={blackLine ? 'border-black' : 'border-grayLine'} />}
                <Disclosure.Button className="flex justify-between items-center w-full px-4 py-3 text-tiny font-medium text-left rounded-lg  ">
                  <h3 className="w-full md:w-3/4 my-3px">{item.text}</h3>
                  <Icon
                    src="/images/arrow-big.svg"
                    className={classNames({ 'transform rotate-180': open }, 'ml-4 w-8 h-8 ')}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-0 pb-5 text-tiny font-textFont text-left">
                  {item.body}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        ))}
        {buttonText && (
          <div className="w-full md:w-1/2 m-auto  px-4 md:px-0 mt-8">
            <Button
              className="accordion-action-button"
              onClick={buttonAction === 'link' ? linkToProductPage : scrollToTop}
              buttonType="primary"
              type="button">
              {buttonText}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}

export default Accordion
