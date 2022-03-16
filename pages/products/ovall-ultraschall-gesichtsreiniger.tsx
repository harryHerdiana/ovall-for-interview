import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import ProductStage from '@component/ProductStage'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IProductPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import FaqSection from '@component/FaqSection'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import HowToUse from '@component/HowToUse'
import MoodSlideShow from '@component/MoodSlideShow'
import { VariantProvider } from '@context/VariantContext'
import ProductReview from '@component/ProductReview'
import DescriptionSection from '@component/DescriptionSection'

const ProductPage: React.FC<IProductPage> = (props: IProductPage & IDefaultProps) => {
  console.log('PROPS', props)
  const {
    seoTags,
    appProps,
    product,
    productInfoBannerSection,
    newsletterSection,
    faqSection,
    productInfoAccordionSection,
    skinTypeInfoSection,
    productInfoBannerTechnology,
    productInfoBannerFeatures,
    howToUseSection,
    moodSlideshowSection,
    testimonialSection,
    descriptionSection
  } = props
  const [variantSku, setVariantSku] = React.useState(product.variants[0].sku)
  const variant = product.variants.find((v) => v.sku === variantSku)
  return (
    <Layout {...appProps} seoTags={seoTags}>
      <VariantProvider>
        <ProductStage
          {...props}
          product={product}
          variant={variant}
          activeSku={variantSku}
          setVariantSku={setVariantSku}
        />
      </VariantProvider>
      <DescriptionSection {...descriptionSection} />
      <GradientBanner
        {...productInfoBannerSection}
        mobileContentPlacement="bottom"
        contentPlacement="left"
      />
      <MoodSlideShow {...moodSlideshowSection} />
      <HowToUse {...howToUseSection} />
      <GradientBanner
        {...skinTypeInfoSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
      />
      <GradientBanner
        {...productInfoBannerTechnology}
        mobileContentPlacement="top"
        contentPlacement="left"
        imageClassName="px-4 pt-7 lg:pt-10"
      />
      <ProductInfoAccordion {...productInfoAccordionSection} />
      <GradientBanner
        {...productInfoBannerFeatures}
        items={productInfoBannerFeatures.items}
        mobileContentPlacement="bottom"
        contentPlacement="left"
        imageClassName="px-4 pt-7 lg:pt-11"
      />
      <FaqSection {...faqSection} />
      <Newsletter {...newsletterSection} />

      <div id="testimonial" className="lg:w-4/5 mx-auto lg:text-center my-12 max-w-fullhd">
        <div className="px-4">
          <span className="font-subtitleFont text-base uppercase">{testimonialSection.kicker}</span>
          <h2 className="mt-2 mb-4">{testimonialSection.title}</h2>
          <ProductReview />
        </div>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.product()

  return {
    props: data
  }
}

export default ProductPage
