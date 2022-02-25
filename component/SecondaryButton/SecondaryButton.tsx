import React, { useState } from 'react'
import Icon from '@component/Icon'

interface IButton {
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
}

const SecondaryButton: React.FC<IButton> = ({ children, disabled = false, onClick, ariaLabel }) => {
  const [hover, setHover] = useState<boolean>(false)
  const arrowSmall = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 70 70"
      stroke={hover ? '#9cd4b9' : 'black'}
      fill={hover ? '#9cd4b9' : 'black'}>
      <path d="M26,53.33a1.44,1.44,0,0,1-1-2.46L41.34,34.54,25.08,18.29a1.44,1.44,0,0,1,2-2L45.41,34.54,27.05,52.91A1.44,1.44,0,0,1,26,53.33Z" />
    </svg>
  )
  return (
    <button
      className="flex gap-5 justify-start hover:text-greenLinks-500 mt-8 md:mt-0 px-0 pt-4 pb-3 font-subtitleFont text-sm fullhd:text-tiny uppercase tracking-wider items-center"
      disabled={disabled}
      onClick={onClick}
      type="button"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={ariaLabel}>
      {children} {arrowSmall}
    </button>
  )
}

export default SecondaryButton
