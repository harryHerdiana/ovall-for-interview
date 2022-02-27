import React from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'

type ISkinTypeInfoProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body: string
  contentPlacement: 'left' | 'right'
}

const SkinTypeInfo: React.FC<ISkinTypeInfoProps> = ({
  contentPlacement,
  backgroundColor,
  image,
  title,
  body
}) => {
  console.log(backgroundColor)
  return (
    <section className="flex md:min-h-80 md:h-full flex-col md:flex-row ">
      <div
        className={`${backgroundColor}_solid_left ${
          contentPlacement === 'left' ? ' hidden md:flex' : 'hidden'
        } w-full flex-col items-end justify-center`}>
        <div className="flex flex-col pl-5 xl:p-0 w-full md:w-3/4 my-5">
          <h3 className="font-bold text-base font-titleFont">{title}</h3>
          <p className="font-textFont text-tiny my-4">{body}</p>
        </div>
      </div>
      <GradientRectangle
        image={`${image}`}
        variantGradient={backgroundColor}
        className="w-full md:w-full"
      />
      <div
        className={`${backgroundColor}_solid_right ${
          contentPlacement === 'right' ? ' hidden md:flex' : 'hidden'
        } w-full flex-col items-start justify-center`}>
        <div className="flex flex-col pl-5 xl:p-0 w-full md:w-3/4 my-5">
          <h3 className="font-bold text-base font-titleFont">{title}</h3>
          <p className="font-textFont text-tiny my-4">{body}</p>
        </div>
      </div>
      <div className="md:hidden flex-col items-start h-max justify-center w-full p-5">
        <div className="flex flex-col">
          <h3 className="font-bold text-base font-titleFont">{title}</h3>
          <p className="font-textFont text-tiny my-4">{body}</p>
        </div>
      </div>
    </section>
  )
}

export default SkinTypeInfo
