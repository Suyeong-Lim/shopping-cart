export const convertName = (name: string) => {
  const LENGTH = 13;
  return name.length > LENGTH ? name.slice(0, LENGTH + 1).concat("...") : name;
};

export const convertPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
