import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import ProductStage from '@component/ProductStage'
import PageDataService from '@lib/PageDataService'
import { IProductPageData } from '@lib/types'

const ProductPage: React.FC<IProductPageData> = (props: IProductPageData) => {
  const { seoTags, menu, shopifyProduct } = props
  const [variantSku, setVariantSku] = React.useState(shopifyProduct.variants[0].sku)
  const variant = shopifyProduct.variants.find((v) => v.sku === variantSku)

  return (
    <Layout seoTags={seoTags} menu={menu}>
      <ProductStage
        {...props}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
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
