import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import { useRouter } from 'next/router'
import PriceDots from '@component/GradientBanner/PriceDots'

const HomePage: React.FC<IHomePage> = (props: IHomePage & IDefaultProps) => {
  const {
    productInfoBannerTechnology,
    infoSection,
    productInfoAccordionSection,
    newsletterSection,
    productTeaserSection,
    product
  } = props
  console.log('homepage.props', props)
  const router = useRouter()
  const linkToProduct = '/products/ovall'
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <h1>Ovall HomePage</h1>
      {/* <div>{JSON.stringify(props.heroSection)}</div> */}
      <GradientBanner {...infoSection} mobileContentPlacement="bottom" contentPlacement="left" />
      <GradientBanner
        {...productTeaserSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
        buttonType="primary"
        title=""
        onClickButton={() => router.push(linkToProduct)}>
        <PriceDots product={product} selfTitle={productTeaserSection.title} />
      </GradientBanner>

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
