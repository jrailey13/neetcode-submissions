class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        minBuy = prices[0]
        profit = 0

        for i in range(len(prices)):
            if prices[i] < minBuy:
                minBuy = prices[i]
            
            elif prices[i] - minBuy > profit:
                profit = prices[i] - minBuy
        
        return profit
            
            
            
            