import React from 'react'
import Script from 'next/script'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { trackViewItemEvent } from '@modules/tracking/events'
import Layout from '@component/Layout'
import ProductStage2 from '@component/ProductStage/ProducStage2'
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

  const [variantSku, setVariantSku] = React.useState(product.variants[1].sku)
  const variant = product.variants.find((v) => v.sku === variantSku) || product.variants[0]

  const v = getVariantFromRouter(useRouter())
  React.useEffect(() => trackViewItemEvent(variant), [variant.sku])
  React.useEffect(() => {
    if (v) setVariantSku(v)
  }, [v])

  return (
    <Layout {...appProps} seoTags={seoTags} indexable={false}>
      <ProductStage2
        {...props}
        product={product}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
      />
      <DescriptionSection {...descriptionSection} showVideo />
      <div className="max-w-site md:mx-auto mb-80px px-2 md:px-0 lg:text-center">
        <div className="px-2 lg:px-4">
          <span className="kicker">{testimonialSection.kicker}</span>
          <h2 className="mt-2 mb-4">{testimonialSection.title}</h2>
        </div>
        <Script src="//loox.io/widget/loox.js?shop=ovallskincare.myshopify.com" />
        <div id="looxCarousel" data-show-more="true" />
      </div>
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
