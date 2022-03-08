import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import { useRouter } from 'next/router'
import { title } from 'process'

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
    <Layout footer={props.footer} seoTags={props.seoTags} menu={props.menu}>
      <h1>Ovall HomePage</h1>
      {/* <div>{JSON.stringify(props.heroSection)}</div> */}
      <GradientBanner {...infoSection} mobileContentPlacement="bottom" contentPlacement="left" />
      <GradientBanner
        {...productTeaserSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
        buttonType="primary"
        useDots
        product={product}
        title=""
        selfTitle={productTeaserSection.title}
        onClickButton={() => router.push(linkToProduct)}
      />
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
