import React from 'react'
import { IDatoAccordionItem } from '@modules/datocms/types'
import Accordion from '@component/Accordion'

type IFaqSectionProps = {
  faqButtonText: string
  faqSubtitle: string
  faqTitle: string
  items: IDatoAccordionItem[]
}

const FaqSection: React.FC<IFaqSectionProps> = ({
  faqButtonText,
  faqSubtitle,
  faqTitle,
  items
}) => (
  <section className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto md:p-5 md:text-center my-10">
    <div className="font-subtitleFont text-base px-5 md:px-0">{faqTitle}</div>
    <div className="font-titleFont text-2xl  px-5 md:px-0">{faqSubtitle}</div>
    <Accordion items={items} buttonText={faqButtonText} />
  </section>
)

export default FaqSection
