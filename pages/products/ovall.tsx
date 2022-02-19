import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { Pages } from '@lib/enums'
import { IPageProps } from '@lib/types'
// import datoCMSAPI from '@modules/datocms/api/client'

// import shopifyClient from '@modules/shopify/api/buy/client'

interface IProductPageProps extends IPageProps {
  mainSection: any
}

const ProductPage: React.FC<IProductPageProps> = ({ seoTags, menu, ...data }) => {
  console.log('rest', data)
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
      <div>
        <h1>Ovall ProductPage</h1>
        <p>{seoTags.description}</p>
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.get(Pages.ProductPage)

  console.log('context', data)

  return {
    props: data
  }
}

export default ProductPage
