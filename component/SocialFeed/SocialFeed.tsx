import React from 'react'

import Script from 'next/script'

interface IProps {
  title: string
  subtitle: string
}

const TestimonialSection: React.FC<IProps> = ({ title, subtitle }) => (
  <div className="lg:w-4/5 mx-auto lg:text-center my-14 max-w-fullhd px-4 w-">
    <div className="h3_element">{title.toUpperCase()}</div>
    <div className="mb-5 mt-2 h2_element">{subtitle.toUpperCase()}</div>

    <Script src="https://apps.elfsight.com/p/platform.js" defer />
    <div className="elfsight-app-e7090e5a-3bc5-4675-92c8-56ad7ef98227" />
  </div>
)

export default TestimonialSection
