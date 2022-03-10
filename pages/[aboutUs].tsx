import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IAboutUsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'

const AboutUsPage: React.FC<IAboutUsPage> = (props: IAboutUsPage & IDefaultProps) => {
  const { newsletterSection } = props
  console.log('aboutus.props', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <h1>Ovall About US</h1>

      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.aboutUs()

  return {
    props: data
  }
}

export default AboutUsPage

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { aboutUs: 'about-us' }, locale: 'en' },
    { params: { aboutUs: 'ueber-uns' }, locale: 'de-DE' }
  ],
  fallback: false
})
