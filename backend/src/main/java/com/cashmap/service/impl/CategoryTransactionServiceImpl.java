package com.cashmap.service.impl;

import com.cashmap.entity.CategoryTransaction;
import com.cashmap.entity.User;
import com.cashmap.repository.CategoryTransactionRepository;
import com.cashmap.repository.UserRepository;
import com.cashmap.service.CategoryTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryTransactionServiceImpl implements CategoryTransactionService {

    @Autowired
    private CategoryTransactionRepository categoryTransactionRepository;
    @Autowired
    private UserRepository userRepository;

    @Transactional
    @Override
    public CategoryTransaction createCategory(Integer userId, CategoryTransaction categoryTransaction) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("Usuario no encontrado"));

        categoryTransaction.setUser(user);
        return categoryTransactionRepository.save(categoryTransaction);
    }

    @Transactional(readOnly = true)
    @Override
    public List<CategoryTransaction> getCategoriesByUser(Integer userId) {
        return categoryTransactionRepository.findByUser_IdUser(userId);
    }

    //@Transactional
    //Override
    //public void deleteCategory(Integer id) {
        //categoryTransactionRepository.deleteById(id);
    //}
}
