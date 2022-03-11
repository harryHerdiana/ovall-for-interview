import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IFAQPage } from '@lib/types'
import FaqSection from '@component/FaqSection'

import Newsletter from '@component/Newsletter'
// import { useRouter } from 'next/router'
import ProductTeaser from '@component/ProductTeaser'

const FAQPage: React.FC<IFAQPage> = (props: IFAQPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, faqSection } = props
  console.log('faq.props', props)
  // const router = useRouter()
  // const linkToProduct = '/products/ovall-ultraschall-gesichtsreiniger'
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <FaqSection {...faqSection} faqButtonText={faqSection.buttonText} />
      <ProductTeaser {...productTeaserSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.faqPage()

  return {
    props: data
  }
}

export default FAQPage
