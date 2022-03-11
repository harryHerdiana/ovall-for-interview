import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IFAQPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import { useRouter } from 'next/router'
import PriceDots from '@component/GradientBanner/PriceDots'

const FAQPage: React.FC<IFAQPage> = (props: IFAQPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, product } = props
  console.log('faq.props', props)
  const router = useRouter()
  const linkToProduct = '/products/ovall-ultraschall-gesichtsreiniger'
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        {...productTeaserSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
        buttonType="primary"
        title=""
        onClickButton={() => router.push(linkToProduct)}>
        <PriceDots product={product} selfTitle={productTeaserSection.title} />
      </GradientBanner>

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
