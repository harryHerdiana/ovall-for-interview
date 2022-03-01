import React from 'react'
import { GetStaticProps } from 'next'

import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IHomePage } from '@lib/types'

const HomePage: React.FC<IHomePage> = (props: IHomePage & IDefaultProps) => (
  <Layout footer={props.footer} seoTags={props.seoTags} menu={props.menu}>
    <h1>Ovall HomePage</h1>
    <div>{JSON.stringify(props.heroSection)}</div>
    <div>{JSON.stringify(props.infoSection)}</div>
    <div>{JSON.stringify(props.slideshowSection)}</div>
    <div>{JSON.stringify(props.testimonialSection)}</div>
    <div>{JSON.stringify(props.productInfoSection)}</div>
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
