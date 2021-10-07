export interface Loan {
   "id": number,
   "title": string,
   "tranche":  string,
   "available": number,
   "annualised_return": number,
   "term_remaining": number,
   "ltv": number,
   "amount": number,
   "isInvested": boolean
}
