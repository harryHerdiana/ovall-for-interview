import React from 'react'
import { DatoCMSResponsiveImage } from '@modules/datocms/types'
import GradientBanner from '@component/GradientBanner'
import { toEuro } from '@lib/utils'
import { ProductRating } from '@component/ProductReview'
import { useRouter } from 'next/router'
import { PRODUCT_PATH } from '@lib/constants'

type IProductTeaserProps = {
  backgroundColor: string
  image: DatoCMSResponsiveImage
  buttonText: string
  title: string
}

const ProductTeaser: React.FC<IProductTeaserProps> = ({
  backgroundColor,
  buttonText,
  title,
  image
}) => {
  const router = useRouter()
  return (
    <GradientBanner
      mobileContentPlacement="bottom"
      contentPlacement="right"
      backgroundColor={backgroundColor}
      buttonText={buttonText}
      image={image}
      buttonType="primary"
      onClickButton={() => router.push(PRODUCT_PATH)}
      title="">
      <div className=" flex flex-col ">
        <h2 className="self-center lg:self-start">{title}</h2>
        <div className="mt-1 mb-8 self-center lg:self-start" style={{ minHeight: '25px' }}>
          <ProductRating />
        </div>
        <span className="self-center lg:self-start font-subtitleFont font-semibold text-2xl">
          {toEuro('59.90')}
        </span>
        <div className="self-center lg:self-start">
          <span className="line-through font-bold font-subtitleFont">{toEuro('74.87')}</span>
        </div>
        <div className="my-8 flex justify-center lg:justify-start">
          <ul className="flex gap-2">
            <li
              className="md:w-6 md:h-6 w-5 h-5 list-none rounded-full bg-Ovall-Pink-500"
              aria-hidden="true"
            />
            <li
              className="md:w-6 md:h-6 w-5 h-5 list-none rounded-full bg-Ovall-Blue-500"
              aria-hidden="true"
            />
            <li
              className="md:w-6 md:h-6 w-5 h-5 list-none rounded-full bg-Ovall-Turquoise-500"
              aria-hidden="true"
            />
          </ul>
        </div>
      </div>
    </GradientBanner>
  )
}

export default ProductTeaser
