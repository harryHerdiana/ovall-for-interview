import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { PRODUCT_PATH } from '@lib/constants'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, ILandingPage } from '@lib/types'
import LandingpageSlideShow from '@component/LandingpageSlideShow'
import InfoBannerSection from '@component/InfoBannerSection'
import ProductTeaser from '@component/ProductTeaser'
import InfoBannerFeatures from '@component/InfoBannerFeatures'
import HomeHeroSection from '@component/HomeHeroSection'
import ProductReview, { ReviewCarousel } from '@component/ProductReview'

const LandingPage3: React.FC<ILandingPage> = (props: ILandingPage & IDefaultProps) => {
  const router = useRouter()
  const {
    heroSection,
    slideshow,
    porenBanner,
    testimonialSection,
    productTeaserSection,
    product,
    productInfoBannerFeatures,
    skinTypeInfoSection
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps} indexable={false}>
      <HomeHeroSection {...heroSection} onClickButton={() => router.push(PRODUCT_PATH)} />
      <LandingpageSlideShow items={slideshow} />
      <InfoBannerSection {...porenBanner} onClickButton={() => router.push(PRODUCT_PATH)} />
      <ReviewCarousel {...testimonialSection} />
      <ProductTeaser product={product} {...productTeaserSection} />
      <InfoBannerSection {...skinTypeInfoSection} />
      <InfoBannerFeatures {...productInfoBannerFeatures} />
      <div id="testimonial" className="lg:w-4/5 mx-auto lg:text-center my-12 max-w-fullhd">
        <ProductReview />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.getLandingPage('pickel1')

  return {
    props: { ...data, seoTags: { title: 'Sommer', description: '' } }
  }
}

export default LandingPage3
