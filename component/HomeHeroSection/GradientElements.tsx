import React from 'react'
import { StructuredTextDocument } from 'react-datocms'
import Button from '@component/Button'
import BannerFeatures from '@component/GradientBanner/BannerFeatures'

type IGradientElementProps = {
  title?: string
  body?: string
  items?: {
    id: string
    icon: string
    title: string
    text: StructuredTextDocument
  }[]
  buttonText?: string
  buttonType?: 'primary' | 'secondary'
  onClickButton?: () => void
  children?: React.ReactElement
}

export const MobileGradient: React.FC<IGradientElementProps> = ({
  title,
  body,
  buttonText,
  items,
  buttonType,
  onClickButton,
  children
}) => (
  <div className="lg:hidden flex-col items-start h-max justify-center w-full p-4 -mt-16 lg:mt-0">
    <div className="flex flex-col">
      {children}
      <h2 className="mb-0 mt-0">{title}</h2>
      <div className="my-4 h3_element_normalcase">{body}</div>
      {items && <BannerFeatures items={items} />}
      {buttonText && (
        <Button
          onClick={onClickButton}
          type="button"
          buttonType={buttonType}
          className="button-product-details">
          {buttonText}
        </Button>
      )}
    </div>
  </div>
)

export const DesktopGradient: React.FC<IGradientElementProps> = ({
  title,
  body,
  buttonText,
  items,
  buttonType,
  onClickButton,
  children
}) => (
  <div className="flex flex-col pl-5 xl:p-0 w-full">
    <h2 className="mb-2">{title}</h2>
    {children}
    <div className="text=tiny -mt-2">
      <div className="my-4 h3_element_normalcase">{body}</div>
    </div>
    {items && <BannerFeatures items={items} />}
    {buttonText && (
      <div className="lg:w-4/5">
        <Button
          onClick={onClickButton}
          type="button"
          buttonType={buttonType}
          className="button-product-details">
          {buttonText}
        </Button>
      </div>
    )}
    {/* <StructuredText data={dropDownText} /> */}
  </div>
)
