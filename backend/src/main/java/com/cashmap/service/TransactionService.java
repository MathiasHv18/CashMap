package com.cashmap.service;

import com.cashmap.dto.request.TransactionRequestDTO;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.UserTransaction;

public interface TransactionService {
    UserTransaction createTransaction(TransactionRequestDTO requestDTO);
    Transaction getTransactionById(Integer id);
    void deleteTransaction(Integer id);
}
