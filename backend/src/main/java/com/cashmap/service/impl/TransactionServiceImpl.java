package com.cashmap.service.impl;

import com.cashmap.entity.Transaction;
import com.cashmap.repository.TransactionRepository;
import com.cashmap.service.TransactionService;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Transactional
    @Override
    public Transaction createTransaction(Transaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Transactional(readOnly = true)
    @Override
    public Transaction getTransactionById(Integer id) {
        return transactionRepository.findById(id).orElseThrow(() -> new RuntimeException("Transaction not found"));
    }

    @Transactional
    @Override
    public void deleteTransaction(Integer id) {
        transactionRepository.deleteById(id);
    }
}
