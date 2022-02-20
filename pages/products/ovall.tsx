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
  console.log('rest')
  // const { locale, locales, asPath } = useRouter()
  // React.useEffect(async () => {
  //   const newCheckout = await shopifyClient.checkout.create()
  //   console.log('newCheck', newCheckout)
  //   const products = await shopifyClient.product.fetchAll()

  //   console.log('rpdocu', products)

  //   const product = products[0]

  //   await shopifyClient.checkout.addLineItems(newCheckout.id, [
  //     { variantId: product.variants[0].id, quantity: 1 }
  //   ])

  //   window.open(newCheckout.webUrl)
  // }, [])
  return (
    <Layout seoTags={seoTags} menu={menu}>
      <ProductStage
        {...props}
        variant={variant}
        activeSku={variantSku}
        setVariantSku={setVariantSku}
      />
      <p>{seoTags.description}</p>
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
