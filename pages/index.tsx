import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'

const HomePage: React.FC<IHomePage> = (props: IHomePage & IDefaultProps) => {
  const {
    productInfoBannerTechnology,
    infoSection,
    productInfoAccordionSection,
    newsletterSection
  } = props
  console.log('homepage.props', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <h1>Ovall HomePage</h1>
      <div>{JSON.stringify(props.heroSection)}</div>
      <GradientBanner {...infoSection} mobileContentPlacement="top" contentPlacement="left" />

      <GradientBanner
        {...productInfoBannerTechnology}
        mobileContentPlacement="top"
        contentPlacement="left"
      />
      <ProductInfoAccordion {...productInfoAccordionSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.homepage()

  return {
    props: data
  }
}

export default HomePage
