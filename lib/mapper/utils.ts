interface ModelWithApiKey {
  _modelApiKey: string
}
export const findByApiKey = (arr: ModelWithApiKey[], apiKey: string, attr: string): any => {
  try {
    const elem = arr.find((item) => item._modelApiKey === apiKey)

    return elem ? elem[attr] : null
  } catch (e) {
    console.error(`Error looking for apikey ${apiKey} and attr ${attr}`)
    console.log('err', e.message)
    console.log(arr)
    return null
  }
}
