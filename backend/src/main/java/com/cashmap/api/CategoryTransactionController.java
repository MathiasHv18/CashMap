package com.cashmap.api;

import com.cashmap.entity.CategoryTransaction;
import com.cashmap.entity.Transaction;
import com.cashmap.repository.CategoryTransactionRepository;
import com.cashmap.service.CategoryTransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/categoryTransaction")
public class CategoryTransactionController {

    @Autowired
    private CategoryTransactionService categoryTransactionService;

    @PostMapping
    public ResponseEntity<CategoryTransaction> createCategory(@RequestBody CategoryTransaction categoryTransaction){
        CategoryTransaction newCategory = categoryTransactionService.createCategory(categoryTransaction);
        return new ResponseEntity<CategoryTransaction>(newCategory, HttpStatus.CREATED);
    }


}
