import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IAboutUsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import GradientBanner from '@component/GradientBanner'
import HtmlAccordion from '@component/HtmlAccordion'
import { StructuredText } from 'react-datocms'
import ProductTeaser from '@component/ProductTeaser'

const AboutUsPage: React.FC<IAboutUsPage> = (props: IAboutUsPage & IDefaultProps) => {
  const { newsletterSection, heroSection, accordionSection, content, productTeaserSection } = props
  console.log('aboutus.props', props)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        backgroundColor={heroSection.backgroundColor}
        mobileContentPlacement="bottom"
        contentPlacement="left"
        image={heroSection.image}
        title="">
        <div className="flex flex-col gap-4">
          <div className="text-base font-subtitleFont uppercase">{heroSection.title}</div>
          <div className="font-subtitleFont font-semibold text-2xl">{heroSection.body}</div>
        </div>
      </GradientBanner>
      <div className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto px-4 md:px-8 md:text-left lg:py-12">
        <StructuredText data={content} />
      </div>
      <HtmlAccordion items={accordionSection.items} />
      <ProductTeaser {...productTeaserSection} />
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
