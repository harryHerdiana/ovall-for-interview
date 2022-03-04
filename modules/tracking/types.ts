declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export interface IDataLayerPayload {
  [key: string]: unknown
}

export interface ICartTrackingData {
  brand: string
  itemId: string
  itemName: string
  price: string
  quantity: number
}
