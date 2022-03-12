import React, { useState, createContext } from 'react'

type IVariantContext = {
  isSelected: boolean
  setSelected: () => void
  setUnselected: () => void
}

const VariantDefaultValue: IVariantContext = {
  isSelected: false,
  setSelected: () => null,
  setUnselected: () => null
}

export const VariantContext = createContext<IVariantContext>(VariantDefaultValue)
export const VariantProvider = (props: { children: React.ReactElement }) => {
  const [select, setSelect] = useState<boolean>(false)
  const VariantNextValue: IVariantContext = {
    isSelected: select,
    setSelected: () => setSelect(true),
    setUnselected: () => setSelect(false)
  }
  return (
    <VariantContext.Provider value={VariantNextValue}>{props.children}</VariantContext.Provider>
  )
}
