import BigNumberJs from 'bignumber.js'

export function toTokenValueString(value: string, base = 10, precision: number): string {
  const bigNumber = new BigNumberJs(value, base)
    const result = bigNumber.shiftedBy(4)
    return result.toFixed() 
}