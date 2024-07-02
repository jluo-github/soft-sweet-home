export const formatCurrency = (amount: number | null) => {
  const val = amount || 0;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(val);
};
