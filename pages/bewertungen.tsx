import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IRatingsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import ProductTeaser from '@component/ProductTeaser'
import ProductReview from '@component/ProductReview'
import GradientBanner from '@component/GradientBanner'
import TransparencySection from '@component/TransparencySection'
import SocialFeed from '@component/SocialFeed'
import HeroSection from '@component/HeroSection'

const RatingsPage: React.FC<IRatingsPage> = (props: IRatingsPage & IDefaultProps) => {
  const {
    product,
    newsletterSection,
    productTeaserSection,
    heroSection,
    productFeatureSection,
    transparencySection
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} />
      <ProductReview />
      <TransparencySection
        title={transparencySection.title}
        subtitle={transparencySection.kicker}
        body={transparencySection.text}
      />
      <GradientBanner
        {...productFeatureSection}
        items={productFeatureSection.items}
        mobileContentPlacement="bottom"
        contentPlacement="left"
        className="mb-50px"
      />

      <ProductTeaser className="mb-80px mt-80px" product={product} {...productTeaserSection} />
      <SocialFeed {...props.appProps.socialFeedSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.ratings()

  return {
    props: data
  }
}

export default RatingsPage
