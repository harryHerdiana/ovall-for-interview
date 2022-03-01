import React, { useState } from 'react'
import Icon from '@component/Icon'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument, StructuredText } from 'react-datocms'

import Button from '@component/Button'

type INewsletterProps = {
  placeholder: string
  subheader: string
  title: string
  disclaimer: StructuredTextDocument
  description: StructuredTextDocument
  buttonText: string
}

const Newsletter: React.FC<INewsletterProps> = ({
  placeholder,
  subheader,
  title,
  disclaimer,
  description,
  buttonText
}) => {
  const [input, setInput] = useState<string>('')
  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }
  return (
    <section className="m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto p-5 md:text-center">
      <h3>{title}</h3>
      <h1 className="mb-2">{subheader}</h1>
      <p>
        <StructuredText data={description} />
      </p>
      <form
        onSubmit={() => console.log('welcome ', input)}
        className="w-full flex flex-col md:flex-row my-5 gap-5 h-fit">
        <input
          onChange={handleChange}
          type="email"
          placeholder={placeholder.toUpperCase()}
          className="w-full md:w-1/2"
        />
        <div className="mb md:w-1/2 h-max">
          <Button type="submit" buttonType="primary">
            {buttonText}
          </Button>
        </div>
      </form>
      <p className="md:w-1/2 m-auto">
        <StructuredText data={disclaimer} />
      </p>
    </section>
  )
}

export default Newsletter
