import React from 'react'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IPageProps, IHomePageData } from '@lib/types'

const HomePage: React.FC<IHomePageProps> = ({ seoTags, menu, ...data }) => (
  <Layout seoTags={seoTags} menu={menu}>
    <h1>Ovall HomePage</h1>
    <p>{seoTags.description}</p>
    <div>{JSON.stringify(data.heroSection)}</div>
    {/* <div>{JSON.stringify(data.infoSection)}</div> */}
    {/* <div>{JSON.stringify(data.slideshowSection)}</div> */}
    {/* <div>{JSON.stringify(data.testimonialSection)}</div>
        <div>{JSON.stringify(data.productInfoSection)}</div> */}
  </Layout>
)

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.homepage()

  return {
    props: data
  }
}

export default HomePage
