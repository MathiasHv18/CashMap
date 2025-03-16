export interface TransactionRequest {
  amount: number;
  concept: string;
  date: string;
  userId: number;
  categoryTransaction: string;
  idTypeTran: number;
}

export interface TransactionResponse {
  idTransaction: number;
  amount: number;
  concept: string;
  date: string;
  userName: string;
  categoryDescription: string;
  typeDescription: string;
}
