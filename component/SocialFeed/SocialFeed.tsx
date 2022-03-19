import React from 'react'

import Script from 'next/script'

interface IProps {
  title: string
  subtitle: string
}

const TestimonialSection: React.FC<IProps> = ({ title, subtitle }) => (
  <div className="lg:w-4/5 mx-auto lg:text-center my-14 max-w-fullhd px-4 w-">
    <div>{title.toUpperCase()}</div>
    <h2 className="mb-5">{subtitle}</h2>

    <Script src="https://apps.elfsight.com/p/platform.js" defer />
    <div className="elfsight-app-e7090e5a-3bc5-4675-92c8-56ad7ef98227" />
  </div>
)

export default TestimonialSection
