export interface TransactionRequest {
  amount: number;
  concept: string;
  date: string;
  userId: number;
  idCategoryTransaction: number;
  idTypeTran: number;
}

export interface TransactionResponse {
  idTransaction: number;
  amount: number;
  concept: string;
  date: string;
  userName: string;
  categoryDescription: {
    idCategoryTransaction: number;
    categoryTransaction: string;
  };
  typeDescription: string;
}
