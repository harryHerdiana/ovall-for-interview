import { IProductPage } from '@lib/types'
import { IDatoProductPage } from '@modules/datocms/types'
import { mapBeforeAfterBanner, mapProductStageAccordion } from './models'
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
        image: claim.image || null
      })),
      variantImages: d.variantImages.map((variantImage) => ({
        id: variantImage.color,
        color: variantImage.color,
        background: variantImage.image[0].gradientBackground,
        image: variantImage.image[0].image?.responsiveImage || null
      })),
      slideshowImages: d.slideshowItems.map((item) => ({
        id: item.id,
        background: item.gradientBackground,
        image: item.image.responsiveImage,
        descriptionLabel: item.descriptionLabel,
        descriptionText: item.descriptionText
      })),
      soldoutLabel: d.soldoutLabel,
      discountLabel: d.discountLabel,
      productStageAccordion: mapProductStageAccordion(d.productStageAccordion[0])
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
    howToUseSection: {
      title: d.howToUseSection.header,
      items: d.howToUseSection.items.map((item) => ({
        id: item.id,
        title: item.header,
        description: item.description,
        image: item.image[0]?.image.responsiveImage
      }))
    },
    moodSlideshowSection: {
      kicker: d.moodSlideshowSection.header,
      title: d.moodSlideshowSection.subheader,
      items: d.moodSlideshowSection.images.map((item) => ({
        id: item.id,
        title: item.captionHeader,
        text: item.captionText,
        image: item.imageWithGradient[0].image.responsiveImage,
        background: item.imageWithGradient[0].gradientBackground || null
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
    productInfoBannerTechnology: utils.parseProductInfoBannerTech(d.productInfoBannerMiniSpa),
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
    },
    beforeAfterBanner: mapBeforeAfterBanner(d.beforeAfterBanner)
  }
}
