import React from 'react'
import classnames from 'classnames'

interface IButton {
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
  buttonType: 'primary' | 'secondary' | 'disabled' | 'hidden'
  type: 'submit' | 'button' | 'reset'
  className?: string
}

const Button: React.FC<IButton> = ({
  children,
  disabled = false,
  onClick,
  ariaLabel,
  buttonType,
  type,
  className
}) => {
  const arrowSmall = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 70 70"
      fill="currentColor"
      stroke="currentColor">
      <path d="M26,53.33a1.44,1.44,0,0,1-1-2.46L41.34,34.54,25.08,18.29a1.44,1.44,0,0,1,2-2L45.41,34.54,27.05,52.91A1.44,1.44,0,0,1,26,53.33Z" />
    </svg>
  )
  const buttonProperty = {
    primary:
      ' hover:bg-white hover:text-black border-black bg-black text-white border-2 font-subtitleFont justify-center ',
    secondary:
      ' hover:text-greenLink hover:border-black bg-transparent text-black  font-subtitleFont text-tiny justify-start',
    disabled: 'bg-gray_soldout font-subtitleFont justify-center cursor-not-allowed',
    hidden: 'hidden'
  }

  return (
    <button
      className={classnames(
        className,
        `flex gap-3 ${buttonProperty[buttonType]} w-full text-tiny h-11 min-h-11  md:text-tiny fullhd:text-tiny uppercase tracking-wider items-center`,
        {}
      )}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}>
      {children}
      {buttonType !== 'disabled' && arrowSmall}
    </button>
  )
}

export default Button
