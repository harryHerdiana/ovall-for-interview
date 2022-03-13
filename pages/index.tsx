import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
// import { useRouter } from 'next/router'
import ProductTeaser from '@component/ProductTeaser'

const HomePage: React.FC<IHomePage> = (props: IHomePage & IDefaultProps) => {
  const {
    productInfoBannerTechnology,
    infoSection,
    productInfoAccordionSection,
    newsletterSection,
    productTeaserSection,
    heroSection
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        {...heroSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
        buttonType="primary"
        mobileContentSolidColor
      />
      <GradientBanner {...infoSection} mobileContentPlacement="bottom" contentPlacement="left" />
      <ProductTeaser {...productTeaserSection} />
      <GradientBanner
        {...productInfoBannerTechnology}
        mobileContentPlacement="top"
        contentPlacement="left"
        imageClassName="lg:py-10 pl-4 pt-7"
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
