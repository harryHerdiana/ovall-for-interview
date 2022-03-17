import React from 'react'
import Link from 'next/link'
import { IFooter } from '@lib/types'
import Icon from '@component/Icon'

const Footer: React.FC<IFooter> = ({ leftColumn, middleColumn, rightColumn }) => (
  <div className="blue_gradient_rectangle">
    <div className="px-4 md:px-24 pt-12 pb-40 w-full  max-w-site xl:w-3/4 mx-auto">
      <div className="mb-14">
        <Icon src="/images/ovall-logo.png" className="h-8 mx-auto md:mx-0" />
      </div>
      <div className="flex justify-evenly flex-col lg:flex-row text-center lg:text-left gap-12">
        <div>
          <div className="text-base font-subtitleFont uppercase mb-5">{leftColumn.title}</div>
          {leftColumn.items.map((item, index) => (
            <Link key={item.id} href={`${item.path}`}>
              <div
                id={item.id}
                className="my-2 text-tiny font-textFont hover:text-greenLink cursor-pointer">
                <div className="mb-2"> {item.label}</div>
                {index !== middleColumn.items.length && (
                  <hr className="border-grayLine block lg:hidden" />
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-col">
          <div className="text-base font-subtitleFont uppercase mb-5">{middleColumn.title}</div>
          {middleColumn.items.map((item) => (
            <Link key={item.id} href={`${item.path}`}>
              <div
                id={item.id}
                className=" text-tiny font-textFont hover:text-greenLink cursor-pointer">
                {item.label}
              </div>
            </Link>
          ))}
        </div>
        <div>
          <div className="text-base font-subtitleFont uppercase mb-5">{rightColumn.title}</div>
          <div className="text-tiny">
            <p>{rightColumn.text}</p>
          </div>
          <div className="flex lg:grid lg:grid-cols-2 xxl:grid-cols-4 gap-7 mt-5 justify-center lg:justify-start">
            <Link href={rightColumn.facebook}>
              <div className="hover:cursor-pointer">
                <Icon src="/images/facebook.svg" className="h-12" />
              </div>
            </Link>
            <Link href={rightColumn.instagram}>
              <div>
                <Icon src="/images/instagram.svg" className="h-12" />
              </div>
            </Link>
            <Link href={rightColumn.pinterest}>
              <div>
                <Icon src="/images/pinterest.svg" className="h-12" />
              </div>
            </Link>
            <Link href={rightColumn.youtube}>
              <div>
                <Icon src="/images/youtube.svg" className="h-12" />
              </div>
            </Link>
          </div>
        </div>
        <div className="lg:hidden mb-8">
          <div className="text-base font-subtitleFont uppercase mb-5">{middleColumn.title}</div>
          {middleColumn.items.map((item, index) => (
            <div key={item.id} id={item.id}>
              <Link href={item.path}>
                <div className="text-tiny font-textFont  hover:cursor-pointer my-2">
                  {item.label}
                </div>
              </Link>
              {index !== middleColumn.items.length - 1 && <hr className="border-grayLine" />}
            </div>
          ))}
        </div>
        <div className=" lg:grid-cols-2 lg:gap-4 gap-2 grid grid-cols-6 place-items-center">
          <div>
            <Icon src="/images/pay-paypal-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div>
            <Icon src="/images/pay-amex-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div>
            <Icon src="/images/pay-klarna-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div>
            <Icon src="/images/pay-mastercard-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div>
            <Icon src="/images/pay-visa-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div>
            <Icon src="/images/pay-shopify-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div className="col-start-3 lg:col-start-1">
            <Icon src="/images/pay-apple-ohne-rahmen.svg" className="h-full w-14" />
          </div>
          <div className="col-start-4  lg:col-start-2">
            <Icon src="/images/pay-google-ohne-rahmen.svg" className="h-full w-14" />
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
