import React from 'react'
import { Toaster } from 'react-hot-toast'
import Icon from '@component/Icon'

interface IProps {
  title: string
  text: string
}

const DiscountToast: React.FC<IProps> = ({ title, text }) => (
  <Toaster position="top-right" reverseOrder={false}>
    {(t) => (
      <div className="flex bg-greenLink px-3 md:px-4 py-4 mb-6 rounded max-w-[300px]">
        <Icon src="/images/invest.svg" className="h-10 w-10" />
        <div>
          <div className="font-textFontBold">{title}</div>
          <p>{text}</p>
        </div>
      </div>
    )}
  </Toaster>
)

export default DiscountToast
