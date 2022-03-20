import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IFAQPage } from '@lib/types'
import FaqSection from '@component/FaqSection'
import Newsletter from '@component/Newsletter'
// import { useRouter } from 'next/router'
import ProductTeaser from '@component/ProductTeaser'
import GradientBanner from '@component/GradientBanner'
import SocialFeed from '@component/SocialFeed'

const FAQPage: React.FC<IFAQPage> = (props: IFAQPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, faqSection, heroSection, product } = props
  // const router = useRouter()
  // const linkToProduct = '/products/ovall-ultraschall-gesichtsreiniger'
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        title=""
        mobileContentPlacement="bottom"
        contentPlacement="left"
        image={heroSection.image}
        backgroundColor={heroSection.backgroundColor}>
        <div className="flex flex-col gap-2">
          <div className="h3_element">{heroSection.kicker}</div>
          <h2>{heroSection.title}</h2>
        </div>
      </GradientBanner>
      <div className="-mt-10">
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
