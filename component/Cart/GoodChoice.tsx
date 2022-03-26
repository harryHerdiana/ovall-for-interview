import Icon from '@component/Icon'
import { ICartText } from '@lib/types'
import React from 'react'

type IProps = Partial<ICartText>

const GoodChoice: React.FC<IProps> = ({ goodChoiceHeader, goodChoiceText }) => (
  <div className="flex w-full bg-greenLink px-3 md:px-4 py-2 mb-6">
    <Icon src="/images/check.svg" className="h-10 w-10" />
    <div>
      <div className="font-textFontBold">{goodChoiceHeader}</div>
      <p>{goodChoiceText}</p>
    </div>
  </div>
)

export default GoodChoice
