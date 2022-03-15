import React from 'react'
import { StructuredText } from 'react-datocms'
import Button from '@component/Button'
import { ICookieNotice } from '@lib/types'
import Link from 'next/link'

interface IProps extends ICookieNotice {
  onConfirm: () => void
  onDecline: () => void
}

const CookieBanner: React.FC<IProps> = ({
  onConfirm,
  onDecline,
  title,
  text,
  acceptText,
  denyText,
  moreInfo
}) => {
  console.log('test')

  return (
    <div className="w-screen fixed bottom-0 bg-greenLink flex z-50 py-4 px-4">
      <div className="mx-auto w-max">
        <div className="font-titleFont text-2xl my-2">{title}</div>
        <div className="font-textFont mb-6">
          <StructuredText
            renderInlineRecord={({ record }) => (
              <Link href={`/${record.slug}`}>
                <span className="cursor-pointer underline">{record.title}</span>
              </Link>
            )}
            data={text}
          />
        </div>
        <div className=" lg:w-400px">
          <Button onClick={onConfirm} type="button" buttonType="primary">
            {acceptText}
          </Button>
          <div className="mt-3 font-textFont flex justify-between">
            <button className=" underline" onClick={onDecline}>
              {denyText}
            </button>
            <Link href="/">
              <span className="cursor-pointer underline">{moreInfo}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
