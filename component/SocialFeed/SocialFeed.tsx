import React from 'react'

interface IProps {
  title: string
  subtitle: string
}

const TestimonialSection: React.FC<IProps> = ({ title, subtitle }) => (
  <div className="lg:w-4/5 mx-auto lg:text-center my-14 max-w-fullhd">
    <div>{title.toUpperCase()}</div>
    <h2>{subtitle}</h2>
  </div>
)

export default TestimonialSection
