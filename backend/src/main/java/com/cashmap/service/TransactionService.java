package com.cashmap.service;

import com.cashmap.entity.Transaction;

public interface TransactionService {
    Transaction createTransaction(Transaction transaction);
    Transaction getTransactionById(Integer id);
    void deleteTransaction(Integer id);
}
