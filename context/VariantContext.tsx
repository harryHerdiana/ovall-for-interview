import React from 'react'

export const defaultValue = {
  selectedVariant: 0,
  setSelectedVariant: (index: number): void => {}
}

export interface GlobalContext {
  children?: JSX.Element
}

const VariantContext = React.createContext(defaultValue)

export const VariantProvider: React.FC<GlobalContext> = ({ children }) => {
  const [selectedVariant, setSelectedVariant] = React.useState(defaultValue.selectedVariant)

  return (
    <VariantContext.Provider value={{ selectedVariant, setSelectedVariant }}>
      {children}
    </VariantContext.Provider>
  )
}

export default VariantContext
