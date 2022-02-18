import React from 'react'

export const defaultValues = {
  products: {}
}

export interface GlobalContext {
  children?: JSX.Element
}

export const StoreContext = React.createContext(defaultValues)

export const StoreProvider: React.FC<GlobalContext> = ({ children }) => (
  <StoreContext.Provider
    value={{
      ...defaultValues
    }}>
    {children}
  </StoreContext.Provider>
)
