import React from 'react'
import { useRouter } from 'next/router'
import AnchorLink from 'react-anchor-link-smooth-scroll'

interface IScrollableLinkProps {
  anchor: string
  children: React.ReactNode
  className: string
}

const ScrollableLink: React.FC<IScrollableLinkProps> = ({ children, anchor, ...otherProps }) => {
  const router = useRouter()

  const scroll = (e) => {
    e.preventDefault()

    // Fix for Firefox
    setTimeout(() => {
      router.push(`#${anchor}`)
    }, 1000)
  }

  return (
    <AnchorLink href={`#${anchor}`} onClick={scroll} offset={150} {...otherProps}>
      {children}
    </AnchorLink>
  )
}

export default ScrollableLink
