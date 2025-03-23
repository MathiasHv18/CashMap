package com.cashmap.service;

import com.cashmap.dto.request.TransactionRequestDTO;
import com.cashmap.dto.response.TransactionResponseDTO;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.UserTransaction;

import java.util.List;

public interface TransactionService {
    TransactionResponseDTO createTransaction(TransactionRequestDTO requestDTO);
    Transaction getTransactionById(Integer id);
    void deleteTransaction(Integer id);
    List<TransactionResponseDTO> getUserTransactions(Integer userId);
}
