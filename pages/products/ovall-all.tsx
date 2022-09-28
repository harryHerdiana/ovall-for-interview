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
import { IShopifyProductVariant } from '@modules/shopify/types'

const AllProductPage: React.FC<IAllProductPage> = (props: IAllProductPage & IDefaultProps) => {
  const { newsletterSection, allProducts, heroSection, testimonialSection, productImages } = props

  const [allProductVariants, setAllProductVariants] = React.useState<IShopifyProductVariant[]>([])
  React.useEffect(() => {
    const temp = allProducts.flatMap((i) => i.variants)
    setAllProductVariants(temp)
  }, [allProducts])

  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} />
      <AllProductBanner allProducts={allProductVariants} productImages={productImages} />
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
    props: data,
    revalidate: 600
  }
}

export default AllProductPage
