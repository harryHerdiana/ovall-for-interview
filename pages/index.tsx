import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
// import { HOMEPAGE_QUERY } from '@modules/datocms/api/queries/homepage'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { Pages } from '@lib/enums'
// import datoCMSAPI from '@modules/datocms/api/client'

// import shopifyClient from '@modules/shopify/api/buy/client'

interface IHomepageProps {
  description: string
  title: string
  heroSection: any
}

const HomePage: React.FC<IHomepageProps> = ({ description, title, ...rest }) => {
  const { heroSection } = rest
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
    <Layout description={description} title={title}>
      <div>
        <h1>Ovall HomePage</h1>
        <p>{description}</p>
        <div>{JSON.stringify(heroSection)}</div>
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

  console.log('context', context)

  return {
    props: {
      ...data,
      description: 'Tbd'
    }
  }
}

export default HomePage
