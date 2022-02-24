import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import ProductStage from '@component/ProductStage'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IProductPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'

const ProductPage: React.FC<IProductPage> = (props: IProductPage & IDefaultProps) => {
  const { seoTags, menu, product, productInfoBannerSection } = props
  const [variantSku, setVariantSku] = React.useState(product.variants[0].sku)
  const variant = product.variants.find((v) => v.sku === variantSku)
  return (
    <Layout seoTags={seoTags} menu={menu}>
      <ProductStage
        {...props}
        product={product}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
      />
      <GradientBanner
        body={productInfoBannerSection.body}
        title={productInfoBannerSection.title}
        backgroundColor={productInfoBannerSection.backgroundColor}
        buttonText={productInfoBannerSection.buttonText}
        image={productInfoBannerSection.image}
        contentPlacement="right"
      />
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
