package com.cashmap.service;

import com.cashmap.entity.CategoryTransaction;

import java.util.List;

public interface CategoryTransactionService {
    CategoryTransaction createCategory(Integer userId ,CategoryTransaction categoryTransaction);
    List<CategoryTransaction> getCategoriesByUser(Integer userId);
    //void deleteCategory(Integer id);
}