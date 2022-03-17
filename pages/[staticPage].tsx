import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { StructuredText } from 'react-datocms'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IStaticPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'

const ImprintPage: React.FC<IStaticPage> = (props: IStaticPage & IDefaultProps) => {
  const { heroSection, content } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        backgroundColor={heroSection.backgroundColor}
        title={heroSection.title}
        mobileContentPlacement="top"
        contentPlacement="right"
      />

      <section className="static-page-section m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto p-4 md:text-center">
        <StructuredText data={content} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.staticPage(context.params.staticPage as string)

  return {
    props: data
  }
}

export default ImprintPage

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: [
    { params: { staticPage: 'imprint' }, locale: 'en' },
    { params: { staticPage: 'impressum' }, locale: 'de-DE' },
    { params: { staticPage: 'widerruf' }, locale: 'en' },
    { params: { staticPage: 'widerrufsbelehrung' }, locale: 'de-DE' },
    { params: { staticPage: 'shipping' }, locale: 'en' },
    { params: { staticPage: 'versand' }, locale: 'de-DE' },
    { params: { staticPage: 'agb' }, locale: 'en' },
    { params: { staticPage: 'agb' }, locale: 'de-DE' },
    { params: { staticPage: 'payment-options' }, locale: 'en' },
    { params: { staticPage: 'zahlungsmoglichkeiten' }, locale: 'de-DE' },
    { params: { staticPage: 'contact' }, locale: 'en' },
    { params: { staticPage: 'kontakt' }, locale: 'de-DE' },
    { params: { staticPage: 'privacy' }, locale: 'en' },
    { params: { staticPage: 'datenschutz' }, locale: 'de-DE' }
  ],
  fallback: false
})
