import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IFAQPage } from '@lib/types'
import FaqSection from '@component/FaqSection'
import Newsletter from '@component/Newsletter'
import ProductTeaser from '@component/ProductTeaser'
import SocialFeed from '@component/SocialFeed'
import HeroSection from '@component/HeroSection'

const FAQPage: React.FC<IFAQPage> = (props: IFAQPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, faqSection, heroSection, product } = props
  // const router = useRouter()
  // const linkToProduct = '/products/ovall-ultraschall-gesichtsreiniger'
  console.log(productTeaserSection)
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <HeroSection {...heroSection} title={heroSection.kicker} kicker={heroSection.title} />
      <section className="-mt-16 lg:-mt-32">
        <FaqSection {...faqSection} faqButtonText={faqSection.buttonText} />
      </section>
      <ProductTeaser
        className="-mt-16 mb-80px lg:mb-100px lg:min-h-650px"
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
  const data = await pageDataService.faqPage()

  return {
    props: data
  }
}

export default FAQPage
