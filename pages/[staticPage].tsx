import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { StructuredText } from 'react-datocms'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IStaticPage } from '@lib/types'
import { STATIC_PAGE_I18N, STATIC_PAGE_PATHS } from '@lib/constants'
import HeroSection from '@component/HeroSection'

const ImprintPage: React.FC<IStaticPage> = (props: IStaticPage & IDefaultProps) => {
  const { heroSection, content } = props

  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} kicker={heroSection.title} title="" />
      <section className="static-page-section m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto p-4 md:text-left lg:mt-[40px]">
        <StructuredText data={content} />
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { staticPage } = context.params
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.staticPage(staticPage as string)

  return {
    props: {
      ...data,
      appProps: {
        ...data.appProps,
        i18n: STATIC_PAGE_I18N[staticPage as string]
      }
    }
  }
}

export default ImprintPage

export const getStaticPaths: GetStaticPaths = async () => ({
  paths: STATIC_PAGE_PATHS,
  fallback: false
})
