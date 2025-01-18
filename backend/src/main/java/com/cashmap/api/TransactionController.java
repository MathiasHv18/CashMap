package com.cashmap.api;

import com.cashmap.dto.request.TransactionRequestDTO;
import com.cashmap.dto.response.TransactionResponseDTO;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.UserTransaction;
import com.cashmap.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;


    @PostMapping
    public ResponseEntity<UserTransaction> createTransaction(@RequestBody TransactionRequestDTO requestDTO){
        UserTransaction newTransaction = transactionService.createTransaction(requestDTO);
        return new ResponseEntity<UserTransaction>(newTransaction, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Transaction> getTransactionById(@PathVariable Integer id){
        Transaction transaction = transactionService.getTransactionById(id);
        return new ResponseEntity<Transaction>(transaction, HttpStatus.OK);
    }

    @GetMapping("/user/{userId}")
    public ResponseEntity<List<TransactionResponseDTO>> getUserTransactions(@PathVariable Integer userId){
        List<TransactionResponseDTO> transactions = transactionService.getUserTransactions(userId);
        return new ResponseEntity<List<TransactionResponseDTO>>(transactions, HttpStatus.OK);
    }
}
