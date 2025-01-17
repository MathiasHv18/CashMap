package com.cashmap.service.impl;

import com.cashmap.dto.request.TransactionRequestDTO;
import com.cashmap.entity.*;
import com.cashmap.repository.*;
import com.cashmap.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private UserTransactionRepository userTransactionRepository;

    @Autowired
    private CategoryTransactionRepository categoryTransactionRepository;

    @Autowired
    private TypeTransactionRepository typeTransactionRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    @Override
    public UserTransaction createTransaction(TransactionRequestDTO requestDTO) {
        // Crear la transacción
        Transaction transaction = new Transaction();
        transaction.setAmount(requestDTO.getAmount());
        transaction.setConcept(requestDTO.getConcept());
        transaction.setDate(LocalDate.parse(requestDTO.getDate()));

        // Validar y asignar categoría
        CategoryTransaction category = categoryTransactionRepository.findById(requestDTO.getIdCategoryTran())
                .orElseThrow(() -> new RuntimeException("Categoría no encontrada"));
        transaction.setCategoryTransaction(category);

        // Validar y asignar tipo de transacción
        TypeTransaction type = typeTransactionRepository.findById(requestDTO.getIdTypeTran())
                .orElseThrow(() -> new RuntimeException("Tipo no encontrado"));
        transaction.setTypeTransaction(type);

        // Guardar la transacción
        Transaction savedTransaction = transactionRepository.save(transaction);

        // Validar el usuario
        User user = userRepository.findById(requestDTO.getUserId())
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        // Crear el ID compuesto
        UserTransactionId userTransactionId = new UserTransactionId();
        userTransactionId.setUser(user.getIdUser());
        userTransactionId.setTransaction(savedTransaction.getIdTransaction());

        // Crear la entidad UserTransaction
        UserTransaction userTransaction = new UserTransaction();
        userTransaction.setId(userTransactionId);
        userTransaction.setUser(user);
        userTransaction.setTransaction(savedTransaction);

        // Guardar la relación UserTransaction
        return userTransactionRepository.save(userTransaction);
    }

    @Transactional(readOnly = true)
    @Override
    public Transaction getTransactionById(Integer id) {
        return transactionRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Transaction not found"));
    }

    @Transactional
    @Override
    public void deleteTransaction(Integer id) {
        transactionRepository.deleteById(id);
    }
}
