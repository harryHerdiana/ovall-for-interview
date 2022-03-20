import React from 'react'
import Link from 'next/link'
import { IFooter } from '@lib/types'
import Icon from '@component/Icon'

const Footer: React.FC<IFooter> = ({ leftColumn, middleColumn, rightColumn }) => (
  <div className="blue_gradient_rectangle">
    <div className="px-4 md:px-8 pt-12 pb-40 w-full  max-w-site  mx-auto">
      <div className="mb-14">
        <Icon src="/images/ovall-logo.png" className="h-8 mx-auto md:mx-0" />
      </div>
      <div className="flex justify-between flex-col lg:flex-row text-center lg:text-left gap-4 lg:gap-12">
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
                <div className="mb-2"> {item.label}</div>
              </div>
            </Link>
          ))}
        </div>
        <div className="lg:w-400px mx-auto lg:mx-0">
          <div className="text-base font-subtitleFont uppercase mb-5">{rightColumn.title}</div>
          <div className="text-tiny">
            <p>{rightColumn.text}</p>
          </div>
          <div className="flex lg:grid lg:grid-cols-3 w-max xxl:grid-cols-4 gap-2 mt-5 lg:justify-self-start mx-auto lg:mx-0">
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
        <div className="lg:hidden">
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
        <div>
          <div className=" lg:grid-cols-2 lg:gap-4 gap-2 grid grid-cols-6 place-items-center h-full lg:min-w-max">
            <div className="col-start-3 row-start-2 lg:hidden">
              <Icon src="/images/pay-apple-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="col-start-4 row-start-2 lg:hidden">
              <Icon src="/images/pay-google-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="col-start-2 lg:row-start-2">
              <Icon src="/images/pay-paypal-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="col-start-3 lg:col-start-2">
              <Icon src="/images/pay-amex-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="">
              <Icon src="/images/pay-klarna-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div>
              <Icon src="/images/pay-mastercard-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="">
              <Icon src="/images/pay-visa-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="row-start-1 lg:col-start-1 lg:row-start-1">
              <Icon src="/images/pay-shopify-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="hidden lg:grid lg:col-start-1">
              <Icon src="/images/pay-apple-ohne-rahmen.svg" className="h-full w-14" />
            </div>
            <div className="hidden  lg:grid lg:col-start-2">
              <Icon src="/images/pay-google-ohne-rahmen.svg" className="h-full w-14" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Footer
