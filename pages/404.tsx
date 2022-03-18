import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import { IDefaultProps } from '@lib/types'
import PageDataService from '@lib/PageDataService'

const NotFoundPage: React.FC<IDefaultProps> = (props: IDefaultProps) => (
  <Layout
    seoTags={{ title: '404', description: 'not found' }}
    {...props.appProps}
    indexable={false}>
    <section className="flex items-center flex-col flex-wrap justify-center bg-gray-200 space-y-6 text-center text-black pb-20 pt-20 sm:pb-12 sm:pt-16 md:pt-32 lg:pb-16 lg:pt-16 px-3 md:h-60vh">
      <div className="w-full flex justify-center ">
        <h1 className="flex flex-wrap justify-center font-hand w-full max-w-2xl mx-auto text-center text-lg md:text-2xl xl:text-4xl text-black px-8 mb-8 md:mb-8 lg:mb-10 xl:mb-10 z-10">
          <span className="text-4xl lg:text-xxl opacity-25 font-semibold w-full">404</span>
          <br />
          Page not found :-/
        </h1>
      </div>
    </section>
    <div className="w-full max-w-content-sm mx-auto" />
  </Layout>
)

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.homepage()

  return {
    props: data
  }
}

export default NotFoundPage
