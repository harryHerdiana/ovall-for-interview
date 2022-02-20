import React from 'react'
import Button from '@component/Button'

const AddToCartButton: React.FC<any> = ({ onClick, children }) => (
  <Button textColor="white" backgroundColor="black" onClick={onClick}>
    {children}
  </Button>
)

export default AddToCartButton
