import { IProductPage } from '@lib/types'
import { IDatoProductPage } from '@modules/datocms/types'
import * as utils from './utils'

export default function mapProductPageData(d: IDatoProductPage): IProductPage {
  return {
    stageSection: {
      quantityCaption: d.quantityCaption,
      addToCartLabel: d.addToCartLabel,
      colorCaption: d.colorCaption,
      freeShippingCaption: d.freeShippingCaption,
      deliveryTime: d.deliveryTime,
      productClaims: d.productClaims.map((claim) => ({
        ...claim,
        image: claim.image?.responsiveImage || null
      })),
      variantImages: d.variantImages.map((variantImage) => ({
        color: variantImage.color,
        background: variantImage.image[0].gradientBackground,
        image: variantImage.image[0].image?.responsiveImage || null
      }))
    },
    descriptionSection: {
      title: utils.findByApiKey(d.productDescriptionSection, 'section_headline', 'text'),
      text: utils.findByApiKey(d.productDescriptionSection, 'section_text', 'text'),
      videoUrl: utils.findByApiKey(d.productDescriptionSection, 'video_url_record', 'url')
    },
    howToUseSection: {
      title: d.howToUseSection.header,
      items: d.howToUseSection.items.map((item) => ({
        id: item.id,
        title: item.header,
        description: item.description,
        image: item.image[0]?.image.responsiveImage
      }))
    },
    skinTypeInfoSection: {
      backgroundColor: utils.findByApiKey(
        d.skinTypeInfoSection,
        'section_with_gradient_background',
        'backgroundColor'
      ),
      image: utils.findByApiKey(d.skinTypeInfoSection, 'section_with_gradient_background', 'image')
        ?.responsiveImage,
      title: utils.findByApiKey(d.skinTypeInfoSection, 'section_with_gradient_background', 'title'),
      body: utils.findByApiKey(d.skinTypeInfoSection, 'section_text', 'text')
    },
    productInfoBannerTechnology: {
      backgroundColor: utils.findByApiKey(
        d.productInfoBannerMiniSpa.content,
        'section_with_gradient_background',
        'backgroundColor'
      ),
      image:
        utils.findByApiKey(
          d.productInfoBannerMiniSpa.content,
          'section_with_gradient_background',
          'image'
        )?.responsiveImage || null,
      title: utils.findByApiKey(
        d.productInfoBannerMiniSpa.content,
        'section_with_gradient_background',
        'title'
      ),
      body: utils.findByApiKey(d.productInfoBannerMiniSpa.content, 'section_text', 'text')
    },

    productInfoBannerSection: {
      backgroundColor: utils.findByApiKey(
        d.productInfoBannerSection.content,
        'section_with_gradient_background',
        'backgroundColor'
      ),
      title: utils.findByApiKey(
        d.productInfoBannerSection.content,
        'section_with_gradient_background',
        'title'
      ),
      image:
        utils.findByApiKey(
          d.productInfoBannerSection.content,
          'section_with_gradient_background',
          'image'
        )?.responsiveImage || null,
      body: utils.findByApiKey(d.productInfoBannerSection.content, 'section_text', 'text'),
      buttonText: utils.findByApiKey(
        d.productInfoBannerSection.content,
        'section_call_to_action',
        'text'
      ),
      dropDownText: utils.findByApiKey(
        d.productInfoBannerSection.content,
        'section_call_to_action',
        'dropdownText'
      )
    },
    productInfoAccordionSection: {
      buttonText: d.productInfoAccordionSection.buttonText,
      items: d.productInfoAccordionSection.items
    },
    productInfoBannerFeatures: {
      ...utils.parseInfoBannerSection(d.productInfoBannerFeatures.content),
      items: utils.findByApiKey(d.productInfoBannerFeatures.content, 'icon_list', 'items')
    },
    faqSection: {
      faqButtonText: d.faqButtonText,
      faqSubtitle: d.faqSubtitle,
      faqTitle: d.faqTitle,
      items: d.faqItems.items
    },
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    }
  }
}
