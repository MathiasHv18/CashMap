package com.cashmap.service.impl;

import com.cashmap.entity.CategoryTransaction;
import com.cashmap.repository.CategoryTransactionRepository;
import com.cashmap.service.CategoryTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class CategoryTransactionServiceImpl implements CategoryTransactionService {

    @Autowired
    private CategoryTransactionRepository categoryTransactionRepository;

    @Transactional
    @Override
    public CategoryTransaction createCategory(CategoryTransaction categoryTransaction) {
        return categoryTransactionRepository.save(categoryTransaction);
    }

    @Transactional
    @Override
    public List<CategoryTransaction> getAllCategories() {
        return categoryTransactionRepository.findAll();
    }

    //@Transactional
    //Override
    //public void deleteCategory(Integer id) {
        //categoryTransactionRepository.deleteById(id);
    //}
}
