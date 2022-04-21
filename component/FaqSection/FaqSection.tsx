import React from 'react'
import { IDatoAccordionItem } from '@modules/datocms/types'
import Accordion from '@component/Accordion'

type IFaqSectionProps = {
  faqButtonText?: string
  faqSubtitle?: string
  faqTitle?: string
  items: IDatoAccordionItem[]
  buttonAction?: 'link' | 'scroll'
}

const FaqSection: React.FC<IFaqSectionProps> = ({
  faqButtonText,
  faqSubtitle,
  faqTitle,
  items,
  buttonAction = 'link'
}) => (
  <section className="m-auto flex flex-col max-w-site lg:w-3/4 xl:w-1/2 h-auto lg:p-5 lg:text-center mt-50px lg:my-80px mb-100px lg:items-center">
    <div className=" px-4 lg:px-0 kicker">{faqTitle}</div>
    <h2 className="px-4 lg:px-0 lg:mt-4 mt-2 mb-6 lg:mb-12 max-w-800px">{faqSubtitle}</h2>
    <Accordion items={items} buttonText={faqButtonText} buttonAction={buttonAction} />
  </section>
)

export default FaqSection
