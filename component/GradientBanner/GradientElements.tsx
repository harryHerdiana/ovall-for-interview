import React from 'react'
import { StructuredTextDocument } from 'react-datocms'
import Button from '@component/Button'
import { IShopifyProduct } from '@modules/shopify/types'
import BannerFeatures from './BannerFeatures'
import PriceDots from './PriceDots'

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
  useDots?: boolean
  product?: IShopifyProduct
  selfTitle?: string
}

export const MobileGradient: React.FC<IGradientElementProps> = ({
  title,
  body,
  buttonText,
  items,
  buttonType,
  onClickButton,
  useDots,
  product,
  selfTitle
}) => (
  <div className="lg:hidden flex-col items-start h-max justify-center w-full p-5">
    <div className="flex flex-col">
      <h2>{title}</h2>
      <div className="text=tiny">
        <p className="my-4">{body}</p>
      </div>
      {useDots && <PriceDots selfTitle={selfTitle} product={product} />}
      {items && <BannerFeatures items={items} />}
      {buttonText && (
        <Button onClick={onClickButton} type="button" buttonType={buttonType}>
          {buttonText}
        </Button>
      )}
      {/* <StructuredText data={dropDownText} /> */}
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
  useDots,
  product,
  selfTitle
}) => (
  <div className="flex flex-col pl-5 xl:p-0 w-full md:w-3/4 my-5">
    <h2>{title}</h2>
    <div className="text=tiny">
      <p className="my-4">{body}</p>
    </div>
    {useDots && <PriceDots selfTitle={selfTitle} product={product} />}
    {items && <BannerFeatures items={items} />}
    {buttonText && (
      <div className="xl:w-3/5">
        <Button onClick={onClickButton} type="button" buttonType={buttonType}>
          {buttonText}
        </Button>
      </div>
    )}
    {/* <StructuredText data={dropDownText} /> */}
  </div>
)
