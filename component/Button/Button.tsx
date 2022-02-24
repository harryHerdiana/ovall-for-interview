import React, { useState } from 'react'

interface IButton {
  backgroundColor: string
  disabled?: boolean
  onClick?: () => void
  textColor: string
  ariaLabel?: string
}

const Button: React.FC<IButton> = ({
  backgroundColor,
  children,
  disabled = false,
  onClick,
  textColor,
  ariaLabel
}) => {
  const [hover, setHover] = useState<boolean>(false)
  return (
    <button
      className={`${backgroundColor} flex justify-center ${
        hover ? 'bg-white text-black border-black ' : 'bg-black text-white'
      } mt-8 md:mt-0 px-5 pt-4 pb-3 border-2 font-bold text-sm-button fullhd:text-tiny-button uppercase tracking-wider rounded-sm items-center ${textColor}`}
      disabled={disabled}
      style={{ fontFamily: 'SourceCodeProRegular', fontSize: '17px', textTransform: 'uppercase' }}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      type="button"
      aria-label={ariaLabel}>
      {children}
    </button>
  )
}

export default Button
