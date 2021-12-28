function maxProfit(prices: number[]): number {
  let highestProfit: number = -Infinity;
  let cheapestBuy: number = prices[0];

  for (let i = 1; i < prices.length; i++) {
    const buy: number = prices[i];
    highestProfit = Math.max(highestProfit, buy - cheapestBuy);
    cheapestBuy = Math.min(cheapestBuy, buy);
  }

  return highestProfit;
}

console.log(maxProfit([7, 6, 4, 3, 1]));
