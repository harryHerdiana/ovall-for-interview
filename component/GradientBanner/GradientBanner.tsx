import React, { ReactElement } from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredText, StructuredTextDocument } from 'react-datocms'
import Button from '@component/Button'
import BannerFeatures from './BannerFeatures'

type IGradientBannerProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  title: string
  body?: string
  items?: {
    id: string
    icon: string
    title: string
    text: StructuredTextDocument
  }[]
  buttonText?: string
  dropDownText?: StructuredTextDocument
  mobileContentPlacement: 'top' | 'bottom'
  contentPlacement: 'left' | 'right'
}

const GradientBanner: React.FC<IGradientBannerProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  contentPlacement,
  mobileContentPlacement,
  items
}) => {
  console.log(items)
  return (
    <section className="flex  lg:h-max flex-col lg:flex-row ">
      {mobileContentPlacement === 'top' && (
        <div className="lg:hidden flex-col items-start h-max justify-center w-full p-5">
          <div className="flex flex-col">
            <h2>{title}</h2>
            <div className="text=tiny">
              <p className="my-4">{body}</p>
            </div>
            {items && <BannerFeatures items={items} />}
            {buttonText && (
              <Button type="button" buttonType="secondary">
                {buttonText}
              </Button>
            )}
            {/* <StructuredText data={dropDownText} /> */}
          </div>
        </div>
      )}
      <div
        className={`${backgroundColor}_solid_left ${
          contentPlacement === 'left' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-end justify-center`}>
        <div className="flex flex-col pl-5 xl:p-0 w-full md:w-3/4 my-5">
          <h2>{title}</h2>
          <div className="text=tiny">
            <p className="my-4">{body}</p>
          </div>
          {items && <BannerFeatures items={items} />}
          {buttonText && (
            <Button type="button" buttonType="secondary">
              {buttonText}
            </Button>
          )}
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
      <GradientRectangle
        image={image}
        variantGradient={backgroundColor}
        className="w-full md:w-full"
      />
      <div
        className={`${backgroundColor}_solid_right ${
          contentPlacement === 'right' ? ' hidden lg:flex' : 'hidden'
        } w-full flex-col items-start justify-center`}>
        <div className="flex flex-col pl-5 xl:p-0 w-full md:w-3/4 my-5">
          <h2>{title}</h2>
          <div className="text=tiny">
            <p className="my-4">{body}</p>
          </div>
          {items && <BannerFeatures items={items} />}
          {buttonText && (
            <Button type="button" buttonType="secondary">
              {buttonText}
            </Button>
          )}
          {/* <StructuredText data={dropDownText} /> */}
        </div>
      </div>
      {mobileContentPlacement === 'bottom' && (
        <div className="lg:hidden flex-col items-start h-max justify-center w-full p-5">
          <div className="flex flex-col">
            <h2>{title}</h2>
            <div className="text=tiny">
              <p className="my-4">{body}</p>
            </div>
            {items && <BannerFeatures items={items} />}
            {!buttonText === false && (
              <Button type="button" buttonType="secondary">
                {buttonText}
              </Button>
            )}
            {/* <StructuredText data={dropDownText} /> */}
          </div>
        </div>
      )}
    </section>
  )
}
export default GradientBanner
