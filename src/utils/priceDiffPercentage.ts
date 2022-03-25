const priceDiffPercentage = (prevPrice: number, currPrice: number) => {
  let diff = (currPrice - prevPrice) / prevPrice
  diff = Number((diff * 100000).toFixed(0))
  return diff
}

export default priceDiffPercentage
