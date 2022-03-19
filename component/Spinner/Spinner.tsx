import React from 'react'

type IProps = Record<string, unknown>

const Spinner: React.FC<IProps> = () => (
  <div
    style={{ borderTopColor: 'transparent' }}
    className="w-8 h-8 border-4 border-black border-solid rounded-full animate-spin"
  />
)

export default Spinner
