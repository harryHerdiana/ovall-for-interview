import React from 'react'

type IDescriptionSectionProps = {
  title: string
  //   videoUrl?: string
  text: string
}

const DescriptionSection: React.FC<IDescriptionSectionProps> = ({ title, text }) => (
  <section className=" px-4 md:px-0 m-auto flex flex-col max-w-site md:w-3/4 xl:w-1/2 md:p-5 md:text-center mb-20 lg:items-center">
    <div
      style={{ lineHeight: 1.154 }}
      className="mb-2 lg:text-2xl lg:normal-case font-subtitleFont text-left uppercase text-base ">
      {title}
    </div>
    <p className="mb-4">{text}</p>
    <div className="h-190px lg:h-400px w-full">
      <iframe
        title={title}
        className="w-full h-full"
        //   src={videoUrl}
        src="https://www.youtube.com/embed/Kwk_5CB2gx0"
      />
    </div>
  </section>
)

export default DescriptionSection
