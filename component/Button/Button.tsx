import React from 'react'

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
}) => (
  <button
    className={`${backgroundColor} flex bg-black text-white mt-8 md:mt-0 px-5 pt-4 pb-3 font-bold text-sm-button fullhd:text-tiny-button uppercase tracking-wider rounded-sm hover:bg-gray-800 items-center ${textColor}`}
    disabled={disabled}
    onClick={onClick}
    type="button"
    aria-label={ariaLabel}>
    {children}
  </button>
)

export default Button
