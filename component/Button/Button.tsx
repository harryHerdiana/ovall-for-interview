import React from 'react'

interface IButton {
  disabled?: boolean
  onClick?: () => void
  ariaLabel?: string
  buttonType: 'primary' | 'secondary'
  type: 'submit' | 'button' | 'reset'
}

const Button: React.FC<IButton> = ({
  children,
  disabled = false,
  onClick,
  ariaLabel,
  buttonType,
  type
}) => {
  const arrowSmall = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 70 70"
      fill="currentColor"
      stroke="currentColor"
      className={
        buttonType === 'primary'
          ? 'fill-white stroke-white hover:fill-black hover:stroke-black'
          : 'fill-black stroke-black hover:fill-greenLink hover:stroke-greenLink'
      }>
      <path d="M26,53.33a1.44,1.44,0,0,1-1-2.46L41.34,34.54,25.08,18.29a1.44,1.44,0,0,1,2-2L45.41,34.54,27.05,52.91A1.44,1.44,0,0,1,26,53.33Z" />
    </svg>
  )
  return (
    <button
      className={` flex gap-3 ${
        buttonType === 'primary'
          ? ' hover:bg-white hover:text-black border-black bg-black text-white border-2 font-subtitleFont justify-center '
          : '  hover:text-greenLink hover:border-black bg-transparent text-black  font-subtitleFont text-tiny justify-start'
      }
           w-full text-tiny h-11 min-h-11  md:text-base fullhd:text-tiny uppercase tracking-wider rounded-sm items-center`}
      disabled={disabled}
      onClick={onClick}
      type={type}
      aria-label={ariaLabel}>
      {children}
      {arrowSmall}
    </button>
  )
}

export default Button
