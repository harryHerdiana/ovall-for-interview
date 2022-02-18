import React from 'react'
import Head from 'next/head'

interface ILayout {
  title: string
  description: string
  children: React.ReactElement
}

const Layout: React.FC<ILayout> = ({ title, description, children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} key="description" />
    </Head>
    <div className="flex flex-col font-main">
      <main className="flex-grow font-main">{children}</main>
    </div>
  </>
)

export default Layout
