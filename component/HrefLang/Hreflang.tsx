/* eslint-disable */
import React from 'react'

import { appUrl } from '@lib/utils'

interface IProps {
  en: string
  de: string
}

const HrefLang: React.FC<IProps> = ({ en, de }) => {
  const enUrl = `${appUrl()}${en}`
  const deUrl = `${appUrl()}${de}`
  return (
    <>
      <link rel="alternate" data-hreflang="en" href={enUrl} />
      <link rel="alternate" data-hreflang="de" href={deUrl} />
    </>
  )
}

export default HrefLang
