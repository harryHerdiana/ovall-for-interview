import React from 'react'
import { StructuredTextDocument } from 'react-datocms'
import Button from '@component/Button'
import BannerFeatures from './BannerFeatures'

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
  className?: string
}

export const MobileGradient: React.FC<IGradientElementProps> = ({
  title,
  body,
  buttonText,
  items,
  buttonType,
  onClickButton,
  children,
  className
}) => (
  <div
    className={
      className
        ? `${className} lg:hidden flex-col items-start h-max justify-center w-full p-4`
        : 'lg:hidden flex-col items-start h-max justify-center w-full p-4'
    }>
    <div className="flex flex-col">
      {children}
      {title && <h2 className="mb-3 mt-0">{title}</h2>}
      {body && <p className="mt-4">{body}</p>}
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
  children,
  className
}) => (
  <div
    className={
      className
        ? `${className} flex flex-col pl-5 xl:p-0 w-full`
        : 'flex flex-col pl-5 xl:p-0 w-full'
    }>
    {title && <h2 className="mb-0">{title}</h2>}
    {body && (
      <div className="text=tiny -mt-2">
        <p className="my-4">{body}</p>
      </div>
    )}
    {children}
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
