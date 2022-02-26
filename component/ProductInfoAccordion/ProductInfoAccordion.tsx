import React from 'react'
import { IDatoAccordionItem } from '@modules/datocms/types'
import Accordion from '@component/Accordion'

type IProductInfoAccordionProps = {
  buttonText: string
  items: IDatoAccordionItem[]
}

const ProductInfoAccordion: React.FC<IProductInfoAccordionProps> = ({ buttonText, items }) => (
  <section className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto md:p-5 md:text-center my-10">
    <Accordion buttonText={buttonText} items={items} />
  </section>
)

export default ProductInfoAccordion
