import React from 'react'
import { IDatoAccordionItem } from '@modules/datocms/types'
import Accordion from '@component/Accordion'

type IProductInfoAccordionProps = {
  buttonText: string
  items: IDatoAccordionItem[]
  buttonAction?: 'scroll' | 'link'
}

const ProductInfoAccordion: React.FC<IProductInfoAccordionProps> = (props) => (
  <section className="m-auto flex flex-col max-w-800px md:w-3/4 xl:w-1/2 h-auto md:p-5 md:text-center mt-0 mb-80px lg:mb-100px">
    <Accordion {...props} />
  </section>
)

export default ProductInfoAccordion
