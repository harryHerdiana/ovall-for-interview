import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import ProductStage from '@component/ProductStage'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IProductPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import Newsletter from '@component/Newsletter'
import FaqSection from '@component/FaqSection'
// import ProductDescription from '@component/ProductDescription'
import ProductInfoAccordion from '@component/ProductInfoAccordion'

const ProductPage: React.FC<IProductPage> = (props: IProductPage & IDefaultProps) => {
  const {
    seoTags,
    menu,
    product,
    productInfoBannerSection,
    newsletterSection,
    faqSection,
    productInfoAccordionSection,
    skinTypeInfoSection,
    footer,
    productInfoBannerTechnology,
    productInfoBannerFeatures
  } = props
  const [variantSku, setVariantSku] = React.useState(product.variants[0].sku)
  const variant = product.variants.find((v) => v.sku === variantSku)
  return (
    <Layout footer={footer} seoTags={seoTags} menu={menu}>
      <ProductStage
        {...props}
        product={product}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
      />
      <GradientBanner
        {...productInfoBannerSection}
        mobileContentPlacement="bottom"
        contentPlacement="left"
      />
      <GradientBanner
        {...skinTypeInfoSection}
        mobileContentPlacement="bottom"
        contentPlacement="right"
      />
      <GradientBanner
        {...productInfoBannerTechnology}
        mobileContentPlacement="top"
        contentPlacement="left"
      />
      <ProductInfoAccordion {...productInfoAccordionSection} />
      <GradientBanner
        {...productInfoBannerFeatures}
        items={productInfoBannerFeatures.items}
        mobileContentPlacement="bottom"
        contentPlacement="left"
      />
      <FaqSection {...faqSection} />
      <Newsletter {...newsletterSection} />
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
