export function formatPrice(price: string, currency: string) {
  return new Intl.NumberFormat(["at", "hu"], {
    currency: currency,
    style: "currency",
    currencyDisplay: "symbol",
  }).format(Number(price));
}
