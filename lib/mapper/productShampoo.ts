import { ICleanserPage } from '@lib/types'
import * as utils from './utils'

export default function mapProductShampooData(d: any): ICleanserPage {
  return {
    stageSection: {
      variantImages: d.variantImages.map((variantImage) => ({
        id: variantImage.color,
        color: variantImage.color,
        background: variantImage.image[0].gradientBackground,
        image: variantImage.image[0].image?.responsiveImage || null
      })),
      productDescription: d.productDesc,
      productVolume: d.volume,
      quantityCaption: d.quantityCaption,
      addToCartLabel: d.addToCartLabel,
      colorCaption: d.colorCaption,
      freeShippingCaption: d.freeShippingCaption,
      deliveryTime: d.deliveryTime,
      slideshowImages: d.slideshowItems.map((item) => ({
        id: item.id,
        background: item.gradientBackground,
        image: item.image.responsiveImage,
        descriptionLabel: item.descriptionLabel,
        descriptionText: item.descriptionText
      })),
      soldoutLabel: d.soldoutLabel,
      discountLabel: d.discountLabel,
      productDetails: {
        title: d.productDetail[0].title,
        items: d.productDetail[0].iconList.map((item) => ({
          icon: item.icon,
          id: item.id,
          text: item.text
        }))
      }
    },
    descriptionSection: {
      title: utils.findByApiKey(d.productDescriptionSection, 'section_headline', 'text'),
      text: utils.findByApiKey(d.productDescriptionSection, 'section_text', 'text'),
      videoUrl: utils.findByApiKey(d.productDescriptionSection, 'video_url', 'url')
    },
    testimonialSection: {
      kicker: d.testimonialSection.title,
      title: d.testimonialSection.subtitle
    },
    newsletterSection: {
      ...d.newsletterSection,
      disclaimer: d.newsletterSection.disclaimer.value,
      description: d.newsletterSection.description.value
    },
    ingredientSection: {
      backgroundColor: d.ingredient.background[0].backgroundColor,
      items: d.ingredient.ingredientAccordion.map((item) => ({
        id: item.id,
        text: item.text,
        body: item.body,
        promise: item.promise.map((item2) => ({ icon: item2.icon, id: item2.id, text: item2.text }))
      })),
      text: utils.findByApiKey(d.ingredient.content, 'large_headline_text_block', 'text'),
      title: utils.findByApiKey(d.ingredient.content, 'large_headline_text_block', 'title')
    },
    faqShampooSection: { faqTitle: d.faqAccordionShampoo.name, items: d.faqAccordionShampoo.items },
    productTeaserSection: utils.parseProductTeaser(d.productTeaser)
  }
}
