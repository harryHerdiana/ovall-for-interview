import React from 'react'
import Button from '@component/Button'

interface IProps {
  onClick: () => void
  children: React.ReactElement | string
  disabled?: boolean
  buttonType: 'primary' | 'secondary' | 'disabled'
}

const AddToCartButton: React.FC<IProps> = ({ onClick, children, disabled, buttonType }) => (
  <Button disabled={disabled} type="button" buttonType={buttonType} onClick={onClick}>
    {children}
  </Button>
)

export default AddToCartButton
