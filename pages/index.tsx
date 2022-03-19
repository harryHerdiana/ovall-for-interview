import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import ProductTeaser from '@component/ProductTeaser'
import Testimonial from '@component/Testimonial'
import MoodSlideShow from '@component/MoodSlideShow'
import HowToUse from '@component/HowToUse'
import { PRODUCT_PATH } from '@lib/constants'
import SocialFeed from '@component/SocialFeed'

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
    howToUseSection
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        {...heroSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
        buttonType="primary"
        mobileContentSolidColor
        onClickButton={() => router.push(PRODUCT_PATH)}
      />
      <GradientBanner
        {...infoSection}
        buttonType="secondary"
        mobileContentPlacement="bottom"
        contentPlacement="left"
        onClickButton={() => router.push(PRODUCT_PATH)}
      />
      <MoodSlideShow {...moodSlideshowSection} />
      <Testimonial {...testimonialSection} />
      <GradientBanner
        {...productInfoBannerTechnology}
        mobileContentPlacement="top"
        contentPlacement="left"
        imageClassName="lg:pt-10 pt-7"
      />
      <ProductInfoAccordion {...productInfoAccordionSection} />
      <HowToUse {...howToUseSection} />
      <ProductTeaser {...productTeaserSection} />
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
