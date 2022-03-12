import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IRatingsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import ProductTeaser from '@component/ProductTeaser'

const RatingsPage: React.FC<IRatingsPage> = (props: IRatingsPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection } = props
  console.log('props', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <ProductTeaser {...productTeaserSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.ratings()

  return {
    props: data
  }
}

export default RatingsPage
