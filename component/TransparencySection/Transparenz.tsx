import React from 'react'

type ITransparencyProps = {
  title: string
  subtitle: string
  body: string
}

const TransparencySection: React.FC<ITransparencyProps> = ({ title, subtitle, body }) => (
  <section className=" px-4 md:px-0 m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 h-auto md:p-5 md:text-center mb-10">
    <div className="  uppercase text-base font-subtitleFont mb-2">{subtitle}</div>
    <h2 className="mb-8">{title}</h2>
    <p>{body}</p>
  </section>
)

export default TransparencySection
