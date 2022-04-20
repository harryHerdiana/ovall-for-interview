import React from 'react'
import { IDatoAccordionItem } from '@modules/datocms/types'
import Accordion from '@component/Accordion'

type IProductInfoAccordionProps = {
  buttonText: string
  items: IDatoAccordionItem[]
  buttonAction?: 'scroll' | 'link'
}

const ProductInfoAccordion: React.FC<IProductInfoAccordionProps> = (props) => (
  <section className="m-auto flex flex-col max-w-800px lg:w-3/4 xl:w-1/2 h-auto lg:text-center lg:pt-5 mt-0 mb-100px lg:-mt-5 lg:mb-60px">
    <Accordion {...props} />
  </section>
)

export default ProductInfoAccordion
