import React from 'react'
import { GetStaticProps } from 'next'
import Layout from '@component/Layout'
import PageDataService from '@lib/PageDataService'
import { IDefaultProps, IRatingsPage } from '@lib/types'
import Newsletter from '@component/Newsletter'
import ProductTeaser from '@component/ProductTeaser'
import ProductReview from '@component/ProductReview'
import GradientBanner from '@component/GradientBanner'
import TransparencySection from '@component/TransparencySection'

const RatingsPage: React.FC<IRatingsPage> = (props: IRatingsPage & IDefaultProps) => {
  const { newsletterSection, productTeaserSection, heroSection, productFeatureSection } = props
  return (
    <Layout seoTags={props.seoTags} {...props.appProps}>
      <GradientBanner
        title=""
        mobileContentPlacement="bottom"
        contentPlacement="left"
        image={heroSection.image}
        backgroundColor={heroSection.backgroundColor}>
        <div className="flex flex-col gap-2">
          <div className="h3_element">{heroSection.title}</div>
          <h2>{heroSection.kicker}</h2>
        </div>
      </GradientBanner>
      <ProductReview />
      <TransparencySection
        title="Woher kommen unsere Bewertungen?"
        subtitle="transparenz"
        body="Lorem  Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      />
      <GradientBanner
        {...productFeatureSection}
        items={productFeatureSection.items}
        mobileContentPlacement="bottom"
        contentPlacement="left"
      />

      <ProductTeaser {...productTeaserSection} />
      <Newsletter {...newsletterSection} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const pageDataService = new PageDataService(context)
  const data = await pageDataService.ratings()

  return {
    props: data
  }
}

export default RatingsPage
