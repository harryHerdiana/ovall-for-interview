import React, { useState } from 'react'
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
  const [loading, setLoading] = useState(false)
  const handleChange = (e) => {
    e.preventDefault()
    setInput(e.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    await fetch('/api/newsletter-signup', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email: input })
    })
    setLoading(false)
    setInput('')
  }
  return (
    <section className="mx-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto p-4 md:text-center my-10">
      <h3>{title}</h3>
      <h2 className="mb-2">{subheader}</h2>
      <div>
        <StructuredText data={description} />
      </div>
      <form onSubmit={handleSubmit} className="w-full flex flex-col md:flex-row my-5 gap-5 h-fit">
        <input
          onChange={handleChange}
          type="email"
          placeholder={placeholder.toUpperCase()}
          className="w-full md:w-1/2"
          value={input}
        />
        <div className="mb md:w-1/2 h-max">
          <Button disabled={loading} type="submit" buttonType="primary">
            {buttonText}
          </Button>
        </div>
      </form>
      <div className="md:w-1/2 m-auto text-2xs">
        <StructuredText data={disclaimer} />
      </div>
      <div className="klaviyo-form-UFFrGa" />
    </section>
  )
}

export default Newsletter
