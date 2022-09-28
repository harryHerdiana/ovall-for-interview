import React from 'react'
import { GetStaticProps } from 'next'
import Script from 'next/script'

import Layout from '@component/Layout'
import CleanserStage from '@component/ProductStage/CleanserStage'
import PageDataService from '@lib/PageDataService'
import { ICleanserPage, IDefaultProps } from '@lib/types'
import Newsletter from '@component/Newsletter'
import ProductReview from '@component/ProductReview'
import DescriptionSection from '@component/DescriptionSection'
import SocialFeed from '@component/SocialFeed'
import ProductTeaser from '@component/ProductTeaser'
import MainIngredients from '@component/MainIngredients'
import FaqSection from '@component/FaqSection'

const ProductPage: React.FC<ICleanserPage> = (props: ICleanserPage & IDefaultProps) => {
  const {
    seoTags,
    appProps,
    newsletterSection,
    testimonialSection,
    descriptionSection,
    productTeaserSection,
    ingredientSection,
    faqShampooSection,
    productCleanser
  } = props
  const variantSku = productCleanser.variants[0].sku
  const variant =
    productCleanser.variants.find((v) => v.sku === variantSku) || productCleanser.variants[0]
  return (
    <Layout {...appProps} seoTags={seoTags}>
      <CleanserStage
        product={productCleanser}
        variant={variant}
        activeSku={variantSku}
        {...props}
      />
      <MainIngredients {...ingredientSection} />
      <DescriptionSection {...descriptionSection} />
      <FaqSection items={faqShampooSection.items} faqSubtitle={faqShampooSection.faqTitle} />
      <div className="max-w-site md:mx-auto mb-80px px-2 md:px-0 lg:text-center ">
        <div className="px-2 lg:px-4">
          <span className="kicker">{testimonialSection.kicker}</span>
          <h2 className="mt-2 mb-4">{testimonialSection.title}</h2>
        </div>
        <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
        <div id="looxCarousel" data-show-more="true" />
      </div>
      <ProductTeaser
        className="mb-80px mt-80px lg:mb-100px block lg:h-max lg:min-h-650px"
        product={productCleanser}
        {...productTeaserSection}
      />
      <SocialFeed {...props.appProps.socialFeedSection} />
      <Newsletter {...newsletterSection} />

      <div id="testimonial" className="lg:w-4/5 mx-auto lg:text-center my-12 max-w-fullhd">
        <div className="px-4">
          <span className="kicker">{testimonialSection.kicker}</span>
          <h2 className="mt-2 mb-4">{testimonialSection.title}</h2>
          <ProductReview />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.productShampoo()

  return {
    props: data,
    revalidate: 600
  }
}

export default ProductPage
