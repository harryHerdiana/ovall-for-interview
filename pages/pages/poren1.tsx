import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, ILandingPage } from '@lib/types'

const LandingPage1: React.FC<ILandingPage> = (props: ILandingPage & IDefaultProps) => {
  console.log('PROPS', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <h1>LandingPage 1</h1>
      <h2>landing page</h2>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.getLandingPage()

  return {
    props: { ...data, seoTags: { title: 'Porentiefe Reinigung', description: '' } }
  }
}

export default LandingPage1
