import React from 'react'

type IDescriptionSectionProps = {
  title: string
  videoUrl?: string
  text: string
}

const DescriptionSection: React.FC<IDescriptionSectionProps> = ({ title, text, videoUrl }) => (
  <section className=" px-4 md:px-0 m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 md:p-5 md:text-center mb-80px lg:items-center mt-12 lg:mt-40px">
    <div className="mb-2 h2_element">{title}</div>
    <p className="mb-4">{text}</p>
    {videoUrl && (
      <div className="h-190px lg:h-370px lg:w-700px">
        <iframe title={title} className="w-full h-full" src={videoUrl} />
      </div>
    )}
  </section>
)

export default DescriptionSection
