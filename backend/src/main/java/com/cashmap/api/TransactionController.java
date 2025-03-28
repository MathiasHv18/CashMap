package com.cashmap.api;

import com.cashmap.dto.request.TransactionRequestDTO;
import com.cashmap.dto.response.TransactionResponseDTO;
import com.cashmap.entity.Transaction;
import com.cashmap.entity.User;
import com.cashmap.entity.UserTransaction;
import com.cashmap.service.TransactionService;
import com.cashmap.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@PreAuthorize("hasAnyRole('USER', 'ADMINISTRATOR')")
@RestController
@RequestMapping("/transaction")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;
    @Autowired
    private UserService userService;


    @PostMapping
    public ResponseEntity<TransactionResponseDTO> createTransaction(@RequestBody TransactionRequestDTO requestDTO, @RequestHeader("Authorization") String bearerToken){
        User user = userService.getUser(bearerToken);
        TransactionResponseDTO newTransaction = transactionService.createTransaction(requestDTO);
        return new ResponseEntity<TransactionResponseDTO>(newTransaction, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TransactionResponseDTO>> getUserTransactions(@RequestHeader("Authorization") String bearerToken){
        User user = userService.getUser(bearerToken);
        List<TransactionResponseDTO> transactions = transactionService.getUserTransactions(user.getIdUser());
        return new ResponseEntity<List<TransactionResponseDTO>>(transactions, HttpStatus.OK);
    }
}
