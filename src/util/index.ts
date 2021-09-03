export const formatMoney = (value: number) => {
    return Intl.NumberFormat("en", {
      style: "currency",
      currency: "USD",
    }).format(value);
  };