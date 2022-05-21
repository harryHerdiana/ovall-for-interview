import React from 'react'

type IDescriptionSectionProps = {
  title: string
  videoUrl?: string
  text: string
  showVideo?: boolean
}

const DescriptionSection: React.FC<IDescriptionSectionProps> = ({
  title,
  text,
  videoUrl = 'test',
  showVideo = false
}) => (
  <section className="px-4 md:px-0 m-auto flex mb-100px lg:mb-80px flex-col max-w-content-sm md:w-3/4 xl:w-1/2  md:text-center  lg:items-center mt-12 lg:mt-40px">
    <h2 className="mb-2" style={{ letterSpacing: '0.1rem' }}>
      {title}
    </h2>
    <p>{text}</p>
    {videoUrl && showVideo && (
      <div className="h-370px lg:w-700px mt-5">
        <iframe title={title} className="w-full h-full" src={videoUrl} />
      </div>
    )}
  </section>
)

export default DescriptionSection
