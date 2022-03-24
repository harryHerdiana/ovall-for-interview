import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import ProductTeaser from '@component/ProductTeaser'
import Testimonial from '@component/Testimonial'
import MoodSlideShow from '@component/MoodSlideShow'
import HowToUse from '@component/HowToUse'
import { PRODUCT_PATH } from '@lib/constants'
import SocialFeed from '@component/SocialFeed'
import InfoBannerSection from '@component/InfoBannerSection'
import HomeHeroSection from '@component/HomeHeroSection'
import InfoTechSection from '@component/InfoTechSection'

const HomePage: React.FC<IHomePage> = (props: IHomePage & IDefaultProps) => {
  const router = useRouter()
  const {
    productInfoBannerTechnology,
    infoSection,
    productInfoAccordionSection,
    newsletterSection,
    productTeaserSection,
    heroSection,
    testimonialSection,
    moodSlideshowSection,
    howToUseSection,
    product
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HomeHeroSection {...heroSection} onClickButton={() => router.push(PRODUCT_PATH)} />
      <InfoBannerSection {...infoSection} onClickButton={() => router.push(PRODUCT_PATH)} />
      <MoodSlideShow {...moodSlideshowSection} />
      <Testimonial {...testimonialSection} />
      <InfoTechSection {...productInfoBannerTechnology} />
      <ProductInfoAccordion {...productInfoAccordionSection} />
      <HowToUse {...howToUseSection} />
      <ProductTeaser
        className="mb-80px mt-80px lg:mb-100px"
        product={product}
        {...productTeaserSection}
      />
      <SocialFeed {...props.appProps.socialFeedSection} />
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
