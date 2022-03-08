import React from 'react'
import GradientRectangle from '@component/GradientRectangle'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import { StructuredTextDocument } from 'react-datocms'
import { DesktopGradient, MobileGradient } from './GradientElements'
import { IShopifyProduct, IShopifyProductVariant } from '@modules/shopify/types'

export type IGradientBannerProps = {
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
  buttonType?: 'primary' | 'secondary'
  dropDownText?: StructuredTextDocument
  mobileContentPlacement: 'top' | 'bottom'
  contentPlacement: 'left' | 'right'
  onClickButton?: () => void
  useDots?: boolean
  product?: IShopifyProduct
  selfTitle?: string
}

const GradientBanner: React.FC<IGradientBannerProps> = ({
  backgroundColor,
  image,
  title,
  body,
  buttonText,
  contentPlacement,
  mobileContentPlacement,
  items,
  buttonType,
  onClickButton,
  useDots,
  product,
  selfTitle
}) => (
  <section className="flex  lg:h-max flex-col lg:flex-row ">
    {mobileContentPlacement === 'top' && (
      <MobileGradient
        title={title}
        body={body}
        items={items}
        buttonText={buttonText}
        buttonType={buttonType}
        onClickButton={onClickButton}
        useDots={useDots}
        product={product}
        selfTitle={selfTitle}
      />
    )}
    <div
      className={`${backgroundColor}_solid_left ${
        contentPlacement === 'left' ? ' hidden lg:flex' : 'hidden'
      } w-full flex-col items-end justify-center`}>
      <DesktopGradient
        title={title}
        body={body}
        items={items}
        buttonText={buttonText}
        buttonType={buttonType}
        onClickButton={onClickButton}
        useDots={useDots}
        product={product}
        selfTitle={selfTitle}
      />
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
      <DesktopGradient
        title={title}
        body={body}
        items={items}
        buttonText={buttonText}
        buttonType={buttonType}
        onClickButton={onClickButton}
        useDots={useDots}
        product={product}
        selfTitle={selfTitle}
      />
    </div>
    {mobileContentPlacement === 'bottom' && (
      <MobileGradient
        title={title}
        body={body}
        items={items}
        buttonText={buttonText}
        buttonType={buttonType}
        onClickButton={onClickButton}
        useDots={useDots}
        product={product}
        selfTitle={selfTitle}
      />
    )}
  </section>
)
export default GradientBanner
