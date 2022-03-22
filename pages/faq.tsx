import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IFAQPage } from '@lib/types'
import FaqSection from '@component/FaqSection'
import Newsletter from '@component/Newsletter'
// import { useRouter } from 'next/router'
import ProductTeaser from '@component/ProductTeaser'
import SocialFeed from '@component/SocialFeed'
import HeroSection from '@component/HeroSection'

const FAQPage: React.FC<IFAQPage> = (props: IFAQPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, faqSection, heroSection, product } = props
  // const router = useRouter()
  // const linkToProduct = '/products/ovall-ultraschall-gesichtsreiniger'
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} title={heroSection.kicker} kicker={heroSection.title} />
      <div className="-mt-24">
        <FaqSection {...faqSection} faqButtonText={faqSection.buttonText} />
      </div>
      <ProductTeaser product={product} {...productTeaserSection} />
      <SocialFeed {...props.appProps.socialFeedSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.faqPage()

  return {
    props: data
  }
}

export default FAQPage
