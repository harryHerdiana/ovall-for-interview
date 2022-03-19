import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IAboutUsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import GradientBanner from '@component/GradientBanner'
import HtmlAccordion from '@component/HtmlAccordion'
import { StructuredText } from 'react-datocms'
import ProductTeaser from '@component/ProductTeaser'
import SocialFeed from '@component/SocialFeed'

const AboutUsPage: React.FC<IAboutUsPage> = (props: IAboutUsPage & IDefaultProps) => {
  const {
    product,
    newsletterSection,
    heroSection,
    accordionSection,
    content,
    productTeaserSection
  } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        backgroundColor={heroSection.backgroundColor}
        mobileContentPlacement="bottom"
        contentPlacement="left"
        image={heroSection.image}
        title="">
        <div className="flex flex-col gap-2">
          <div className="h3_element">{heroSection.title}</div>
          <h2>{heroSection.body}</h2>
        </div>
      </GradientBanner>
      <div className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto px-4 md:px-8 md:text-left lg:py-12">
        <StructuredText data={content} />
      </div>
      <HtmlAccordion items={accordionSection.items} />
      <ProductTeaser product={product} {...productTeaserSection} />
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
