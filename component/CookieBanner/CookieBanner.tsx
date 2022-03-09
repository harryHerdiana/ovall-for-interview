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
  denyText
}) => {
  console.log('test')

  return (
    <div className="w-full grid grid-cols-2">
      <div>{title}</div>
      <div>
        <StructuredText
          renderInlineRecord={({ record }) => <Link href={`/${record.slug}`}>{record.title}</Link>}
          data={text}
        />
      </div>
      <div>
        <div>
          <Button onClick={onConfirm} type="button" buttonType="primary">
            {acceptText}
          </Button>
        </div>
        <div>
          <Button onClick={onDecline} type="button" buttonType="primary">
            {denyText}
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CookieBanner
