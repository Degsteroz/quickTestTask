import { DEFAULT_IMAGE } from 'src/config'

export function formatMoney(price: number): string {
  return String(price) + 'Є'
}

export function formatTitle(productTitle: string): string {
  const firstLetter = productTitle[0].toUpperCase()
  const restPart = productTitle.substring(1)

  return firstLetter + restPart
}

export function formatDiscount(discount: number) {
  return `${Math.floor(discount as number * 100)}%`
}

export function generateOldPrice (price: number, discount: number) {
  return Math.floor(price / (1 - discount))
}

export function getDefaultImage () {
  const imageIndex = Math.floor(Math.random() * DEFAULT_IMAGE.length)

  return DEFAULT_IMAGE[imageIndex]
}

export function getCartHeaderByCount (count: number) {
  return `${count} item${count > 1 ? 's' : ''}`
}
