/**
 * Loan fee schedule.
 * Fees scale linearly with loan amount, anchored on the user-provided sample:
 *   1000–3000 KES  →  14d: 200, 21d: 250, 30d: 300
 * Max loan: 150,000 KES
 */

interface FeeRange {
  min: number;
  max: number;
  fees: Record<string, number>; // keyed by period in days
}

const FEE_TABLE: FeeRange[] = [
  { min: 500, max: 3000, fees: { "14": 200, "21": 250, "30": 300 } },
  { min: 3001, max: 5000, fees: { "14": 350, "21": 450, "30": 550 } },
  { min: 5001, max: 10000, fees: { "14": 600, "21": 750, "30": 900 } },
  { min: 10001, max: 20000, fees: { "14": 1000, "21": 1250, "30": 1500 } },
  { min: 20001, max: 35000, fees: { "14": 1500, "21": 1900, "30": 2300 } },
  { min: 35001, max: 50000, fees: { "14": 2000, "21": 2500, "30": 3000 } },
  { min: 50001, max: 75000, fees: { "14": 3000, "21": 3750, "30": 4500 } },
  { min: 75001, max: 100000, fees: { "14": 4000, "21": 5000, "30": 6000 } },
  { min: 100001, max: 150000, fees: { "14": 5000, "21": 6250, "30": 7500 } },
];

export function getLoanFee(amount: number, period: string): number | null {
  const range = FEE_TABLE.find((r) => amount >= r.min && amount <= r.max);
  if (!range) return null;
  return range.fees[period] ?? null;
}

export function formatKES(amount: number): string {
  return `KES ${amount.toLocaleString()}`;
}
