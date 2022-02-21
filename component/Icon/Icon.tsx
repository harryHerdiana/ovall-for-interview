import React from 'react'

interface IconProps {
  className: string
  src: string
}

const Icon: React.FC<IconProps> = ({ src, className }) => (
  <img alt="CartIcon" className={className} src={src} />
)

export default Icon
