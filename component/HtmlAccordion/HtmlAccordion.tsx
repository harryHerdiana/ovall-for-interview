import React from 'react'
import Icon from '@component/Icon'
import { IHtmlAccordionItem } from '@lib/types'
import { Disclosure } from '@headlessui/react'
import { StructuredText, Image } from 'react-datocms'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

type IHtmlAccordionProps = {
  items: IHtmlAccordionItem[]
}

type IBlockRecord = {
  record: {
    id: string
    __typename: string
    image: {
      responsiveImage: DatoCMSResponsiveImage
    }
  }
}

const BlockImage: React.FC<IBlockRecord> = ({ record }) => (
  <Image data={record.image.responsiveImage} className="float-right" />
)

const HtmlAccordion: React.FC<IHtmlAccordionProps> = ({ items }) => (
  <div className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto md:p-5 md:text-center my-10">
    {items.map((item, index) => (
      <Disclosure key={item.id} defaultOpen={index === 0}>
        {({ open }) => (
          <>
            {index !== 0 && <hr />}
            <Disclosure.Button className="flex relative justify-between items-center w-full px-4 py-2 text-tiny font-medium text-left ">
              <div className="flex gap-4">
                <span className=" font-subtitleFont text-base uppercase font-semibold ">
                  {item.title}
                </span>
                <span className=" font-subtitleFont text-base uppercase ">{item.subtitle}</span>
              </div>
              <Icon
                src="/images/arrow-big.svg"
                className={`${open ? 'transform rotate-180' : ''} ml-4 w-8 h-8 `}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-5 pt-4 pb-2 text-tiny font-textFont text-left">
              <StructuredText
                data={item.body}
                renderBlock={({ record }: IBlockRecord) => {
                  switch (record.__typename) {
                    case 'ImageRecord':
                      return <BlockImage record={record} />
                    default:
                      return null
                  }
                }}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
)

export default HtmlAccordion
