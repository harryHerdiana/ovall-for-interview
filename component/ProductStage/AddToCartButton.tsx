import React from 'react'
import Button from '@component/Button'

interface IProps {
  onClick: () => void
  children: React.ReactElement | string
}

const AddToCartButton: React.FC<IProps> = ({ onClick, children }) => (
  <Button type="button" buttonType="primary" onClick={onClick}>
    {children}
  </Button>
)

export default AddToCartButton
