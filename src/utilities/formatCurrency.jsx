const CURRENCY_FORMATTER = new Intl.NumberFormat("en-in", {
  currency: "INR",
  style: "currency",
});

export function formatCurrency(number) {
  return CURRENCY_FORMATTER.format(number);
}
