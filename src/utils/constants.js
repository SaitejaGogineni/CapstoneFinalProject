import React from 'react'
import { GiCompass, GiDiamondHard, GiStabbedNote } from 'react-icons/gi'
export const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'about',
    url: '/about',
  },
  {
    id: 3,
    text: 'products',
    url: '/products',
  },
]

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: 'mission',
    text:
      'Our mission as a business is to offer a wide range of well-designed functional home furnishing products at prices so low that as many people as possible will be able to afford them' ,
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: 'vision',
    text:
      'Our vision also goes beyond home furnishing. We want to create a better everyday for all people impacted by our business.',
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: 'history',
    text:
      'The origins of IKEA date back to 1943 when Ingvar Kamprad founded IKEA at the age of 17. The business mainly consisted of selling household goods like pens, wallets and picture frames',
  },
]

export const products_url = 'https://course-api.com/react-store-products'

export const single_product_url = `https://course-api.com/react-store-single-product?id=`
