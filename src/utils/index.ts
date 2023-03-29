export function formatMoney(price: number): string {
  return String(price) + 'Є'
}

export function formatTitle(productTitle: string): string {
  const firstLetter = productTitle[0].toUpperCase()
  const restPart = productTitle.substring(1)

  return firstLetter + restPart
}
