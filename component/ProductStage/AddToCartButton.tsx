import React from 'react'
import Button from '@component/Button'

interface IProps {
  onClick: () => void
  children: React.ReactElement | string
}

const AddToCartButton: React.FC<IProps> = ({ onClick, children }) => (
  <Button textColor="white" backgroundColor="black" onClick={onClick}>
    {children}
  </Button>
)

export default AddToCartButton
