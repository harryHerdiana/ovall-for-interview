import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { HOMEPAGE_QUERY } from '@modules/datocms/api/queries/homepage'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { Pages } from '@lib/enums'
import { IPageProps } from '@lib/types'
// import datoCMSAPI from '@modules/datocms/api/client'

// import shopifyClient from '@modules/shopify/api/buy/client'

interface IHomePageProps extends IPageProps {
  heroSection: any
  infoSection: any
  slideshowSection: any
  testimonialSection: any
  productInfoSection: any
}

const HomePage: React.FC<IHomePageProps> = ({ seoTags, menu, ...data }) => {
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
  console.log('USE_ROUTER', useRouter())
  return (
    <Layout seoTags={seoTags} menu={menu}>
      <div>
        <h1>Ovall HomePage</h1>
        <p>{seoTags.description}</p>
        {/* <div>{JSON.stringify(data.heroSection)}</div>
        <div>{JSON.stringify(data.infoSection)}</div> */}
        {/* <div>{JSON.stringify(data.slideshowSection)}</div> */}
        {/* <div>{JSON.stringify(data.testimonialSection)}</div>
        <div>{JSON.stringify(data.productInfoSection)}</div> */}
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  // const l18nProps = await serverSideTranslations(context.locale, ['common'])
  // const itemTypes = await client.itemType('homepage')
  // const items = await client.itemType.find('homepage')
  const pageDataService = new PageDataService(context)
  // const content = await datoCMSAPI({
  //   query: HOMEPAGE_QUERY,
  //   variables: { locale: 'de' },
  //   preview: false
  // })
  const data = await pageDataService.get(Pages.Homepage)

  console.log('context', data)

  return {
    props: data
  }
}

export default HomePage
