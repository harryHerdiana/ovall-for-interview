import React, { useState } from 'react'
import Icon from '@component/Icon'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import { StructuredText } from 'react-datocms'
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
    <section className="m-auto flex flex-col max-w-site md:w-3/4 lg:w-1/2 h-auto p-5 md:text-center">
      <div className="font-subtitleFont">{title.toUpperCase()}</div>
      <div className="font-titleFont text-xl mb-2">{subheader}</div>
      <div className="font-textFont">
        <StructuredText data={description} />
      </div>
      <form
        onSubmit={() => console.log('welcome ', input)}
        className="w-full flex flex-col md:flex-row my-5 gap-5 h-fit">
        <input
          onChange={handleChange}
          type="email"
          placeholder={placeholder.toUpperCase()}
          className="w-full md:w-1/2 s"
        />
        <div className="mb md:w-1/2 h-max">
          <Button type="submit" buttonType="primary">
            {buttonText}
          </Button>
        </div>
      </form>
      <div className="font-textFont text-xs font-bold md:w-1/2 m-auto">
        <StructuredText data={disclaimer} />
      </div>
    </section>
  )
}

export default Newsletter
