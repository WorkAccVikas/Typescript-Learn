// TOPIC: ✅ Prefer readonly for function parameters.

function calculateTotal(prices: number[]) {
  prices.push(55);
  return prices.reduce((a, b) => a + b, 0);
}
function calculateTotal2(prices: readonly number[]) {
  prices.push(55); // ! : Argument of type 'number' is not assignable to parameter of type 'readonly number'.
  return prices.reduce((a, b) => a + b, 0);
}

const total2 = calculateTotal2([10, 20, 30]);
