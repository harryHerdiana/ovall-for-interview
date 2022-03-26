import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IAboutUsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import HtmlAccordion from '@component/HtmlAccordion'
import { StructuredText } from 'react-datocms'
import ProductTeaser from '@component/ProductTeaser'
import SocialFeed from '@component/SocialFeed'
import HeroSection from '@component/HeroSection'

const AboutUsPage: React.FC<IAboutUsPage> = (props: IAboutUsPage & IDefaultProps) => {
  const {
    newsletterSection,
    heroSection,
    accordionSection,
    content,
    productTeaserSection,
    product
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} />
      <section className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto px-4 md:px-8 md:text-left lg:py-16">
        <StructuredText data={content} />
      </section>
      <HtmlAccordion items={accordionSection.items} />
      <ProductTeaser
        className="mb-80px mt-80px lg:mb-100px"
        product={product}
        {...productTeaserSection}
      />
      <SocialFeed {...props.appProps.socialFeedSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.aboutUs()

  return {
    props: {
      ...data,
      appProps: {
        ...data.appProps,
        i18n: {
          en: '/en/about-us',
          de: '/uber-uns'
        }
      }
    }
  }
}

export default AboutUsPage
