import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IAllProductPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import SocialFeed from '@component/SocialFeed'
import HeroSection from '@component/HeroSection'
import Testimonial from '@component/Testimonial'
import AllProductBanner from '@component/AllProductBanner'

const AllProductPage: React.FC<IAllProductPage> = (props: IAllProductPage & IDefaultProps) => {
  const { newsletterSection, allProducts, heroSection, testimonialSection, productImages } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} />
      <AllProductBanner allProducts={allProducts} productImages={productImages} />
      <Testimonial {...testimonialSection} />
      <SocialFeed {...props.appProps.socialFeedSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.allProduct()

  return {
    props: {
      ...data,
      appProps: {
        ...data.appProps,
        i18n: {
          en: '/en/all-product',
          de: '/alle-produkte'
        }
      }
    }
  }
}

export default AllProductPage
