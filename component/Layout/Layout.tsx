import React from 'react'
import Head from 'next/head'
import { Menu, SeoTags } from '@lib/types'
import Header from '@component/Layout/Header'

interface ILayout {
  seoTags: SeoTags
  children: React.ReactElement
  menu: Menu
}

const Layout: React.FC<ILayout> = ({ seoTags, menu, children }) => (
  <>
    <Head>
      <title>{seoTags.title}</title>
      <meta name="description" content={seoTags.description} key="description" />
    </Head>
    <div className="flex flex-col font-main">
      <Header menu={menu} />
      <main className="flex-grow font-main">{children}</main>
    </div>
  </>
)

export default Layout
