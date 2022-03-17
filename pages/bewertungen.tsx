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
        <>
          <div style={{ lineHeight: 1.154 }} className="font-subtitleFont text-base uppercase">
            {heroSection.title}
          </div>
          <h2>{heroSection.kicker}</h2>
        </>
      </GradientBanner>
      <ProductReview />
      <TransparencySection
        title="Woher kommen unsere Bewertungen?"
        subtitle="transparenz"
        body="Miaow then turn around and show you my bum relentlessly pursues moth only use one corner of the litter box or purr like a car engine oh yes, there is my human slave woman she does best pats ever that all i like about her hiss meow for bird bird bird bird bird bird human why take bird out i could have eaten that. One of these days i'm going to get that red dot, just you wait and see"
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
