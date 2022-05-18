import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, ILandingPage } from '@lib/types'
import HeroSection from '@component/HeroSection'
import LandingpageSlideShow from '@component/LandingpageSlideShow'
import InfoBannerSection from '@component/InfoBannerSection'
import TestimonialSection from '@component/Testimonial'
import ProductTeaser from '@component/ProductTeaser'
import InfoBannerFeatures from '@component/InfoBannerFeatures'

const LandingPage1: React.FC<ILandingPage> = (props: ILandingPage & IDefaultProps) => {
  const {
    heroSection,
    slideshow,
    porenBanner,
    testimonialSection,
    productTeaserSection,
    product,
    productInfoBannerFeatures
  } = props
  console.log('PROPS', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} />
      <LandingpageSlideShow items={slideshow} />
      <InfoBannerSection
        backgroundColor={porenBanner.backgroundColor}
        image={porenBanner.image}
        title={porenBanner.title}
        body={porenBanner.body}
      />
      <TestimonialSection {...testimonialSection} />
      <ProductTeaser product={product} {...productTeaserSection} />
      <InfoBannerFeatures {...productInfoBannerFeatures} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.getLandingPage()

  return {
    props: { ...data, seoTags: { title: 'Porentiefe Reinigung', description: '' } }
  }
}

export default LandingPage1
