import React from 'react'
import { GetStaticProps } from 'next'

import { trackViewItemEvent } from '@modules/tracking/events'
import Layout from '@component/Layout'
import ProductStage from '@component/ProductStage'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IProductPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import FaqSection from '@component/FaqSection'
import ProductInfoAccordion from '@component/ProductInfoAccordion'
import HowToUse from '@component/HowToUse'
import MoodSlideShow from '@component/MoodSlideShow'
import ProductReview from '@component/ProductReview'
import DescriptionSection from '@component/DescriptionSection'
import SocialFeed from '@component/SocialFeed'
import InfoBannerSection from '@component/InfoBannerSection'
import InfoTechSection from '@component/InfoTechSection'
import InfoBannerFeatures from '@component/InfoBannerFeatures'
import { useRouter } from 'next/router'

const VALID_SKUS = ['Ovall-Pink', 'Ovall-Blue', 'Ovall-Turquoise']

const getVariantFromRouter = (router) => {
  if (!router.isReady) {
    return null
  }
  if (!router.query || !router.query.variant) {
    return null
  }

  if (!VALID_SKUS.includes(router.query.variant)) {
    return null
  }

  return router.query.variant
}

const ProductPage: React.FC<IProductPage> = (props: IProductPage & IDefaultProps) => {
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
  const variant = product.variants.find((v) => v.sku === variantSku) || product.variants[0]

  const v = getVariantFromRouter(useRouter())
  React.useEffect(() => trackViewItemEvent(variant), [variant.sku])
  React.useEffect(() => {
    if (v) setVariantSku(v)
  }, [v])

  return (
    <Layout {...appProps} seoTags={seoTags} indexable={false}>
      <ProductStage
        {...props}
        product={product}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
      />
      <DescriptionSection {...descriptionSection} />
      <InfoBannerSection {...productInfoBannerSection} />
      <MoodSlideShow {...moodSlideshowSection} />
      <HowToUse {...howToUseSection} />
      <InfoBannerSection {...skinTypeInfoSection} />
      <InfoTechSection {...productInfoBannerTechnology} />
      <ProductInfoAccordion {...productInfoAccordionSection} buttonAction="scroll" />
      <InfoBannerFeatures {...productInfoBannerFeatures} />
      <FaqSection {...faqSection} buttonAction="scroll" />
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
  const data = await pageDataService.product()

  return {
    props: data,
    revalidate: 600
  }
}

export default ProductPage
