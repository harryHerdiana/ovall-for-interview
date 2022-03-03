import { IDatoProductBannerSection } from '@modules/datocms/types'

interface ModelWithApiKey {
  _modelApiKey: string
}
export const findByApiKey = (arr: ModelWithApiKey[], apiKey: string, attr?: string): any => {
  try {
    const elem = arr.find((item) => item._modelApiKey === apiKey)

    if (!attr) {
      return elem || null
    }

    return elem ? elem[attr] : null
  } catch (e) {
    console.error(`Error looking for apikey ${apiKey} and attr ${attr}`)
    console.log('err', e.message)
    console.log(arr)
    return null
  }
}

export const parseInfoBannerSection = (content: IDatoProductBannerSection['content']) => ({
  backgroundColor: findByApiKey(content, 'section_with_gradient_background', 'backgroundColor'),
  title: findByApiKey(content, 'section_with_gradient_background', 'title'),
  image:
    findByApiKey(content, 'section_with_gradient_background', 'image')?.responsiveImage || null,
  body: findByApiKey(content, 'section_text', 'text'),
  buttonText: findByApiKey(content, 'section_call_to_action', 'text')
})
