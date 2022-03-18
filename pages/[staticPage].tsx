import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { StructuredText } from 'react-datocms'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IStaticPage } from '@lib/types'
import GradientBanner from '@component/GradientBanner'
import { STATIC_PAGE_I18N, STATIC_PAGE_PATHS } from '@lib/constants'

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
