import React from 'react'
import Link from 'next/link'
import { MenuItem } from '@lib/types'
import Icon from '@component/Icon'

type IFooterProps = {
  leftColumn: {
    title: string
    items: MenuItem[]
  }
  middleColumn: {
    title: string
    items: MenuItem[]
  }
  rightColumn: {
    title: string
    text: string
    facebook: string
    instagram: string
    pinterest: string
    youtube: string
  }
}

const Footer: React.FC<IFooterProps> = ({ leftColumn, middleColumn, rightColumn }) => {
  console.log(leftColumn)
  return (
    <div className="blue_gradient_rectangle">
      <div className="px-24 pt-12 pb-40 xl:w-3/4 mx-auto">
        <div className="mb-14">
          <Icon src="/images/ovall-logo.png" className="h-8" />
        </div>
        <div className="flex  justify-between">
          <div>
            <div className="text-base font-subtitleFont uppercase mb-5">{leftColumn.title}</div>
            {leftColumn.items.map((item) => (
              <div
                id={item.id}
                className="text-tiny underline font-textFontBold text-greenLink hover:text-black hover:cursor-pointer">
                <Link href={item.path}>{item.label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div className="text-base font-subtitleFont uppercase mb-5">{middleColumn.title}</div>
            {middleColumn.items.map((item) => (
              <div
                id={item.id}
                className="text-tiny underline font-textFontBold text-greenLink hover:text-black hover:cursor-pointer">
                <Link href={item.path}>{item.label}</Link>
              </div>
            ))}
          </div>
          <div>
            <div className="text-base font-subtitleFont uppercase mb-5">{rightColumn.title}</div>
            <div className="text-tiny font-textFont">{rightColumn.text}</div>
            <div className="flex gap-2 mt-5">
              <div className="hover:cursor-pointer">
                <Link href={rightColumn.facebook}>
                  <Icon src="/images/facebook.svg" className="h-12" />
                </Link>
              </div>
              <div>
                <Link href={rightColumn.instagram}>
                  <Icon src="/images/instagram.svg" className="h-12" />
                </Link>
              </div>
              <div>
                <Link href={rightColumn.pinterest}>
                  <Icon src="/images/pinterest.svg" className="h-12" />
                </Link>
              </div>
              <div>
                <Link href={rightColumn.youtube}>
                  <Icon src="/images/youtube.svg" className="h-12" />
                </Link>
              </div>
            </div>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div>
              <Icon src="/images/pay-paypal.svg" className="h-9" />
            </div>
            <div>
              <Icon src="/images/pay-klarna-rechnung.svg" className="h-9" />
            </div>
            <div>
              <Icon src="/images/pay-mastercard.svg" className="h-9" />
            </div>
            <div>
              <Icon src="/images/pay-amex.svg" className="h-9" />
            </div>
            <div>
              <Icon src="/images/pay-klarna-sofort.svg" className="h-9" />
            </div>
            <div>
              <Icon src="/images/pay-visa.svg" className="h-9" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
