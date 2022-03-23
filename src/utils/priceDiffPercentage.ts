const priceDiffPercentage = (prevPrice: number, currPrice: number) => {
  const diff = (currPrice - prevPrice) / prevPrice
  return diff * 100
}

export default priceDiffPercentage
