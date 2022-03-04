import React from 'react'
import Head from 'next/head'
import { IMenu, SeoTags, IFooter } from '@lib/types'
import Header from '@component/Layout/Header'
import { TrackingIframe, TrackingScript } from '@modules/tracking'
import Footer from './Footer'

interface ILayout {
  seoTags: SeoTags
  children: React.ReactElement[]
  menu: IMenu
  footer: IFooter
}

const Layout: React.FC<ILayout> = ({ seoTags, menu, children, footer }) => (
  <>
    <Head>
      <TrackingScript />
      <title>{seoTags.title}</title>
      <meta name="description" content={seoTags.description} key="description" />
    </Head>
    <TrackingIframe />
    <div className="flex flex-col font-main">
      <Header menu={menu} />
      <main className="flex-grow font-main">{children}</main>
    </div>
    <Footer {...footer} />
  </>
)

export default Layout
